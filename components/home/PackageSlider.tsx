"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { PACKAGES } from "@/lib/data/packages";
import { GlassCard } from "@/components/ui";

import "swiper/css";
import "swiper/css/navigation";

const CATEGORIES = [
  { id: "all", name: "All Escapes" },
  { id: "honeymoon", name: "Honeymoon Specials" },
  { id: "family", name: "Family Vacations" },
  { id: "adventure", name: "Adventure & Sports" },
  { id: "luxury", name: "Luxury Getaways" },
  { id: "budget", name: "Budget Friendly" },
];

export default function PackageSlider() {
  const [activeCategory, setActiveCategory] = useState("all");
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const filteredPackages = PACKAGES.filter((pkg) => {
    if (activeCategory === "all") return true;
    return pkg.category.includes(activeCategory);
  });

  const inclusions = [
    { key: "flight", label: "Flight included", icon: "✈️" },
    { key: "hotel", label: "Hotel included", icon: "🏨" },
    { key: "meals", label: "Meals included", icon: "🍽️" },
    { key: "visa", label: "Visa included", icon: "🛂" },
    { key: "transfers", label: "Transfers included", icon: "🚗" },
    { key: "sightseeing", label: "Sightseeing included", icon: "📸" },
  ];

  return (
    <section className="relative w-full bg-[#080C14] py-24 overflow-hidden select-none border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal text-white mb-6">
            Featured Packages
          </h2>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5 justify-center items-center">
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-sans font-semibold border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#D4A017] to-[#F0C040] text-midnight border-transparent font-bold shadow-lg shadow-gold/25"
                      : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:border-white/30"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Swiper Slider wrapper */}
        <div className="relative mt-12 package-slider-container">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1.2}
            grabCursor={true}
            loop={false}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-expect-error swiper navigation ref typing is not exposed directly on swiper params
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error swiper navigation ref typing is not exposed directly on swiper params
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
              },
              1024: {
                slidesPerView: 3.2,
              },
            }}
            className="!overflow-visible"
          >
            {filteredPackages.map((pkg) => (
              <SwiperSlide key={pkg.id} className="h-auto">
                <GlassCard
                  hover={true}
                  className="h-full flex flex-col justify-between p-0 bg-[#080C14]/40 border border-white/10 rounded-[20px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_24px_rgba(212,160,23,0.35)] group overflow-hidden"
                >
                  {/* TOP HALF: image + badge */}
                  <div className="relative h-[250px] w-full overflow-hidden rounded-t-[16px]">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 to-transparent" />

                    {pkg.badge && (
                      <span
                        className="absolute top-4 right-4 z-10 text-midnight text-[10px] font-mono tracking-wider uppercase font-extrabold rounded-full px-3.5 py-1.5 shadow-lg border border-transparent"
                        style={{
                          background: "linear-gradient(135deg, #D4A017 0%, #F0C040 100%)",
                        }}
                      >
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  {/* BOTTOM HALF: details */}
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      {/* Name & Duration badge row */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h3 className="font-display text-xl md:text-[22px] font-bold text-white leading-snug group-hover:text-[#D4A017] transition-colors">
                          {pkg.name}
                        </h3>
                        <span className="glass shrink-0 font-mono text-[10px] text-white/50 border border-white/10 px-2.5 py-1 rounded bg-white/5">
                          {pkg.duration.nights}N / {pkg.duration.days}D
                        </span>
                      </div>

                      {/* Inclusions Row with tooltips */}
                      <div className="flex items-center gap-2.5 mb-5 py-3 border-y border-white/5 select-none">
                        {inclusions.map((inc) => {
                          const isIncluded = pkg.inclusions[inc.key as keyof typeof pkg.inclusions];
                          return (
                            <div
                              key={inc.key}
                              className={`relative group/inc flex items-center justify-center w-7 h-7 rounded-lg border text-sm transition-colors cursor-help ${
                                isIncluded
                                  ? "text-[#D4A017] border-[#D4A017]/30 bg-[#D4A017]/5"
                                  : "text-white/20 border-transparent bg-white/5 opacity-40"
                              }`}
                            >
                              <span>{inc.icon}</span>
                              {/* Custom floating tooltip */}
                              <div className="absolute bottom-full mb-2 hidden group-hover/inc:block z-30 bg-midnight border border-white/12 text-white/80 font-sans text-[9px] px-2.5 py-1 rounded shadow-xl whitespace-nowrap pointer-events-none">
                                {inc.label}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Highlights */}
                      <ul className="flex flex-col gap-2.5 mb-6 text-xs text-white/70">
                        {pkg.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2 truncate">
                            <span className="w-1.5 h-1.5 bg-[#D4A017] rounded-full shrink-0" />
                            <span className="font-sans truncate">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price & Buttons */}
                    <div>
                      {/* Price row */}
                      <div className="flex items-baseline justify-between mb-5 pt-3 border-t border-white/5">
                        <span className="text-[11px] text-white/50 font-sans uppercase">From</span>
                        <div className="flex items-baseline gap-1">
                          <span className="font-mono text-2xl font-black text-[#D4A017]">
                            ₹{pkg.pricePerPerson.toLocaleString("en-IN")}
                          </span>
                          <span className="text-[10px] text-white/40 font-sans uppercase">/ person</span>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="grid grid-cols-2 gap-3.5">
                        <Link
                          href={pkg.itineraryPage}
                          className="btn-outline font-sans text-center text-xs font-semibold py-3 border border-white/10 hover:border-[#D4A017]/30 flex items-center justify-center"
                        >
                          View Itinerary
                        </Link>
                        <Link
                          href={`/quote?destination=${pkg.destination.toLowerCase()}`}
                          className="font-sans text-center text-xs font-semibold py-3 text-midnight rounded-full flex items-center justify-center hover:shadow-[0_0_15px_rgba(212,160,23,0.3)] transition-all duration-300 hover:scale-103 font-bold"
                          style={{
                            background: "linear-gradient(135deg, #D4A017 0%, #F0C040 100%)",
                          }}
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-12 w-full">
            <button
              ref={prevRef}
              className="w-11 h-11 rounded-full border border-white/10 bg-[#080C14]/40 backdrop-blur-md flex items-center justify-center text-white/60 hover:text-[#D4A017] hover:border-[#D4A017]/50 transition-colors cursor-pointer select-none"
              aria-label="Previous package"
            >
              ←
            </button>
            <button
              ref={nextRef}
              className="w-11 h-11 rounded-full border border-white/10 bg-[#080C14]/40 backdrop-blur-md flex items-center justify-center text-white/60 hover:text-[#D4A017] hover:border-[#D4A017]/50 transition-colors cursor-pointer select-none"
              aria-label="Next package"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .package-slider-container .swiper-button-disabled {
          opacity: 0.3 !important;
          cursor: not-allowed !important;
          border-color: rgba(255, 255, 255, 0.05) !important;
          color: rgba(255, 255, 255, 0.2) !important;
        }
      `}</style>
    </section>
  );
}
