"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    title: "Working Capital",
    description:
      "Keep cash flowing and seize opportunities. Lines of credit, term loans, and bridge financing to fuel day-to-day operations and growth.",
    products: ["Line of Credit", "Term Loans", "Bridge Loans"],
    anchor: "working-capital",
  },
  {
    title: "Asset-Based Funding",
    description:
      "Turn your equipment, invoices, and receivables into working capital. Unlock value from the assets your business already has.",
    products: ["Equipment Financing", "Factoring", "AR Financing"],
    anchor: "asset-based",
  },
  {
    title: "Real Estate",
    description:
      "Commercial mortgages, residential lending, and home equity lines. Whether you are buying a building or leveraging existing property.",
    products: ["Commercial Mortgage", "Residential Mortgage", "HELOC"],
    anchor: "real-estate",
  },
  {
    title: "Specialty Programs",
    description:
      "Government-backed SBA loans, 0% intro rate business credit cards, and credit repair services for businesses that need a fresh start.",
    products: ["SBA Loans", "0% Business Credit Cards", "Credit Repair"],
    anchor: "specialty",
  },
];

export function ServiceCategories() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-cream to-cream-deep">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mb-4">
            Funding for every stage of business
          </h2>
          <p className="text-ink-secondary text-lg max-w-xl mx-auto">
            Twelve products across four categories. We find the right match for
            where your business is today &mdash; and where it is heading.
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Link
                href={`/services#${cat.anchor}`}
                className="group block bg-white rounded-2xl p-7 sm:p-8 border border-rule-light hover:border-rule transition-colors cursor-pointer h-full"
              >
                <h3 className="font-display text-xl font-semibold text-navy mb-2 group-hover:text-amber-dark transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.products.map((p) => (
                    <span
                      key={p}
                      className="inline-block text-xs text-ink-tertiary bg-cream px-2.5 py-1 rounded-md"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* See all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/services"
            className="text-sm font-medium text-amber-dark hover:text-amber transition-colors cursor-pointer"
          >
            View all 12 products &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
