import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Sagamore Financial Group terms of service. Read the terms and conditions governing your use of our website and services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-gradient-to-b from-cream to-cream-deep">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-navy leading-tight mb-4">
            Terms of Service
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
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
                the Sagamore Financial Group website and services. By accessing
                or using our website, submitting an application, or engaging
                with our services, you agree to be bound by these Terms. If you
                do not agree, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                About Our Services
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                Sagamore Financial Group operates as a business funding
                brokerage. We connect businesses seeking capital with a network
                of lenders and financial institutions. We are not a direct
                lender. We do not make lending decisions, set interest rates, or
                determine loan terms. Our role is to facilitate introductions
                between you and potential lending partners based on the
                information you provide.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Eligibility
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                To use our services, you must be at least 18 years old, a legal
                resident or citizen of the United States, and authorized to act
                on behalf of the business for which you are seeking funding.
                Submitting an application on behalf of a business without proper
                authorization is prohibited.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Application Process
              </h2>
              <p className="text-ink-secondary leading-relaxed mb-3">
                When you submit an application through our website:
              </p>
              <ul className="list-disc list-outside pl-5 text-ink-secondary leading-relaxed space-y-2">
                <li>
                  You represent that all information provided is accurate,
                  complete, and truthful to the best of your knowledge.
                </li>
                <li>
                  You authorize Sagamore Financial Group and its lending
                  partners to verify the information you provide, including
                  performing soft credit inquiries.
                </li>
                <li>
                  Submitting an application does not guarantee approval for any
                  funding product.
                </li>
                <li>
                  A hard credit inquiry will only be performed if you choose to
                  accept a specific funding offer. You will be notified before
                  any hard inquiry is made.
                </li>
                <li>
                  We may share your application information with multiple
                  lending partners to identify the best funding options for your
                  business.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                No Guarantee of Funding
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                Sagamore Financial Group does not guarantee that you will
                receive a funding offer, that any specific terms will be
                available, or that a transaction will be completed. All funding
                decisions are made solely by our lending partners based on their
                own underwriting criteria. Information about products, rates,
                and terms provided on our website is for general informational
                purposes and may change without notice.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Fees and Compensation
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                There is no cost to you for submitting an application or
                receiving funding offers through Sagamore Financial Group.
                Sagamore Financial Group may receive compensation from lending
                partners when a transaction is completed. This compensation does
                not increase the cost of your funding. Any fees associated with
                a specific funding product will be disclosed to you by the
                lending partner before you accept an offer.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Intellectual Property
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                All content on this website, including text, graphics, logos,
                images, and software, is the property of Sagamore Financial
                Group or its content suppliers and is protected by applicable
                intellectual property laws. You may not reproduce, distribute,
                modify, or create derivative works from any content on this
                website without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Prohibited Conduct
              </h2>
              <p className="text-ink-secondary leading-relaxed mb-3">
                You agree not to:
              </p>
              <ul className="list-disc list-outside pl-5 text-ink-secondary leading-relaxed space-y-2">
                <li>
                  Provide false, misleading, or fraudulent information in any
                  application or communication.
                </li>
                <li>
                  Use our website or services for any unlawful purpose.
                </li>
                <li>
                  Attempt to gain unauthorized access to our systems, networks,
                  or data.
                </li>
                <li>
                  Interfere with or disrupt the operation of our website.
                </li>
                <li>
                  Scrape, harvest, or collect information from our website using
                  automated means without our express written consent.
                </li>
                <li>
                  Submit applications on behalf of a business without proper
                  authorization from that business.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Disclaimer of Warranties
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                Our website and services are provided on an &ldquo;as
                is&rdquo; and &ldquo;as available&rdquo; basis, without
                warranties of any kind, either express or implied. We disclaim
                all warranties, including but not limited to implied warranties
                of merchantability, fitness for a particular purpose, and
                non-infringement. We do not warrant that our website will be
                uninterrupted, secure, or error-free.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Limitation of Liability
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                To the fullest extent permitted by law, Sagamore Financial
                Group, its officers, directors, employees, and agents shall not
                be liable for any indirect, incidental, special, consequential,
                or punitive damages, including but not limited to loss of
                profits, data, or business opportunities, arising out of or
                related to your use of our website or services, regardless of
                the theory of liability.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Indemnification
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                You agree to indemnify and hold harmless Sagamore Financial
                Group and its officers, directors, employees, and agents from
                any claims, damages, losses, liabilities, and expenses
                (including reasonable attorneys&apos; fees) arising out of or
                related to your use of our services, your violation of these
                Terms, or your violation of any rights of a third party.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Third-Party Services
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                Our website may contain links to or integrations with
                third-party websites, services, or lending partners. We are not
                responsible for the content, terms, privacy practices, or
                actions of any third party. Your interactions with third-party
                services are governed by their respective terms and policies.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Governing Law
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of the State of Maryland, without regard to its
                conflict of law provisions. Any disputes arising under these
                Terms shall be subject to the exclusive jurisdiction of the
                state and federal courts located in Maryland.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Changes to These Terms
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                We reserve the right to modify these Terms at any time. When we
                make material changes, we will update the &ldquo;Last
                updated&rdquo; date at the top of this page. Your continued use
                of our website or services after changes are posted constitutes
                your acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Severability
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                If any provision of these Terms is found to be unenforceable or
                invalid, that provision shall be limited or eliminated to the
                minimum extent necessary so that the remaining provisions
                continue in full force and effect.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-4">
                Contact
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                If you have questions about these Terms, please contact us at:
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
