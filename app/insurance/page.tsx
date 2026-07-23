"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GlassCard, RevealWrapper } from "@/components/ui";

const HERO_STATS = [
  { value: "100%", label: "Embassy Approved" },
  { value: "₹50L+", label: "Max Medical Cover" },
  { value: "95%+", label: "Claim Settlement" },
  { value: "<10 Mins", label: "Instant Issuance" },
];

const WHY_ESSENTIAL = [
  {
    icon: (
      <svg className="w-7 h-7 text-[#c4900f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Medical Emergencies Abroad",
    description:
      "International medical treatment can cost ₹5–50 lakhs. Travel insurance covers emergency medical expenses, hospitalization, and evacuation services worldwide.",
    highlight: "Up to $500,000 Cover",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#c4900f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Trip Cancellation Protection",
    description:
      "Plans change. Flights get cancelled. Family emergencies happen. Our insurance covers up to 100% of your trip cost if you need to cancel for covered reasons.",
    highlight: "100% Cost Reimbursement",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#c4900f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Baggage & Loss Coverage",
    description:
      "Lost luggage, delayed baggage, or personal belongings theft can ruin your trip. We cover replacement costs up to ₹2 lakhs.",
    highlight: "Instant Cash Advance",
  },
];

const PLANS = [
  {
    id: "basic",
    name: "Basic Plan",
    price: "₹299–499",
    period: "/ trip",
    duration: "7–14 days",
    idealFor: "Budget travelers & short trips",
    popular: false,
    badge: "ESSENTIAL",
    whatsappMsg: "Hi Earth Travels, I want to inquire about the Basic Travel Insurance Plan (₹299-499).",
    features: [
      "Medical emergency (₹5 lakhs)",
      "Trip cancellation (₹50,000)",
      "Baggage loss (₹1 lakh)",
      "Flight delay (6+ hours)",
      "Emergency cash advance",
    ],
  },
  {
    id: "standard",
    name: "Standard Plan",
    price: "₹599–899",
    period: "/ trip",
    duration: "14–30 days",
    idealFor: "Most international & Schengen travelers",
    popular: true,
    badge: "MOST POPULAR ★",
    whatsappMsg: "Hi Earth Travels, I want to get a policy quote for the Standard Travel Insurance Plan (₹599-899).",
    features: [
      "Medical emergency (₹15 lakhs)",
      "Trip cancellation (₹1,50,000)",
      "Baggage loss (₹2 lakhs)",
      "Flight delay (4+ hours)",
      "Lost passport & visa cover",
      "Emergency cash advance",
      "Travel delay (12+ hours)",
    ],
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: "₹1,299–1,899",
    period: "/ trip",
    duration: "30–45 days",
    idealFor: "Extended vacations & adventure travel",
    popular: false,
    badge: "MAX COVER",
    whatsappMsg: "Hi Earth Travels, I want to get a policy quote for the Premium Travel Insurance Plan (₹1299-1899).",
    features: [
      "Medical emergency (₹50 lakhs)",
      "Trip cancellation (₹30,00,000)",
      "Baggage loss (₹3 lakhs)",
      "Flight delay (2+ hours)",
      "Lost passport + visa replacement",
      "Emergency cash advance",
      "Travel delay (8+ hours)",
      "Adventure sports coverage",
      "Personal liability (₹25 lakhs)",
      "24/7 priority claims desk",
    ],
  },
  {
    id: "annual",
    name: "Annual Multi-Trip",
    price: "₹3,999",
    period: "/ year",
    duration: "365 days, unlimited trips",
    idealFor: "Frequent flyers & business executives",
    popular: false,
    badge: "BEST VALUE",
    whatsappMsg: "Hi Earth Travels, I want to inquire about the Annual Multi-Trip Insurance Plan (₹3,999).",
    features: [
      "All Premium features included",
      "Unlimited trips per year (up to 45 days/trip)",
      "Medical emergency (₹50 lakhs/trip)",
      "Trip cancellation (₹30,00,000/trip)",
      "Baggage loss (₹3 lakhs/trip)",
      "24/7 global VIP concierge",
      "Family members eligible",
      "Maximum savings for frequent travelers",
    ],
  },
];

const PARTNERS = [
  { name: "Bajaj Allianz", tagline: "98% Claim Ratio" },
  { name: "ICICI Lombard", tagline: "Cashless Hospitals" },
  { name: "HDFC ERGO", tagline: "Instant Policy" },
  { name: "Royal Sundaram", tagline: "Global Cover" },
  { name: "Apollo Munich", tagline: "Senior Friendly" },
  { name: "Aditya Birla", tagline: "24/7 Helpline" },
];

const COMPARISON_ROWS = [
  { feature: "Emergency Medical Coverage", basic: "₹5 Lakhs", standard: "₹15 Lakhs", premium: "₹50 Lakhs", annual: "₹50 Lakhs / trip" },
  { feature: "Trip Cancellation Refund", basic: "₹50,000", standard: "₹1.5 Lakhs", premium: "₹3 Lakhs", annual: "₹3 Lakhs / trip" },
  { feature: "Checked-in Baggage Loss", basic: "₹1 Lakh", standard: "₹2 Lakhs", premium: "₹3 Lakhs", annual: "₹3 Lakhs" },
  { feature: "Schengen Visa (€30,000) Compliant", basic: "✓", standard: "✓ (100% Approved)", premium: "✓", annual: "✓" },
  { feature: "Adventure Sports Coverage", basic: "✕", standard: "✕", premium: "✓ Included", annual: "✓ Included" },
  { feature: "Personal Liability Protection", basic: "✕", standard: "✕", premium: "₹25 Lakhs", annual: "₹25 Lakhs" },
  { feature: "24/7 Emergency Assistance", basic: "✓ Standard", standard: "✓ Priority", premium: "✓ VIP Concierge", annual: "✓ VIP Concierge" },
  { feature: "Policy Validity Duration", basic: "7–14 Days", standard: "14–30 Days", premium: "30–45 Days", annual: "365 Days (Unlimited)" },
  { feature: "Starting Price", basic: "₹299–499", standard: "₹599–899", premium: "₹1,299–1,899", annual: "₹3,999" },
];

const CLAIMS_STEPS = [
  {
    step: "01",
    title: "Report the Incident",
    desc: "Notify our dedicated emergency claims desk within 24 hours of any illness, accident, or delay.",
    timeBadge: "Within 24 Hours",
    icon: (
      <svg className="w-6 h-6 text-[#c4900f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Submit Documents",
    desc: "Upload required bills, medical reports, police FIR, or flight tickets via WhatsApp or portal.",
    timeBadge: "Within 48 Hours",
    icon: (
      <svg className="w-6 h-6 text-[#c4900f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Claim Assessment",
    desc: "Our IRDA-approved insurance auditors verify documents and approve cashless or reimbursement claims.",
    timeBadge: "5–7 Business Days",
    icon: (
      <svg className="w-6 h-6 text-[#c4900f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Direct Settlement",
    desc: "Approved claim money is transferred directly into your Indian bank account or to overseas hospital.",
    timeBadge: "Instant Bank Transfer",
    icon: (
      <svg className="w-6 h-6 text-[#c4900f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const FAQS = [
  {
    q: "Do I need travel insurance for my visa application?",
    a: "Yes! Travel insurance is mandatory for Schengen area visas (€30,000 coverage minimum) and highly recommended for USA, UK, Canada, Australia, and Asian destinations to prevent unexpected medical bills.",
  },
  {
    q: "What is NOT covered under standard travel insurance?",
    a: "Pre-existing health conditions (unless declared with optional rider), intentional self-harm, intoxication or illegal activities, unapproved high-risk extreme sports, and travel to war zones under active government advisories.",
  },
  {
    q: "Can I claim if my flight is cancelled or delayed due to weather?",
    a: "Yes! If your airline cancels or delays your flight beyond 2–6 hours due to bad weather or operational issues, accommodation, meal expenses, and ticket rebooking fees are covered.",
  },
  {
    q: "What is the maximum medical coverage available?",
    a: "Our policies range from ₹5 Lakhs (Basic) up to ₹50 Lakhs / $500,000 (Premium/Annual) per traveler, including cashless ICU, hospitalization, emergency surgery, and medical evacuation.",
  },
  {
    q: "How quickly will I receive my official insurance policy letter?",
    a: "Instantly! Once payment is complete, your 100% embassy-approved policy document is generated within 5–10 minutes and sent straight to your WhatsApp and email.",
  },
  {
    q: "Can I purchase insurance if I am already abroad?",
    a: "Standard policies must be issued prior to leaving India. However, we offer specialized post-departure insurance policies upon background verification.",
  },
  {
    q: "How does the Family Super Saver policy work?",
    a: "The Family plan covers up to 2 Adults and 2 Children under a single discounted premium, sharing a high total coverage limit with maximum convenience.",
  },
  {
    q: "Is COVID-19 medical treatment covered overseas?",
    a: "Yes! All our international policies include COVID-19 emergency medical treatment, hospital room charges, and quarantine costs required by local health authorities.",
  },
  {
    q: "What is Earth Travels' claim settlement ratio?",
    a: "We partner exclusively with top IRDA-regulated insurance providers (Bajaj Allianz, ICICI Lombard, HDFC ERGO) featuring an average claim settlement ratio of 95%+",
  },
  {
    q: "Can I cancel my policy and get a refund if my visa gets rejected?",
    a: "Yes. If your visa is rejected or your trip is cancelled before the policy start date, you can request a full or partial refund minus standard administrative fees.",
  },
  {
    q: "Can I extend my policy if I extend my stay abroad?",
    a: "Yes. You can request a policy extension online prior to your current policy's expiry date, provided no claims have been filed.",
  },
  {
    q: "Is there any waiting period for emergency medical claims?",
    a: "No! Emergency medical expenses resulting from accidental injury or sudden illness have zero waiting period once you land at your international destination.",
  },
];

const WHY_US_FEATURES = [
  {
    title: "Expert Visa Guidance",
    desc: "Our travel experts help you choose the exact embassy-compliant policy required for your specific country and visa category.",
    icon: (
      <svg className="w-6 h-6 text-[#c4900f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Guaranteed Lowest Rates",
    desc: "We partner directly with leading Indian insurers to provide wholesale discounted rates with zero hidden markups.",
    icon: (
      <svg className="w-6 h-6 text-[#c4900f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    title: "24/7 Dedicated Support",
    desc: "Traveling in a different timezone? Our emergency team is reachable 24/7 via WhatsApp and office phone (+91 89410 88111).",
    icon: (
      <svg className="w-6 h-6 text-[#c4900f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Hassle-Free Claims",
    desc: "Step-by-step guidance for filing claims with 95%+ settlement ratios and dedicated claim managers.",
    icon: (
      <svg className="w-6 h-6 text-[#c4900f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Transparent Policies",
    desc: "Clear exclusions and zero hidden terms. We explain all policy clauses in plain English before purchase.",
    icon: (
      <svg className="w-6 h-6 text-[#c4900f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function InsurancePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-[#fdf8f2] min-h-screen text-[#1a120a] pt-24 pb-24 select-none">
      <title>International Travel Insurance — Schengen & Worldwide Cover | Earth Travels</title>
      <meta
        name="description"
        content="Get 100% embassy-approved travel insurance for Schengen, USA, UK, and worldwide destinations. Instant policy quote & 24/7 assistance by Earth Travels."
      />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative min-h-[600px] flex items-center justify-center py-20 px-6 overflow-hidden bg-[#1a120a] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80"
            alt="Scenic Travel Suspension Bridge Background"
            className="w-full h-full object-cover opacity-35 scale-105 transform transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a120a] via-[#1a120a]/75 to-[#1a120a]/40" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c4900f]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
          <RevealWrapper delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c4900f]/15 border border-[#c4900f]/30 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#e8a820] animate-pulse" />
              <span className="font-mono text-xs font-bold text-[#e8a820] uppercase tracking-widest">
                IRDA Approved Partners • 95%+ Claim Settlement
              </span>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.2}>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              Travel Insurance —{" "}
              <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-[#e8a820] via-amber-300 to-[#c4900f]">
                Peace of Mind
              </span>{" "}
              <br className="hidden sm:inline" />
              for Every Journey
            </h1>
          </RevealWrapper>

          <RevealWrapper delay={0.3}>
            <p className="font-sans text-sm md:text-lg text-white/80 leading-relaxed font-light max-w-2xl">
              Protect your international trips with comprehensive cover. Cashless hospitalization, trip cancellation, baggage protection, and 100% embassy approved Schengen policies.
            </p>
          </RevealWrapper>

          {/* Action CTAs */}
          <RevealWrapper delay={0.4} className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/918941881111?text=Hi%20Earth%20Travels,%20I%20want%20to%20get%20an%20International%20Travel%20Insurance%20Quote"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 rounded-full font-sans text-sm font-bold text-[#1a120a] transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2.5"
              style={{ background: "linear-gradient(135deg, #e8a820 0%, #c4900f 100%)" }}
            >
              <svg className="w-4 h-4 fill-current shrink-0 text-[#1a120a]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.489.002 9.961-4.467 9.964-9.948.002-2.654-1.03-5.15-2.906-7.029C16.45 1.748 13.957.718 11.31.718c-5.49 0-9.966 4.469-9.969 9.95-.001 1.905.517 3.5 1.498 5.1l-.989 3.613 3.707-.977zm12.39-7.12c-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.174.2-.298.3-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              <span>Get Free Instant Quote</span>
            </a>

            <a
              href="tel:+918941088111"
              className="py-4 px-7 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-sans text-sm font-semibold hover:bg-white/20 hover:border-white/40 transition-all flex items-center gap-2 shadow-lg"
            >
              <span>📞 Call Office (+91 89410 88111)</span>
            </a>
          </RevealWrapper>

          {/* Hero Quick Stats Pill Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl mt-8 pt-8 border-t border-white/10">
            {HERO_STATS.map((stat, sIdx) => (
              <div key={sIdx} className="flex flex-col items-center bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-md">
                <span className="font-mono text-xl sm:text-2xl font-extrabold text-[#e8a820]">{stat.value}</span>
                <span className="font-sans text-[11px] text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ================= 2. WHY TRAVEL INSURANCE IS ESSENTIAL ================= */}
        <section className="py-24 border-b border-[#1a120a]/10">
          <RevealWrapper delay={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-xs font-bold text-[#c4900f] uppercase tracking-[0.2em] bg-[#c4900f]/10 border border-[#c4900f]/20 px-3.5 py-1 rounded-full">
                ESSENTIAL PROTECTION
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#1a120a] mt-3">
                Why Travel Insurance is Essential
              </h2>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {WHY_ESSENTIAL.map((item, idx) => (
              <GlassCard
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#1a120a]/10 hover:border-[#c4900f]/60 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between gap-6 group"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#fdf8f2] border border-[#c4900f]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#1a120a] group-hover:text-[#c4900f] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#1a120a]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between font-mono text-xs font-bold text-[#c4900f]">
                  <span>{item.highlight}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#plans"
              className="font-mono text-xs font-bold text-[#c4900f] hover:text-[#1a120a] uppercase tracking-wider inline-flex items-center gap-2 transition-colors py-2 px-4 rounded-full border border-[#c4900f]/30 bg-white shadow-sm"
            >
              <span>See Full Coverage Options Below</span>
              <span className="animate-bounce">↓</span>
            </a>
          </div>
        </section>

        {/* ================= 3. OUR INSURANCE COVERAGE PLANS ================= */}
        <section id="plans" className="py-24 border-b border-[#1a120a]/10">
          <RevealWrapper delay={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-xs font-bold text-[#c4900f] uppercase tracking-[0.2em] bg-[#c4900f]/10 border border-[#c4900f]/20 px-3.5 py-1 rounded-full">
                TAILORED TIERS
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#1a120a] mt-3">
                Our Coverage Plans
              </h2>
              <p className="font-sans text-sm text-[#1a120a]/70 mt-2">
                Choose the plan that best fits your travel style and embassy requirement
              </p>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 pt-4">
            {PLANS.map((plan, idx) => (
              <GlassCard
                key={idx}
                className={`p-6 sm:p-7 rounded-3xl bg-white border flex flex-col justify-between transition-all duration-300 relative h-full ${
                  plan.popular
                    ? "border-[#c4900f] shadow-2xl ring-2 ring-[#c4900f]/40 bg-gradient-to-b from-amber-50/40 via-white to-white"
                    : "border-[#1a120a]/10 hover:border-[#c4900f]/50 hover:shadow-xl"
                }`}
              >
                <div className="flex flex-col gap-4 flex-1">
                  <div>
                    <span
                      className={`font-mono text-[10px] font-extrabold uppercase tracking-wider block mb-2 ${
                        plan.popular
                          ? "w-fit px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#e8a820] to-[#c4900f] text-[#1a120a] shadow-sm"
                          : "text-[#c4900f]"
                      }`}
                    >
                      {plan.badge}
                    </span>
                    <h3 className="font-display text-2xl font-extrabold text-[#1a120a] leading-tight">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mt-2 font-mono">
                      <span className="text-3xl font-extrabold text-[#c4900f]">
                        {plan.price}
                      </span>
                      <span className="text-xs text-[#1a120a]/60">{plan.period}</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#1a120a]/60 block mt-1 font-semibold">
                      ⏱ {plan.duration}
                    </span>
                  </div>

                  <span className="text-[11px] font-sans text-[#1a120a]/70 bg-[#fdf8f2] p-2.5 rounded-xl border border-[#1a120a]/10 font-medium">
                    🎯 {plan.idealFor}
                  </span>

                  <ul className="flex flex-col gap-2.5 text-xs text-[#1a120a]/85 pt-3 border-t border-[#1a120a]/10 flex-1">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/918941881111?text=${encodeURIComponent(plan.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-xl font-sans text-xs font-bold text-center transition-all shadow-md flex items-center justify-center gap-2 mt-8 shrink-0 ${
                    plan.popular
                      ? "text-[#1a120a] bg-gradient-to-r from-[#e8a820] to-[#c4900f] hover:scale-102"
                      : "bg-[#1a120a] text-white hover:bg-[#c4900f] hover:text-[#1a120a]"
                  }`}
                >
                  <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.489.002 9.961-4.467 9.964-9.948.002-2.654-1.03-5.15-2.906-7.029C16.45 1.748 13.957.718 11.31.718c-5.49 0-9.966 4.469-9.969 9.95-.001 1.905.517 3.5 1.498 5.1l-.989 3.613 3.707-.977zm12.39-7.12c-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.174.2-.298.3-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  </svg>
                  <span>Inquire on WhatsApp</span>
                </a>
              </GlassCard>
            ))}
          </div>

          <p className="font-mono text-xs text-center text-[#1a120a]/60 bg-white border border-[#1a120a]/10 max-w-xl mx-auto py-2 px-4 rounded-full shadow-sm">
            💡 Prices vary depending on traveler age and exact trip dates. Contact our desk for exact pricing.
          </p>
        </section>

        {/* ================= 4. TRUSTED INSURANCE PARTNERS ================= */}
        <section className="py-24 border-b border-[#1a120a]/10">
          <RevealWrapper delay={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-mono text-xs font-bold text-[#c4900f] uppercase tracking-[0.2em] bg-[#c4900f]/10 border border-[#c4900f]/20 px-3.5 py-1 rounded-full">
                APPROVED PROVIDERS
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#1a120a] mt-3">
                Trusted Insurance Partners
              </h2>
              <p className="font-sans text-sm text-[#1a120a]/70 mt-2">
                We partner with India&apos;s leading IRDA-regulated insurance corporations
              </p>
            </div>
          </RevealWrapper>

          {/* Warm Luxury Light-Theme Partner Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#1a120a]/10 hover:border-[#c4900f]/60 text-[#1a120a] p-5 rounded-2xl shadow-sm hover:shadow-xl flex flex-col items-center justify-center text-center gap-2 hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <span className="font-display text-base font-bold text-[#1a120a] group-hover:text-[#c4900f] transition-colors">
                  {partner.name}
                </span>
                <span className="font-mono text-[10px] text-[#c4900f] font-bold bg-[#c4900f]/10 border border-[#c4900f]/20 px-2.5 py-0.5 rounded-full">
                  {partner.tagline}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center flex flex-col items-center gap-4 max-w-2xl mx-auto bg-white border border-[#1a120a]/10 p-6 rounded-3xl shadow-sm">
            <p className="font-sans text-xs sm:text-sm text-[#1a120a]/75 leading-relaxed">
              All insurance partners are IRDAI-approved with strong claim settlement ratios (95%+). Earth Travels helps you pick the most cost-effective policy tailored for your visa destination.
            </p>
            <a
              href="https://wa.me/918941881111?text=Hi%20Earth%20Travels,%20help%20me%20choose%20the%20best%20travel%20insurance%20partner"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-full font-sans text-xs font-bold text-[#1a120a] bg-[#e8a820] hover:bg-[#c4900f] transition-all shadow-md inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.489.002 9.961-4.467 9.964-9.948.002-2.654-1.03-5.15-2.906-7.029C16.45 1.748 13.957.718 11.31.718c-5.49 0-9.966 4.469-9.969 9.95-.001 1.905.517 3.5 1.498 5.1l-.989 3.613 3.707-.977zm12.39-7.12c-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.174.2-.298.3-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              <span>Let Our Expert Help You Choose Partner</span>
            </a>
          </div>
        </section>

        {/* ================= 5. QUICK COMPARISON TABLE ================= */}
        <section className="py-24 border-b border-[#1a120a]/10">
          <RevealWrapper delay={0.1}>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="font-mono text-xs font-bold text-[#c4900f] uppercase tracking-[0.2em] bg-[#c4900f]/10 border border-[#c4900f]/20 px-3.5 py-1 rounded-full">
                TRANSPARENT METRICS
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#1a120a] mt-3">
                Quick Plan Comparison
              </h2>
            </div>
          </RevealWrapper>

          <div className="overflow-x-auto rounded-3xl border border-[#1a120a]/10 shadow-2xl bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1a120a] text-white font-mono text-xs uppercase font-bold">
                  <th className="p-4 sm:p-6 text-white">Coverage Feature</th>
                  <th className="p-4 sm:p-6 text-center text-gray-300">Basic</th>
                  <th className="p-4 sm:p-6 text-center text-[#e8a820] bg-[#c4900f]/20 border-x border-[#c4900f]/30">
                    Standard ★
                  </th>
                  <th className="p-4 sm:p-6 text-center text-gray-300">Premium</th>
                  <th className="p-4 sm:p-6 text-center text-gray-300">Annual</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 font-sans text-xs sm:text-sm text-[#1a120a]">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50/60" : "bg-white"}>
                    <td className="p-4 sm:p-5 font-bold text-[#1a120a]">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-center font-mono text-gray-700">{row.basic}</td>
                    <td className="p-4 sm:p-5 text-center font-mono font-bold text-[#c4900f] bg-amber-50/50 border-x border-[#c4900f]/20">
                      {row.standard}
                    </td>
                    <td className="p-4 sm:p-5 text-center font-mono text-gray-700">{row.premium}</td>
                    <td className="p-4 sm:p-5 text-center font-mono text-gray-700">{row.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= 6. SIMPLE CLAIMS PROCESS ================= */}
        <section className="py-24 border-b border-[#1a120a]/10">
          <RevealWrapper delay={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-xs font-bold text-[#c4900f] uppercase tracking-[0.2em] bg-[#c4900f]/10 border border-[#c4900f]/20 px-3.5 py-1 rounded-full">
                HASSLE-FREE CLAIMS
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#1a120a] mt-3">
                Simple 4-Step Claims Process
              </h2>
              <p className="font-sans text-sm text-[#1a120a]/70 mt-2">
                Get fast cashless authorization or direct bank reimbursement
              </p>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {CLAIMS_STEPS.map((s, idx) => (
              <GlassCard
                key={idx}
                className="p-6 rounded-3xl bg-white border border-[#1a120a]/10 flex flex-col justify-between gap-6 hover:shadow-2xl transition-all duration-300 hover:border-[#c4900f]/50 group"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-extrabold text-[#c4900f]/30 group-hover:text-[#c4900f] transition-colors">
                      {s.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#fdf8f2] border border-[#c4900f]/20 flex items-center justify-center shadow-inner">
                      {s.icon}
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#1a120a] group-hover:text-[#c4900f] transition-colors">
                    {s.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#1a120a]/70 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <span className="w-fit px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#1a120a] text-white shadow-sm">
                  {s.timeBadge}
                </span>
              </GlassCard>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/918941881111?text=Hi%20Earth%20Travels,%20I%20need%20to%20file%20an%20Insurance%20Claim"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-8 rounded-full font-sans text-xs font-bold text-[#1a120a] bg-gradient-to-r from-[#e8a820] to-[#c4900f] hover:scale-105 transition-all shadow-md flex items-center gap-2"
            >
              <span>File a Claim via WhatsApp →</span>
            </a>

            <a
              href="tel:+918941088111"
              className="py-3.5 px-7 rounded-full border border-[#1a120a]/20 bg-white font-sans text-xs font-bold text-[#1a120a] hover:bg-gray-50 transition-all flex items-center gap-2 shadow-sm"
            >
              <span>📞 Call Claims Helpline (+91 89410 88111)</span>
            </a>
          </div>
        </section>

        {/* ================= 7. FREQUENTLY ASKED QUESTIONS ================= */}
        <section className="py-24 border-b border-[#1a120a]/10">
          <RevealWrapper delay={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-xs font-bold text-[#c4900f] uppercase tracking-[0.2em] bg-[#c4900f]/10 border border-[#c4900f]/20 px-3.5 py-1 rounded-full">
                GOT QUESTIONS?
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#1a120a] mt-3">
                Frequently Asked Questions
              </h2>
            </div>
          </RevealWrapper>

          {/* High-Contrast FAQ Accordion without separator line */}
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-[#c4900f] shadow-md ring-1 ring-[#c4900f]/30"
                      : "border-[#1a120a]/15 hover:border-[#c4900f]/50 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 pb-3 text-left font-display text-base sm:text-lg font-bold flex items-center justify-between gap-4 transition-colors border-none outline-none focus:outline-none focus:ring-0 focus:border-none focus-visible:outline-none focus-visible:ring-0 active:outline-none active:ring-0 bg-transparent"
                  >
                    <span className={isOpen ? "text-[#c4900f]" : "text-[#1a120a]"}>{faq.q}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-[#1a120a] text-[#e8a820] rotate-180" : "bg-gray-100 text-[#1a120a]"
                    }`}>
                      ▼
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 font-sans text-xs sm:text-sm text-[#1a120a]/85 leading-relaxed border-none border-t-0">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= 8. WHY BOOK INSURANCE WITH US? ================= */}
        <section className="py-24 border-b border-[#1a120a]/10">
          <RevealWrapper delay={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-xs font-bold text-[#c4900f] uppercase tracking-[0.2em] bg-[#c4900f]/10 border border-[#c4900f]/20 px-3.5 py-1 rounded-full">
                EARTH TRAVELS ADVANTAGE
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#1a120a] mt-3">
                Why Book Insurance With Us?
              </h2>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {WHY_US_FEATURES.map((f, idx) => (
              <GlassCard
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#1a120a]/10 flex flex-col gap-4 hover:border-[#c4900f]/50 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#fdf8f2] border border-[#c4900f]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {f.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-[#1a120a] group-hover:text-[#c4900f] transition-colors">
                  {f.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#1a120a]/70 leading-relaxed">
                  {f.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ================= 9. CLOSING DIRECT CONTACT BANNER ================= */}
        <section className="py-24">
          <RevealWrapper delay={0.2}>
            <div className="max-w-4xl mx-auto bg-[#1a120a] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-6 border border-[#c4900f]/30">
              <div className="w-16 h-16 rounded-2xl bg-[#c4900f]/20 border border-[#c4900f]/40 flex items-center justify-center text-2xl text-[#e8a820]">
                🛡️
              </div>

              <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
                Need Personal Insurance Assistance?
              </h3>

              <p className="font-sans text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
                Connect directly with Earth Travels insurance specialists for 100% embassy-approved policies, instant Schengen coverage letters, and 24/7 global claim support.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href="https://wa.me/918941881111?text=Hi%20Earth%20Travels,%20I%20need%20Personal%20Travel%20Insurance%20Assistance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-8 rounded-full font-sans text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-transform hover:scale-105 shadow-xl flex items-center gap-2.5"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.489.002 9.961-4.467 9.964-9.948.002-2.654-1.03-5.15-2.906-7.029C16.45 1.748 13.957.718 11.31.718c-5.49 0-9.966 4.469-9.969 9.95-.001 1.905.517 3.5 1.498 5.1l-.989 3.613 3.707-.977zm12.39-7.12c-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.174.2-.298.3-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  </svg>
                  <span>WhatsApp Insurance Desk</span>
                </a>

                <a
                  href="tel:+918941088111"
                  className="py-4 px-8 rounded-full font-sans text-xs sm:text-sm font-bold text-[#1a120a] transition-transform hover:scale-105 shadow-xl"
                  style={{ background: "linear-gradient(135deg, #e8a820 0%, #c4900f 100%)" }}
                >
                  📞 Call Office (+91 89410 88111)
                </a>
              </div>

              <div className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center justify-between text-xs text-white/60 font-mono gap-2">
                <span>📍 Mathura, Uttar Pradesh, India</span>
                <span>💬 WhatsApp: +91 89418 81111</span>
                <span>📞 Helpline: +91 89410 88111</span>
              </div>
            </div>
          </RevealWrapper>
        </section>

      </div>
    </div>
  );
}
