"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui";
import { Package } from "@/lib/data/packages";

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
    { key: "flight", label: "Flight included", icon: "✈️" },
    { key: "hotel", label: "Hotel included", icon: "🏨" },
    { key: "meals", label: "Meals included", icon: "🍽️" },
    { key: "visa", label: "Visa included", icon: "🛂" },
    { key: "transfers", label: "Transfers included", icon: "🚗" },
    { key: "sightseeing", label: "Sightseeing included", icon: "📸" },
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
                return (
                  <div
                    key={inc.key}
                    className={`relative group/inc flex items-center justify-center w-7.5 h-7.5 rounded-lg border text-sm transition-colors cursor-help ${
                      isIncluded
                        ? "text-[#D4A017] border-[#D4A017]/30 bg-[#D4A017]/5"
                        : "text-charcoal/20 border-transparent bg-white/5 opacity-40"
                    }`}
                  >
                    <span>{inc.icon}</span>
                    <div className="absolute bottom-full mb-2 hidden group-hover/inc:block z-30 bg-background border border-charcoal/12 text-charcoal/80 font-sans text-[9px] px-2.5 py-1 rounded shadow-xl whitespace-nowrap pointer-events-none">
                      {inc.label}
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
          <div className="pt-6 border-t border-charcoal/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
            
            {/* Pricing Section */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-charcoal/40 font-sans uppercase">From</span>
              <div className="flex items-baseline gap-1.5 leading-none">
                <span className="font-mono text-3xl md:text-[36px] font-black text-[#D4A017]">
                  ₹{pkg.pricePerPerson.toLocaleString("en-IN")}
                </span>
                <span className="text-[10px] text-charcoal/50 font-sans uppercase">
                  per person, twin sharing
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <Link
                  href={pkg.itineraryPage}
                  className="btn-outline font-sans text-center text-xs font-semibold py-3 px-6 shrink-0 border border-charcoal/10 hover:border-[#D4A017]/30 flex items-center justify-center"
                >
                  View Full Itinerary
                </Link>
                <Link
                  href={`/quote?destination=${pkg.destination.toLowerCase()}`}
                  className="font-sans text-center text-xs font-bold py-3 px-6 text-midnight rounded-full hover:shadow-[0_0_15px_rgba(212,160,23,0.3)] transition-all duration-300 hover:scale-103 inline-block shrink-0"
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
                className="text-[11px] text-emerald-400 font-mono tracking-wider font-semibold hover:underline block text-center sm:text-right mt-1"
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
