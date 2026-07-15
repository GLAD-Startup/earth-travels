"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FounderSection() {
  useEffect(() => {
    const anim1 = gsap.fromTo(
      ".award-image-1",
      { y: 40 },
      {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: ".founder-section-container",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    const anim2 = gsap.fromTo(
      ".award-image-2",
      { y: -60 },
      {
        y: 60,
        ease: "none",
        scrollTrigger: {
          trigger: ".founder-section-container",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    return () => {
      anim1.scrollTrigger?.kill();
      anim2.scrollTrigger?.kill();
      anim1.kill();
      anim2.kill();
    };
  }, []);

  return (
    <section className="founder-section-container relative w-full bg-[#1a120a] text-white pt-32 pb-40 overflow-hidden select-none">
      
      {/* Background Texture/Noise for Premium Feel */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-screen" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Magazine Style Spread Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Left: Oversized Typography & Story */}
          <div className="w-full lg:w-5/12 flex flex-col gap-10">
            <div>
              <span className="font-mono text-[10px] text-[#e8a820] uppercase tracking-[0.3em] font-semibold block mb-6">
                The Architect
              </span>
              {/* Founder name + portrait thumbnail side-by-side */}
              <div className="flex items-end gap-6">
                <h2 className="font-display text-5xl md:text-7xl font-normal leading-[1.1] tracking-[-0.02em]">
                  Nitesh<br />
                  <span className="italic text-[#e8a820]">Khandelwal</span>
                </h2>
                {/* Portrait thumbnail — face-focused crop using objectPosition */}
                <div className="relative w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-full overflow-hidden border-2 border-[#e8a820]/40 shadow-lg shadow-[#e8a820]/10 shrink-0 mb-2">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Nitesh Khandelwal, founder of Earth Travels"
                    fill
                    sizes="130px"
                    className="object-cover"
                    quality={90}
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="font-mono text-[9px] text-white/40 uppercase tracking-[0.2em] font-light mt-4">
                Founder & Lead Designer
              </p>
            </div>

            <div className="flex flex-col gap-8 max-w-sm">
              <p className="font-sans text-sm md:text-base text-white/70 leading-[1.8] font-light">
                What began in Krishna Market has grown into Mathura&apos;s most trusted name in bespoke travel. 
                With over a decade of unyielding dedication, Nitesh and his team have redefined luxury travel for families.
              </p>
              
              <blockquote className="relative">
                <div className="absolute -left-6 -top-4 text-[#e8a820]/20 font-display text-7xl font-bold leading-none select-none">
                  &ldquo;
                </div>
                <p className="font-display text-2xl md:text-3xl italic text-white/90 leading-tight relative z-10">
                  We don&apos;t just book trips; we architect memories that families carry for a lifetime.
                </p>
              </blockquote>
            </div>

             {/* Editorial Stats Line */}
            <div className="flex items-center gap-12 mt-4 pt-8 border-t border-white/10">
              <div className="flex flex-col">
                <span className="font-mono text-3xl font-light text-[#e8a820]">15<span className="text-sm">+</span></span>
                <span className="font-sans text-[9px] text-white/40 uppercase tracking-widest font-semibold mt-1">Years</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-3xl font-light text-[#e8a820]">15000<span className="text-sm">+</span></span>
                <span className="font-sans text-[9px] text-white/40 uppercase tracking-widest font-semibold mt-1">Travellers</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-3xl font-light text-[#e8a820]">4.7<span className="text-sm">★</span></span>
                <span className="font-sans text-[9px] text-white/40 uppercase tracking-widest font-semibold mt-1">Rating</span>
              </div>
            </div>
          </div>

          {/* Right: Premium Overlapping Photo Collage (Rotated scatter style) */}
          <div className="w-full lg:w-7/12 relative h-[550px] sm:h-[650px] lg:h-[700px] mt-12 lg:mt-0 select-none">
            
            {/* 1. Main Award Photo (TBO.com) - Background center-left */}
            <div className="absolute top-10 left-[5%] w-[52%] h-[350px] lg:h-[450px] z-10 rotate-[-2deg] rounded-2xl overflow-hidden border-4 border-[#221810] shadow-2xl hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-500 ease-out cursor-pointer">
              <div className="relative w-full h-full">
                <Image
                  src="/images/founder/nitesh-tbo-excellence-award.png"
                  alt="Nitesh Khandelwal receiving TBO.com Excellence Award"
                  fill
                  sizes="(max-width: 1024px) 50vw, 35vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                  quality={90}
                />
              </div>
              <div className="absolute -left-12 bottom-12 rotate-[-90deg] origin-bottom-left flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#e8a820]" />
                <span className="font-mono text-[8px] text-[#e8a820] uppercase tracking-[0.2em] whitespace-nowrap">
                  TBO Excellence 2024
                </span>
              </div>
            </div>

            {/* 2. SGC Leisures Award Photo - Foreground bottom-right */}
            <div className="absolute bottom-4 right-[2%] w-[46%] h-[240px] lg:h-[320px] z-20 rotate-[3deg] rounded-2xl overflow-hidden border-4 border-[#221810] shadow-2xl hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-500 ease-out cursor-pointer">
              <div className="relative w-full h-full">
                <Image
                  src="/images/founder/nitesh-sgc-leisures-award.png"
                  alt="Nitesh Khandelwal receiving SGC Leisures Award"
                  fill
                  sizes="(max-width: 1024px) 45vw, 30vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                  quality={90}
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-[#1a120a]/80 backdrop-blur-sm px-4 py-2 border border-white/10 rounded-lg">
                <span className="font-mono text-[8px] text-white uppercase tracking-[0.2em] whitespace-nowrap">
                  SGC Industry Honor
                </span>
              </div>
            </div>

            {/* 3. Trophy Photo (Full Trophy, object-contain) - Foreground top-right */}
            <div className="absolute top-0 right-[4%] w-[32%] h-[200px] lg:h-[270px] z-20 rotate-[-4deg] bg-[#221810] p-2.5 rounded-2xl shadow-2xl border-2 border-[#e8a820]/40 flex items-center justify-center hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-500 ease-out cursor-pointer">
              <div className="relative w-full h-full">
                <Image
                  src="/images/trophy.jpg"
                  alt="Dr. Ram Manohar Lohia MSME Tourism Award Trophy"
                  fill
                  sizes="(max-width: 1024px) 30vw, 20vw"
                  className="object-contain transition-transform duration-700 hover:scale-105"
                  quality={90}
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-espresso/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10 w-[85%] text-center">
                <span className="font-mono text-[7px] text-white uppercase tracking-[0.1em] whitespace-nowrap font-semibold block">
                  MSME Regional Award
                </span>
              </div>
            </div>

            {/* 4. Certificate Photo (Travel License) - Foreground bottom-left */}
            <div className="absolute bottom-6 left-0 w-[42%] h-[150px] lg:h-[200px] z-20 rotate-[4deg] bg-[#221810] p-1.5 rounded-2xl shadow-2xl border-2 border-white/20 hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-500 ease-out cursor-pointer">
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <Image
                  src="/images/certificate.jpg"
                  alt="Official MSME Tourism Certificate of Appreciation"
                  fill
                  sizes="(max-width: 1024px) 40vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  quality={90}
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-espresso/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10 w-[85%] text-center">
                <span className="font-mono text-[7px] text-white uppercase tracking-[0.1em] whitespace-nowrap font-semibold block">
                  MSME State Certificate
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
