import type { Metadata } from "next";
import KashmirClient from "./KashmirClient";
import { BreadcrumbSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Kashmir 7N/8D Itinerary — Dal Lake, Gulmarg & Pahalgam",
  description:
    "Complete day-by-day Kashmir itinerary by Earth Travels India. 7 nights, 8 days covering Srinagar, Dal Lake houseboat, Gulmarg Gondola, Pahalgam Valley. From ₹24,500/person.",
  alternates: {
    canonical: "/itinerary/kashmir",
  },
  openGraph: {
    title: "Kashmir 7N/8D Itinerary | Earth Travels India",
    description:
      "Experience paradise with our Kashmir tour. Dal Lake houseboat, Gulmarg Gondola, Pahalgam Valley walk. Complete day-by-day plan with honest pricing.",
    url: "/itinerary/kashmir",
  },
};

export default function KashmirItineraryPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Itineraries", href: "/itinerary" },
          { name: "Kashmir", href: "/itinerary/kashmir" },
        ]}
      />
      <KashmirClient />
    </>
  );
}
