"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DESTINATIONS } from "@/lib/data/destinations";
import { DestinationGrid, GlobeViewer } from "@/components/destinations";
import { GlassCard, RevealWrapper } from "@/components/ui";

const TABS = [
  { id: "all", name: "All" },
  { id: "india", name: "India" },
  { id: "southeast-asia", name: "Southeast Asia" },
  { id: "middle-east", name: "Middle East" },
  { id: "europe", name: "Europe" },
  { id: "islands", name: "Islands" },
];

export default function DestinationsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredDestinations = DESTINATIONS.filter((dest) => {
    if (activeTab === "all") return true;
    return dest.region === activeTab;
  });

  const handleSelectDestination = (name: string) => {
    const dest = DESTINATIONS.find((d) => d.name.toLowerCase() === name.toLowerCase());
    if (dest) {
      setActiveTab(dest.region);
      const gridSection = document.getElementById("destination-grid-section");
      if (gridSection) {
        gridSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="bg-[#080C14] min-h-screen text-white select-none">
      <title>Explore Our World — Signature Escapes | Earth Travels</title>
      <meta name="description" content="View signature tour destinations by Earth Travels Mathura. From Kashmir valleys to Maldives overwater resorts, we plan it all." />
      
      {/* 1. Page Hero (50vh) */}
      <section
        className="relative h-[50vh] min-h-[350px] w-full bg-cover bg-center flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8,12,20,0.6) 0%, rgba(8,12,20,0.95) 100%), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80')`,
        }}
      >
        {/* Faint world map overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80')`,
          }}
        />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <RevealWrapper delay={0.1}>
            <h1 className="font-display text-4xl md:text-[72px] font-bold tracking-tight text-white mb-4 leading-tight">
              Explore Our World
            </h1>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p className="font-sans text-base md:text-lg text-white/60 max-w-lg mx-auto">
              From Mathura to everywhere that matters.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* 2. Sticky Filter Tabs */}
      <div className="sticky top-[72px] z-30 w-full border-y border-white/5 bg-[#080C14]/75 backdrop-blur-[24px] py-4 select-none">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-2.5 items-center justify-center">
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-sans font-semibold border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#D4A017] to-[#F0C040] text-midnight border-transparent font-bold shadow-lg shadow-gold/25"
                    : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:border-white/30"
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Main content body */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-16 relative z-10">
        
        {/* 3D Interactive Globe */}
        <RevealWrapper delay={0}>
          <GlobeViewer onSelectDestination={handleSelectDestination} />
        </RevealWrapper>

        {/* Destination Grid */}
        <RevealWrapper delay={0.1}>
          <div id="destination-grid-section" className="flex flex-col gap-8">
            <div className="border-l-2 border-[#D4A017] pl-4">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-0.5">
                Signature Escapes
              </span>
              <h2 className="font-display text-2xl font-bold text-white">
                Signature Holiday Spots ({filteredDestinations.length})
              </h2>
            </div>
            <DestinationGrid destinations={filteredDestinations} />
          </div>
        </RevealWrapper>

        {/* Bottom CTA Card */}
        <RevealWrapper delay={0.2}>
          <GlassCard
            hover={false}
            className="p-8 md:p-12 bg-gradient-to-r from-[#0A1628] to-[#080C14] border border-white/10 rounded-[20px] text-center flex flex-col items-center gap-4"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
              Don&apos;t see your dream destination?
            </h3>
            <p className="font-sans text-sm text-white/60 max-w-sm mb-2">
              We design premium tailor-made itineraries for families from Mathura to any global hotspot.
            </p>
            <Link
              href="/contact"
              className="inline-block text-midnight text-xs font-mono font-bold tracking-wider rounded-full px-8 py-3.5 hover:shadow-[0_0_15px_rgba(212,160,23,0.35)] transition-all duration-300 hover:scale-103 font-bold"
              style={{
                background: "linear-gradient(135deg, #D4A017 0%, #F0C040 100%)",
              }}
            >
              Contact Us for Custom Tours
            </Link>
          </GlassCard>
        </RevealWrapper>

      </section>
    </div>
  );
}
