# Earth Travels India — Enumerated Route Matrix

All audits run against production-build URLs (`https://earthtravelsindia.in`), never dev servers.

| Route | Template Type | Data Source | Money Page? | Static / Dynamic |
| font | -- | -- | -- | -- |
| `/` | Home | Component Tree + Static Data | ★ Yes | SSG |
| `/destinations` | Listing | `lib/data/destinations.ts` (42 items) | ★ Yes | SSG |
| `/destinations/[id]` | Hub (Detail) | `lib/data/destinations.ts` (42 hubs) | ★★ Yes | SSG (generateStaticParams) |
| `/packages` | Listing + Filter | `lib/data/packages.ts` (~50 items) | ★ Yes | SSG |
| `/packages?destination={id}` | Filtered Listing | `lib/data/packages.ts` + URL Query | Yes | Client Filter |
| `/itinerary` | Listing | `lib/data/packages.ts` | Yes | SSG |
| `/itinerary/[slug]` | Detail | `lib/data/packages.ts` + `itineraries.ts` | ★★ Yes | SSG (generateStaticParams) |
| `/itinerary/kashmir` | Detail (Static) | `app/itinerary/kashmir` | Yes | SSG |
| `/cruises` | Listing | `lib/data/cruises.ts` | Yes | SSG |
| `/rails` | Listing | `lib/data/rails.ts` | Yes | SSG |
| `/visa` | Info Hub | Inline `VISA_DESTINATIONS` (30+ countries) | ★ Yes | SSG |
| `/insurance` | Info | Static | Yes | SSG |
| `/about` | Trust / E-E-A-T | Static + `TEAM` + Certifications | Trust Page | SSG |
| `/contact` | Lead Gen | Static + `SITE_CONFIG` | ★ Conversion | SSG |
| `/quote` | Lead Gen | Static + Form | Conversion | SSG |
| `/privacy` | Legal | Static | Required | SSG |
| `/terms` | Legal | Static | Required | SSG |
| `/robots.txt` | Route Handler | `app/robots.ts` | Technical | Dynamic Route Handler |
| `/sitemap.xml` | Route Handler | `app/sitemap.ts` (100+ URLs) | Technical | Dynamic Route Handler |

## Representative URLs Picked for Audit:
1. **Home**: `https://earthtravelsindia.in/`
2. **Destination Hub**: `https://earthtravelsindia.in/destinations/kashmir`
3. **Package Listing**: `https://earthtravelsindia.in/packages`
4. **Itinerary Detail**: `https://earthtravelsindia.in/itinerary/kashmir-7n8d`
5. **Visa Hub**: `https://earthtravelsindia.in/visa`
6. **Trust / E-E-A-T**: `https://earthtravelsindia.in/about`
7. **Conversion / Contact**: `https://earthtravelsindia.in/contact`
