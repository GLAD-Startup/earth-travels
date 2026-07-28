import React from "react";
import Link from "next/link";
import { Navbar, Footer } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/data";

export const metadata = {
  title: `Cookie Policy | ${SITE_CONFIG.name}`,
  description: `Learn how ${SITE_CONFIG.name} uses cookies and how you can manage your privacy and cookie consent preferences.`,
};

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fdf8f2] pt-32 pb-24 px-6 text-[#1a120a]">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 pb-8 border-b border-[#1a120a]/10">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#c4900f] uppercase block mb-3">
              Privacy &amp; Transparency
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-[#1a120a] tracking-tight mb-4">
              Cookie Policy
            </h1>
            <p className="font-sans text-sm text-[#1a120a]/60">
              Last Updated: July 2026 · Version 1.0
            </p>
          </div>

          {/* Article content */}
          <article className="prose-earth">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your computer, tablet, or
              mobile device when you visit websites. They help websites remember
              your actions, settings, and browsing preferences over a period of
              time so you don&apos;t have to re-enter them whenever you return to the
              site or browse from one page to another.
            </p>

            <h2>2. How {SITE_CONFIG.name} Uses Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to ensure our website
              functions securely, analyze site traffic, personalize content, and
              measure the performance of our marketing campaigns for our travel
              packages from Mathura to destinations worldwide.
            </p>

            <h2>3. Categories of Cookies We Use</h2>

            {/* Category Cards */}
            <div className="cookie-category-card">
              <div className="cookie-category-card__header">
                <span className="cookie-category-card__dot cookie-category-card__dot--necessary" />
                <h3>1. Strictly Necessary Cookies</h3>
                <span className="cookie-category-card__badge">Always Active</span>
              </div>
              <p>
                Essential for core website operation, security, user login sessions,
                and storing your consent preferences. Without these cookies, the
                website cannot function properly.
              </p>
              <p className="cookie-category-card__examples">
                Examples: Session IDs, CSRF protection tokens, Cookie consent state
              </p>
            </div>

            <div className="cookie-category-card">
              <div className="cookie-category-card__header">
                <span className="cookie-category-card__dot cookie-category-card__dot--analytics" />
                <h3>2. Analytics &amp; Performance Cookies</h3>
              </div>
              <p>
                Collect aggregated, anonymous information about how visitors navigate
                our website, which tour packages and destinations are viewed most
                frequently, and if any errors occur.
              </p>
              <p className="cookie-category-card__examples">
                Examples: Google Analytics 4 (_ga, _ga_*), Pageview counters
              </p>
            </div>

            <div className="cookie-category-card">
              <div className="cookie-category-card__header">
                <span className="cookie-category-card__dot cookie-category-card__dot--marketing" />
                <h3>3. Marketing &amp; Targeting Cookies</h3>
              </div>
              <p>
                Used to deliver relevant travel offers and promotions on third-party
                platforms (such as Meta or Google) tailored to your travel interests.
              </p>
              <p className="cookie-category-card__examples">
                Examples: Meta Pixel (_fbp), Google Ads Remarketing tags
              </p>
            </div>

            <div className="cookie-category-card">
              <div className="cookie-category-card__header">
                <span className="cookie-category-card__dot cookie-category-card__dot--functional" />
                <h3>4. Functional &amp; Preference Cookies</h3>
              </div>
              <p>
                Allow our website to remember choices you make (such as recent
                destination searches or WhatsApp booking inquiries) to provide
                enhanced, personalized features.
              </p>
              <p className="cookie-category-card__examples">
                Examples: Recent search memory, Itinerary drawer cache
              </p>
            </div>

            <h2>4. Managing Your Cookie Preferences</h2>
            <p>
              You can change your consent preferences at any time while browsing our
              website. Click on <strong>&quot;Cookie Settings&quot;</strong> in the footer
              of any page to open the preferences panel and toggle optional cookie
              categories on or off.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding our Cookie Policy or how we handle your personal data, please contact us:
            </p>
            <address className="not-italic bg-[#fff4e6] p-6 rounded-2xl border border-[#c4900f]/20 my-6 leading-relaxed">
              <strong className="text-base text-[#1a120a] block mb-1">{SITE_CONFIG.name}</strong>
              <span className="block text-sm text-[#1a120a]/80 mb-2">{SITE_CONFIG.address}</span>
              <span className="block text-sm"><strong>Email:</strong> {SITE_CONFIG.email}</span>
              <span className="block text-sm"><strong>Phone:</strong> {SITE_CONFIG.phones.map((p) => `${p.label}: ${p.number}`).join(" | ")}</span>
              <span className="block text-sm text-[#c4900f] font-semibold mt-1">Hours: {SITE_CONFIG.hours}</span>
            </address>

            <div className="mt-12 pt-8 border-t border-[#1a120a]/10 flex gap-4">
              <Link href="/" className="consent-btn consent-btn--gold">
                &larr; Back to Home
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
