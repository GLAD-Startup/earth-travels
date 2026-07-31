import type { Metadata } from "next";
import RailsClient from "./RailsClient";
import { BreadcrumbSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Luxury Rail Journeys — Palace on Wheels, Maharajas Express & More",
  description:
    "Book India's most iconic luxury train journeys with Earth Travels. Palace on Wheels, Maharajas Express, Deccan Odyssey, Golden Chariot. Full itineraries and pricing.",
  alternates: {
    canonical: "/rails",
  },
  openGraph: {
    title: "Luxury Rail Journeys | Earth Travels India",
    description: "India's finest luxury train experiences. Palace on Wheels, Maharajas Express, and more. Book through Earth Travels Mathura.",
    url: "/rails",
  },
};

export default function RailsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Rail Journeys", href: "/rails" }]} />
      <RailsClient />
    </>
  );
}
