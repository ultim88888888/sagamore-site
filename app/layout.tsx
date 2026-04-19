import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, SITE_URL, SITE_NAME } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Small Business Funding & Loans | Sagamore Financial Group",
    template: "%s | Sagamore Financial Group",
  },
  description:
    "Sagamore Financial Group connects growing businesses with the right capital — from lines of credit and SBA loans to equipment financing and beyond. $45M+ deployed, 4,000+ companies backed.",
  keywords: [
    "business funding",
    "small business loans",
    "SBA loans",
    "line of credit",
    "equipment financing",
    "business capital",
    "Sagamore Financial Group",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <JsonLd data={organizationSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
