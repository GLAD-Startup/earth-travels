"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import "./globals.css";
import {
  ScrollProgress,
  CustomCursor,
  Navbar,
  Footer,
  WhatsAppFAB,
} from "@/components/ui";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      gsap.fromTo(target, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" });
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <title>Earth Travels — Crafting Journeys From Mathura to the World</title>
        <meta
          name="description"
          content="Premium tour agency in Mathura, UP. 4.7★ rated. Kashmir, Maldives, Dubai, Europe & more. 089418 81111."
        />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />

        {/* ── Anti-flash script: read localStorage & apply data-theme BEFORE paint ── */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('et-theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', t);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-midnight text-white font-sans antialiased flex flex-col min-h-screen">
        <ThemeProvider>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
