"use client";
 
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { DESTINATIONS } from "@/lib/data/destinations";
import { DestinationGrid, GlobeViewer } from "@/components/destinations";
import { RevealWrapper } from "@/components/ui";
 
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
 
  const filteredDestinations = DESTINATIONS.filter((dest) => {
    const matchesTab = activeTab === "all" || dest.region === activeTab;
    
    // Map region code (like 'southeast-asia') to clean tag names (like 'Southeast Asia')
    const regionObj = TABS.find((t) => t.id === dest.region);
    const cleanRegionName = regionObj ? regionObj.name : "";
 
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cleanRegionName.toLowerCase().includes(searchQuery.toLowerCase());
 
    return matchesTab && matchesSearch;
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
    <div className="bg-background min-h-screen text-charcoal select-none">
      <title>Explore Our World — Signature Escapes | Earth Travels</title>
      <meta name="description" content="View signature tour destinations by Earth Travels Mathura. From Kashmir valleys to Maldives overwater resorts, we plan it all." />
      
      {/* 1. Page Hero */}
      <section
        className="relative h-[50vh] min-h-[350px] w-full flex items-center justify-center text-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
          alt="World from space"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <RevealWrapper delay={0.1}>
            <h1 className="font-display text-4xl md:text-[72px] font-bold tracking-tight text-white mb-4 leading-tight"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
            >
              Explore Our World
            </h1>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p className="font-sans text-base md:text-lg text-white/70 max-w-lg mx-auto">
              From Mathura to everywhere that matters.
            </p>
          </RevealWrapper>
        </div>
      </section>
 
      {/* 2. Sticky Filter Tabs — accent pills */}
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
 
      {/* 3. Main content body */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-16 relative z-10">
        
        {/* 3D Globe with container frame */}
        <RevealWrapper delay={0}>
          <div className="rounded-2xl border border-charcoal/8 bg-gradient-to-br from-sand via-background to-sand p-6 md:p-10 relative overflow-hidden">
            {/* Radial glow behind globe */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: "radial-gradient(ellipse at center, rgba(15,110,92,0.06) 0%, transparent 60%)",
            }} />
            <GlobeViewer onSelectDestination={handleSelectDestination} activeRegion={activeTab} />
            {/* Helper text pill overlay */}
            <div className="flex justify-center mt-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-charcoal/8 shadow-sm text-[11px] text-charcoal/50 font-sans">
                <svg className="w-3.5 h-3.5 text-accent/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                Drag to pan · Scroll to zoom · Click dot to explore
              </span>
            </div>
          </div>
        </RevealWrapper>
 
        {/* Destination Grid */}
        <RevealWrapper delay={0.1}>
          <div id="destination-grid-section" className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-charcoal/5 pb-6">
              <div className="border-l-2 border-accent pl-4">
                <span className="font-sans text-[10px] text-charcoal/40 uppercase tracking-widest block mb-0.5">
                  Signature Escapes
                </span>
                <h2 className="font-display text-2xl font-bold text-charcoal">
                  Signature Holiday Spots ({filteredDestinations.length})
                </h2>
              </div>
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="Search destinations by name or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 pl-10 text-xs font-sans border border-charcoal/15 rounded-full bg-surface text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                />
                <svg className="absolute left-3.5 top-3.5 w-4 h-4 text-charcoal/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            {filteredDestinations.length > 0 ? (
              <DestinationGrid destinations={filteredDestinations} />
            ) : (
              <div className="text-center py-20 border border-dashed border-charcoal/10 rounded-2xl">
                <span className="text-4xl block mb-4 select-none">🔍</span>
                <p className="text-sm font-sans text-charcoal/50">
                  No destinations match your search query &ldquo;{searchQuery}&rdquo;.
                </p>
              </div>
            )}
          </div>
        </RevealWrapper>
 
        {/* Bottom CTA Card */}
        <RevealWrapper delay={0.2}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl p-10 md:p-16 text-center flex flex-col items-center gap-6 mt-12 group bg-teal">
            {/* Background with gradient and subtle animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal via-[#09594d] to-espresso z-0 opacity-95"></div>
            
            {/* Decorative circles */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-ring"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
 
            <div className="relative z-10 flex flex-col items-center gap-5">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gold shadow-gold-lg group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-parchment leading-tight">
                Don&apos;t see your dream destination?
              </h3>
              <p className="font-sans text-base md:text-lg text-parchment/80 max-w-lg mb-4 text-center mx-auto">
                We design premium tailor-made itineraries for families from Mathura to any global hotspot.
              </p>
              <Link
                href="/contact"
                className="btn-gold inline-flex items-center gap-2 text-sm uppercase tracking-wider"
              >
                Contact Us for Custom Tours
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
