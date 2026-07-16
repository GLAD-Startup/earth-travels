"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CRUISES } from "@/lib/data/cruises";
import { RevealWrapper } from "@/components/ui";

const TABS = [
  { id: "all", name: "All" },
  { id: "domestic", name: "Domestic" },
  { id: "international", name: "International" },
  { id: "river", name: "River Cruises" },
];

export default function CruisesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
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

  const filteredCruises = CRUISES.filter((cruise) => {
    const matchesTab = activeTab === "all" || cruise.category === activeTab;
    const matchesSearch =
      cruise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cruise.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cruise.route.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cruise.cruiseLine.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-background min-h-screen text-charcoal select-none">
      <title>Cruise Packages — Sail the World | Earth Travels</title>
      <meta name="description" content="Explore luxury cruise packages from Earth Travels Mathura. Cordelia, MSC, Royal Caribbean & more. Domestic and international voyages." />

      {/* 1. Page Hero */}
      <section className="relative h-[50vh] min-h-[350px] w-full flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury cruise ship at sea"
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
              Set Sail
            </h1>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p className="font-sans text-base md:text-lg text-white/70 max-w-lg mx-auto">
              From coastal escapes to ocean odysseys — cruise packages for every kind of traveller.
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-2">
            <div className="border-l-2 border-accent pl-4">
              <span className="font-sans text-[10px] text-charcoal/40 uppercase tracking-widest block mb-0.5">
                Voyages
              </span>
              <h2 className="font-display text-2xl font-bold text-charcoal">
                Cruise Packages ({filteredCruises.length})
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search cruises, lines, or destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 pr-4 rounded-xl border border-charcoal/10 bg-white/60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent font-sans text-sm transition-all duration-300 placeholder:text-charcoal/40"
              />
              <svg
                className="absolute left-3 top-3 w-4 h-4 text-charcoal/40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </RevealWrapper>

        {filteredCruises.length === 0 ? (
          <RevealWrapper delay={0.1}>
            <div className="flex flex-col items-center justify-center text-center py-20 bg-surface/50 border border-dashed border-charcoal/15 rounded-3xl p-8 max-w-lg mx-auto w-full">
              <span className="text-4xl mb-4">🚢</span>
              <h3 className="font-display text-lg font-bold text-charcoal mb-1">No cruises found</h3>
              <p className="font-sans text-xs text-charcoal/60 leading-relaxed">
                We couldn&apos;t find any cruise packages matching &ldquo;{searchQuery}&rdquo;. Try checking the spelling or exploring another category.
              </p>
              <button
                onClick={() => { setSearchQuery(""); setActiveTab("all"); }}
                className="mt-6 px-5 py-2.5 rounded-full text-xs font-sans font-semibold bg-accent text-white hover:bg-accent/90 transition-all duration-300"
              >
                Reset Filters
              </button>
            </div>
          </RevealWrapper>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {filteredCruises.map((cruise) => (
              <div
                key={cruise.id}
                className="bg-surface border border-charcoal/8 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-accent/20 group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-[220px] w-full overflow-hidden">
                  <img
                    src={cruise.image}
                    alt={cruise.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                  />
                  {/* Category badge */}
                  <span className="absolute top-3.5 left-3.5 z-10 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-sm text-white font-sans text-[10px] font-semibold tracking-wider uppercase">
                    {cruise.category}
                  </span>
                  {/* Duration badge */}
                  <span className="absolute top-3.5 right-3.5 z-10 px-3 py-1.5 rounded-full bg-accent/90 backdrop-blur-sm text-white font-sans text-[10px] font-semibold tracking-wider">
                    {cruise.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div className="mb-4">
                    <h3 className="font-display text-xl font-bold text-charcoal mb-1 leading-none group-hover:text-accent transition-colors">
                      {cruise.name}
                    </h3>
                    <p className="font-sans text-xs text-charcoal/50 leading-relaxed mb-3">
                      {cruise.tagline}
                    </p>
                    <div className="flex flex-col gap-1.5 font-sans text-[11px] text-charcoal/70">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        <span>Line: <span className="font-semibold text-charcoal">{cruise.cruiseLine}</span></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        <span>Route: <span className="font-semibold text-charcoal">{cruise.route}</span></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        <span className="font-mono text-[9px] text-accent font-semibold">{cruise.season}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price Row */}
                  <div className="pt-4 border-t border-charcoal/5 flex items-center justify-between mt-auto">
                    <span className="font-sans text-accent font-bold text-sm">
                      From ₹{cruise.startingPrice.toLocaleString("en-IN")}
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
        )}

        {/* Bottom CTA Card */}
        <RevealWrapper delay={0.2}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl p-10 md:p-16 text-center flex flex-col items-center gap-6 mt-12 group bg-teal">
            <div className="absolute inset-0 bg-gradient-to-br from-teal via-[#09594d] to-espresso z-0 opacity-95"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-ring"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>

            <div className="relative z-10 flex flex-col items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gold shadow-gold-lg group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-parchment leading-tight">
                Dream of a different voyage?
              </h3>
              <p className="font-sans text-base md:text-lg text-parchment/80 max-w-lg mb-4 text-center mx-auto">
                We customize cruise packages for families — with veg dining arrangements, documentation support, and cabin upgrades.
              </p>
              <Link
                href="/contact"
                className="btn-gold inline-flex items-center gap-2 text-sm uppercase tracking-wider"
              >
                Contact Us for Custom Cruises
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
