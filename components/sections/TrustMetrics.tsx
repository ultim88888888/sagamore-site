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
      className="py-5 overflow-hidden border-y border-rule-light/60 bg-cream"
      aria-label="Key business metrics"
    >
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: "marquee 35s linear infinite" }}
      >
        {/* Duplicate for seamless loop */}
        {[...metrics, ...metrics].map((text, i) => (
          <span
            key={i}
            className="text-sm font-medium text-ink-tertiary tracking-wide flex items-center gap-3 shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber/50 shrink-0" />
            {text}
          </span>
        ))}
      </div>
    </section>
  );
}
