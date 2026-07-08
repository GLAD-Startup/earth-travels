"use client";

import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";

const IMAGES = [
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
];

export default function HeroSection() {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Crossfade interval — CSS-driven Ken Burns
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImgIndex((prev) => (prev + 1) % IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Text entrance animation
  useEffect(() => {
    gsap.set(".hero-word", { opacity: 0, y: 100 });
    gsap.set(".hero-subtext", { opacity: 0, y: 30 });
    gsap.set(".hero-ctas", { opacity: 0, y: 30 });

    const tl = gsap.timeline({ delay: 0.2 });

    tl.to(".hero-word", {
      opacity: 1, y: 0, duration: 1.2, stagger: 0.1, ease: "power4.out",
    })
      .to(".hero-subtext", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.8")
      .to(".hero-ctas", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.8");
  }, []);

  const headline1Words = "Crafting".split(" ");
  const headline2Words = "Journeys The World".split(" ");
  const headline3Words = "Remembers".split(" ");

  return (
    <section className="relative h-[100vh] min-h-[750px] w-full flex flex-col justify-end items-start overflow-hidden bg-[#1a120a] pb-24 md:pb-32">
      {/* Background Images Crossfader with CSS Ken Burns */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#1a120a]">
        {IMAGES.map((imgUrl, i) => (
          <div
            key={i}
            className="absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out"
            style={{
              opacity: i === activeImgIndex ? 1 : 0,
              animation: i === activeImgIndex ? "ken-burns 12s ease-out alternate infinite" : "none",
            }}
          >
            <Image
              src={imgUrl}
              alt={`Earth Travels destination ${i + 1}`}
              fill
              sizes="100vw"
              className="object-cover"
              priority={i === 0}
              quality={90}
            />
          </div>
        ))}
      </div>

      {/* Luxury Gradient Overlay (Darker at bottom for text contrast) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a120a] via-[#1a120a]/40 to-transparent z-[1] pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-start gap-8">
        
        {/* Eyebrow Label */}
        <div className="overflow-hidden mb-[-10px]">
          <span className="hero-subtext inline-block font-mono text-xs md:text-sm font-semibold text-[#e8a820] tracking-[0.3em] uppercase">
            Mathura&apos;s Premier Travel Designer
          </span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="flex flex-col gap-0 items-start select-none leading-[0.9]">
          <span className="font-display text-[clamp(50px,10vw,120px)] font-normal text-white tracking-[-0.02em] flex flex-wrap">
            {headline1Words.map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden mr-4 md:mr-6 pb-2">
                <span className="inline-block hero-word">{word}</span>
              </span>
            ))}
          </span>
          <span className="font-display text-[clamp(40px,8vw,90px)] text-[#e8a820] italic font-normal tracking-[-0.02em] flex flex-wrap -mt-2">
            {headline2Words.map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden mr-3 md:mr-5 pb-2">
                <span className="inline-block hero-word">{word}</span>
              </span>
            ))}
          </span>
          <span className="font-display text-[clamp(50px,10vw,120px)] font-normal text-white tracking-[-0.02em] flex flex-wrap -mt-2">
            {headline3Words.map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden mr-4 md:mr-6 pb-2">
                <span className="inline-block hero-word">{word}</span>
              </span>
            ))}
          </span>
        </h1>

        <div className="hero-ctas mt-8 w-full flex flex-col md:flex-row items-start md:items-center justify-between border-t border-white/20 pt-8 gap-8">
          {/* Subtext */}
          <p className="font-sans text-sm md:text-base text-white/60 max-w-md leading-relaxed font-light">
            Curating bespoke itineraries and extraordinary experiences for families and visionaries. 
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full sm:w-auto mt-4 md:mt-0">
            <Link
              href="/packages"
              className="group relative inline-flex items-center justify-center text-white text-[11px] md:text-xs font-mono tracking-[0.2em] uppercase font-medium overflow-hidden pb-1"
            >
              <span className="relative z-10">Discover Collections</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#e8a820] transform scale-x-100 origin-left transition-transform duration-500 group-hover:scale-x-0" />
            </Link>
            
            <Link
              href="/quote"
              className="inline-flex items-center justify-center text-[#1a120a] bg-white text-[11px] md:text-xs font-sans tracking-wider font-semibold rounded-full px-8 py-3.5 md:py-4 transition-all duration-500 hover:bg-[#e8a820] hover:text-white w-full sm:w-auto"
            >
              Begin Your Journey
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
