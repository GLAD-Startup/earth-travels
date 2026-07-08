"use client";

import React from "react";
import { GlassCard, RevealWrapper } from "@/components/ui";

const STEPS = [
  {
    number: "01",
    icon: "🗺️",
    title: "Tell Us Your Dream",
    description: "Describe where you want to go, your travel style, and special requests in our custom planner.",
  },
  {
    number: "02",
    icon: "✨",
    title: "We Craft Your Journey",
    description: "Our Mathura-based travel experts create a bespoke, private itinerary for you within 24 hours.",
  },
  {
    number: "03",
    icon: "✈️",
    title: "Travel, We Handle Rest",
    description: "From documents and visas to 24/7 on-trip assistance, we ensure your journey is seamless.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 bg-background border-t border-charcoal/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-[120px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <RevealWrapper delay={0.1}>
            <span className="font-mono text-xs text-[#D4A017] uppercase tracking-[0.2em] block mb-2">
              Seamless Planning
            </span>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <h2 className="font-display text-4xl md:text-5xl font-normal text-charcoal">
              Bespoke Journeys Made Easy
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.3}>
            <p className="text-sm text-charcoal/60 mt-4 leading-relaxed">
              We handle every details of your vacation from Mathura so you can simply step onto the flight.
            </p>
          </RevealWrapper>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div className="absolute top-[80px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-[#D4A017]/20 hidden md:block z-0" />

          {STEPS.map((step, idx) => (
            <RevealWrapper key={idx} delay={0.15 * (idx + 1)} className="relative z-10">
              <GlassCard hover={true} className="p-8 h-full bg-background/40 border border-charcoal/5 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute -inset-2 rounded-full border border-[#D4A017]/20 animate-pulse" />
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#D4A017] to-[#F0C040] text-[#080C14] font-mono text-lg font-bold flex items-center justify-center shadow-lg shadow-[#D4A017]/20">
                    {step.number}
                  </div>
                </div>

                <span className="text-3xl mb-4 block select-none">{step.icon}</span>

                <h3 className="font-display font-sans text-xl font-bold text-charcoal mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-charcoal/70 leading-relaxed font-sans max-w-xs">
                  {step.description}
                </p>
              </GlassCard>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
