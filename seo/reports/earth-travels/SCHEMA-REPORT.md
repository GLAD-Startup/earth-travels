# Earth Travels India — Structured Data (JSON-LD) Report

## Overview & Policy Compliance

All structured data in Earth Travels India is implemented using **JSON-LD script tags** rendered directly in server-side HTML payloads (`components/seo/`). 

### Deprecation Rules Enforced
- **FAQPage**: Retired by Google for non-governmental/health sites. **NOT generated**.
- **HowTo**: Deprecated by Google in Sept 2023. **NOT generated**.
- **SpecialAnnouncement, ClaimReview, VehicleListing, EstimatedSalary**: Deprecated types. **NOT generated**.
- **Microdata / RDFa**: None used. Pure JSON-LD only.

---

## Schema Component Inventory

| Schema Type | Component File | Page Scope | Real Data Source | Status |
|---|---|---|---|---|
| `Organization` + `TravelAgency` | `components/seo/OrganizationSchema.tsx` | All Pages (Root Layout) | `SITE_CONFIG` | Implemented (TODO placeholders for GSTIN & Founder) |
| `WebSite` + `SearchAction` | `components/seo/WebSiteSchema.tsx` | All Pages (Root Layout) | `SITE_CONFIG` | Implemented |
| `BreadcrumbList` | `components/seo/BreadcrumbSchema.tsx` | All Pages | Route Hierarchy | Implemented |
| `TouristTrip` + `Offer` | `components/seo/TouristTripSchema.tsx` | `/itinerary/[slug]` | `PACKAGES` + `ITINERARIES` | Implemented (priceCurrency: INR) |
| `TouristDestination` | `app/destinations/[id]/page.tsx` | `/destinations/[id]` | `DESTINATIONS` | Implemented |

---

## Code Verification Samples

### 1. TravelAgency Schema (`/components/seo/OrganizationSchema.tsx`)
```json
{
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://earthtravels.example/#organization",
  "name": "Earth Travels",
  "alternateName": "अर्थ ट्रैवल्स",
  "url": "https://earthtravels.example",
  "logo": "https://earthtravels.example/images/logo_transparent.png",
  "telephone": ["+918941088111", "+918941881111", "+919410857835"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop No. 143, 144, 145, 1st Floor, Krishna Plaza, Krishna Nagar",
    "addressLocality": "Mathura",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "281004",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.50068,
    "longitude": 77.6531641
  },
  "currenciesAccepted": "INR"
}
```

### 2. TouristTrip Schema (`/components/seo/TouristTripSchema.tsx`)
```json
{
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "@id": "https://earthtravels.example/itinerary/kashmir-7n8d/#trip",
  "name": "Kashmir Special (Mughal Gardens, Gulmarg & Pahalgam)",
  "offers": {
    "@type": "Offer",
    "url": "https://earthtravels.example/itinerary/kashmir-7n8d",
    "priceCurrency": "INR",
    "price": 24500,
    "availability": "https://schema.org/InStock",
    "seller": {
      "@id": "https://earthtravels.example/#organization"
    }
  }
}
```
