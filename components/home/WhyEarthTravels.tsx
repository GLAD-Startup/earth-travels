"use client";

import React from "react";
import { RevealWrapper } from "@/components/ui";

const VALUE_PROPS = [
  {
    num: "01",
    title: "Personally Crafted",
    description:
      "Every itinerary is hand-crafted by our founders — bespoke journeys designed around your family's unique rhythm and desires.",
  },
  {
    num: "02",
    title: "Meaningful Support",
    description:
      "Dedicated travel designers available 24/7 from your first inquiry to your return flight, handling every detail with care.",
  },
  {
    num: "03",
    title: "Authentic Experiences",
    description:
      "Transparent pricing with zero hidden fees. Pure, seamless travel experiences crafted for lasting memories.",
  },
];

export default function WhyEarthTravels() {
  return (
    <section className="relative w-full bg-[#fdf8f2] py-12 md:py-16 lg:py-20 overflow-hidden select-none border-b border-[#1a120a]/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Compact Heading */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-mono text-[10px] md:text-xs text-[#c4900f] uppercase tracking-[0.3em] font-semibold block mb-3">
              The Earth Travels India Standard
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1a120a] leading-[1.05] tracking-[-0.02em] mb-4">
              Not Just<br />
              <span className="italic text-[#c4900f]">Another</span><br />
              Agency.
            </h2>
            <div className="w-12 h-[1px] bg-[#1a120a]/20 mt-2" />
          </div>

          {/* Right Column: Compact Editorial List */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
            {VALUE_PROPS.map((prop, idx) => (
              <RevealWrapper key={idx} delay={idx * 0.1}>
                <div className="group relative flex flex-row items-start gap-4 md:gap-6 pb-6 border-b border-[#1a120a]/10 last:border-b-0 last:pb-0">
                  {/* Number */}
                  <div className="font-display text-4xl md:text-5xl leading-none text-[#1a120a]/15 font-light shrink-0 w-10 md:w-14 transition-colors duration-500 group-hover:text-[#c4900f]">
                    {prop.num}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1.5 pt-0.5">
                    <h3 className="font-display text-xl md:text-2xl font-normal text-[#1a120a]">
                      {prop.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm md:text-[15px] text-[#1a120a]/70 leading-relaxed font-light">
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
