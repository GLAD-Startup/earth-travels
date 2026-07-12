"use client";

import React, { useState, useEffect } from "react";
import { useCountUp } from "@/lib/hooks";
import { GlassCard, RevealWrapper } from "@/components/ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
 
const CORE_DIFFERENCES = [
  {
    title: "We Answer the Phone",
    desc: "Direct WhatsApp access to your travel consultant. Not a chatbot. We support you 24/7 on tour.",
    icon: (
      <svg className="w-8 h-8 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Complete Documentation",
    desc: "Visa applications, travel insurance, foreign exchange — we handle the paperwork so you don't have to.",
    icon: (
      <svg className="w-8 h-8 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "Honest Pricing",
    desc: "No hidden charges. You see the full itemized breakup before you pay a single rupee.",
    icon: (
      <svg className="w-8 h-8 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    title: "Local Understanding",
    desc: "Based in Krishna Market, Mathura, we understand the specific vegetarian and comfort needs of local families.",
    icon: (
      <svg className="w-8 h-8 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];
 
const TEAM_MEMBERS = [
  {
    name: "Ankit Sharma",
    role: "Founder & Travel Director",
    specialty: "Europe & Exotic Destinations",
  },
  {
    name: "Priya Gupta",
    role: "Senior Travel Consultant",
    specialty: "Maldives & Southeast Asia",
  },
  {
    name: "Rahul Mathur",
    role: "Documentation Specialist",
    specialty: "Visa, Insurance & Permits",
  },
];
 
/*
 * NOTE FOR CONTENT REVIEW:
 * All certification and partner claims listed below must be verified as true
 * and currently active with the client before production launch.
 */
const CERTIFICATIONS = [
  { name: "IATA",                     logo: "/logos/qatar-airways.png",      label: "IATA Accredited Agent" },
  { name: "Ministry of Tourism",      logo: "/logos/tripadvisor.png",        label: "Ministry of Tourism Approved" },
  { name: "Booking.com",              logo: "/logos/booking-com.png",        label: "Booking.com Partner" },
  { name: "TripAdvisor",              logo: "/logos/tripadvisor.png",        label: "TripAdvisor Listed" },
  { name: "Viator",                   logo: "/logos/visa.png",              label: "Viator Affiliate" },
  { name: "JustDial",                 logo: "/logos/mastercard.png",        label: "JustDial Verified" },
  { name: "Google",                   logo: "/logos/allianz.png",           label: "Google Verified Business" },
  { name: "Allianz Travel",           logo: "/logos/allianz.png",           label: "Allianz Travel Insurance" },
  { name: "Visa",                     logo: "/logos/visa.png",              label: "Visa Accepted" },
  { name: "Mastercard",               logo: "/logos/mastercard.png",        label: "Mastercard Accepted" },
  { name: "Taj Hotels",               logo: "/logos/taj-hotels.png",        label: "Taj Hotels Partner" },
  { name: "Marriott",                 logo: "/logos/marriott.png",          label: "Marriott Partner" },
  { name: "Emirates",                 logo: "/logos/emirates.png",          label: "Emirates Preferred" },
  { name: "Singapore Airlines",       logo: "/logos/singapore-airlines.png",label: "Singapore Airlines Partner" },
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
  {
    initial: "A",
    name: "Amit Bansal",
    destination: "Dubai 🏙️",
    review: "From desert safari to Burj Khalifa, everything was pre-booked and seamless. The itinerary was perfectly paced for our family with kids.",
  },
  {
    initial: "P",
    name: "Pooja Sharma",
    destination: "Bali 🌺",
    review: "Our honeymoon was absolutely perfect. Private pool villa, sunset dinner — they thought of every detail. Truly a premium experience.",
  },
  {
    initial: "V",
    name: "Vikram Gupta",
    destination: "Europe 🇪🇺",
    review: "15 days across 5 countries and not a single hiccup. Trains, hotels, local guides — everything was arranged flawlessly. Will book again.",
  },
  {
    initial: "N",
    name: "Neha Mittal",
    destination: "Thailand 🏖️",
    review: "Best part was the pure-veg restaurant list they prepared for us. They understand what Mathura families need. Very thoughtful service.",
  },
  {
    initial: "D",
    name: "Deepak Rastogi",
    destination: "Singapore 🌃",
    review: "Visa got approved in just 3 days thanks to their documentation support. The kids loved Universal Studios. Hassle-free from start to finish.",
  },
];
 
export default function AboutPage() {
  const [count1, ref1] = useCountUp<HTMLSpanElement>({ target: 127, duration: 1500 });
  const [count2, ref2] = useCountUp<HTMLSpanElement>({ target: 50, duration: 1500 });
  const [count3, ref3] = useCountUp<HTMLSpanElement>({ target: 10, duration: 1500 });
  const [count4, ref4] = useCountUp<HTMLSpanElement>({ target: 4.7, duration: 1500, decimals: 1 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
 
  return (
    <div className="bg-parchment min-h-screen text-espresso select-none relative z-0 isolate">
      <title>About Us — Our Story & Credentials | Earth Travels</title>
      <meta name="description" content="Discover Earth Travels story. Founded in Mathura, UP, we help local families design and execute stress-free domestic and international trips." />
      
      {/* 1. Hero (60vh) — Full-bleed travel landscape */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center overflow-hidden border-b border-espresso/5">
        
        {/* Background image — vivid aerial coastline */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80"
            alt="Scenic lake surrounded by mountains"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient overlay: dark enough at center for text, fades to reveal edges */}
        <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-[#1a120a]/40 via-[#1a120a]/60 to-[#1a120a]/80" />

        {/* Title content */}
        <div className="max-w-4xl mx-auto px-6 relative z-10 mt-10">
          <RevealWrapper delay={0.1}>
            <h1 className="font-display text-4xl md:text-[72px] font-black leading-tight text-white mb-2 tracking-tight drop-shadow-lg">
              From Mathura
            </h1>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <h2 className="font-display text-4xl md:text-[72px] font-light italic text-[#F0C040] leading-none tracking-tight drop-shadow-lg">
              to the World
            </h2>
          </RevealWrapper>
        </div>
      </section>
 
      {/* 2. Our Story Section */}
      <section className="relative z-10 bg-[#fdf8f2] border-b border-espresso/5">
        <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col gap-16">
          
          {/* Quote Block */}
          <RevealWrapper delay={0.1}>
            <div className="border-l-4 border-[#D4A017] pl-6 md:pl-8 max-w-4xl">
              <blockquote className="font-display text-2xl md:text-[36px] italic text-[#D4A017] leading-normal font-light">
                &ldquo;We don&apos;t just plan trips. We make sure every family that trusts us comes back with a story they&apos;ll tell for years.&rdquo;
              </blockquote>
              <cite className="font-mono text-[10px] text-espresso/40 uppercase tracking-widest block mt-4 not-italic font-bold">
                — Director, Earth Travels
              </cite>
            </div>
          </RevealWrapper>
 
          {/* 2-Column Details: Logo & Text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Logo Card */}
            <RevealWrapper delay={0.2} className="lg:col-span-4 flex justify-start lg:justify-center">
              <div className="relative w-full max-w-[280px] overflow-hidden rounded-2xl border border-espresso/10 bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src="/images/full logo.jpeg"
                  alt="Earth Travels Full Logo"
                  className="w-full object-contain"
                />
              </div>
            </RevealWrapper>
 
            {/* Right: Paragraph text */}
            <RevealWrapper delay={0.3} className="lg:col-span-8 font-sans text-sm md:text-base text-espresso/70 leading-relaxed flex flex-col gap-6">
              <p>
                Earth Travels was founded in Mathura with a simple belief — that every family deserves to see the world, and that the journey should be as stress-free as the destination.
              </p>
              <p>
                For over a decade, we&apos;ve been planning trips for families across Uttar Pradesh, handling everything from Kashmir houseboats to Maldives water villas to European rail passes. Our office in Krishna Market is open six days a week, and our WhatsApp is open all seven. We believe in honest pricing, complete documentation support, and picking up the phone when you call.
              </p>
            </RevealWrapper>
          </div>
        </div>
        </div>
      </section>
 
      {/* 3. Stats Row (GSAP Countups) */}
      <section className="relative z-10 bg-[#fdf8f2] border-b border-espresso/5">
        <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { count: count1, ref: ref1, label: "Happy Travellers" },
            { count: count2, ref: ref2, label: "Destinations" },
            { count: count3, ref: ref3, label: "Years of Experience" },
            { count: count4, ref: ref4, label: "Average Rating ★" },
          ].map((stat, idx) => (
            <GlassCard key={idx} hover={false} className="p-6 bg-white/60 border border-espresso/10 rounded-xl">
              <span
                ref={stat.ref}
                className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4A017] leading-none block mb-2"
              >
                {stat.count}
                {idx !== 3 && "+"}
              </span>
              <span className="font-sans text-[11px] text-espresso/60 uppercase tracking-wider font-semibold">
                {stat.label}
              </span>
            </GlassCard>
          ))}
        </div>
        </div>
      </section>
 
      {/* 4. What makes us different */}
      <section className="relative z-10 bg-[#fdf8f2] border-b border-espresso/5">
        <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#D4A017] uppercase tracking-[0.2em] block mb-2">
            Our Standards
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-espresso">
            What Makes Us Different
          </h2>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {CORE_DIFFERENCES.map((diff, idx) => (
            <RevealWrapper key={idx} delay={idx * 0.1}>
              <GlassCard
                hover={true}
                className="p-6 md:p-8 bg-white/60 border border-espresso/10 hover:border-[#D4A017]/30 transition-all rounded-[20px]"
              >
                <div className="mb-4 select-none">{diff.icon}</div>
                <h4 className="font-sans text-lg font-bold text-espresso mb-2 leading-tight">
                  {diff.title}
                </h4>
                <p className="font-sans text-xs md:text-sm text-espresso/60 leading-relaxed">
                  {diff.desc}
                </p>
              </GlassCard>
            </RevealWrapper>
          ))}
        </div>
        </div>
      </section>
 
      {/* 5. Team Section */}
      <section className="relative z-10 bg-[#fdf8f2] border-b border-espresso/5">
        <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#D4A017] uppercase tracking-[0.2em] block mb-2">
            Our Planners
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-espresso">
            Our Team
          </h2>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <RevealWrapper key={idx} delay={idx * 0.1}>
              <GlassCard
                hover={true}
                className="p-6 md:p-8 bg-white/60 border border-espresso/10 hover:border-[#D4A017]/30 transition-all rounded-[20px] text-center flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#D4A017]/10 border border-[#D4A017]/35 text-[#D4A017] shadow shadow-gold/5 shrink-0 select-none">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-base font-bold text-espresso leading-tight mb-1">
                    {member.name}
                  </h4>
                  <span className="font-mono text-[10px] text-[#D4A017] uppercase tracking-widest block mb-3 font-semibold">
                    {member.role}
                  </span>
                  <p className="font-sans text-xs text-espresso/50">
                    Focus: <span className="text-espresso/80 font-medium">{member.specialty}</span>
                  </p>
                </div>
              </GlassCard>
            </RevealWrapper>
          ))}
        </div>
        </div>
      </section>
 
      {/* 6. Google Reviews Highlight + Testimonial Carousel */}
      <section className="relative z-10 bg-[#fdf8f2] border-b border-espresso/5">
        <div className="max-w-7xl mx-auto px-6 py-24">

        <RevealWrapper delay={0}>
          <GlassCard hover={false} className="p-8 md:p-10 bg-white/60 border border-espresso/10 rounded-[20px] mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <span className="font-mono text-[96px] font-black text-[#D4A017] leading-none block select-none">
                4.7
              </span>
              <span className="font-sans text-xs text-espresso/60 tracking-wider block mt-1 uppercase font-semibold">
                out of 5 · 127 reviews
              </span>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-right">
              <div className="flex items-center gap-1.5 text-2xl text-[#D4A017] select-none">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <a
                href="https://maps.app.goo.gl/wKx6oV839iS3XvRVA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline font-sans text-center text-xs font-semibold py-3 px-6 border border-espresso/10 hover:border-[#D4A017]/30 flex items-center justify-center gap-1.5"
              >
                View all reviews on Google
              </a>
            </div>
          </GlassCard>
        </RevealWrapper>

        {/* Reviews Carousel */}
        <RevealWrapper delay={0.1}>
          {mounted ? (
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              speed={800}
              slidesPerView={1}
              spaceBetween={24}
              grabCursor={true}
              loop={true}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 32 },
              }}
            >
              {TESTIMONIALS.map((t, idx) => (
                <SwiperSlide key={idx}>
                  <GlassCard
                    hover={false}
                    className="p-6 md:p-8 bg-white/60 border border-espresso/10 rounded-[20px] h-full"
                  >
                    <div className="flex items-center gap-3.5 mb-5 border-b border-espresso/5 pb-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-parchment bg-[#D4A017] shrink-0 select-none">
                        {t.initial}
                      </div>
                      <div>
                        <h4 className="font-sans text-sm font-bold text-espresso leading-tight">
                          {t.name}
                        </h4>
                        <span className="text-[10px] text-espresso/40 font-mono tracking-widest block uppercase font-semibold mt-0.5">
                          📍 Trip to {t.destination}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[#D4A017] text-xs mb-3 select-none">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                    <p className="font-sans text-[13px] text-espresso/70 leading-[1.6] italic">
                      &ldquo;{t.review}&rdquo;
                    </p>
                  </GlassCard>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.slice(0, 3).map((t, idx) => (
                <GlassCard key={idx} hover={false} className="p-6 md:p-8 bg-white/60 border border-espresso/10 rounded-[20px]">
                  <p className="font-sans text-[13px] text-espresso/70 leading-[1.6] italic">&ldquo;{t.review}&rdquo;</p>
                </GlassCard>
              ))}
            </div>
          )}
        </RevealWrapper>

        </div>
      </section>

      {/* 7. Trusted & Certified — Auto-scrolling logo carousel */}
      <section className="relative z-10 bg-[#fdf8f2] text-center border-b border-espresso/5 overflow-hidden">
        <div className="py-20 px-6">
          <h3 className="font-mono text-xs text-espresso/40 uppercase tracking-[0.25em] block mb-10 font-bold">
            Trusted & Certified
          </h3>

          <div className="relative">
            {/* Left/Right fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#fdf8f2] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fdf8f2] to-transparent z-10 pointer-events-none" />

            {mounted ? (
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
                speed={3000}
                slidesPerView="auto"
                spaceBetween={32}
                grabCursor={true}
                loop={true}
                className="cert-carousel"
              >
                {CERTIFICATIONS.map((cert, idx) => (
                  <SwiperSlide key={`${cert.name}-${idx}`} className="!w-auto">
                    <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-espresso/8 bg-white/60 shadow-sm hover:shadow-md hover:border-[#D4A017]/25 transition-all duration-300 select-none">
                      <img
                        src={cert.logo}
                        alt={cert.name}
                        className="w-8 h-8 object-contain shrink-0 opacity-70 grayscale hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                      />
                      <span className="font-sans text-xs font-semibold text-espresso/70 whitespace-nowrap">{cert.label}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="flex gap-6 items-center justify-center flex-wrap">
                {CERTIFICATIONS.slice(0, 7).map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-espresso/8 bg-white/60 shadow-sm">
                    <img src={cert.logo} alt={cert.name} className="w-8 h-8 object-contain opacity-70 grayscale" loading="lazy" />
                    <span className="font-sans text-xs font-semibold text-espresso/70 whitespace-nowrap">{cert.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <style jsx global>{`
            .cert-carousel .swiper-wrapper {
              transition-timing-function: linear !important;
            }
          `}</style>
        </div>
      </section>
 
      {/* 8. Closing CTA */}
      <section className="relative w-full py-16 px-6 overflow-hidden text-center bg-[#fdf8f2] border-t border-espresso/5 flex items-center justify-center z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-5">
          
          <h2 className="font-display text-3xl md:text-[44px] font-normal leading-tight text-espresso select-none">
            Planning your next trip? Let&apos;s talk.
          </h2>
 
          <a
            href="tel:8941881111"
            className="font-mono text-2xl md:text-[32px] font-bold text-[#D4A017] hover:text-[#F0C040] transition-colors select-all mt-1"
          >
            89418 81111
          </a>
 
          {/* Action triggers */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full sm:w-auto">
            <a
              href="tel:8941881111"
              className="w-full sm:w-auto btn-outline font-sans text-center text-xs font-bold py-3.5 px-8 border border-espresso/10 hover:border-[#D4A017]/30 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/918941881111"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto font-sans text-center text-xs font-bold py-3.5 px-8 text-espresso rounded-full hover:shadow-[0_0_15px_rgba(212,160,23,0.3)] transition-all duration-300 hover:scale-103 flex items-center justify-center gap-2 cursor-pointer"
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

