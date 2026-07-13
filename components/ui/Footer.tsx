"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/data";
import { useIsOpen } from "@/lib/hooks";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { isOpen, statusText } = useIsOpen();

  return (
    <footer className="relative bg-[#1a120a] text-white pt-16 pb-8 overflow-hidden border-t border-[#1a120a]/10 mt-auto">
      {/* World Map SVG Outline Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 flex items-center justify-center">
        <svg
          className="w-full h-full min-h-[400px] object-cover scale-110"
          viewBox="0 0 1000 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 150,150 C 180,130 200,120 220,130 C 240,140 260,130 280,150 C 300,170 290,190 280,210 C 270,230 250,250 230,260 C 210,270 190,290 170,300 C 150,310 130,280 120,260 C 110,240 100,210 110,190 C 120,170 130,160 150,150 Z" fill="white" />
          <path d="M 380,250 C 400,240 420,220 440,210 C 460,200 480,180 500,190 C 520,200 530,220 540,240 C 550,260 540,290 530,310 C 520,330 500,340 480,330 C 460,320 440,310 420,300 C 400,290 370,270 380,250 Z" fill="white" />
          <path d="M 600,120 C 630,100 660,90 690,100 C 720,110 750,100 780,120 C 810,140 830,170 820,200 C 810,230 790,250 770,270 C 750,290 720,300 690,290 C 660,280 630,260 610,240 C 590,220 570,190 580,160 C 590,140 590,130 600,120 Z" fill="white" />
          <path d="M 750,320 C 770,310 790,320 800,330 C 810,340 800,360 790,370 C 780,380 760,390 740,380 C 720,370 710,350 720,340 C 730,330 740,320 750,320 Z" fill="white" />
          <path d="M 220,320 C 240,310 250,330 260,350 C 270,370 260,390 240,400 C 220,410 200,390 190,370 C 180,350 200,330 220,320 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/images/logo_transparent.png"
                alt="Earth Travels Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="font-display text-2xl font-black text-white tracking-wide">
                Earth Travels
              </span>
            </Link>
            <p className="font-sans text-[#e8a820] text-xs font-semibold uppercase tracking-wider -mt-2">
              Crafting Journeys The World Remembers
            </p>
            <p className="font-sans text-white/70 text-sm leading-relaxed max-w-xs mt-2">
              {SITE_CONFIG.address}
            </p>
            <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`} className="font-mono text-sm font-semibold text-[#e8a820] hover:text-[#f0c040] transition-colors mt-1 block">
              📞 {SITE_CONFIG.phone}
            </a>

          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-sans text-sm font-bold tracking-wider uppercase">Explore</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li><Link href="/" className="hover:text-[#e8a820] transition-colors">Home</Link></li>
              <li><Link href="/destinations" className="hover:text-[#e8a820] transition-colors">Destinations</Link></li>
              <li><Link href="/packages" className="hover:text-[#e8a820] transition-colors">Packages</Link></li>
              <li><Link href="/itinerary/kashmir" className="hover:text-[#e8a820] transition-colors">Itineraries</Link></li>
              <li><Link href="/about" className="hover:text-[#e8a820] transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-sans text-sm font-bold tracking-wider uppercase">Support</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/70 mb-2">
              <li><Link href="/quote" className="hover:text-[#e8a820] transition-colors">Get a Quote</Link></li>
              <li><Link href="/contact" className="hover:text-[#e8a820] transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-[#e8a820] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#e8a820] transition-colors">Terms</Link></li>
            </ul>
            <div className="mt-2">
              <a
                href="https://www.justdial.com/Mathura/Earth-Travels-Krishna-Nagar/9999PX565-X565-130714183018-D3J1_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3.5 py-1.5 border border-[#e8a820]/30 rounded-lg text-[10px] font-mono font-semibold text-[#e8a820] uppercase tracking-widest bg-[#e8a820]/5 hover:bg-[#e8a820]/15 hover:border-[#e8a820]/60 transition-colors"
              >
                Also find us on JustDial
              </a>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-sans text-sm font-bold tracking-wider uppercase">Connect</h4>
              <div className="flex items-center gap-5 text-lg">
                <a href="https://instagram.com/earthtravelsmathura" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#E1306C] transition-colors hover:scale-110" aria-label="Instagram">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://www.facebook.com/share/1983aNQbfY/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#1877F2] transition-colors hover:scale-110" aria-label="Facebook">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#FF0000] transition-colors hover:scale-110" aria-label="YouTube">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#25D366] transition-colors hover:scale-110" aria-label="WhatsApp">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.489.002 9.961-4.467 9.964-9.948.002-2.654-1.03-5.15-2.906-7.029C16.45 1.748 13.957.718 11.31.718c-5.49 0-9.966 4.469-9.969 9.95-.001 1.905.517 3.5 1.498 5.1l-.989 3.613 3.707-.977zm12.39-7.12c-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.174.2-.298.3-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                </a>
              </div>


              {/* Instagram accounts */}
              <div className="flex flex-col gap-2 pt-1">
                <a
                  href="https://instagram.com/niteshkhandelwal8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group"
                  aria-label="Instagram @niteshkhandelwal8"
                >
                  <svg className="w-4 h-4 fill-current text-white/50 group-hover:text-[#E1306C] transition-colors shrink-0" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  <span className="font-mono text-xs text-white/60 group-hover:text-[#e8a820] transition-colors">@niteshkhandelwal8</span>
                </a>
                <a
                  href="https://instagram.com/earthtravelsmathura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group"
                  aria-label="Instagram @earthtravelsmathura"
                >
                  <svg className="w-4 h-4 fill-current text-white/50 group-hover:text-[#E1306C] transition-colors shrink-0" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  <span className="font-mono text-xs text-white/60 group-hover:text-[#e8a820] transition-colors">@earthtravelsmathura</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
              <span className="text-[11px] text-white/50 font-sans block leading-snug">
                Open Mon–Sat, 10AM – 7:30PM IST
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className={`w-2.5 h-2.5 rounded-full inline-block ${isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
                <span className="font-mono text-xs text-white/80">{statusText}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p className="font-sans">&copy; {currentYear} Earth Travels. All rights reserved.</p>
          <p className="font-sans">
            Designed with ♥ by{" "}
            <a href="https://gladstudio.net" target="_blank" rel="noopener noreferrer" className="text-[#e8a820] hover:text-[#f0c040] font-semibold transition-colors">Glad Studio</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
