# SEO Rules — Earth Travels India

## The 10-Principle Framework: PERCEIVE → ANALYZE → VALIDATE → ACT

### PERCEIVE
1. **OBSERVE (external)** — Collect signals without interpreting: raw HTML vs rendered HTML, schema present, SERP visibility, CWV field data, AI-search citation patterns
2. **OBSERVE (internal)** — Audit assumptions before recommending. Common traps: assuming homepage = the site, assuming low traffic = low value, assuming CMS limitations are unfixable
3. **LISTEN** — Read the site's existing copy before rewriting. The brand voice is data. If a recommendation contradicts the SERP for the same intent, the SERP wins

### ANALYZE
4. **THINK** — Reduce findings to first principles. What is the page type (informational/transactional/local)? What is the eligibility floor for AI features? What is the highest-leverage constraint?
5. **CONNECT (lateral)** — Combine findings across sub-domains that users wouldn't naturally pair
6. **CONNECT (system)** — Wire recommendations into an executable dependency graph, not a list

### VALIDATE
7. **FEEL** — Pressure-test against UX, brand voice, operator capacity, and hard-earned intuition
8. **ACCEPT** — Every recommendation carries a "how would we know this failed?" falsifiability check

### ACT
9. **CREATE** — Ship the artifact. Analysis paralysis is the enemy
10. **GROW** — Build the feedback loop: baseline, leading indicators, re-audit cadence

## Output Contract
Every recommendation must carry:
- (a) The first-principle observation it rests on
- (b) Its dependency on other recommendations
- (c) An explicit "how would we know this failed?" falsifiability check
- (d) A leading indicator to monitor post-launch

## Non-Negotiable Rules

### Currency
- **INP, not FID.** LCP < 2.5s, INP < 200ms, CLS < 0.1. Mobile and desktop measured separately
- **FAQPage** produces no Google rich result after 2026-05-07. Do not generate
- **HowTo, SpecialAnnouncement, ClaimReview, VehicleListing, EstimatedSalary** — deprecated. Never generate
- **JSON-LD only.** No microdata, no RDFa
- **llms.txt is not a citation lever.** AEO and GEO are relabelled SEO; the eligibility floor for AI Overviews and AI Mode is ordinary indexation
- **E-E-A-T** per the Sept 2025 QRG, Trust weighted highest

### Localhost Honesty
- ALL Core Web Vitals are LAB data from local Lighthouse. Label every one **LAB — LOCAL BUILD**
- Never present lab data as field data
- State explicitly that real LCP and INP depend on production hosting, CDN, image pipeline and third-party scripts
- CrUX, PageSpeed Insights API, Search Console, GA4 and backlink APIs cannot reach localhost. Mark checks depending on them **NOT MEASURABLE PRE-LAUNCH**
- Never fabricate reviews, ratings, prices, licence numbers or author bios
- If data does not exist in the codebase, emit a TODO placeholder and list it in `seo/DATA-NEEDED.md`
- Anything reasoned rather than observed is labelled **INFERRED**
- Cite the primary source (Google doc, QRG section, schema.org page) for every rule enforced

### Code Safety
- Work on a branch with small, single-purpose commits
- Show diff summary before changes touching more than 10 files
- Do not restructure routing or rename URLs without flagging — URL choices are permanent once indexed

### Schema Validation
- Validate every emitted JSON-LD block against schema.org before committing
- Use stable `@id` URIs on the production domain
- `AggregateRating` only if real review data exists — otherwise TODO placeholder
- `priceCurrency` must be `INR` for all Indian-market offers
