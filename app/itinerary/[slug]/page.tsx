"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { gsap } from "gsap";
import { GlassCard } from "@/components/ui";
import { ITINERARIES } from "@/lib/data/itineraries";
import { PACKAGES } from "@/lib/data/packages";

export default function ItineraryPage() {
  const { slug } = useParams();
  const slugStr = Array.isArray(slug) ? slug[0] : slug ?? "";

  const itinerary = ITINERARIES[slugStr];

  // Booking Widget Form states
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState("twin");
  const [totalPrice, setTotalPrice] = useState(0);

  // Active Day Scrollspy state
  const [activeDay, setActiveDay] = useState(1);

  // Animation timeline for Hero titles
  useEffect(() => {
    gsap.fromTo(
      ".hero-slide-up",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
    );
  }, [slugStr]);

  // Date offsets handler
  const handleDepartureChange = (val: string) => {
    setDepartureDate(val);
    if (val && itinerary) {
      const d = new Date(val);
      d.setDate(d.getDate() + itinerary.days.length - 1);
      setReturnDate(d.toISOString().split("T")[0]);
    }
  };

  // Price calculations
  useEffect(() => {
    if (!itinerary) return;
    const baseCost = itinerary.basePrice;
    const childCost = Math.round(baseCost * 0.65);
    const supplement = roomType === "single" ? 8000 : 0;
    const calc = adults * baseCost + children * childCost + supplement;
    setTotalPrice(calc);
  }, [adults, children, roomType, itinerary]);

  // Scrollspy observer for active days
  useEffect(() => {
    if (!itinerary) return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const indexStr = entry.target.getAttribute("data-day");
          if (indexStr) {
            setActiveDay(parseInt(indexStr, 10));
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll(".day-scroll-section");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [slugStr, itinerary]);

  const handleScrollToDay = (dayNum: number) => {
    const element = document.getElementById(`day-section-${dayNum}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Return branded placeholder if no itinerary data exists for this slug
  if (!itinerary) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-charcoal p-6">
        <div className="text-center max-w-md">
          <span className="text-7xl mb-6 block select-none">🏔️</span>
          <span className="glass px-4 py-1.5 rounded-full border border-[#D4A017]/35 text-[#D4A017] font-mono text-[10px] tracking-wider uppercase bg-[#D4A017]/5 font-semibold mb-4 inline-block">
            Coming Soon
          </span>
          <h2 className="font-display text-4xl font-bold text-charcoal my-4">
            Itinerary in Crafting
          </h2>
          <p className="font-sans text-sm text-charcoal/50 mb-8 leading-relaxed">
            Our travel experts are carefully crafting this signature journey. Check back soon or contact us for a custom plan.
          </p>
          <div className="flex items-center gap-4 justify-center flex-wrap">
            <Link
              href="/destinations"
              className="inline-block text-midnight text-xs font-mono font-bold uppercase rounded-full px-6 py-2.5"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #F0C040 100%)" }}
            >
              Browse Destinations
            </Link>
            <Link
              href="/contact"
              className="inline-block text-charcoal/70 hover:text-charcoal text-xs font-mono font-bold uppercase rounded-full px-6 py-2.5 border border-charcoal/10 hover:border-charcoal/30 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Related packages — exclude current destination
  const relatedPackages = PACKAGES.filter(
    (p) => p.destinationId !== slugStr
  ).slice(0, 3);

  const whatsAppLink = `https://wa.me/918941881111?text=${encodeURIComponent(
    `Hi, I'm interested in the ${itinerary.title} package for ${adults} adults departing ${departureDate || "soon"}.`
  )}`;

  const nightsCount = itinerary.days.length - 1;

  return (
    <div className="bg-background min-h-screen text-charcoal select-none">
      <title>{itinerary.title} — {itinerary.duration} | Earth Travels</title>
      <meta
        name="description"
        content={`Day-by-day ${itinerary.title} itinerary by Earth Travels Mathura. Expert-curated ${itinerary.duration} package.`}
      />

      {/* Dynamic Viewport Hero */}
      <section
        className="relative h-[95vh] w-full bg-cover bg-center flex flex-col justify-end pb-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8,12,20,0.3) 0%, rgba(8,12,20,0.85) 100%), url('${itinerary.heroImage}')`,
        }}
      >
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-6">
          <div className="self-start glass px-4 py-1.5 rounded-full border border-[#D4A017]/35 text-[#D4A017] font-mono text-[10px] tracking-wider uppercase bg-[#D4A017]/5 font-semibold">
            ITINERARY · {itinerary.destination.toUpperCase()}
          </div>

          <div>
            <h1 className="hero-slide-up font-display text-4xl md:text-[80px] font-normal italic text-charcoal leading-none mb-2">
              {itinerary.tagline}
            </h1>
            <h2 className="hero-slide-up font-display text-2xl md:text-[48px] font-bold text-charcoal/90 leading-none">
              {itinerary.title}
            </h2>
          </div>

          {/* Quick-Info Glass Bar */}
          <div className="hero-slide-up glass p-5 rounded-2xl border border-charcoal/10 max-w-4xl mt-4 bg-background/50 backdrop-blur-md">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center md:divide-x divide-charcoal/10 select-none">
              <div className="flex flex-col gap-1">
                <span className="text-charcoal/40 font-sans text-[10px] uppercase">Duration</span>
                <span className="text-xs md:text-sm font-semibold font-mono text-charcoal">{itinerary.duration}</span>
              </div>
              <div className="flex flex-col gap-1 pt-2 md:pt-0">
                <span className="text-charcoal/40 font-sans text-[10px] uppercase">Origin</span>
                <span className="text-xs md:text-sm font-semibold font-mono text-charcoal">Mathura / Delhi</span>
              </div>
              <div className="flex flex-col gap-1 pt-2 md:pt-0">
                <span className="text-charcoal/40 font-sans text-[10px] uppercase">Group Size</span>
                <span className="text-xs md:text-sm font-semibold font-mono text-charcoal">Max 20 People</span>
              </div>
              <div className="flex flex-col gap-1 pt-2 md:pt-0">
                <span className="text-charcoal/40 font-sans text-[10px] uppercase">Meals</span>
                <span className="text-xs md:text-sm font-semibold font-mono text-charcoal">Breakfast + Dinner</span>
              </div>
              <div className="flex flex-col gap-1 pt-2 md:pt-0">
                <span className="text-charcoal/40 font-sans text-[10px] uppercase">Starting at</span>
                <span className="text-xs md:text-sm font-semibold font-mono text-[#D4A017]">
                  ₹{itinerary.basePrice.toLocaleString("en-IN")}/person
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Day Progress Bar */}
      <div className="sticky top-[72px] z-30 w-full bg-background/90 backdrop-blur-[24px] border-b border-charcoal/5 py-3 px-6 text-center lg:hidden select-none">
        <span className="font-mono text-xs font-bold text-[#D4A017] uppercase tracking-widest">
          📅 Day {activeDay} of {itinerary.days.length} — {itinerary.days[activeDay - 1]?.title}
        </span>
      </div>

      {/* Main Layout Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* LEFT: day-progress scrollspy sidebar */}
          <aside className="hidden lg:block w-40 shrink-0 sticky top-28 self-start">
            <h4 className="font-mono text-[10px] text-charcoal/40 uppercase tracking-[0.2em] mb-5 font-bold">
              Progress Map
            </h4>
            <div className="flex flex-col gap-3 relative">
              <div className="absolute left-[9px] top-3 bottom-3 w-[1.5px] bg-white/10" />
              {itinerary.days.map((day) => {
                const isActive = day.dayNumber === activeDay;
                return (
                  <button
                    key={day.dayNumber}
                    onClick={() => handleScrollToDay(day.dayNumber)}
                    className="flex items-center gap-4 text-left group transition-all"
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[9px] font-bold border transition-all z-10 ${
                        isActive
                          ? "bg-[#D4A017] text-[#080C14] border-transparent scale-110 shadow-lg shadow-gold/20"
                          : "bg-background border-charcoal/20 text-charcoal/50 group-hover:border-charcoal/50"
                      }`}
                    >
                      {day.dayNumber}
                    </span>
                    <span
                      className={`text-xs font-sans transition-colors duration-300 ${
                        isActive ? "text-[#D4A017] font-bold" : "text-charcoal/50 group-hover:text-charcoal"
                      }`}
                    >
                      Day {day.dayNumber}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* MIDDLE: Day Content rows */}
          <div className="flex-grow w-full lg:max-w-[700px] flex flex-col gap-2">

            {itinerary.days.map((day) => (
              <div
                key={day.dayNumber}
                id={`day-section-${day.dayNumber}`}
                data-day={day.dayNumber}
                className="day-scroll-section relative pt-20 pb-10 border-b border-charcoal/6 overflow-hidden flex flex-col gap-6"
              >
                {/* Day number watermark */}
                <div className="absolute top-8 left-[-10px] pointer-events-none select-none opacity-[0.04] z-0">
                  <span className="font-mono text-[120px] font-black leading-none text-charcoal">
                    DAY {String(day.dayNumber).padStart(2, "0")}
                  </span>
                </div>

                {/* Day title & tag */}
                <div className="relative z-10 pl-4 border-l-2 border-[#D4A017] mt-4 flex flex-col items-start gap-1">
                  <span className="glass px-2.5 py-0.5 rounded-full border border-[#D4A017]/30 text-[#D4A017] font-mono text-[9px] tracking-wider uppercase bg-[#D4A017]/5 font-semibold">
                    {day.tag}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-normal text-charcoal mt-1 leading-tight">
                    Day {day.dayNumber} — {day.title}
                  </h3>
                </div>

                {/* Tagline */}
                <p className="font-sans text-sm text-charcoal/70 italic max-w-xl pl-4 relative z-10">
                  {day.tagline}
                </p>

                {/* Activities grid */}
                <div className="relative z-10 pl-4 flex flex-col gap-4 mt-2">
                  {day.activities.map((act, index) => (
                    <GlassCard
                      key={index}
                      hover={false}
                      className="p-4 bg-white/5 border border-charcoal/5 hover:border-charcoal/10 rounded-xl flex items-start gap-4 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#D4A017]/10 border border-[#D4A017]/30 text-lg shrink-0 select-none shadow shadow-gold/5">
                        {act.icon}
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-sans text-[15px] font-semibold text-charcoal leading-tight mb-1">
                          {act.title}
                        </h4>
                        <p className="font-sans text-xs text-charcoal/60 leading-relaxed">
                          {act.description}
                        </p>
                      </div>
                    </GlassCard>
                  ))}
                </div>

                {/* Local tip callout */}
                <div className="relative z-10 pl-4 mt-2">
                  <div className="p-4 border-l border-[#D4A017] bg-background/60 backdrop-blur-md rounded-r-xl border-y border-r border-charcoal/5 bg-gold/5">
                    <p className="font-sans text-xs leading-relaxed text-charcoal/80">
                      <span className="font-mono text-[#D4A017] font-bold mr-1.5 uppercase tracking-wide">
                        💡 Local Tip:
                      </span>
                      {day.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Inclusions & Exclusions Card */}
            <div className="pt-16">
              <h3 className="font-display text-2xl font-bold mb-6 pl-4 border-l-2 border-[#D4A017]">
                Inclusions &amp; Exclusions
              </h3>
              <GlassCard hover={false} className="p-6 md:p-8 bg-background/40 border border-charcoal/10 rounded-[20px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-sans text-sm font-bold text-emerald-400 mb-4 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs flex items-center justify-center">✓</span>
                      What&apos;s Included
                    </h4>
                    <ul className="flex flex-col gap-3 text-xs md:text-sm text-charcoal/80">
                      <li>• {nightsCount} Nights handpicked hotel stays</li>
                      <li>• All transfers &amp; sightseeing as per itinerary</li>
                      <li>• Daily breakfast + dinner in all properties</li>
                      <li>• All state permit taxes, driver allowances</li>
                      <li>• 24/7 client coordination support desk</li>
                      <li>• Pre-booked entry tickets as per itinerary</li>
                    </ul>
                  </div>
                  <div className="border-t md:border-t-0 md:border-l border-charcoal/5 pt-8 md:pt-0 md:pl-8">
                    <h4 className="font-sans text-sm font-bold text-rose-400 mb-4 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs flex items-center justify-center">✗</span>
                      What&apos;s Excluded
                    </h4>
                    <ul className="flex flex-col gap-3 text-xs md:text-sm text-charcoal/60">
                      <li>• Flights (unless specified in package)</li>
                      <li>• Lunch &amp; beverages not specified in meals</li>
                      <li>• Travel insurance (available as add-on)</li>
                      <li>• Optional extreme adventure activities</li>
                      <li>• Tips, personal laundry, telephone bills</li>
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Handpicked Accommodations Section */}
            <div className="pt-16">
              <h3 className="font-display text-2xl font-bold mb-6 pl-4 border-l-2 border-[#D4A017]">
                Handpicked Stays
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {itinerary.hotels.map((hotel, idx) => (
                  <GlassCard
                    key={idx}
                    hover={true}
                    className="p-0 overflow-hidden bg-background/35 border border-charcoal/10 hover:border-[#D4A017]/30 transition-all duration-300 rounded-2xl flex flex-col justify-between group"
                  >
                    <div className="h-40 w-full overflow-hidden relative">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between text-[#D4A017] text-xs mb-1 select-none font-semibold">
                        <span>{hotel.rating}</span>
                        <span className="text-charcoal/40 text-[9px] font-mono tracking-wider uppercase">
                          {hotel.type}
                        </span>
                      </div>
                      <h4 className="font-sans text-sm font-bold text-charcoal leading-tight mb-1">
                        {hotel.name}
                      </h4>
                      <p className="font-sans text-[11px] text-charcoal/50">
                        📍 {hotel.location}
                      </p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Booking Widget Column */}
          <aside className="w-full lg:w-80 shrink-0 sticky top-28 self-start mt-12 lg:mt-0">
            <GlassCard hover={false} className="p-6 md:p-8 bg-background/80 border border-charcoal/10 shadow-2xl rounded-[20px] select-none">
              <h3 className="font-display text-xl font-bold text-charcoal mb-6 border-b border-charcoal/5 pb-4">
                Book This Package
              </h3>

              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">

                {/* Departure date */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">
                    Departure Date
                  </label>
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => handleDepartureChange(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full bg-white/5 border border-charcoal/10 rounded-xl px-4 py-2.5 text-xs text-charcoal focus:outline-none focus:border-[#D4A017] font-sans animate-none"
                    required
                  />
                </div>

                {/* Return date */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">
                    Return Date ({itinerary.duration})
                  </label>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    min={departureDate || new Date().toISOString().split("T")[0]}
                    className="w-full bg-white/5 border border-charcoal/10 rounded-xl px-4 py-2.5 text-xs text-charcoal focus:outline-none focus:border-[#D4A017] font-sans animate-none"
                    required
                  />
                </div>

                {/* Adults / Children Stepper */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">Adults</label>
                    <div className="flex items-center justify-between bg-white/5 border border-charcoal/10 rounded-xl px-2 py-1 h-[40px]">
                      <button type="button" onClick={() => setAdults((prev) => Math.max(1, prev - 1))} className="w-6 h-6 rounded flex items-center justify-center hover:bg-white/10 text-charcoal font-mono font-bold">-</button>
                      <span className="font-mono text-xs font-semibold text-charcoal/80">{adults}</span>
                      <button type="button" onClick={() => setAdults((prev) => prev + 1)} className="w-6 h-6 rounded flex items-center justify-center hover:bg-white/10 text-charcoal font-mono font-bold">+</button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">Children</label>
                    <div className="flex items-center justify-between bg-white/5 border border-charcoal/10 rounded-xl px-2 py-1 h-[40px]">
                      <button type="button" onClick={() => setChildren((prev) => Math.max(0, prev - 1))} className="w-6 h-6 rounded flex items-center justify-center hover:bg-white/10 text-charcoal font-mono font-bold">-</button>
                      <span className="font-mono text-xs font-semibold text-charcoal/80">{children}</span>
                      <button type="button" onClick={() => setChildren((prev) => prev + 1)} className="w-6 h-6 rounded flex items-center justify-center hover:bg-white/10 text-charcoal font-mono font-bold">+</button>
                    </div>
                  </div>
                </div>

                {/* Room Standards */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">Sharing Class</label>
                  <div className="flex flex-col gap-2.5 mt-1 pl-1">
                    {[
                      { value: "twin", label: "Twin Sharing stay" },
                      { value: "double", label: "Double Room stay" },
                      { value: "single", label: "Single Supplement (+₹8,000)" },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-2.5 text-xs text-charcoal/70 hover:text-charcoal cursor-pointer select-none">
                        <input type="radio" name="room" checked={roomType === option.value} onChange={() => setRoomType(option.value)} className="sr-only" />
                        <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${roomType === option.value ? "border-[#D4A017] bg-[#D4A017]" : "border-charcoal/20"}`}>
                          {roomType === option.value && <span className="w-1.5 h-1.5 rounded-full bg-background" />}
                        </span>
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="pt-4 border-t border-charcoal/5 flex flex-col gap-2.5 text-xs text-charcoal/50 font-sans">
                  <div className="flex justify-between">
                    <span>Base Fare (Adults × {adults})</span>
                    <span>₹{(itinerary.basePrice * adults).toLocaleString("en-IN")}</span>
                  </div>
                  {children > 0 && (
                    <div className="flex justify-between">
                      <span>Child Discount (× {children})</span>
                      <span>₹{(Math.round(itinerary.basePrice * 0.65) * children).toLocaleString("en-IN")}</span>
                    </div>
                  )}
                  {roomType === "single" && (
                    <div className="flex justify-between">
                      <span>Single Supplement</span>
                      <span>+₹8,000</span>
                    </div>
                  )}
                  <div className="pt-3 border-t border-charcoal/5 flex items-baseline justify-between">
                    <span className="text-charcoal font-semibold">Total Cost</span>
                    <span className="font-mono text-2xl font-black text-[#D4A017]">
                      ₹{totalPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* Request Booking */}
                <Link
                  href={`/quote?destination=${slugStr}&adults=${adults}&children=${children}&date=${departureDate}`}
                  className="gold-pulse-btn font-sans text-center text-xs font-bold py-3.5 mt-2 text-midnight rounded-full select-none"
                  style={{ background: "linear-gradient(135deg, #D4A017 0%, #F0C040 100%)" }}
                >
                  Request Booking
                </Link>

                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center font-sans text-xs text-charcoal/50 hover:text-charcoal transition-colors block underline underline-offset-4 mt-1"
                >
                  or WhatsApp us →
                </a>

              </form>
            </GlassCard>
          </aside>

        </div>

        {/* RELATED PACKAGES SECTION */}
        <div className="pt-24 border-t border-charcoal/5 mt-20">
          <h3 className="font-display text-3xl font-normal text-charcoal mb-10 pl-4 border-l-2 border-[#D4A017]">
            You Might Also Love
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPackages.map((pkg, idx) => (
              <GlassCard
                key={idx}
                hover={true}
                className="p-0 overflow-hidden bg-background/35 border border-charcoal/10 group rounded-2xl flex flex-col justify-between"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 to-transparent" />
                  <span className="absolute bottom-3 right-3 z-10 bg-background/80 border border-charcoal/10 text-charcoal font-mono text-[9px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                    ⏱ {pkg.duration.nights}N/{pkg.duration.days}D
                  </span>
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-mono text-[#F0C040] uppercase tracking-widest block mb-1 font-semibold">
                      {pkg.destination}
                    </span>
                    <h4 className="font-sans text-base font-bold text-charcoal mb-4 line-clamp-1 group-hover:text-[#D4A017] transition-colors leading-tight">
                      {pkg.name}
                    </h4>
                  </div>

                  <div className="pt-3 border-t border-charcoal/5 flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-[9px] text-charcoal/40 block font-sans uppercase">Starting at</span>
                      <span className="font-mono text-sm font-bold text-[#D4A017]">
                        ₹{pkg.pricePerPerson.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <Link
                      href={pkg.itineraryPage}
                      className="text-charcoal text-xs font-mono group-hover:text-[#D4A017] flex items-center gap-0.5"
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

      </section>

      {/* Styled JSX for widget booking pulse */}
      <style jsx global>{`
        @keyframes booking-pulse {
          0% { box-shadow: 0 0 0px rgba(212,160,23,0); }
          50% { box-shadow: 0 0 16px rgba(212,160,23,0.5); }
          100% { box-shadow: 0 0 0px rgba(212,160,23,0); }
        }
        .gold-pulse-btn {
          animation: booking-pulse 1.5s infinite;
        }
      `}</style>

    </div>
  );
}
