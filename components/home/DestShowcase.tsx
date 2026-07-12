"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DESTINATIONS } from "@/lib/data/destinations";

export default function DestShowcase() {
  // Take top 5 for the bento grid
  const showcaseDestinations = DESTINATIONS.slice(0, 5);

  const getGridClasses = (index: number) => {
    switch (index) {
      case 0:
        return "md:col-span-8 md:row-span-2 h-[400px] md:h-auto"; // Large Feature
      case 1:
        return "md:col-span-4 md:row-span-1 h-[300px] md:h-auto"; // Small Square Top Right
      case 2:
        return "md:col-span-4 md:row-span-1 h-[300px] md:h-auto"; // Small Square Bottom Right
      case 3:
        return "md:col-span-5 md:row-span-1 h-[400px] md:h-auto"; // Tall bottom left
      case 4:
        return "md:col-span-7 md:row-span-1 h-[350px] md:h-auto"; // Wide bottom right
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <section className="relative w-full bg-[#fdf8f2] py-32 overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] text-[#c4900f] uppercase tracking-[0.3em] font-semibold block mb-4">
              The Collection
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-normal text-[#1a120a] leading-[1.1] tracking-[-0.02em]">
              Signature Escapes
            </h2>
          </div>
          <Link
            href="/destinations"
            className="group relative inline-flex items-center text-[#1a120a] text-xs font-mono tracking-[0.2em] uppercase font-semibold pb-1"
          >
            <span className="relative z-10">Explore All Destinations</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1a120a] transform scale-x-100 origin-left transition-transform duration-500 group-hover:scale-x-0" />
          </Link>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-3 gap-4 md:gap-6 md:h-[900px]">
          {showcaseDestinations.map((dest, idx) => (
            <div
              key={dest.id}
              className={`relative overflow-hidden group rounded-xl border border-[#1a120a]/8 hover:border-[#e8a820]/45 hover:shadow-[0_12px_45px_rgba(232,168,32,0.18)] transition-all duration-700 ${getGridClasses(idx)}`}
            >
              {/* Floating Glassmorphic Season Badge */}
              <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full border border-white/10 text-[9px] font-mono font-bold tracking-widest text-[#e8a820] uppercase bg-[#1a120a]/60 backdrop-blur-md transition-all duration-500 group-hover:bg-[#e8a820] group-hover:text-[#1a120a] group-hover:border-transparent select-none">
                {dest.season}
              </div>

              {/* Image */}
              <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#1a120a]">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-90 transition-transform duration-[1.8s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.08]"
                  quality={85}
                />
              </div>

              {/* Gradient overlay - appears on hover for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a120a]/90 via-[#1a120a]/35 to-transparent opacity-50 transition-opacity duration-700 group-hover:opacity-90 z-10 pointer-events-none" />

              {/* Default State Content (Name only, elegant) - Hidden on mobile, visible on desktop until hover */}
              <div className="hidden lg:flex absolute inset-0 p-8 md:p-10 z-20 flex-col justify-end transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                <h3 className="font-display text-4xl text-white font-normal drop-shadow-lg">
                  {dest.name}
                </h3>
              </div>

              {/* Hover State Content (Details reveal) - Always visible on mobile, reveal on hover on desktop */}
              <div className="absolute inset-0 p-6 md:p-10 z-30 flex flex-col justify-end opacity-100 lg:opacity-0 lg:translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                <div className="flex flex-col items-start gap-2 md:gap-3">
                  <span className="font-mono text-[10px] text-[#e8a820] uppercase tracking-[0.2em] font-semibold">
                    {dest.packageCount} Collections
                  </span>
                  <h3 className="font-display text-4xl md:text-5xl text-white font-normal italic leading-none">
                    {dest.name}
                  </h3>
                  <p className="font-sans text-sm text-white/80 max-w-sm font-light leading-relaxed mt-2 line-clamp-2">
                    {dest.tagline}
                  </p>
                  
                  <Link
                    href={`/packages?destination=${dest.name.toLowerCase()}`}
                    className="mt-6 inline-block bg-white text-[#1a120a] text-[11px] font-sans font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-[#e8a820] hover:text-white transition-colors duration-300 shadow-md"
                  >
                    View Itineraries
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
