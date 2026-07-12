"use client";

import React from "react";
import {
  HeroSection,
  DestShowcase,
  PackageSlider,
  SocialProof,
  FounderSection,
  WhyEarthTravels,
  ClosingCTABanner,
  FlightExperience,
  TripFinder,
  PartnerCarousel,
} from "@/components/home";
import { RevealWrapper } from "@/components/ui";

export default function Home() {
  return (
    <div className="bg-[#fdf8f2] w-full min-h-screen text-[#1a120a] overflow-x-hidden">
      <title>Earth Travels — Crafting Journeys From Mathura to the World</title>
      <meta name="description" content="Premium tour agency in Mathura, UP. 4.7★ rated. Kashmir, Maldives, Dubai, Europe & more. Custom packages, visa support, call 89418 81111." />
      
      {/* Global Scroll Flight Experience Overlay */}
      <FlightExperience />
      
      {/* 1. Hero — Emotional Hook */}
      <HeroSection />

      {/* 2. Search bar overlap space */}
      <TripFinder />
      <div className="pt-16" />

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

      {/* 4.5 Partner Carousel — credibility strip */}
      <RevealWrapper delay={0}>
        <PartnerCarousel />
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

      {/* 9. Final CTA Banner */}
      <ClosingCTABanner />
    </div>
  );
}
