"use client";

import React from "react";
import { GlassCard } from "@/components/ui";

const INCLUSIONS = [
  "Welcome drink on arrival (traditional Kashmiri Kehwa)",
  "7 Nights accommodation in selected properties (houseboat + boutique hotels)",
  "Daily breakfast and dinner (Kashmiri/Indian/Veg options)",
  "Private AC sedan/SUV (Toyota Innova) for all transfers & sightseeing",
  "Houseboat stay in Dal Lake with private Shikara crossing",
  "Gulmarg Gondola cable car tickets (Phase I & II pre-booked)",
  "Welcome travel kit & local assistance throughout the journey",
  "All state permits, driver allowances, toll taxes, and parking fees",
];

const EXCLUSIONS = [
  "Airfare / Train fare from Mathura/Delhi (available as add-on)",
  "Lunch and other meals not specified in inclusions",
  "Pony rides in Gulmarg/Pahalgam, local internal vehicle hires (Aru/Betaab)",
  "Personal expenses like laundry, telephone calls, tips, bar bills",
  "Travel insurance (can be added separately)",
  "Any item or service not mentioned in the inclusions list",
];

export default function InclusionsCard() {
  return (
    <GlassCard hover={false} className="p-6 md:p-8 bg-midnight/40 border border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-sans text-lg font-bold text-emerald-400 mb-6 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs border border-emerald-500/20">
              ✓
            </span>
            What&apos;s Included
          </h4>
          <ul className="flex flex-col gap-3.5">
            {INCLUSIONS.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-white/80 leading-relaxed font-sans">
                <span className="text-emerald-400 shrink-0 select-none mt-0.5">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t md:border-t-0 md:border-l border-white/5 pt-8 md:pt-0 md:pl-8">
          <h4 className="font-sans text-lg font-bold text-rose-400 mb-6 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center text-xs border border-rose-500/20">
              ✕
            </span>
            What&apos;s Excluded
          </h4>
          <ul className="flex flex-col gap-3.5">
            {EXCLUSIONS.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-white/60 leading-relaxed font-sans">
                <span className="text-rose-400 shrink-0 select-none mt-0.5">✖</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </GlassCard>
  );
}
