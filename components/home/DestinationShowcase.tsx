"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { DESTINATIONS } from "@/lib/data";
import { GlassCard, RevealWrapper } from "@/components/ui";

export default function DestinationShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const homeDestinations = DESTINATIONS.slice(0, 8);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll <= 0) return;
    const currentProgress = container.scrollLeft / maxScroll;
    setScrollProgress(currentProgress);

    const panels = container.querySelectorAll<HTMLElement>(".parallax-panel");
    panels.forEach((panel) => {
      const img = panel.querySelector<HTMLElement>(".parallax-bg");
      if (!img) return;

      const rect = panel.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      const panelCenterX = rect.left + rect.width / 2;
      const distanceFromCenter = panelCenterX - viewportWidth / 2;

      const offset = distanceFromCenter * -0.25;
      img.style.transform = `translateX(${offset}px) scale(1.15)`;
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollLeft = () => {
    if (!containerRef.current) return;
    const panelWidth = window.innerWidth * 0.4;
    containerRef.current.scrollBy({ left: -panelWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!containerRef.current) return;
    const panelWidth = window.innerWidth * 0.4;
    containerRef.current.scrollBy({ left: panelWidth, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen py-24 bg-background flex flex-col justify-between overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <RevealWrapper delay={0.1}>
            <span className="font-mono text-xs text-[#D4A017] uppercase tracking-[0.2em] block mb-2">
              Curated Escapes
            </span>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-charcoal" className="font-display">
              Our Signature Escapes
            </h2>
          </RevealWrapper>
        </div>

        <RevealWrapper delay={0.3} className="hidden md:flex items-center gap-4">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal/70 hover:text-[#D4A017] hover:border-[#D4A017]/50 transition-colors bg-white/5 cursor-pointer"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal/70 hover:text-[#D4A017] hover:border-[#D4A017]/50 transition-colors bg-white/5 cursor-pointer"
            aria-label="Scroll right"
          >
            →
          </button>
        </RevealWrapper>
      </div>

      <div
        ref={containerRef}
        className="flex overflow-x-auto md:overflow-x-scroll snap-x snap-mandatory md:snap-none no-scrollbar gap-6 px-6 md:px-[10vw] pb-8 w-full flex-col md:flex-row"
        style={{ scrollbarWidth: "none" }}
      >
        {homeDestinations.map((dest) => (
          <div
            key={dest.id}
            className="parallax-panel shrink-0 snap-center w-full md:w-[40vw] h-[75vh] min-h-[500px] rounded-3xl relative overflow-hidden group border border-charcoal/10 hover:border-[#D4A017]/30 transition-colors duration-500"
          >
            <div
              className="parallax-bg absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out scale-110"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(8,12,20,0.1) 0%, rgba(8,12,20,0.9) 100%), url(${dest.image})`,
              }}
            />

            <div className="absolute top-6 left-6 z-20 flex gap-2">
              <span className="bg-background/70 backdrop-blur-md border border-charcoal/10 text-charcoal text-[10px] tracking-wider uppercase font-mono px-3 py-1.5 rounded-full">
                {dest.region.replace("-", " ")}
              </span>
              <span className="bg-[#D4A017]/25 backdrop-blur-md border border-[#D4A017]/30 text-gold-light text-[10px] tracking-wider uppercase font-mono px-3 py-1.5 rounded-full">
                ⏱ {dest.season}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 z-20">
              <GlassCard hover={false} className="p-6 md:p-8 bg-background/55 border border-charcoal/10">
                <span className="font-mono text-xs text-[#F0C040] uppercase tracking-wider block mb-1">
                  Starting at ₹{dest.startingPrice.toLocaleString("en-IN")}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-2" className="font-display">
                  {dest.name}
                </h3>
                <p className="font-sans text-xs md:text-sm text-charcoal/70 mb-4 line-clamp-2 leading-relaxed">
                  {dest.tagline}. Step into a landscape crafted for your soul.
                </p>
                <Link
                  href={`/packages?destination=${dest.name.toLowerCase()}`}
                  className="font-mono text-xs text-charcoal group-hover:text-[#D4A017] flex items-center gap-1 hover:underline transition-all"
                >
                  View Packages <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </GlassCard>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full mt-6 hidden md:flex items-center gap-4">
        <div className="h-[2px] bg-white/10 flex-grow relative overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 bg-[#D4A017] transition-all duration-300"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
        <span className="font-mono text-xs text-charcoal/40">
          Scroll to explore {homeDestinations.length} escapes
        </span>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
