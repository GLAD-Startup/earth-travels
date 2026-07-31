import type { Metadata } from "next";
import TermsClient from "./TermsClient";
import { BreadcrumbSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Earth Travels India terms and conditions. Booking policies, cancellation rules, payment terms, and service agreements for all travel packages.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Terms & Conditions", href: "/terms" }]} />
      <TermsClient />
    </>
  );
}
