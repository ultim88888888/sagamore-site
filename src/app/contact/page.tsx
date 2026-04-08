import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sagamore Financial Group. Questions about business funding? We are here to help.",
};

export default function ContactPage() {
  return <ContactContent />;
}
