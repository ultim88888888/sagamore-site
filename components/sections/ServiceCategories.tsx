"use client";

import Link from "next/link";

const categories = [
  {
    title: "Working Capital",
    description:
      "Lines of credit, term loans, and bridge financing to fuel operations and seize growth opportunities.",
    products: ["Line of Credit", "Term Loans", "Bridge Loans"],
    anchor: "working-capital",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Asset-Based Funding",
    description:
      "Turn your equipment, invoices, and receivables into working capital you can deploy today.",
    products: ["Equipment Financing", "Factoring", "AR Financing"],
    anchor: "asset-based",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <rect x="3" y="6" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Real Estate",
    description:
      "Commercial mortgages, residential lending, and home equity lines for business owners.",
    products: ["Commercial Mortgage", "Residential Mortgage", "HELOC"],
    anchor: "real-estate",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path d="M3 21h18M5 21V8l7-5 7 5v13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="14" width="6" height="7" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Specialty Programs",
    description:
      "Government-backed SBA loans, 0% business credit cards, and credit repair services.",
    products: ["SBA Loans", "0% Business Credit Cards", "Credit Repair"],
    anchor: "specialty",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4 5.6 21.2 8 14 2 9.2h7.6L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function ServiceCategories() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-azure mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4 tracking-tight">
            Funding for every stage of business
          </h2>
          <p className="text-ink-secondary text-lg leading-relaxed">
            Twelve products across four categories. We find the right match for
            where your business is today and where it&apos;s heading.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={`/services#${cat.anchor}`}
              className="group block rounded-2xl p-7 sm:p-8 border border-rule-light bg-white hover:border-azure/30 hover:shadow-lg hover:shadow-azure/5 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="text-azure shrink-0 mt-0.5">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink mb-2 group-hover:text-azure transition-colors duration-150">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.products.map((p) => (
                      <span
                        key={p}
                        className="inline-block text-xs text-ink-tertiary bg-azure-pale/60 px-2.5 py-1 rounded-md"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="text-sm font-medium text-azure hover:text-azure-dark transition-colors duration-150 cursor-pointer"
          >
            View all 12 products &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
