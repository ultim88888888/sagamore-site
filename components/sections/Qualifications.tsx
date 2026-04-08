"use client";

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
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 tracking-tight">
              Think you might not qualify? You probably do.
            </h2>
            <p className="text-ink-secondary text-lg max-w-xl mx-auto leading-relaxed">
              Our minimum requirements are designed to be accessible. If your
              business meets these basics, there&apos;s likely a product for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            {criteria.map((c) => (
              <div key={c.label} className="text-center">
                <p className="text-3xl font-bold text-navy mb-1 tabular-nums">
                  {c.value}
                </p>
                <p className="text-sm font-semibold text-ink mb-1.5">
                  {c.label}
                </p>
                <p className="text-xs text-ink-tertiary leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-amber hover:opacity-85 rounded-xl transition-opacity cursor-pointer"
            >
              Check Your Eligibility
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
