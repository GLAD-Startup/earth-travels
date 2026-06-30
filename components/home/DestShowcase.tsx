"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { DESTINATIONS } from "@/lib/data/destinations";

import "swiper/css";
import "swiper/css/navigation";

export default function DestShowcase() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full bg-[#080C14] py-20 overflow-hidden select-none border-t border-white/5">
      {/* Header section above panels */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal text-white leading-tight mb-3">
          Our Signature Escapes
        </h2>
        <p className="font-sans text-sm md:text-[18px] text-white/60">
          From Mathura to everywhere that matters.
        </p>
      </div>

      {/* Slider Wrapper */}
      <div className="relative w-full flex items-center justify-center px-4 md:px-12">
        
        {/* Left Arrow */}
        <button
          ref={prevRef}
          className="hidden md:flex absolute left-4 z-30 w-12 h-12 rounded-full border border-white/12 bg-[#080C14]/40 backdrop-blur-md items-center justify-center text-white/70 hover:text-white hover:border-[#D4A017]/50 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed select-none"
          aria-label="Previous escape"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Swiper Slider */}
        <div className="w-full overflow-hidden">
          {mounted ? (
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                // Bind refs to navigation elements
                if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }
              }}
              slidesPerView={1.1}
              spaceBetween={16}
              grabCursor={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className="!overflow-visible"
            >
              {DESTINATIONS.map((dest) => (
                <SwiperSlide key={dest.id} className="h-auto">
                  <div className="dest-panel w-full h-[70vh] md:h-[75vh] relative overflow-hidden group rounded-2xl border border-white/8 bg-[#080C14]">
                    {/* Card Background Image */}
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Dark Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080c14]/40 to-transparent z-10 pointer-events-none" />

                    {/* Content Panel */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 flex flex-col items-start gap-4">
                      
                      {/* Season & Packages info row */}
                      <div className="flex flex-wrap gap-2.5 items-center">
                        <span className="glass px-3 py-1 rounded-full border border-[#D4A017]/30 text-[#D4A017] font-mono text-[10px] tracking-[0.1em] uppercase bg-[#D4A017]/5 font-semibold">
                          {dest.season}
                        </span>
                        <span className="glass px-3 py-1 rounded-full border border-white/10 text-white/50 font-sans text-[10px] bg-white/5">
                          {dest.packageCount} Packages Available
                        </span>
                      </div>

                      {/* Name & Tagline */}
                      <div>
                        <h3 className="font-display text-3xl md:text-4xl font-normal italic text-white mb-2 leading-none">
                          {dest.name}
                        </h3>
                        <p className="font-sans text-sm text-white/70 leading-relaxed max-w-xs line-clamp-2">
                          {dest.tagline}
                        </p>
                      </div>

                      {/* Price tag */}
                      <div className="font-mono text-sm md:text-base text-[#D4A017] font-semibold">
                        From ₹{dest.startingPrice.toLocaleString("en-IN")} / person
                      </div>

                      {/* Action trigger */}
                      <Link
                        href={`/packages?destination=${dest.name.toLowerCase()}`}
                        className="view-pkg-link relative font-sans text-xs font-bold text-white uppercase tracking-wider group mt-1 pb-0.5"
                      >
                        View Packages <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                        <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white transition-all duration-300 origin-left scale-x-100 group-hover:bg-[#D4A017]" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            // SSR Fallback grid layout
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DESTINATIONS.slice(0, 3).map((dest) => (
                <div key={dest.id} className="w-full h-[70vh] md:h-[75vh] relative overflow-hidden rounded-2xl border border-white/8 bg-[#080C14]">
                  <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080c14]/40 to-transparent z-10 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 flex flex-col items-start gap-4">
                    <div className="flex flex-wrap gap-2.5 items-center">
                      <span className="glass px-3 py-1 rounded-full border border-[#D4A017]/30 text-[#D4A017] font-mono text-[10px] uppercase bg-[#D4A017]/5 font-semibold">
                        {dest.season}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-3xl md:text-4xl font-normal italic text-white mb-2 leading-none">
                        {dest.name}
                      </h3>
                      <p className="font-sans text-sm text-white/70 max-w-xs">
                        {dest.tagline}
                      </p>
                    </div>
                    <div className="font-mono text-sm md:text-base text-[#D4A017] font-semibold">
                      From ₹{dest.startingPrice.toLocaleString("en-IN")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Arrow */}
        <button
          ref={nextRef}
          className="hidden md:flex absolute right-4 z-30 w-12 h-12 rounded-full border border-white/12 bg-[#080C14]/40 backdrop-blur-md items-center justify-center text-white/70 hover:text-white hover:border-[#D4A017]/50 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed select-none"
          aria-label="Next escape"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-8 w-full">
        {DESTINATIONS.map((_, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isActive ? "bg-[#D4A017] w-6" : "bg-white/20 w-1.5"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
}
