import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/Hero";
import { TrustMetrics } from "@/components/sections/TrustMetrics";
import { ValueProp } from "@/components/sections/ValueProp";
import { ServiceCategories } from "@/components/sections/ServiceCategories";
import { Process } from "@/components/sections/Process";
import { Qualifications } from "@/components/sections/Qualifications";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { webSiteSchema, webPageSchema, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Small Business Funding & Loans | Sagamore Financial Group",
  },
  description:
    "Access lines of credit, SBA loans, equipment financing, and 9 more funding products through one application. $45M+ deployed for 4,000+ businesses. Apply in minutes.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Small Business Funding & Loans | Sagamore Financial Group",
    description:
      "Access lines of credit, SBA loans, equipment financing, and 9 more funding products through one application. $45M+ deployed for 4,000+ businesses.",
    url: SITE_URL,
    type: "website",
    images: [{ url: "/og/homepage.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Business Funding & Loans | Sagamore Financial Group",
    description:
      "Access lines of credit, SBA loans, equipment financing, and 9 more funding products through one application. $45M+ deployed for 4,000+ businesses.",
    images: ["/og/homepage.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={webSiteSchema} />
      <JsonLd
        data={webPageSchema(
          "Small Business Funding & Loans",
          "Access lines of credit, SBA loans, equipment financing, and 9 more funding products through one application. $45M+ deployed for 4,000+ businesses. Apply in minutes.",
          ""
        )}
      />
      <HeroSection />
      <TrustMetrics />
      <ValueProp />
      <ServiceCategories />
      <Process />
      <Qualifications />
      <CtaBanner />
    </>
  );
}
