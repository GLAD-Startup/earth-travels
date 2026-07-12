"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initLenis } from "@/lib/animations";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import CustomCursor from "./CustomCursor";
import WhatsAppFAB from "./WhatsAppFAB";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    let lenisInstance: Awaited<ReturnType<typeof initLenis>> | null = null;
    const loadLenis = async () => {
      lenisInstance = await initLenis();
    };
    loadLenis();

    return () => {
      if (lenisInstance) {
        lenisInstance.destroy();
      }
    };
  }, []);

  const isHeroPage = pathname === "/" || pathname === "/destinations";

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <div className="flex flex-col min-h-screen">
        {/* Render main page content */}
        <main className={`flex-grow ${isHeroPage ? "" : "pt-20"}`}>{children}</main>
        <Footer />
      </div>
      <WhatsAppFAB />
    </>
  );
}
