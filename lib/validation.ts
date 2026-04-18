import { z } from "zod";

// ---------------------------------------------------------------------------
// Formatting helpers — auto-mask as the user types
// ---------------------------------------------------------------------------

/** Strip everything except digits. */
function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

/**
 * Format an EIN as XX-XXXXXXX.
 * Accepts raw digits or already-formatted input (e.g. pasted values).
 * Caps at 9 digits.
 */
export function formatEIN(value: string): string {
  const digits = digitsOnly(value).slice(0, 9);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}-${digits.slice(2)}`;
}

/**
 * Format an SSN as XXX-XX-XXXX.
 * Accepts raw digits or already-formatted input (e.g. pasted values).
 * Caps at 9 digits.
 */
export function formatSSN(value: string): string {
  const digits = digitsOnly(value).slice(0, 9);
  if (digits.length <= 3) return digits;
  if (digits.length <= 5) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5)}`;
}

// ---------------------------------------------------------------------------
// Zod schemas
// ---------------------------------------------------------------------------

export const einSchema = z
  .string()
  .regex(/^\d{2}-\d{7}$/, "EIN must be in XX-XXXXXXX format");

export const ssnSchema = z
  .string()
  .regex(/^\d{3}-\d{2}-\d{4}$/, "SSN must be in XXX-XX-XXXX format");

/**
 * Client-side validation schema for the application form.
 * Validates EIN and SSN format; other fields are checked for presence only.
 */
export const applicationSchema = z.object({
  businessName: z.string().min(1, "Business name is required"),
  dba: z.string(),
  businessAddress: z.string().min(1, "Business address is required"),
  businessCity: z.string().min(1, "City is required"),
  businessState: z.string().min(1, "State is required"),
  businessZip: z.string().min(1, "ZIP code is required"),
  ein: einSchema,
  entityType: z.string().min(1, "Entity type is required"),
  startDate: z.string().min(1, "Start date is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  homeAddress: z.string().min(1, "Home address is required"),
  homeCity: z.string().min(1, "City is required"),
  homeState: z.string().min(1, "State is required"),
  homeZip: z.string().min(1, "ZIP code is required"),
  dob: z.string().min(1, "Date of birth is required"),
  ssn: ssnSchema,
  ownership: z.string().min(1, "Ownership percentage is required"),
  creditScore: z.string().min(1, "Credit score range is required"),
  termsAgreed: z.literal(true, { message: "You must agree to the terms" }),
  signatureDate: z.string().min(1, "Signature date is required"),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;

/**
 * Strip formatting from EIN/SSN for server-side storage/forwarding.
 * Returns raw digits only.
 */
export function stripFormatting(value: string): string {
  return digitsOnly(value);
}
