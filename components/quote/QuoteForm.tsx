"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { GlassCard } from "@/components/ui";
import { useIsOpen } from "@/lib/hooks";

import { DESTINATIONS as DESTINATIONS_DATA } from "@/lib/data/destinations";

const DESTINATIONS = DESTINATIONS_DATA.map((d) => d.name);

const BUDGET_TIERS = [
  { id: "economy", name: "Economy", icon: "🎒", range: "₹15k–₹30k", desc: "Comfortable guest houses, public transits" },
  { id: "standard", name: "Standard", icon: "🏨", range: "₹30k–₹60k", desc: "3★-4★ boutique hotels, private transfers" },
  { id: "luxury", name: "Luxury", icon: "✨", range: "₹60k–₹1.2L", desc: "Premium stays, helicopter tours" },
  { id: "ultra", name: "Ultra Luxury", icon: "👑", range: "₹1.2L+", desc: "5★ heritage properties, custom routes" },
];

const TRAVEL_TYPES = [
  { id: "family", name: "Family", icon: "👨‍👩‍👧‍👦" },
  { id: "honeymoon", name: "Honeymoon", icon: "💖" },
  { id: "solo", name: "Solo", icon: "🧭" },
  { id: "group", name: "Group", icon: "🤝" },
  { id: "corporate", name: "Corporate", icon: "💼" },
];

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const stepContainerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  
  const { isOpen } = useIsOpen();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [departureCity, setDepartureCity] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [duration, setDuration] = useState("6–7 days");

  const [budgetTier, setBudgetTier] = useState("standard");
  const [travelType, setTravelType] = useState("family");
  const [specialRequests, setSpecialRequests] = useState("");

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [callbackTime, setCallbackTime] = useState("Afternoon (12–3 PM)");

  // 1. GSAP Step Transitions
  const handleTransition = (nextStep: number) => {
    if (!stepContainerRef.current) return;
    
    // Slide out left
    gsap.to(stepContainerRef.current, {
      x: -60,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setStep(nextStep);
        // Slide in from right
        gsap.fromTo(
          stepContainerRef.current,
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
        );
      },
    });
  };

  // 2. Animate progress connector line
  useEffect(() => {
    if (progressLineRef.current) {
      const widthMap = step === 1 ? "0%" : step === 2 ? "50%" : "100%";
      gsap.to(progressLineRef.current, {
        width: widthMap,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [step]);

  const handleToggleDestination = (dest: string) => {
    setSelectedDestinations((prev) =>
      prev.includes(dest) ? prev.filter((d) => d !== dest) : [...prev, dest]
    );
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalData = {
      formType: "Custom Quote Planner",
      name: fullName,
      phone: `+91 ${phone}`,
      email,
      meta: {
        selectedDestinations: selectedDestinations.join(", "),
        departureCity: departureCity || "Mathura",
        dateFrom,
        dateTo,
        duration,
        budgetTier,
        travelType,
        specialRequests,
        callbackTime,
      }
    };
    console.log("Earth Travels - Custom Tour Quote Request:", finalData);
    setIsSubmitted(true);

    const sheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
    if (sheetsUrl) {
      try {
        await fetch(sheetsUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalData),
        });
      } catch (err) {
        console.error("Error submitting to Google Sheets:", err);
      }
    }
  };


  const whatsAppLink = `https://wa.me/918941881111?text=${encodeURIComponent(
    `Hi, I'm interested in booking a custom tour for ${travelType} trip to ${selectedDestinations.join(
      ", "
    )} departing from ${departureCity || "Mathura"} around ${dateFrom || "soon"}.`
  )}`;

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-background text-charcoal">
      <title>Request a Custom Quote — Plan My Trip | Earth Travels</title>
      <meta name="description" content="Design custom travel itineraries using our multi-step planner. Budget ranges, travel style tags, and direct consultations from Mathura." />
      
      {/* LEFT PANEL: Branding & Badge details (desktop only) */}
      <div
        className="quote-hero hidden lg:flex flex-col justify-between p-16 relative bg-cover bg-center overflow-hidden border-r border-charcoal/5"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8,12,20,0.4) 0%, rgba(8,12,20,0.85) 100%), url('https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-background/30 pointer-events-none z-0" />

        {/* Brand wordmark logo */}
        <Link href="/" className="relative z-10 block self-start">
          <span className="font-display text-2xl font-black text-charcoal tracking-wide">
            Earth Travels
          </span>
        </Link>

        {/* Center Quote */}
        <div className="relative z-10 max-w-sm flex flex-col gap-3 my-auto">
          <blockquote className="font-display text-3xl font-light italic leading-tight text-charcoal">
            &ldquo;Every journey begins with a single decision.&rdquo;
          </blockquote>
          <cite className="font-mono text-xs text-[#D4A017] uppercase tracking-widest font-semibold not-italic">
            — Earth Travels
          </cite>
        </div>

        {/* Bottom Trust Badges */}
        <div className="relative z-10 flex flex-col gap-3.5 select-none max-w-sm">
          <div className="glass px-4 py-2 border border-charcoal/10 rounded-full text-xs font-sans text-charcoal/80 bg-white/5 flex items-center gap-2">
            <span className="text-[#D4A017]">💳</span>
            <span>No advance payment to get a quote</span>
          </div>
          <div className="glass px-4 py-2 border border-charcoal/10 rounded-full text-xs font-sans text-charcoal/80 bg-white/5 flex items-center gap-2">
            <span className="text-[#D4A017]">⏱</span>
            <span>Expert consultant assigned within 2 hours</span>
          </div>
          <div className="glass px-4 py-2 border border-charcoal/10 rounded-full text-xs font-sans text-charcoal/80 bg-white/5 flex items-center gap-2">
            <span className="text-[#D4A017]">👨‍👩‍👧‍👦</span>
            <span>Trusted by 127+ families from Mathura</span>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: Form inputs */}
      <div className="bg-surface p-6 md:p-12 lg:p-16 flex flex-col justify-center overflow-y-auto">
        <div className="max-w-xl mx-auto w-full">
          
          {/* Step Indicator Header */}
          <div className="relative flex justify-between items-center mb-12 max-w-xs mx-auto z-10 select-none">
            {/* Connecting background line */}
            <div className="absolute top-[18px] left-[10%] right-[10%] h-[2px] bg-white/10 z-0">
              <div ref={progressLineRef} className="h-full bg-[#D4A017] w-0" />
            </div>

            {[1, 2, 3].map((num) => {
              const isCurrent = step === num;
              const isCompleted = step > num;
              return (
                <div key={num} className="flex flex-col items-center gap-2 relative z-10">
                  <button
                    type="button"
                    onClick={() => {
                      if (num < step) handleTransition(num);
                    }}
                    disabled={num >= step}
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold border transition-all duration-300 ${
                      isCompleted
                        ? "bg-[#D4A017] text-midnight border-transparent font-bold cursor-pointer"
                        : isCurrent
                        ? "border-[#D4A017] bg-[#D4A017] text-midnight font-bold"
                        : "border-charcoal/20 bg-background text-charcoal/40 cursor-not-allowed"
                    }`}
                  >
                    {isCompleted ? "✓" : num}
                  </button>
                  <span className="hidden md:block text-[10px] font-sans text-charcoal/40 uppercase tracking-wider text-center absolute top-10 whitespace-nowrap">
                    {num === 1 ? "Journey Details" : num === 2 ? "Travel Style" : "Contact Info"}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Form Content Panel */}
          {!isSubmitted ? (
            <div ref={stepContainerRef} className="mt-8 transition-transform duration-300">
              
              {/* STEP 1: Journey Details */}
              {step === 1 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-2">
                      Journey Details
                    </h2>
                    <p className="text-xs text-charcoal/50 font-sans">
                      Select where you want to travel and configure details.
                    </p>
                  </div>

                  {/* Multi-select Pills */}
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">
                      Where do you want to go?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {DESTINATIONS.map((dest) => {
                        const isSelected = selectedDestinations.includes(dest);
                        return (
                          <button
                            key={dest}
                            type="button"
                            onClick={() => handleToggleDestination(dest)}
                            className={`px-4 py-2 rounded-full text-xs font-sans font-semibold border transition-all duration-300 cursor-pointer ${
                              isSelected
                                ? "bg-[#D4A017] text-midnight border-transparent font-bold shadow shadow-gold/25"
                                : "bg-white/5 border-charcoal/10 text-charcoal/70 hover:border-charcoal/30"
                            }`}
                          >
                            {dest}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Departure city */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">
                      Departure City
                    </label>
                    <input
                      type="text"
                      value={departureCity}
                      onChange={(e) => setDepartureCity(e.target.value)}
                      placeholder="e.g. Mathura, Agra, Delhi..."
                      className="w-full bg-white/5 border border-charcoal/10 rounded-xl px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-[#D4A017] focus:ring-3 focus:ring-[#D4A017]/15 font-sans h-[46px]"
                      required
                    />
                  </div>

                  {/* Date ranges */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">
                        From
                      </label>
                      <input
                        type="date"
                        value={dateFrom}
                        onChange={(e) => setDateFrom(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full bg-white/5 border border-charcoal/10 rounded-xl px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-[#D4A017] focus:ring-3 focus:ring-[#D4A017]/15 font-sans h-[46px] animate-none"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">
                        To
                      </label>
                      <input
                        type="date"
                        value={dateTo}
                        onChange={(e) => setDateTo(e.target.value)}
                        min={dateFrom || new Date().toISOString().split("T")[0]}
                        className="w-full bg-white/5 border border-charcoal/10 rounded-xl px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-[#D4A017] focus:ring-3 focus:ring-[#D4A017]/15 font-sans h-[46px] animate-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Trip Duration */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">
                      Trip Duration
                    </label>
                    <div className="relative">
                      <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full bg-white/5 border border-charcoal/10 rounded-xl px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-[#D4A017]/50 appearance-none font-sans h-[46px]"
                      >
                        <option value="4–5 days" className="bg-background">4 – 5 Days</option>
                        <option value="6–7 days" className="bg-background">6 – 7 Days</option>
                        <option value="8–10 days" className="bg-background">8 – 10 Days</option>
                        <option value="10–14 days" className="bg-background">10 – 14 Days</option>
                        <option value="15+ days" className="bg-background">15+ Days</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal/40 text-xs">
                        ▼
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleTransition(2)}
                    disabled={selectedDestinations.length === 0 || !departureCity || !dateFrom || !dateTo}
                    className="w-full font-sans text-xs font-bold py-3.5 mt-4 text-midnight rounded-full hover:shadow-[0_0_15px_rgba(212,160,23,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                    style={{
                      background: "linear-gradient(135deg, #D4A017 0%, #F0C040 100%)",
                    }}
                  >
                    Next Step →
                  </button>
                </div>
              )}

              {/* STEP 2: Travel Style */}
              {step === 2 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-2">
                      Travel Style
                    </h2>
                    <p className="text-xs text-charcoal/50 font-sans">
                      Select your target budget tier and describe any custom requests.
                    </p>
                  </div>

                  {/* 2x2 Budget Grid */}
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">
                      Budget per Person
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {BUDGET_TIERS.map((tier) => {
                        const isSelected = budgetTier === tier.id;
                        return (
                          <GlassCard
                            key={tier.id}
                            hover={false}
                            onClick={() => setBudgetTier(tier.id)}
                            className={`p-4 rounded-xl cursor-pointer text-left transition-all border ${
                              isSelected
                                ? "bg-[#D4A017]/10 border-[#D4A017] shadow-lg shadow-[#D4A017]/15"
                                : "bg-white/5 border-charcoal/10 hover:border-charcoal/20"
                            }`}
                          >
                            <span className="text-xl mb-1.5 block select-none">{tier.icon}</span>
                            <h4 className="font-sans text-xs font-bold text-charcoal mb-0.5 leading-tight">
                              {tier.name}
                            </h4>
                            <span className="font-mono text-[10px] text-[#D4A017] block font-semibold mb-1">
                              {tier.range}
                            </span>
                            <p className="font-sans text-[10px] text-charcoal/40 leading-snug">
                              {tier.desc}
                            </p>
                          </GlassCard>
                        );
                      })}
                    </div>
                  </div>

                  {/* Who's travelling */}
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">
                      Who&apos;s travelling?
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {TRAVEL_TYPES.map((type) => {
                        const isSelected = travelType === type.id;
                        return (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setTravelType(type.id)}
                            className={`px-4 py-2.5 rounded-full text-xs font-sans font-semibold border transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                              isSelected
                                ? "bg-[#D4A017] text-midnight border-transparent font-bold"
                                : "bg-white/5 border-charcoal/10 text-charcoal/70 hover:border-charcoal/30"
                            }`}
                          >
                            <span>{type.icon}</span>
                            <span>{type.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Special requests */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">
                      Special requests or must-haves
                    </label>
                    <textarea
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="e.g. vegetarian meals, wheelchair access, anniversary surprise, specific hotel..."
                      rows={4}
                      className="w-full bg-white/5 border border-charcoal/10 rounded-xl px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-[#D4A017] font-sans resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <button
                      type="button"
                      onClick={() => handleTransition(1)}
                      className="btn-outline font-sans text-center text-xs font-semibold py-3.5 border border-charcoal/10 hover:border-[#D4A017]/30 flex items-center justify-center cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => handleTransition(3)}
                      className="font-sans text-center text-xs font-bold py-3.5 text-midnight rounded-full hover:shadow-[0_0_15px_rgba(212,160,23,0.3)] transition-all duration-300 flex items-center justify-center cursor-pointer"
                      style={{
                        background: "linear-gradient(135deg, #D4A017 0%, #F0C040 100%)",
                      }}
                    >
                      Next Step →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact Info */}
              {step === 3 && (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-2">
                      Contact Info
                    </h2>
                    <p className="text-xs text-charcoal/50 font-sans">
                      Leave your details so we can assign an advisor from Mathura to prepare your plan.
                    </p>
                  </div>

                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rakesh Jain"
                      className="w-full bg-white/5 border border-charcoal/10 rounded-xl px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-[#D4A017] focus:ring-3 focus:ring-[#D4A017]/15 font-sans h-[46px]"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">
                      WhatsApp Number
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40 font-mono text-sm">
                        +91
                      </span>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                        placeholder="XXXXX XXXXX"
                        className="w-full bg-white/5 border border-charcoal/10 rounded-xl pl-14 pr-4 py-3 text-xs text-charcoal focus:outline-none focus:border-[#D4A017] focus:ring-3 focus:ring-[#D4A017]/15 font-mono h-[46px]"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full bg-white/5 border border-charcoal/10 rounded-xl px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-[#D4A017] focus:ring-3 focus:ring-[#D4A017]/15 font-sans h-[46px]"
                      required
                    />
                  </div>

                  {/* Callback time */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">
                      Best time to call
                    </label>
                    <div className="relative">
                      <select
                        value={callbackTime}
                        onChange={(e) => setCallbackTime(e.target.value)}
                        className="w-full bg-white/5 border border-charcoal/10 rounded-xl px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-[#D4A017]/50 appearance-none font-sans h-[46px]"
                      >
                        <option value="Morning (9–11 AM)" className="bg-background">Morning (9–11 AM)</option>
                        <option value="Afternoon (12–3 PM)" className="bg-background">Afternoon (12–3 PM)</option>
                        <option value="Evening (4–7 PM)" className="bg-background">Evening (4–7 PM)</option>
                        <option value="Anytime" className="bg-background">Anytime</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal/40 text-xs">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col gap-4 mt-2">
                    <button
                      type="submit"
                      disabled={!fullName || !phone || !email}
                      className="gold-pulse-btn w-full font-sans text-xs font-bold py-3.5 text-midnight rounded-full hover:shadow-[0_0_15px_rgba(212,160,23,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                      style={{
                        background: "linear-gradient(135deg, #D4A017 0%, #F0C040 100%)",
                      }}
                    >
                      Request My Itinerary
                    </button>

                    <button
                      type="button"
                      onClick={() => handleTransition(2)}
                      className="btn-outline font-sans text-center text-xs font-semibold py-3 border border-charcoal/10 hover:border-[#D4A017]/30 flex items-center justify-center cursor-pointer"
                    >
                      Back
                    </button>
                  </div>

                  {/* Live Business Hours Status Check */}
                  <div className="flex items-center justify-center gap-2 mt-4 text-xs font-sans text-charcoal/60 select-none">
                    <span
                      className={`w-2.5 h-2.5 rounded-full inline-block ${
                        isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"
                      }`}
                    />
                    <span>
                      {isOpen
                        ? "Open now · We'll respond within 2 hours"
                        : "We're closed · We'll respond first thing Monday 10 AM"}
                    </span>
                  </div>

                  {/* WhatsApp Alternative */}
                  <div className="pt-5 border-t border-charcoal/5 text-center flex flex-col items-center gap-3 mt-2">
                    <span className="font-sans text-xs text-charcoal/40 select-none">
                      Prefer to just message us?
                    </span>
                    <a
                      href={whatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center font-sans text-xs font-bold py-3.5 text-charcoal rounded-full bg-emerald-600/10 border border-emerald-500/30 hover:bg-emerald-500/20 backdrop-blur-md transition-all duration-300 hover:scale-103 shadow-lg select-none"
                    >
                      💬 Message Us on WhatsApp
                    </a>
                  </div>
                </form>
              )}

            </div>
          ) : (
            // Success State Screen
            <div className="text-center py-20 flex flex-col items-center animate-fade-in select-none">
              <div className="w-20 h-20 bg-[#D4A017]/10 border-2 border-[#D4A017] rounded-full flex items-center justify-center text-[#D4A017] text-4xl mb-6 shadow-2xl shadow-gold/10">
                ✓
              </div>
              <h2 className="font-display text-3xl font-bold text-charcoal mb-3">
                Request Submitted!
              </h2>
              <p className="font-sans text-sm text-charcoal/60 max-w-sm mb-8 leading-relaxed">
                Thank you, <span className="font-bold text-[#D4A017]">{fullName}</span>. An expert planner has been assigned. We will reach out to you on WhatsApp within 2 hours.
              </p>
              
              <div className="flex flex-col gap-3.5 w-full">
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center font-sans text-xs font-bold py-3.5 text-midnight rounded-full transition-all duration-300 hover:scale-103 shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #D4A017 0%, #F0C040 100%)",
                  }}
                >
                  💬 Start WhatsApp Conversation
                </a>
                
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                    setSelectedDestinations([]);
                    setDepartureCity("");
                    setPhone("");
                    setFullName("");
                  }}
                  className="btn-outline font-sans text-center text-xs font-semibold py-3 border border-charcoal/10 hover:border-[#D4A017]/30 flex items-center justify-center cursor-pointer"
                >
                  Design Another Journey
                </button>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Styled JSX for request button pulse indicator */}
      <style jsx global>{`
        @keyframes pulse-gold-glow {
          0% { box-shadow: 0 0 0px rgba(212,160,23,0); }
          50% { box-shadow: 0 0 16px rgba(212,160,23,0.55); }
          100% { box-shadow: 0 0 0px rgba(212,160,23,0); }
        }
        .gold-pulse-btn {
          animation: pulse-gold-glow 1.5s infinite;
        }
      `}</style>
    </div>
  );
}
