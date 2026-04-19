"use client";

import Image from "next/image";

/**
 * ValueProp — why Sagamore, told through 3 differentiators.
 * Each card has a relevant photo to break up the text-heaviness.
 */

const props = [
  {
    title: "One Application, Many Options",
    description:
      "You fill out one form. We shop it across our network of lenders and bring back the offers that actually fit your situation. No application fatigue.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    imageAlt: "Business team collaborating around a desk",
    imagePosition: "center 40%" as const,
  },
  {
    title: "Honest Guidance, Not Sales Pressure",
    description:
      "We earn when you fund, but we only recommend products that make sense for your business. If the timing is not right, we will tell you.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80",
    imageAlt: "One-on-one consultation between two professionals",
    imagePosition: "center 35%" as const,
  },
  {
    title: "Speed Without Shortcuts",
    description:
      "Most clients receive a decision within 24 hours. We move fast because we have the relationships and infrastructure — not because we skip due diligence.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    imageAlt: "Dashboard showing business analytics and growth charts",
    imagePosition: "center" as const,
  },
];

export function ValueProp() {
  return (
    <section className="py-20 sm:py-28 relative">
      {/* Subtle background gradient — warm into the section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, var(--color-surface) 0%, var(--color-surface-warm) 50%, var(--color-surface) 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-azure mb-3">
            Why Sagamore
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4 tracking-tight">
            Capital should empower, not complicate
          </h2>
          <p className="text-ink-secondary text-lg leading-relaxed">
            Too many businesses get lost in the lending maze. We built Sagamore
            to be the guide you wish you had from the start.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {props.map((prop, i) => (
            <div
              key={prop.title}
              className="group relative rounded-2xl overflow-hidden border border-rule-light bg-white"
            >
              {/* Card photo */}
              <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden">
                <Image
                  src={prop.image}
                  alt={prop.imageAlt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: prop.imagePosition }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Accent number overlay */}
                <div className="absolute bottom-3 left-4">
                  <span className="text-4xl font-bold text-white/80 tabular-nums drop-shadow-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              {/* Card content */}
              <div className="p-6">
                <h3 className="text-base font-bold text-ink mb-2">
                  {prop.title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
