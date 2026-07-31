import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { BreadcrumbSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Contact Us — Office Details & Map",
  description:
    "Get in touch with Earth Travels in Mathura. Office: Krishna Plaza, Krishna Nagar. Phone: +91 89418 81111, WhatsApp: +91 94108 57835. Mon–Sat 10AM–7:30PM.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Earth Travels India — Mathura Office",
    description:
      "Plan your dream trip with Earth Travels. Visit our Mathura office, call, WhatsApp, or submit an inquiry online. Free consultation.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Contact", href: "/contact" }]} />
      <ContactClient />
    </>
  );
}
