import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  allProducts,
  getProductBySlug,
  getCategoryForSlug,
} from "@/lib/products";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  financialProductSchema,
  webPageSchema,
  SITE_URL,
} from "@/lib/seo";
import { FAQ } from "@/components/FAQ";
import { RelatedProducts } from "@/components/RelatedProducts";

/* ─── Static Params ─── */

export function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }));
}

/* ─── Metadata ─── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Not Found" };

  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `${SITE_URL}/services/${slug}`,
    },
    openGraph: {
      title: `${product.name} | Sagamore Financial Group`,
      description: product.description,
      url: `${SITE_URL}/services/${slug}`,
      type: "website",
      images: [{ url: `/og/${slug}.png` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Sagamore Financial Group`,
      description: product.description,
      images: [`/og/${slug}.png`],
    },
  };
}

/* ─── Icons ─── */

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

function ArrowLeftIcon() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 3L5 8l5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
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

function StepNumber({ n }: { n: number }) {
  return (
    <div className="w-9 h-9 rounded-full bg-azure flex items-center justify-center shrink-0">
      <span className="text-sm font-bold text-white">{n}</span>
    </div>
  );
}

/* ─── Page ─── */

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryForSlug(slug);

  // Find sibling products in the same category for navigation
  const siblings = category?.products ?? [];
  const currentIndex = siblings.findIndex((p) => p.slug === slug);
  const prevProduct = currentIndex > 0 ? siblings[currentIndex - 1] : null;
  const nextProduct =
    currentIndex < siblings.length - 1 ? siblings[currentIndex + 1] : null;

  const breadcrumbItems = [
    { name: "Services", path: "/services" },
  ];
  if (category) {
    breadcrumbItems.push({
      name: category.title,
      path: `/services#${category.id}`,
    });
  }
  breadcrumbItems.push({
    name: product.name,
    path: `/services/${slug}`,
  });

  return (
    <>
      {/* Structured data */}
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={financialProductSchema(product)} />
      <JsonLd
        data={webPageSchema(
          product.name,
          product.description,
          `/services/${slug}`
        )}
      />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-20 sm:pb-28 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-navy) 0%, var(--color-azure-deep) 50%, var(--color-azure) 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-12">
          <Image
            src={product.heroImage}
            alt={product.heroAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        {/* Mesh glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 60%, rgba(0,201,167,0.10) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 70% 30%, rgba(77,142,244,0.12) 0%, transparent 50%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, var(--color-surface), transparent)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link
              href="/services"
              className="hover:text-white/80 transition-colors cursor-pointer"
            >
              Services
            </Link>
            <span>/</span>
            {category && (
              <>
                <Link
                  href={`/services#${category.id}`}
                  className="hover:text-white/80 transition-colors cursor-pointer"
                >
                  {category.title}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-white/70">{product.name}</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
              {product.range}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 tracking-tight leading-[1.1]">
              {product.name}
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
              {product.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-accent hover:opacity-85 rounded-xl transition-opacity cursor-pointer"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white/80 border border-white/20 hover:border-white/40 rounded-xl transition-colors cursor-pointer"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + Features */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left column — Long description */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-6 tracking-tight">
                Overview
              </h2>
              <p className="text-base text-ink-secondary leading-relaxed mb-8">
                {product.longDescription}
              </p>

              {/* Features list */}
              <div className="border border-rule-light rounded-2xl p-6 sm:p-8">
                <h3 className="text-sm font-semibold tracking-widest uppercase text-azure mb-5">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-base text-ink-secondary"
                    >
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right column — Quick facts sidebar */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-28 space-y-5">
                {/* Funding range card */}
                <div className="border border-rule-light rounded-2xl p-6">
                  <p className="text-xs font-semibold tracking-widest uppercase text-ink-tertiary mb-2">
                    Funding Range
                  </p>
                  <p className="text-3xl font-bold text-azure-deep tracking-tight">
                    {product.range}
                  </p>
                </div>

                {/* Category badge */}
                {category && (
                  <div className="border border-rule-light rounded-2xl p-6">
                    <p className="text-xs font-semibold tracking-widest uppercase text-ink-tertiary mb-2">
                      Category
                    </p>
                    <p className="text-base font-semibold text-ink">
                      {category.title}
                    </p>
                    <p className="text-sm text-ink-tertiary mt-1">
                      {category.subtitle}
                    </p>
                  </div>
                )}

                {/* CTA card */}
                <div
                  className="rounded-2xl p-6 sm:p-7"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-azure-pale) 0%, var(--color-accent-pale) 100%)",
                  }}
                >
                  <p className="text-base font-bold text-ink mb-2">
                    Ready to get started?
                  </p>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-5">
                    Apply once and we will match you with the best options for
                    your business.
                  </p>
                  <Link
                    href="/apply"
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-white bg-azure hover:opacity-85 rounded-lg transition-opacity cursor-pointer"
                  >
                    Start Application
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, var(--color-surface-warm) 0%, var(--color-surface-deep) 50%, var(--color-surface-warm) 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-azure mb-3">
              Step by Step
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-10 tracking-tight">
              How {product.name} works
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {product.howItWorks.map((step, i) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-2xl border border-rule-light bg-white p-6"
              >
                <StepNumber n={i + 1} />
                <div>
                  <h3 className="text-base font-bold text-ink mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-azure mb-3">
              Why Choose This Product
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
              Built for growing businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {product.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="border border-rule-light rounded-2xl bg-white p-6 sm:p-7"
              >
                <h3 className="text-base font-bold text-ink mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Qualifies */}
      <section className="py-16 sm:py-24 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, var(--color-surface-warm) 0%, var(--color-surface-deep) 50%, var(--color-surface-warm) 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-azure mb-3">
              Eligibility
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-8 tracking-tight">
              Who qualifies for {product.name}
            </h2>
            <ul className="space-y-3">
              {product.whoQualifies.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-ink-secondary"
                >
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-azure mb-3">
              Real-World Scenarios
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-8 tracking-tight">
              Common use cases
            </h2>
            <div className="space-y-5">
              {product.useCases.map((useCase, i) => (
                <div
                  key={i}
                  className="border border-rule-light rounded-2xl bg-white p-6"
                >
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {useCase}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparisons */}
      <section className="py-16 sm:py-24 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, var(--color-surface-warm) 0%, var(--color-surface-deep) 50%, var(--color-surface-warm) 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-azure mb-3">
              Compare
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-6 tracking-tight">
              {product.name} vs. alternatives
            </h2>
            <p className="text-base text-ink-secondary leading-relaxed">
              {product.comparisons}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={product.faqs} productName={product.name} />

      {/* Related Products */}
      <RelatedProducts slugs={product.relatedProducts} />

      {/* Sibling Navigation */}
      {(prevProduct || nextProduct) && (
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="border-t border-rule-light pt-10 sm:pt-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-ink-tertiary mb-6">
                More in {category?.title}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {prevProduct && (
                  <Link
                    href={`/services/${prevProduct.slug}`}
                    className="group flex items-center gap-3 border border-rule-light rounded-2xl p-5 hover:border-azure/30 transition-colors cursor-pointer"
                  >
                    <span className="text-ink-tertiary group-hover:text-azure transition-colors">
                      <ArrowLeftIcon />
                    </span>
                    <div>
                      <p className="text-xs text-ink-tertiary mb-0.5">
                        Previous
                      </p>
                      <p className="text-sm font-semibold text-ink group-hover:text-azure transition-colors">
                        {prevProduct.name}
                      </p>
                    </div>
                  </Link>
                )}
                {nextProduct && (
                  <Link
                    href={`/services/${nextProduct.slug}`}
                    className="group flex items-center justify-end gap-3 border border-rule-light rounded-2xl p-5 hover:border-azure/30 transition-colors cursor-pointer sm:ml-auto"
                  >
                    <div className="text-right">
                      <p className="text-xs text-ink-tertiary mb-0.5">Next</p>
                      <p className="text-sm font-semibold text-ink group-hover:text-azure transition-colors">
                        {nextProduct.name}
                      </p>
                    </div>
                    <span className="text-ink-tertiary group-hover:text-azure transition-colors">
                      <ArrowRightIcon />
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

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
            Apply once and we will match you with the products that fit. Or
            reach out and talk to our team directly.
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
