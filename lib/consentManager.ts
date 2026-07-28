"use client";

export interface CookieCategories {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export interface ConsentRecord {
  categories: CookieCategories;
  timestamp: string;
}

export interface TermsRecord {
  version: string;
  timestamp: string;
}

export const TERMS_VERSION = "1.0";
export const COOKIE_CONSENT_KEY = "cookie_consent";
export const TERMS_ACCEPTANCE_KEY = "terms_accepted";

export const DEFAULT_CATEGORIES: CookieCategories = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
};

// --- Cookie Consent Helpers ---

export function getConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const data = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!data) return null;
    return JSON.parse(data) as ConsentRecord;
  } catch (e) {
    console.error("Error reading cookie consent", e);
    return null;
  }
}

export function hasValidConsent(): boolean {
  const consent = getConsent();
  if (!consent) return false;
  const consentDate = new Date(consent.timestamp).getTime();
  const now = new Date().getTime();
  const yearMs = 365 * 24 * 60 * 60 * 1000;
  return now - consentDate < yearMs;
}

export function setConsent(categories: Partial<CookieCategories>): ConsentRecord {
  const finalCategories: CookieCategories = {
    necessary: true,
    analytics: Boolean(categories.analytics),
    marketing: Boolean(categories.marketing),
    functional: Boolean(categories.functional),
  };

  const record: ConsentRecord = {
    categories: finalCategories,
    timestamp: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(record));
      window.dispatchEvent(new CustomEvent("consent-updated", { detail: record }));
    } catch (e) {
      console.error("Error saving cookie consent", e);
    }
  }

  return record;
}

export function acceptAllConsent(): ConsentRecord {
  return setConsent({
    necessary: true,
    analytics: true,
    marketing: true,
    functional: true,
  });
}

export function rejectNonEssentialConsent(): ConsentRecord {
  return setConsent({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });
}

export function openCookiePreferences(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
  }
}

export function isAnalyticsAllowed(): boolean {
  const consent = getConsent();
  return Boolean(consent?.categories?.analytics);
}

export function isMarketingAllowed(): boolean {
  const consent = getConsent();
  return Boolean(consent?.categories?.marketing);
}

export function isFunctionalAllowed(): boolean {
  const consent = getConsent();
  return Boolean(consent?.categories?.functional);
}

// --- Terms & Conditions Helpers ---

export function getTermsAcceptance(): TermsRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const data = localStorage.getItem(TERMS_ACCEPTANCE_KEY);
    if (!data) return null;
    return JSON.parse(data) as TermsRecord;
  } catch (e) {
    console.error("Error reading terms acceptance", e);
    return null;
  }
}

export function hasAcceptedTerms(): boolean {
  const record = getTermsAcceptance();
  if (!record) return false;
  return record.version === TERMS_VERSION;
}

export function acceptTerms(): TermsRecord {
  const record: TermsRecord = {
    version: TERMS_VERSION,
    timestamp: new Date().toISOString(),
  };
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(TERMS_ACCEPTANCE_KEY, JSON.stringify(record));
      window.dispatchEvent(new CustomEvent("terms-accepted", { detail: record }));
    } catch (e) {
      console.error("Error saving terms acceptance", e);
    }
  }
  return record;
}
