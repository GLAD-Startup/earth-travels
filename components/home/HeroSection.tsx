"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import Link from "next/link";
import { GlassCard } from "@/components/ui";

const IMAGES = [
  "https://images.unsplash.com/photo-1566837430573-c1f516a24911?auto=format&fit=crop&w=1600&q=80", // Kashmir
  "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=80", // Maldives
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80", // Dubai
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80", // Bali
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80", // Switzerland (Alps)
];

const DESTINATIONS = [
  "Kashmir",
  "Maldives",
  "Malaysia",
  "Dubai",
  "Thailand",
  "Bali",
  "Europe",
  "Kerala",
  "Rajasthan",
  "Sri Lanka",
  "Singapore",
];

export default function HeroSection() {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Crossfade Image Index State & Refs
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const slideImagesRef = useRef<(HTMLImageElement | null)[]>([]);

  // Form Fields
  const [selectedDest, setSelectedDest] = useState("");
  const [isDestDropdownOpen, setIsDestDropdownOpen] = useState(false);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [travellers, setTravellers] = useState(2);

  // Dropdown reference to close on click outside
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 1. Crossfade Interval Trigger
  useEffect(() => {
    const crossfadeInterval = setInterval(() => {
      setActiveImgIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);

    return () => clearInterval(crossfadeInterval);
  }, []);

  // GSAP Smooth Slide Animation (Prevents Instant Zoom Snap-back)
  useEffect(() => {
    slideImagesRef.current.forEach((img) => {
      if (img) gsap.killTweensOf(img);
    });

    slideImagesRef.current.forEach((img, idx) => {
      if (!img) return;

      if (idx === activeImgIndex) {
        // Fade in new active image and start slow Ken Burns zoom
        gsap.fromTo(
          img,
          { opacity: img.style.opacity ? parseFloat(img.style.opacity) : 0, scale: 1.05 },
          { opacity: 1, duration: 1.5, ease: "power2.inOut", zIndex: 0 }
        );
        gsap.to(img, {
          scale: 1.12,
          duration: 10,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });
      } else {
        // Fade out inactive images. Let them stay at their current scale during fade-out to prevent instant zoom snaps
        gsap.to(img, {
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut",
          zIndex: -10,
        });
      }
    });
  }, [activeImgIndex]);

  // 2. Click Outside Dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDestDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 3. Text and CTA Entrance Animation
  useEffect(() => {
    // Reset positions
    gsap.set(".hero-word", { opacity: 0, y: 60 });
    gsap.set(".hero-subtext", { opacity: 0, y: 20 });
    gsap.set(".hero-ctas", { opacity: 0, y: 20 });

    const tl = gsap.timeline({ delay: 0.3 });

    tl.to(".hero-word", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.07,
      ease: "power3.out",
    })
      .to(
        ".hero-subtext",
        {
          opacity: 0.6,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .to(
        ".hero-ctas",
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2"
      );
  }, []);

  // 4. Canvas Particle Effect
  useEffect(() => {
    const canvas = canvasRef.current;
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
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height + canvas.height,
        r: Math.random() * 1 + 1,
        speed: Math.random() * 0.4 + 0.2,
        drift: Math.random() * 0.3 - 0.15,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(212, 160, 23, 0.4)";

      particles.forEach((p) => {
        p.y -= p.speed;
        p.x += p.drift;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        if (p.y < 0) {
          p.y = canvas.height + Math.random() * 30;
          p.x = Math.random() * canvas.width;
          p.speed = Math.random() * 0.4 + 0.2;
          p.drift = Math.random() * 0.3 - 0.15;
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

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedDest) params.append("destination", selectedDest.toLowerCase());
    if (dateFrom) params.append("from", dateFrom);
    if (dateTo) params.append("to", dateTo);
    params.append("travellers", travellers.toString());
    router.push(`/packages?${params.toString()}`);
  };

  const headline1Words = "Crafting Journeys".split(" ");
  const headline2Words = "The World Remembers".split(" ");

  return (
    <section className="relative h-[95vh] min-h-[680px] w-full flex flex-col justify-center items-center overflow-visible select-none bg-midnight">
      {/* Background Images Crossfader with slow Ken Burns */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {IMAGES.map((imgUrl, i) => (
          <img
            key={i}
            ref={(el) => {
              slideImagesRef.current[i] = el;
            }}
            src={imgUrl}
            alt={`Earth Travels Immersive Backdrop ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: i === 0 ? 1 : 0,
              transform: "scale(1.05)",
            }}
          />
        ))}
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080c14]/20 via-[#080c14]/50 to-[#080c14]/90 z-1 pointer-events-none" />

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-5 pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-6 mt-10">
        {/* Eyebrow Label */}
        <div className="glass px-5 py-2.5 rounded-full border border-white/12 flex items-center justify-center select-none shadow-2xl">
          <span className="font-mono text-[11px] font-semibold text-[#D4A017] tracking-[0.12em] uppercase">
            🌟 MATHURA&apos;S MOST TRUSTED TRAVEL AGENCY
          </span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="flex flex-col gap-1 items-center max-w-4xl select-none leading-none">
          <span className="font-display text-[clamp(36px,8vw,88px)] font-normal text-white tracking-tight flex flex-wrap justify-center">
            {headline1Words.map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden mr-4">
                <span className="inline-block hero-word">{word}</span>
              </span>
            ))}
          </span>
          <span className="font-display text-[clamp(36px,8vw,88px)] text-[#D4A017] italic font-normal tracking-tight mt-1 flex flex-wrap justify-center">
            {headline2Words.map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden mr-4">
                <span className="inline-block hero-word">{word}</span>
              </span>
            ))}
          </span>
        </h1>

        {/* Subtext */}
        <p className="hero-subtext font-sans text-base md:text-[18px] text-white/60 max-w-3xl mx-auto leading-relaxed mt-2 select-none">
          4.7★ rated by 127+ families from Mathura & beyond
        </p>

        {/* CTA Buttons */}
        <div className="hero-ctas flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Link
            href="/packages"
            className="inline-block text-[#080C14] text-xs font-mono tracking-wider font-semibold rounded-full px-8 py-3.5 transition-all duration-300 hover:scale-103 hover:shadow-[0_0_24px_rgba(212,160,23,0.35)] gold-glow"
            style={{
              background: "linear-gradient(135deg, #D4A017 0%, #F0C040 100%)",
            }}
          >
            Explore Packages
          </Link>
          <Link
            href="/quote"
            className="inline-block bg-white/5 border border-white/20 text-white text-xs font-mono tracking-wider font-semibold rounded-full px-8 py-3.5 transition-all duration-300 hover:scale-103 hover:bg-white/10 hover:border-white/30 backdrop-blur-md"
          >
            Get Free Quote
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 flex flex-col items-center justify-center pointer-events-none select-none">
          <svg
            className="w-5 h-5 text-white/50 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Hero Overlapping Search Bar */}
      <div className="absolute bottom-[-75px] left-1/2 -translate-x-1/2 w-full max-w-[960px] px-6 z-20">
        <GlassCard hover={false} className="p-7 md:p-10 bg-[#080C14]/80 backdrop-blur-[24px] border border-white/15 shadow-2xl rounded-[24px]">
          <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row gap-6 items-stretch md:items-end justify-between">
            
            {/* Field 1: Custom Destination Dropdown */}
            <div ref={dropdownRef} className="flex-1 flex flex-col gap-2.5 relative">
              <label className="font-mono text-[11px] text-white/50 uppercase tracking-widest pl-1">
                Destination
              </label>
              <button
                type="button"
                onClick={() => setIsDestDropdownOpen(!isDestDropdownOpen)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white/80 hover:text-white hover:border-white/20 transition-all font-sans text-left flex justify-between items-center h-[56px] focus:outline-none focus:border-[#D4A017] focus:ring-3 focus:ring-[#D4A017]/15"
              >
                <span>{selectedDest || "Where to?"}</span>
                <span className="text-white/40 text-[10px] pointer-events-none select-none">▼</span>
              </button>

              {isDestDropdownOpen && (
                <div className="absolute top-[90px] left-0 right-0 z-50 glass bg-[#080C14]/95 border border-white/12 shadow-2xl rounded-xl py-2 max-h-48 overflow-y-auto no-scrollbar font-sans text-xs">
                  {DESTINATIONS.map((dest) => (
                    <button
                      key={dest}
                      type="button"
                      onClick={() => {
                        setSelectedDest(dest);
                        setIsDestDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gold/15 hover:text-gold transition-colors text-white/80"
                    >
                      {dest}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Field 2: Dates From & To */}
            <div className="flex-1.5 flex flex-col gap-2.5">
              <label className="font-mono text-[11px] text-white/50 uppercase tracking-widest pl-1">
                Travel Dates
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white/80 hover:border-white/20 focus:outline-none focus:border-[#D4A017] focus:ring-3 focus:ring-[#D4A017]/15 h-[56px] font-sans"
                />
                <input
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  min={dateFrom || new Date().toISOString().split("T")[0]}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white/80 hover:border-white/20 focus:outline-none focus:border-[#D4A017] focus:ring-3 focus:ring-[#D4A017]/15 h-[56px] font-sans"
                />
              </div>
            </div>

            {/* Field 3: Travellers Stepper */}
            <div className="w-full md:w-36 flex flex-col gap-2.5">
              <label className="font-mono text-[11px] text-white/50 uppercase tracking-widest pl-1">
                Travellers
              </label>
              <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-3 py-1 h-[56px]">
                <button
                  type="button"
                  onClick={() => setTravellers((prev) => Math.max(1, prev - 1))}
                  className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white/10 text-white font-mono text-lg font-bold"
                >
                  -
                </button>
                <span className="font-mono text-sm font-semibold text-white/90">{travellers}</span>
                <button
                  type="button"
                  onClick={() => setTravellers((prev) => prev + 1)}
                  className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white/10 text-white font-mono text-lg font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Field 4: Search Action Button */}
            <div className="w-full md:w-auto">
              <button
                type="submit"
                className="w-full md:w-auto h-[56px] text-[#080C14] font-sans text-sm font-bold rounded-xl px-8 flex items-center justify-center shadow-lg transition-all hover:scale-103 hover:shadow-[0_0_24px_rgba(212,160,23,0.45)]"
                style={{
                  background: "linear-gradient(135deg, #D4A017 0%, #F0C040 100%)",
                }}
              >
                Search Packages
              </button>
            </div>
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
