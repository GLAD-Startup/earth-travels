import type { Metadata } from "next";
import VisaClient from "./VisaClient";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo";

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
      <ServiceSchema
        name="Visa Assistance Services"
        description="End-to-end visa processing for 30+ countries including document preparation, appointment scheduling, application tracking, and embassy coordination. Specialised in Schengen, UK, US, Dubai, Singapore, Thailand, and Japan visas for Indian passport holders."
        url="/visa"
        serviceType="Visa Processing & Assistance"
      />
      <VisaClient />
    </>
  );
}

