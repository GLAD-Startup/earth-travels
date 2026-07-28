"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { hasAcceptedTerms, acceptTerms, TERMS_VERSION } from "@/lib/consentManager";
import { SITE_CONFIG } from "@/lib/data";

export default function TermsModal() {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState<"summary" | "full">("summary");

  const dialogRef = useRef<HTMLDivElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!hasAcceptedTerms()) {
      setVisible(true);
      requestAnimationFrame(() => setAnimating(true));
    }
  }, []);

  // Keyboard accessibility
  useEffect(() => {
    if (!visible) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const t = setTimeout(() => checkboxRef.current?.focus(), 100);

    const focusable = () =>
      Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    dialog.addEventListener("keydown", handleTab);
    return () => {
      clearTimeout(t);
      dialog.removeEventListener("keydown", handleTab);
    };
  }, [visible]);

  const handleAccept = useCallback(() => {
    if (!checked) return;
    acceptTerms();
    setAnimating(false);
    setTimeout(() => setVisible(false), 300);
  }, [checked]);

  if (!visible) return null;

  return (
    <div
      className={`terms-modal-backdrop ${animating ? "terms-modal-backdrop--in" : ""}`}
      role="presentation"
      aria-hidden="false"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="terms-modal-title"
        aria-describedby="terms-modal-desc"
        className={`terms-modal ${animating ? "terms-modal--in" : ""}`}
      >
        {/* Top Gold Shimmer Accent */}
        <div className="terms-modal__accent" aria-hidden="true" />

        {/* Header */}
        <div className="terms-modal__header">
          <div className="terms-modal__icon-wrap">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <div>
            <h2 id="terms-modal-title" className="terms-modal__title">
              Terms &amp; Service Agreement
            </h2>
            <p className="terms-modal__version">
              {SITE_CONFIG.name} · Version {TERMS_VERSION} · Effective 2026
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#1a120a]/10 px-6 gap-6 text-xs font-mono font-semibold text-[#1a120a]/60">
          <button
            onClick={() => setActiveTab("summary")}
            className={`pb-2.5 border-b-2 transition-colors ${
              activeTab === "summary"
                ? "border-[#c4900f] text-[#c4900f]"
                : "border-transparent hover:text-[#1a120a]"
            }`}
          >
            Key Highlights
          </button>
          <button
            onClick={() => setActiveTab("full")}
            className={`pb-2.5 border-b-2 transition-colors ${
              activeTab === "full"
                ? "border-[#c4900f] text-[#c4900f]"
                : "border-transparent hover:text-[#1a120a]"
            }`}
          >
            Full Legal Terms
          </button>
        </div>

        {/* Body Content */}
        <div id="terms-modal-desc" className="terms-modal__body pt-4">
          <p className="terms-modal__intro">
            Welcome to <strong>{SITE_CONFIG.name}</strong> ({SITE_CONFIG.nameHindi}). Before exploring our tour packages and booking services, please review our terms of service governing all bookings and website usage.
          </p>

          {activeTab === "summary" ? (
            /* Summary Grid Cards */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="p-3.5 rounded-xl bg-[#fff4e6] border border-[#c4900f]/20">
                <div className="flex items-center gap-2 text-xs font-bold text-[#c4900f] mb-1">
                  <span>💳</span> Booking &amp; Payments
                </div>
                <p className="text-[11px] text-[#1a120a]/70 leading-relaxed">
                  Bookings require deposit confirmation. Prices quoted in INR including applicable GST taxes.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fff4e6] border border-[#c4900f]/20">
                <div className="flex items-center gap-2 text-xs font-bold text-[#c4900f] mb-1">
                  <span>📅</span> Cancellation &amp; Refunds
                </div>
                <p className="text-[11px] text-[#1a120a]/70 leading-relaxed">
                  Tiered cancellation charges apply based on notice. Flight &amp; cruise rules governed by respective suppliers.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fff4e6] border border-[#c4900f]/20">
                <div className="flex items-center gap-2 text-xs font-bold text-[#c4900f] mb-1">
                  <span>✈️</span> Passports &amp; Visas
                </div>
                <p className="text-[11px] text-[#1a120a]/70 leading-relaxed">
                  Passports must have min 6 months validity. Visa guidance provided; final decision rests with embassies.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fff4e6] border border-[#c4900f]/20">
                <div className="flex items-center gap-2 text-xs font-bold text-[#c4900f] mb-1">
                  <span>⚖️</span> Legal Jurisdiction
                </div>
                <p className="text-[11px] text-[#1a120a]/70 leading-relaxed">
                  Governed by Indian Law under exclusive jurisdiction of Courts in Mathura, Uttar Pradesh.
                </p>
              </div>
            </div>
          ) : (
            /* Full Terms Scrollbox */
            <div
              className="terms-modal__scroll-box"
              tabIndex={0}
              aria-label="Full legal terms content"
            >
              <div className="terms-section">
                <h3>1. Definitions &amp; Scope</h3>
                <p>
                  &quot;{SITE_CONFIG.name}&quot; operates as a registered travel agency located at {SITE_CONFIG.address} (Contact: {SITE_CONFIG.phone}). &quot;Client&quot; refers to any individual or group purchasing travel services including tour packages, flights, hotels, cruises, and visa assistance.
                </p>
              </div>

              <div className="terms-section">
                <h3>2. Bookings &amp; Pricing</h3>
                <p>
                  All bookings are subject to written confirmation. Prices are quoted in INR and include GST. Foreign exchange components are subject to RBI reference rate variations.
                </p>
              </div>

              <div className="terms-section">
                <h3>3. Cancellation Schedule</h3>
                <ul>
                  <li><strong>60+ days before departure:</strong> 15% charge (min ₹5,000/person)</li>
                  <li><strong>45–59 days:</strong> 25% charge</li>
                  <li><strong>30–44 days:</strong> 40% charge</li>
                  <li><strong>15–29 days:</strong> 60% charge</li>
                  <li><strong>0–14 days / No-show:</strong> 100% non-refundable</li>
                </ul>
              </div>

              <div className="terms-section">
                <h3>4. Travel Documents &amp; Insurance</h3>
                <p>
                  Clients must maintain valid passports and visas. Comprehensive travel insurance is strongly recommended for all international and adventure itineraries.
                </p>
              </div>

              <div className="terms-section">
                <h3>5. Liability &amp; Force Majeure</h3>
                <p>
                  {SITE_CONFIG.name} acts as an agent for carriers and hotel suppliers. The company is not liable for weather delays, airline re-routings, or events of force majeure.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Checkbox row */}
        <label className="terms-modal__checkbox-row">
          <input
            ref={checkboxRef}
            id="terms-agree-checkbox"
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="terms-modal__checkbox"
            aria-required="true"
          />
          <span className="terms-modal__checkbox-label">
            I have read and agree to the Terms &amp; Conditions and Privacy Policy of {SITE_CONFIG.name}
          </span>
        </label>

        {/* Footer CTA */}
        <div className="terms-modal__footer">
          <button
            onClick={handleAccept}
            disabled={!checked}
            className="consent-btn consent-btn--gold terms-modal__cta"
            aria-disabled={!checked}
          >
            {checked ? `Agree & Continue to ${SITE_CONFIG.name} →` : "Please check the box above to continue"}
          </button>
        </div>
      </div>
    </div>
  );
}
