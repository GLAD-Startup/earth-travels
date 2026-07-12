"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ITINERARIES } from "@/lib/data/itineraries";
import { GlassCard, RevealWrapper } from "@/components/ui";

export default function ItinerariesPage() {
  const itineraryList = Object.values(ITINERARIES);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItineraries = itineraryList.filter((itinerary) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      itinerary.title.toLowerCase().includes(q) ||
      itinerary.destination.toLowerCase().includes(q) ||
      itinerary.tagline.toLowerCase().includes(q) ||
      itinerary.slug.toLowerCase().includes(q)
    );
  });

  return (
    <div className="bg-background min-h-screen text-charcoal select-none">
      <title>Signature Itineraries — Day-by-Day Journeys | Earth Travels</title>
      <meta
        name="description"
        content="Explore detailed day-by-day itineraries handcrafted by Earth Travels Mathura. Kashmir, Maldives, Dubai, Bali, Thailand, Kerala and more."
      />

      {/* Page Hero */}
      <section
        className="relative h-[50vh] min-h-[350px] w-full bg-cover bg-center flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8,12,20,0.5) 0%, rgba(8,12,20,0.95) 100%), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')`,
        }}
      >
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <RevealWrapper delay={0.1}>
            <span className="glass px-4 py-1.5 rounded-full border border-[#D4A017]/35 text-[#D4A017] font-mono text-[10px] tracking-wider uppercase bg-[#D4A017]/5 font-semibold mb-4 inline-block">
              Day-by-Day
            </span>
            <h1 className="font-display text-4xl md:text-[72px] font-bold tracking-tight text-white mb-4 leading-tight mt-4">
              Signature Itineraries
            </h1>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p className="font-sans text-base md:text-lg text-white/80 max-w-lg mx-auto">
              Every hour planned. Every memory guaranteed. Journeys crafted by our expert team.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* Itinerary Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <RevealWrapper delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-l-2 border-[#D4A017] pl-4 mb-12 gap-4">
            <div>
              <span className="font-mono text-[10px] text-charcoal/40 uppercase tracking-widest block mb-0.5">
                Handcrafted Journeys
              </span>
              <h2 className="font-display text-2xl font-bold text-charcoal">
                {filteredItineraries.length} Detailed Itineraries
              </h2>
            </div>
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Search itineraries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-9 text-[11px] font-sans border border-charcoal/15 rounded-lg bg-surface text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017] transition-all duration-300 shadow-sm"
              />
              <svg className="absolute left-3 top-2.5 w-3.5 h-3.5 text-charcoal/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItineraries.length > 0 ? filteredItineraries.map((itinerary, idx) => (
            <RevealWrapper key={itinerary.slug} delay={idx * 0.05}>
              <Link href={`/itinerary/${itinerary.slug}`} className="group block h-full">
                <GlassCard
                  hover={true}
                  className="p-0 overflow-hidden bg-background/35 border border-charcoal/10 hover:border-[#D4A017]/40 transition-all duration-300 rounded-2xl flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <img
                      src={itinerary.heroImage}
                      alt={itinerary.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent" />

                    {/* Days count badge */}
                    <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-full border border-charcoal/10 bg-background/60 backdrop-blur-sm">
                      <span className="font-mono text-[9px] text-charcoal/70 uppercase tracking-wider">
                        {itinerary.days.length} Days
                      </span>
                    </div>

                    {/* Destination tag */}
                    <div className="absolute bottom-4 left-4">
                      <span className="glass px-2.5 py-0.5 rounded-full border border-[#D4A017]/40 text-[#D4A017] font-mono text-[9px] tracking-wider uppercase bg-[#D4A017]/10 font-semibold">
                        {itinerary.destination}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow gap-3">
                    <div>
                      <p className="font-sans text-[10px] text-charcoal/40 uppercase tracking-widest font-semibold mb-1">
                        {itinerary.duration}
                      </p>
                      <h3 className="font-display text-xl font-bold text-charcoal group-hover:text-[#D4A017] transition-colors leading-tight">
                        {itinerary.title}
                      </h3>
                      <p className="font-sans text-xs text-charcoal/50 italic mt-1.5">
                        &quot;{itinerary.tagline}&quot;
                      </p>
                    </div>

                    {/* Day highlights preview */}
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {itinerary.days.slice(0, 3).map((day) => (
                        <span
                          key={day.dayNumber}
                          className="text-[9px] font-mono text-charcoal/40 bg-white/5 border border-charcoal/5 rounded-full px-2 py-0.5"
                        >
                          {day.tag}
                        </span>
                      ))}
                      {itinerary.days.length > 3 && (
                        <span className="text-[9px] font-mono text-charcoal/30 bg-white/5 border border-charcoal/5 rounded-full px-2 py-0.5">
                          +{itinerary.days.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Price & CTA */}
                    <div className="pt-4 border-t border-charcoal/5 flex items-center justify-between mt-auto">
                      <div>
                        <span className="text-[9px] text-charcoal/40 block font-sans uppercase">Starting at</span>
                        <span className="font-mono text-lg font-bold text-[#D4A017]">
                          ₹{itinerary.basePrice.toLocaleString("en-IN")}
                          <span className="text-[10px] text-charcoal/40 font-normal ml-1">/person</span>
                        </span>
                      </div>
                      <span className="text-xs font-mono text-charcoal/50 group-hover:text-[#D4A017] transition-colors flex items-center gap-1">
                        View Itinerary →
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </RevealWrapper>
          )) : (
            <div className="col-span-full text-center py-20 border border-dashed border-charcoal/10 rounded-2xl">
              <span className="text-4xl block mb-4 select-none">🔍</span>
              <p className="text-sm font-sans text-charcoal/50 mb-2">
                No itineraries match your search query &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="font-mono text-xs text-[#D4A017] hover:underline uppercase tracking-wider"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <RevealWrapper delay={0.3}>
          <GlassCard
            hover={false}
            className="mt-20 p-8 md:p-12 bg-gradient-to-r from-[#0A1628] to-[#080C14] border border-charcoal/10 rounded-[20px] text-center flex flex-col items-center gap-4"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
              Don&apos;t see your dream destination?
            </h3>
            <p className="font-sans text-sm text-white/70 max-w-sm mb-2 text-center mx-auto">
              We design premium tailor-made itineraries for families from Mathura to any global hotspot.
            </p>
            <Link
              href="/contact"
              className="inline-block text-midnight text-xs font-mono font-bold tracking-wider rounded-full px-8 py-3.5 hover:shadow-[0_0_15px_rgba(212,160,23,0.35)] transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #F0C040 100%)" }}
            >
              Request Custom Itinerary
            </Link>
          </GlassCard>
        </RevealWrapper>
      </section>
    </div>
  );
}
