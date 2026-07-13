"use client";

import React from "react";
import Image from "next/image";
import { RevealWrapper } from "@/components/ui";

const STORY_MOMENTS = [
  {
    src: "/images/founder/nitesh-maldives-worlds-leading-destination.png",
    alt: "Nitesh Khandelwal at the Maldives 'World's Leading Destination 2020, 2021 & 2022' sign — personally scouting resort experiences",
    caption: "Maldives — Personally Vetted",
    label: "Destination Scouting",
    description:
      "Before recommending any resort, Nitesh visits it himself. Every Maldives package Earth Travels offers has been lived, tasted, and approved first-hand.",
    span: "col-span-1 md:col-span-2",
  },
  {
    src: "/images/founder/nitesh-chedi-sharjah-scouting.png",
    alt: "Nitesh Khandelwal at The Chedi Al Bait, Sharjah UAE — inspecting the property for Earth Travels client stays",
    caption: "The Chedi Al Bait, Sharjah",
    label: "UAE Property Inspection",
    description:
      "Hands-on hotel reviews across the UAE — so your family only stays where our founder has already stayed.",
    span: "col-span-1",
  },
  {
    src: "/images/founder/nitesh-clients-leh-group.png",
    alt: "Nitesh Khandelwal with a group of Earth Travels clients at the Leh transit camp waiting lounge — group tour management",
    caption: "Leh-Ladakh Group Tour",
    label: "Client Trips",
    description:
      "Real families, real journeys. A group departing from Leh — every logistics detail handled by Earth Travels from door to destination.",
    span: "col-span-1",
  },
  {
    src: "/images/founder/earth-travels-vietnam-basket-boats.png",
    alt: "Earth Travels clients on traditional basket boats in Hoi An, Vietnam — Long Phi Eco Tour experience",
    caption: "Vietnam — Hoi An Eco Tour",
    label: "International Group Tours",
    description:
      "From Mathura to Hoi An — Earth Travels curates authentic local experiences that go beyond typical tourist itineraries.",
    span: "col-span-1 md:col-span-2",
  },
];

export default function BehindEarthTravels() {
  return (
    <section className="relative w-full bg-[#fdf8f2] pt-24 pb-32 overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        {/* Section Header */}
        <RevealWrapper delay={0}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="font-mono text-[10px] text-[#c4900f] uppercase tracking-[0.3em] font-semibold block mb-4">
                Behind Earth Travels
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-normal text-[#1a120a] leading-[1.05] tracking-[-0.02em]">
                The Work Behind<br />
                <span className="italic text-[#c4900f]">Every Journey</span>
              </h2>
            </div>
            <p className="font-sans text-sm md:text-base text-[#1a120a]/55 max-w-sm leading-[1.8] font-light md:text-right">
              We don&apos;t sell destinations we&apos;ve only seen on a brochure. 
              Nitesh personally researches, inspects, and experiences every property 
              and route before recommending it to your family.
            </p>
          </div>
        </RevealWrapper>

        {/* Story Grid — fixed row heights so all cells in a row are the same height with no gaps */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[380px_320px] gap-4 md:gap-6">
          {STORY_MOMENTS.map((moment, idx) => (
            <RevealWrapper key={idx} delay={idx * 0.08} className={`h-full ${moment.span}`}>
              <div className="group relative overflow-hidden rounded-2xl bg-[#1a120a]/5 h-full min-h-[240px]">
                {/* Image — fills full card height, no aspect-ratio constraint */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={moment.src}
                    alt={moment.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    quality={85}
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a120a]/75 via-[#1a120a]/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Label pill */}
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/90 bg-[#c4900f]/80 backdrop-blur-sm px-3 py-1 rounded-full font-semibold">
                      {moment.label}
                    </span>
                  </div>

                  {/* Caption & description */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-mono text-[9px] text-[#e8a820] uppercase tracking-[0.2em] mb-1 font-semibold">
                      {moment.caption}
                    </p>
                    <p className="font-sans text-xs md:text-sm text-white/80 leading-[1.6] font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-sm">
                      {moment.description}
                    </p>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Bottom narrative line */}
        <RevealWrapper delay={0.3}>
          <div className="mt-16 pt-10 border-t border-[#1a120a]/8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {/* Inline portrait */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#c4900f]/30 shrink-0">
                <Image
                  src="/images/founder/nitesh-maldives-sunset-portrait.png"
                  alt="Nitesh Khandelwal, founder of Earth Travels"
                  fill
                  sizes="48px"
                  className="object-cover"
                  style={{ objectPosition: "40% 70%" }}
                  quality={80}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-[#1a120a]">Nitesh Khandelwal</p>
                <p className="font-mono text-[9px] text-[#1a120a]/40 uppercase tracking-widest">Founder, Earth Travels · Mathura</p>
              </div>
            </div>
            <p className="font-display text-base md:text-lg italic text-[#1a120a]/60 max-w-md text-center md:text-right leading-relaxed">
              &ldquo;I visit every resort I recommend. Your family deserves nothing less than my personal guarantee.&rdquo;
            </p>
          </div>
        </RevealWrapper>

      </div>
    </section>
  );
}
