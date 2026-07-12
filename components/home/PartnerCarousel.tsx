"use client";

import React from "react";

// ─────────────────────────────────────────────────────────────────
//  PARTNER DATA
//  Each logo path points to /public/logos/<file>.svg
//  Replace placeholders with official brand SVGs from each brand's
//  press / brand-asset kit. One-line swap per brand.
// ─────────────────────────────────────────────────────────────────

interface Partner {
  name: string;
  /** Swap this path with the real SVG / optimised PNG when available */
  logo: string;
  category: "airline" | "hotel" | "platform" | "payment" | "insurance";
  /** Brand accent colour shown on hover — used for placeholder tint too */
  accentColor?: string;
}

export const PARTNERS: Partner[] = [
  // ── Airlines ──────────────────────────────────────────────────
  { name: "Qatar Airways",      logo: "/logos/qatar-airways.svg",    category: "airline",   accentColor: "#5C0632" },
  { name: "Singapore Airlines", logo: "/logos/singapore-airlines.svg", category: "airline", accentColor: "#1A3263" },
  { name: "Emirates",           logo: "/logos/emirates.svg",          category: "airline",   accentColor: "#D4162D" },
  { name: "IndiGo",             logo: "/logos/indigo.svg",            category: "airline",   accentColor: "#1B2AA6" },
  { name: "Air India",          logo: "/logos/air-india.svg",         category: "airline",   accentColor: "#C8102E" },
  { name: "SpiceJet",           logo: "/logos/spicejet.svg",          category: "airline",   accentColor: "#E05B0A" },
  { name: "Etihad Airways",     logo: "/logos/etihad.svg",            category: "airline",   accentColor: "#B7A47B" },
  { name: "Lufthansa",          logo: "/logos/lufthansa.svg",         category: "airline",   accentColor: "#05164D" },
  // ── Hotels ────────────────────────────────────────────────────
  { name: "Taj Hotels",         logo: "/logos/taj-hotels.svg",        category: "hotel",     accentColor: "#6B3728" },
  { name: "ITC Hotels",         logo: "/logos/itc-hotels.svg",        category: "hotel",     accentColor: "#1A3050" },
  { name: "The Leela",          logo: "/logos/the-leela.svg",         category: "hotel",     accentColor: "#7B5C35" },
  { name: "Marriott",           logo: "/logos/marriott.svg",          category: "hotel",     accentColor: "#8A1538" },
  { name: "Waldorf Astoria",    logo: "/logos/waldorf-astoria.svg",   category: "hotel",     accentColor: "#B5924C" },
  { name: "Park Hyatt",         logo: "/logos/park-hyatt.svg",        category: "hotel",     accentColor: "#2B2B2B" },
  { name: "Oberoi Hotels",      logo: "/logos/oberoi-hotels.svg",     category: "hotel",     accentColor: "#1A3050" },
  // ── Platforms / Trust ─────────────────────────────────────────
  { name: "TripAdvisor",        logo: "/logos/tripadvisor.svg",       category: "platform",  accentColor: "#34E0A1" },
  { name: "Booking.com",        logo: "/logos/booking-com.svg",       category: "platform",  accentColor: "#003580" },
  { name: "Visa",               logo: "/logos/visa.svg",              category: "payment",   accentColor: "#1A1F71" },
  { name: "Mastercard",         logo: "/logos/mastercard.svg",        category: "payment",   accentColor: "#EB001B" },
  { name: "Allianz Travel",     logo: "/logos/allianz.svg",           category: "insurance", accentColor: "#003781" },
  /* Add relevant tourism board / DMC logos below, e.g.:
  { name: "Tourism Australia",  logo: "/logos/tourism-australia.svg", category: "tourism-board", accentColor: "#FF0000" },
  */
];

// ─────────────────────────────────────────────────────────────────
//  PLACEHOLDER ICON  (shown until the real SVG is dropped in)
// ─────────────────────────────────────────────────────────────────
function PlaceholderIcon({
  initial,
  color,
}: {
  initial: string;
  color?: string;
}) {
  const bg = color ? `${color}18` : "rgba(26,18,10,0.07)";
  const border = color ? `${color}30` : "rgba(26,18,10,0.12)";
  const fg = color ?? "rgba(26,18,10,0.40)";
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: bg,
        border: `1.5px solid ${border}`,
        fontSize: 13,
        fontWeight: 700,
        fontFamily: "var(--font-sans)",
        color: fg,
        flexShrink: 0,
        transition: "background 0.4s ease, border-color 0.4s ease, color 0.4s ease",
      }}
    >
      {initial}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────
//  SINGLE PARTNER PILL
// ─────────────────────────────────────────────────────────────────
function PartnerPill({ partner }: { partner: Partner }) {
  const [imgFailed, setImgFailed] = React.useState(false);

  return (
    <li
      className="pc-pill"
      style={{ "--accent": partner.accentColor ?? "#c4900f" } as React.CSSProperties}
      aria-label={partner.name}
    >
      {/* Logo icon */}
      <span className="pc-pill__icon">
        {!imgFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={partner.logo}
            alt=""
            aria-hidden="true"
            width={36}
            height={36}
            loading="lazy"
            decoding="async"
            className="pc-pill__img"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <PlaceholderIcon
            initial={partner.name.charAt(0).toUpperCase()}
            color={partner.accentColor}
          />
        )}
      </span>

      {/* Brand name */}
      <span className="pc-pill__name">{partner.name}</span>
    </li>
  );
}

// ─────────────────────────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────
export default function PartnerCarousel() {
  // Duplicate list once → animate by -50% → seamless infinite loop
  const strip = [...PARTNERS, ...PARTNERS];

  return (
    <section className="pc-section" aria-label="Our trusted travel partners">
      {/* ── Eyebrow header ─────────────────────────────────────── */}
      <div className="pc-header">
        <span className="pc-divider" aria-hidden="true" />
        <h2 className="pc-eyebrow">Our Trusted Travel Partners</h2>
        <span className="pc-divider" aria-hidden="true" />
      </div>

      {/* ── Scrolling strip ────────────────────────────────────── */}
      {/* Outer wrapper carries the fade-edge mask */}
      <div className="pc-mask-wrapper" aria-hidden="false">
        <ul className="pc-track" role="list">
          {strip.map((partner, idx) => (
            <PartnerPill key={`${partner.name}-${idx}`} partner={partner} />
          ))}
        </ul>
      </div>
    </section>
  );
}
