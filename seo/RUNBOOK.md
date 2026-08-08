# Earth Travels India — SEO Runbook & Workflow Execution

This runbook documents how to run production audits, setup isolated Python tooling, and re-verify post-launch metrics against live domains.

## Environment & Prerequisites

### Python isolated environment setup
```bash
# Create isolated venv under ./seo/
python -m venv ./seo/.venv

# Activate venv (Windows PowerShell)
.\seo\.venv\Scripts\Activate.ps1

# Install requirements
pip install -r vendor/claude-seo/requirements.txt

# Install Playwright Chromium
playwright install chromium
```

## Running Production Build Audits Locally

Always test against the minified, production-compiled build (never dev server):

```bash
# 1. Build production bundle
npm run build

# 2. Start production server
npm start
# Default port: http://localhost:3000
```

## Post-Launch Audit Execution Commands

After deploying to the live production domain (`https://earthtravelsindia.in`), execute each workflow against the live URL using the ported methodology scripts under `./seo/scripts/` (or via `claude-seo run`):

### 1. Full Audit (Orchestrator)
```bash
python ./seo/scripts/render_page.py https://earthtravelsindia.in/
python ./seo/scripts/parse_html.py https://earthtravelsindia.in/
```

### 2. Core Web Vitals & PageSpeed Insights
```bash
python ./seo/scripts/pagespeed_check.py https://earthtravelsindia.in/
python ./seo/scripts/crux_history.py --origin https://earthtravelsindia.in/
```

### 3. Schema Markup Audit & Validation
```bash
python ./seo/scripts/schema_generate.py https://earthtravelsindia.in/
```

### 4. Indexation & Google Search Console Inspection
```bash
python ./seo/scripts/gsc_inspect.py https://earthtravelsindia.in/
python ./seo/scripts/gsc_query.py --site-url https://earthtravelsindia.in/
```

### 5. Sitemap & Crawl Discovery
```bash
python ./seo/scripts/sitemap_discovery.py https://earthtravelsindia.in/sitemap.xml
```

### 6. SEO Drift Monitoring
```bash
# Capture launch baseline
python ./seo/scripts/drift_baseline.py https://earthtravelsindia.in/

# Compare day 7 state to baseline
python ./seo/scripts/drift_compare.py https://earthtravelsindia.in/
```

### 7. Google PDF/Excel Report Generation
```bash
python ./seo/scripts/google_report.py full https://earthtravelsindia.in/
```
