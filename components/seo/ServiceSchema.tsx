import React from "react";
import JsonLd from "./JsonLd";

const PRODUCTION_DOMAIN = "https://earthtravelsindia.in";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  /** Optional starting price in INR */
  priceFrom?: number;
  /** Optional image path (relative to domain) */
  image?: string;
}

/**
 * Service JSON-LD schema for individual service pages.
 * Helps AI search engines understand what specific services Earth Travels offers.
 *
 * Primary source: https://schema.org/Service
 * Google docs: https://developers.google.com/search/docs/appearance/structured-data
 */
export default function ServiceSchema({
  name,
  description,
  url,
  serviceType,
  priceFrom,
  image,
}: ServiceSchemaProps) {
  const serviceData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PRODUCTION_DOMAIN}${url}/#service`,
    name,
    description,
    url: `${PRODUCTION_DOMAIN}${url}`,
    serviceType,
    provider: {
      "@id": `${PRODUCTION_DOMAIN}/#organization`,
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "State", name: "Uttar Pradesh" },
      { "@type": "City", name: "Mathura" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${PRODUCTION_DOMAIN}${url}`,
      servicePhone: "+918941881111",
      serviceSmsNumber: "+918941881111",
      availableLanguage: [
        { "@type": "Language", name: "English" },
        { "@type": "Language", name: "Hindi" },
      ],
    },
  };

  if (priceFrom) {
    serviceData.offers = {
      "@type": "Offer",
      priceCurrency: "INR",
      price: priceFrom,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "INR",
        price: priceFrom,
        unitText: "per person",
      },
      availability: "https://schema.org/InStock",
      seller: {
        "@id": `${PRODUCTION_DOMAIN}/#organization`,
      },
    };
  }

  if (image) {
    serviceData.image = image.startsWith("/")
      ? `${PRODUCTION_DOMAIN}${image}`
      : image;
  }

  return <JsonLd data={serviceData} />;
}
