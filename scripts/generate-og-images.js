/**
 * Generate branded OG images (1200x630) for all major pages.
 *
 * Uses next/og ImageResponse to render React-like elements as PNG.
 * Outputs to public/og/ for static serving.
 *
 * Usage: node scripts/generate-og-images.js
 */

const { ImageResponse } = require("next/og");
const { writeFileSync, mkdirSync } = require("fs");
const { join } = require("path");

const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public", "og");

/** Pages to generate OG images for */
const pages = [
  { slug: "homepage", title: "Small Business Funding & Loans", subtitle: "The capital your business needs. The partner it deserves." },
  { slug: "about", title: "About Sagamore Financial Group", subtitle: "Built to serve the businesses banks overlook." },
  { slug: "services", title: "12 Business Funding Products", subtitle: "One application. Multiple options. Zero guesswork." },
  { slug: "apply", title: "Apply for Business Funding", subtitle: "Five minutes. No credit impact. Real options from real lenders." },
  { slug: "contact", title: "Contact Us", subtitle: "Questions about funding? Our team responds within one business day." },
  // Product pages
  { slug: "line-of-credit", title: "Business Line of Credit", subtitle: "Revolving credit that adapts to your cash flow cycle. $5K\u2013$500K." },
  { slug: "term-loans", title: "Business Term Loans", subtitle: "Predictable monthly payments over a fixed term. $10K\u2013$2M." },
  { slug: "bridge-loans", title: "Bridge Loans", subtitle: "Short-term capital for transitional situations. $25K\u2013$1M." },
  { slug: "equipment-financing", title: "Equipment Financing", subtitle: "Acquire equipment using the asset itself as collateral. $10K\u2013$5M." },
  { slug: "factoring", title: "Invoice Factoring", subtitle: "Sell outstanding invoices and receive cash immediately. $10K\u2013$5M." },
  { slug: "ar-financing", title: "AR Financing", subtitle: "Borrow against receivables while maintaining customer relationships. $25K\u2013$5M." },
  { slug: "commercial-mortgage", title: "Commercial Mortgage", subtitle: "Long-term financing for commercial real estate. $100K\u2013$5M+." },
  { slug: "residential-mortgage", title: "Residential Mortgage", subtitle: "Home loans designed for self-employed borrowers. $100K\u2013$3M." },
  { slug: "heloc", title: "Home Equity Line of Credit", subtitle: "Revolving access to your home equity. $25K\u2013$500K." },
  { slug: "sba-loans", title: "SBA Loans", subtitle: "Government-backed loans with the best rates and longest terms. $50K\u2013$5M." },
  { slug: "business-credit-cards", title: "0% Business Credit Cards", subtitle: "Strategic 0% APR credit card stacking for business. $5K\u2013$150K." },
  { slug: "credit-repair", title: "Credit Repair Program", subtitle: "Optimize your credit profile for better funding terms." },
];

/**
 * Create an OG image element tree.
 * next/og uses Satori which accepts plain objects with type/props.
 */
function createOgElement(title, subtitle) {
  return {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "60px 80px",
        background: "linear-gradient(135deg, #0F1B2D 0%, #0D3F8A 50%, #1B6FEE 100%)",
      },
      children: [
        // Gold accent line at top
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              height: "6px",
              background: "linear-gradient(90deg, #D4891A, #00C9A7)",
            },
          },
        },
        // Brand identifier
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "40px",
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    width: "48px",
                    height: "48px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "white",
                  },
                  children: "S",
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.5px",
                  },
                  children: "Sagamore Financial Group",
                },
              },
            ],
          },
        },
        // Title
        {
          type: "div",
          props: {
            style: {
              fontSize: "56px",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.15,
              marginBottom: "20px",
              maxWidth: "900px",
            },
            children: title,
          },
        },
        // Subtitle
        {
          type: "div",
          props: {
            style: {
              fontSize: "24px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.4,
              maxWidth: "800px",
            },
            children: subtitle,
          },
        },
        // Domain label
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              bottom: "40px",
              right: "80px",
              fontSize: "16px",
              color: "#00C9A7",
              fontWeight: 600,
              letterSpacing: "2px",
            },
            children: "sagamorefinancialgroup.com",
          },
        },
      ],
    },
  };
}

async function generateImage(page) {
  const element = createOgElement(page.title, page.subtitle);

  const response = new ImageResponse(element, {
    width: 1200,
    height: 630,
  });

  const buffer = Buffer.from(await response.arrayBuffer());
  const outPath = join(OUT_DIR, `${page.slug}.png`);
  writeFileSync(outPath, buffer);
  console.log(`  Generated: ${page.slug}.png (${(buffer.length / 1024).toFixed(0)}KB)`);
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  console.log(`Generating ${pages.length} OG images...`);

  for (const page of pages) {
    await generateImage(page);
  }

  console.log(`\nDone! ${pages.length} images written to public/og/`);
}

main().catch((err) => {
  console.error("Failed to generate OG images:", err);
  process.exit(1);
});
