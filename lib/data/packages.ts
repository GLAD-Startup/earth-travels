export interface Package {
  id: string;
  destination: string;
  destinationId: string;
  name: string;
  duration: { nights: number; days: number };
  pricePerPerson: number;
  category: string[];
  image: string;
  highlights: string[];
  inclusions: {
    flight: boolean;
    hotel: boolean;
    meals: boolean;
    visa: boolean;
    transfers: boolean;
    sightseeing: boolean;
  };
  badge: string;
  itineraryPage: string;
}

export const PACKAGES: Package[] = [
  {
    id: "kashmir-7n8d",
    destination: "Kashmir",
    destinationId: "kashmir",
    name: "Kashmir Escapade",
    duration: { nights: 7, days: 8 },
    pricePerPerson: 32000,
    category: ["family", "honeymoon"],
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80",
    highlights: ["Dal Lake Houseboat", "Gulmarg Gondola", "Pahalgam Valley"],
    inclusions: { flight: false, hotel: true, meals: true, visa: false, transfers: true, sightseeing: true },
    badge: "Most Popular",
    itineraryPage: "/itinerary/kashmir",
  },
  {
    id: "maldives-5n6d",
    destination: "Maldives",
    destinationId: "maldives",
    name: "Maldives Serenity",
    duration: { nights: 5, days: 6 },
    pricePerPerson: 65000,
    category: ["honeymoon", "luxury"],
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    highlights: ["Overwater Bungalow", "Snorkeling & Diving", "Sunset Cruise"],
    inclusions: { flight: true, hotel: true, meals: true, visa: true, transfers: true, sightseeing: true },
    badge: "Best Value",
    itineraryPage: "/quote?destination=maldives",
  },
  {
    id: "malaysia-dubai-8n9d",
    destination: "Malaysia + Dubai",
    destinationId: "dubai",
    name: "Malaysia + Dubai Odyssey",
    duration: { nights: 8, days: 9 },
    pricePerPerson: 55000,
    category: ["family", "group"],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    highlights: ["Burj Khalifa", "Petronas Towers", "Desert Safari"],
    inclusions: { flight: true, hotel: true, meals: false, visa: true, transfers: true, sightseeing: true },
    badge: "Best Value",
    itineraryPage: "/quote?destination=dubai",
  },
  {
    id: "thailand-6n7d",
    destination: "Thailand",
    destinationId: "thailand",
    name: "Thailand Escape",
    duration: { nights: 6, days: 7 },
    pricePerPerson: 28000,
    category: ["budget", "adventure"],
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
    highlights: ["Phi Phi Islands", "Thai Massage", "Street Food Tour"],
    inclusions: { flight: false, hotel: true, meals: false, visa: true, transfers: true, sightseeing: true },
    badge: "",
    itineraryPage: "/quote?destination=thailand",
  },
  {
    id: "europe-10n11d",
    destination: "Europe",
    destinationId: "europe",
    name: "European Grand Tour",
    duration: { nights: 10, days: 11 },
    pricePerPerson: 120000,
    category: ["luxury", "honeymoon"],
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    highlights: ["Eiffel Tower", "Swiss Alps", "Venice Canals"],
    inclusions: { flight: true, hotel: true, meals: true, visa: true, transfers: true, sightseeing: true },
    badge: "Premium",
    itineraryPage: "/quote?destination=europe",
  },
  {
    id: "bali-6n7d",
    destination: "Bali",
    destinationId: "bali",
    name: "Bali Bliss",
    duration: { nights: 6, days: 7 },
    pricePerPerson: 45000,
    category: ["honeymoon", "adventure"],
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    highlights: ["Ubud Sacred Monkey Forest", "Uluwatu Temple Sunset", "Water Rafting"],
    inclusions: { flight: false, hotel: true, meals: true, visa: false, transfers: true, sightseeing: true },
    badge: "Most Popular",
    itineraryPage: "/quote?destination=bali",
  },
  {
    id: "kerala-5n6d",
    destination: "Kerala",
    destinationId: "kerala",
    name: "Munnar & Alleppey Special",
    duration: { nights: 5, days: 6 },
    pricePerPerson: 18000,
    category: ["family", "budget"],
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    highlights: ["Munnar Tea Gardens", "Alleppey Houseboat Stay", "Athirappilly Waterfalls"],
    inclusions: { flight: false, hotel: true, meals: true, visa: false, transfers: true, sightseeing: true },
    badge: "",
    itineraryPage: "/quote?destination=kerala",
  },
  {
    id: "rajasthan-6n7d",
    destination: "Rajasthan",
    destinationId: "rajasthan",
    name: "Royal Heritage Tour",
    duration: { nights: 6, days: 7 },
    pricePerPerson: 22000,
    category: ["family", "luxury"],
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    highlights: ["Jaipur Amer Fort", "Udaipur Lake Palace", "Jodhpur Desert Camping"],
    inclusions: { flight: false, hotel: true, meals: true, visa: false, transfers: true, sightseeing: true },
    badge: "Premium",
    itineraryPage: "/quote?destination=rajasthan",
  },
];
