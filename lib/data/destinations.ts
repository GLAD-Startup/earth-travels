export interface Destination {
  id: string;
  name: string;
  tagline: string;
  image: string;
  season: string;
  startingPrice: number;
  region: string;
  packageCount: number;
}

export const DESTINATIONS: Destination[] = [
  {
    id: "kashmir",
    name: "Kashmir",
    tagline: "Where Heaven Touches Earth",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
    season: "BEST: MAR – OCT",
    startingPrice: 32000,
    region: "india",
    packageCount: 3,
  },
  {
    id: "maldives",
    name: "Maldives",
    tagline: "Stillness Above the Ocean",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    season: "BEST: NOV – APR",
    startingPrice: 65000,
    region: "islands",
    packageCount: 2,
  },
  {
    id: "dubai",
    name: "Dubai",
    tagline: "Where the Desert Meets the Sky",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    season: "BEST: OCT – APR",
    startingPrice: 45000,
    region: "middle-east",
    packageCount: 1,
  },
  {
    id: "bali",
    name: "Bali",
    tagline: "The Island of a Thousand Temples",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    season: "BEST: APR – OCT",
    startingPrice: 45000,
    region: "southeast-asia",
    packageCount: 2,
  },
  {
    id: "malaysia",
    name: "Malaysia",
    tagline: "Asia's Melting Pot",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    season: "BEST: YEAR ROUND",
    startingPrice: 55000,
    region: "southeast-asia",
    packageCount: 1,
  },
  {
    id: "europe",
    name: "Europe",
    tagline: "Old Stones, New Memories",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    season: "BEST: APR – SEP",
    startingPrice: 120000,
    region: "europe",
    packageCount: 3,
  },
  {
    id: "thailand",
    name: "Thailand",
    tagline: "Chaos and Calm in Perfect Balance",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
    season: "BEST: NOV – APR",
    startingPrice: 28000,
    region: "southeast-asia",
    packageCount: 2,
  },
  {
    id: "kerala",
    name: "Kerala",
    tagline: "Where the Backwaters Hold Time Still",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
    season: "BEST: OCT – MAR",
    startingPrice: 18000,
    region: "india",
    packageCount: 2,
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    tagline: "Royal India, Unfiltered",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    season: "BEST: OCT – MAR",
    startingPrice: 22000,
    region: "india",
    packageCount: 2,
  },
  {
    id: "singapore",
    name: "Singapore",
    tagline: "The Future, Already Here",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    season: "BEST: YEAR ROUND",
    startingPrice: 55000,
    region: "southeast-asia",
    packageCount: 1,
  },
  {
    id: "sri-lanka",
    name: "Sri Lanka",
    tagline: "The Pearl of the Indian Ocean",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
    season: "BEST: DEC – APR",
    startingPrice: 35000,
    region: "islands",
    packageCount: 1,
  },
];
