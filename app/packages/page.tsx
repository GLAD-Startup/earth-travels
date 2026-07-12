"use client";
 
import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PACKAGES } from "@/lib/data/packages";
import { PackageFilter, PackageCard } from "@/components/packages";
import type { FilterState } from "@/components/packages";
import { RevealWrapper } from "@/components/ui";
 
const INITIAL_FILTERS: FilterState = {
  styles: [],
  duration: "any",
  maxBudget: 150000,
};
 
function PackagesContent() {
  const searchParams = useSearchParams();
  const destinationQuery = searchParams?.get("destination")?.toLowerCase();
 
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const [searchQuery, setSearchQuery] = useState("");
 
  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };
 
  const handleReset = () => {
    setFilters(INITIAL_FILTERS);
    setSearchQuery("");
  };
 
  // Filter package logic
  const filteredPackages = PACKAGES.filter((pkg) => {
    // 0. Destination filter (from URL)
    if (destinationQuery && pkg.destinationId.toLowerCase() !== destinationQuery) {
      return false;
    }
 
    // 0.5. Search bar text filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchesName = pkg.name.toLowerCase().includes(q);
      const matchesDest = pkg.destination.toLowerCase().includes(q);
      const matchesHighlights = pkg.highlights.some((h) => h.toLowerCase().includes(q));
      const matchesCategory = pkg.category.some((c) => c.toLowerCase().includes(q));
      if (!matchesName && !matchesDest && !matchesHighlights && !matchesCategory) {
        return false;
      }
    }
 
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
    <>
      {/* Page Header */}
      <section className="relative bg-background/50 py-20 px-6 border-b border-charcoal/5 text-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          <RevealWrapper delay={0.1}>
            <span className="font-mono text-xs text-[#D4A017] uppercase tracking-[0.25em] block">
              Curated Itineraries
            </span>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <h1 className="font-display text-4xl md:text-[64px] font-bold tracking-tight text-charcoal mb-2 leading-none capitalize">
              {destinationQuery ? `${destinationQuery} Packages` : "Our Travel Packages"}
            </h1>
          </RevealWrapper>
          <RevealWrapper delay={0.3}>
            <p className="font-sans text-sm md:text-[18px] text-charcoal/60 max-w-lg mx-auto">
              {destinationQuery 
                ? `Explore our hand-picked trips to ${destinationQuery.charAt(0).toUpperCase() + destinationQuery.slice(1)}.` 
                : "8 destinations. Honest pricing. Full support from Mathura."}
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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-l-2 border-[#D4A017] pl-4 mb-2 gap-4">
              <div>
                <span className="font-mono text-[9px] text-charcoal/40 uppercase tracking-widest block">
                  Search results
                </span>
                <h3 className="font-display font-sans text-sm font-bold text-charcoal uppercase tracking-wider">
                  Available Expeditions ({filteredPackages.length})
                </h3>
              </div>
              <div className="relative w-full sm:w-72">
                <input
                  type="text"
                  placeholder="Search packages by name, highlights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-9 text-[11px] font-sans border border-charcoal/15 rounded-lg bg-surface text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017] transition-all duration-300 shadow-sm"
                />
                <svg className="absolute left-3 top-2.5 w-3.5 h-3.5 text-charcoal/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
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
                  No packages match your search query &ldquo;{searchQuery}&rdquo;.
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
    </>
  );
}
 
export default function PackagesPage() {
  return (
    <div className="bg-background min-h-screen text-charcoal select-none">
      <title>Best Tour Packages — Kashmir, Maldives & SE Asia | Earth Travels</title>
      <meta name="description" content="Browse premium, custom tour packages by Earth Travels. Honest pricing, fully curated and supported from Mathura." />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-mono text-[#D4A017]">Loading packages...</div>}>
        <PackagesContent />
      </Suspense>
    </div>
  );
}
