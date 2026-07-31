import type { MetadataRoute } from "next";
import { DESTINATIONS } from "@/lib/data/destinations";
import { PACKAGES } from "@/lib/data/packages";

const PRODUCTION_DOMAIN = "https://earthtravels.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: PRODUCTION_DOMAIN,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${PRODUCTION_DOMAIN}/destinations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${PRODUCTION_DOMAIN}/packages`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${PRODUCTION_DOMAIN}/itinerary`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${PRODUCTION_DOMAIN}/cruises`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${PRODUCTION_DOMAIN}/rails`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${PRODUCTION_DOMAIN}/visa`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${PRODUCTION_DOMAIN}/insurance`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${PRODUCTION_DOMAIN}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${PRODUCTION_DOMAIN}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${PRODUCTION_DOMAIN}/quote`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${PRODUCTION_DOMAIN}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${PRODUCTION_DOMAIN}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Destination hub pages (dynamic from data)
  const destinationPages: MetadataRoute.Sitemap = DESTINATIONS.map((dest) => ({
    url: `${PRODUCTION_DOMAIN}/destinations/${dest.id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Itinerary detail pages (dynamic from packages data)
  const itineraryPages: MetadataRoute.Sitemap = PACKAGES.map((pkg) => ({
    url: `${PRODUCTION_DOMAIN}/itinerary/${pkg.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...destinationPages, ...itineraryPages];
}
