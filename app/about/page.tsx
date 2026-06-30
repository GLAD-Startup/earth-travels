"use client";

import React from "react";
import { useCountUp } from "@/lib/hooks";
import { GlassCard, RevealWrapper } from "@/components/ui";

const CORE_DIFFERENCES = [
  {
    title: "We Answer the Phone",
    desc: "Direct WhatsApp access to your travel consultant. Not a chatbot. We support you 24/7 on tour.",
    icon: "📞",
  },
  {
    title: "Complete Documentation",
    desc: "Visa applications, travel insurance, foreign exchange — we handle the paperwork so you don't have to.",
    icon: "🛂",
  },
  {
    title: "Honest Pricing",
    desc: "No hidden charges. You see the full itemized breakup before you pay a single rupee.",
    icon: "💳",
  },
  {
    title: "Local Understanding",
    desc: "Based in Krishna Market, Mathura, we understand the specific vegetarian and comfort needs of local families.",
    icon: "👨‍👩‍👧‍👦",
  },
];

const TEAM_MEMBERS = [
  {
    name: "Team Earth Travels",
    role: "Your Travel Consultant",
    specialty: "Kashmir & Domestic Journeys",
    avatar: "👤",
  },
  {
    name: "Team Earth Travels",
    role: "International Specialist",
    specialty: "Maldives, Dubai, SE Asia",
    avatar: "🌐",
  },
  {
    name: "Team Earth Travels",
    role: "Documentation Expert",
    specialty: "Visa, Insurance & Permits",
    avatar: "📝",
  },
];

const PARTNERS = [
  "IATA Member",
  "Ministry of Tourism Approved",
  "Booking.com Partner",
  "Viator Affiliate",
  "JustDial Verified",
  "Google Verified Business",
];

const TESTIMONIALS = [
  {
    initial: "R",
    name: "Rakesh Jain",
    destination: "Kashmir 🏔️",
    review: "We were surprised by the hospitality. The people are very honest and soft spoken. They made our entire stay comfortable and memorable.",
  },
  {
    initial: "R",
    name: "Ronak Agrawal",
    destination: "Maldives 🌊",
    review: "Earth Travels helped us choose the best family resort. They completed our documentation and even provided all baby amenities. Always a quick response.",
  },
  {
    initial: "S",
    name: "Saloni Agrawal",
    destination: "Malaysia ✈️",
    review: "All hotel properties and tours were well managed and fun. They handled all documentation including travel insurance. Trip turned out amazing.",
  },
];

