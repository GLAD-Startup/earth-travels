"use client";

import React, { useState, useRef, useEffect } from "react";
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

function useClickOutside(ref: React.RefObject<HTMLElement>, handler: () => void) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

interface CustomDropdownProps {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (val: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  return (
    <div className="flex-1 flex flex-col gap-1 md:px-6 relative" ref={dropdownRef}>
      <label className="font-mono text-[9px] text-charcoal/40 uppercase tracking-widest pl-1">
        {label}
      </label>
      <div
        className="relative cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-full bg-transparent text-charcoal font-display text-base md:text-lg pr-6 py-1 h-[32px] flex items-center justify-between group-hover:text-accent transition-colors">
          <span className="truncate">{selectedOption.label}</span>
          <span className={`text-[10px] text-charcoal/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-0 md:left-6 right-0 md:right-6 mt-4 bg-surface/95 backdrop-blur-xl border border-charcoal/10 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 origin-top z-50 ${
          isOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <div className="max-h-[240px] overflow-y-auto custom-scrollbar p-2 flex flex-col gap-1">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-sans transition-colors ${
                opt.value === value
                  ? "bg-accent text-white font-medium"
                  : "text-charcoal hover:bg-charcoal/5"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

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
        className="w-full bg-surface/95 backdrop-blur-[20px] border border-charcoal/8 rounded-3xl md:rounded-full p-6 md:p-4 shadow-soft flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-2 relative"
      >
        <CustomDropdown
          label="Where to?"
          options={DESTINATIONS}
          value={destination}
          onChange={setDestination}
        />

        {/* Divider (Desktop Only) */}
        <div className="hidden md:block w-[1px] h-10 bg-charcoal/10" />

        <CustomDropdown
          label="Experience Type"
          options={TRAVEL_STYLES}
          value={style}
          onChange={setStyle}
        />

        {/* Divider (Desktop Only) */}
        <div className="hidden md:block w-[1px] h-10 bg-charcoal/10" />

        <CustomDropdown
          label="When?"
          options={MONTHS}
          value={month}
          onChange={setMonth}
        />

        {/* Search Action Button */}
        <button
          type="submit"
          className="bg-charcoal hover:bg-accent text-white font-sans text-xs md:text-sm font-semibold tracking-wider uppercase rounded-full px-8 py-4 md:py-3.5 transition-all duration-300 md:ml-2 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent/30 flex-shrink-0"
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
