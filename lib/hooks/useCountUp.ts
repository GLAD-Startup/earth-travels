"use client";

import { useEffect, useRef } from "react";

interface UseCountUpProps {
  target: number;
  duration: number; // in ms
  decimals?: number;
}

export default function useCountUp<T extends HTMLElement = HTMLElement>({ target, duration, decimals = 0 }: UseCountUpProps) {
  const elementRef = useRef<T>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial value
    element.innerText = (0).toFixed(decimals);

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

        if (elementRef.current) {
          elementRef.current.innerText = currentValue.toFixed(decimals);
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          if (elementRef.current) {
            elementRef.current.innerText = target.toFixed(decimals);
          }
        }
      };

      requestAnimationFrame(animate);
    };

    return () => {
      observer.disconnect();
    };
  }, [target, duration, decimals]);

  // Return formatted initial value so it renders immediately, plus the ref
  return [(0).toFixed(decimals), elementRef] as const;
}
