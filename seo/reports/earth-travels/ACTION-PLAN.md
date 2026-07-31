# Earth Travels India — Prioritised Action Plan

Every recommendation below follows the output contract:
- **First-principle observation**: The empirical fact or primary guidance it rests on.
- **Dependency**: What unblocks or depends on this action.
- **Falsifiability check**: How we prove if this hypothesis failed.
- **Leading indicator**: What metric to monitor post-launch without full re-audit.

---

## Action Items Matrix

| Priority | Task Description | Owner | Dependency | Falsifiability Check | Leading Indicator |
|---|---|---|---|---|---|
| **P0 (Critical)** | Deploy SSR Metadata & Canonical URLs on all 191 static routes | Dev | Unblocked | `curl -s` initial HTML lacks `<title>` or `<link rel="canonical">` | GSC Indexed Pages count increases to 100+ within 7 days |
| **P0 (Critical)** | Submit dynamic `sitemap.xml` & `robots.txt` to GSC & Bing | Dev | P0 SSR Metadata | Crawlers fail to discover `/destinations/[id]` routes within 72h | GSC Crawl Stats requests/day for sitemap |
| **P0 (Critical)** | Implement JSON-LD schema blocks (`TravelAgency`, `TouristTrip`, `TouristDestination`) | Dev | P0 SSR Metadata | Schema.org validator reports syntax or required field errors | GSC Rich Results enhancement reports |
| **P1 (High)** | Provision Destination Hub pages (`/destinations/[id]`) for 42 regions | Dev / Content | P0 SSR Metadata | Zero organic impressions for query "destination + tour package" after 14 days | GSC Queries for destination keywords |
| **P1 (High)** | Code-split 3D/Animation bundles (Three.js, GSAP) via `next/dynamic` | Dev | Codebase | Localhost Lighthouse INP > 200ms or main thread blocking > 300ms | Lighthouse Performance Lab Score > 85 |
| **P2 (Medium)** | Fill Client Data placeholders (GSTIN, Founder Bio, GBP Link) | Client / Dev | `seo/DATA-NEEDED.md` | E-E-A-T trust audit flags unverified brand claims | GBP impression & direct discovery volume |
| **P2 (Medium)** | Convert high-priority `<img>` tags to `next/image` for LCP/CLS optimization | Dev | Codebase | LCP image loads without WebP format or explicit width/height | Lighthouse LCP < 2.5s on mobile |
| **P3 (Low)** | Build off-site citation signals (TripAdvisor, Reddit, YouTube content) | Marketing | Post-Launch | AI Overviews / Perplexity generate zero brand mentions for query "best tour agency Mathura" | Monthly AI Overview citation share |

---

## Falsifiability & Leading Indicator Specifications

### 1. SSR Metadata Refactoring
- **First-Principle**: Search crawlers parse initial server HTTP payload before executing JS.
- **Dependency**: Unblocks indexation of all 191 static pages.
- **Falsifiability Check**: `curl -s http://localhost:3000/destinations/kashmir | grep -i "<title>"` returns empty string.
- **Leading Indicator**: GSC "Valid indexed pages" chart trending upwards within 7 days of submission.

### 2. Destination Hub Architecture
- **First-Principle**: Search engines require dedicated URL entities to match specific travel intent (e.g. "Kashmir tour").
- **Dependency**: Depends on Server Components & sitemap.
- **Falsifiability Check**: Query "Kashmir packages Mathura" impressions remain < 10 after 30 days indexed.
- **Leading Indicator**: GSC Impressions growth for `/destinations/*` folder.
