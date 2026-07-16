"use client";

import React from "react";

export default function TrustBar() {
  const stats = [
    "15000+ Happy Travellers",
    "150+ Destinations",
    "15+ Years of Excellence",
    "4.7★ Rated on Directories",
    "Visa Assistance Included",
  ];

  const items = [...stats, ...stats, ...stats];

  return (
    <section className="relative bg-background/90 border-y border-charcoal/5 py-5 overflow-hidden w-full select-none z-10">
      <div className="flex w-max items-center animate-marquee whitespace-nowrap">
        {items.map((stat, idx) => (
          <div key={idx} className="flex items-center gap-6 md:gap-8 mx-6 md:mx-8">
            <span className="font-mono text-xs md:text-sm text-charcoal/70 uppercase tracking-[0.15em]">
              {stat}
            </span>
            <span className="w-1.5 h-1.5 bg-[#D4A017] rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
