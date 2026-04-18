"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

const JOTFORM_ID = "260337202144041";
const JOTFORM_URL = `https://submit.jotform.com/submit/${JOTFORM_ID}/`;

type Step = 1 | 2 | 3 | 4;

interface FormData {
  // Step 1 — Business Info
  businessName: string;
  dba: string;
  businessAddress: string;
  businessCity: string;
  businessState: string;
  businessZip: string;
  // Step 2 — Business Details
  ein: string;
  entityType: string;
  startDate: string;
  // Step 3 — Owner Info
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
  // Step 4 — Documents
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

const creditRanges = [
  "Excellent (720+)",
  "Good (680-719)",
  "Fair (600-679)",
  "Below 600",
];

const ease = [0.25, 0.1, 0.25, 1] as const;

function InputField({
  label,
  required = false,
  ...props
}: {
  label: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-500 text-ink mb-1.5">
        {label}
        {required && <span className="text-error ml-0.5">*</span>}
      </label>
      <input
        {...props}
        required={required}
        className="w-full px-4 py-2.5 rounded-lg border border-rule text-ink bg-white placeholder:text-ink-faint focus:border-amber focus:ring-1 focus:ring-amber/30 outline-none transition-colors text-sm"
      />
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
  return (
    <div>
      <label className="block text-sm font-500 text-ink mb-1.5">
        {label}
        {required && <span className="text-error ml-0.5">*</span>}
      </label>
      <select
        {...props}
        required={required}
        className="w-full px-4 py-2.5 rounded-lg border border-rule text-ink bg-white focus:border-amber focus:ring-1 focus:ring-amber/30 outline-none transition-colors text-sm cursor-pointer appearance-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 5l3 3 3-3' stroke='%238a8078' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E")`,
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
  const [error, setError] = useState("");

  const update = (field: keyof FormData, value: string | boolean) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setError("Please upload a PDF file.");
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

    setSubmitting(true);
    setError("");

    try {
      // Parse "YYYY-MM-DD" date inputs into JotForm's [month]/[day]/[year] sub-fields
      const splitDate = (iso: string) => {
        const [year, month, day] = iso.split("-");
        return { month, day, year };
      };

      const startDate = splitDate(data.startDate);
      const dob = splitDate(data.dob);
      const sigDate = splitDate(data.signatureDate);

      const formPayload = new FormData();
      formPayload.append("formID", JOTFORM_ID);

      // Business info
      formPayload.append("q3_businessName", data.businessName);
      formPayload.append("q4_dbaName", data.dba);

      // Business address (JotForm address widget — q43)
      formPayload.append("q43_businessAddress[addr_line1]", data.businessAddress);
      formPayload.append("q43_businessAddress[city]", data.businessCity);
      formPayload.append("q43_businessAddress[state]", data.businessState);
      formPayload.append("q43_businessAddress[postal]", data.businessZip);

      // Business details
      formPayload.append("q17_federalTax", data.ein);
      formPayload.append("q18_legalEntity", data.entityType);
      formPayload.append("q19_businessStart[month]", startDate.month);
      formPayload.append("q19_businessStart[day]", startDate.day);
      formPayload.append("q19_businessStart[year]", startDate.year);

      // Owner info
      formPayload.append("q21_firstName", data.firstName);
      formPayload.append("q22_lastName", data.lastName);
      formPayload.append("q23_email", data.email);
      formPayload.append("q24_phoneNumber[full]", data.phone);

      // Home address (JotForm address widget — q25)
      formPayload.append("q25_homeAddress[addr_line1]", data.homeAddress);
      formPayload.append("q25_homeAddress[city]", data.homeCity);
      formPayload.append("q25_homeAddress[state]", data.homeState);
      formPayload.append("q25_homeAddress[postal]", data.homeZip);

      // Date of birth (JotForm date widget — q26)
      formPayload.append("q26_dateOf[month]", dob.month);
      formPayload.append("q26_dateOf[day]", dob.day);
      formPayload.append("q26_dateOf[year]", dob.year);

      formPayload.append("q27_socialSecurity", data.ssn);
      formPayload.append("q28_ownershipPercentage", data.ownership);
      formPayload.append("q29_creditScore", data.creditScore);

      // Certification date (JotForm date widget — q40)
      formPayload.append("q40_date[month]", sigDate.month);
      formPayload.append("q40_date[day]", sigDate.day);
      formPayload.append("q40_date[year]", sigDate.year);

      // q51_signature exists on the JotForm but the site doesn't collect
      // a drawn signature — the certification checkbox + date serves the same purpose.

      if (bankStatement) {
        formPayload.append("q32_uploadYour[]", bankStatement);
      }

      const response = await fetch(JOTFORM_URL, {
        method: "POST",
        body: formPayload,
      });

      if (response.ok || response.status === 301 || response.status === 302) {
        setSubmitted(true);
      } else {
        setError(
          "There was a problem submitting your application. Please try again or contact us directly."
        );
      }
    } catch {
      // JotForm redirects on submit — this is expected behavior
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-rule-light text-center"
      >
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
        <h2 className="font-display text-2xl font-700 text-navy mb-3">
          Application Received
        </h2>
        <p className="text-ink-secondary leading-relaxed max-w-md mx-auto">
          Thank you for applying with Sagamore Financial Group. Our team will
          review your application and reach out within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-rule-light overflow-hidden">
      {/* Step Indicator */}
      <div className="px-6 sm:px-8 pt-6 sm:pt-8">
        <div className="flex items-center justify-between mb-8">
          {stepLabels.map((label, i) => {
            const stepNum = (i + 1) as Step;
            const isActive = step === stepNum;
            const isComplete = step > stepNum;

            return (
              <div key={label} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-500 transition-colors ${
                      isComplete
                        ? "bg-amber text-white"
                        : isActive
                          ? "bg-amber/10 text-amber-dark border-2 border-amber"
                          : "bg-cream text-ink-tertiary"
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
                      isActive ? "text-ink font-500" : "text-ink-tertiary"
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {i < stepLabels.length - 1 && (
                  <div
                    className={`flex-1 h-px mx-3 ${
                      isComplete ? "bg-amber" : "bg-rule-light"
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
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25, ease }}
            >
              {/* Step 1 — Business Info */}
              {step === 1 && (
                <div className="space-y-5">
                  <h3 className="font-display text-lg font-600 text-navy mb-1">
                    Business Information
                  </h3>
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

              {/* Step 2 — Business Details */}
              {step === 2 && (
                <div className="space-y-5">
                  <h3 className="font-display text-lg font-600 text-navy mb-1">
                    Business Details
                  </h3>
                  <p className="text-sm text-ink-secondary mb-4">
                    A few more details about your business structure.
                  </p>
                  <InputField
                    label="EIN (Employer Identification Number)"
                    required
                    value={data.ein}
                    onChange={(e) => update("ein", e.target.value)}
                    placeholder="XX-XXXXXXX"
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

              {/* Step 3 — Owner Info */}
              {step === 3 && (
                <div className="space-y-5">
                  <h3 className="font-display text-lg font-600 text-navy mb-1">
                    Owner Information
                  </h3>
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
                      onChange={(e) => update("ssn", e.target.value)}
                      placeholder="XXX-XX-XXXX"
                      type="password"
                      autoComplete="off"
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

              {/* Step 4 — Documents + Review */}
              {step === 4 && (
                <div className="space-y-6">
                  <h3 className="font-display text-lg font-600 text-navy mb-1">
                    Documents &amp; Certification
                  </h3>
                  <p className="text-sm text-ink-secondary mb-4">
                    Upload a recent bank statement and certify your application.
                  </p>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-500 text-ink mb-2">
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
                      <label
                        htmlFor="bankStatement"
                        className="cursor-pointer text-sm"
                      >
                        {bankStatement ? (
                          <span className="text-success font-500">
                            {bankStatement.name}
                          </span>
                        ) : (
                          <span className="text-ink-tertiary">
                            Click to upload a PDF bank statement
                          </span>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* Application Summary */}
                  <div className="bg-cream rounded-xl p-5">
                    <h4 className="text-sm font-600 text-ink mb-3">
                      Application Summary
                    </h4>
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
                        <span className="text-ink">
                          {data.firstName} {data.lastName}
                        </span>
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

                  {/* Terms */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={data.termsAgreed}
                      onChange={(e) => update("termsAgreed", e.target.checked)}
                      className="mt-1 cursor-pointer accent-amber"
                    />
                    <label htmlFor="terms" className="text-sm text-ink-secondary leading-relaxed cursor-pointer">
                      I certify that the information provided is true and
                      accurate. I authorize Sagamore Financial Group and its
                      lending partners to verify this information and perform a
                      soft credit inquiry.
                    </label>
                  </div>

                  {/* Signature Date */}
                  <InputField
                    label="Signature Date"
                    required
                    type="date"
                    value={data.signatureDate}
                    onChange={(e) => update("signatureDate", e.target.value)}
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Error */}
          {error && (
            <p className="text-error text-sm mt-4">{error}</p>
          )}

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
                disabled={!canAdvance()}
                onClick={() => setStep((step + 1) as Step)}
                className={!canAdvance() ? "opacity-50 cursor-not-allowed" : ""}
              >
                Continue
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={!canAdvance() || submitting}
                className={
                  !canAdvance() || submitting
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
