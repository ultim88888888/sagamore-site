"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { TrustBadges } from "@/components/TrustBadges";

const creditOptions = [
  { label: "Sub 590", sublabel: "Rebuilding" },
  { label: "600–670", sublabel: "Fair" },
  { label: "680–740", sublabel: "Good" },
  { label: "750–800", sublabel: "Excellent" },
];

/** Credit tier discounts applied to the revenue-based multiplier */
const CREDIT_DISCOUNTS = [0.7, 0.78, 0.85, 1.0];

/** Multiplier derived from revenue tier, then discounted by credit quality */
function getMultiplier(revenue: number, creditIndex: number): number {
  const base =
    revenue <= 200_000
      ? 1.5
      : revenue <= 500_000
        ? 2.3
        : revenue <= 1_000_000
          ? 2.5
          : 2.7;
  return base * CREDIT_DISCOUNTS[creditIndex];
}

const FLOOR = 15_000;
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
  const [creditIndex, setCreditIndex] = useState(3);
  const [revenue, setRevenue] = useState(50_000);

  const estimated = useMemo(() => {
    const raw = revenue * getMultiplier(revenue, creditIndex);
    return Math.min(CAP, Math.max(FLOOR, raw));
  }, [creditIndex, revenue]);

  return (
    <section className="relative min-h-[105vh] flex items-center overflow-hidden">
      {/* Deep gradient background — azure to navy */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--color-navy) 0%, var(--color-azure-deep) 40%, var(--color-azure) 80%, var(--color-azure-light) 100%)",
        }}
      />

      {/* Background photo — small business context */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="/images/hero-homepage.jpg"
          alt="Business professionals collaborating in a modern office meeting"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Subtle mesh texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 60%, rgba(0,201,167,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 30%, rgba(77,142,244,0.15) 0%, transparent 50%)",
        }}
      />

      {/* Bottom gradient fade into page surface */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, var(--color-surface), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-28 sm:pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column — messaging */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-5">
              Business Funding, Built on Trust
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.12] mb-5 tracking-tight">
              The capital your business needs.{" "}
              <span className="text-white/60 font-medium">
                The partner it deserves.
              </span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-lg mb-8">
              Sagamore Financial Group matches your business with funding that
              fits &mdash; from working capital and SBA loans to equipment
              financing and beyond. One application, multiple options, zero
              guesswork.
            </p>

            {/* Trust stats — inline on dark */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
              {[
                { value: "$45M+", label: "Capital Deployed" },
                { value: "4,000+", label: "Companies Backed" },
                { value: "24hrs", label: "Avg. Turnaround" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-white tabular-nums">
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/50 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-7 py-3 text-base font-semibold text-white bg-accent hover:opacity-85 rounded-xl transition-opacity cursor-pointer"
              >
                Apply Now
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-3 text-base font-medium text-white/90 border border-white/25 hover:border-white/50 rounded-xl transition-colors cursor-pointer"
              >
                View Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-6">
              <TrustBadges variant="dark" />
            </div>
          </div>

          {/* Right column — Qualification Calculator */}
          <div className="lg:sticky lg:top-28">
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl shadow-black/10">
              <h2 className="text-lg font-bold text-ink mb-1">
                What could you qualify for?
              </h2>
              <p className="text-sm text-ink-tertiary mb-4 sm:mb-6">
                Instant estimate &mdash; no commitment required.
              </p>

              {/* Credit Quality */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-sm font-medium text-ink mb-2.5">
                  Credit Quality
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                  {creditOptions.map((opt, i) => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => setCreditIndex(i)}
                      className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 cursor-pointer border ${
                        creditIndex === i
                          ? "bg-azure text-white border-azure"
                          : "bg-surface text-ink-secondary border-rule-light hover:border-rule"
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
              <div className="mb-5 sm:mb-8">
                <div className="flex items-center justify-between mb-2.5">
                  <label className="text-sm font-medium text-ink">
                    Monthly Revenue
                  </label>
                  <span className="text-sm font-bold text-azure tabular-nums">
                    {revenue >= 1_000_000
                      ? `$${(revenue / 1_000_000).toFixed(1)}M`
                      : `$${revenue.toLocaleString("en-US")}`}
                  </span>
                </div>
                <input
                  type="range"
                  min={15000}
                  max={3000000}
                  step={5000}
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-2 rounded-full"
                  aria-label="Monthly revenue slider"
                />
                <div className="flex justify-between text-xs text-ink-faint mt-1.5">
                  <span>$15K</span>
                  <span>$3M</span>
                </div>
              </div>

              {/* Result */}
              <div className="text-center py-4 sm:py-5 rounded-xl mb-4 sm:mb-6" style={{ background: "linear-gradient(135deg, var(--color-azure-pale) 0%, var(--color-accent-pale) 100%)" }}>
                <p className="text-xs text-ink-tertiary mb-1.5 uppercase tracking-wide font-medium">
                  Estimated Funding
                </p>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-azure-deep tabular-nums tracking-tight">
                  {formatCurrency(estimated)}
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/apply"
                className="flex items-center justify-center w-full px-8 py-3.5 text-base font-semibold text-white bg-accent hover:opacity-85 rounded-xl transition-opacity cursor-pointer"
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
