"use client";

import React, { useState } from "react";
import { GlassCard, RevealWrapper } from "@/components/ui";
import { useIsOpen } from "@/lib/hooks";

import { DESTINATIONS as DESTINATIONS_DATA } from "@/lib/data/destinations";
import { CRUISES } from "@/lib/data/cruises";
import { RAIL_JOURNEYS } from "@/lib/data/rails";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "Flexible",
];

export default function ContactPage() {
  const { isOpen } = useIsOpen();

  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState("Custom Tour Package");
  const [interestDetail, setInterestDetail] = useState("Custom/Not Sure");
  const [month, setMonth] = useState("Flexible");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ states
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
  });

  const toggleFaq = (idx: number) => {
    setFaqOpen((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const getInterestOptions = () => {
    switch (serviceType) {
      case "Custom Tour Package":
        return [...DESTINATIONS_DATA.map((d) => d.name), "Custom/Not Sure"];
      case "Luxury & Scenic Cruise":
        return [...CRUISES.map((c) => c.name), "Other Cruise Route"];
      case "Luxury & Scenic Rail Journey":
        return [...RAIL_JOURNEYS.map((r) => r.name), "Other Train Route"];
      default:
        return ["General Inquiry"];
    }
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalInquiry = {
      formType: "Contact Inquiry",
      name,
      phone: `+91 ${phone}`,
      email,
      meta: {
        destination: serviceType === "General / Other Inquiry" ? "General Inquiry" : `[${serviceType}] ${interestDetail}`,
        month,
        message,
      }
    };
    console.log("Earth Travels - Tour Inquiry Received:", finalInquiry);
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
          body: JSON.stringify(finalInquiry),
        });
      } catch (err) {
        console.error("Error submitting to Google Sheets:", err);
      }
    }
  };


  const faqs = [
    {
      q: "Do I need to pay anything to get a quote?",
      a: "No. Our consultation and itinerary planning is completely free. You only pay once you're happy with the plan and proceed to book.",
    },
    {
      q: "How quickly do you respond to inquiries?",
      a: "Within 2 hours during business hours (Mon–Sat, 10AM–7:30PM IST). For urgent travel assistance, contacting us directly via WhatsApp is the fastest way.",
    },
    {
      q: "Can you handle international visa applications?",
      a: "Yes. We assist with visa applications for all countries we cover — including UAE, Thailand, Malaysia, Singapore, Sri Lanka, Schengen states, and more.",
    },
  ];

  return (
    <div className="bg-background min-h-screen text-charcoal select-none">
      <title>Contact Us — Office Details & Map | Earth Travels</title>
      <meta name="description" content="Get in touch with Earth Travels in Mathura. View our office address, phone numbers, WhatsApp links, Google maps, and FAQ guides." />
      
      {/* 1. Page Header */}
      <section className="pt-28 pb-10 text-center px-6">
        <RevealWrapper delay={0.1}>
          <h1 className="font-display text-4xl md:text-[64px] font-bold text-charcoal tracking-tight leading-tight">
            Let&apos;s Plan Your Journey
          </h1>
        </RevealWrapper>
      </section>

      {/* 2. Two-Column Split Layout */}
      <section className="max-w-7xl mx-auto px-6 py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Contact details & Map (60% width equivalent) */}
          <div className="lg:col-span-7 flex flex-col gap-8 w-full">
            <GlassCard hover={false} className="p-8 bg-background/40 border border-charcoal/10 rounded-[20px] flex flex-col gap-6">
              <h2 className="font-display text-2xl md:text-3xl font-normal text-charcoal pl-4 border-l-2 border-[#D4A017] leading-none mb-2">
                Get in Touch
              </h2>

              <div className="flex flex-col gap-5 text-sm text-charcoal/80">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <span className="text-xl select-none shrink-0 mt-0.5">📞</span>
                  <div>
                    <span className="font-mono text-[10px] text-charcoal/40 uppercase tracking-wider block mb-0.5">Phone</span>
                    <a
                      href="tel:8941881111"
                      className="font-mono text-lg font-bold text-[#D4A017] hover:text-[#F0C040] transition-colors"
                    >
                      89418 81111
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <span className="text-xl select-none shrink-0 mt-0.5">💬</span>
                  <div>
                    <span className="font-mono text-[10px] text-charcoal/40 uppercase tracking-wider block mb-0.5">WhatsApp</span>
                    <a
                      href="https://wa.me/918941881111"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-base font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      +91 89418 81111
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <span className="text-xl select-none shrink-0 mt-0.5">📧</span>
                  <div>
                    <span className="font-mono text-[10px] text-charcoal/40 uppercase tracking-wider block mb-0.5">Email</span>
                    <a
                      href="mailto:info@earthtravelsindia.in"
                      className="font-mono text-sm hover:text-[#D4A017] transition-colors"
                    >
                      info@earthtravelsindia.in
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <span className="text-xl select-none shrink-0 mt-0.5">📍</span>
                  <div>
                    <span className="font-mono text-[10px] text-charcoal/40 uppercase tracking-wider block mb-0.5">Address</span>
                    <p className="font-sans leading-relaxed">
                      Shop No.138, 1st Floor Krishna Plaza, Krishna Market, Mathura, UP 281001
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <span className="text-xl select-none shrink-0 mt-0.5">🕐</span>
                  <div>
                    <span className="font-mono text-[10px] text-charcoal/40 uppercase tracking-wider block mb-0.5">Business Hours</span>
                    <p className="font-mono text-xs text-charcoal/70">
                      Mon–Sat 10:00 AM – 7:30 PM IST (Sunday Closed)
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <span className="text-xl select-none shrink-0 mt-0.5">📸</span>
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] text-charcoal/40 uppercase tracking-wider block">Instagram</span>
                    <a
                      href="https://instagram.com/niteshkhandelwal8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4 text-[#E1306C] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                      <span className="font-mono text-sm font-bold text-[#D4A017] group-hover:text-[#E1306C] transition-colors">@niteshkhandelwal8</span>
                    </a>
                    <a
                      href="https://instagram.com/earthtravelsmathura"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4 text-[#E1306C] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                      <span className="font-mono text-sm font-bold text-[#D4A017] group-hover:text-[#E1306C] transition-colors">@earthtravelsmathura</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2 pt-4 border-t border-charcoal/5 text-xs font-sans">
                <span
                  className={`w-2.5 h-2.5 rounded-full inline-block ${
                    isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"
                  }`}
                />
                <span className="font-mono text-charcoal/80 font-medium">
                  {isOpen
                    ? `Open Now · We'll respond within 2 hours`
                    : `Closed · We'll respond first thing Monday 10 AM`}
                </span>
              </div>
            </GlassCard>

            {/* Google Map iframe */}
            <div className="w-full h-[280px] rounded-2xl overflow-hidden border border-charcoal/10 shadow-2xl relative">
              {/* NOTE: Google Maps embed placeholder queries are populated securely */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.8872242130383!2d77.68884947545041!3d27.20695027647209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973715ffea226db%3A0xe54b9d0ab0fa000b!2sKrishna%20Plaza!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Earth Travels Office Location, Krishna Market Mathura"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {/* RIGHT: Inquiry Form Card (40% width equivalent) */}
          <div className="lg:col-span-5 w-full">
            <GlassCard hover={false} className="p-8 bg-background/40 border border-charcoal/10 rounded-[20px] shadow-2xl">
              {!isSubmitted ? (
                <form onSubmit={handleInquirySubmit} className="flex flex-col gap-5">
                  <h2 className="font-display text-2xl md:text-3xl font-normal text-charcoal pl-4 border-l-2 border-[#D4A017] leading-none mb-2">
                    Inquire About a Journey
                  </h2>

                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter full name"
                      className="w-full bg-white/5 border border-charcoal/10 rounded-xl px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-[#D4A017] focus:ring-3 focus:ring-[#D4A017]/15 font-sans h-[46px]"
                      required
                    />
                  </div>

                  {/* WhatsApp Number with prefix */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">
                      WhatsApp Number
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40 font-mono text-sm select-none">
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

                  {/* Service Type Selection */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">
                      Service Interest
                    </label>
                    <div className="relative">
                      <select
                        value={serviceType}
                        onChange={(e) => {
                          const newType = e.target.value;
                          setServiceType(newType);
                          // Reset the interest detail to default when service type changes
                          if (newType === "Custom Tour Package") {
                            setInterestDetail("Custom/Not Sure");
                          } else if (newType === "Luxury & Scenic Cruise") {
                            setInterestDetail("Other Cruise Route");
                          } else if (newType === "Luxury & Scenic Rail Journey") {
                            setInterestDetail("Other Train Route");
                          } else {
                            setInterestDetail("General Inquiry");
                          }
                        }}
                        className="w-full bg-white/5 border border-charcoal/10 rounded-xl px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-[#D4A017]/50 appearance-none font-sans h-[46px]"
                      >
                        <option value="Custom Tour Package" className="bg-background">Custom Tour Package</option>
                        <option value="Luxury & Scenic Cruise" className="bg-background">Luxury & Scenic Cruise Route</option>
                        <option value="Luxury & Scenic Rail Journey" className="bg-background">Luxury & Scenic Rail Journey</option>
                        <option value="General / Other Inquiry" className="bg-background">General / Other Inquiry</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal/40 text-xs">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Destination / Route Detail */}
                  {serviceType !== "General / Other Inquiry" && (
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">
                        Select Destination / Route
                      </label>
                      <div className="relative">
                        <select
                          value={interestDetail}
                          onChange={(e) => setInterestDetail(e.target.value)}
                          className="w-full bg-white/5 border border-charcoal/10 rounded-xl px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-[#D4A017]/50 appearance-none font-sans h-[46px]"
                        >
                          {getInterestOptions().map((opt) => (
                            <option key={opt} value={opt} className="bg-background">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal/40 text-xs">
                          ▼
                        </div>
                      </div>
                    </div>
                  )}


                  {/* Month */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">
                      Travel Month
                    </label>
                    <div className="relative">
                      <select
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        className="w-full bg-white/5 border border-charcoal/10 rounded-xl px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-[#D4A017]/50 appearance-none font-sans h-[46px]"
                      >
                        {MONTHS.map((m) => (
                          <option key={m} value={m} className="bg-background">
                            {m}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal/40 text-xs">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest pl-1">
                      Your Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your dream trip — destination, group size, budget, any special requirements..."
                      rows={5}
                      className="w-full bg-white/5 border border-charcoal/10 rounded-xl px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-[#D4A017] font-sans resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-[46px] font-sans text-xs font-bold text-midnight rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,160,23,0.35)] gold-glow uppercase"
                    style={{
                      background: "linear-gradient(135deg, #D4A017 0%, #F0C040 100%)",
                    }}
                  >
                    Send Inquiry
                  </button>
                </form>
              ) : (
                <div className="text-center py-16 flex flex-col items-center animate-fade-in select-none">
                  <div className="w-16 h-16 bg-[#D4A017]/10 border border-[#D4A017] rounded-full flex items-center justify-center text-[#D4A017] text-3xl mb-6 shadow-2xl shadow-gold/5">
                    ✓
                  </div>
                  <h3 className="font-display text-2xl font-bold text-charcoal mb-2 leading-none">
                    Inquiry Received!
                  </h3>
                  <p className="font-sans text-xs text-charcoal/60 max-w-xs mb-6 leading-relaxed">
                    Thank you, <span className="font-bold text-[#D4A017]">{name}</span>. Our Mathura team has registered your interest in {serviceType === "General / Other Inquiry" ? "our services" : interestDetail} and will reach out to you within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName("");
                      setPhone("");
                      setEmail("");
                      setServiceType("Custom Tour Package");
                      setInterestDetail("Custom/Not Sure");
                      setMonth("Flexible");
                      setMessage("");
                    }}
                    className="btn-outline font-sans text-xs font-semibold py-2.5 px-6"
                  >
                    Send Another Inquiry

                  </button>
                </div>
              )}
            </GlassCard>
          </div>

        </div>
      </section>

      {/* 3. Bottom Section: Walk-in Welcomes */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10 text-center select-none border-t border-charcoal/5">
        <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-3">
          Find Us in Mathura
        </h3>
        <p className="font-sans text-xs md:text-sm text-charcoal/60 max-w-xl mx-auto leading-relaxed">
          Shop No.138, 1st Floor Krishna Plaza, Krishna Market, Mathura, UP 281001. <br className="hidden sm:inline" />
          <span className="text-[#D4A017] font-semibold">Walk-in welcome during business hours.</span> We&apos;re on the 1st floor of Krishna Plaza, above the Krishna Market entrance.
        </p>
      </section>

      {/* 4. FAQ Accordions */}
      <section className="max-w-3xl mx-auto px-6 py-16 relative z-10 flex flex-col gap-6">
        <h3 className="font-display text-2xl font-bold text-charcoal mb-2 pl-4 border-l-2 border-[#D4A017]">
          Frequently Asked Questions
        </h3>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = faqOpen[idx];
            return (
              <GlassCard
                key={idx}
                hover={false}
                className="p-5 bg-background/40 border border-charcoal/8 rounded-xl flex flex-col gap-3 transition-colors cursor-pointer"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex items-center justify-between font-sans text-sm font-bold text-charcoal">
                  <span>{faq.q}</span>
                  <span className="text-[10px] text-charcoal/40">{isOpen ? "▲" : "▼"}</span>
                </div>
                {isOpen && (
                  <p className="font-sans text-xs text-charcoal/60 leading-relaxed pt-2 border-t border-charcoal/5 animate-fade-in">
                    {faq.a}
                  </p>
                )}
              </GlassCard>
            );
          })}
        </div>
      </section>

    </div>
  );
}
