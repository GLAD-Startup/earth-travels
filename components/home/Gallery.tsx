"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  useEffect(() => {
    if (!containerRef.current || !row1Ref.current || !row2Ref.current) return;

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
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-16 md:py-24 flex flex-col gap-6 md:gap-8 bg-[#fdf8f2] select-none"
    >
      {/* Background elegant 'gallery' text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[14rem] md:text-[28rem] font-display font-semibold text-[#1a120a]/[0.03] tracking-wider leading-none">
          gallery
        </span>
      </div>

      {/* Row 1: Left to Right */}
      <div className="relative w-full overflow-visible z-10">
        <div
          ref={row1Ref}
          className="flex gap-4 md:gap-6 items-center w-max whitespace-nowrap pl-[10vw]"
        >
          {row1Images.map((img, idx) => (
            <div
              key={`row1-${idx}`}
              className={`relative flex-shrink-0 overflow-hidden rounded-[20px] md:rounded-[32px] border border-[#1a120a]/8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group ${img.widthClass} ${img.heightClass}`}
            >
              <Image
                src={img.src}
                alt="Earth Travels Gallery 1"
                fill
                sizes="(max-width: 768px) 300px, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
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
          {row2Images.map((img, idx) => (
            <div
              key={`row2-${idx}`}
              className={`relative flex-shrink-0 overflow-hidden rounded-[20px] md:rounded-[32px] border border-[#1a120a]/8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group ${img.widthClass} ${img.heightClass}`}
            >
              <Image
                src={img.src}
                alt="Earth Travels Gallery 2"
                fill
                sizes="(max-width: 768px) 300px, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority={idx < 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
