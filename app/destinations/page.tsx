import type { Metadata } from "next";
import DestinationsClient from "./DestinationsClient";
import { BreadcrumbSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Explore 42+ Destinations — Kashmir to Maldives",
  description:
    "View signature tour destinations by Earth Travels Mathura. From Kashmir valleys to Maldives overwater resorts, Dubai skylines to European capitals — we plan it all. Starting ₹9,500.",
  alternates: {
    canonical: "/destinations",
  },
  openGraph: {
    title: "Explore 42+ Destinations | Earth Travels India",
    description:
      "Browse 42+ curated travel destinations. India, Southeast Asia, Middle East, Europe & Islands. Premium packages from Mathura's most trusted travel agency.",
    url: "/destinations",
  },
};

export default function DestinationsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Destinations", href: "/destinations" }]} />
      <DestinationsClient />
    </>
  );
}
