"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui";
import { Destination } from "@/lib/data/destinations";

interface DestinationGridProps {
  destinations: Destination[];
}

export default function DestinationGrid({ destinations }: DestinationGridProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {Array.from({ length: destinations.length || 3 }).map((_, idx) => (
          <div
            key={idx}
            className="w-full h-[400px] rounded-[20px] bg-white/5 border border-white/10 animate-pulse flex items-center justify-center"
          >
            <div className="text-[#D4A017] font-mono text-xs tracking-widest uppercase">
              Loading spot...
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {destinations.map((dest) => (
        <GlassCard
          key={dest.id}
          hover={true}
          className="p-0 overflow-hidden bg-[#080C14]/40 border border-white/10 hover:border-[#D4A017]/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(212,160,23,0.3)] rounded-[20px] flex flex-col justify-between group"
        >
          {/* Top Half: Image Container */}
          <div className="relative h-[240px] w-full overflow-hidden rounded-t-[20px]">
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106 select-none"
            />
            {/* Region badge */}
            <span className="absolute top-4 left-4 z-10 glass px-3.5 py-1.5 rounded-full border border-white/12 text-white/90 font-mono text-[10px] tracking-wider uppercase bg-[#080C14]/60">
              {dest.region.replace("-", " ")}
            </span>
          </div>

          {/* Bottom Half: Content */}
          <div className="p-5 flex-grow flex flex-col justify-between">
            <div className="mb-5">
              <h3 className="font-display text-2xl font-bold text-white mb-2 leading-none group-hover:text-[#D4A017] transition-colors">
                {dest.name}
              </h3>
              <p className="font-sans text-sm text-white/60 leading-relaxed italic line-clamp-2 mb-3">
                {dest.tagline}
              </p>
              <span className="font-mono text-xs text-[#D4A017] font-semibold tracking-wider block">
                {dest.season}
              </span>
            </div>

            {/* Price & Package counts row */}
            <div className="pt-4 border-t border-white/5 flex flex-col gap-4 mt-auto">
              <div className="flex items-center justify-between text-xs">
                <span className="font-sans text-white/50">
                  📁 {dest.packageCount} {dest.packageCount === 1 ? "package" : "packages"}
                </span>
                <span className="font-mono text-[#D4A017] font-bold">
                  From ₹{dest.startingPrice.toLocaleString("en-IN")}
                </span>
              </div>
              <Link
                href={`/packages?destination=${dest.name.toLowerCase()}`}
                className="self-start text-[#D4A017] font-sans text-xs font-semibold hover:underline flex items-center gap-1 group/btn"
              >
                View Packages{" "}
                <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
