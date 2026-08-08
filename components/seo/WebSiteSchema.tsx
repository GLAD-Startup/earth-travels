import React from "react";
import JsonLd from "./JsonLd";

const PRODUCTION_DOMAIN = "https://earthtravelsindia.in";

/**
 * WebSite JSON-LD schema with SearchAction for sitelinks search box.
 * 
 * Primary source: https://schema.org/WebSite
 * Google docs: https://developers.google.com/search/docs/appearance/site-names
 */
export default function WebSiteSchema() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${PRODUCTION_DOMAIN}/#website`,
    name: "Earth Travels India",
    alternateName: "Earth Travels",
    url: PRODUCTION_DOMAIN,
    publisher: {
      "@id": `${PRODUCTION_DOMAIN}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${PRODUCTION_DOMAIN}/packages?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en",
  };

  return <JsonLd data={websiteData} />;
}
