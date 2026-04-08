"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Tell us about your business",
    description:
      "Fill out one short application. It takes about five minutes and does not affect your credit score.",
  },
  {
    number: "02",
    title: "We match you with the right product",
    description:
      "Our team reviews your profile and identifies the funding options that fit your revenue, credit, and timeline.",
  },
  {
    number: "03",
    title: "Review your offers",
    description:
      "You receive one or more tailored offers with clear terms. No hidden fees, no fine-print surprises.",
  },
  {
    number: "04",
    title: "Get funded",
    description:
      "Accept the offer that works best. Most of our clients receive funds within 24 hours of approval.",
  },
];

export function Process() {
  return (
    <section className="py-20 sm:py-28 bg-navy">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-4">
            From application to funding in four steps
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            We keep things straightforward. No jargon, no runaround. Here is
            exactly how it works.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <span className="font-display text-3xl font-bold text-amber/80">
                {step.number}
              </span>
              <h3 className="text-base font-semibold text-white mt-3 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
