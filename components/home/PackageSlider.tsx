"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { PACKAGES } from "@/lib/data/packages";

import "swiper/css";
import "swiper/css/navigation";

const CATEGORIES = [
  { id: "all", name: "All Experiences" },
  { id: "honeymoon", name: "Romantic Retreats" },
  { id: "family", name: "Family Expeditions" },
  { id: "luxury", name: "Ultra Luxury" },
];

export default function PackageSlider() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPackages = PACKAGES.filter((pkg) => {
    if (activeCategory === "all") return true;
    return pkg.category.includes(activeCategory);
  });

  return (
    <section className="relative w-full bg-[#fdf8f2] py-32 overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        
        {/* Section Heading & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] text-[#c4900f] uppercase tracking-[0.3em] font-semibold block mb-4">
              Curated Itineraries
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-normal text-[#1a120a] leading-[1.1] tracking-[-0.02em]">
              Journeys of a<br />
              <span className="italic text-[#c4900f]">Lifetime</span>
            </h2>
          </div>
          
          {/* Minimalist Category Filter Pills */}
          <div className="flex flex-wrap gap-6 md:justify-end">
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative font-mono text-[10px] tracking-[0.2em] uppercase font-semibold transition-colors duration-300 pb-1 ${
                    isActive ? "text-[#1a120a]" : "text-[#1a120a]/40 hover:text-[#1a120a]/80"
                  }`}
                >
                  {cat.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1a120a]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={40}
            slidesPerView={1.1}
            grabCursor={true}
            loop={filteredPackages.length >= 3}
            autoplay={
              filteredPackages.length >= 3
                ? {
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
                : false
            }
            navigation={{
              prevEl: ".swiper-prev-pkg",
              nextEl: ".swiper-next-pkg",
            }}
            breakpoints={{
              640: { slidesPerView: 2.1 },
              1024: { slidesPerView: 3.1 },
            }}
            className="!overflow-visible"
          >
            {filteredPackages.map((pkg) => (
              <SwiperSlide key={pkg.id} className="h-auto">
                <div className="group flex flex-col gap-6 h-full cursor-pointer">
                  {/* Image Container */}
                  <div className="relative h-[450px] w-full overflow-hidden rounded-xl border border-[#1a120a]/8 shadow-sm group-hover:shadow-[0_12px_45px_rgba(26,18,10,0.08)] group-hover:border-[#c4900f]/35 transition-all duration-500 bg-[#1a120a]/5">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                      loading="lazy"
                      quality={85}
                    />
                    
                    {/* Minimal Badge */}
                    {pkg.badge && (
                      <span className="absolute top-6 left-6 z-10 bg-white/95 backdrop-blur-md text-[#1a120a] text-[9px] font-sans uppercase font-bold tracking-widest px-4 py-2 rounded-full shadow-sm">
                        {pkg.badge}
                      </span>
                    )}

                    {/* Duration Badge */}
                    <span className="absolute bottom-6 right-6 z-10 bg-[#1a120a]/80 backdrop-blur-md text-white text-[9px] font-mono uppercase tracking-widest px-4 py-2 rounded-lg">
                      {pkg.duration.nights}N / {pkg.duration.days}D
                    </span>
                  </div>

                  {/* Minimalist Details */}
                  <div className="flex flex-col gap-3 px-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-2xl md:text-[28px] font-normal text-[#1a120a] leading-tight group-hover:text-[#c4900f] transition-colors duration-500">
                        {pkg.name}
                      </h3>
                    </div>

                    {/* Highlights - elegant list */}
                    <p className="font-sans text-sm text-[#1a120a]/60 leading-relaxed font-light line-clamp-2">
                      {pkg.highlights.join(" • ")}
                    </p>

                    {/* Pricing & Link */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#1a120a]/10">
                      <div className="flex flex-col">
                        <span className="text-[9px] text-[#1a120a]/40 font-mono tracking-widest uppercase mb-1">
                          Starting From
                        </span>
                        <span className="font-sans text-lg font-normal text-[#1a120a]">
                          ₹{pkg.pricePerPerson.toLocaleString("en-IN")}
                        </span>
                      </div>
                      
                      <Link
                        href={pkg.itineraryPage}
                        className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#c4900f] hover:text-[#1a120a] transition-colors"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Minimalist Circular Navigation */}
          <div className="flex items-center gap-4 mt-16 w-full md:justify-end select-none">
            <button
              className="swiper-prev-pkg w-12 h-12 rounded-full border border-[#1a120a]/15 flex items-center justify-center transition-all duration-300 hover:bg-[#1a120a] hover:text-white hover:border-[#1a120a] active:scale-95 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#1a120a] disabled:hover:border-[#1a120a]/15 disabled:cursor-not-allowed group"
              aria-label="Previous package"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75-6.75M4.5 12l6.75 6.75" />
              </svg>
            </button>
            <button
              className="swiper-next-pkg w-12 h-12 rounded-full border border-[#1a120a]/15 flex items-center justify-center transition-all duration-300 hover:bg-[#1a120a] hover:text-white hover:border-[#1a120a] active:scale-95 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#1a120a] disabled:hover:border-[#1a120a]/15 disabled:cursor-not-allowed group"
              aria-label="Next package"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
