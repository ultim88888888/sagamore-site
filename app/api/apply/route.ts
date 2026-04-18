import { NextRequest, NextResponse } from "next/server";
import { einSchema, ssnSchema, stripFormatting } from "@/lib/validation";

const JOTFORM_FORM_ID = "260337202144041";
const JOTFORM_UPLOAD_URL = "https://upload.jotform.com/upload";
const JOTFORM_SUBMIT_URL = `https://submit.jotform.com/submit/${JOTFORM_FORM_ID}`;

/**
 * JotForm native form submission uses `q{qid}_{fieldName}` keys — NOT the
 * REST API's `submission[qid]` format. We submit through submit.jotform.com
 * (the same endpoint browsers use) because it's the only path that properly
 * handles file uploads via the temp_upload mechanism.
 *
 * File upload flow:
 *   1. Upload PDF to upload.jotform.com/upload (binary body, octet-stream)
 *   2. Get back {message: filename, fileServer: "...", success: true}
 *   3. Include temp_upload_folder, temp_upload[q32_uploadYour][], and
 *      file_server fields in the form submission
 *   4. JotForm moves the file from temp storage to permanent submission storage
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
 *   qid 51: signature          (required by submit endpoint — send 1x1 PNG placeholder)
 */

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const REQUIRED_FIELDS = [
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
] as const;

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

/**
 * Upload a file to JotForm's upload server.
 *
 * Uses the same protocol as JotForm's browser-side uploader: binary body
 * with Content-Type: application/octet-stream, filename in query params.
 * Returns the filename and fileServer identifier needed for form submission.
 */
async function uploadFileToJotForm(
  fileBytes: ArrayBuffer,
  fileName: string,
  tempFolder: string
): Promise<{ fileName: string; fileServer: string }> {
  const params = new URLSearchParams({
    action: "multipleUpload",
    field: "q32_uploadYour",
    folder: tempFolder,
    origin: "https://sagamorefinancialgroup.com",
    qqfile: fileName,
  });

  const response = await fetch(`${JOTFORM_UPLOAD_URL}?${params}`, {
    method: "POST",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "X-File-Name": encodeURIComponent(fileName),
      "Content-Type": "application/octet-stream",
    },
    body: new Blob([fileBytes]),
  });

  if (!response.ok) {
    throw new Error(`Upload server returned ${response.status}`);
  }

  const result = (await response.json()) as {
    message: string;
    fileServer: string;
    success: boolean;
  };

  if (!result.success) {
    throw new Error("Upload server rejected the file");
  }

  return { fileName: result.message, fileServer: result.fileServer };
}

/**
 * Build URL-encoded form body for submit.jotform.com.
 *
 * The native submit endpoint uses `q{qid}_{fieldName}` format for simple
 * fields and `q{qid}_{fieldName}[subfield]` for compound types (address,
 * datetime, phone).
 */
