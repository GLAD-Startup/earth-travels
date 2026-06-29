"use client";

import React, { Suspense } from "react";
import QuoteForm from "@/components/quote/QuoteForm";

export default function QuotePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#080C14] flex items-center justify-center text-[#D4A017] font-mono text-sm">
          Loading Planner Wizard...
        </div>
      }
    >
      <QuoteForm />
    </Suspense>
  );
}
