"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const creditOptions = [
  { label: "Excellent", sublabel: "720+", multiplier: 8 },
  { label: "Good", sublabel: "680-719", multiplier: 6 },
  { label: "Fair", sublabel: "600-679", multiplier: 4 },
  { label: "Below 600", sublabel: "Under 600", multiplier: 2 },
];

const FLOOR = 5_000;
const CAP = 5_000_000;

function formatCurrency(n: number): string {
  if (n >= 1_000_000) {
    return `$${(n / 1_000_000).toFixed(1)}M`;
  }
  return `$${n.toLocaleString("en-US")}`;
}

export function Calculator() {
  const [creditIndex, setCreditIndex] = useState(1); // default "Good"
  const [revenue, setRevenue] = useState(50_000); // monthly revenue

  const estimated = useMemo(() => {
    const raw = revenue * creditOptions[creditIndex].multiplier;
    return Math.min(CAP, Math.max(FLOOR, raw));
  }, [creditIndex, revenue]);

  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mb-4">
              What could you qualify for?
            </h2>
            <p className="text-ink-secondary text-lg max-w-xl mx-auto">
              Get an instant estimate based on your credit profile and monthly
              revenue. No hard pull, no commitment.
            </p>
          </motion.div>

          {/* Calculator card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-rule-light"
          >
            {/* Credit Quality */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-ink mb-3">
                Credit Quality
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {creditOptions.map((opt, i) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => setCreditIndex(i)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer border ${
                      creditIndex === i
                        ? "bg-navy text-white border-navy"
                        : "bg-cream text-ink-secondary border-rule-light hover:border-rule"
                    }`}
                  >
                    <span className="block">{opt.label}</span>
                    <span
                      className={`block text-xs mt-0.5 ${
                        creditIndex === i ? "text-white/70" : "text-ink-faint"
                      }`}
                    >
                      {opt.sublabel}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Revenue Slider */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-ink">
                  Monthly Revenue
                </label>
                <span className="text-sm font-semibold text-navy tabular-nums">
                  {formatCurrency(revenue)}
                </span>
              </div>
              <input
                type="range"
                min={5000}
                max={1000000}
                step={5000}
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full h-2 bg-rule-light rounded-full appearance-none cursor-pointer accent-amber"
                aria-label="Monthly revenue slider"
              />
              <div className="flex justify-between text-xs text-ink-faint mt-2">
                <span>$5K</span>
                <span>$1M</span>
              </div>
            </div>

            {/* Result */}
            <div className="text-center py-6 bg-cream rounded-xl">
              <p className="text-sm text-ink-tertiary mb-2">
                Estimated Funding Amount
              </p>
              <p className="font-display text-4xl sm:text-5xl font-bold text-navy">
                {formatCurrency(estimated)}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-amber hover:bg-amber-dark rounded-lg transition-colors cursor-pointer"
              >
                Start Your Application
              </Link>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-ink-faint text-center mt-6 leading-relaxed max-w-md mx-auto">
              This calculator provides a rough estimate only and does not
              constitute a loan offer. Actual funding amounts depend on full
              underwriting review including credit history, time in business,
              cash flow, and other factors.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
