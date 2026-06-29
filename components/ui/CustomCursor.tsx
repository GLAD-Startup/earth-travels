"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    if (window.innerWidth < 768) {
      return () => window.removeEventListener("resize", checkDesktop);
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    const lerp = 0.1;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    let frameId: number;
    const updateRing = () => {
      ringX += (mouseX - ringX) * lerp;
      ringY += (mouseY - ringY) * lerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      }

      frameId = requestAnimationFrame(updateRing);
    };
    frameId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener("resize", checkDesktop);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(frameId);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      {/* 10px x 10px dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full bg-[#D4A017] transition-all duration-200 ease-out"
        style={{
          width: "10px",
          height: "10px",
          transform: "translate(-100px, -100px)",
          scale: isHovered ? 0.5 : 1,
        }}
      />

      {/* 36px x 36px ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[99998] rounded-full border-[1.5px] border-[#D4A017]/60 bg-transparent transition-all duration-200 ease-out"
        style={{
          width: "36px",
          height: "36px",
          transform: "translate(-100px, -100px)",
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? "rgba(212, 160, 23, 0.1)" : "transparent",
        }}
      />
    </>
  );
}
