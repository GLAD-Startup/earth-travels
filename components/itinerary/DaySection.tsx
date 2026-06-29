"use client";

import React from "react";
import { GlassCard } from "@/components/ui";

type Activity = {
  icon: string;
  time: string;
  name: string;
  description: string;
};

interface DaySectionProps {
  dayNumber: number;
  title: string;
  image: string;
  activities: Activity[];
  localTip: string;
}

export default function DaySection({
  dayNumber,
  title,
  image,
  activities,
  localTip,
}: DaySectionProps) {
  return (
    <section
      id={`day-${dayNumber}`}
      className="relative min-h-[90vh] py-16 flex flex-col justify-center border-b border-white/5 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.12] blur-xl z-0"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="absolute inset-0 bg-[#080C14]/70 pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full flex flex-col justify-between">
        <div className="absolute -top-12 -left-6 pointer-events-none select-none opacity-10 z-0">
          <span className="font-mono text-[160px] md:text-[220px] font-black leading-none text-gold">
            {dayNumber < 10 ? `0${dayNumber}` : dayNumber}
          </span>
        </div>

        <div className="relative z-10 mb-10 pl-4 border-l-2 border-gold mt-6">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] block mb-1">
            Day {dayNumber} Journey
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-normal text-white">
            {title}
          </h2>
        </div>

        <div className="flex flex-col gap-6 mb-10 relative z-10">
          {activities.map((act, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
            >
              <div className="w-12 h-12 shrink-0 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-xl shadow-lg">
                {act.icon}
              </div>

              <div className="flex-grow">
                <div className="flex items-baseline justify-between mb-1 gap-2">
                  <h4 className="font-sans text-base font-bold text-white leading-tight">
                    {act.name}
                  </h4>
                  <span className="font-mono text-[10px] text-gold uppercase tracking-wider block shrink-0">
                    ⏱ {act.time}
                  </span>
                </div>
                <p className="font-sans text-xs md:text-sm text-white/70 leading-relaxed">
                  {act.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10">
          <GlassCard
            hover={false}
            className="p-5 border-l-2 border-l-gold border-y-white/10 border-r-white/10 bg-gold/5 rounded-xl rounded-l-none"
          >
            <div className="flex items-start gap-3">
              <span className="text-lg select-none">💡</span>
              <div>
                <span className="font-mono text-[10px] text-gold-light uppercase tracking-wider block mb-1 font-semibold">
                  Mathura Agent local Tip
                </span>
                <p className="font-sans text-xs text-white/80 leading-relaxed">
                  {localTip}
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
