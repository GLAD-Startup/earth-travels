"use client";

import React from "react";
import { RevealWrapper } from "@/components/ui";

const VALUE_PROPS = [
  {
    num: "01",
    title: "Personally Curated",
    description:
      "Every itinerary is hand-crafted by our founders. No templates, no generic packages. Just bespoke journeys designed meticulously around your family's unique rhythm and desires.",
  },
  {
    num: "02",
    title: "Unwavering Support",
    description:
      "From your first inquiry to your return flight, you have a dedicated travel designer available. True luxury means knowing someone is handling the details, 24/7.",
  },
  {
    num: "03",
    title: "Absolute Transparency",
    description:
      "What we quote is the final word. Visa fees, private transfers, and luxury taxes — every detail is laid out upfront. No surprises, only peace of mind.",
  },
];

export default function WhyEarthTravels() {
  return (
    <section className="relative w-full bg-[#fdf8f2] pt-32 pb-40 overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column: Huge Sticky Title */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-40 flex flex-col items-start">
              <span className="font-mono text-[10px] text-[#c4900f] uppercase tracking-[0.3em] font-semibold block mb-6">
                The Earth Travels Standard
              </span>
              <h2 className="font-display text-5xl md:text-7xl lg:text-[90px] font-normal text-[#1a120a] leading-[0.9] tracking-[-0.02em] mb-8">
                Not Just<br />
                <span className="italic text-[#c4900f]">Another</span><br />
                Agency.
              </h2>
              <div className="w-16 h-[1px] bg-[#1a120a]/20" />
            </div>
          </div>

          {/* Right Column: Editorial List */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-24 lg:pt-32">
            {VALUE_PROPS.map((prop, idx) => (
              <RevealWrapper key={idx} delay={idx * 0.1}>
                <div className="group relative flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                  
                  {/* Huge Number */}
                  <div className="font-display text-7xl md:text-[100px] leading-none text-[#1a120a]/5 font-light -mt-4 transition-colors duration-700 group-hover:text-[#c4900f]/20">
                    {prop.num}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-4 max-w-sm mt-2 md:mt-6 relative z-10">
                    <h3 className="font-display text-2xl md:text-3xl font-normal text-[#1a120a]">
                      {prop.title}
                    </h3>
                    <p className="font-sans text-[15px] text-[#1a120a]/60 leading-[1.8] font-light">
                      {prop.description}
                    </p>
                  </div>

                </div>
              </RevealWrapper>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
