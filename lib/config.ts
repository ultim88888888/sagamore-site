/**
 * Site-wide configuration constants.
 *
 * Phone number and Calendly URL default to null. When set,
 * the corresponding UI elements render automatically across
 * header, footer, contact sidebar, and mobile sticky bar.
 *
 * To enable phone: set PHONE_NUMBER to e.g. "(516) 555-1234"
 * To enable Calendly: set CALENDLY_URL to the scheduling page URL
 */

/** Business phone number. Set to a string to enable phone CTAs site-wide. */
export const PHONE_NUMBER: string | null = null;

/** Calendly scheduling URL. Set to enable the embed on /contact. */
export const CALENDLY_URL: string | null = null;

/** Physical office address */
export const ADDRESS = {
  street: "70 Charles Lindbergh Blvd",
  city: "Uniondale",
  state: "NY",
  zip: "11553",
} as const;

/** Formatted single-line address */
export const ADDRESS_LINE = `${ADDRESS.street}, ${ADDRESS.city}, ${ADDRESS.state} ${ADDRESS.zip}`;

/**
 * Returns the tel: href for the phone number, stripping non-digits.
 * Returns null when PHONE_NUMBER is not configured.
 */
export function getPhoneHref(): string | null {
  if (!PHONE_NUMBER) return null;
  return `tel:+1${PHONE_NUMBER.replace(/\D/g, "")}`;
}
