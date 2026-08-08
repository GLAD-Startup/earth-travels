import React from "react";
import JsonLd from "./JsonLd";

const PRODUCTION_DOMAIN = "https://earthtravelsindia.in";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

/**
 * BreadcrumbList JSON-LD schema.
 * Accepts an array of breadcrumb items with name and href.
 * Always includes "Home" as the first item automatically.
 *
 * Primary source: https://schema.org/BreadcrumbList
 * Google docs: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
 */
export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${PRODUCTION_DOMAIN}${item.href}`,
    })),
  };

  return <JsonLd data={breadcrumbData} />;
}
