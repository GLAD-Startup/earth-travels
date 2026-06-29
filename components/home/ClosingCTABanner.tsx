"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/data";
import { RevealWrapper } from "@/components/ui";

export default function ClosingCTABanner() {
  return (
    <section className="relative py-24 px-6 overflow-hidden w-full flex items-center justify-center bg-midnight border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-midnight via-[#0A1628] to-emerald-950/20 bg-[size:200%_200%] animate-gradient-shift z-0" />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] z-1"
        style={{
          backgroundImage: `radial-gradient(var(--gold) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <RevealWrapper delay={0.1}>
          <span className="font-mono text-xs text-[#D4A017] uppercase tracking-[0.2em] block mb-4">
            Begin Your Story
          </span>
        </RevealWrapper>

        <RevealWrapper delay={0.2}>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-normal text-white leading-tight mb-6">
            Your Dream Journey Starts <br />
            with One Message
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={0.3}>
          <p className="font-sans text-sm md:text-base text-white/70 max-w-xl mx-auto mb-8">
            Tell us where you want to go. We will customize the perfect package, handle all of your documentation, and support you 24/7.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={0.4} className="mb-10">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-2xl md:text-4xl font-bold text-[#D4A017] hover:text-gold-light transition-colors select-all underline underline-offset-8 decoration-gold/30 hover:decoration-gold"
          >
            💬 {SITE_CONFIG.phone}
          </a>
        </RevealWrapper>

        <RevealWrapper delay={0.5} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-semibold rounded-full border border-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.489.002 9.961-4.467 9.964-9.948.002-2.654-1.03-5.15-2.906-7.029C16.45 1.748 13.957.718 11.31.718c-5.49 0-9.966 4.469-9.969 9.95-.001 1.905.517 3.5 1.498 5.1l-.989 3.613 3.707-.977zm12.39-7.12c-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.174.2-.298.3-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
            WhatsApp Us Now
          </a>
          <Link
            href="/quote"
            className="w-full sm:w-auto btn-gold font-sans font-semibold text-sm tracking-wide text-center py-3.5"
          >
            Request Free Itinerary
          </Link>
        </RevealWrapper>
      </div>
    </section>
  );
}
