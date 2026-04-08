"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const criteria = [
  {
    label: "Monthly Deposits",
    value: "$5,000+",
    description: "Consistent bank deposits showing active cash flow",
  },
  {
    label: "Credit Score",
    value: "500+",
    description: "We work with a wide range of credit profiles",
  },
  {
    label: "Time in Business",
    value: "4+ months",
    description: "Established businesses with operating history",
  },
];

export function Qualifications() {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mb-4">
              Think you might not qualify? You probably do.
            </h2>
            <p className="text-ink-secondary text-lg max-w-xl mx-auto">
              Our minimum requirements are designed to be accessible. If your
              business meets these basics, there is likely a product for you.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {criteria.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 border border-rule-light text-center"
              >
                <p className="font-display text-2xl font-bold text-navy mb-1">
                  {c.value}
                </p>
                <p className="text-sm font-medium text-ink mb-2">{c.label}</p>
                <p className="text-xs text-ink-tertiary leading-relaxed">
                  {c.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center"
          >
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-amber hover:bg-amber-dark rounded-lg transition-colors cursor-pointer"
            >
              Check Your Eligibility
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
