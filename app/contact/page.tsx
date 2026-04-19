import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sagamore Financial Group. Questions about business funding, applications, or our products? Our team responds within one business day.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Us | Sagamore Financial Group",
    description:
      "Get in touch with Sagamore Financial Group. Questions about business funding, applications, or our products? Our team responds within one business day.",
    url: `${SITE_URL}/contact`,
    type: "website",
    images: [{ url: "/og/contact.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Sagamore Financial Group",
    description:
      "Get in touch with Sagamore Financial Group. Questions about business funding, applications, or our products? Our team responds within one business day.",
    images: ["/og/contact.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])}
      />
      <section className="pt-28 sm:pt-36 pb-20 sm:pb-28 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, var(--color-surface) 0%, var(--color-surface-warm) 70%, var(--color-surface-deep) 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — info */}
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-azure mb-4">
                Contact Us
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-5 tracking-tight">
                Let&apos;s talk about your funding needs
              </h1>
              <p className="text-ink-secondary text-lg leading-relaxed mb-10">
                Have questions about our products? Not sure where to start? Reach
                out and we will point you in the right direction. No pressure,
                no obligation.
              </p>

              <div className="space-y-6">
                <div>
                  <h2 className="text-sm font-semibold text-ink mb-1">Email</h2>
                  <a
                    href="mailto:info@sagamorefinancialgroup.com"
                    className="text-azure hover:text-azure-dark transition-colors cursor-pointer"
                  >
                    info@sagamorefinancialgroup.com
                  </a>
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-ink mb-1">
                    Response Time
                  </h2>
                  <p className="text-ink-secondary text-sm">
                    We typically respond within one business day.
                  </p>
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-ink mb-1">
                    Office Hours
                  </h2>
                  <p className="text-ink-secondary text-sm">
                    Monday through Friday, 9am &ndash; 6pm EST
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
