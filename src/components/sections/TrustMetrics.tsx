"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "$45M+", label: "Capital Deployed" },
  { value: "4,000+", label: "Companies Backed" },
  { value: "24hrs", label: "Average Turnaround" },
  { value: "12+", label: "Funding Products" },
];

export function TrustMetrics() {
  return (
    <section className="bg-cream-deep py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-3xl sm:text-4xl font-semibold text-navy mb-1.5">
                {metric.value}
              </p>
              <p className="text-sm text-ink-tertiary">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
