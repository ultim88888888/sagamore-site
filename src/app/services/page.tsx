import type { Metadata } from "next";
import { ServicesContent } from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore 12 business funding products including lines of credit, SBA loans, equipment financing, commercial mortgages, and more. Sagamore Financial Group.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
