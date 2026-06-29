"use client";

/**
 * lib/animations.ts
 * Shared GSAP animation helpers and presets for Earth Travels.
 * Import only in Client Components.
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export type RevealOptions = {
  delay?: number;
  duration?: number;
  stagger?: number;
  y?: number;
};

// ─── Lenis Smooth Scroll Init ─────────────────────────────────────────────────

/**
 * Initialise Lenis smooth scroll. Call once in a client root component.
 * Returns the lenis instance so callers can destroy it on unmount.
 */
export async function initLenis() {
  const Lenis = (await import("@studio-freight/lenis")).default;
  const lenis = new Lenis({
    lerp: 0.1,
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return lenis;
}

// ─── Scroll Progress Bar ──────────────────────────────────────────────────────

export function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${progress}%`;
  };

  window.addEventListener("scroll", updateProgress, { passive: true });
  return () => window.removeEventListener("scroll", updateProgress);
}

// ─── Custom Cursor ────────────────────────────────────────────────────────────

export function initCustomCursor() {
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  if (!dot || !ring) return;

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;
  const lerp = 0.12;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  const hoverTargets = "a, button, [data-cursor-hover]";

  document.addEventListener("mouseover", (e) => {
    if ((e.target as Element).closest(hoverTargets)) {
      document.body.classList.add("cursor-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if ((e.target as Element).closest(hoverTargets)) {
      document.body.classList.remove("cursor-hover");
    }
  });

  let animFrame: number;
  const animate = () => {
    ringX += (mouseX - ringX) * lerp;
    ringY += (mouseY - ringY) * lerp;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    animFrame = requestAnimationFrame(animate);
  };
  animate();

  return () => cancelAnimationFrame(animFrame);
}

// ─── Navbar Scroll Transition ─────────────────────────────────────────────────

export function initNavbarScroll(navSelector = "#main-nav", threshold = 60) {
  const nav = document.querySelector<HTMLElement>(navSelector);
  if (!nav) return;

  const update = () => {
    if (window.scrollY > threshold) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  };

  window.addEventListener("scroll", update, { passive: true });
  update();
  return () => window.removeEventListener("scroll", update);
}

// ─── IntersectionObserver Reveal ──────────────────────────────────────────────

export function initRevealObserver(selector = ".reveal") {
  const elements = document.querySelectorAll<HTMLElement>(selector);
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = parseFloat(el.dataset.delay || "0");
          setTimeout(() => {
            el.classList.add("revealed");
          }, delay * 1000);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}

// ─── Count-Up Animation ───────────────────────────────────────────────────────

export function initCountUp(selector = "[data-count]") {
  const elements = document.querySelectorAll<HTMLElement>(selector);
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseFloat(el.dataset.count || "0");
          const suffix = el.dataset.suffix || "";
          const duration = 2000;
          const start = performance.now();

          const update = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const isDecimal = el.dataset.count?.includes(".") || false;
            const current = isDecimal
              ? (eased * target).toFixed(1)
              : Math.floor(eased * target).toString();
            el.textContent = current + suffix;
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = target + suffix;
          };

          requestAnimationFrame(update);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  elements.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}

// ─── 3D Card Tilt ─────────────────────────────────────────────────────────────

export function initCardTilt(selector = "[data-tilt]") {
  const cards = document.querySelectorAll<HTMLElement>(selector);
  if (!cards.length) return;

  cards.forEach((card) => {
    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      card.style.transition = "transform 0.1s ease";
    };

    const handleLeave = () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
      card.style.transition = "transform 0.4s ease";
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", handleLeave);
  });
}

// ─── IST Business Hours Check ─────────────────────────────────────────────────

/**
 * Returns true if Earth Travels is currently open (Mon–Sat, 10AM–7:30PM IST).
 */
export function isBusinessOpen(): boolean {
  const now = new Date();
  const ist = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  const day = ist.getDay(); // 0 = Sunday
  const hour = ist.getHours();
  const minute = ist.getMinutes();
  const totalMinutes = hour * 60 + minute;
  const openMinutes = 10 * 60;      // 10:00 AM
  const closeMinutes = 19 * 60 + 30; // 7:30 PM

  return day >= 1 && day <= 6 && totalMinutes >= openMinutes && totalMinutes <= closeMinutes;
}
