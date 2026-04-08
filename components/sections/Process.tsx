"use client";

const steps = [
  {
    number: "01",
    title: "Tell us about your business",
    description:
      "One short application, about five minutes. No hard credit pull at this stage.",
  },
  {
    number: "02",
    title: "We match you with the right product",
    description:
      "Our team reviews your profile and identifies funding options that fit your revenue, credit, and timeline.",
  },
  {
    number: "03",
    title: "Review your offers",
    description:
      "You receive tailored offers with clear terms. No hidden fees, no fine-print surprises.",
  },
  {
    number: "04",
    title: "Get funded",
    description:
      "Accept the offer that works best. Most clients receive funds within 24 hours of approval.",
  },
];

export function Process() {
  return (
    <section className="py-20 sm:py-28 relative">
      {/* Subtle background temperature shift — slightly cooler here */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(27,43,58,0.03) 30%, rgba(27,43,58,0.06) 70%, transparent 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — intro */}
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold tracking-widest uppercase text-amber-dark mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 tracking-tight">
              Application to funding in four steps
            </h2>
            <p className="text-ink-secondary text-lg leading-relaxed">
              We keep things straightforward. No jargon, no runaround. You focus
              on your business &mdash; we handle the capital search.
            </p>
          </div>

          {/* Right — steps */}
          <div className="lg:col-span-3">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`flex gap-5 py-7 ${
                  i < steps.length - 1 ? "border-b border-rule-light" : ""
                }`}
              >
                <span className="text-3xl font-bold text-amber/60 tabular-nums shrink-0 w-10">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-base font-bold text-navy mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
