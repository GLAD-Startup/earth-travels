"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui";
import { Package } from "@/lib/data/packages";
import { DESTINATIONS } from "@/lib/data/destinations";

interface PackageCardProps {
  pkg: Package;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-[320px] rounded-[20px] bg-white/5 border border-charcoal/10 animate-pulse flex items-center justify-center">
        <div className="text-[#D4A017] font-mono text-xs tracking-widest uppercase">
          Loading Package Details...
        </div>
      </div>
    );
  }

  const inclusions = [
    {
      key: "flight",
      label: "Flight included",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-1 .1-1.3.5l-.3.4c-.2.3-.2.8.1 1l7.6 4.3-3.8 3.8-3.2-.8c-.3-.1-.7 0-.9.3l-.3.3c-.2.2-.2.6 0 .8l2.9 2.9 2.9 2.9c.2.2.6.2.8 0l.3-.3c.3-.2.4-.6.3-.9l-.8-3.2 3.8-3.8 4.3 7.6c.2.3.7.3 1 .1l.4-.3c.4-.3.6-.8.5-1.3z" />
        </svg>
      ),
    },
    {
      key: "hotel",
      label: "Hotel included",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
          <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
          <path d="M10 7h4" />
          <path d="M10 11h4" />
        </svg>
      ),
    },
    {
      key: "meals",
      label: "Meals included",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
      ),
    },
    {
      key: "visa",
      label: "Visa included",
      icon: (
        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M9 15l2 2 4-4" />
        </svg>
      ),
    },
    {
      key: "transfers",
      label: "Transfers included",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      ),
    },
    {
      key: "sightseeing",
      label: "Sightseeing included",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      ),
    },
  ];
 
  const whatsAppLink = `https://wa.me/918941881111?text=${encodeURIComponent(
    `Hi Earth Travels, I am interested in the "${pkg.name}" (${pkg.duration.nights}N/${pkg.duration.days}D) package starting at ₹${pkg.pricePerPerson.toLocaleString("en-IN")}. Please share details.`
  )}`;
 
  return (
    <GlassCard
      hover={true}
      className="p-0 overflow-hidden bg-background/40 border border-charcoal/10 hover:border-[#D4A017]/30 transition-all duration-500 rounded-[20px] w-full"
    >
      <div className="flex flex-col lg:flex-row min-h-[300px]">
        
        {/* LEFT: Image Section */}
        <div className="relative w-full lg:w-[300px] h-64 lg:h-auto shrink-0 overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-full object-cover select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-midnight/90 to-transparent pointer-events-none" />
 
          {/* Ribbon */}
          {pkg.badge && (
            <span
              className="absolute top-4 left-4 z-10 text-midnight text-[10px] font-mono tracking-wider uppercase font-extrabold rounded px-3 py-1 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #D4A017 0%, #F0C040 100%)",
              }}
            >
              {pkg.badge}
            </span>
          )}
        </div>
 
        {/* RIGHT: Details Section */}
        <div className="p-7 flex-grow flex flex-col justify-between">
          <div>
            
            {/* Category pills */}
            <div className="flex flex-wrap gap-2.5 mb-3">
              {pkg.category.map((cat) => (
                <span
                  key={cat}
                  className="glass px-3 py-1 rounded-full border border-charcoal/10 text-charcoal/50 font-mono text-[9px] uppercase tracking-wider bg-white/5"
                >
                  {cat}
                </span>
              ))}
            </div>
 
            {/* Name */}
            <h3 className="font-display text-2xl md:text-[30px] font-bold text-charcoal mb-2 leading-none hover:text-[#D4A017] transition-colors">
              {pkg.name}
            </h3>
 
            {/* Duration + departure */}
            <div className="font-mono text-xs text-charcoal/60 mb-5">
              ⏱ {pkg.duration.nights}N / {pkg.duration.days}D • Departs from Mathura / Delhi
            </div>
 
            {/* Inclusions Row */}
            <div className="flex items-center gap-2.5 mb-6 select-none border-b border-charcoal/5 pb-4">
              {inclusions.map((inc) => {
                const isIncluded = pkg.inclusions[inc.key as keyof typeof pkg.inclusions];
                const tooltipText = isIncluded ? inc.label : inc.label.replace("included", "NOT included");
                return (
                  <div
                    key={inc.key}
                    className={`relative group/inc flex items-center justify-center w-8 h-8 rounded-lg border transition-colors cursor-help ${
                      isIncluded
                        ? "text-[#D4A017] border-[#D4A017]/30 bg-[#D4A017]/5"
                        : "text-charcoal/20 border-transparent bg-white/5 opacity-40"
                    }`}
                  >
                    {inc.icon}
                    <div className="absolute bottom-full mb-2 hidden group-hover/inc:block z-30 bg-background border border-charcoal/12 text-charcoal/80 font-sans text-[9px] px-2.5 py-1 rounded shadow-xl whitespace-nowrap pointer-events-none">
                      {tooltipText}
                    </div>
                  </div>
                );
              })}
            </div>
 
            {/* Highlights */}
            <ul className="flex flex-col gap-2.5 mb-6">
              {pkg.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-charcoal/80 font-sans leading-snug">
                  <span className="text-[#D4A017] select-none mt-0.5">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Bottom Actions Row */}
          <div className="pt-6 border-t border-charcoal/5 flex flex-wrap items-center justify-between gap-4">
            
            {/* Pricing Section */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-charcoal/40 font-sans uppercase">From</span>
              <div className="flex flex-wrap items-baseline gap-1.5 leading-none">
                <span className="font-mono text-3xl md:text-[36px] font-black text-[#D4A017]">
                  ₹{pkg.pricePerPerson.toLocaleString("en-IN")}
                </span>
                <span className="text-[10px] text-charcoal/50 font-sans uppercase max-w-[100px] leading-tight">
                  per person, twin sharing
                </span>
              </div>
            </div>
 
            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 w-full sm:w-auto mt-2 sm:mt-0">
              <div className="flex flex-wrap sm:flex-nowrap gap-3">
                <Link
                  href={pkg.itineraryPage}
                  className="btn-outline font-sans text-center text-xs font-semibold py-3 px-4 xl:px-6 shrink-0 border border-charcoal/10 hover:border-[#D4A017]/30 flex items-center justify-center flex-1 sm:flex-none"
                >
                  View Full Itinerary
                </Link>
                <Link
                  href={`/quote?destination=${pkg.destination.toLowerCase()}`}
                  className="font-sans text-center text-xs font-bold py-3 px-4 xl:px-6 text-midnight rounded-full hover:shadow-[0_0_15px_rgba(212,160,23,0.3)] transition-all duration-300 hover:scale-103 inline-block shrink-0 flex-1 sm:flex-none"
                  style={{
                    background: "linear-gradient(135deg, #D4A017 0%, #F0C040 100%)",
                  }}
                >
                  Book Now
                </Link>
              </div>
 
              {/* WhatsApp Link */}
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#0f6e5c] hover:text-[#0a4d40] font-mono tracking-wider font-semibold hover:underline block text-center sm:text-right mt-1"
              >
                📱 Quick inquiry on WhatsApp
              </a>
            </div>
            
          </div>
        </div>

      </div>
    </GlassCard>
  );
}
