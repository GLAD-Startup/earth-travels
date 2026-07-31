import type { Metadata } from "next";
import ItineraryDetailClient from "./ItineraryDetailClient";
import { BreadcrumbSchema, TouristTripSchema } from "@/components/seo";
import { PACKAGES } from "@/lib/data/packages";
import { ITINERARIES, VARIANT_ITINERARIES } from "@/lib/data/itineraries";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  // Find the matching package
  const pkg = PACKAGES.find((p) => p.id === slug);

  // Find the itinerary data
  const itinerary = ITINERARIES[slug] ?? VARIANT_ITINERARIES[slug] ?? null;

  const title = pkg
    ? `${pkg.name} — ${pkg.duration.nights}N/${pkg.duration.days}D`
    : itinerary
    ? itinerary.title
    : `${slug} Itinerary`;

  const description = pkg
    ? `${pkg.duration.nights}N/${pkg.duration.days}D ${pkg.destination} tour package by Earth Travels India. Starting ₹${pkg.pricePerPerson.toLocaleString("en-IN")}/person. ${pkg.highlights.join(", ")}.`
    : itinerary
    ? `Day-by-day ${itinerary.destination} itinerary by Earth Travels India. ${itinerary.tagline}`
    : `Detailed itinerary for ${slug} by Earth Travels India.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/itinerary/${slug}`,
    },
    openGraph: {
      title: `${title} | Earth Travels India`,
      description,
      url: `/itinerary/${slug}`,
      images: pkg
        ? [{ url: pkg.image, width: 1200, height: 630, alt: title }]
        : undefined,
    },
  };
}

export async function generateStaticParams() {
  return PACKAGES.map((pkg) => ({
    slug: pkg.id,
  }));
}

export default async function ItineraryPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = PACKAGES.find((p) => p.id === slug);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Itineraries", href: "/itinerary" },
          { name: pkg?.name ?? slug, href: `/itinerary/${slug}` },
        ]}
      />
      {pkg && <TouristTripSchema pkg={pkg} />}
      <ItineraryDetailClient />
    </>
  );
}
