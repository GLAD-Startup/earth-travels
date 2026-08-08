# Earth Travels India — Launch Checklist & Day 7 Protocol

## Pre-Launch Phase (Local / Staging)
- [x] Refactor all routes from `"use client"` page templates to Server Components with SSR `metadata` exports
- [x] Configure `metadataBase` to production domain `https://earthtravelsindia.in`
- [x] Generate dynamic `/robots.txt` handler
- [x] Generate dynamic `/sitemap.xml` handler covering static routes, 42 destination hubs, and ~50 itinerary pages
- [x] Create 42 individual Destination Hub pages (`/destinations/[id]`) for topical coverage
- [x] Implement JSON-LD schemas (`Organization`, `TravelAgency`, `WebSite`, `BreadcrumbList`, `TouristTrip`, `TouristDestination`)
- [x] Verify production build compilation (`npm run build`)
- [x] Perform HTML source inspection (curl without JS) to confirm `<title>`, `<meta>`, `<link rel="canonical">`, and JSON-LD script tags are present in initial payload

## Launch Day (DNS & Server Cutover)
- [ ] Configure DNS A/AAAA and CNAME records with SSL/TLS certificate (HTTPS enforcement)
- [ ] Ensure 301 redirects are configured for any legacy non-www to www or HTTP to HTTPS URLs
- [ ] Confirm no server-level basic auth or `X-Robots-Tag: noindex` headers remain on the production server
- [ ] Submit sitemap URL `https://earthtravelsindia.in/sitemap.xml` to Google Search Console
- [ ] Submit sitemap URL `https://earthtravelsindia.in/sitemap.xml` to Bing Webmaster Tools
- [ ] Trigger manual URL Inspection & Indexing request in GSC for top 5 money pages:
  - Homepage: `https://earthtravelsindia.in/`
  - Packages: `https://earthtravelsindia.in/packages`
  - Destinations Hub: `https://earthtravelsindia.in/destinations`
  - Kashmir Hub: `https://earthtravelsindia.in/destinations/kashmir`
  - Kashmir 7N/8D Itinerary: `https://earthtravelsindia.in/itinerary/kashmir-7n8d`
- [ ] Deploy GA4 (Google Analytics 4) tag with custom conversion events for form submission and WhatsApp clicks
- [ ] Create & verify Google Business Profile (GBP) for Mathura headquarters

## Week 1 Post-Launch Monitoring (Day 1 – Day 6)
- [ ] Monitor GSC Coverage report daily for initial crawl frequency and indexation status
- [ ] Check Bing Webmaster Tools IndexNow submission status
- [ ] Verify GA4 event tracking for phone calls and WhatsApp conversions
- [ ] Monitor brand mention alerts on Google / Social / Reddit

## Day 7 Full Re-Audit Protocol
Execute the following commands against the live production domain to capture field baseline:

```bash
# 1. Run live PageSpeed Insights & CrUX audit
python ./seo/scripts/pagespeed_check.py https://earthtravelsindia.in/

# 2. Run GSC Indexation Inspector
python ./seo/scripts/gsc_inspect.py https://earthtravelsindia.in/

# 3. Compare Day 7 state to launch baseline
python ./seo/scripts/drift_compare.py https://earthtravelsindia.in/

# 4. Generate final post-launch PDF report
python ./seo/scripts/google_report.py full https://earthtravelsindia.in/
```