function buildSubmitBody(
  fields: Record<string, string>,
  fileUpload?: { fileName: string; fileServer: string; tempFolder: string }
): URLSearchParams {
  const startDate = parseDateParts(fields.startDate);
  const dob = parseDateParts(fields.dob);
  const sigDate = parseDateParts(fields.signatureDate);

  const data: Record<string, string> = {
    // Hidden fields required by submit.jotform.com
    formID: JOTFORM_FORM_ID,
    simple_spc: `${JOTFORM_FORM_ID}-${JOTFORM_FORM_ID}`,
    jsExecutionTracker: "build-date-api",
    submitSource: "api",
    buildDate: "0",
    uploadServerUrl: JOTFORM_UPLOAD_URL,
    eventObserver: "1",

    // Simple text fields
    q3_businessName: fields.businessName,
    q4_dbaName: fields.dba || "",
    q17_federalTax: fields.ein,
    q18_legalEntity: fields.entityType,
    q21_firstName: fields.firstName,
    q22_lastName: fields.lastName,
    q23_email: fields.email,
    q27_socialSecurity: fields.ssn,
    q28_ownershipPercentage: fields.ownership,
    q29_creditScore: fields.creditScore,

    // Phone
    "q24_phoneNumber[full]": fields.phone,

    // Business address (qid 43)
    "q43_businessAddress[addr_line1]": fields.businessAddress,
    "q43_businessAddress[city]": fields.businessCity,
    "q43_businessAddress[state]": fields.businessState,
    "q43_businessAddress[postal]": fields.businessZip,

    // Home address (qid 25)
    "q25_homeAddress[addr_line1]": fields.homeAddress,
    "q25_homeAddress[city]": fields.homeCity,
    "q25_homeAddress[state]": fields.homeState,
    "q25_homeAddress[postal]": fields.homeZip,

    // Business start date (qid 19)
    "q19_businessStart[month]": startDate.month,
    "q19_businessStart[day]": startDate.day,
    "q19_businessStart[year]": startDate.year,

    // Date of birth (qid 26)
    "q26_dateOf[month]": dob.month,
    "q26_dateOf[day]": dob.day,
    "q26_dateOf[year]": dob.year,

    // Signature date (qid 40)
    "q40_date[month]": sigDate.month,
    "q40_date[day]": sigDate.day,
    "q40_date[year]": sigDate.year,

    // Signature — JotForm marks this required. Our UI uses a checkbox + date
    // instead of a drawn signature, so we send a minimal 1x1 transparent PNG
    // data URI to satisfy the validation. The certification is captured by the
    // checkbox agreement + signature date fields.
    q51_signature:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQI12NgAAIABQABNjN9GQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAA0lEQVQI12P4z8BQDwAEgAF/QualIQAAAABJRU5ErkJggg==",
  };

  // File upload references — these tell submit.jotform.com where to find the
  // pre-uploaded file on the upload server and move it to permanent storage.
  if (fileUpload) {
    data.temp_upload_folder = fileUpload.tempFolder;
    data["temp_upload[q32_uploadYour][]"] =
      `${fileUpload.fileName}#${fileUpload.fileServer}`;
    data.file_server = fileUpload.fileServer;
  }

  return new URLSearchParams(data);
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

  // Parse multipart form data from client
  let formData: globalThis.FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  // Extract text fields
  const fields: Record<string, string> = {};
  for (const key of REQUIRED_FIELDS) {
    const value = formData.get(key);
    if (typeof value === "string") {
      fields[key] = value;
    }
  }
  // Optional field
  fields.dba = (formData.get("dba") as string) || "";

  // Validate required fields
  const missing = REQUIRED_FIELDS.filter((f) => !fields[f]);
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  // Validate EIN and SSN format — never trust the client
  const einResult = einSchema.safeParse(fields.ein);
  if (!einResult.success) {
    return NextResponse.json(
      { error: "Invalid EIN format. Expected XX-XXXXXXX." },
      { status: 400 }
    );
  }

  const ssnResult = ssnSchema.safeParse(fields.ssn);
  if (!ssnResult.success) {
    return NextResponse.json(
      { error: "Invalid SSN format. Expected XXX-XX-XXXX." },
      { status: 400 }
    );
  }

  // Strip formatting for JotForm — send raw digits
  fields.ein = stripFormatting(fields.ein);
  fields.ssn = stripFormatting(fields.ssn);

  // Validate date formats before proceeding
  try {
    parseDateParts(fields.startDate);
    parseDateParts(fields.dob);
    parseDateParts(fields.signatureDate);
  } catch (err) {
    return NextResponse.json(
      {
        error:
          err instanceof Error ? err.message : "Invalid date field format",
      },
      { status: 400 }
    );
  }

  // Handle file upload
  let fileUpload:
    | { fileName: string; fileServer: string; tempFolder: string }
    | undefined;

  const file = formData.get("bankStatement");
  if (file && file instanceof File && file.size > 0) {
    // Validate file
    if (file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Bank statement must be a PDF file" },
        { status: 400 }
      );
    }
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File size exceeds 10MB limit" },
        { status: 400 }
      );
    }

    // Sanitize filename — strip path separators and special chars
    const safeName = file.name
      .replace(/[/\\:*?"<>|]/g, "_")
      .replace(/\s+/g, "_")
      .slice(0, 100);

    const tempFolder = crypto.randomUUID().replace(/-/g, "").slice(0, 16);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const uploadResult = await uploadFileToJotForm(
        arrayBuffer,
        safeName,
        tempFolder
      );
      fileUpload = { ...uploadResult, tempFolder };
    } catch (err) {
      console.error("File upload to JotForm failed:", err);
      return NextResponse.json(
        { error: "Failed to upload bank statement. Please try again." },
        { status: 502 }
      );
    }
  }

  // Submit to JotForm
  const submitBody = buildSubmitBody(fields, fileUpload);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);

  try {
    const response = await fetch(JOTFORM_SUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: submitBody.toString(),
      signal: controller.signal,
      redirect: "manual", // submit.jotform.com returns 301 on success
    });

    // submit.jotform.com returns 200 with a "thank you" HTML page on success,
    // or 301 redirect to the thank you page. 400 means missing/invalid fields.
    if (response.status === 200 || response.status === 301) {
      // Try to extract submission ID from the response/redirect URL.
      // The thank you page URL sometimes contains the submission ID, but
      // it's not guaranteed. We use the API to look up the latest submission
      // to get the ID reliably.
      let submissionId: string | null = null;
      try {
        const lookupResp = await fetch(
          `https://api.jotform.com/form/${JOTFORM_FORM_ID}/submissions?apiKey=${apiKey}&limit=1&orderby=created_at`,
          { signal: AbortSignal.timeout(5_000) }
        );
        const lookupData = (await lookupResp.json()) as {
          content?: Array<{ id: string }>;
        };
        submissionId = lookupData.content?.[0]?.id ?? null;
      } catch {
        // Non-critical — submission succeeded even if we can't get the ID
      }

      return NextResponse.json({ success: true, submissionId });
    }

    // JotForm returned an error
    console.error("JotForm submit error:", {
      status: response.status,
      statusText: response.statusText,
    });

    return NextResponse.json(
      {
        error:
          "JotForm rejected the submission. Please check all fields and try again.",
      },
      { status: 502 }
    );
  } catch (err) {
    console.error("Failed to reach JotForm:", err);
    return NextResponse.json(
      { error: "Unable to reach the submission service. Please try again." },
      { status: 503 }
    );
  } finally {
    clearTimeout(timeout);
  }
}
