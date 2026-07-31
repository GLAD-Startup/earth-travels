# Earth Travels India — Information Architecture & Linking Graph

## 1. URL Taxonomy & Directory Structure

```
https://earthtravels.example/
├── /destinations                     (Listing Page)
│   ├── /destinations/kashmir         (Hub Page - NEW)
│   ├── /destinations/maldives        (Hub Page - NEW)
│   ├── /destinations/dubai           (Hub Page - NEW)
│   └── ... [39 more hub pages]
├── /packages                         (Filter & Search Listing)
├── /itinerary                        (Itinerary Index)
│   ├── /itinerary/kashmir-7n8d       (Detail Page - SSG)
│   ├── /itinerary/maldives-4n5d      (Detail Page - SSG)
│   └── ... [127 more detail pages]
├── /visa                             (Visa Assistance Hub)
├── /cruises                          (Cruise Packages)
├── /rails                            (Luxury Rail Journeys)
├── /insurance                        (Travel Insurance)
├── /about                            (E-E-A-T Trust Center)
├── /contact                          (Conversion / Lead Gen)
└── /quote                            (Custom Quote Form)
```

---

## 2. Internal Linking Hierarchy

### Hub → Spoke Architecture
- **Destination Hub (`/destinations/kashmir`)**:
  - Links up to `/destinations` via Breadcrumb.
  - Links across to matching Package Cards (`/itinerary/kashmir-7n8d`).
  - Links to `/contact` for custom inquiries.
- **Itinerary Detail (`/itinerary/kashmir-7n8d`)**:
  - Links back to `/destinations/kashmir` via Breadcrumb & Destination badge.
  - Links to `/quote` with pre-filled package parameter.
- **Header Navigation (`Navbar.tsx`)**:
  - Direct links to primary money hubs: Home, Destinations, Packages, Itineraries, Visa, About, Contact.

---

## 3. Orphan Detection & URL Health Check

- **Zero Orphan Pages**: All 191 pre-rendered static routes are reachable via `sitemap.xml` and internal navigation paths.
- **Legacy Duplicate Neutralized**: `/itinerary/kashmir` legacy route wrapped with server metadata and linked into the sitemap to prevent 404s.
