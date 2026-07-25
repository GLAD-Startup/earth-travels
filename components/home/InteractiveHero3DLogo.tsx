"use client";

import React from "react";
import Image from "next/image";

export default function InteractiveHero3DLogo() {
  return (
    <div className="hero-subtext relative w-full flex items-center justify-center py-2 select-none">
      <div className="relative flex flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6 px-8 py-3.5 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-full">
        {/* Frosted Glass Backdrop */}
        <div className="absolute inset-0 rounded-full backdrop-blur-xl bg-[#1a120a]/40 border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.5)] pointer-events-none" />

        {/* Logo Icon */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 shrink-0 z-10">
          <Image
            src="/images/logo_transparent.png"
            alt="Earth Travels Logo"
            fill
            sizes="(max-width: 768px) 80px, 96px"
            className="object-contain filter drop-shadow-[0_10px_25px_rgba(26,175,242,0.65)]"
            priority
          />
        </div>

        {/* Brand Name */}
        <div className="flex items-center z-10">
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-white leading-none"
            style={{
              textShadow:
                "0 2px 20px rgba(255,255,255,0.15), 0 8px 20px rgba(0, 0, 0, 0.8)",
            }}
          >
            Earth Travels India
          </h2>
        </div>
      </div>
    </div>
  );
}
