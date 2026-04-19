import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/products";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "12 Business Funding Products",
  description:
    "Explore 12 business funding products — lines of credit, SBA loans, equipment financing, factoring, commercial mortgages, and more. One application, multiple options.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "12 Business Funding Products | Sagamore Financial Group",
    description:
      "Explore 12 business funding products — lines of credit, SBA loans, equipment financing, factoring, commercial mortgages, and more. One application, multiple options.",
    url: `${SITE_URL}/services`,
    type: "website",
    images: [{ url: "/og/services.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "12 Business Funding Products | Sagamore Financial Group",
    description:
      "Explore 12 business funding products — lines of credit, SBA loans, equipment financing, factoring, commercial mortgages, and more. One application, multiple options.",
    images: ["/og/services.png"],
  },
};

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-accent shrink-0 mt-0.5"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8.5l3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 3l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Services", path: "/services" }])}
      />
      <JsonLd
        data={webPageSchema(
          "12 Business Funding Products",
          "Explore 12 business funding products — lines of credit, SBA loans, equipment financing, factoring, commercial mortgages, and more. One application, multiple options.",
          "/services"
        )}
      />
      {/* Page header with hero image */}
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
            src="/images/hero-services.jpg"
            alt="Team meeting to discuss business funding strategies and options"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 tracking-tight leading-[1.12]">
              Twelve products. One application.
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Whatever your business needs -- growth capital, asset financing,
              real estate, or credit building -- we have a product that fits. One
              form, multiple options, and a team that knows the landscape.
            </p>
          </div>
        </div>
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, var(--color-surface), transparent)",
          }}
        />
      </section>

      {/* Category sections */}
      {categories.map((category, catIndex) => (
        <section
          key={category.id}
          id={category.id}
          className="py-16 sm:py-24 scroll-mt-20 relative"
        >
          {/* Alternating subtle tint */}
          {catIndex % 2 === 1 && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, var(--color-surface-warm) 0%, var(--color-surface-deep) 50%, var(--color-surface-warm) 100%)",
              }}
            />
          )}

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-2 tracking-tight">
                {category.title}
              </h2>
              <p className="text-ink-secondary text-base leading-relaxed max-w-xl">
                {category.subtitle}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {category.products.map((product) => (
                <Link
                  key={product.name}
                  href={`/services/${product.slug}`}
                  className="group rounded-2xl border border-rule-light bg-white p-6 sm:p-7 flex flex-col hover:border-azure/30 transition-colors cursor-pointer"
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-ink mb-1 group-hover:text-azure transition-colors duration-150">
                      {product.name}
                    </h3>
                    <p className="text-sm font-semibold text-azure">
                      {product.range}
                    </p>
                  </div>

                  <p className="text-sm text-ink-secondary leading-relaxed mb-5 flex-1">
                    {product.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-ink-secondary"
                      >
                        <CheckIcon />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-azure group-hover:gap-2.5 transition-all duration-200">
                    Learn more
                    <ArrowIcon />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 70% 40%, rgba(27,111,238,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 30% 60%, rgba(0,201,167,0.08) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Not sure which product is right?
          </h2>
          <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
            Apply once and we will match you with the products that fit. Or reach
            out and talk to our team directly.
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
