"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HomeCTA() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-cream to-cream-deep">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mb-4">
            Ready to grow?
          </h2>
          <p className="text-ink-secondary text-lg mb-10 leading-relaxed">
            One application opens the door to a dozen funding products. No hard
            credit pull until you accept an offer. No obligation, ever.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-amber hover:bg-amber-dark rounded-lg transition-colors cursor-pointer"
            >
              Start Your Application
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-ink border border-rule hover:border-ink-faint hover:bg-cream rounded-lg transition-colors cursor-pointer"
            >
              Talk to Our Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
