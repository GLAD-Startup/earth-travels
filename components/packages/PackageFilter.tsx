"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/ui";

export interface FilterState {
  styles: string[];
  duration: string;
  maxBudget: number;
}

interface PackageFilterProps {
  filters: FilterState;
  onChange: (newFilters: FilterState) => void;
  onReset: () => void;
}

const STYLES = [
  { id: "honeymoon", name: "Honeymoon" },
  { id: "family", name: "Family" },
  { id: "adventure", name: "Adventure" },
  { id: "luxury", name: "Luxury" },
  { id: "budget", name: "Budget" },
  { id: "group", name: "Group" },
  { id: "religious", name: "Religious" },
];

const DURATIONS = [
  { id: "any", name: "Any" },
  { id: "short", name: "Up to 6 days" },
  { id: "medium", name: "7–9 days" },
  { id: "long", name: "10+ days" },
];

export default function PackageFilter({
  filters,
  onChange,
  onReset,
}: PackageFilterProps) {
  // Collapsible states
  const [styleOpen, setStyleOpen] = useState(true);
  const [durationOpen, setDurationOpen] = useState(true);
  const [budgetOpen, setBudgetOpen] = useState(true);

  const handleStyleChange = (styleId: string) => {
    const isChecked = filters.styles.includes(styleId);
    const newStyles = isChecked
      ? filters.styles.filter((s) => s !== styleId)
      : [...filters.styles, styleId];

    onChange({
      ...filters,
      styles: newStyles,
    });
  };

  const handleDurationChange = (durId: string) => {
    onChange({
      ...filters,
      duration: durId,
    });
  };

  const handleBudgetChange = (val: number) => {
    onChange({
      ...filters,
      maxBudget: val,
    });
  };

  return (
    <div className="w-full lg:w-72 shrink-0">
      <GlassCard
        hover={false}
        className="p-6 bg-[#080C14]/40 border border-white/10 lg:sticky lg:top-24 select-none"
      >
        {/* Section Title */}
        <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
          <h4 className="font-mono text-xs text-[#D4A017] uppercase tracking-[0.15em] font-bold">
            Filter Packages
          </h4>
          <button
            onClick={onReset}
            className="text-[10px] font-mono text-[#D4A017] hover:text-[#F0C040] uppercase tracking-wider underline underline-offset-4"
          >
            Clear Filters
          </button>
        </div>

        {/* Filter Group 1: Travel Style */}
        <div className="mb-6">
          <button
            onClick={() => setStyleOpen(!styleOpen)}
            className="w-full flex items-center justify-between font-sans text-xs font-semibold text-white/90 mb-3"
          >
            <span>Travel Style</span>
            <span className="text-[9px] text-white/40">{styleOpen ? "▲" : "▼"}</span>
          </button>

          {styleOpen && (
            <div className="flex flex-col gap-3 pl-1">
              {STYLES.map((style) => {
                const isChecked = filters.styles.includes(style.id);
                return (
                  <label
                    key={style.id}
                    className="flex items-center gap-3 cursor-pointer group text-xs text-white/70 hover:text-white transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleStyleChange(style.id)}
                      className="sr-only"
                    />
                    <span
                      className={`w-4 h-4 rounded border transition-all flex items-center justify-center ${
                        isChecked
                          ? "bg-[#D4A017] border-transparent text-midnight font-bold"
                          : "border-white/20 group-hover:border-[#D4A017]/50 bg-white/5"
                      }`}
                    >
                      {isChecked && <span className="text-[10px] leading-none">✓</span>}
                    </span>
                    <span className="font-sans">{style.name}</span>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        {/* Filter Group 2: Duration */}
        <div className="mb-6 border-t border-white/5 pt-5">
          <button
            onClick={() => setDurationOpen(!durationOpen)}
            className="w-full flex items-center justify-between font-sans text-xs font-semibold text-white/90 mb-3"
          >
            <span>Duration</span>
            <span className="text-[9px] text-white/40">{durationOpen ? "▲" : "▼"}</span>
          </button>

          {durationOpen && (
            <div className="flex flex-col gap-3 pl-1">
              {DURATIONS.map((dur) => {
                const isChecked = filters.duration === dur.id;
                return (
                  <label
                    key={dur.id}
                    className="flex items-center gap-3 cursor-pointer group text-xs text-white/70 hover:text-white transition-colors"
                  >
                    <input
                      type="radio"
                      name="duration"
                      checked={isChecked}
                      onChange={() => handleDurationChange(dur.id)}
                      className="sr-only"
                    />
                    <span
                      className={`w-4 h-4 rounded-full border transition-all flex items-center justify-center ${
                        isChecked
                          ? "border-[#D4A017] bg-[#D4A017] text-midnight"
                          : "border-white/20 group-hover:border-[#D4A017]/50 bg-white/5"
                      }`}
                    >
                      {isChecked && <span className="w-1.5 h-1.5 rounded-full bg-midnight" />}
                    </span>
                    <span className="font-sans">{dur.name}</span>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        {/* Filter Group 3: Budget Range */}
        <div className="border-t border-white/5 pt-5">
          <button
            onClick={() => setBudgetOpen(!budgetOpen)}
            className="w-full flex items-center justify-between font-sans text-xs font-semibold text-white/90 mb-3"
          >
            <span>Budget per Person</span>
            <span className="text-[9px] text-white/40">{budgetOpen ? "▲" : "▼"}</span>
          </button>

          {budgetOpen && (
            <div className="pl-1">
              <input
                type="range"
                min={10000}
                max={150000}
                step={5000}
                value={filters.maxBudget}
                onChange={(e) => handleBudgetChange(Number(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#D4A017] mb-3"
              />
              <div className="font-mono text-[11px] text-[#D4A017] font-semibold text-center mt-1">
                ₹10,000 – ₹{filters.maxBudget.toLocaleString("en-IN")}
              </div>
            </div>
          )}
        </div>
      </GlassCard>
    </div>
  );
}
