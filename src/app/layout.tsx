import type { Metadata } from "next";
import { Cormorant_Garamond, Libre_Franklin } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sagamore Financial Group — Business Funding, Built on Trust",
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
    title: "Sagamore Financial Group — Business Funding, Built on Trust",
    description:
      "We connect growing businesses with the right capital. $45M+ deployed, 4,000+ companies backed.",
    type: "website",
    locale: "en_US",
    siteName: "Sagamore Financial Group",
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
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${libreFranklin.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