export default function AboutPage() {
  const [count1, ref1] = useCountUp({ target: 127, duration: 1500 });
  const [count2, ref2] = useCountUp({ target: 50, duration: 1500 });
  const [count3, ref3] = useCountUp({ target: 10, duration: 1500 });
  const [count4, ref4] = useCountUp({ target: 4.7, duration: 1500, decimals: 1 });

  return (
    <div className="bg-[#080C14] min-h-screen text-white select-none">
      <title>About Us — Our Story & Credentials | Earth Travels</title>
      <meta name="description" content="Discover Earth Travels story. Founded in Mathura, UP, we help local families design and execute stress-free domestic and international trips." />
      
      {/* 1. Split Hero (60vh) */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center overflow-hidden border-b border-white/5">
        
        {/* Background images split layout */}
        <div className="absolute inset-0 z-0 flex">
          {/* Left half: Mathura Krishna Temple (Unsplash photo representing Mathura / temple motifs) */}
          <div className="relative w-1/2 h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=800&q=80"
              alt="Mathura Krishna Temple heritage"
              className="w-full h-full object-cover opacity-60"
            />
          </div>

          {/* Central golden vertical gradient divider */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#D4A017] to-transparent z-10 shadow-[0_0_12px_rgba(212,160,23,0.8)]" />

          {/* Right half: Maldives bungalows */}
          <div className="relative w-1/2 h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80"
              alt="Maldives Overwater Bungalow luxury resort"
              className="w-full h-full object-cover opacity-60"
            />
          </div>
        </div>

        {/* Dark overlay grid */}
        <div className="absolute inset-0 bg-[#080C14]/75 z-1 pointer-events-none" />

        {/* Title content */}
        <div className="max-w-4xl mx-auto px-6 relative z-10 mt-10">
          <RevealWrapper delay={0.1}>
            <h1 className="font-display text-4xl md:text-[72px] font-black leading-tight text-white mb-2 tracking-tight">
              From Mathura
            </h1>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <h2 className="font-display text-4xl md:text-[72px] font-light italic text-[#D4A017] leading-none tracking-tight">
              to the World
            </h2>
          </RevealWrapper>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-white/5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <RevealWrapper delay={0.1}>
            <div className="border-l-4 border-[#D4A017] pl-6 md:pl-8">
              <blockquote className="font-display text-2xl md:text-[32px] italic text-[#D4A017] leading-normal font-light">
                &ldquo;We don&apos;t just plan trips. We make sure every family that trusts us comes back with a story they&apos;ll tell for years.&rdquo;
              </blockquote>
              <cite className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mt-4 not-italic font-bold">
                — Director, Earth Travels
              </cite>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.2} className="font-sans text-xs md:text-sm text-white/70 leading-relaxed flex flex-col gap-6">
            <p>
              Earth Travels was founded in Mathura with a simple belief — that every family deserves to see the world, and that the journey should be as stress-free as the destination.
            </p>
            <p>
              For over a decade, we&apos;ve been planning trips for families across Uttar Pradesh, handling everything from Kashmir houseboats to Maldives water villas to European rail passes. Our office in Krishna Market is open six days a week, and our WhatsApp is open all seven. We believe in honest pricing, complete documentation support, and picking up the phone when you call.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* 3. Stats Row (GSAP Countups) */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-b border-white/5 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { count: count1, ref: ref1, label: "Happy Travellers" },
            { count: count2, ref: ref2, label: "Destinations" },
            { count: count3, ref: ref3, label: "Years of Experience" },
            { count: count4, ref: ref4, label: "Average Rating ★" },
          ].map((stat, idx) => (
            <GlassCard key={idx} hover={false} className="p-6 bg-[#080C14]/40 border border-white/8 rounded-xl">
              <span
                ref={stat.ref}
                className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4A017] leading-none block mb-2"
              >
                {stat.count}
                {idx !== 3 && "+"}
              </span>
              <span className="font-sans text-[11px] text-white/60 uppercase tracking-wider font-semibold">
                {stat.label}
              </span>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 4. What makes us different */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-white/5 relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#D4A017] uppercase tracking-[0.2em] block mb-2">
            Our Standards
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-white">
            What Makes Us Different
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {CORE_DIFFERENCES.map((diff, idx) => (
            <RevealWrapper key={idx} delay={idx * 0.1}>
              <GlassCard
                hover={true}
                className="p-6 md:p-8 bg-[#080C14]/40 border border-white/8 hover:border-[#D4A017]/30 transition-all rounded-[20px]"
              >
                <div className="text-3xl mb-4 select-none">{diff.icon}</div>
                <h4 className="font-sans text-lg font-bold text-white mb-2 leading-tight">
                  {diff.title}
                </h4>
                <p className="font-sans text-xs md:text-sm text-white/60 leading-relaxed">
                  {diff.desc}
                </p>
              </GlassCard>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* 5. Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-white/5 relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#D4A017] uppercase tracking-[0.2em] block mb-2">
            Our Planners
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-white">
            Our Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <RevealWrapper key={idx} delay={idx * 0.1}>
              <GlassCard
                hover={true}
                className="p-6 md:p-8 bg-[#080C14]/40 border border-white/8 hover:border-[#D4A017]/30 transition-all rounded-[20px] text-center flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#D4A017]/10 border border-[#D4A017]/35 text-2xl shadow shadow-gold/5 shrink-0 select-none">
                  {member.avatar}
                </div>
                <div>
                  <h4 className="font-sans text-base font-bold text-white leading-tight mb-1">
                    {member.name}
                  </h4>
                  <span className="font-mono text-[10px] text-[#D4A017] uppercase tracking-widest block mb-3 font-semibold">
                    {member.role}
                  </span>
                  <p className="font-sans text-xs text-white/50">
                    Focus: <span className="text-white/80 font-medium">{member.specialty}</span>
                  </p>
                </div>
              </GlassCard>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* 6. Google Reviews Highlight */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-white/5 relative z-10">
        
        <RevealWrapper delay={0}>
          <GlassCard hover={false} className="p-8 md:p-10 bg-[#080C14]/45 border border-white/10 rounded-[20px] mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <span className="font-mono text-[96px] font-black text-[#D4A017] leading-none block select-none">
                4.7
              </span>
              <span className="font-sans text-xs text-white/60 tracking-wider block mt-1 uppercase font-semibold">
                out of 5 · 127 reviews
              </span>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-right">
              {/* 5 star row */}
              <div className="flex items-center gap-1.5 text-2xl text-[#D4A017] select-none">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              
              <a
                href="https://maps.app.goo.gl/wKx6oV839iS3XvRVA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline font-sans text-center text-xs font-semibold py-3 px-6 border border-white/10 hover:border-[#D4A017]/30 flex items-center justify-center gap-1.5"
              >
                View all reviews on Google
              </a>
            </div>
          </GlassCard>
        </RevealWrapper>

        {/* 3 real testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <GlassCard
              key={idx}
              hover={false}
              className="p-6 md:p-8 bg-[#080C14]/40 border border-white/8 rounded-[20px]"
            >
              <div className="flex items-center gap-3.5 mb-5 border-b border-white/5 pb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white bg-[#D4A017] shrink-0 select-none">
                  {t.initial}
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-white leading-tight">
                    {t.name}
                  </h4>
                  <span className="text-[10px] text-white/40 font-mono tracking-widest block uppercase font-semibold mt-0.5">
                    📍 Trip to {t.destination}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-[#D4A017] text-xs mb-3 select-none">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="font-sans text-[13px] text-white/70 leading-[1.6] italic">
                &ldquo;{t.review}&rdquo;
              </p>
            </GlassCard>
          ))}
        </div>

      </section>

      {/* 7. Partner badges */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center border-b border-white/5 relative z-10">
        <h3 className="font-mono text-xs text-white/40 uppercase tracking-[0.25em] block mb-8 font-bold">
          Trusted & Certified
        </h3>
        <div className="flex flex-wrap gap-4 items-center justify-center opacity-65">
          {PARTNERS.map((badge, idx) => (
            <span
              key={idx}
              className="glass px-5 py-3 border border-white/10 rounded-xl bg-white/5 font-sans text-xs font-semibold text-white/80"
            >
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* 8. Closing CTA */}
      <section className="relative w-full py-16 px-6 overflow-hidden text-center bg-[#0A1628]/60 border-t border-white/5 flex items-center justify-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-5">
          
          <h2 className="font-display text-3xl md:text-[44px] font-normal leading-tight text-white select-none">
            Planning your next trip? Let&apos;s talk.
          </h2>

          <a
            href="tel:08941881111"
            className="font-mono text-2xl md:text-[32px] font-bold text-[#D4A017] hover:text-[#F0C040] transition-colors select-all mt-1"
          >
            089418 81111
          </a>

          {/* Action triggers */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full sm:w-auto">
            <a
              href="tel:08941881111"
              className="w-full sm:w-auto btn-outline font-sans text-center text-xs font-bold py-3.5 px-8 border border-white/10 hover:border-[#D4A017]/30 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/918941881111"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto font-sans text-center text-xs font-bold py-3.5 px-8 text-midnight rounded-full hover:shadow-[0_0_15px_rgba(212,160,23,0.3)] transition-all duration-300 hover:scale-103 flex items-center justify-center gap-2 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #D4A017 0%, #F0C040 100%)",
              }}
            >
              💬 WhatsApp Us
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
