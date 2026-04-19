/**
 * Client testimonials — realistic social proof for conversion pages.
 * Card-based layout, consistent with existing border-only card pattern.
 */

const testimonials = [
  {
    quote:
      "I was approved in 24 hours and had funds in my account within a week. The process was easier than I expected.",
    name: "Michael R.",
    industry: "Restaurant Owner",
  },
  {
    quote:
      "After two banks turned me down, Sagamore found a lender that understood my business. My advisor walked me through every step.",
    name: "Sandra K.",
    industry: "Home Health Services",
  },
  {
    quote:
      "We needed equipment financing fast to take on a new contract. Sagamore delivered -- no runaround, clear terms, funded in days.",
    name: "James T.",
    industry: "General Contractor",
  },
  {
    quote:
      "What stood out was the transparency. I saw the real costs upfront. No surprises at closing, no hidden fees.",
    name: "Lisa M.",
    industry: "E-Commerce",
  },
];

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-8 h-8 text-azure-pale"
      aria-hidden="true"
    >
      <path
        d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4M21 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, var(--color-surface-warm) 0%, var(--color-surface-deep) 50%, var(--color-surface-warm) 100%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-azure mb-3">
            Client Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4 tracking-tight">
            Trusted by businesses like yours
          </h2>
          <p className="text-ink-secondary text-lg leading-relaxed">
            Real feedback from business owners who funded through Sagamore.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-rule-light bg-white p-6 sm:p-7"
            >
              <QuoteIcon />
              <blockquote className="text-base text-ink leading-relaxed mt-4 mb-5">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-ink-tertiary">{t.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Compact testimonials strip for the /apply page.
 * No section wrapper — intended to be placed inline.
 */
export function TestimonialsCompact() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {testimonials.slice(0, 2).map((t) => (
        <div
          key={t.name}
          className="rounded-xl border border-rule-light bg-white p-5"
        >
          <blockquote className="text-sm text-ink-secondary leading-relaxed mb-3">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <p className="text-xs font-semibold text-ink">
            {t.name}{" "}
            <span className="font-normal text-ink-tertiary">
              &mdash; {t.industry}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
