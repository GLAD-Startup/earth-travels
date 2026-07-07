"use client";

import React from "react";
import Link from "next/link";
import {
  HeroSection,
  DestShowcase,
  PackageSlider,
  SocialProof,
  FounderSection,
  WhyEarthTravels,
} from "@/components/home";
import { RevealWrapper } from "@/components/ui";

export default function Home() {
  return (
    <div className="bg-[#fdf8f2] w-full min-h-screen text-[#1a120a] overflow-x-hidden">
      <title>Earth Travels — Crafting Journeys From Mathura to the World</title>
      <meta name="description" content="Premium tour agency in Mathura, UP. 4.7★ rated. Kashmir, Maldives, Dubai, Europe & more. Custom packages, visa support, call 89418 81111." />
      
      {/* 1. Hero — Emotional Hook */}
      <HeroSection />

      {/* 2. Search bar overlap space */}
      <div className="pt-28" />

      {/* 3. Trust Bar Marquee */}
      <RevealWrapper delay={0}>
        <div className="relative w-full overflow-hidden bg-[#fdf8f2] py-6 border-y border-[#1a120a]/5 select-none z-10">
          <div className="flex w-max items-center animate-marquee whitespace-nowrap font-mono text-[12px] text-[#1a120a]/40 uppercase tracking-[0.15em]">
            <div className="flex items-center gap-12 mx-12">
              <span>127+ Happy Travellers</span>
              <span className="text-[#c4900f]">★</span>
              <span>50+ Destinations</span>
              <span className="text-[#c4900f]">★</span>
              <span>10+ Years of Trust</span>
              <span className="text-[#c4900f]">★</span>
              <span>4.7★ Rated</span>
              <span className="text-[#c4900f]">★</span>
              <span>Visa Assistance Included</span>
            </div>
            <div className="flex items-center gap-12 mx-12">
              <span>127+ Happy Travellers</span>
              <span className="text-[#c4900f]">★</span>
              <span>50+ Destinations</span>
              <span className="text-[#c4900f]">★</span>
              <span>10+ Years of Trust</span>
              <span className="text-[#c4900f]">★</span>
              <span>4.7★ Rated</span>
              <span className="text-[#c4900f]">★</span>
              <span>Visa Assistance Included</span>
            </div>
          </div>
        </div>
      </RevealWrapper>

      {/* 4. Why Earth Travels — Value Proposition */}
      <RevealWrapper delay={0}>
        <WhyEarthTravels />
      </RevealWrapper>

      {/* 5. Destinations Showcase */}
      <RevealWrapper delay={0.1}>
        <DestShowcase />
      </RevealWrapper>

      {/* 6. Packages Slider */}
      <RevealWrapper delay={0}>
        <PackageSlider />
      </RevealWrapper>

      {/* 7. Founder & Awards Section */}
      <RevealWrapper delay={0.1}>
        <FounderSection />
      </RevealWrapper>

      {/* 8. Social Proof Reviews */}
      <RevealWrapper delay={0.1}>
        <SocialProof />
      </RevealWrapper>

      {/* 9. Final CTA Banner (lightweight — no canvas particles) */}
      <section className="relative w-full py-24 px-6 overflow-hidden text-center flex items-center justify-center border-t border-[#1a120a]/5">
        
        {/* Warm gradient background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(135deg, #1a120a 0%, #2a1e14 50%, #1a120a 100%)",
          }}
        />

        {/* Subtle warm glow */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-30"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(196,144,15,0.2) 0%, transparent 60%)",
          }}
        />

        {/* Content */}
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center gap-6">
          <span className="font-mono text-xs text-[#e8a820] uppercase tracking-[0.25em] block mb-1">
            Start Planning
          </span>

          <h2 className="font-display text-3xl md:text-[52px] font-normal leading-tight text-white max-w-2xl select-none">
            Your Dream Journey Starts With <br className="hidden sm:inline" />
            <span className="text-[#e8a820] italic">One Message</span>
          </h2>

          <p className="font-sans text-sm md:text-base text-white/60 max-w-lg mx-auto">
            We respond within 2 hours. No advance payment to get a quote.
          </p>

          <a
            href="https://wa.me/918941881111"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-2xl md:text-[32px] font-bold text-[#e8a820] hover:text-[#f0c040] transition-colors select-all mt-2 block"
          >
            💬 89418 81111
          </a>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <a
              href="https://wa.me/918941881111"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto font-sans text-xs font-semibold px-8 py-3.5 rounded-full text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 backdrop-blur-md transition-all duration-300 hover:scale-103 shadow-lg"
            >
              WhatsApp Now
            </a>
            <Link
              href="/quote"
              className="w-full sm:w-auto font-sans text-xs font-bold px-8 py-3.5 text-white rounded-full hover:shadow-[0_0_15px_rgba(196,144,15,0.3)] transition-all duration-300 hover:scale-103 block text-center"
              style={{ background: "linear-gradient(135deg, #c4900f 0%, #e8a820 100%)" }}
            >
              Request Free Itinerary
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
