import React from "react";
import JsonLd from "./JsonLd";
import type { Package } from "@/lib/data/packages";

const PRODUCTION_DOMAIN = "https://earthtravels.example";

interface TouristTripSchemaProps {
  pkg: Package;
  itineraryDays?: Array<{
    day: number;
    title: string;
    description: string;
  }>;
}

/**
 * TouristTrip JSON-LD schema for itinerary detail pages.
 * Wired to real Package data. Includes Offer with INR pricing.
 *
 * Primary source: https://schema.org/TouristTrip
 * Note: TouristTrip is not a Google-supported rich result type,
 * but it provides entity clarity for AI crawlers and knowledge graph.
 */
export default function TouristTripSchema({
  pkg,
  itineraryDays,
}: TouristTripSchemaProps) {
  const tripData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${PRODUCTION_DOMAIN}/itinerary/${pkg.id}/#trip`,
    name: pkg.name,
    description: `${pkg.duration.nights}N/${pkg.duration.days}D ${pkg.destination} tour package by Earth Travels India. Includes ${[
      pkg.inclusions.hotel && "hotel",
      pkg.inclusions.meals && "meals",
      pkg.inclusions.transfers && "transfers",
      pkg.inclusions.sightseeing && "sightseeing",
      pkg.inclusions.flight && "flights",
      pkg.inclusions.visa && "visa",
    ]
      .filter(Boolean)
      .join(", ")}.`,
    touristType: pkg.category.map(
      (c) => c.charAt(0).toUpperCase() + c.slice(1) + " Travellers"
    ),
    itinerary: itineraryDays
      ? {
          "@type": "ItemList",
          numberOfItems: itineraryDays.length,
          itemListElement: itineraryDays.map((day) => ({
            "@type": "ListItem",
            position: day.day,
            name: `Day ${day.day}: ${day.title}`,
            description: day.description,
          })),
        }
      : undefined,
    offers: {
      "@type": "Offer",
      url: `${PRODUCTION_DOMAIN}/itinerary/${pkg.id}`,
      priceCurrency: "INR",
      price: pkg.pricePerPerson,
      priceValidUntil: new Date(
        new Date().setMonth(new Date().getMonth() + 3)
      )
        .toISOString()
        .split("T")[0],
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString().split("T")[0],
      seller: {
        "@id": `${PRODUCTION_DOMAIN}/#organization`,
      },
    },
    provider: {
      "@id": `${PRODUCTION_DOMAIN}/#organization`,
    },
    image: pkg.image.startsWith("/")
      ? `${PRODUCTION_DOMAIN}${pkg.image}`
      : pkg.image,
  };

  // Remove undefined itinerary if no days provided
  if (!itineraryDays) {
    delete tripData.itinerary;
  }

  return <JsonLd data={tripData} />;
}
