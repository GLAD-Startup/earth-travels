"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/data";
import { RevealWrapper } from "@/components/ui";

export default function ClosingCTABanner() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Generate particles only once on the client
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 1,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 10 + 10}s`,
      opacity: Math.random() * 0.15 + 0.05,
    }));
  }, []);

  // Mouse & Scroll Parallax
  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize from -1 to 1 for parallax
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePos({ x, y });
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative py-32 px-6 overflow-hidden w-full flex items-center justify-center border-t border-charcoal/5 min-h-[700px] bg-[#fdf8f2]">
      
      {/* ================= BACKGROUND LAYERS ================= */}
      {/* 2-second fade in animation on mount via CSS */}
      <div 
        className="absolute inset-0 w-full h-full z-0 overflow-hidden animate-[fade-in_2s_ease-out]"
        style={{
          "--mouse-x": mousePos.x,
          "--mouse-y": mousePos.y,
          "--scroll-y": scrollY,
        } as React.CSSProperties}
      >
        {/* Layer 1: Animated Morphing Gradients */}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#fff4e6,#fdf8f2,#fffcf7)] bg-[size:400%_400%] animate-gradient-shift-slow opacity-100" />

        {/* Layer 2: Moving Light Rays (Golden sunlight from top-left) */}
        <div 
          className="absolute top-[-50%] left-[-20%] w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top_left,rgba(232,168,32,0.12),transparent_60%)] animate-pulse-ring pointer-events-none"
          style={{ transform: "translate(calc(var(--mouse-x) * 15px), calc(var(--mouse-y) * 15px - var(--scroll-y) * 0.1px))" }}
        />
        <div 
          className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-[linear-gradient(135deg,rgba(232,168,32,0.04)_0%,transparent_40%)] pointer-events-none"
          style={{ transform: "translate(calc(var(--mouse-x) * 20px), calc(var(--mouse-y) * 20px - var(--scroll-y) * 0.15px))" }}
        />

        {/* Layer 3: Abstract Floating Clouds */}
        <div 
          className="absolute top-[20%] left-[-10%] w-[60%] h-[40%] bg-[#fff]/40 rounded-full blur-[100px] animate-drift-clouds pointer-events-none"
          style={{ transform: "translate(calc(var(--mouse-x) * -10px), calc(var(--mouse-y) * -10px - var(--scroll-y) * 0.2px))" }}
        />
        <div 
          className="absolute top-[40%] right-[-10%] w-[50%] h-[30%] bg-[#e8a820]/5 rounded-full blur-[120px] animate-drift-clouds animation-delay-2000 pointer-events-none"
          style={{ transform: "translate(calc(var(--mouse-x) * 12px), calc(var(--mouse-y) * 12px - var(--scroll-y) * 0.05px))" }}
        />

        {/* Layer 4: Soft Fog at bottom for depth */}
        <div 
          className="absolute bottom-[-10%] left-[-20%] w-[140%] h-[40%] bg-gradient-to-t from-[#fdf8f2]/95 to-transparent blur-[50px] animate-fog-drift pointer-events-none"
          style={{ transform: "translate(calc(var(--mouse-x) * 5px), calc(var(--scroll-y) * -0.1px))" }}
        />

        {/* Layer 5: Particles (Dust & Sparkles) - Hidden on mobile to save battery */}
        <div 
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{ transform: "translate(calc(var(--mouse-x) * 25px), calc(var(--mouse-y) * 25px - var(--scroll-y) * 0.3px))" }}
        >
          {particles.map(p => (
            <div
              key={p.id}
              className="absolute rounded-full animate-float-slow"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                opacity: p.opacity,
                animationDelay: p.delay,
                animationDuration: p.duration,
                boxShadow: `0 0 ${p.size * 2}px rgba(196,144,15,0.25)`,
                backgroundColor: p.size > 2.5 ? '#c4900f' : '#e8a820'
              }}
            />
          ))}
        </div>

        {/* Layer 6: Flying Birds (Minimal Silhouette) - Hidden on mobile/tablet */}
        <div className="absolute top-[10%] left-0 w-full h-[50vh] pointer-events-none hidden lg:block overflow-hidden">
           <svg className="absolute w-[80px] h-[40px] animate-birds-fly opacity-[0.08] text-[#1a120a]" viewBox="0 0 64 64" fill="currentColor">
              {/* Abstract tiny bird silhouettes */}
              <path d="M10,30 Q15,25 20,30 Q15,28 10,30 Z M20,30 Q25,25 30,30 Q25,28 20,30 Z" />
              <path d="M30,20 Q35,15 40,20 Q35,18 30,20 Z M40,20 Q45,15 50,20 Q45,18 40,20 Z" />
              <path d="M5,40 Q10,35 15,40 Q10,38 5,40 Z M15,40 Q20,35 25,40 Q20,38 15,40 Z" />
           </svg>
        </div>
      </div>
      {/* ================= /BACKGROUND LAYERS ================= */}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <RevealWrapper delay={0.1}>
          <span className="font-mono text-xs text-[#c4900f] uppercase tracking-[0.2em] block mb-4 drop-shadow-sm font-semibold">
            Begin Your Story
          </span>
        </RevealWrapper>

        <RevealWrapper delay={0.2}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-[#1a120a] leading-tight mb-8 relative drop-shadow-sm">
            
            {/* Animated Radial Glow behind the text */}
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[120%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(196,144,15,0.08),transparent_60%)] blur-[40px] animate-pulse-ring pointer-events-none -z-10 rounded-full" />

            Your Dream Journey Starts <br />
            with <span className="italic bg-clip-text text-transparent bg-[linear-gradient(110deg,#c4900f,45%,#e8a820,55%,#c4900f)] bg-[length:250%_100%] animate-shimmer inline-block pt-2">One Message</span>
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={0.3}>
          <p className="font-sans text-sm md:text-base text-[#1a120a]/75 max-w-xl mx-auto mb-10 drop-shadow-sm leading-relaxed">
            Tell us where you want to go. We will customize the perfect package, handle all of your documentation, and support you 24/7.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={0.4} className="mb-12">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-2xl md:text-4xl font-bold text-[#c4900f] hover:text-[#1a120a] transition-colors select-all underline underline-offset-8 decoration-[#c4900f]/30 hover:decoration-[#c4900f] drop-shadow-md"
          >
            💬 {SITE_CONFIG.phone}
          </a>
        </RevealWrapper>

        <RevealWrapper delay={0.5} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans font-semibold rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.25)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
          >
            <svg
              className="w-5 h-5 fill-current z-10"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.489.002 9.961-4.467 9.964-9.948.002-2.654-1.03-5.15-2.906-7.029C16.45 1.748 13.957.718 11.31.718c-5.49 0-9.966 4.469-9.969 9.95-.001 1.905.517 3.5 1.498 5.1l-.989 3.613 3.707-.977zm12.39-7.12c-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.174.2-.298.3-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
            <span className="z-10">WhatsApp Now</span>
          </a>
          
          <Link
            href="/quote"
            className="group relative w-full sm:w-auto font-sans font-semibold tracking-wide text-center py-4 px-8 rounded-full text-[#1A120A] overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(196,144,15,0.25)] transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #f0c040 0%, #e8a820 100%)" }}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]" />
            <span className="relative z-10">Request Free Itinerary</span>
          </Link>
        </RevealWrapper>
      </div>
    </section>
  );
}
