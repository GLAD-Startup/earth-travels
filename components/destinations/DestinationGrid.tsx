"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Destination } from "@/lib/data/destinations";

interface DestinationGridProps {
  destinations: Destination[];
}

/* Skeleton shimmer card */
function SkeletonCard() {
  return (
    <div className="w-full rounded-2xl border border-charcoal/8 bg-surface overflow-hidden">
      {/* Image placeholder */}
      <div className="h-[220px] bg-charcoal/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
      </div>
      {/* Text placeholders */}
      <div className="p-5 flex flex-col gap-3">
        <div className="h-5 w-2/3 bg-charcoal/5 rounded-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
        </div>
        <div className="h-3 w-full bg-charcoal/5 rounded-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
        </div>
        <div className="h-3 w-1/2 bg-charcoal/5 rounded-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
        </div>
        <div className="pt-3 border-t border-charcoal/5 flex justify-between">
          <div className="h-3 w-20 bg-charcoal/5 rounded-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
          </div>
          <div className="h-3 w-16 bg-charcoal/5 rounded-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
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
        {Array.from({ length: Math.min(destinations.length || 3, 6) }).map((_, idx) => (
          <SkeletonCard key={idx} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {destinations.map((dest) => (
        <div
          key={dest.id}
          className="bg-surface border border-charcoal/8 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-accent/20 group flex flex-col"
        >
          {/* Image */}
          <div className="relative h-[220px] w-full overflow-hidden">
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
            />
            {/* Region badge */}
            <span className="absolute top-3.5 left-3.5 z-10 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-sm text-white font-sans text-[10px] font-semibold tracking-wider uppercase">
              {dest.region.replace("-", " ")}
            </span>
          </div>

          {/* Content */}
          <div className="p-5 flex-grow flex flex-col justify-between">
            <div className="mb-4">
              <h3 className="font-display text-xl font-bold text-charcoal mb-1.5 leading-none group-hover:text-accent transition-colors">
                {dest.name}
              </h3>
              <p className="font-sans text-sm text-charcoal/55 leading-relaxed italic line-clamp-2 mb-2">
                {dest.tagline}
              </p>
              <span className="font-sans text-[11px] text-accent font-semibold tracking-wider uppercase">
                {dest.season}
              </span>
            </div>

            {/* Price & Package row */}
            <div className="pt-4 border-t border-charcoal/5 flex flex-col gap-3 mt-auto">
              <div className="flex items-center justify-between text-xs">
                <span className="font-sans text-charcoal/45 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                  </svg>
                  {dest.packageCount} {dest.packageCount === 1 ? "package" : "packages"}
                </span>
                <span className="font-sans text-accent font-bold">
                  From ₹{dest.startingPrice.toLocaleString("en-IN")}
                </span>
              </div>
              <Link
                href={`/packages?destination=${dest.name.toLowerCase()}`}
                className="self-start text-accent font-sans text-xs font-semibold hover:underline flex items-center gap-1 group/btn"
              >
                View Packages{" "}
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
