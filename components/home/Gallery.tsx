"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealWrapper } from "@/components/ui";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GalleryImage {
  src: string;
  widthClass: string;
  heightClass: string;
}

const row1Images: GalleryImage[] = [
  {
    src: "/images/NITESH_EARTH TRAVEL/Nitesh_Earth Travel1.png",
    widthClass: "w-[280px] md:w-[400px]",
    heightClass: "h-[180px] md:h-[260px]",
  },
  {
    src: "/images/trophy.jpg",
    widthClass: "w-[200px] md:w-[280px]",
    heightClass: "h-[180px] md:h-[260px]",
  },
  {
    src: "/images/NITESH_EARTH TRAVEL/Nitesh_Earth Travel2.png",
    widthClass: "w-[340px] md:w-[480px]",
    heightClass: "h-[180px] md:h-[260px]",
  },
  {
    src: "/images/NITESH_EARTH TRAVEL/Nitesh_Earth Travel3.png",
    widthClass: "w-[240px] md:w-[320px]",
    heightClass: "h-[180px] md:h-[260px]",
  },
  {
    src: "/images/office image.jpg",
    widthClass: "w-[300px] md:w-[410px]",
    heightClass: "h-[180px] md:h-[260px]",
  },
  {
    src: "/images/NITESH_EARTH TRAVEL/Nitesh_Earth Travel4.png",
    widthClass: "w-[380px] md:w-[520px]",
    heightClass: "h-[180px] md:h-[260px]",
  },
  {
    src: "/images/NITESH_EARTH TRAVEL/Nitesh_Earth Travel5.png",
    widthClass: "w-[300px] md:w-[420px]",
    heightClass: "h-[180px] md:h-[260px]",
  },
  {
    src: "/images/NITESH_EARTH TRAVEL/Nitesh_Earth Travel6.png",
    widthClass: "w-[320px] md:w-[450px]",
    heightClass: "h-[180px] md:h-[260px]",
  },
  {
    src: "/images/office image 2.jpg",
    widthClass: "w-[280px] md:w-[390px]",
    heightClass: "h-[180px] md:h-[260px]",
  },
  {
    src: "/images/NITESH_EARTH TRAVEL/Nitesh_Earth Travel7.png",
    widthClass: "w-[260px] md:w-[360px]",
    heightClass: "h-[180px] md:h-[260px]",
  },
];

