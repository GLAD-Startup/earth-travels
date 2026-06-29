"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface RevealWrapperProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

export default function RevealWrapper({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: RevealWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Set initial position based on direction
    let startX = 0;
    let startY = 0;
    if (direction === "up") startY = 40;
    else if (direction === "left") startX = 40;
    else if (direction === "right") startX = -40;

    gsap.set(el, {
      opacity: 0,
      x: startX,
      y: startY,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(el, {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.7,
              delay: delay,
              ease: "power2.out",
            });
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [direction, delay]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
