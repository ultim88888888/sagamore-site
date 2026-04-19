import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Sagamore Financial Group privacy policy. Learn how we collect, use, and protect your personal and business information.",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  openGraph: {
    title: "Privacy Policy | Sagamore Financial Group",
    description:
      "Sagamore Financial Group privacy policy. Learn how we collect, use, and protect your personal and business information.",
    url: `${SITE_URL}/privacy`,
    type: "website",
    images: [{ url: "/og/homepage.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Sagamore Financial Group",
    description:
      "Sagamore Financial Group privacy policy. Learn how we collect, use, and protect your personal and business information.",
    images: ["/og/homepage.jpg"],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Privacy Policy", path: "/privacy" }])}
      />
      <LegalPage title="Privacy Policy" lastUpdated="April 8, 2026">
      <h2>Overview</h2>
      <p>
        Sagamore Financial Group (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is
        committed to protecting the personal information you share with us. This
        Privacy Policy explains how we collect, use, disclose, and safeguard your
        information when you visit our website or use our services.
      </p>

      <h2>Information We Collect</h2>
      <h3>Information You Provide</h3>
      <p>When you apply for funding or contact us, you may provide:</p>
      <ul>
        <li>Business name, address, and contact information</li>
        <li>Personal name, email, phone number</li>
        <li>Financial information such as revenue ranges and credit score estimates</li>
        <li>Business structure and entity details</li>
        <li>Social Security Number (for loan applications only)</li>
        <li>Bank statements and financial documents</li>
      </ul>

      <h3>Automatically Collected Information</h3>
      <p>
        When you visit our website, we may automatically collect certain
        information including your IP address, browser type, device information,
        pages visited, and the date and time of your visit. This information is
        used to improve our website and services.
      </p>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Process and evaluate your funding applications</li>
        <li>Match you with appropriate lending partners</li>
        <li>Communicate with you about your application status</li>
        <li>Respond to your inquiries and provide customer support</li>
        <li>Improve our website and services</li>
        <li>Comply with legal and regulatory requirements</li>
      </ul>

      <h2>Information Sharing</h2>
      <p>We may share your information with:</p>
      <ul>
        <li>
          <strong>Lending partners:</strong> To evaluate and process your funding
          application. We share only the information necessary for them to make
          lending decisions.
        </li>
        <li>
          <strong>Service providers:</strong> Third-party companies that help us
          operate our business, such as form processing (JotForm) and email
          services. These providers are contractually obligated to protect your
          information.
        </li>
        <li>
          <strong>Legal requirements:</strong> When required by law, regulation,
          or legal process.
        </li>
      </ul>
      <p>We do not sell your personal information to third parties.</p>

      <h2>Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect
        your personal information against unauthorized access, alteration,
        disclosure, or destruction. However, no method of transmission over the
        Internet or electronic storage is completely secure.
      </p>

      <h2>Your Rights</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Request correction of inaccurate information</li>
        <li>Request deletion of your personal information</li>
        <li>Opt out of certain data processing activities</li>
        <li>Withdraw consent where processing is based on consent</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        Our website may use cookies and similar technologies to enhance your
        browsing experience. You can control cookie settings through your
        browser preferences.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not
        responsible for the privacy practices of these websites. We encourage
        you to review their privacy policies before providing any personal
        information.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our services are not directed to individuals under the age of 18. We do
        not knowingly collect personal information from children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any material changes by posting the updated policy on this page with
        a new effective date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or our data practices,
        please contact us at{" "}
        <a href="mailto:info@sagamorefinancialgroup.com">
          info@sagamorefinancialgroup.com
        </a>
        .
      </p>
    </LegalPage>
    </>
  );
}
