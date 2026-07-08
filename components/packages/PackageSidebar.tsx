"use client";

import React from "react";
import { GlassCard } from "@/components/ui";

interface PackageSidebarProps {
  maxBudget: number;
  onBudgetChange: (val: number) => void;
  selectedDuration: string;
  onDurationChange: (val: string) => void;
  selectedCategories: string[];
  onToggleCategory: (cat: string) => void;
}

const CATEGORIES = [
  { id: "family", name: "Family Vacation" },
  { id: "honeymoon", name: "Honeymoon Special" },
  { id: "luxury", name: "Luxury Getaways" },
  { id: "budget", name: "Budget Friendly" },
  { id: "adventure", name: "Adventure & Sports" },
  { id: "group", name: "Group Tours" },
];

export default function PackageSidebar({
  maxBudget,
  onBudgetChange,
  selectedDuration,
  onDurationChange,
  selectedCategories,
  onToggleCategory,
}: PackageSidebarProps) {
  return (
    <aside className="w-full lg:w-72 shrink-0">
      <GlassCard hover={false} className="p-6 bg-background/30 border border-charcoal/10 sticky top-24">
        <h4 className="font-mono text-xs text-gold uppercase tracking-[0.15em] font-bold border-b border-charcoal/5 pb-4 mb-6">
          Filter Journeys
        </h4>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <label className="font-sans text-xs font-semibold text-charcoal/80">Max Budget (per person)</label>
            <span className="font-mono text-xs text-gold font-bold">
              ₹{maxBudget.toLocaleString("en-IN")}
            </span>
          </div>
          <input
            type="range"
            min={15000}
            max={150000}
            step={5000}
            value={maxBudget}
            onChange={(e) => onBudgetChange(Number(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold"
          />
          <div className="flex justify-between items-center text-[10px] text-charcoal/40 font-mono mt-1">
            <span>₹15K</span>
            <span>₹80K</span>
            <span>₹1.5L+</span>
          </div>
        </div>

        <div className="mb-8">
          <label className="font-sans text-xs font-semibold text-charcoal/80 block mb-3">
            Trip Duration
          </label>
          <div className="relative">
            <select
              value={selectedDuration}
              onChange={(e) => onDurationChange(e.target.value)}
              className="w-full bg-white/5 border border-charcoal/10 rounded-xl px-4 py-2.5 text-xs text-charcoal focus:outline-none focus:border-gold/50 appearance-none font-sans"
            >
              <option value="all" className="bg-background text-charcoal">All Durations</option>
              <option value="short" className="bg-background text-charcoal">Short (3 – 5 Nights)</option>
              <option value="medium" className="bg-background text-charcoal">Medium (6 – 8 Nights)</option>
              <option value="long" className="bg-background text-charcoal">Long (9+ Nights)</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal/40 text-[10px]">
              ▼
            </div>
          </div>
        </div>

        <div>
          <label className="font-sans text-xs font-semibold text-charcoal/80 block mb-3">
            Travel Style
          </label>
          <div className="flex flex-col gap-3">
            {CATEGORIES.map((cat) => {
              const isChecked = selectedCategories.includes(cat.id);
              return (
                <label
                  key={cat.id}
                  className="flex items-center gap-3 cursor-pointer group text-xs text-charcoal/70 hover:text-charcoal transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onToggleCategory(cat.id)}
                    className="sr-only"
                  />
                  <span
                    className={`w-4 h-4 rounded border transition-all flex items-center justify-center ${
                      isChecked
                        ? "bg-gold border-transparent text-midnight"
                        : "border-charcoal/20 group-hover:border-gold/50 bg-white/5"
                    }`}
                  >
                    {isChecked && <span className="text-[10px] leading-none">✓</span>}
                  </span>
                  <span className="font-sans">{cat.name}</span>
                </label>
              );
            })}
          </div>
        </div>
      </GlassCard>
    </aside>
  );
}
