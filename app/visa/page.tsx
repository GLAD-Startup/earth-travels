import type { Metadata } from "next";
import VisaClient from "./VisaClient";
import { BreadcrumbSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Visa Assistance for 30+ Countries — Requirements & Documents",
  description:
    "Complete visa guidance for Indian travellers. Maldives, Thailand, Dubai, Singapore, Europe (Schengen), UK, Japan & more. Document checklists, processing times, embassy info. Assisted by Earth Travels Mathura.",
  alternates: {
    canonical: "/visa",
  },
  openGraph: {
    title: "Visa Assistance for 30+ Countries | Earth Travels India",
    description:
      "Full visa document checklists, processing times, and embassy contacts for Indian passport holders. Free consultation from our Mathura office.",
    url: "/visa",
  },
};

export default function VisaPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Visa Assistance", href: "/visa" }]} />
      <VisaClient />
    </>
  );
}
