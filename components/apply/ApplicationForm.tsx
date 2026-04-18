"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { Button } from "@/components/ui/Button";
import { formatEIN, formatSSN, applicationSchema } from "@/lib/validation";

const API_ENDPOINT = "/api/apply";

type Step = 1 | 2 | 3 | 4;

interface FormData {
  businessName: string;
  dba: string;
  businessAddress: string;
  businessCity: string;
  businessState: string;
  businessZip: string;
  ein: string;
  entityType: string;
  startDate: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  homeAddress: string;
  homeCity: string;
  homeState: string;
  homeZip: string;
  dob: string;
  ssn: string;
  ownership: string;
  creditScore: string;
  termsAgreed: boolean;
  signatureDate: string;
}

const initialFormData: FormData = {
  businessName: "",
  dba: "",
  businessAddress: "",
  businessCity: "",
  businessState: "",
  businessZip: "",
  ein: "",
  entityType: "",
  startDate: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  homeAddress: "",
  homeCity: "",
  homeState: "",
  homeZip: "",
  dob: "",
  ssn: "",
  ownership: "",
  creditScore: "",
  termsAgreed: false,
  signatureDate: "",
};

const stepLabels = ["Business", "Details", "Owner", "Review"];

const entityTypes = [
  "Sole Proprietorship",
  "Corporation",
  "LLC",
  "Partnership",
  "Other",
];

// Intentionally more granular than the hero calculator's binary "600+" / "Below 600" —
// the calculator is a quick estimate, the application collects data for underwriting.
const creditRanges = [
  "Excellent (720+)",
  "Good (680-719)",
  "Fair (600-679)",
  "Below 600",
];

