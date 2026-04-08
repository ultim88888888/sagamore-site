"use client";

/**
 * ValueProp — why Sagamore, told through 3 differentiators.
 * Not generic cards — each one is a concise value statement.
 */

const props = [
  {
    title: "One Application, Many Options",
    description:
      "You fill out one form. We shop it across our network of lenders and bring back the offers that actually fit your situation. No application fatigue.",
  },
  {
    title: "Honest Guidance, Not Sales Pressure",
    description:
      "We earn when you fund, but we only recommend products that make sense for your business. If the timing is not right, we will tell you.",
  },
  {
    title: "Speed Without Shortcuts",
    description:
      "Most clients receive a decision within 24 hours. We move fast because we have the relationships and infrastructure — not because we skip due diligence.",
  },
];

export function ValueProp() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-amber-dark mb-3">
            Why Sagamore
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 tracking-tight">
            Capital should empower, not complicate
          </h2>
          <p className="text-ink-secondary text-lg leading-relaxed">
            Too many businesses get lost in the lending maze. We built Sagamore
            to be the guide you wish you had from the start.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {props.map((prop, i) => (
            <div key={prop.title} className="relative">
              {/* Numbered accent */}
              <span className="text-5xl font-bold text-amber/15 tabular-nums block mb-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-bold text-navy mb-2">
                {prop.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
