"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/data";
import { useIsOpen } from "@/lib/hooks";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { isOpen, statusText } = useIsOpen();

  return (
    <footer className="relative bg-[#080C14] text-white pt-16 pb-8 overflow-hidden border-t border-white/10 mt-auto">
      {/* World Map SVG Outline Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 flex items-center justify-center">
        <svg
          className="w-full h-full min-h-[400px] object-cover scale-110"
          viewBox="0 0 1000 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simplified landmass path loops */}
          <path
            d="M 150,150 C 180,130 200,120 220,130 C 240,140 260,130 280,150 C 300,170 290,190 280,210 C 270,230 250,250 230,260 C 210,270 190,290 170,300 C 150,310 130,280 120,260 C 110,240 100,210 110,190 C 120,170 130,160 150,150 Z"
            fill="white"
          />
          <path
            d="M 380,250 C 400,240 420,220 440,210 C 460,200 480,180 500,190 C 520,200 530,220 540,240 C 550,260 540,290 530,310 C 520,330 500,340 480,330 C 460,320 440,310 420,300 C 400,290 370,270 380,250 Z"
            fill="white"
          />
          <path
            d="M 600,120 C 630,100 660,90 690,100 C 720,110 750,100 780,120 C 810,140 830,170 820,200 C 810,230 790,250 770,270 C 750,290 720,300 690,290 C 660,280 630,260 610,240 C 590,220 570,190 580,160 C 590,140 590,130 600,120 Z"
            fill="white"
          />
          <path
            d="M 750,320 C 770,310 790,320 800,330 C 810,340 800,360 790,370 C 780,380 760,390 740,380 C 720,370 710,350 720,340 C 730,330 740,320 750,320 Z"
            fill="white"
          />
          <path
            d="M 220,320 C 240,310 250,330 260,350 C 270,370 260,390 240,400 C 220,410 200,390 190,370 C 180,350 200,330 220,320 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo, tagline, address, phone */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-black text-white tracking-wide">
                Earth Travels
              </span>
            </Link>
            <p className="font-sans text-[#D4A017] text-xs font-semibold uppercase tracking-wider -mt-2">
              Crafting Journeys The World Remembers
            </p>
            <p className="font-sans text-white/70 text-sm leading-relaxed max-w-xs mt-2">
              Shop No.138, 1st Floor Krishna Plaza, Krishna Market, Mathura, UP 281001
            </p>
            <a
              href="tel:08941881111"
              className="font-mono text-sm font-semibold text-[#D4A017] hover:text-[#F0C040] transition-colors mt-1 block"
            >
              📞 089418 81111
            </a>
          </div>

          {/* Column 2: Explore links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-sans text-sm font-bold tracking-wider uppercase">
              Explore
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-[#D4A017] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-[#D4A017] transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-[#D4A017] transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/itinerary/kashmir" className="hover:text-[#D4A017] transition-colors">
                  Itineraries
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4A017] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support links + JustDial */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-sans text-sm font-bold tracking-wider uppercase">
              Support
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/70 mb-2">
              <li>
                <Link href="/quote" className="hover:text-[#D4A017] transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4A017] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#D4A017] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#D4A017] transition-colors">
                  Terms
                </Link>
              </li>
            </ul>

            <div className="mt-2">
              <span className="inline-block px-3.5 py-1.5 border border-[#D4A017]/40 rounded-lg text-[10px] font-mono font-semibold text-[#D4A017] uppercase tracking-widest bg-[#D4A017]/5">
                Also find us on JustDial
              </span>
            </div>
          </div>

          {/* Column 4: Connect & Hours */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-sans text-sm font-bold tracking-wider uppercase">
                Connect
              </h4>
              <div className="flex items-center gap-3.5 text-lg">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4A017] transition-colors"
                  aria-label="Instagram"
                >
                  📸
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4A017] transition-colors"
                  aria-label="Facebook"
                >
                  👥
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4A017] transition-colors"
                  aria-label="YouTube"
                >
                  📺
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4A017] transition-colors"
                  aria-label="WhatsApp"
                >
                  💬
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
              <span className="text-[11px] text-white/50 font-sans block leading-snug">
                Open Mon–Sat, 10AM – 7:30PM IST
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <span
                  className={`w-2.5 h-2.5 rounded-full inline-block ${
                    isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"
                  }`}
                />
                <span className="font-mono text-xs text-white/80">
                  {statusText}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p className="font-sans">
            &copy; 2025 Earth Travels. All rights reserved.
          </p>
          <p className="font-sans">
            Designed with ♥ by{" "}
            <a
              href="https://glad.studio"
              className="text-[#D4A017] hover:text-[#F0C040] font-semibold transition-colors"
            >
              Glad Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
