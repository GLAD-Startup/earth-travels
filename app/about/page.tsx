import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { BreadcrumbSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "About Us — 15+ Years of Trust From Mathura",
  description:
    "Earth Travels India: IATA accredited (Code 14352726), 15+ years experience, 15000+ happy travellers. Meet our Mathura team, view certifications & awards.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Earth Travels India — From Mathura to the World",
    description:
      "IATA certified travel agency in Mathura, UP. IndiGo awarded, SOTC partner, State Tourism honoured. Meet our team and see our workspace.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "About Us", href: "/about" }]} />
      <AboutClient />
    </>
  );
}