function InputField({
  label,
  required = false,
  error,
  ...props
}: {
  label: string;
  required?: boolean;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = props.id ?? `apply-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink mb-1.5">
        {label}
        {required && <span className="text-error ml-0.5">*</span>}
      </label>
      <input
        {...props}
        id={id}
        required={required}
        className={`w-full px-4 py-2.5 rounded-lg border text-ink bg-white placeholder:text-ink-faint focus:ring-1 outline-none transition-colors text-sm ${
          error
            ? "border-error focus:border-error focus:ring-error/30"
            : "border-rule focus:border-azure focus:ring-azure/30"
        }`}
      />
      {error && <p className="text-error text-xs mt-1">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  options,
  required = false,
  ...props
}: {
  label: string;
  options: string[];
  required?: boolean;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  const id = props.id ?? `apply-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink mb-1.5">
        {label}
        {required && <span className="text-error ml-0.5">*</span>}
      </label>
      <select
        {...props}
        id={id}
        required={required}
        className="w-full px-4 py-2.5 rounded-lg border border-rule text-ink bg-white focus:border-azure focus:ring-1 focus:ring-azure/30 outline-none transition-colors text-sm cursor-pointer appearance-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 5l3 3 3-3' stroke='%237a7f8e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
        }}
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export function ApplicationForm() {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState<FormData>(initialFormData);
  const [bankStatement, setBankStatement] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const update = (field: keyof FormData, value: string | boolean) => {
    setData((prev) => ({ ...prev, [field]: value }));
    // Clear inline error for this field when the user edits it
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setError("Please upload a PDF file.");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setError("File size exceeds 10MB limit.");
        return;
      }
      setBankStatement(file);
      setError("");
    }
  };

  const canAdvance = (): boolean => {
    switch (step) {
      case 1:
        return !!(
          data.businessName &&
          data.businessAddress &&
          data.businessCity &&
          data.businessState &&
          data.businessZip
        );
      case 2:
        return !!(data.ein && data.entityType && data.startDate);
      case 3:
        return !!(
          data.firstName &&
          data.lastName &&
          data.email &&
          data.phone &&
          data.homeAddress &&
          data.homeCity &&
          data.homeState &&
          data.homeZip &&
          data.dob &&
          data.ssn &&
          data.ownership &&
          data.creditScore
        );
      case 4:
        return !!(data.termsAgreed && data.signatureDate);
      default:
        return false;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!canAdvance()) return;

    // Client-side Zod validation
    const result = applicationSchema.safeParse(data);
    if (!result.success) {
      const errors: Partial<Record<keyof FormData, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FormData;
        if (!errors[field]) {
          errors[field] = issue.message;
        }
      }
      setFieldErrors(errors);

      // Navigate to the step containing the first error
      const errorFields = Object.keys(errors) as (keyof FormData)[];
      const step1Fields: (keyof FormData)[] = ["businessName", "dba", "businessAddress", "businessCity", "businessState", "businessZip"];
      const step2Fields: (keyof FormData)[] = ["ein", "entityType", "startDate"];
      const step3Fields: (keyof FormData)[] = ["firstName", "lastName", "email", "phone", "homeAddress", "homeCity", "homeState", "homeZip", "dob", "ssn", "ownership", "creditScore"];
      if (errorFields.some((f) => step1Fields.includes(f))) setStep(1);
      else if (errorFields.some((f) => step2Fields.includes(f))) setStep(2);
      else if (errorFields.some((f) => step3Fields.includes(f))) setStep(3);
      return;
    }

    setFieldErrors({});
    setSubmitting(true);
    setError("");

    try {
      // Send as FormData so the server can forward the file to JotForm
      const body = new FormData();

      // Text fields
      body.append("businessName", data.businessName);
      body.append("dba", data.dba);
      body.append("businessAddress", data.businessAddress);
      body.append("businessCity", data.businessCity);
      body.append("businessState", data.businessState);
      body.append("businessZip", data.businessZip);
      body.append("ein", data.ein);
      body.append("entityType", data.entityType);
      body.append("startDate", data.startDate);
      body.append("firstName", data.firstName);
      body.append("lastName", data.lastName);
      body.append("email", data.email);
      body.append("phone", data.phone);
      body.append("homeAddress", data.homeAddress);
      body.append("homeCity", data.homeCity);
      body.append("homeState", data.homeState);
      body.append("homeZip", data.homeZip);
      body.append("dob", data.dob);
      body.append("ssn", data.ssn);
      body.append("ownership", data.ownership);
      body.append("creditScore", data.creditScore);
      body.append("signatureDate", data.signatureDate);

      // File — only if one was selected
      if (bankStatement) {
        body.append("bankStatement", bankStatement);
      }

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        body,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionId(result.submissionId ?? null);
        setSubmitted(true);
      } else {
        setError(
          result.error ||
            "Something went wrong submitting your application. Please try again."
        );
      }
    } catch {
      setError(
        "Unable to reach our server. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-rule-light text-center">
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-success">
            <path
              d="M20 6L9 17l-5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-ink mb-3">
          Application Received
        </h2>
        <p className="text-ink-secondary leading-relaxed max-w-md mx-auto">
          Thank you for applying with Sagamore Financial Group. Our team will
          review your application and reach out within one business day.
        </p>
        {submissionId && (
          <p className="text-ink-tertiary text-sm mt-4">
            Reference: {submissionId}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-rule-light overflow-hidden">
      {/* Step Indicator */}
      <div className="px-6 sm:px-8 pt-6 sm:pt-8">
        <div className="flex items-center justify-center mb-8">
          {stepLabels.map((label, i) => {
            const stepNum = (i + 1) as Step;
            const isActive = step === stepNum;
            const isComplete = step > stepNum;

            return (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      isComplete
                        ? "bg-accent text-white"
                        : isActive
                          ? "bg-azure-pale text-azure-dark border-2 border-azure"
                          : "bg-surface text-ink-tertiary"
                    }`}
                  >
                    {isComplete ? (
                      <svg viewBox="0 0 16 16" className="w-4 h-4">
                        <path
                          d="M13 4.5L6.5 11L3 7.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    ) : (
                      stepNum
                    )}
                  </div>
                  <span
                    className={`text-xs mt-1.5 hidden sm:block ${
                      isActive ? "text-ink font-medium" : "text-ink-tertiary"
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {i < stepLabels.length - 1 && (
                  <div
                    className={`w-12 sm:w-20 h-px mx-2 sm:mx-3 ${
                      isComplete ? "bg-accent" : "bg-rule-light"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit}>
        <div className="px-6 sm:px-8 pb-6 sm:pb-8">
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-ink mb-1">Business Information</h3>
              <p className="text-sm text-ink-secondary mb-4">
                Tell us about the business seeking funding.
              </p>
              <InputField
                label="Business Name"
                required
                value={data.businessName}
                onChange={(e) => update("businessName", e.target.value)}
                placeholder="Acme Corporation"
              />
              <InputField
                label="DBA (if different)"
                value={data.dba}
                onChange={(e) => update("dba", e.target.value)}
                placeholder="Doing business as..."
              />
              <InputField
                label="Business Address"
                required
                value={data.businessAddress}
                onChange={(e) => update("businessAddress", e.target.value)}
                placeholder="123 Main Street"
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <InputField
                  label="City"
                  required
                  value={data.businessCity}
                  onChange={(e) => update("businessCity", e.target.value)}
                />
                <InputField
                  label="State"
                  required
                  value={data.businessState}
                  onChange={(e) => update("businessState", e.target.value)}
                />
                <InputField
                  label="ZIP Code"
                  required
                  value={data.businessZip}
                  onChange={(e) => update("businessZip", e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-ink mb-1">Business Details</h3>
              <p className="text-sm text-ink-secondary mb-4">
                A few more details about your business structure.
              </p>
              <InputField
                label="EIN (Employer Identification Number)"
                required
                value={data.ein}
                onChange={(e) => update("ein", formatEIN(e.target.value))}
                placeholder="12-3456789"
                maxLength={10}
                error={fieldErrors.ein}
              />
              <SelectField
                label="Entity Type"
                required
                options={entityTypes}
                value={data.entityType}
                onChange={(e) => update("entityType", e.target.value)}
              />
              <InputField
                label="Business Start Date"
                required
                type="date"
                value={data.startDate}
                onChange={(e) => update("startDate", e.target.value)}
              />
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-ink mb-1">Owner Information</h3>
              <p className="text-sm text-ink-secondary mb-4">
                Details about the primary business owner.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="First Name"
                  required
                  value={data.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                />
                <InputField
                  label="Last Name"
                  required
                  value={data.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <InputField
                  label="Email"
                  required
                  type="email"
                  value={data.email}
                  onChange={(e) => update("email", e.target.value)}
                />
                <InputField
                  label="Phone"
                  required
                  type="tel"
                  value={data.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </div>
              <InputField
                label="Home Address"
                required
                value={data.homeAddress}
                onChange={(e) => update("homeAddress", e.target.value)}
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <InputField
                  label="City"
                  required
                  value={data.homeCity}
                  onChange={(e) => update("homeCity", e.target.value)}
                />
                <InputField
                  label="State"
                  required
                  value={data.homeState}
                  onChange={(e) => update("homeState", e.target.value)}
                />
                <InputField
                  label="ZIP Code"
                  required
                  value={data.homeZip}
                  onChange={(e) => update("homeZip", e.target.value)}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <InputField
                  label="Date of Birth"
                  required
                  type="date"
                  value={data.dob}
                  onChange={(e) => update("dob", e.target.value)}
                />
                <InputField
                  label="SSN"
                  required
                  value={data.ssn}
                  onChange={(e) => update("ssn", formatSSN(e.target.value))}
                  placeholder="123-45-6789"
                  maxLength={11}
                  type="password"
                  autoComplete="off"
                  error={fieldErrors.ssn}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <InputField
                  label="Ownership %"
                  required
                  type="number"
                  min="0"
                  max="100"
                  value={data.ownership}
                  onChange={(e) => update("ownership", e.target.value)}
                />
                <SelectField
                  label="Credit Score Range"
                  required
                  options={creditRanges}
                  value={data.creditScore}
                  onChange={(e) => update("creditScore", e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-ink mb-1">
                Documents &amp; Certification
              </h3>
              <p className="text-sm text-ink-secondary mb-4">
                Upload a recent bank statement and certify your application.
              </p>

              <div>
                <label className="block text-sm font-medium text-ink mb-2">
                  Bank Statement (PDF)
                </label>
                <div className="border-2 border-dashed border-rule rounded-lg p-6 text-center">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    id="bankStatement"
                  />
                  <label htmlFor="bankStatement" className="cursor-pointer text-sm">
                    {bankStatement ? (
                      <span className="text-success font-medium">{bankStatement.name}</span>
                    ) : (
                      <span className="text-ink-tertiary">Click to upload a PDF bank statement</span>
                    )}
                  </label>
                </div>
              </div>

              <div className="bg-surface-warm rounded-xl p-5">
                <h4 className="text-sm font-bold text-ink mb-3">Application Summary</h4>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-ink-tertiary">Business:</span>{" "}
                    <span className="text-ink">{data.businessName}</span>
                  </div>
                  <div>
                    <span className="text-ink-tertiary">Entity:</span>{" "}
                    <span className="text-ink">{data.entityType}</span>
                  </div>
                  <div>
                    <span className="text-ink-tertiary">Owner:</span>{" "}
                    <span className="text-ink">{data.firstName} {data.lastName}</span>
                  </div>
                  <div>
                    <span className="text-ink-tertiary">Email:</span>{" "}
                    <span className="text-ink">{data.email}</span>
                  </div>
                  <div>
                    <span className="text-ink-tertiary">Credit:</span>{" "}
                    <span className="text-ink">{data.creditScore}</span>
                  </div>
                  <div>
                    <span className="text-ink-tertiary">Ownership:</span>{" "}
                    <span className="text-ink">{data.ownership}%</span>
                  </div>
                </div>
              </div>

              <div className="border border-rule rounded-lg bg-surface max-h-48 overflow-y-auto p-4 text-xs text-ink-secondary leading-relaxed">
                <p className="mb-3">
                  By signing below, each of the above listed business and business
                  owners (individually and collectively, &quot;Applicant&quot;) certify
                  that all information provided in the application is true and accurate.
                  Applicant shall immediately notify Bayview Holdings Group Inc d/b/a
                  Sagamore Financial Group of any change in such information. Applicant
                  authorizes Sagamore Financial Group to share this application and such
                  other information as obtained hereunder with each of its
                  representatives, successors, assigns, designees and third-party funding
                  partners, which includes lenders and other finance providers with whom
                  Sagamore Financial Group has, or may in the future enter into,
                  commercial-brokerage-financing relationships (collectively,
                  &quot;Recipients&quot;). Further, Applicant authorizes Recipients: (i)
                  to request and receive any consumer, business and/or investigative
                  reports about or of Applicant, from one or more consumer reporting
                  agencies, including but not limited to TransUnion, Experian, and
                  Equifax; (ii) to request and receive such other information from
                  third-parties in connection with underwriting Applicant including but
                  not limited to credit card processor statements and bank statements;
                  and (iii) to transmit this form, along with any of the foregoing
                  information obtained in connection with this application, to any
                  Recipient and/or third party as provided by law.
                </p>
                <p className="font-bold text-ink mb-2">Communications policy</p>
                <p className="mb-3">
                  By submitting an application for business funding, you acknowledge and
                  agree that we may use your contact information, including your email
                  address and mobile phone number, to contact you regarding the funding
                  application process and for marketing communications, unless you
                  explicitly opt-out by providing us with your consent not to receive
                  such communications.
                </p>
                <p className="mb-3">
                  We take data privacy seriously and will comply with all relevant data
                  protection laws and regulations, including the General Data Protection
                  Regulation (GDPR) and the CAN-SPAM Act. If you do not wish to receive
                  marketing communications from us, you can opt-out at any time by
                  providing us with your explicit consent not to receive such
                  communications.
                </p>
                <p className="mb-3">
                  If you do opt-in to receive marketing communications from us, we will
                  ensure that our communications include a clear and easy-to-use
                  unsubscribe option, should you wish to stop receiving them at any time.
                </p>
                <p>
                  Please be aware that providing us with your contact information,
                  including your email address and mobile phone number, may result in us
                  using this information to contact you in relation to the business
                  funding application, regardless of whether you have opted-in or
                  opted-out of receiving marketing communications.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={data.termsAgreed}
                  onChange={(e) => update("termsAgreed", e.target.checked)}
                  className="mt-1 cursor-pointer accent-azure"
                />
                <label htmlFor="terms" className="text-sm text-ink-secondary leading-relaxed cursor-pointer">
                  I have read and agree to the terms and conditions above.
                </label>
              </div>

              <InputField
                label="Signature Date"
                required
                type="date"
                value={data.signatureDate}
                onChange={(e) => update("signatureDate", e.target.value)}
              />
            </div>
          )}

          {error && <p className="text-error text-sm mt-4">{error}</p>}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-rule-light">
            {step > 1 ? (
              <Button
                type="button"
                variant="ghost"
                onClick={() => setStep((step - 1) as Step)}
              >
                Back
              </Button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <Button
                type="button"
                variant="secondary"
                disabled={!canAdvance()}
                onClick={() => setStep((step + 1) as Step)}
              >
                Continue
              </Button>
            ) : (
              <Button type="submit" disabled={!canAdvance() || submitting}>
                {submitting ? "Submitting..." : "Submit Application"}
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
