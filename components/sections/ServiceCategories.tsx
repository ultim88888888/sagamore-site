"use client";

import Link from "next/link";

const categories = [
  {
    title: "Working Capital",
    description:
      "Lines of credit, term loans, and bridge financing to fuel operations and seize growth opportunities.",
    products: ["Line of Credit", "Term Loans", "Bridge Loans"],
    anchor: "working-capital",
  },
  {
    title: "Asset-Based Funding",
    description:
      "Turn your equipment, invoices, and receivables into working capital you can deploy today.",
    products: ["Equipment Financing", "Factoring", "AR Financing"],
    anchor: "asset-based",
  },
  {
    title: "Real Estate",
    description:
      "Commercial mortgages, residential lending, and home equity lines for business owners.",
    products: ["Commercial Mortgage", "Residential Mortgage", "HELOC"],
    anchor: "real-estate",
  },
  {
    title: "Specialty Programs",
    description:
      "Government-backed SBA loans, 0% business credit cards, and credit repair services.",
    products: ["SBA Loans", "0% Business Credit Cards", "Credit Repair"],
    anchor: "specialty",
  },
];

export function ServiceCategories() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-amber-dark mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 tracking-tight">
            Funding for every stage of business
          </h2>
          <p className="text-ink-secondary text-lg leading-relaxed">
            Twelve products across four categories. We find the right match for
            where your business is today and where it&apos;s heading.
          </p>
        </div>

        {/* Category grid — border-only cards, embedded feel */}
        <div className="grid md:grid-cols-2 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={`/services#${cat.anchor}`}
              className="group block rounded-2xl p-7 sm:p-8 border border-rule-light hover:border-rule transition-colors duration-150 cursor-pointer"
            >
              <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-amber-dark transition-colors duration-150">
                {cat.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.products.map((p) => (
                  <span
                    key={p}
                    className="inline-block text-xs text-ink-tertiary bg-cream-deep/60 px-2.5 py-1 rounded-md"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="text-sm font-medium text-amber-dark hover:text-amber transition-colors duration-150 cursor-pointer"
          >
            View all 12 products &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
