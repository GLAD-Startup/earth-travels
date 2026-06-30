"use client";

import { useState, useEffect, useRef } from "react";

interface UseCountUpProps {
  target: number;
  duration: number; // in ms
  decimals?: number;
}

export default function useCountUp<T extends HTMLElement = HTMLElement>({ target, duration, decimals = 0 }: UseCountUpProps) {
  const [value, setValue] = useState(0);
  const elementRef = useRef<T>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            startAnimation();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    const startAnimation = () => {
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out quad
        const easeProgress = progress * (2 - progress);
        const currentValue = easeProgress * target;

        setValue(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setValue(target);
        }
      };

      requestAnimationFrame(animate);
    };

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  const formattedValue = value.toFixed(decimals);

  return [formattedValue, elementRef] as const;
}
