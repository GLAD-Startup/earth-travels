import React from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Server-safe JSON-LD injection component.
 * Renders a <script type="application/ld+json"> tag in the HTML head-compatible area.
 * Use in Server Components — no "use client" needed.
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
