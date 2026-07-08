"use client";

import React, { useState } from "react";
import { PACKAGES } from "@/lib/data/packages";
import { PackageFilter, PackageCard } from "@/components/packages";
import type { FilterState } from "@/components/packages";
import { RevealWrapper } from "@/components/ui";

const INITIAL_FILTERS: FilterState = {
  styles: [],
  duration: "any",
  maxBudget: 150000,
};

export default function PackagesPage() {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleReset = () => {
    setFilters(INITIAL_FILTERS);
  };

  // Filter package logic
  const filteredPackages = PACKAGES.filter((pkg) => {
    // 1. Travel style checklist
    if (filters.styles.length > 0) {
      const hasStyleMatch = pkg.category.some((cat) =>
        filters.styles.includes(cat)
      );
      if (!hasStyleMatch) return false;
    }

    // 2. Duration checking
    if (filters.duration !== "any") {
      const totalDays = pkg.duration.days;
      if (filters.duration === "short" && totalDays > 6) return false;
      if (filters.duration === "medium" && (totalDays < 7 || totalDays > 9))
        return false;
      if (filters.duration === "long" && totalDays < 10) return false;
    }

    // 3. Budget range slider
    if (pkg.pricePerPerson > filters.maxBudget) return false;

    return true;
  });

  return (
    <div className="bg-background min-h-screen text-charcoal select-none">
      <title>Best Tour Packages — Kashmir, Maldives & SE Asia | Earth Travels</title>
      <meta name="description" content="Browse premium, custom tour packages by Earth Travels. Honest pricing, fully curated and supported from Mathura." />
      
      {/* Page Header */}
      <section className="relative bg-background/50 py-20 px-6 border-b border-charcoal/5 text-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          <RevealWrapper delay={0.1}>
            <span className="font-mono text-xs text-[#D4A017] uppercase tracking-[0.25em] block">
              Curated Itineraries
            </span>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <h1 className="font-display text-4xl md:text-[64px] font-bold tracking-tight text-charcoal mb-2 leading-none">
              Our Travel Packages
            </h1>
          </RevealWrapper>
          <RevealWrapper delay={0.3}>
            <p className="font-sans text-sm md:text-[18px] text-charcoal/60 max-w-lg mx-auto">
              8 destinations. Honest pricing. Full support from Mathura.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* Main Layout Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* LEFT: Sidebar filter - stacks on top for mobile */}
          <div className="w-full lg:w-auto relative z-25 overflow-x-auto lg:overflow-x-visible">
            <PackageFilter
              filters={filters}
              onChange={handleFilterChange}
              onReset={handleReset}
            />
          </div>

          {/* RIGHT: Content Packages list */}
          <div className="flex-1 flex flex-col gap-6 w-full relative z-10">
            <div className="flex justify-between items-center border-l-2 border-[#D4A017] pl-4 mb-2">
              <div>
                <span className="font-mono text-[9px] text-charcoal/40 uppercase tracking-widest block">
                  Search results
                </span>
                <h3 className="font-display font-sans text-sm font-bold text-charcoal uppercase tracking-wider">
                  Available Expeditions ({filteredPackages.length})
                </h3>
              </div>
            </div>

            {filteredPackages.length > 0 ? (
              <div className="flex flex-col gap-6 w-full">
                {filteredPackages.map((pkg, idx) => (
                  <RevealWrapper key={pkg.id} delay={idx * 0.1}>
                    <PackageCard pkg={pkg} />
                  </RevealWrapper>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border border-dashed border-charcoal/10 rounded-2xl">
                <span className="text-4xl block mb-4 select-none">🔍</span>
                <p className="text-sm font-sans text-charcoal/50 mb-2">
                  No packages match your active filters.
                </p>
                <button
                  onClick={handleReset}
                  className="font-mono text-xs text-[#D4A017] hover:underline uppercase tracking-wider"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
      
    </div>
  );
}
