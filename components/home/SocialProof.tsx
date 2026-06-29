"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useCountUp } from "@/lib/hooks";
import { GlassCard } from "@/components/ui";

import "swiper/css";

interface StatItemProps {
  icon: React.ReactNode;
  count: string;
  label: string;
  countRef: React.RefObject<HTMLSpanElement | null>;
}

function StatItem({ icon, count, label, countRef }: StatItemProps) {
  return (
    <GlassCard
      hover={false}
      className="p-4 bg-white/5 border border-white/8 rounded-2xl min-h-[130px] md:min-h-[140px] flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center text-center w-full h-full gap-2">
        <div className="text-xl md:text-2xl text-[#D4A017] select-none flex items-center justify-center">
          {icon}
        </div>
        <span
          ref={countRef}
          className="font-mono text-3xl md:text-4xl font-bold text-[#D4A017] leading-none"
        >
          {count}
        </span>
        <span className="font-sans text-[11px] md:text-[12px] text-white/60 font-semibold tracking-wider uppercase">
          {label}
        </span>
      </div>
    </GlassCard>
  );
}

export default function SocialProof() {
  const [mounted, setMounted] = useState(false);
  const [count1, ref1] = useCountUp({ target: 127, duration: 1500 });
  const [count2, ref2] = useCountUp({ target: 50, duration: 1500 });
  const [count3, ref3] = useCountUp({ target: 10, duration: 1500 });
  const [count4, ref4] = useCountUp({ target: 4.7, duration: 1500, decimals: 1 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    {
      count: count1,
      ref: ref1,
      label: "Happy Travellers",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      count: count2,
      ref: ref2,
      label: "Destinations",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2.945M11.028 13.77A2.585 2.585 0 1014 16.657m-2.973-2.887a2.586 2.586 0 11-2.973-2.887" />
        </svg>
      ),
    },
    {
      count: count3,
      ref: ref3,
      label: "Years of Experience",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      count: count4,
      ref: ref4,
      label: "Average Rating ★",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      initial: "R",
      name: "Rakesh Jain",
      destination: "Kashmir 🏔️",
      review: "We were surprised by the hospitality. The people are very honest and soft spoken. They made our entire stay comfortable and memorable.",
    },
    {
      initial: "R",
      name: "Ronak Agrawal",
      destination: "Maldives 🌊",
      review: "Earth Travels helped us choose the best family resort. They completed our documentation and even provided all baby amenities. Always a quick response.",
    },
    {
      initial: "S",
      name: "Saloni Agrawal",
      destination: "Malaysia ✈️",
      review: "All hotel properties and tours were well managed and fun. They handled all documentation including travel insurance. Trip turned out amazing.",
    },
    {
      initial: "A",
      name: "Amit Sharma",
      destination: "Dubai 🏙️",
      review: "Flawless planning by Earth Travels. The desert safari, Burj Khalifa tickets, and airport transfers were perfectly synchronized. Highly recommended!",
    },
    {
      initial: "N",
      name: "Neha Gupta",
      destination: "Bali 🌴",
      review: "We booked our honeymoon package to Bali. The villa with a private pool was beautiful, and the driver was very helpful with local sightseeing.",
    },
    {
      initial: "V",
      name: "Vikram Singh",
      destination: "Europe 🇪🇺",
      review: "Planned a 10-day trip to Switzerland and Paris. Exceptional service from Mathura, handling visa documentation, train passes, and hotels flawlessly.",
    },
  ];

  return (
    <section className="relative w-full bg-[#080C14] overflow-hidden select-none">

      {/* PART 1: Stats Bar */}
      <div className="relative w-full py-16 px-6 bg-gradient-to-r from-[#0A1628] via-[#080C14] to-[#0D2A24] bg-[length:200%_200%] animate-gradient-loop border-y border-white/5">

        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              count={stat.count}
              label={stat.label}
              countRef={stat.ref}
            />
          ))}
        </div>

        {/* Global style declaration for the 8s loop bg & marquee linear easing */}
        <style jsx global>{`
          @keyframes gradient-loop {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-loop {
            animation: gradient-loop 8s ease infinite;
          }
          .testimonials-swiper .swiper-wrapper {
            transition-timing-function: linear !important;
          }
        `}</style>
      </div>

      {/* PART 2: Testimonials */}
      <div className="py-24 w-full overflow-hidden">
        {/* Title (Centered in content grid container) */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-16 flex flex-col items-center gap-2">
          <h2 className="font-display text-4xl md:text-[48px] font-normal text-white">
            Voices of Trust
          </h2>
          {/* 5 gold stars */}
          <div className="flex items-center gap-1.5 text-lg text-[#D4A017] select-none mt-1">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>

        {/* Carousel Slider (Full-Width edge-to-edge viewport container) */}
        <div className="w-full px-4 md:px-12">
          {mounted ? (
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={6000}
              watchSlidesProgress={true}
              slidesPerView={1.2}
              spaceBetween={20}
              grabCursor={true}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2.4,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 4.2,
                  spaceBetween: 30,
                },
              }}
              className="!overflow-visible testimonials-swiper"
            >
              {testimonials.map((t, idx) => (
                <SwiperSlide key={idx} className="h-auto">
                  <GlassCard
                    hover={true}
                    className="p-6 bg-[#080C14]/40 border border-white/8 hover:border-[#D4A017]/35 rounded-[16px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(212,160,23,0.15)] flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Header row: initials avatar + name & dest tag */}
                      <div className="flex items-center justify-between gap-3 mb-4 border-b border-white/5 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white bg-gradient-to-br from-[#D4A017] to-[#F0C040] shadow-md shadow-[#D4A017]/10 shrink-0">
                            {t.initial}
                          </div>
                          <div>
                            <h4 className="font-sans text-xs md:text-sm font-bold text-white leading-tight">
                              {t.name}
                            </h4>
                            <span className="text-[9px] text-white/40 font-mono tracking-widest block uppercase mt-0.5 font-semibold">
                              JustDial Reviewer
                            </span>
                          </div>
                        </div>

                        <span className="glass px-2.5 py-1 rounded-full border border-[#D4A017]/30 text-[#D4A017] font-mono text-[9px] tracking-wider uppercase bg-[#D4A017]/5 font-semibold select-none">
                          {t.destination}
                        </span>
                      </div>

                      {/* Stars */}
                      <div className="flex items-center gap-1 text-[#D4A017] text-[10px] mb-3 select-none">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                      </div>

                      {/* Testimonial Quote */}
                      <p className="font-sans text-[13px] md:text-[14px] text-white/80 leading-[1.6] italic mb-3">
                        &ldquo;{t.review}&rdquo;
                      </p>
                    </div>

                    {/* Verified Trust Badge at card base */}
                    <div className="pt-2 flex items-center gap-1.5 text-[9px] text-emerald-400 font-mono tracking-wider uppercase font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                      Verified Booking
                    </div>
                  </GlassCard>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            // SSR Fallback grid layout (centered inside page bounds)
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((t, idx) => (
                <GlassCard
                  key={idx}
                  hover={false}
                  className="p-6 bg-[#080C14]/40 border border-white/8 rounded-[16px] flex flex-col justify-between min-h-[220px]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4 border-b border-white/5 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white bg-gradient-to-br from-[#D4A017] to-[#F0C040] shrink-0">
                          {t.initial}
                        </div>
                        <div>
                          <h4 className="font-sans text-xs md:text-sm font-bold text-white leading-tight">
                            {t.name}
                          </h4>
                          <span className="text-[9px] text-white/40 font-mono block uppercase mt-0.5">
                            JustDial Reviewer
                          </span>
                        </div>
                      </div>
                      <span className="glass px-2.5 py-1 rounded-full border border-[#D4A017]/30 text-[#D4A017] font-mono text-[9px] uppercase bg-[#D4A017]/5 font-semibold">
                        {t.destination}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[#D4A017] text-[10px] mb-3">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                    <p className="font-sans text-[13px] md:text-[14px] text-white/80 leading-[1.6] italic mb-3">
                      &ldquo;{t.review}&rdquo;
                    </p>
                  </div>
                  <div className="pt-2 flex items-center gap-1.5 text-[9px] text-emerald-400 font-mono uppercase font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Verified Booking
                  </div>
                </GlassCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
