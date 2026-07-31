import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { BreadcrumbSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Earth Travels India — Crafting Journeys From Mathura to the World",
  description:
    "Premium tour agency in Mathura, UP. 4.7★ rated. Kashmir, Maldives, Dubai, Europe & more. Custom packages, visa support, call 89418 81111.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Earth Travels India — Crafting Journeys From Mathura to the World",
    description:
      "Premium tour agency in Mathura, UP. Custom tour packages to Kashmir, Maldives, Dubai, Europe. Visa & insurance support. 15+ years of trust.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <BreadcrumbSchema items={[]} />
      <HomeClient />
    </>
  );
}
