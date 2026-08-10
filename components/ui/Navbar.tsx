"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Detect scrolled state for glassmorphic navbar styling
    if (currentScrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide navbar on scroll down, show on scroll up
    if (currentScrollY > lastScrollY && currentScrollY > 120) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Packages", href: "/packages" },
    { name: "Itineraries", href: "/itinerary" },
    { name: "Cruises", href: "/cruises" },
    { name: "Rails", href: "/rails" },
    { name: "Visa", href: "/visa" },
    { name: "Insurance", href: "/insurance" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isDarkHeroPage =
    pathname === "/" ||
    pathname === "/destinations" ||
    pathname === "/cruises" ||
    pathname === "/rails" ||
    pathname === "/about" ||
    pathname.startsWith("/itinerary");

  const getTextColorClass = (isActive: boolean) => {
    if (isScrolled) {
      return isActive ? "text-[#1a120a]" : "text-[#1a120a]/75 hover:text-[#1a120a]";
    }
    if (isDarkHeroPage) {
      return isActive ? "text-white" : "text-white/80 hover:text-white";
    }
    return isActive ? "text-[#1a120a]" : "text-[#1a120a]/75 hover:text-[#1a120a]";
  };

  const hamburgerColorClass = isScrolled ? "text-[#1a120a]" : isDarkHeroPage ? "text-white" : "text-[#1a120a]";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-[#fdf8f2]/92 backdrop-blur-[20px] border-b border-[#1a120a]/10 py-3 shadow-md"
            : "bg-transparent py-4 md:py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto pl-1 sm:pl-2 lg:pl-4 pr-4 sm:pr-6 lg:pr-8 flex items-center justify-between gap-4">
          {/* Left: Logo & Brand Name */}
          <Link
            href="/"
            className="relative flex items-center gap-3 sm:gap-3.5 md:gap-4 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-2.5 rounded-full group shrink-0 select-none"
          >
            {/* Frosted Glass Backdrop */}
            <div className="absolute inset-0 rounded-full backdrop-blur-xl bg-[#1a120a]/40 border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.5)] pointer-events-none transition-transform duration-300 group-hover:scale-[1.02]" />

            {/* Logo Icon */}
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 shrink-0 z-10">
              <Image
                src="/images/logo_transparent.png"
                alt="Earth Travels Logo"
                fill
                sizes="(max-width: 768px) 44px, 56px"
                className="object-contain filter drop-shadow-[0_10px_25px_rgba(3,122,212,0.65)] transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>

            {/* Brand Name */}
            <div className="flex items-center z-10">
              <span
                className="font-display text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold tracking-wide text-white leading-none whitespace-nowrap"
                style={{
                  textShadow:
                    "0 2px 20px rgba(255,255,255,0.15), 0 8px 20px rgba(0, 0, 0, 0.8)",
                }}
              >
                Earth Travels India
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links (Visible on Large Screens) */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-5 font-sans">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-[12px] xl:text-[13.5px] font-medium transition-colors duration-300 px-1 py-1 whitespace-nowrap after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#c4900f] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center ${getTextColorClass(
                    isActive
                  )} ${isActive ? "after:scale-x-100 font-bold" : ""}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right: CTA Button & Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop CTA Button */}
            <Link
              href="/quote"
              className="hidden sm:inline-flex items-center justify-center text-white font-sans text-xs md:text-sm font-semibold rounded-full px-5 py-2.5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(196,144,15,0.4)] whitespace-nowrap shrink-0 shadow-sm"
              style={{ background: "linear-gradient(135deg, #c4900f 0%, #e8a820 100%)" }}
            >
              Plan My Trip
            </Link>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 hover:text-[#c4900f] focus:outline-none transition-colors z-50 ${hamburgerColorClass}`}
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
                <span className={`w-full h-0.5 bg-current transition-all duration-300 origin-left ${isOpen ? "rotate-45 translate-x-1" : ""}`} />
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "translate-x-10" : ""}`} />
                <span className={`w-full h-0.5 bg-current transition-all duration-300 origin-left ${isOpen ? "-rotate-45 translate-x-1" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile / Tablet Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[#1a120a]/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

        {/* Sliding drawer panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#fdf8f2]/98 backdrop-blur-[25px] border-l border-[#1a120a]/10 flex flex-col justify-between p-8 pt-24 transition-transform duration-500 shadow-2xl ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Vertical Link Stack */}
          <nav className="flex flex-col gap-4 overflow-y-auto max-h-[70vh] pr-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-display text-lg transition-all duration-300 border-b border-[#1a120a]/5 pb-2 flex items-center justify-between ${
                    isActive ? "text-[#c4900f] font-bold pl-2 border-[#c4900f]/30" : "text-[#1a120a]/80 hover:text-[#1a120a] hover:pl-2"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="text-xs text-[#c4900f]">●</span>}
                </Link>
              );
            })}
          </nav>

          {/* Drawer Footer CTA */}
          <div className="flex flex-col gap-4 pt-6 border-t border-[#1a120a]/10">
            <Link
              href="/quote"
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-white font-sans text-sm font-semibold rounded-full py-3 shadow-md transition-transform hover:scale-102"
              style={{ background: "linear-gradient(135deg, #c4900f 0%, #e8a820 100%)" }}
            >
              Plan My Trip
            </Link>
            <p className="text-[11px] text-[#1a120a]/50 text-center font-mono uppercase tracking-wider">
              Mathura, Uttar Pradesh, India • +91 89410 88111
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
