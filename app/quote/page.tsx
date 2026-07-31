import type { Metadata } from "next";
import QuoteClient from "./QuoteClient";
import { BreadcrumbSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Get a Free Quote — Custom Trip Planning",
  description:
    "Request a free, no-obligation quote for your dream trip. Tell us your destination, dates, and budget — our Mathura travel experts will craft a personalised itinerary.",
  alternates: {
    canonical: "/quote",
  },
  openGraph: {
    title: "Get a Free Quote | Earth Travels India",
    description: "Free travel consultation and personalised itinerary planning. No obligation. Contact our Mathura experts today.",
    url: "/quote",
  },
};

export default function QuotePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Get a Quote", href: "/quote" }]} />
      <QuoteClient />
    </>
  );
}
