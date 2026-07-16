"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

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
  { name: "Qatar Airways",      logo: "/logos/qatar-airways.png",    category: "airline",   accentColor: "#5C0632" },
  { name: "Singapore Airlines", logo: "/logos/singapore-airlines.png", category: "airline", accentColor: "#1A3263" },
  { name: "Emirates",           logo: "/logos/emirates.png",          category: "airline",   accentColor: "#D4162D" },
  { name: "IndiGo",             logo: "/logos/indigo.png",            category: "airline",   accentColor: "#1B2AA6" },
  { name: "Air India",          logo: "/logos/air-india.png",         category: "airline",   accentColor: "#C8102E" },
  { name: "SpiceJet",           logo: "/logos/spicejet.png",          category: "airline",   accentColor: "#E05B0A" },
  { name: "Etihad Airways",     logo: "/logos/etihad.png",            category: "airline",   accentColor: "#B7A47B" },
  { name: "Lufthansa",          logo: "/logos/lufthansa.png",         category: "airline",   accentColor: "#05164D" },
  // ── Hotels ────────────────────────────────────────────────────
  { name: "Taj Hotels",         logo: "/logos/taj-hotels.png",        category: "hotel",     accentColor: "#6B3728" },
  { name: "ITC Hotels",         logo: "/logos/itc-hotels.png",        category: "hotel",     accentColor: "#1A3050" },
  { name: "The Leela",          logo: "/logos/the-leela.png",         category: "hotel",     accentColor: "#7B5C35" },
  { name: "Marriott",           logo: "/logos/marriott.png",          category: "hotel",     accentColor: "#8A1538" },
  { name: "Waldorf Astoria",    logo: "/logos/waldorf-astoria.png",   category: "hotel",     accentColor: "#B5924C" },
  { name: "Park Hyatt",         logo: "/logos/park-hyatt.png",        category: "hotel",     accentColor: "#2B2B2B" },
  { name: "Oberoi Hotels",      logo: "/logos/oberoi-hotels.png",     category: "hotel",     accentColor: "#1A3050" },
  { name: "Ritz-Carlton",       logo: "/logos/ritz-carlton.svg",      category: "hotel",     accentColor: "#002D62" },
  { name: "Rosewood Hotels",    logo: "/logos/rosewood.svg",          category: "hotel",     accentColor: "#221E1F" },
  { name: "Centara Hotels",     logo: "/logos/centara.svg",           category: "hotel",     accentColor: "#0F2C59" },
  { name: "Hilton Hotels",      logo: "/logos/hilton.svg",            category: "hotel",     accentColor: "#003F87" },
  { name: "Hyatt Hotels",       logo: "/logos/hyatt.svg",             category: "hotel",     accentColor: "#1A3263" },
  { name: "Sheraton",           logo: "/logos/sheraton.svg",          category: "hotel",     accentColor: "#103E2B" },
  { name: "Shangri-La",         logo: "/logos/shangri-la.svg",        category: "hotel",     accentColor: "#B5924C" },
  // ── Platforms / Trust ─────────────────────────────────────────
  { name: "TripAdvisor",        logo: "/logos/tripadvisor.png",       category: "platform",  accentColor: "#34E0A1" },
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
    <div
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
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────
export default function PartnerCarousel() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="pc-section" aria-label="Our trusted travel partners">
      {/* ── Eyebrow header ─────────────────────────────────────── */}
      <div className="pc-header">
        <span className="pc-divider" aria-hidden="true" />
        <h2 className="pc-eyebrow">Our Trusted Travel Partners</h2>
        <span className="pc-divider" aria-hidden="true" />
      </div>

      {/* ── Scrolling strip ────────────────────────────────────── */}
      <div className="pc-mask-wrapper font-sans" aria-hidden="false">
        {mounted ? (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={4000}
            watchSlidesProgress={true}
            slidesPerView="auto"
            spaceBetween={20}
            grabCursor={true}
            loop={true}
            breakpoints={{
              640: { spaceBetween: 30 },
              1024: { spaceBetween: 40 },
            }}
            className="!overflow-visible partners-swiper"
          >
            {PARTNERS.map((partner, idx) => (
              <SwiperSlide key={`${partner.name}-${idx}`} className="h-auto !w-auto">
                <PartnerPill partner={partner} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <ul className="pc-track" role="list">
            {PARTNERS.slice(0, 8).map((partner, idx) => (
              <li key={`${partner.name}-${idx}`} className="h-auto">
                <PartnerPill partner={partner} />
              </li>
            ))}
          </ul>
        )}
      </div>

      <style jsx global>{`
        .partners-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}
