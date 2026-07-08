"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { PACKAGES } from "@/lib/data";
import { GlassCard, RevealWrapper } from "@/components/ui";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FeaturedPackages() {
  return (
    <section className="relative py-24 bg-background border-t border-charcoal/5 overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-[140px] pointer-events-none opacity-30 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <RevealWrapper delay={0.1}>
              <span className="font-mono text-xs text-[#D4A017] uppercase tracking-[0.2em] block mb-2">
                Crafted Journeys
              </span>
            </RevealWrapper>
            <RevealWrapper delay={0.2}>
              <h2 className="font-display text-4xl md:text-5xl font-normal text-charcoal">
                Featured Signature Packages
              </h2>
            </RevealWrapper>
          </div>

          <RevealWrapper delay={0.3}>
            <Link
              href="/packages"
              className="text-[#D4A017] hover:text-gold-light text-sm font-semibold tracking-wider font-sans border-b border-[#D4A017]/30 hover:border-gold-light transition-all flex items-center gap-1 group pb-0.5"
            >
              View All Packages <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </RevealWrapper>
        </div>

        <RevealWrapper delay={0.4} className="relative select-none featured-slider-container">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: ".prev-pkg-btn",
              nextEl: ".next-pkg-btn",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16"
          >
            {PACKAGES.map((pkg) => (
              <SwiperSlide key={pkg.id} className="h-auto">
                <GlassCard hover={true} className="h-full flex flex-col bg-background/35 border border-charcoal/10 group rounded-[20px]">
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 to-transparent" />

                    {pkg.badge && (
                      <span className="absolute top-4 left-4 z-10 bg-linear-to-r from-[#D4A017] to-[#F0C040] text-midnight text-[10px] tracking-wider uppercase font-bold font-mono px-3 py-1 rounded">
                        {pkg.badge}
                      </span>
                    )}

                    <span className="absolute bottom-4 right-4 z-10 bg-background/80 border border-charcoal/10 text-charcoal font-mono text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                      ⏱ {pkg.duration.nights}N/{pkg.duration.days}D
                    </span>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[#D4A017] font-mono text-xs uppercase tracking-wider block mb-1">
                        {pkg.destination}
                      </span>
                      <h3 className="font-display font-sans text-xl font-bold text-charcoal mb-4 leading-tight group-hover:text-[#D4A017] transition-colors">
                        {pkg.name}
                      </h3>

                      <div className="flex flex-col gap-2.5 mb-6 text-sm text-charcoal/70">
                        {pkg.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className="text-[#D4A017] text-xs">✦</span>
                            <span className="font-sans text-[13px]">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-baseline gap-1.5 mb-6 pt-4 border-t border-charcoal/5">
                        <span className="text-xs text-charcoal/40 font-sans">Starting at</span>
                        <span className="font-mono text-2xl font-bold text-[#D4A017]">
                          ₹{pkg.pricePerPerson.toLocaleString("en-IN")}
                        </span>
                        <span className="text-[10px] text-charcoal/40 font-sans">/ person</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <Link
                          href={pkg.itineraryPage}
                          className="btn-outline font-sans text-center text-xs font-semibold py-2.5 px-0 border border-charcoal/10 hover:border-[#D4A017]/30 flex items-center justify-center"
                        >
                          View Itinerary
                        </Link>
                        <Link
                          href={`/quote?destination=${pkg.destination.toLowerCase()}`}
                          className="btn-gold font-sans text-center text-xs font-semibold py-2.5 px-0 flex items-center justify-center"
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

          <div className="flex items-center justify-between mt-4">
            <div className="swiper-pagination-custom flex gap-2 !w-auto" />

            <div className="flex gap-3">
              <button className="prev-pkg-btn w-10 h-10 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal/60 hover:text-[#D4A017] hover:border-[#D4A017]/50 transition-colors bg-white/5 cursor-pointer">
                ←
              </button>
              <button className="next-pkg-btn w-10 h-10 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal/60 hover:text-[#D4A017] hover:border-[#D4A017]/50 transition-colors bg-white/5 cursor-pointer">
                →
              </button>
            </div>
          </div>
        </RevealWrapper>
      </div>

      <style jsx global>{`
        .featured-slider-container .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.15) !important;
          opacity: 1 !important;
          width: 24px !important;
          height: 3px !important;
          border-radius: 9999px !important;
          transition: all 0.3s ease !important;
        }
        .featured-slider-container .swiper-pagination-bullet-active {
          background: var(--gold) !important;
          width: 48px !important;
        }
      `}</style>
    </section>
  );
}
