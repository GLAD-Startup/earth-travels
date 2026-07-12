"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { DESTINATIONS as DESTINATIONS_DATA } from "@/lib/data/destinations";

const DESTINATIONS = [
  { value: "all", label: "All Destinations" },
  ...DESTINATIONS_DATA.map((d) => ({ value: d.id, label: d.name })),
];

const TRAVEL_STYLES = [
  { value: "all", label: "Any Experience" },
  { value: "honeymoon", label: "Romantic Retreat" },
  { value: "family", label: "Family Expedition" },
  { value: "luxury", label: "Ultra Luxury" },
];

const MONTHS = [
  { value: "any", label: "Any Month" },
  { value: "july", label: "July" },
  { value: "august", label: "August" },
  { value: "september", label: "September" },
  { value: "october", label: "October" },
  { value: "november", label: "November" },
  { value: "december", label: "December" },
  { value: "january", label: "January" },
];

export default function TripFinder() {
  const router = useRouter();
  const [destination, setDestination] = useState("all");
  const [style, setStyle] = useState("all");
  const [month, setMonth] = useState("any");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct query parameters
    const params = new URLSearchParams();
    if (destination !== "all") params.append("destination", destination);
    if (style !== "all") params.append("style", style);
    if (month !== "any") params.append("month", month);

    router.push(`/packages?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 relative z-30 -mt-16 md:-mt-20">
      <form
        onSubmit={handleSearch}
        className="w-full bg-[#fdf8f2]/95 backdrop-blur-[20px] border border-[#1a120a]/8 rounded-2xl md:rounded-full p-6 md:p-4 shadow-[0_12px_40px_rgba(26,18,10,0.08)] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-2"
      >
        {/* Destination Dropdown */}
        <div className="flex-1 flex flex-col gap-1 md:px-6">
          <label className="font-mono text-[9px] text-[#1a120a]/40 uppercase tracking-widest pl-1">
            Where to?
          </label>
          <div className="relative">
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-transparent text-[#1a120a] font-display text-base md:text-lg focus:outline-none appearance-none cursor-pointer pr-6 py-1 h-[32px] border-none focus:ring-0"
            >
              {DESTINATIONS.map((dest) => (
                <option key={dest.value} value={dest.value} className="bg-[#fdf8f2] text-sm font-sans">
                  {dest.label}
                </option>
              ))}
            </select>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#1a120a]/40 text-xs">
              ▼
            </span>
          </div>
        </div>

        {/* Divider (Desktop Only) */}
        <div className="hidden md:block w-[1px] h-10 bg-[#1a120a]/10" />

        {/* Travel Style Dropdown */}
        <div className="flex-1 flex flex-col gap-1 md:px-6">
          <label className="font-mono text-[9px] text-[#1a120a]/40 uppercase tracking-widest pl-1">
            Experience Type
          </label>
          <div className="relative">
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full bg-transparent text-[#1a120a] font-display text-base md:text-lg focus:outline-none appearance-none cursor-pointer pr-6 py-1 h-[32px] border-none focus:ring-0"
            >
              {TRAVEL_STYLES.map((t) => (
                <option key={t.value} value={t.value} className="bg-[#fdf8f2] text-sm font-sans">
                  {t.label}
                </option>
              ))}
            </select>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#1a120a]/40 text-xs">
              ▼
            </span>
          </div>
        </div>

        {/* Divider (Desktop Only) */}
        <div className="hidden md:block w-[1px] h-10 bg-[#1a120a]/10" />

        {/* Month Dropdown */}
        <div className="flex-1 flex flex-col gap-1 md:px-6">
          <label className="font-mono text-[9px] text-[#1a120a]/40 uppercase tracking-widest pl-1">
            When?
          </label>
          <div className="relative">
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-full bg-transparent text-[#1a120a] font-display text-base md:text-lg focus:outline-none appearance-none cursor-pointer pr-6 py-1 h-[32px] border-none focus:ring-0"
            >
              {MONTHS.map((m) => (
                <option key={m.value} value={m.value} className="bg-[#fdf8f2] text-sm font-sans">
                  {m.label}
                </option>
              ))}
            </select>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#1a120a]/40 text-xs">
              ▼
            </span>
          </div>
        </div>

        {/* Search Action Button */}
        <button
          type="submit"
          className="bg-[#1a120a] hover:bg-[#e8a820] text-white hover:text-white font-sans text-xs md:text-sm font-semibold tracking-wider uppercase rounded-full md:rounded-full px-8 py-4 md:py-3.5 transition-all duration-300 md:ml-2 flex items-center justify-center gap-2 hover:scale-[1.03]"
        >
          <span>Find Journeys</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
