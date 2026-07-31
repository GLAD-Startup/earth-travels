import type { Metadata } from "next";
import ItineraryListClient from "./ItineraryListClient";
import { BreadcrumbSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Signature Itineraries — Day-by-Day Journeys",
  description:
    "Explore detailed day-by-day itineraries handcrafted by Earth Travels Mathura. Kashmir, Maldives, Dubai, Bali, Thailand, Kerala and more. View highlights, inclusions & pricing.",
  alternates: {
    canonical: "/itinerary",
  },
  openGraph: {
    title: "Signature Itineraries — Day-by-Day Journeys | Earth Travels India",
    description:
      "50+ handcrafted itineraries with day-by-day plans, hotel details, and honest pricing. From weekend getaways to 15-day European adventures.",
    url: "/itinerary",
  },
};

export default function ItineraryPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Itineraries", href: "/itinerary" }]} />
      <ItineraryListClient />
    </>
  );
}
