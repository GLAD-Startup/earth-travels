"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Packages", href: "/packages" },
    { name: "Itineraries", href: "/itinerary" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-400 ${
          isScrolled
            ? "bg-[#080C14]/72 backdrop-blur-[24px] border-b border-white/8 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Left: Brand name */}
          <Link href="/" className="flex flex-col">
            <span
              className="font-display text-[22px] font-extrabold tracking-wide text-white"
              style={{ textShadow: "0 0 20px rgba(212, 160, 23, 0.5)" }}
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
                  className={`relative text-sm font-medium transition-colors duration-300 px-1 py-1 text-white/80 hover:text-white after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#D4A017] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center ${
                    isActive ? "text-white after:scale-x-100" : ""
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right: Theme toggle + CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/quote"
              className="inline-block text-[#080C14] font-sans text-sm font-semibold rounded-full px-6 py-2.5 transition-all duration-300 hover:scale-103 hover:shadow-[0_0_20px_rgba(212,160,23,0.5)]"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #F0C040 100%)" }}
            >
              Plan My Trip
            </Link>
          </div>

          {/* Mobile: Theme toggle + Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-[#D4A017] focus:outline-none transition-colors z-50"
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
        <div className="absolute inset-0 bg-[#080C14]/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

        {/* Sliding drawer panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#080C14]/90 backdrop-blur-[20px] border-l border-white/12 flex flex-col justify-between p-8 pt-24 transition-transform duration-500 ${
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
                    isActive ? "text-[#D4A017] pl-2 border-l-2 border-[#D4A017]" : "text-white/80 hover:text-white"
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
              className="text-[#080C14] text-center font-sans font-semibold rounded-full py-3.5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,160,23,0.5)]"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #F0C040 100%)" }}
            >
              Plan My Trip
            </Link>
            <p className="text-[11px] text-white/40 text-center font-mono uppercase tracking-wider">
              Mathura, UP • 089418 81111
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
