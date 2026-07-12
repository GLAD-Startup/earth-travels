"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > 60);

    // Hide on scroll down, show on scroll up (only after 200px)
    if (currentScrollY > 200) {
      setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 60);
    } else {
      setIsVisible(true);
    }
    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Packages", href: "/packages" },
    { name: "Itineraries", href: "/itinerary" },
    { name: "Cruises", href: "/cruises" },
    { name: "Rails", href: "/rails" },
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
      return isActive ? "text-[#1a120a]" : "text-[#1a120a]/70 hover:text-[#1a120a]";
    }
    if (isDarkHeroPage) {
      return isActive ? "text-white" : "text-white/70 hover:text-white";
    }
    return isActive ? "text-[#1a120a]" : "text-[#1a120a]/70 hover:text-[#1a120a]";
  };

  const brandColorClass = isScrolled ? "text-[#1a120a]" : isDarkHeroPage ? "text-white" : "text-[#1a120a]";
  const hamburgerColorClass = isScrolled ? "text-[#1a120a]" : isDarkHeroPage ? "text-white" : "text-[#1a120a]";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-[#fdf8f2]/90 backdrop-blur-[20px] border-b border-[#1a120a]/10 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Left: Brand name with Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/logo_transparent.png"
              alt="Earth Travels Logo"
              className="w-10 h-10 object-contain"
            />
            <span
              className={`font-display text-[22px] font-extrabold tracking-wide transition-colors duration-300 ${brandColorClass}`}
              style={{ textShadow: "0 0 20px rgba(196, 144, 15, 0.15)" }}
            >
              Earth Travels
            </span>
          </Link>

          {/* Center: Desktop navigation links */}
          <div className="hidden md:flex items-center gap-8 font-sans">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 px-1 py-1 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#c4900f] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center ${getTextColorClass(
                    isActive
                  )} ${isActive ? "after:scale-x-100 font-semibold" : ""}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right: CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/quote"
              className="inline-block text-white font-sans text-sm font-semibold rounded-full px-6 py-2.5 transition-all duration-300 hover:scale-103 hover:shadow-[0_0_20px_rgba(196, 144, 15, 0.4)]"
              style={{ background: "linear-gradient(135deg, #c4900f 0%, #e8a820 100%)" }}
            >
              Plan My Trip
            </Link>
          </div>

          {/* Mobile: Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 hover:text-[#c4900f] focus:outline-none transition-colors z-50 ${hamburgerColorClass}`}
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

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[#1a120a]/30 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

        {/* Sliding drawer panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#fdf8f2]/97 backdrop-blur-[20px] border-l border-[#1a120a]/10 flex flex-col justify-between p-8 pt-24 transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Vertical Link Stack */}
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans text-[20px] font-medium transition-colors duration-300 ${
                    isActive ? "text-[#c4900f] pl-2 border-l-2 border-[#c4900f]" : "text-[#1a120a]/80 hover:text-[#1a120a]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Drawer CTA */}
          <div className="flex flex-col gap-4">
            <Link
              href="/quote"
              onClick={() => setIsOpen(false)}
              className="text-white text-center font-sans font-semibold rounded-full py-3.5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(196,144,15,0.4)]"
              style={{ background: "linear-gradient(135deg, #c4900f 0%, #e8a820 100%)" }}
            >
              Plan My Trip
            </Link>
            <p className="text-[11px] text-[#1a120a]/40 text-center font-mono uppercase tracking-wider">
              Mathura, UP • 89418 81111
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
