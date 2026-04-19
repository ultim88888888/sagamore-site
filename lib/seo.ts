/**
 * Shared SEO constants and schema helpers.
 *
 * Single source of truth for site URL, organization info, and
 * structured data used across all pages.
 */

export const SITE_URL = "https://www.sagamorefinancialgroup.com";
export const SITE_NAME = "Sagamore Financial Group";

/** Organization schema rendered site-wide in root layout */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: SITE_NAME,
  description:
    "Commercial loan brokerage connecting small and mid-size businesses with funding solutions including lines of credit, SBA loans, equipment financing, and more.",
  url: SITE_URL,
  logo: `${SITE_URL}/shield.png`,
  email: "info@sagamorefinancialgroup.com",
  telephone: "+1-617-465-5765",
  sameAs: ["https://www.linkedin.com/company/sagamore-financial-group"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "70 Charles Lindbergh Blvd",
    addressLocality: "Uniondale",
    addressRegion: "NY",
    postalCode: "11553",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  priceRange: "$5,000 - $5,000,000",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Business Funding Products",
    itemListElement: [
      { "@type": "OfferCatalog", name: "Working Capital" },
      { "@type": "OfferCatalog", name: "Asset-Based Funding" },
      { "@type": "OfferCatalog", name: "Real Estate Financing" },
      { "@type": "OfferCatalog", name: "Specialty Programs" },
    ],
  },
};

/** WebSite schema rendered on homepage only */
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Sagamore Financial Group connects growing businesses with the right capital -- from lines of credit and SBA loans to equipment financing and beyond.",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

/**
 * Build a WebPage schema for a page.
 *
 * @param name - Page title (e.g. "About Us")
 * @param description - Page meta description
 * @param path - URL path (e.g. "/about"). Use "" for homepage.
 */
export function webPageSchema(
  name: string,
  description: string,
  path: string
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: path ? `${SITE_URL}${path}` : SITE_URL,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/**
 * Build a BreadcrumbList schema from path segments.
 *
 * @param items - Array of { name, path } for each breadcrumb level.
 *   "Home" is always prepended automatically.
 */
export function breadcrumbSchema(
  items: { name: string; path: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    ],
  };
}

/**
 * Build a FinancialProduct schema for a product page.
 */
export function financialProductSchema(product: {
  name: string;
  description: string;
  slug: string;
  range: string;
}): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: product.name,
    description: product.description,
    url: `${SITE_URL}/services/${product.slug}`,
    provider: {
      "@type": "FinancialService",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  // Parse funding range into minValue/maxValue when possible
  const rangeMatch = product.range.match(
    /\$?([\d,.]+[KMB]?)\s*[-–]\s*\$?([\d,.]+[KMB]?\+?)/i
  );
  if (rangeMatch) {
    schema.amount = {
      "@type": "MonetaryAmount",
      currency: "USD",
      minValue: parseRangeValue(rangeMatch[1]),
      maxValue: parseRangeValue(rangeMatch[2]),
    };
  }

  return schema;
}

/** Convert shorthand like "5K", "5M", "500K" to a number */
function parseRangeValue(raw: string): number {
  const cleaned = raw.replace(/[,$+]/g, "");
  const multipliers: Record<string, number> = { K: 1_000, M: 1_000_000, B: 1_000_000_000 };
  const match = cleaned.match(/^([\d.]+)([KMB])?$/i);
  if (!match) return 0;
  const value = parseFloat(match[1]);
  const suffix = (match[2] || "").toUpperCase();
  return value * (multipliers[suffix] || 1);
}
