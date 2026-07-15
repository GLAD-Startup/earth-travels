export interface RailJourney {
  id: string;
  name: string;
  tagline: string;
  image: string;
  operator: string;
  route: string;
  duration: string;
  startingPrice: number;
  category: "scenic" | "europass";
  season: string;
}

export const RAIL_JOURNEYS: RailJourney[] = [
  // ── Scenic European Rail ───────────────────────────────────
  {
    id: "glacier-express",
    name: "Glacier Express",
    tagline: "The Slowest Express Train in the World",
    image: "/images/rails/glacier_express.jpg",
    operator: "Swiss Railways (SBB)",
    route: "Zermatt → Andermatt → Chur → St. Moritz",
    duration: "1 Day",
    startingPrice: 12000,
    category: "scenic",
    season: "BEST: MAY – OCT",
  },
  {
    id: "bernina-express",
    name: "Bernina Express",
    tagline: "UNESCO World Heritage Alpine Crossing",
    image: "/images/rails/bernina_express.jpg",
    operator: "Swiss Railways (SBB)",
    route: "Chur → St. Moritz → Tirano (Italy)",
    duration: "1 Day",
    startingPrice: 8500,
    category: "scenic",
    season: "BEST: YEAR ROUND",
  },
  {
    id: "jungfraujoch",
    name: "Jungfraujoch Railway",
    tagline: "Top of Europe at 3,454m",
    image: "/images/rails/jungfraujoch.jpg",
    operator: "Jungfrau Railways",
    route: "Interlaken → Grindelwald → Jungfraujoch",
    duration: "1 Day",
    startingPrice: 18000,
    category: "scenic",
    season: "BEST: MAY – SEP",
  },
  {
    id: "golden-pass",
    name: "GoldenPass Express",
    tagline: "Lakes, Vineyards & Alpine Peaks",
    image: "/images/rails/golden_pass.jpg",
    operator: "GoldenPass",
    route: "Lucerne → Interlaken → Montreux",
    duration: "1 Day",
    startingPrice: 7500,
    category: "scenic",
    season: "BEST: APR – OCT",
  },

  // ── Euro Rail Passes ───────────────────────────────────────
  {
    id: "eurail-global",
    name: "Eurail Global Pass",
    tagline: "33 Countries. One Pass. Unlimited Freedom.",
    image: "/images/rails/eurail_global.jpg",
    operator: "Eurail",
    route: "France · Germany · Italy · Spain · Netherlands & 28 more",
    duration: "Flexible (4–30 days)",
    startingPrice: 25000,
    category: "europass",
    season: "BEST: YEAR ROUND",
  },
  {
    id: "eurail-italy",
    name: "Eurail Italy Pass",
    tagline: "Rome, Florence, Venice & the Amalfi Coast",
    image: "/images/rails/eurail_italy.jpg",
    operator: "Eurail",
    route: "Rome → Florence → Venice → Milan → Naples",
    duration: "Flexible (3–8 days)",
    startingPrice: 15000,
    category: "europass",
    season: "BEST: APR – OCT",
  },
  {
    id: "swiss-travel-pass",
    name: "Swiss Travel Pass",
    tagline: "Unlimited Travel Across Switzerland",
    image: "/images/rails/swiss_travel_pass_rail.jpg",
    operator: "Swiss Travel System",
    route: "Zurich · Geneva · Lucerne · Bern · Interlaken & all Swiss trains",
    duration: "Flexible (3–15 days)",
    startingPrice: 20000,
    category: "europass",
    season: "BEST: YEAR ROUND",
  },
  {
    id: "eurail-scandinavia",
    name: "Eurail Scandinavia Pass",
    tagline: "Fjords, Northern Lights & Nordic Cities",
    image: "/images/rails/eurail_scandinavia.jpg",
    operator: "Eurail",
    route: "Copenhagen → Oslo → Bergen → Stockholm · Norway Fjords",
    duration: "Flexible (4–8 days)",
    startingPrice: 22000,
    category: "europass",
    season: "BEST: JUN – SEP",
  },
  {
    id: "eurail-france",
    name: "Eurail France Pass",
    tagline: "TGV High-Speed Across France",
    image: "/images/rails/eurail_france.jpg",
    operator: "Eurail / SNCF",
    route: "Paris → Lyon → Nice → Bordeaux → Marseille",
    duration: "Flexible (3–8 days)",
    startingPrice: 18000,
    category: "europass",
    season: "BEST: APR – OCT",
  },
];
