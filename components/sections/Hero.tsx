"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const creditOptions = [
  { label: "Excellent", sublabel: "720+", multiplier: 8 },
  { label: "Good", sublabel: "680-719", multiplier: 6 },
  { label: "Fair", sublabel: "600-679", multiplier: 4 },
  { label: "Below 600", sublabel: "<600", multiplier: 2 },
];

const FLOOR = 5_000;
const CAP = 5_000_000;

function formatCurrency(n: number): string {
  if (n >= 1_000_000) {
    const m = n / 1_000_000;
    return `$${m % 1 === 0 ? m.toFixed(0) : m.toFixed(1)}M`;
  }
  if (n >= 1_000) {
    return `$${(n / 1_000).toLocaleString("en-US")}K`;
  }
  return `$${n.toLocaleString("en-US")}`;
}

export function HeroSection() {
  const [creditIndex, setCreditIndex] = useState(1);
  const [revenue, setRevenue] = useState(50_000);

  const estimated = useMemo(() => {
    const raw = revenue * creditOptions[creditIndex].multiplier;
    return Math.min(CAP, Math.max(FLOOR, raw));
  }, [creditIndex, revenue]);

  return (
    <section className="relative min-h-[105vh] flex items-center overflow-hidden">
      {/* Warm ambient gradient — page opens with warmth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #FBF8F3 0%, #F5EFE5 60%, #EDE7DB 100%)",
        }}
      />
      {/* Subtle radial glow near the calculator */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 70% 35%, rgba(212,137,26,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column — messaging */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-amber-dark mb-5">
              Business Funding, Built on Trust
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-navy leading-[1.12] mb-5 tracking-tight">
              The capital your business needs.{" "}
              <span className="text-ink-secondary font-medium">
                The partner it deserves.
              </span>
            </h1>

            <p className="text-lg text-ink-secondary leading-relaxed max-w-lg mb-8">
              Sagamore Financial Group matches your business with funding that
              fits &mdash; from working capital and SBA loans to equipment
              financing and beyond. One application, multiple options, zero
              guesswork.
            </p>

            {/* Trust stats — inline */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
              {[
                { value: "$45M+", label: "Capital Deployed" },
                { value: "4,000+", label: "Companies Backed" },
                { value: "24hrs", label: "Avg. Turnaround" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-navy tabular-nums">
                    {stat.value}
                  </p>
                  <p className="text-xs text-ink-tertiary mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-7 py-3 text-base font-semibold text-white bg-amber hover:opacity-85 rounded-xl transition-opacity cursor-pointer"
              >
                Start Your Application
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-3 text-base font-medium text-ink-secondary border border-rule hover:border-ink rounded-xl transition-colors cursor-pointer"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Right column — Qualification Calculator */}
          <div className="lg:sticky lg:top-28">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-rule-light">
              <h2 className="text-lg font-bold text-navy mb-1">
                What could you qualify for?
              </h2>
              <p className="text-sm text-ink-tertiary mb-6">
                Instant estimate &mdash; no credit pull required.
              </p>

              {/* Credit Quality */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-ink mb-2.5">
                  Credit Quality
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {creditOptions.map((opt, i) => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => setCreditIndex(i)}
                      className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 cursor-pointer border ${
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
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2.5">
                  <label className="text-sm font-medium text-ink">
                    Monthly Revenue
                  </label>
                  <span className="text-sm font-bold text-navy tabular-nums">
                    {revenue >= 1_000_000
                      ? `$${(revenue / 1_000_000).toFixed(1)}M`
                      : `$${revenue.toLocaleString("en-US")}`}
                  </span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={2000000}
                  step={5000}
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-2 rounded-full"
                  aria-label="Monthly revenue slider"
                />
                <div className="flex justify-between text-xs text-ink-faint mt-1.5">
                  <span>$5K</span>
                  <span>$2M+</span>
                </div>
              </div>

              {/* Result */}
              <div className="text-center py-5 bg-cream rounded-xl mb-6">
                <p className="text-xs text-ink-tertiary mb-1.5 uppercase tracking-wide font-medium">
                  Estimated Funding
                </p>
                <p className="text-4xl sm:text-5xl font-bold text-navy tabular-nums tracking-tight">
                  {formatCurrency(estimated)}
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/apply"
                className="flex items-center justify-center w-full px-8 py-3.5 text-base font-semibold text-white bg-amber hover:opacity-85 rounded-xl transition-opacity cursor-pointer"
              >
                See Your Options
              </Link>

              <p className="text-[11px] text-ink-faint text-center mt-4 leading-relaxed">
                Rough estimate only. Does not constitute a loan offer. Actual
                amounts depend on full underwriting review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
