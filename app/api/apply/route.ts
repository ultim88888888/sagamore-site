import { NextRequest, NextResponse } from "next/server";

const JOTFORM_FORM_ID = "260337202144041";
const JOTFORM_API_URL = `https://api.jotform.com/form/${JOTFORM_FORM_ID}/submissions`;

/**
 * JotForm API submission format uses `submission[qid_subfield]` keys.
 *
 * Field ID mapping (verified against JotForm HTML source and API):
 *   qid 3:  businessName       (textbox)
 *   qid 4:  dbaName            (textbox)
 *   qid 17: federalTax         (textbox — EIN)
 *   qid 18: legalEntity        (radio — entity type)
 *   qid 19: businessStart      (datetime — month/day/year)
 *   qid 21: firstName          (textbox)
 *   qid 22: lastName           (textbox)
 *   qid 23: email              (email)
 *   qid 24: phoneNumber        (phone — full)
 *   qid 25: homeAddress        (address — addr_line1/city/state/postal)
 *   qid 26: dateOf             (datetime — DOB month/day/year)
 *   qid 27: socialSecurity     (textbox)
 *   qid 28: ownershipPercentage (number)
 *   qid 29: creditScore        (number)
 *   qid 32: uploadYour         (file upload)
 *   qid 40: date               (datetime — signature date month/day/year)
 *   qid 43: businessAddress    (address — addr_line1/city/state/postal)
 *   qid 51: signature          (skipped — checkbox + date suffices)
 */

interface ApplicationPayload {
  businessName: string;
  dba: string;
  businessAddress: string;
  businessCity: string;
  businessState: string;
  businessZip: string;
  ein: string;
  entityType: string;
  startDate: string; // ISO date string YYYY-MM-DD
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  homeAddress: string;
  homeCity: string;
  homeState: string;
  homeZip: string;
  dob: string; // ISO date string YYYY-MM-DD
  ssn: string;
  ownership: string;
  creditScore: string;
  signatureDate: string; // ISO date string YYYY-MM-DD
}

/** Parse YYYY-MM-DD into { month, day, year } for JotForm datetime fields. */
function parseDateParts(isoDate: string): {
  month: string;
  day: string;
  year: string;
} {
  const parts = isoDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!parts) throw new Error(`Invalid date format: ${isoDate}`);
  const [, year, month, day] = parts;
  return { month, day, year };
}

/** Build the flat submission object JotForm's POST API expects. */
function buildSubmissionData(
  payload: ApplicationPayload
): Record<string, string> {
  const startDate = parseDateParts(payload.startDate);
  const dob = parseDateParts(payload.dob);
  const sigDate = parseDateParts(payload.signatureDate);

  return {
    // Simple text fields
    "submission[3]": payload.businessName,
    "submission[4]": payload.dba,
    "submission[17]": payload.ein,
    "submission[18]": payload.entityType,
    "submission[21]": payload.firstName,
    "submission[22]": payload.lastName,
    "submission[23]": payload.email,
    "submission[27]": payload.ssn,
    "submission[28]": payload.ownership,
    "submission[29]": payload.creditScore,

    // Phone — full format
    "submission[24_full]": payload.phone,

    // Business address (qid 43)
    "submission[43_addr_line1]": payload.businessAddress,
    "submission[43_city]": payload.businessCity,
    "submission[43_state]": payload.businessState,
    "submission[43_postal]": payload.businessZip,

    // Home address (qid 25)
    "submission[25_addr_line1]": payload.homeAddress,
    "submission[25_city]": payload.homeCity,
    "submission[25_state]": payload.homeState,
    "submission[25_postal]": payload.homeZip,

    // Business start date (qid 19)
    "submission[19_month]": startDate.month,
    "submission[19_day]": startDate.day,
    "submission[19_year]": startDate.year,

    // Date of birth (qid 26)
    "submission[26_month]": dob.month,
    "submission[26_day]": dob.day,
    "submission[26_year]": dob.year,

    // Signature date (qid 40)
    "submission[40_month]": sigDate.month,
    "submission[40_day]": sigDate.day,
    "submission[40_year]": sigDate.year,
  };
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.JOTFORM_API_KEY;
  if (!apiKey) {
    console.error("JOTFORM_API_KEY environment variable is not set");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  let payload: ApplicationPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  // Basic server-side validation — the client validates too, but never trust the client
  const required: (keyof ApplicationPayload)[] = [
    "businessName",
    "businessAddress",
    "businessCity",
    "businessState",
    "businessZip",
    "ein",
    "entityType",
    "startDate",
    "firstName",
    "lastName",
    "email",
    "phone",
    "homeAddress",
    "homeCity",
    "homeState",
    "homeZip",
    "dob",
    "ssn",
    "ownership",
    "creditScore",
    "signatureDate",
  ];

  const missing = required.filter((field) => !payload[field]);
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  let submissionData: Record<string, string>;
  try {
    submissionData = buildSubmissionData(payload);
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Invalid date field format" },
      { status: 400 }
    );
  }

  // JotForm POST API accepts URL-encoded form data with API key in header
  const body = new URLSearchParams(submissionData);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await fetch(JOTFORM_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        APIKEY: apiKey,
      },
      body: body.toString(),
      signal: controller.signal,
    });

    const result = await response.json();

    if (response.ok && result.responseCode === 200) {
      return NextResponse.json({
        success: true,
        submissionId: result.content?.submissionID ?? null,
      });
    }

    // JotForm returned an error
    console.error("JotForm API error:", {
      status: response.status,
      responseCode: result.responseCode,
      message: result.message,
    });

    return NextResponse.json(
      {
        error:
          result.message || "JotForm rejected the submission. Please try again.",
      },
      { status: 502 }
    );
  } catch (err) {
    console.error("Failed to reach JotForm API:", err);
    return NextResponse.json(
      { error: "Unable to reach the submission service. Please try again." },
      { status: 503 }
    );
  } finally {
    clearTimeout(timeout);
  }
}
