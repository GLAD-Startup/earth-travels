"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register GSAP Plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

export default function FlightExperience() {
  const planeRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!planeRef.current || !canvasRef.current) return;
    
    const plane = planeRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // --- 1. SETUP CANVAS ---
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // --- 2. CANVAS TRAIL RENDER LOOP ---
    let rafId: number;
    let lastX = 0;
    let lastY = 0;
    let totalDist = 0;

    const renderTrail = () => {
      const rect = plane.getBoundingClientRect();
      // Center of the plane element
      const currentX = rect.left + rect.width / 2;
      const currentY = rect.top + rect.height / 2;

      // Initialize last position on first frame
      if (lastX === 0 && lastY === 0) {
        lastX = currentX;
        lastY = currentY;
      }

      // Fade existing canvas slightly to transparent (Trail fade-out)
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.015)"; // Controls fade speed (lower = slower fade)
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw new segment
      ctx.globalCompositeOperation = "source-over";
      const dx = currentX - lastX;
      const dy = currentY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 0.1) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = "rgba(217, 164, 65, 0.6)"; // Warm gold
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.setLineDash([8, 12]);
        ctx.lineDashOffset = -totalDist;
        ctx.stroke();
        
        totalDist += dist;
      }

      lastX = currentX;
      lastY = currentY;
      rafId = requestAnimationFrame(renderTrail);
    };
    rafId = requestAnimationFrame(renderTrail);

    // --- 3. GSAP FLIGHT PATH ---
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // A responsive flight path sweeping across the viewport as the user scrolls
    const flightPath = [
      { x: vw * -0.2, y: vh * 0.8 },  // Start offscreen bottom-left
      { x: vw * 0.2,  y: vh * 0.3 },  // Hero swooping up
      { x: vw * 0.8,  y: vh * 0.15 }, // Crossing hero
      { x: vw * 0.85, y: vh * 0.5 },  // Banking down right
      { x: vw * 0.5,  y: vh * 0.8 },  // Center loop bottom
      { x: vw * 0.15, y: vh * 0.6 },  // Swoop up left
      { x: vw * 0.1,  y: vh * 0.2 },  // Top left
      { x: vw * 0.5,  y: vh * 0.1 },  // Center top
      { x: vw * 0.9,  y: vh * 0.4 },  // Right swoop
      { x: vw * 0.8,  y: vh * 0.9 },  // Down right
      { x: vw * 0.2,  y: vh * 0.85 }, // Across bottom
      { x: vw * 0.1,  y: vh * 0.3 },  // Up left
      { x: vw * 0.6,  y: vh * 0.2 },  // Toward center
      { x: vw * 1.2,  y: vh * 0.5 },  // Fly offscreen right at the end
    ];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: "max",
        scrub: 1.5, // Smooth scrubbing (1.5s lag for weight/momentum)
      },
    });

    // Set initial position outside the timeline so it's ready
    gsap.set(plane, {
      x: flightPath[0].x,
      y: flightPath[0].y,
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "center center",
    });

    tl.to(plane, {
      motionPath: {
        path: flightPath,
        curviness: 1.5,
        autoRotate: true,
      },
      ease: "none", // Even pacing across the scroll distance
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(rafId);
      tl.kill();
      // Only kill ScrollTriggers related to this component
      // ScrollTrigger.getAll().forEach(t => t.kill()); // This might kill other ScrollTriggers on the page!
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-50 overflow-hidden">
      
      {/* Flight Trail Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Airplane */}
      <div 
        ref={planeRef} 
        className="absolute top-0 left-0 w-[60px] h-[60px] md:w-[80px] md:h-[80px] drop-shadow-2xl"
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
        >
          {/* Main Fuselage */}
          <path d="M22 12L17 10L10 9.5L2 11.5L2 12.5L10 14.5L17 14L22 12Z" fill="#F7E9D0" />
          
          {/* Wings */}
          <path d="M14 10.5L9 2L7 2L10.5 10L14 10.5Z" fill="#D4A017" />
          <path d="M14 13.5L9 22L7 22L10.5 14L14 13.5Z" fill="#D4A017" />
          
          {/* Horizontal Stabilizers (Tail Wings) */}
          <path d="M5 11.5L3 8.5L2 8.5L3 11.5L5 11.5Z" fill="#D4A017" />
          <path d="M5 12.5L3 15.5L2 15.5L3 12.5L5 12.5Z" fill="#D4A017" />
          
          {/* Cockpit Window */}
          <ellipse cx="17.5" cy="12" rx="1.5" ry="0.8" fill="#183A2D" />
          
          {/* Subtle Engine/Propeller Blurs */}
          <circle cx="11.5" cy="8" r="1.5" fill="#FFF" className="animate-pulse-ring opacity-50" />
          <circle cx="11.5" cy="16" r="1.5" fill="#FFF" className="animate-pulse-ring opacity-50" />
        </svg>
      </div>

    </div>
  );
}
