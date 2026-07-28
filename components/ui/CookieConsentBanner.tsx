"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  hasValidConsent,
  acceptAllConsent,
  rejectNonEssentialConsent,
  setConsent,
  type CookieCategories,
} from "@/lib/consentManager";
import { SITE_CONFIG } from "@/lib/data";
import CookiePreferencesModal from "./CookiePreferencesModal";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
    if (!hasValidConsent()) {
      setVisible(true);
    }

    const handleOpenPrefs = () => {
      setVisible(true);
      setShowPreferences(true);
    };

    window.addEventListener("open-cookie-preferences", handleOpenPrefs);
    return () => window.removeEventListener("open-cookie-preferences", handleOpenPrefs);
  }, []);

  const dismiss = useCallback(() => {
    setAnimatingOut(true);
    setTimeout(() => {
      setVisible(false);
      setAnimatingOut(false);
    }, 280);
  }, []);

  const handleAcceptAll = () => {
    acceptAllConsent();
    dismiss();
  };

  const handleReject = () => {
    rejectNonEssentialConsent();
    dismiss();
  };

  const handleSavePreferences = (categories: Omit<CookieCategories, "necessary">) => {
    setConsent(categories);
    setShowPreferences(false);
    dismiss();
  };

  if (!visible) return null;

  return (
    <>
      {/* Sleek Professional Bottom Bar / Floating Card */}
      <div
        role="region"
        aria-live="polite"
        aria-label="Cookie & Privacy Consent"
        className={`consent-banner ${animatingOut ? "consent-banner--out" : "consent-banner--in"}`}
      >
        <div className="consent-banner__accent" aria-hidden="true" />

        <div className="consent-banner__header">
          <div className="consent-banner__icon-box">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <div>
            <h3 className="consent-banner__title">We Value Your Privacy</h3>
            <span className="consent-banner__subtitle">{SITE_CONFIG.name} · Privacy Preferences</span>
          </div>
        </div>

        <p className="consent-banner__body">
          We use cookies and similar technologies to enhance site navigation, analyze performance, and deliver personalized travel experiences. By clicking &quot;Accept All Cookies&quot;, you consent to our use of cookies in accordance with our{" "}
          <Link href="/cookie-policy" className="consent-link">
            Cookie Policy
          </Link>
          .
        </p>

        <div className="consent-banner__actions">
          <button
            onClick={handleAcceptAll}
            className="consent-btn consent-btn--gold"
          >
            Accept All Cookies
          </button>

          <button
            onClick={handleReject}
            className="consent-btn consent-btn--outline"
          >
            Reject Non-Essential
          </button>

          <button
            onClick={() => setShowPreferences(true)}
            className="consent-btn consent-btn--ghost flex items-center gap-1.5"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14" />
              <line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" />
              <line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" />
              <line x1="9" y1="8" x2="15" y2="8" />
              <line x1="17" y1="16" x2="23" y2="16" />
            </svg>
            Cookie Settings
          </button>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <CookiePreferencesModal
          onSave={handleSavePreferences}
          onClose={() => setShowPreferences(false)}
        />
      )}
    </>
  );
}
