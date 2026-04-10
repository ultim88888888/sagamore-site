"use client";

/**
 * TrustMetrics — horizontal scrolling stats ticker.
 * Provides kinetic contrast within the vertical scroll.
 * Reinforces key proof points as ambient motion.
 */

const metrics = [
  "$45M+ Capital Deployed",
  "4,000+ Companies Backed",
  "24hr Average Turnaround",
  "12 Funding Products",
  "500+ Minimum Credit Score",
  "No Hard Pull to Apply",
];

export function TrustMetrics() {
  return (
    <section
      className="py-8 sm:py-10 overflow-hidden border-y border-rule-light/60 bg-white"
      aria-label="Key business metrics"
    >
      <div
        className="flex gap-16 whitespace-nowrap"
        style={{ animation: "marquee 35s linear infinite" }}
      >
        {/* Duplicate for seamless loop */}
        {[...metrics, ...metrics].map((text, i) => (
          <span
            key={i}
            className="text-base sm:text-lg font-semibold text-ink-secondary tracking-wide flex items-center gap-4 shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
            {text}
          </span>
        ))}
      </div>
    </section>
  );
}
