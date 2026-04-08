import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Sagamore Financial Group terms of service. Terms and conditions governing your use of our website and services.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="April 8, 2026">
      <h2>Acceptance of Terms</h2>
      <p>
        By accessing and using the Sagamore Financial Group website
        (&quot;sagamorefinancialgroup.com&quot;), you accept and agree to be bound by these
        Terms of Service. If you do not agree to these terms, please do not use
        our website or services.
      </p>

      <h2>About Our Services</h2>
      <p>
        Sagamore Financial Group is a commercial loan brokerage. We are not a
        direct lender. We connect businesses with lending partners who may
        provide funding. All lending decisions, including approval, terms, rates,
        and conditions, are made solely by our lending partners.
      </p>
      <p>
        Any information provided on our website, including funding estimates from
        our qualification calculator, is for informational purposes only and does
        not constitute a loan offer, commitment, or guarantee of funding.
      </p>

      <h2>Eligibility</h2>
      <p>
        To use our services, you must be at least 18 years old, have the
        authority to enter into agreements on behalf of the business seeking
        funding, and provide accurate and complete information in your
        application.
      </p>

      <h2>Application Process</h2>
      <p>
        When you submit an application through our website, you authorize
        Sagamore Financial Group and its lending partners to:
      </p>
      <ul>
        <li>
          Verify the information you provide, including business and personal
          details
        </li>
        <li>
          Perform soft credit inquiries during the initial evaluation (soft
          inquiries do not affect your credit score)
        </li>
        <li>
          Perform hard credit inquiries if you choose to proceed with a specific
          lending offer (you will be notified before any hard inquiry is made)
        </li>
        <li>
          Contact you by email, phone, or text regarding your application and
          funding options
        </li>
      </ul>

      <h2>Accuracy of Information</h2>
      <p>
        You agree to provide truthful, accurate, and complete information in
        your application and all communications with us. Providing false or
        misleading information may result in the denial of your application and
        may constitute fraud.
      </p>

      <h2>No Guarantee of Funding</h2>
      <p>
        Submitting an application does not guarantee approval or funding.
        Sagamore Financial Group does not make lending decisions. Funding
        availability, amounts, rates, and terms are determined by our lending
        partners based on their own underwriting criteria.
      </p>

      <h2>Fees</h2>
      <p>
        Sagamore Financial Group does not charge application fees. Our
        compensation comes from our lending partners when funding is
        successfully arranged. Any fees associated with a specific loan
        product will be disclosed by the lending partner before you accept an
        offer.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content on our website, including text, graphics, logos, images, and
        software, is the property of Sagamore Financial Group or its licensors
        and is protected by copyright and other intellectual property laws. You
        may not reproduce, distribute, or create derivative works from our
        content without our written permission.
      </p>

      <h2>Website Availability</h2>
      <p>
        We strive to keep our website available at all times but do not guarantee
        uninterrupted access. We may modify, suspend, or discontinue any part of
        our website at any time without notice.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Sagamore Financial Group shall
        not be liable for any indirect, incidental, special, consequential, or
        punitive damages arising from your use of our website or services,
        including but not limited to loss of profits, data, or business
        opportunities.
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Sagamore Financial Group, its
        officers, directors, employees, and agents from any claims, damages,
        losses, or expenses arising from your use of our services or violation
        of these terms.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms of Service are governed by and construed in accordance with
        the laws of the state in which Sagamore Financial Group operates,
        without regard to its conflict of law provisions.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We reserve the right to update these Terms of Service at any time.
        Changes will be posted on this page with an updated effective date. Your
        continued use of our website after changes are posted constitutes
        acceptance of the revised terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms of Service? Contact us at{" "}
        <a href="mailto:info@sagamorefinancialgroup.com">
          info@sagamorefinancialgroup.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
