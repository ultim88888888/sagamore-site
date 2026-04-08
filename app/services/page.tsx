import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full suite of business funding products — from lines of credit and SBA loans to equipment financing, factoring, and commercial real estate.",
};

/* ─── Product Data ─── */

interface Product {
  name: string;
  range: string;
  description: string;
  features: string[];
}

interface Category {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
}

const categories: Category[] = [
  {
    id: "working-capital",
    title: "Working Capital",
    subtitle:
      "Flexible funding to cover payroll, inventory, and growth initiatives.",
    products: [
      {
        name: "Line of Credit",
        range: "$5K – $500K",
        description:
          "Draw funds as you need them and only pay interest on what you use. A revolving credit line that adapts to your cash flow cycle.",
        features: [
          "Revolving access — draw and repay as needed",
          "Interest only on outstanding balance",
          "Decisions in as little as 24 hours",
          "No prepayment penalties",
        ],
      },
      {
        name: "Term Loans",
        range: "$10K – $2M",
        description:
          "A lump sum with predictable monthly payments over a fixed term. Ideal for expansion, hiring, or large purchases.",
        features: [
          "Fixed monthly payments for easy budgeting",
          "Terms from 6 to 60 months",
          "Competitive rates for qualified borrowers",
          "Funds deposited within 48 hours of approval",
        ],
      },
      {
        name: "Bridge Loans",
        range: "$25K – $1M",
        description:
          "Short-term capital to bridge a gap — between funding rounds, seasonal revenue dips, or while waiting on receivables.",
        features: [
          "Fast turnaround for urgent needs",
          "Flexible repayment structures",
          "Terms from 3 to 18 months",
          "Designed for transitional situations",
        ],
      },
    ],
  },
  {
    id: "asset-based",
    title: "Asset-Based Funding",
    subtitle:
      "Convert your business assets into the capital you need today.",
    products: [
      {
        name: "Equipment Financing",
        range: "$10K – $5M",
        description:
          "Acquire machinery, vehicles, technology, or any business-critical equipment with financing that uses the asset itself as collateral.",
        features: [
          "Equipment serves as collateral",
          "Up to 100% of equipment value financed",
          "Fixed payments over the asset's useful life",
          "Potential tax benefits through depreciation",
        ],
      },
      {
        name: "Factoring",
        range: "$10K – $5M",
        description:
          "Sell your outstanding invoices at a discount and receive cash immediately. Stop waiting 30, 60, or 90 days for customers to pay.",
        features: [
          "Advances up to 90% of invoice value",
          "Funding within 24–48 hours",
          "Your customers pay the factor directly",
          "No long-term debt on your balance sheet",
        ],
      },
      {
        name: "AR Financing",
        range: "$25K – $5M",
        description:
          "Borrow against your accounts receivable without selling them. Maintain your customer relationships while accessing cash.",
        features: [
          "Borrow against receivables, retain ownership",
          "Revolving facility grows with your AR",
          "You maintain customer relationships",
          "Flexible advance rates",
        ],
      },
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate",
    subtitle:
      "Financing solutions for commercial and residential properties.",
    products: [
      {
        name: "Commercial Mortgage",
        range: "$100K – $5M+",
        description:
          "Long-term financing for purchasing, refinancing, or renovating commercial real estate — offices, retail, industrial, mixed-use.",
        features: [
          "Terms up to 25 years",
          "Competitive fixed and variable rates",
          "Purchase, refinance, and renovation",
          "Multiple property types eligible",
        ],
      },
      {
        name: "Residential Mortgage",
        range: "$100K – $3M",
        description:
          "Home purchase and refinance solutions for business owners. We understand self-employment income documentation.",
        features: [
          "Programs for self-employed borrowers",
          "Bank statement qualification available",
          "Competitive rates across loan types",
          "Purchase, refinance, and cash-out options",
        ],
      },
      {
        name: "HELOC",
        range: "$25K – $500K",
        description:
          "Tap into your home equity with a revolving line of credit. Use it for business investment, debt consolidation, or cash reserves.",
        features: [
          "Draw funds as needed, revolving access",
          "Interest only on what you use",
          "Business or personal use",
          "Potential tax-deductible interest",
        ],
      },
    ],
  },
  {
    id: "specialty",
    title: "Specialty Programs",
    subtitle:
      "Specialized funding vehicles for unique business needs.",
    products: [
      {
        name: "SBA Loans",
        range: "$50K – $5M",
        description:
          "Government-backed loans with some of the best rates and longest terms available. We guide you through the SBA process from start to finish.",
        features: [
          "Lowest available interest rates",
          "Terms up to 25 years",
          "7(a), 504, and Express programs",
          "Full application guidance and support",
        ],
      },
      {
        name: "0% Business Credit Cards",
        range: "$5K – $150K",
        description:
          "Build business credit while accessing 0% introductory APR financing. Strategic credit card stacking for maximum leverage.",
        features: [
          "0% intro APR up to 21 months",
          "Build business credit history",
          "Rewards and cashback on spending",
          "Strategic card selection guidance",
        ],
      },
      {
        name: "Credit Repair",
        range: "Consultation",
        description:
          "Not quite ready to fund? Our credit repair program helps you optimize your profile so you qualify for better rates and higher amounts.",
        features: [
          "Comprehensive credit analysis",
          "Dispute resolution with bureaus",
          "Score optimization strategies",
          "Path-to-funding roadmap",
        ],
      },
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-teal shrink-0 mt-0.5"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8.5l3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, #FBF8F3 0%, #F5EFE5 70%, #EDE7DB 100%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-amber-dark mb-4">
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-5 tracking-tight leading-[1.12]">
              Twelve products. One application.
            </h1>
            <p className="text-lg text-ink-secondary leading-relaxed">
              Whatever your business needs — growth capital, asset financing,
              real estate, or credit building — we have a product that fits. One
              form, multiple options, and a team that knows the landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Category sections */}
      {categories.map((category, catIndex) => (
        <section
          key={category.id}
          id={category.id}
          className="py-16 sm:py-24 scroll-mt-20 relative"
        >
          {/* Alternating subtle tint */}
          {catIndex % 2 === 1 && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(27,43,58,0.02) 0%, rgba(27,43,58,0.04) 50%, rgba(27,43,58,0.02) 100%)",
              }}
            />
          )}

          <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2 tracking-tight">
                {category.title}
              </h2>
              <p className="text-ink-secondary text-base leading-relaxed max-w-xl">
                {category.subtitle}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-5">
              {category.products.map((product) => (
                <div
                  key={product.name}
                  className="rounded-2xl border border-rule-light p-6 sm:p-7 flex flex-col"
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-navy mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm font-semibold text-amber-dark">
                      {product.range}
                    </p>
                  </div>

                  <p className="text-sm text-ink-secondary leading-relaxed mb-5 flex-1">
                    {product.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-ink-secondary"
                      >
                        <CheckIcon />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/apply"
                    className="inline-flex items-center justify-center w-full px-5 py-2.5 text-sm font-semibold text-white bg-navy hover:opacity-85 rounded-lg transition-opacity duration-150 cursor-pointer"
                  >
                    Apply for {product.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-deep" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 70% 40%, rgba(212,137,26,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Not sure which product is right?
          </h2>
          <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
            Apply once and we will match you with the products that fit. Or reach
            out and talk to our team directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-amber hover:opacity-85 rounded-xl transition-opacity cursor-pointer"
            >
              Start Your Application
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white/80 border border-white/20 hover:border-white/40 rounded-xl transition-colors cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
