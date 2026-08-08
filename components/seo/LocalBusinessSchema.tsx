import React from "react";
import JsonLd from "./JsonLd";
import { SITE_CONFIG } from "@/lib/data";

const PRODUCTION_DOMAIN = "https://earthtravelsindia.in";

/**
 * LocalBusiness JSON-LD schema for the contact page.
 * Provides detailed local business information for Google Maps, local pack,
 * and AI search engines to display accurate business details.
 *
 * Primary source: https://schema.org/LocalBusiness
 * Google docs: https://developers.google.com/search/docs/appearance/structured-data/local-business
 */
export default function LocalBusinessSchema() {
  const localData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${PRODUCTION_DOMAIN}/#localbusiness`,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.nameHindi,
    url: PRODUCTION_DOMAIN,
    telephone: SITE_CONFIG.phones.map((p) => p.tel),
    email: SITE_CONFIG.email,
    image: `${PRODUCTION_DOMAIN}/images/full logo.jpeg`,
    logo: `${PRODUCTION_DOMAIN}/images/logo_transparent.png`,
    description:
      "Premium travel agency in Mathura, Uttar Pradesh. Custom tour packages to Kashmir, Maldives, Dubai, Europe and worldwide. Visa assistance, travel insurance, cruise bookings, and luxury rail journeys. IATA accredited, 15+ years of trust.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Shop No. 143, 144, 145, 1st Floor, Krishna Plaza, Krishna Nagar",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "17:00",
      },
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer",
    areaServed: [
      { "@type": "City", name: "Mathura" },
      { "@type": "City", name: "Agra" },
      { "@type": "City", name: "Delhi" },
      { "@type": "State", name: "Uttar Pradesh" },
      { "@type": "Country", name: "India" },
    ],
    hasMap: "https://maps.google.com/?q=Earth+Travels+Krishna+Plaza+Mathura",
    isAccessibleForFree: true,
    sameAs: [
      "https://instagram.com/earthtravelsmathura",
      "https://instagram.com/niteshkhandelwal8",
      "https://www.facebook.com/share/1983aNQbfY/",
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
  };

  return <JsonLd data={localData} />;
}
