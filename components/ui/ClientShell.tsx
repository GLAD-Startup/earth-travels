"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import {
  ScrollProgress,
  CustomCursor,
  Navbar,
  Footer,
  WhatsAppFAB,
} from "@/components/ui";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Lenis Scroll
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // GSAP Page Transition on Route Change
  useEffect(() => {
    const target = document.getElementById("page-transition-container");
    if (target) {
      gsap.fromTo(
        target,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [pathname]);

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main className="flex-grow pt-20">
        <div id="page-transition-container" style={{ opacity: 0 }}>
          {children}
        </div>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
