// Site data — packages, destinations, testimonials, team
// This file will be populated with all static content for Earth Travels

export const SITE_CONFIG = {
  name: "Earth Travels",
  nameHindi: "अर्थ ट्रैवल्स",
  tagline: "Crafting Journeys the World Remembers",
  phone: "89418 81111",
  whatsapp: "918941881111",
  email: "info@earthtravels.in",
  address: "Shop No.138, 1st Floor Krishna Plaza, Krishna Market, Mathura UP 281001",
  hours: "Mon–Sat: 10AM – 7:30PM",
  rating: 4.7,
  reviews: 127,
  destinations: 150,
  yearsExperience: 15,
};

import { DESTINATIONS as DESTINATIONS_DATA } from "./destinations";
export const DESTINATIONS = DESTINATIONS_DATA;

import { PACKAGES as PACKAGES_DATA } from "./packages";
export const PACKAGES = PACKAGES_DATA;

import { CRUISES as CRUISES_DATA } from "./cruises";
export const CRUISES = CRUISES_DATA;

import { RAIL_JOURNEYS as RAIL_JOURNEYS_DATA } from "./rails";
export const RAIL_JOURNEYS = RAIL_JOURNEYS_DATA;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rakesh Jain",
    destination: "Kashmir",
    rating: 5,
    review:
      "The people are very honest and soft spoken. They made our stay very comfortable and memorable. Will definitely travel again with Earth Travels!",
    initials: "RJ",
  },
  {
    id: 2,
    name: "Ronak Agrawal",
    destination: "Maldives",
    rating: 5,
    review:
      "Earth Travels helped us choose the best family resort. They completed our documentation and provided all baby amenities. Always quick to respond.",
    initials: "RA",
  },
  {
    id: 3,
    name: "Saloni Agrawal",
    destination: "Malaysia",
    rating: 5,
    review:
      "All hotels and tours were well managed. They handled all documentation including insurance. Trip turned out amazing. Highly recommended!",
    initials: "SA",
  },
];

export const TEAM = [
  {
    name: "Ankit Sharma",
    role: "Founder & Travel Director",
    specialty: "Europe & Exotic Destinations",
    initials: "AS",
  },
  {
    name: "Priya Gupta",
    role: "Senior Travel Consultant",
    specialty: "Maldives & Southeast Asia",
    initials: "PG",
  },
  {
    name: "Rahul Mathur",
    role: "Documentation Specialist",
    specialty: "Visa & Insurance Expert",
    initials: "RM",
  },
];
