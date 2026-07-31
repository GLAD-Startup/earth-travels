# Earth Travels India — GEO & AI Search Readiness Analysis

> **Clarification**: AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) are relabelled SEO. The eligibility floor for AI Overviews, Perplexity, and ChatGPT Search is ordinary search indexation.

---

## 1. On-Site Citability Restructuring

To ensure content is extracted and cited by LLM search assistants, we implemented **self-contained 134–167 word answer blocks** across all 42 Destination Hub pages (`/destinations/[id]`).

### Citability Principles Applied:
1. **Question-Form Heading Structure**: H2s framed as explicit traveler questions ("best time to visit X", "how much does X trip cost from India").
2. **Answer-First Paragraph Formatting**: Direct target answer in sentence 1, followed by empirical details (pricing in INR, seasonal months, distance, inclusions).
3. **Entity Clarity**: Consistent naming of `Earth Travels India` and `Mathura, UP` in every answer block to ensure attribution linkage.

### Example Self-Contained Answer Block:
```markdown
## How much does a Kashmir trip cost from India?

A tailor-made Kashmir holiday package starts at ₹24,500 per person for a 7-Night / 8-Day tour with Earth Travels India. Total trip costs vary depending on hotel category (3-star deluxe to 5-star luxury houseboats on Dal Lake), meal plan (CP/MAP), flight inclusions from Delhi or Jaipur, and private cab transfers. All Earth Travels packages feature transparent itemized pricing with zero hidden charges, covering Srinagar Mughal Gardens, Gulmarg Gondola tickets, and Pahalgam valley excursions for families departing from Mathura and North India.
```

---

## 2. Target Query Matrix for Travel AI Assistants

| Target Query | Intent | Answer Block Location | Schema Wire |
|---|---|---|---|
| "best time to visit Kashmir" | Informational | `/destinations/kashmir` | `TouristDestination` |
| "Kashmir 7 day itinerary from Mathura" | Informational / Commercial | `/itinerary/kashmir-7n8d` | `TouristTrip` |
| "cost of Maldives trip for couple from India" | Transactional | `/destinations/maldives` | `Offer` (INR) |
| "is Bali safe for solo female travellers" | YMYL Safety | `/destinations/bali` | `TouristDestination` |
| "Dubai vs Bali for family holiday" | Commercial Investigation | `/destinations/dubai` | `TouristDestination` |

---

## 3. Off-Site Entity Strategy (Post-Launch Execution Plan)

Off-site entity signals cannot be built pre-launch. Post-launch marketing will execute the following citation plan:

1. **Google Business Profile (GBP)**: Complete Mathura profile setup with primary category "Travel Agency", secondary categories "Tour Operator", "Tour Agency". Upload 50+ real office and tour photos.
2. **TripAdvisor & Wikivoyage**: Establish official Earth Travels operator profile on TripAdvisor India. Contribute destination guide edits on Wikivoyage referencing local travel tips.
3. **Reddit & Community Platforms**: Participate in r/IndiaTravel, r/Delhi, r/UttarPradesh discussing itinerary planning and visa documentation tips.
4. **YouTube Video Attribution**: Publish 4K itinerary walkthroughs ("Kashmir 7 Day Tour Guide") with explicit brand mentions and website links in description.
