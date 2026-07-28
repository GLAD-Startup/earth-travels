"use client";

import React, { useState, useEffect, useRef } from "react";
import { getConsent, acceptAllConsent, type CookieCategories } from "@/lib/consentManager";
import { SITE_CONFIG } from "@/lib/data";

interface Props {
  onSave: (categories: Omit<CookieCategories, "necessary">) => void;
  onClose: () => void;
}

interface CategoryConfig {
  key: keyof Omit<CookieCategories, "necessary">;
  label: string;
  badge: string;
  description: string;
  examples: string;
}

const CATEGORIES: CategoryConfig[] = [
  {
    key: "analytics",
    label: "Analytics & Performance",
    badge: "Optional",
    description:
      "Helps us measure site traffic, understand popular travel destinations, and optimize website performance for all visitors.",
    examples: "Google Analytics 4 (_ga, _ga_*), page performance counters",
  },
  {
    key: "marketing",
    label: "Targeting & Advertising",
    badge: "Optional",
    description:
      "Enables personalized travel recommendations and campaign measuring across partner platforms like Meta and Google.",
    examples: "Meta Pixel (_fbp), Google Ads remarketing tags",
  },
  {
    key: "functional",
    label: "Functional & Experience",
    badge: "Optional",
    description:
      "Remembers your personal preferences such as recent itinerary searches and currency settings for a seamless booking experience.",
    examples: "Itinerary draft cache, recent search memory",
  },
];

export default function CookiePreferencesModal({ onSave, onClose }: Props) {
  const [prefs, setPrefs] = useState<Omit<CookieCategories, "necessary">>({
    analytics: false,
    marketing: false,
    functional: false,
  });

  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = getConsent();
    if (current?.categories) {
      setPrefs({
        analytics: Boolean(current.categories.analytics),
        marketing: Boolean(current.categories.marketing),
        functional: Boolean(current.categories.functional),
      });
    }
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const toggleCategory = (key: keyof Omit<CookieCategories, "necessary">) => {
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    onSave(prefs);
  };

  const handleAcceptAllInsideModal = () => {
    acceptAllConsent();
    onSave({ analytics: true, marketing: true, functional: true });
  };

  return (
    <div
      className="consent-modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-prefs-title"
        className="consent-prefs-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="consent-prefs-modal__header">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#c4900f]/10 text-[#c4900f] flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <div>
              <h2 id="cookie-prefs-title" className="consent-prefs-modal__title">
                Privacy &amp; Preference Center
              </h2>
              <p className="text-[11px] text-[#1a120a]/50 font-mono">{SITE_CONFIG.name} · Privacy Preferences</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="consent-prefs-modal__close"
            aria-label="Close preferences"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="consent-prefs-modal__body">
          {/* Strictly Necessary (Always On) */}
          <div className="consent-category">
            <div className="consent-category__info">
              <div className="consent-category__label">
                <span>Strictly Necessary Cookies</span>
                <span className="consent-category__badge">Always Active</span>
              </div>
              <p className="consent-category__desc">
                Required for core website security, session management, user authentication, and storing your privacy preferences. These cookies cannot be turned off.
              </p>
              <span className="text-[11px] font-mono text-[#1a120a]/45 block mt-1">
                Used for: CSRF tokens, session IDs, consent storage
              </span>
            </div>
            <button
              className="consent-toggle consent-toggle--disabled"
              disabled
              aria-label="Necessary cookies always active"
            >
              <span className="consent-toggle__thumb" />
            </button>
          </div>

          {/* Optional Categories */}
          {CATEGORIES.map(({ key, label, badge, description, examples }) => {
            const isEnabled = prefs[key];
            return (
              <div key={key} className="consent-category">
                <div className="consent-category__info">
                  <div className="consent-category__label">
                    <span>{label}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#1a120a]/5 text-[#1a120a]/60">
                      {badge}
                    </span>
                  </div>
                  <p className="consent-category__desc">{description}</p>
                  <span className="text-[11px] font-mono text-[#1a120a]/45 block mt-1">
                    Used for: {examples}
                  </span>
                </div>
                <button
                  onClick={() => toggleCategory(key)}
                  className={`consent-toggle ${isEnabled ? "consent-toggle--on" : ""}`}
                  aria-pressed={isEnabled}
                  aria-label={`Toggle ${label}`}
                >
                  <span className="consent-toggle__thumb" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="consent-prefs-modal__footer">
          <button
            onClick={handleAcceptAllInsideModal}
            className="consent-btn consent-btn--outline"
          >
            Allow All
          </button>
          <button
            onClick={handleSave}
            className="consent-btn consent-btn--gold"
          >
            Save My Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
