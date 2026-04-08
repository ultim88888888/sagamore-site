import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Sagamore Financial Group privacy policy. Learn how we collect, use, and protect your personal and business information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-gradient-to-b from-cream to-cream-deep">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-navy leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-ink-secondary text-lg">
            Last updated: April 8, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="prose-sagamore space-y-10">
            <div>
              <p className="text-ink-secondary leading-relaxed">
                Sagamore Financial Group (&ldquo;we,&rdquo;
                &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
                protecting the privacy of our clients, prospective clients, and
                website visitors. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our
                website or use our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Information We Collect
              </h2>
              <p className="text-ink-secondary leading-relaxed mb-4">
                We collect information that you provide directly to us, as well
                as information collected automatically when you use our website.
              </p>
              <h3 className="font-display text-lg font-semibold text-navy mb-2">
                Information You Provide
              </h3>
              <ul className="list-disc list-outside pl-5 text-ink-secondary leading-relaxed space-y-2">
                <li>
                  <strong className="text-ink">Personal information:</strong>{" "}
                  name, email address, phone number, date of birth, Social
                  Security Number, and home address when you submit an
                  application or inquiry form.
                </li>
                <li>
                  <strong className="text-ink">Business information:</strong>{" "}
                  business name, EIN, business address, entity type, start date,
                  ownership percentage, and revenue data.
                </li>
                <li>
                  <strong className="text-ink">Financial information:</strong>{" "}
                  credit score range, bank statements, and other documents
                  submitted as part of a funding application.
                </li>
                <li>
                  <strong className="text-ink">Communications:</strong> any
                  messages, questions, or feedback you send to us via our
                  contact form or email.
                </li>
              </ul>

              <h3 className="font-display text-lg font-semibold text-navy mt-6 mb-2">
                Information Collected Automatically
              </h3>
              <ul className="list-disc list-outside pl-5 text-ink-secondary leading-relaxed space-y-2">
                <li>
                  <strong className="text-ink">Usage data:</strong> pages
                  visited, time spent on pages, referring URLs, and other
                  browsing behavior.
                </li>
                <li>
                  <strong className="text-ink">Device information:</strong>{" "}
                  browser type, operating system, IP address, and device
                  identifiers.
                </li>
                <li>
                  <strong className="text-ink">Cookies:</strong> we use cookies
                  and similar technologies to improve your experience and
                  understand how our website is used. See the Cookies section
                  below for more detail.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc list-outside pl-5 text-ink-secondary leading-relaxed space-y-2">
                <li>
                  To process and evaluate your funding application and match you
                  with appropriate lending products.
                </li>
                <li>
                  To communicate with you about your application, account, or
                  inquiries.
                </li>
                <li>
                  To share your application information with our network of
                  lending partners for the purpose of providing you with funding
                  offers.
                </li>
                <li>
                  To improve our website, services, and customer experience.
                </li>
                <li>
                  To comply with legal obligations and enforce our terms of
                  service.
                </li>
                <li>
                  To detect, prevent, and address fraud or security issues.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Sharing of Information
              </h2>
              <p className="text-ink-secondary leading-relaxed mb-4">
                We do not sell your personal information. We may share your
                information in the following circumstances:
              </p>
              <ul className="list-disc list-outside pl-5 text-ink-secondary leading-relaxed space-y-2">
                <li>
                  <strong className="text-ink">Lending partners:</strong> we
                  share your application data with our network of lenders and
                  financial institutions to evaluate your funding options. Each
                  lending partner is bound by their own privacy policies and
                  applicable regulations.
                </li>
                <li>
                  <strong className="text-ink">Service providers:</strong> we
                  use third-party services for form processing, website hosting,
                  analytics, and communication. These providers only have access
                  to the data necessary to perform their services.
                </li>
                <li>
                  <strong className="text-ink">Legal compliance:</strong> we may
                  disclose information when required by law, subpoena, or
                  government request, or to protect our rights and safety.
                </li>
                <li>
                  <strong className="text-ink">Business transfers:</strong> in
                  the event of a merger, acquisition, or sale of assets, your
                  information may be transferred as part of the transaction.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Credit Inquiries
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                Submitting an application through Sagamore Financial Group may
                result in a soft credit inquiry, which does not affect your
                credit score. A hard credit inquiry will only be performed if
                you choose to accept a specific funding offer from one of our
                lending partners. You will always be notified before a hard
                inquiry is made.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-ink-secondary leading-relaxed mb-3">
                Our website uses cookies and similar technologies to:
              </p>
              <ul className="list-disc list-outside pl-5 text-ink-secondary leading-relaxed space-y-2">
                <li>Remember your preferences and settings.</li>
                <li>
                  Understand how you navigate our website so we can improve it.
                </li>
                <li>
                  Measure the effectiveness of our marketing efforts.
                </li>
              </ul>
              <p className="text-ink-secondary leading-relaxed mt-3">
                You can manage cookie preferences through your browser settings.
                Disabling cookies may affect the functionality of certain parts
                of our website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Data Security
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                We implement industry-standard security measures to protect your
                information, including encryption of sensitive data in transit
                and at rest, access controls, and regular security assessments.
                However, no method of electronic transmission or storage is
                completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Data Retention
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                We retain your information for as long as necessary to fulfill
                the purposes described in this policy, comply with legal
                obligations, resolve disputes, and enforce our agreements. When
                your information is no longer needed, we will securely delete or
                anonymize it.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Your Rights
              </h2>
              <p className="text-ink-secondary leading-relaxed mb-3">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc list-outside pl-5 text-ink-secondary leading-relaxed space-y-2">
                <li>
                  Access the personal information we hold about you.
                </li>
                <li>
                  Request correction of inaccurate or incomplete information.
                </li>
                <li>
                  Request deletion of your personal information, subject to
                  legal retention requirements.
                </li>
                <li>
                  Opt out of certain data processing activities.
                </li>
                <li>
                  Withdraw consent where processing is based on consent.
                </li>
              </ul>
              <p className="text-ink-secondary leading-relaxed mt-3">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:info@sagamorefinancialgroup.com"
                  className="text-amber-dark hover:text-amber transition-colors cursor-pointer"
                >
                  info@sagamorefinancialgroup.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Third-Party Links
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices of
                these external sites. We encourage you to review the privacy
                policies of any third-party services you interact with.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                Our services are not directed to individuals under the age of
                18. We do not knowingly collect personal information from
                minors. If we learn that we have collected information from a
                child under 18, we will take steps to delete that information
                promptly.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Changes to This Policy
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                We may update this Privacy Policy from time to time. When we
                make material changes, we will update the &ldquo;Last
                updated&rdquo; date at the top of this page. We encourage you
                to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Contact Us
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                If you have questions about this Privacy Policy or our data
                practices, please contact us at:
              </p>
              <div className="mt-4 bg-white rounded-xl p-6 border border-rule-light">
                <p className="font-semibold text-ink mb-1">
                  Sagamore Financial Group
                </p>
                <p className="text-ink-secondary text-sm">
                  Email:{" "}
                  <a
                    href="mailto:info@sagamorefinancialgroup.com"
                    className="text-amber-dark hover:text-amber transition-colors cursor-pointer"
                  >
                    info@sagamorefinancialgroup.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
