"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function InteractiveHero3DLogo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState({
    rotateX: 0,
    rotateY: 0,
  });

  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Calculate normalized position from -1 to 1
      const normX = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const normY = (e.clientY - innerHeight / 2) / (innerHeight / 2);

      // 3D rotation limits (up to 18 degrees)
      targetY = normX * 18;
      targetX = -normY * 18;
    };

    const animate = () => {
      // Smooth lerp physics for 60fps fluid motion
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      setTransformStyle({
        rotateX: currentX,
        rotateY: currentY,
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-subtext relative w-full flex items-center justify-center py-2 select-none pointer-events-auto cursor-pointer group"
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative flex flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6 px-8 py-3.5 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-full transition-transform duration-100 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${transformStyle.rotateX}deg) rotateY(${transformStyle.rotateY}deg)`,
        }}
      >
        {/* Blurred Backdrop Layer behind just the 3D logo area */}
        <div
          className="absolute inset-0 rounded-full backdrop-blur-xl bg-[#1a120a]/40 border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.5)] pointer-events-none transition-all duration-300 group-hover:border-[#1aaff2]/40 group-hover:bg-[#1a120a]/50"
          style={{ transform: "translateZ(-20px)" }}
        />

        {/* 3D Depth Layer 1: Logo Icon (Popping Forward) */}
        <div
          className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 shrink-0 transition-transform duration-300 group-hover:scale-105"
          style={{ transform: "translateZ(45px)" }}
        >
          <Image
            src="/images/logo_transparent.png"
            alt="Earth Travels 3D Logo"
            fill
            sizes="(max-width: 768px) 80px, 96px"
            className="object-contain filter drop-shadow-[0_10px_25px_rgba(26,175,242,0.65)]"
            priority
          />
        </div>

        {/* 3D Depth Layer 2: Brand Name (Popping Further Forward, in one line) */}
        <div
          className="flex items-center transition-transform duration-300"
          style={{ transform: "translateZ(75px)" }}
        >
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-[#1aaff2] leading-none"
            style={{
              textShadow:
                "0 0 35px rgba(26, 175, 242, 0.65), 0 8px 20px rgba(0, 0, 0, 0.8)",
            }}
          >
            Earth Travels
          </h2>
        </div>
      </div>
    </div>
  );
}
