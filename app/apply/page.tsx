import type { Metadata } from "next";
import { ApplicationForm } from "@/components/apply/ApplicationForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema, SITE_URL } from "@/lib/seo";
import { TrustBadges } from "@/components/TrustBadges";
import { TestimonialsCompact } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Apply for Business Funding",
  description:
    "Apply for business funding in minutes. One application connects you with lines of credit, SBA loans, equipment financing, and more. No credit impact to apply.",
  alternates: {
    canonical: `${SITE_URL}/apply`,
  },
  openGraph: {
    title: "Apply for Business Funding | Sagamore Financial Group",
    description:
      "Apply for business funding in minutes. One application connects you with lines of credit, SBA loans, equipment financing, and more. No credit impact to apply.",
    url: `${SITE_URL}/apply`,
    type: "website",
    images: [{ url: "/og/og-default.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply for Business Funding | Sagamore Financial Group",
    description:
      "Apply for business funding in minutes. One application connects you with lines of credit, SBA loans, equipment financing, and more. No credit impact to apply.",
    images: ["/og/og-default.jpg"],
  },
};

export default function ApplyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Apply", path: "/apply" }])} />
      <JsonLd
        data={webPageSchema(
          "Apply for Business Funding",
          "Apply for business funding in minutes. One application connects you with lines of credit, SBA loans, equipment financing, and more. No credit impact to apply.",
          "/apply"
        )}
      />
      <section className="pt-28 sm:pt-36 pb-20 sm:pb-28 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, var(--color-surface) 0%, var(--color-surface-warm) 70%, var(--color-surface-deep) 100%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto px-5 sm:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold tracking-widest uppercase text-azure mb-3">
              Apply for Funding
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-3 tracking-tight">
              Start your application
            </h1>
            <p className="text-ink-secondary leading-relaxed">
              One application, multiple lending options. Takes about five minutes.
            </p>
          </div>

          {/* Trust badges */}
          <div className="mb-8">
            <TrustBadges />
          </div>

          {/* Social proof */}
          <div className="mb-8">
            <TestimonialsCompact />
          </div>

          <ApplicationForm />
        </div>
      </section>
    </>
  );
}
