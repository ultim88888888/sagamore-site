import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us — Your Business Funding Partner",
  description:
    "Sagamore Financial Group is a lending brokerage that matches small and mid-size businesses with the right capital. One application, hundreds of lenders, dedicated guidance.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Us — Your Business Funding Partner | Sagamore Financial Group",
    description:
      "Sagamore Financial Group is a lending brokerage that matches small and mid-size businesses with the right capital. One application, hundreds of lenders, dedicated guidance.",
    url: `${SITE_URL}/about`,
    type: "website",
    images: [{ url: "/og/about.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Your Business Funding Partner | Sagamore Financial Group",
    description:
      "Sagamore Financial Group is a lending brokerage that matches small and mid-size businesses with the right capital. One application, hundreds of lenders, dedicated guidance.",
    images: ["/og/about.jpg"],
  },
};

const pillars = [
  {
    title: "The Broker Advantage",
    description:
      "Banks offer their own products. We shop yours across hundreds of lenders. One application unlocks term loans, lines of credit, SBA programs, equipment financing, and more -- all competing for your business. More options means better terms, and you never have to fill out another form.",
    icon: (
      <svg
        className="w-6 h-6 text-azure"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Dedicated Guidance",
    description:
      "You get one advisor who manages your file from the first conversation through funding and beyond. No handoffs between departments, no repeating your story to a new rep. Your advisor knows your business, understands your numbers, and fights for the best terms on your behalf.",
    icon: (
      <svg
        className="w-6 h-6 text-azure"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Speed That Matters",
    description:
      "Most clients receive a funding decision within 24 hours. That is not a marketing number -- it is a byproduct of deep lender relationships and a team that knows how to package a deal. When your lender trusts your broker, the file moves faster.",
    icon: (
      <svg
        className="w-6 h-6 text-azure"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: "$45M+", label: "Capital Deployed" },
  { value: "4,000+", label: "Companies Backed" },
  { value: "24hrs", label: "Avg. Turnaround" },
];

const steps = [
  {
    number: "01",
    title: "We listen first",
    description:
      "Before we recommend a product, we learn your business. Revenue, seasonality, growth plans, cash flow patterns -- the context that a generic application misses.",
  },
  {
    number: "02",
    title: "We match, not push",
    description:
      "Your profile goes to lenders who are the right fit, not every lender in our network. Targeted matching means fewer declines and better offers.",
  },
  {
    number: "03",
    title: "We stay transparent",
    description:
      "You see the real costs upfront. Factor rates, origination fees, repayment terms -- all laid out clearly before you sign anything. No fine-print surprises.",
  },
  {
    number: "04",
    title: "We stick around",
    description:
      "Funding is not the end of the relationship. When your business grows and your needs change, your advisor is already up to speed. Renewals, new products, better terms -- we handle it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about" }])} />
      {/* ── Hero ── */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-navy) 0%, var(--color-azure-deep) 50%, var(--color-azure) 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        {/* Bottom fade into surface */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, var(--color-surface), transparent)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.12]">
              Built to serve the businesses banks overlook
            </h1>
            <div className="space-y-4 text-lg text-white/70 leading-relaxed">
              <p>
                Most small and mid-size businesses don&apos;t fit the traditional
                bank mold. The revenue is there, the growth is real, but the
                paperwork, the wait times, and the rigid criteria make bank
                lending feel like it was designed for someone else. It usually
                was.
              </p>
              <p>
                Sagamore Financial Group exists because we saw that gap up close.
                As a lending brokerage, we don&apos;t make loans ourselves -- we
                connect businesses with the right lender from a deep network of
                partners across every product type. Term loans, lines of credit,
                SBA programs, equipment financing, factoring, commercial real
                estate -- wherever the fit is, we find it.
              </p>
              <p>
                The difference is how we work. We&apos;re relationship-driven,
                not transactional. Every client gets a dedicated advisor who
                understands their business, their numbers, and their goals. We
                succeed when you fund, so our incentives are aligned -- but we
                only recommend products that genuinely make sense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Sagamore Difference ── */}
      <section className="py-20 sm:py-28 relative">
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
              The Sagamore Difference
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4 tracking-tight">
              What a broker does that a bank can&apos;t
            </h2>
            <p className="text-ink-secondary text-lg leading-relaxed">
              Working with Sagamore means working with someone who has access to
              the entire lending landscape -- not just one institution&apos;s
              product shelf.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-rule-light bg-white p-6 sm:p-7"
              >
                <div className="w-11 h-11 rounded-xl bg-azure-pale flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="py-14 sm:py-16 relative">
        <div className="absolute inset-0 bg-surface-deep" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 lg:gap-24">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8 sm:gap-16 lg:gap-24">
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-azure tabular-nums tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-sm text-ink-tertiary mt-1">
                    {stat.label}
                  </p>
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden sm:block w-px h-10 bg-rule-light" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-azure-deep) 0%, var(--color-azure) 50%, var(--color-azure-light) 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-[8%]">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 80% 20%, rgba(0,201,167,0.15) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left -- intro */}
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Our Approach
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                Relationships over transactions
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                The lending industry is full of brokers who chase volume. We
                built Sagamore around a different idea: understand the business
                first, then find the capital. It takes longer per client, but it
                works better for everyone.
              </p>
            </div>

            {/* Right -- steps */}
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

      {/* ── CTA Banner ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 30% 50%, rgba(27,111,238,0.15) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 70% 50%, rgba(0,201,167,0.1) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to explore your options?
          </h2>
          <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
            One application. Hundreds of lenders. A dedicated advisor who knows
            your business. See what you qualify for -- no credit impact to apply.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-accent hover:opacity-85 rounded-xl transition-opacity cursor-pointer"
            >
              Start Your Application
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white/80 border border-white/20 hover:border-white/40 rounded-xl transition-colors cursor-pointer"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
