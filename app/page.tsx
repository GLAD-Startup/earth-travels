"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import {
  HeroSection,
  DestShowcase,
  PackageSlider,
  SocialProof,
} from "@/components/home";
import { RevealWrapper } from "@/components/ui";

export default function Home() {
  const ctaCanvasRef = useRef<HTMLCanvasElement>(null);

  // Particle Effect for final CTA Banner
  useEffect(() => {
    const canvas = ctaCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    interface Particle {
      x: number;
      y: number;
      r: number;
      speed: number;
      drift: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height + canvas.height,
        r: Math.random() * 0.8 + 0.6,
        speed: Math.random() * 0.2 + 0.1,
        drift: Math.random() * 0.1 - 0.05,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(212, 160, 23, 0.2)";

      particles.forEach((p) => {
        p.y -= p.speed;
        p.x += p.drift;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        if (p.y < 0) {
          p.y = canvas.height + Math.random() * 30;
          p.x = Math.random() * canvas.width;
          p.speed = Math.random() * 0.2 + 0.1;
          p.drift = Math.random() * 0.1 - 0.05;
        }

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
      });

      animId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="bg-[#080C14] w-full min-h-screen text-white overflow-x-hidden">
      <title>Earth Travels — Crafting Journeys From Mathura to the World</title>
      <meta name="description" content="Premium tour agency in Mathura, UP. 4.7★ rated. کشمیر (Kashmir), Maldives, Dubai, Europe & more. Custom packages, visa support, call 089418 81111." />
      
      {/* 1. HeroSection (First fold, no wrapper) */}
      <HeroSection />

      {/* 2. Padding block to account for overlapping search bar */}
      <div className="pt-28" />

      {/* 3. Trust Bar Marquee */}
      <RevealWrapper delay={0}>
        <div className="relative w-full overflow-hidden bg-[#080C14] py-6 border-y border-white/5 select-none z-10">
          <div className="flex w-max items-center animate-marquee whitespace-nowrap font-mono text-[12px] text-white/50 uppercase tracking-[0.15em]">
            
            {/* Set 1 */}
            <div className="flex items-center gap-12 mx-12">
              <span>127+ Happy Travellers</span>
              <span className="text-[#D4A017]">★</span>
              <span>50+ Destinations</span>
              <span className="text-[#D4A017]">★</span>
              <span>10+ Years of Trust</span>
              <span className="text-[#D4A017]">★</span>
              <span>4.7★ Rated</span>
              <span className="text-[#D4A017]">★</span>
              <span>Visa Assistance Included</span>
            </div>

            {/* Set 2 (Duplicated for seamless loop) */}
            <div className="flex items-center gap-12 mx-12">
              <span>127+ Happy Travellers</span>
              <span className="text-[#D4A017]">★</span>
              <span>50+ Destinations</span>
              <span className="text-[#D4A017]">★</span>
              <span>10+ Years of Trust</span>
              <span className="text-[#D4A017]">★</span>
              <span>4.7★ Rated</span>
              <span className="text-[#D4A017]">★</span>
              <span>Visa Assistance Included</span>
            </div>
            
          </div>
        </div>

        {/* Local styled-jsx for trust marquee scrolling */}
        <style jsx global>{`
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee-scroll 24s linear infinite;
          }
        `}</style>
      </RevealWrapper>

      {/* 4. Destinations Showcase */}
      <RevealWrapper delay={0.1}>
        <DestShowcase />
      </RevealWrapper>

      {/* 5. Packages Slider */}
      <RevealWrapper delay={0}>
        <PackageSlider />
      </RevealWrapper>

      {/* 6. Social Proof Reviews */}
      <RevealWrapper delay={0.1}>
        <SocialProof />
      </RevealWrapper>

      {/* 7. Final Inline CTA Banner */}
      <section className="relative w-full py-24 px-6 overflow-hidden text-center flex items-center justify-center border-t border-white/5">
        
        {/* Animated Gradient Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(135deg, #0A1628 0%, #0D2340 50%, #0A1628 100%)",
          }}
        />

        {/* Faint Particle Canvas */}
        <canvas ref={ctaCanvasRef} className="absolute inset-0 z-5 pointer-events-none" />

        {/* Content Box */}
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center gap-6">
          <span className="font-mono text-xs text-[#D4A017] uppercase tracking-[0.25em] block mb-1">
            Start Planning
          </span>

          <h2 className="font-display text-3xl md:text-[52px] font-normal leading-tight text-white max-w-2xl select-none">
            Your Dream Journey Starts With <br className="hidden sm:inline" />
            <span className="text-[#D4A017] italic">One Message</span>
          </h2>

          <p className="font-sans text-sm md:text-base text-white/60 max-w-lg mx-auto">
            We respond within 2 hours. No advance payment to get a quote.
          </p>

          {/* Large Gold WhatsApp Call Trigger */}
          <a
            href="https://wa.me/918941881111"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-2xl md:text-[32px] font-bold text-[#D4A017] hover:text-[#F0C040] transition-colors select-all underline underline-offset-8 decoration-[#D4A017]/30 hover:decoration-[#D4A017] mt-2 block"
          >
            💬 089418 81111
          </a>

          {/* Actions Button row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <a
              href="https://wa.me/918941881111"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto font-sans text-xs font-semibold px-8 py-3.5 rounded-full text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 backdrop-blur-md transition-all duration-300 hover:scale-103 shadow-lg"
            >
              WhatsApp Now
            </a>
            <Link
              href="/quote"
              className="w-full sm:w-auto font-sans text-xs font-bold px-8 py-3.5 text-midnight rounded-full hover:shadow-[0_0_15px_rgba(212,160,23,0.3)] transition-all duration-300 hover:scale-103 block"
              style={{
                background: "linear-gradient(135deg, #D4A017 0%, #F0C040 100%)",
              }}
            >
              Request Free Itinerary
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
