"use client";

import Image from "next/image";

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
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Full-bleed azure background with gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--color-azure-deep) 0%, var(--color-azure) 50%, var(--color-azure-light) 100%)",
        }}
      />

      {/* Background photo for texture */}
      <div className="absolute inset-0 opacity-8">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 80% 20%, rgba(0,201,167,0.15) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — intro */}
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Application to funding in four steps
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
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
                  i < steps.length - 1 ? "border-b border-white/15" : ""
                }`}
              >
                <span className="text-3xl font-bold text-accent/70 tabular-nums shrink-0 w-10">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
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
