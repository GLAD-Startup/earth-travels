"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { RAIL_JOURNEYS } from "@/lib/data/rails";
import { RevealWrapper } from "@/components/ui";

const TABS = [
  { id: "all", name: "All" },
  { id: "luxury", name: "Luxury Trains" },
  { id: "scenic", name: "Scenic Routes" },
  { id: "europass", name: "Eurail & Swiss Pass" },
  { id: "heritage", name: "Heritage" },
];

export default function RailsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 200) {
        setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 60);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredJourneys = RAIL_JOURNEYS.filter((rail) => {
    if (activeTab === "all") return true;
    return rail.category === activeTab;
  });

  const categoryLabel = (cat: string) => {
    switch (cat) {
      case "luxury": return "Luxury";
      case "scenic": return "Scenic";
      case "europass": return "Euro Pass";
      case "heritage": return "Heritage";
      default: return cat;
    }
  };

  return (
    <div className="bg-background min-h-screen text-charcoal select-none">
      <title>Rail Journeys — Luxury Trains & Euro Passes | Earth Travels</title>
      <meta name="description" content="Explore luxury rail journeys from Earth Travels. Palace on Wheels, Maharajas Express, Eurail Global Pass, Swiss Travel Pass, and heritage Indian railways." />

      {/* 1. Page Hero */}
      <section className="relative h-[50vh] min-h-[350px] w-full flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1600&q=80"
          alt="Train through alpine mountains"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <RevealWrapper delay={0.1}>
            <h1
              className="font-display text-4xl md:text-[72px] font-bold tracking-tight text-white mb-4 leading-tight"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
            >
              Rail Journeys
            </h1>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p className="font-sans text-base md:text-lg text-white/70 max-w-lg mx-auto">
              From palatial Indian trains to unlimited Eurail passes — the world by rail.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* 2. Sticky Filter Tabs */}
      <div className={`sticky z-30 w-full border-y border-charcoal/5 bg-background/90 backdrop-blur-md py-4 select-none transition-all duration-500 ease-in-out ${isVisible ? "top-[56px]" : "top-[-100px]"}`}>
        <div className="max-w-7xl mx-auto px-6 flex gap-2.5 items-center justify-start md:justify-center overflow-x-auto no-scrollbar">
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-sans font-semibold border transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-accent text-white border-accent shadow-[0_2px_12px_rgba(15,110,92,0.25)]"
                    : "bg-transparent border-charcoal/15 text-charcoal/65 hover:text-charcoal hover:border-charcoal/30"
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-16 relative z-10">
        <RevealWrapper delay={0}>
          <div className="border-l-2 border-accent pl-4 mb-2">
            <span className="font-sans text-[10px] text-charcoal/40 uppercase tracking-widest block mb-0.5">
              Journeys on Rails
            </span>
            <h2 className="font-display text-2xl font-bold text-charcoal">
              Rail Experiences ({filteredJourneys.length})
            </h2>
          </div>
        </RevealWrapper>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredJourneys.map((rail) => (
            <div
              key={rail.id}
              className="bg-surface border border-charcoal/8 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-accent/20 group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-[220px] w-full overflow-hidden">
                <img
                  src={rail.image}
                  alt={rail.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                />
                {/* Category badge */}
                <span className="absolute top-3.5 left-3.5 z-10 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-sm text-white font-sans text-[10px] font-semibold tracking-wider uppercase">
                  {categoryLabel(rail.category)}
                </span>
                {/* Duration badge */}
                <span className="absolute top-3.5 right-3.5 z-10 px-3 py-1.5 rounded-full bg-accent/90 backdrop-blur-sm text-white font-sans text-[10px] font-semibold tracking-wider">
                  {rail.duration}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div className="mb-4">
                  <h3 className="font-display text-xl font-bold text-charcoal mb-1 leading-none group-hover:text-accent transition-colors">
                    {rail.name}
                  </h3>
                  <p className="font-sans text-sm text-charcoal/55 leading-relaxed italic line-clamp-2 mb-2">
                    {rail.tagline}
                  </p>
                  {/* Operator */}
                  <span className="inline-block px-2.5 py-1 rounded-md bg-accent/8 text-accent font-sans text-[10px] font-bold tracking-wider uppercase mb-2">
                    {rail.operator}
                  </span>
                  {/* Route */}
                  <p className="font-sans text-xs text-charcoal/50 leading-relaxed flex items-start gap-1.5 mt-1">
                    <svg className="w-3.5 h-3.5 mt-0.5 shrink-0 text-accent/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {rail.route}
                  </p>
                  <span className="font-sans text-[11px] text-accent font-semibold tracking-wider uppercase mt-2 block">
                    {rail.season}
                  </span>
                </div>

                {/* Price Row */}
                <div className="pt-4 border-t border-charcoal/5 flex items-center justify-between mt-auto">
                  <span className="font-sans text-accent font-bold text-sm">
                    From ₹{rail.startingPrice.toLocaleString("en-IN")}
                  </span>
                  <Link
                    href="/contact"
                    className="text-accent font-sans text-xs font-semibold hover:underline flex items-center gap-1 group/btn"
                  >
                    Enquire Now
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <RevealWrapper delay={0.2}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl p-10 md:p-16 text-center flex flex-col items-center gap-6 mt-12 group bg-teal">
            <div className="absolute inset-0 bg-gradient-to-br from-teal via-[#09594d] to-espresso z-0 opacity-95"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-ring"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>

            <div className="relative z-10 flex flex-col items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gold shadow-gold-lg group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h-.375a3 3 0 013-3V6.75A2.25 2.25 0 018.25 4.5h7.5a2.25 2.25 0 012.25 2.25v4.5a3 3 0 013 3v.375M3.375 14.25V6.75A2.25 2.25 0 015.625 4.5h12.75A2.25 2.25 0 0120.625 6.75v7.5" />
                </svg>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-parchment leading-tight">
                Looking for a custom rail experience?
              </h3>
              <p className="font-sans text-base md:text-lg text-parchment/80 max-w-lg mb-4 text-center mx-auto">
                We plan complete rail holidays — from Eurail pass procurement to hotel booking at every stop, with full documentation support.
              </p>
              <Link
                href="/contact"
                className="btn-gold inline-flex items-center gap-2 text-sm uppercase tracking-wider"
              >
                Plan My Rail Journey
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
        </RevealWrapper>

      </section>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
