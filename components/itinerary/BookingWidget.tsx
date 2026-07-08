"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SITE_CONFIG } from "@/lib/data";
import { GlassCard } from "@/components/ui";

const BASE_ADULT = 32000;
const BASE_CHILD = 20800;

export default function BookingWidget() {
  const router = useRouter();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [travelDate, setTravelDate] = useState("");
  const [roomType, setRoomType] = useState("standard");
  const [addons, setAddons] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const roomRates: Record<string, number> = {
    standard: 0,
    luxury: 8000,
    suite: 15000,
  };

  const addonRates: Record<string, number> = {
    photoshoot: 2500,
    heliride: 7500,
    feast: 1800,
  };

  useEffect(() => {
    const baseAmount = adults * BASE_ADULT + children * BASE_CHILD;
    const roomCost = roomRates[roomType] || 0;
    const addonCost = addons.reduce((sum, key) => sum + (addonRates[key] || 0), 0);
    const taxes = Math.floor((baseAmount + roomCost + addonCost) * 0.05);

    setTotalPrice(baseAmount + roomCost + addonCost + taxes);
  }, [adults, children, roomType, addons]);

  const handleToggleAddon = (key: string) => {
    setAddons((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleBookingRequest = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      destination: "kashmir",
      adults: adults.toString(),
      children: children.toString(),
      date: travelDate,
      room: roomType,
      addons: addons.join(","),
      price: totalPrice.toString(),
    });
    router.push(`/quote?${params.toString()}`);
  };

  const getWhatsAppLink = () => {
    const text = `Hi Earth Travels, I am planning a Kashmir tour from Mathura for ${adults} Adults and ${children} Children around ${
      travelDate || "soon"
    }. Preferred Room: ${roomType.toUpperCase()}. Estimated price: ₹${totalPrice.toLocaleString(
      "en-IN"
    )}. Please share availability!`;
    return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <GlassCard hover={false} className="p-6 md:p-8 bg-background/80 border border-charcoal/10 shadow-2xl sticky top-24">
      <h3 className="font-display font-sans text-xl font-bold text-charcoal mb-6 border-b border-charcoal/5 pb-4">
        Book This Package
      </h3>

      <form onSubmit={handleBookingRequest} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-wider pl-1">
            Travel Date
          </label>
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className="bg-white/5 border border-charcoal/10 rounded-xl px-4 py-2.5 text-xs text-charcoal focus:outline-none focus:border-gold/50 font-sans"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-wider pl-1">
              Adults
            </label>
            <div className="flex items-center justify-between bg-white/5 border border-charcoal/10 rounded-xl px-2 py-1 h-[40px]">
              <button
                type="button"
                onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                className="w-6 h-6 rounded flex items-center justify-center hover:bg-white/10 text-charcoal font-bold"
              >
                -
              </button>
              <span className="font-mono text-xs font-semibold">{adults}</span>
              <button
                type="button"
                onClick={() => setAdults((prev) => prev + 1)}
                className="w-6 h-6 rounded flex items-center justify-center hover:bg-white/10 text-charcoal font-bold"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-wider pl-1">
              Children
            </label>
            <div className="flex items-center justify-between bg-white/5 border border-charcoal/10 rounded-xl px-2 py-1 h-[40px]">
              <button
                type="button"
                onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                className="w-6 h-6 rounded flex items-center justify-center hover:bg-white/10 text-charcoal font-bold"
              >
                -
              </button>
              <span className="font-mono text-xs font-semibold">{children}</span>
              <button
                type="button"
                onClick={() => setChildren((prev) => prev + 1)}
                className="w-6 h-6 rounded flex items-center justify-center hover:bg-white/10 text-charcoal font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-wider pl-1">
            Room Standard
          </label>
          <div className="relative">
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full bg-white/5 border border-charcoal/10 rounded-xl px-4 py-2.5 text-xs text-charcoal focus:outline-none focus:border-gold/50 appearance-none font-sans"
            >
              <option value="standard" className="bg-background text-charcoal">Standard Stay (+₹0)</option>
              <option value="luxury" className="bg-background text-charcoal">Boutique Luxury (+₹8,000)</option>
              <option value="suite" className="bg-background text-charcoal">Royal Suite Stay (+₹15,000)</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal/40 text-[10px]">
              ▼
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 border-t border-charcoal/5 pt-4">
          <label className="font-mono text-[10px] text-charcoal/50 uppercase tracking-wider pl-1">
            Optional Add-ons
          </label>
          <div className="flex flex-col gap-2.5">
            <label className="flex items-center justify-between text-xs text-charcoal/70 cursor-pointer hover:text-charcoal">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={addons.includes("photoshoot")}
                  onChange={() => handleToggleAddon("photoshoot")}
                  className="rounded border-charcoal/20 bg-white/5 text-gold focus:ring-0 accent-gold"
                />
                Shikara Photoshoot
              </span>
              <span className="font-mono text-[#F0C040] font-semibold">+₹2,500</span>
            </label>
            <label className="flex items-center justify-between text-xs text-charcoal/70 cursor-pointer hover:text-charcoal">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={addons.includes("heliride")}
                  onChange={() => handleToggleAddon("heliride")}
                  className="rounded border-charcoal/20 bg-white/5 text-gold focus:ring-0 accent-gold"
                />
                Gulmarg Heli-Ride
              </span>
              <span className="font-mono text-[#F0C040] font-semibold">+₹7,500</span>
            </label>
            <label className="flex items-center justify-between text-xs text-charcoal/70 cursor-pointer hover:text-charcoal">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={addons.includes("feast")}
                  onChange={() => handleToggleAddon("feast")}
                  className="rounded border-charcoal/20 bg-white/5 text-gold focus:ring-0 accent-gold"
                />
                Wazwan Traditional Dinner
              </span>
              <span className="font-mono text-[#F0C040] font-semibold">+₹1,800</span>
            </label>
          </div>
        </div>

        <div className="pt-4 border-t border-charcoal/5 flex items-baseline justify-between">
          <span className="text-xs text-charcoal/40 font-sans">Total (incl. GST)</span>
          <span className="font-mono text-2xl font-black text-gold">
            ₹{totalPrice.toLocaleString("en-IN")}
          </span>
        </div>

        <button
          type="submit"
          className="btn-gold font-sans font-semibold text-xs tracking-wider py-3 mt-2 shadow-lg shadow-gold/10 gold-glow uppercase"
        >
          Request Booking
        </button>

        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center border border-emerald-500/20 hover:bg-emerald-600/10 text-emerald-400 font-sans text-xs font-semibold py-3 rounded-full transition-colors flex items-center justify-center gap-2"
        >
          Or WhatsApp directly
        </a>
      </form>
    </GlassCard>
  );
}
