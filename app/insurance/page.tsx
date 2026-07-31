import type { Metadata } from "next";
import InsuranceClient from "./InsuranceClient";
import { BreadcrumbSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Travel Insurance — Coverage Plans & Assistance",
  description:
    "Get comprehensive travel insurance through Earth Travels India. Medical coverage, trip cancellation, baggage protection. Assistance for domestic and international trips.",
  alternates: {
    canonical: "/insurance",
  },
  openGraph: {
    title: "Travel Insurance | Earth Travels India",
    description: "Comprehensive travel insurance for your trips. Medical, cancellation, and baggage coverage. Arranged by Earth Travels Mathura.",
    url: "/insurance",
  },
};

export default function InsurancePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Insurance", href: "/insurance" }]} />
      <InsuranceClient />
    </>
  );
}
