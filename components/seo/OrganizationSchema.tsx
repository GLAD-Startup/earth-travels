import React from "react";
import JsonLd from "./JsonLd";
import { SITE_CONFIG } from "@/lib/data";

const PRODUCTION_DOMAIN = "https://earthtravelsindia.in";

/**
 * Organization + TravelAgency JSON-LD schema.
 * Uses real data from SITE_CONFIG. Items marked TODO need client data.
 * 
 * Primary source: https://schema.org/TravelAgency
 * TravelAgency is a subtype of LocalBusiness > Organization.
 */
export default function OrganizationSchema() {
  const orgData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${PRODUCTION_DOMAIN}/#organization`,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.nameHindi,
    url: PRODUCTION_DOMAIN,
    logo: `${PRODUCTION_DOMAIN}/images/logo_transparent.png`,
    image: `${PRODUCTION_DOMAIN}/images/full logo.jpeg`,
    description: "Premium tour agency in Mathura, Uttar Pradesh. Custom tour packages, visa assistance, travel insurance, cruise bookings, and rail journeys. Serving families from Mathura to destinations worldwide since 2011.",
    slogan: SITE_CONFIG.tagline,
    telephone: SITE_CONFIG.phones.map((p) => p.tel),
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 143, 144, 145, 1st Floor, Krishna Plaza, Krishna Nagar",
      addressLocality: "Mathura",
      addressRegion: "Uttar Pradesh",
      postalCode: "281004",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.50068,
      longitude: 77.6531641,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:30",
    },
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer",
    areaServed: [
      { "@type": "City", name: "Mathura" },
      { "@type": "State", name: "Uttar Pradesh" },
      { "@type": "Country", name: "India" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Travel Packages",
      itemListElement: [
        { "@type": "OfferCatalog", name: "Domestic Tour Packages" },
        { "@type": "OfferCatalog", name: "International Tour Packages" },
        { "@type": "OfferCatalog", name: "Visa Assistance Services" },
        { "@type": "OfferCatalog", name: "Travel Insurance" },
        { "@type": "OfferCatalog", name: "Cruise Bookings" },
        { "@type": "OfferCatalog", name: "Luxury Rail Journeys" },
      ],
    },
    sameAs: [
      "https://instagram.com/earthtravelsmathura",
      "https://instagram.com/niteshkhandelwal8",
      "https://www.facebook.com/share/1983aNQbfY/",
      // TODO: Add Google Business Profile URL once created
      // TODO: Add TripAdvisor URL once listed
    ],
    knowsLanguage: ["en", "hi"],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "IATA Accreditation",
      recognizedBy: {
        "@type": "Organization",
        name: "International Air Transport Association (IATA)",
      },
    },
    // TODO: Client must provide these values — listed in seo/DATA-NEEDED.md
    // "taxID": "GSTIN_NUMBER_HERE",
    // "legalName": "REGISTERED_LEGAL_NAME_HERE",
    // "foundingDate": "YYYY",
    // "founder": { "@type": "Person", "name": "FOUNDER_NAME" },
    // "aggregateRating": only if verified review data exists
  };

  return <JsonLd data={orgData} />;
}