const row2Images: GalleryImage[] = [
  {
    src: "/images/NITESH_EARTH TRAVEL/Nitesh_Earth Travel8.png",
    widthClass: "w-[320px] md:w-[440px]",
    heightClass: "h-[180px] md:h-[260px]",
  },
  {
    src: "/images/certificate.jpg",
    widthClass: "w-[300px] md:w-[420px]",
    heightClass: "h-[180px] md:h-[260px]",
  },
  {
    src: "/images/NITESH_EARTH TRAVEL/Nitesh_Earth Travel9.png",
    widthClass: "w-[260px] md:w-[350px]",
    heightClass: "h-[180px] md:h-[260px]",
  },
  {
    src: "/images/NITESH_EARTH TRAVEL/Nitesh_Earth Travel11.png",
    widthClass: "w-[360px] md:w-[500px]",
    heightClass: "h-[180px] md:h-[260px]",
  },
  {
    src: "/images/office image 1.jpg",
    widthClass: "w-[340px] md:w-[460px]",
    heightClass: "h-[180px] md:h-[260px]",
  },
  {
    src: "/images/NITESH_EARTH TRAVEL/Nitesh_Earth Travel12.png",
    widthClass: "w-[300px] md:w-[410px]",
    heightClass: "h-[180px] md:h-[260px]",
  },
  {
    src: "/images/NITESH_EARTH TRAVEL/Nitesh_Earth Travel13.png",
    widthClass: "w-[340px] md:w-[470px]",
    heightClass: "h-[180px] md:h-[260px]",
  },
  {
    src: "/images/NITESH_EARTH TRAVEL/Nitesh_Earth Travel14.png",
    widthClass: "w-[250px] md:w-[340px]",
    heightClass: "h-[180px] md:h-[260px]",
  },
  {
    src: "/images/NITESH_EARTH TRAVEL/Nitesh_Earth Travel15.png",
    widthClass: "w-[380px] md:w-[520px]",
    heightClass: "h-[180px] md:h-[260px]",
  },
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"all" | "destinations" | "office">("all");

  useEffect(() => {
    if (!containerRef.current || !row1Ref.current || !row2Ref.current) return;

    // Refresh ScrollTrigger to account for element size changes
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Row 1: Left to Right
    const anim1 = gsap.fromTo(
      row1Ref.current,
      { xPercent: -20 },
      {
        xPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      }
    );

    // Row 2: Right to Left
    const anim2 = gsap.fromTo(
      row2Ref.current,
      { xPercent: 10 },
      {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      }
    );

    return () => {
      anim1.scrollTrigger?.kill();
      anim1.kill();
      anim2.scrollTrigger?.kill();
      anim2.kill();
    };
  }, [activeTab]);

  // Dynamic filter logic
  const filteredRow1 = row1Images.filter(img => {
    const isOfficeOrAward = img.src.includes('office') || img.src.includes('trophy.jpg') || img.src.includes('certificate.jpg');
    if (activeTab === "all") return true;
    if (activeTab === "destinations") return !isOfficeOrAward;
    if (activeTab === "office") return isOfficeOrAward;
    return true;
  });

  const filteredRow2 = row2Images.filter(img => {
    const isOfficeOrAward = img.src.includes('office') || img.src.includes('trophy.jpg') || img.src.includes('certificate.jpg');
    if (activeTab === "all") return true;
    if (activeTab === "destinations") return !isOfficeOrAward;
    if (activeTab === "office") return isOfficeOrAward;
    return true;
  });

  // Duplicate items if too few to ensure smooth infinite loop effect
  const displayRow1 = filteredRow1.length > 0 && filteredRow1.length < 6 
    ? [...filteredRow1, ...filteredRow1, ...filteredRow1] 
    : filteredRow1;

  const displayRow2 = filteredRow2.length > 0 && filteredRow2.length < 6 
    ? [...filteredRow2, ...filteredRow2, ...filteredRow2] 
    : filteredRow2;

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-24 bg-[#fdf8f2] select-none"
    >
      {/* Background elegant 'gallery' text - positioned higher and darker */}
      <div className="absolute top-[30px] md:top-[40px] left-0 right-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[9rem] md:text-[18rem] font-display font-semibold text-[#1a120a]/[0.12] tracking-wider leading-none">
          gallery
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 flex flex-col">
        {/* Section Header (Above the carousels) */}
        <RevealWrapper delay={0}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="font-mono text-[10px] text-[#c4900f] uppercase tracking-[0.3em] font-semibold block mb-4">
                Behind Earth Travels
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-normal text-[#1a120a] leading-[1.05] tracking-[-0.02em]">
                The Work Behind<br />
                <span className="italic text-[#c4900f]">Every Journey</span>
              </h2>
            </div>

            {/* Tab Filter Group */}
            <div className="flex flex-wrap gap-2 select-none md:mb-1">
              {[
                { id: "all", label: "All Photos" },
                { id: "destinations", label: "Destinations" },
                { id: "office", label: "Our Office" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "all" | "destinations" | "office")}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-[#c4900f] text-white shadow-md shadow-[#c4900f]/10"
                      : "bg-white/60 border border-[#1a120a]/8 text-[#1a120a]/70 hover:bg-white hover:border-[#c4900f]/35 hover:text-[#c4900f]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <p className="font-sans text-sm md:text-base text-[#1a120a]/55 max-w-sm leading-[1.8] font-light md:text-right">
              We don&apos;t sell destinations we&apos;ve only seen on a brochure.
              Nitesh personally researches, inspects, and experiences every property
              and route before recommending it to your family.
            </p>
          </div>
        </RevealWrapper>
      </div>

      {/* Carousels Container */}
      <div className="relative w-full py-8 overflow-hidden flex flex-col gap-6 md:gap-8">

        {/* Row 1: Left to Right */}
        <div className="relative w-full overflow-visible z-10">
          <div
            ref={row1Ref}
            className="flex gap-4 md:gap-6 items-center w-max whitespace-nowrap pl-[10vw]"
          >
            {displayRow1.map((img, idx) => (
              <div
                key={`row1-${idx}`}
                className={`relative flex-shrink-0 overflow-hidden rounded-[20px] md:rounded-[32px] border border-[#1a120a]/8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group ${img.widthClass} ${img.heightClass}`}
              >
                <Image
                  src={img.src}
                  alt="Earth Travels Gallery 1"
                  fill
                  sizes="(max-width: 768px) 300px, 500px"
                  className={`${img.src.includes('trophy.jpg') ? 'object-contain bg-white p-4' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                  priority={idx < 3}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="relative w-full overflow-visible z-10">
          <div
            ref={row2Ref}
            className="flex gap-4 md:gap-6 items-center w-max whitespace-nowrap pr-[10vw]"
          >
            {displayRow2.map((img, idx) => (
              <div
                key={`row2-${idx}`}
                className={`relative flex-shrink-0 overflow-hidden rounded-[20px] md:rounded-[32px] border border-[#1a120a]/8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group ${img.widthClass} ${img.heightClass}`}
              >
                <Image
                  src={img.src}
                  alt="Earth Travels Gallery 2"
                  fill
                  sizes="(max-width: 768px) 300px, 500px"
                  className={`${img.src.includes('certificate.jpg') ? 'object-contain bg-white p-4' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                  priority={idx < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 flex flex-col">
        {/* Bottom narrative line (Below the carousels) */}
        <RevealWrapper delay={0.3}>
          <div className="mt-16 pt-10 border-t border-[#1a120a]/8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {/* Inline portrait */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden border border-[#c4900f]/30 shrink-0">
                <Image
                  src="/images/profile.jpeg"
                  alt="Nitesh Khandelwal, founder of Earth Travels"
                  fill
                  sizes="80px"
                  className="object-cover"
                  quality={90}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-[#1a120a]">Nitesh Khandelwal</p>
                <p className="font-mono text-[9px] text-[#1a120a]/40 uppercase tracking-widest font-semibold">
                  Founder, Earth Travels · Mathura
                </p>
              </div>
            </div>
            <p className="font-display text-base md:text-lg italic text-[#1a120a]/60 max-w-md text-center md:text-right leading-relaxed">
              &ldquo;I visit every resort I recommend. Your family deserves nothing less than my personal guarantee.&rdquo;
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
