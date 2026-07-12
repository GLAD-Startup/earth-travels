export interface Activity {
  icon: string;
  title: string;
  description: string;
}

export interface DayData {
  dayNumber: number;
  title: string;
  tag: string;
  tagline: string;
  activities: Activity[];
  tip: string;
  image: string;
}

export interface Hotel {
  name: string;
  rating: string;
  type: string;
  location: string;
  image: string;
}

export interface ItineraryData {
  slug: string;
  destination: string;
  title: string;
  duration: string;
  heroImage: string;
  tagline: string;
  basePrice: number;
  days: DayData[];
  hotels: Hotel[];
}

export const ITINERARIES: Record<string, ItineraryData> = {
  kashmir: {
    slug: "kashmir",
    destination: "Kashmir",
    title: "Kashmir Escapade",
    duration: "7 Nights / 8 Days",
    heroImage: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1600&q=80",
    tagline: "Paradise on Earth",
    basePrice: 32000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Srinagar",
        tag: "SRINAGAR",
        tagline: "Airport pickup and transfer to your houseboat on Dal Lake. Settle in, breathe the mountain air.",
        activities: [
          { icon: "✈️", title: "Airport Pickup & Transfer", description: "Our representative meets you at Srinagar Airport and drives you to the Dal Lake docks." },
          { icon: "🏨", title: "Houseboat Check-in", description: "Board your traditional luxury carved cedar houseboat. Unpack and settle into your room." },
          { icon: "🚤", title: "Shikara Ride at Sunset", description: "Take a relaxed 2-hour shikara tour around Dal Lake's floating gardens and open waters." },
          { icon: "🍽️", title: "Welcome Wazwan Dinner", description: "Feast on a multi-course traditional meal prepared fresh by native chefs." },
        ],
        tip: "Ask your shikara wala to take you to the floating vegetable market at dawn — it's not in any brochure.",
        image: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 2,
        title: "Meadows of Gulmarg",
        tag: "GULMARG",
        tagline: "Asia's highest gondola and a meadow that feels like the edge of the world.",
        activities: [
          { icon: "🏔️", title: "Drive to Gulmarg", description: "A beautiful 2-hour drive winding up through pine and fir forests to the Meadow of Flowers." },
          { icon: "🚡", title: "Gondola Phase I & II", description: "Ride the world's second-highest cable car up to Apharwat Peak at 13,780 ft for deep snow views." },
          { icon: "❄️", title: "Snow Activities", description: "Enjoy sledging, skiing, or snow walking with a private local guide." },
          { icon: "🌲", title: "Meadow Walk & Lunch", description: "Stroll along the sprawling alpine meadow golf course before heading back." },
        ],
        tip: "Carry layered clothing even in summer — the top gondola station sits at 13,780 ft.",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 3,
        title: "Valley of Shepherds",
        tag: "PAHALGAM",
        tagline: "The Valley of Shepherds, where Bollywood films and trekkers both find what they came for.",
        activities: [
          { icon: "🎬", title: "Betaab Valley Visit", description: "Walk through the stunning lush valley named after the Bollywood hit film Betaab." },
          { icon: "🥾", title: "Aru Valley Walk", description: "Ascend to the quiet mountain village of Aru, starting point for high-altitude glacial treks." },
          { icon: "🌊", title: "Lidder River Trail", description: "Stroll along the bank of the clear, rushing glacial waters of the Lidder River." },
          { icon: "🍽️", title: "Local Trout Lunch", description: "Enjoy a fresh local river trout meal prepared at a boutique riverside lodge." },
        ],
        tip: "Betaab Valley is best in early morning before tour buses arrive.",
        image: "https://images.unsplash.com/photo-1589136777351-fdc9c9c8c680?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 4,
        title: "Meadows of Gold",
        tag: "SONAMARG",
        tagline: "The Meadow of Gold, where glaciers sit close enough to touch.",
        activities: [
          { icon: "🛣️", title: "Drive to Sonamarg", description: "Follow the Sindh River highway through spectacular rocky valleys up to Sonamarg." },
          { icon: "🐎", title: "Thajiwas Glacier Trek", description: "Trek on foot or take a guided pony ride up to the guided glacial shelves." },
          { icon: "🌊", title: "River Crossing", description: "Cross dynamic suspended footbridges over the glacial river runoffs." },
          { icon: "⛰️", title: "Zoji La Pass Views", description: "Stand at high-altitude viewpoints looking out to the treacherous highway pass connecting to Ladakh." },
        ],
        tip: "Don't skip the glacier — the walk from the road is under 2km and completely worth it.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 5,
        title: "Royal Gardens & Sanctuaries",
        tag: "SRINAGAR LOCAL",
        tagline: "The city's soul is in its gardens, mosques, and the smoke from kangris on winter mornings.",
        activities: [
          { icon: "🌸", title: "Mughal Gardens Tour", description: "Visit the terraced lawns and spring-fed fountains of Shalimar Bagh, Nishat Bagh, and Chashme Shahi." },
          { icon: "🕌", title: "Hazratbal Mosque", description: "Admire the white marble dome sanctuary housing the holy relic, reflecting on Dal Lake." },
          { icon: "🛶", title: "Old City Lanes Walk", description: "Explore the bustling bazaars, ancient wooden bridges, and architectural history of Downtown." },
          { icon: "🛍️", title: "Kashmiri Handicraft Market", description: "Shop directly for hand-knotted silk carpets, pashmina shawls, and wood carvings." },
        ],
        tip: "Buy saffron directly from government-certified shops on Residency Road — avoid tourist traps.",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc18a52b?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 6,
        title: "Floating Leisure",
        tag: "LEISURE DAY",
        tagline: "A morning with nothing planned is the greatest luxury of any Kashmir trip.",
        activities: [
          { icon: "🍳", title: "Houseboat Breakfast on Deck", description: "Sip hot Kehwa and enjoy eggs and local breads on the sunny houseboat deck." },
          { icon: "🛶", title: "Lake Floating Market Shopping", description: "Watch shikara vendors selling saffron, shawls, and jewelry float directly to your deck." },
          { icon: "🍲", title: "Optional: Cooking Class", description: "Learn the secrets of Kashmiri Rogan Josh or Yakhni from the local family cook." },
        ],
        tip: "The floating flower market opens at 6AM — set an alarm once.",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 7,
        title: "Farewell Prep",
        tag: "SRINAGAR DEPARTURE PREP",
        tagline: "Transfer from houseboat to hotel if needed, farewell dinner, packing assistance.",
        activities: [
          { icon: "🏨", title: "Hotel Transfer & Settle", description: "Transition from the houseboat to a boutique hotel side stay in Srinagar city." },
          { icon: "🎁", title: "Farewell Dinner", description: "Review trip memories over a candlelit final dinner hosted by Earth Travels." },
        ],
        tip: "Ensure all delicate souvenirs and walnut crafts are packed carefully. Ask our driver for bubble wraps.",
        image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 8,
        title: "Fly Home",
        tag: "SRINAGAR DEPARTURE",
        tagline: "Airport drop, end of Earth Travels service.",
        activities: [
          { icon: "✈️", title: "Airport Drop-off", description: "Pack bags and bid farewell to Srinagar as we drop you off for your flight back home." },
        ],
        tip: "Reach Srinagar Airport at least 3 hours before departure as the security checks are rigorous.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    hotels: [
      {
        name: "Sukoon Houseboat",
        rating: "★★★★",
        type: "Heritage Houseboat",
        location: "Dal Lake, Srinagar",
        image: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Khyber Mountain Resort",
        rating: "★★★★★",
        type: "Luxury Retreat",
        location: "Gulmarg Heights",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Welcomhotel Pine N Peak",
        rating: "★★★★",
        type: "Boutique Lodge",
        location: "Lidder Valley, Pahalgam",
        image: "https://images.unsplash.com/photo-1589136777351-fdc9c9c8c680?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  maldives: {
    slug: "maldives",
    destination: "Maldives",
    title: "Maldives Serenity",
    duration: "5 Nights / 6 Days",
    heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=80",
    tagline: "Stillness Above the Ocean",
    basePrice: 65000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Male & Speedboat Transfer",
        tag: "MALE / ISLAND RESORT",
        tagline: "Welcome to the Maldives! Transfer to your private island resort.",
        activities: [
          { icon: "✈️", title: "Male Airport Meet & Greet", description: "Our resort representative will meet you at Velana International Airport." },
          { icon: "🚤", title: "Speedboat Transfer", description: "Board a high-speed boat cruising across azure waters to your tropical island resort." },
          { icon: "🍹", title: "Resort Check-In & Welcome Drink", description: "Settle into your premium beach villa, sipping a fresh coconut cocktail." },
        ],
        tip: "Keep your camera ready during the speedboat transfer for a chance to spot wild dolphins.",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 2,
        title: "Reef Snorkeling & Beachside Dining",
        tag: "ISLAND ADVENTURE",
        tagline: "Explore the magical underwater world and dine under a blanket of stars.",
        activities: [
          { icon: "🤿", title: "Guided House Reef Snorkeling", description: "Swim alongside colorful coral gardens, sea turtles, and friendly reef sharks." },
          { icon: "🛶", title: "Kayaking & Paddleboarding", description: "Explore the calm lagoon on non-motorized water sports gear." },
          { icon: "🦞", title: "Candlelit Beach BBQ", description: "Feast on freshly caught grilled lobsters and seafood right on the shore." },
        ],
        tip: "Use reef-safe sunscreen to help protect the fragile Maldivian coral reefs.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 3,
        title: "Water Villa Upgrade & Spa Wellness",
        tag: "PURE LUXURY",
        tagline: "Wake up with the ocean at your doorstep and indulge in holistic relaxation.",
        activities: [
          { icon: "🏨", title: "Check-in to Overwater Villa", description: "Upgrade to the iconic water bungalow with a private glass-floor panel and direct lagoon access." },
          { icon: "💆‍♀️", title: "Balinese Couple's Massage", description: "Enjoy a relaxing 60-minute massage in an overwater treatment suite." },
          { icon: "🥂", title: "Sunset Deck Champagne", description: "Toast to the sunset from your private villa sun deck." },
        ],
        tip: "Request an east-facing water villa if you love watching spectacular sunrises over the Indian Ocean.",
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 4,
        title: "Dolphin Cruise & Sunset Fishing",
        tag: "OCEAN SAFARI",
        tagline: "Watch spinner dolphins jump and try your hand at traditional line fishing.",
        activities: [
          { icon: "🐬", title: "Sunset Dolphin Cruise", description: "Cruise on a traditional wooden Dhoni boat as dozens of spinner dolphins leap beside the deck." },
          { icon: "🎣", title: "Traditional Hand-Line Fishing", description: "Learn local fishing styles. Any fish you catch can be cooked by the chef for lunch tomorrow!" },
        ],
        tip: "Clap loudly during the dolphin cruise — dolphins love the sound and jump higher!",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 5,
        title: "Sandbank Picnic & Sunset Dinner",
        tag: "ISOLATED PARADISE",
        tagline: "Stand on a tiny strip of pure white sand surrounded by endless shades of blue.",
        activities: [
          { icon: "🏝️", title: "Private Sandbank Escape", description: "A private boat drops you on a secluded sandbank for sunbathing and swimming in absolute privacy." },
          { icon: "🍽️", title: "Gourmet Picnic Lunch", description: "Enjoy chef-prepared meals under a shaded canopy on the sandbank." },
        ],
        tip: "A sandbank has no shade except your umbrella, so wear a wide-brimmed hat and bring extra water.",
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 6,
        title: "Bid Farewell to Paradise",
        tag: "DEPARTURE",
        tagline: "Take a final swim and head to the airport for your flight back home.",
        activities: [
          { icon: "🍳", title: "Floating Lagoon Breakfast", description: "Enjoy breakfast served on a floating tray directly in your private pool." },
          { icon: "✈️", title: "Speedboat back to Male", description: "Board the return speedboat to Male Airport for your flight home to Mathura/Delhi." },
        ],
        tip: "Double check your villa for chargers and jewelry before checking out.",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    hotels: [
      {
        name: "Adaaran Prestige Vadoo",
        rating: "★★★★★",
        type: "Luxury Water Villa Resort",
        location: "South Male Atoll",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Centara Ras Fushi Resort",
        rating: "★★★★",
        type: "Adults-Only Sanctuary",
        location: "North Male Atoll",
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  dubai: {
    slug: "dubai",
    destination: "Dubai",
    title: "Dubai Deluxe Escape",
    duration: "4 Nights / 5 Days",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
    tagline: "Where the Desert Meets the Sky",
    basePrice: 45000,
    days: [
      {
        dayNumber: 1,
        title: "Welcome to Dubai & Dhow Cruise",
        tag: "DUBAI ARRIVAL",
        tagline: "Arrive in the city of gold and cruise along the glittering Marina.",
        activities: [
          { icon: "✈️", title: "Luxury Airport Transfer", description: "Our private driver picks you up from Dubai International Airport (DXB)." },
          { icon: "🏨", title: "Hotel Check-In", description: "Settle into your premium hotel room in Downtown Dubai or Sheikh Zayed Road." },
          { icon: "🚢", title: "Marina Dhow Cruise & Dinner", description: "Enjoy a 5-star buffet dinner on a traditional wooden boat cruising past illuminated skyscrapers." },
        ],
        tip: "Pack smart casuals for the Dhow Cruise dinner; sleeveless tops are usually discouraged.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 2,
        title: "City Tour & Burj Khalifa Peak",
        tag: "MODERN DUBAI",
        tagline: "Explore structural wonders and stand at the top of the world's tallest building.",
        activities: [
          { icon: "🏙️", title: "Dubai Guided City Tour", description: "Drive past Jumeirah Mosque, Burj Al Arab (outside), Atlantis The Palm, and Dubai Museum." },
          { icon: "🗼", title: "Burj Khalifa 124th & 125th Floor", description: "Ride the ultra-fast elevator to the observation deck for 360-degree views of the city." },
          { icon: "⛲", title: "Dubai Mall & Fountain Show", description: "Shop at the world's largest mall and watch the spectacular choreographed dancing fountain show." },
        ],
        tip: "Sunset slots for Burj Khalifa are the most popular; make sure to queue early.",
        image: "https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 3,
        title: "Desert Safari & Arabian BBQ",
        tag: "DESERT ADVENTURE",
        tagline: "Dune bashing, camel riding, and a starry night in a Bedouin camp.",
        activities: [
          { icon: "🚗", title: "4x4 Dune Bashing", description: "Experience high-speed adrenaline dune riding in the golden sands with professional drivers." },
          { icon: "🐪", title: "Camel Riding & Sandboarding", description: "Ride a camel, try sandboarding down the slopes, and get a henna tattoo." },
          { icon: "🍗", title: "Belly Dance & BBQ Dinner", description: "Feast on a traditional buffet under the stars while watching Tanoura and belly dancers." },
        ],
        tip: "Eat a light lunch before the safari to prevent motion sickness during dune bashing.",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 4,
        title: "Museum of the Future & Dubai Frame",
        tag: "FUTURISTIC DUBAI",
        tagline: "Visit the world's most beautiful building and see the old vs new Dubai.",
        activities: [
          { icon: "🏛️", title: "Museum of the Future Tour", description: "Explore groundbreaking exhibitions on biotechnology, space travel, and technology." },
          { icon: "🖼️", title: "Dubai Frame Observation Deck", description: "Walk across the glass sky bridge linking the two towers, showing historic Deira on one side and modern Sheikh Zayed Road on the other." },
        ],
        tip: "Museum of the Future tickets sell out weeks in advance; early booking is mandatory.",
        image: "https://images.unsplash.com/photo-1582948636153-be67f8212b5f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 5,
        title: "Departure & Return flight",
        tag: "DEPARTURE",
        tagline: "Bid farewell to Dubai and return to Mathura/Delhi.",
        activities: [
          { icon: "✈️", title: "DXB Airport Drop", description: "Transfer from hotel to Dubai International Airport for your departure flight back home." },
        ],
        tip: "Double-check your passport and visa documents, and complete your tax refunds at airport terminals before check-in.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    hotels: [
      {
        name: "Swissôtel Al Ghurair",
        rating: "★★★★★",
        type: "Luxury City Hotel",
        location: "Deira, Dubai",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Canal Central Hotel Business Bay",
        rating: "★★★★★",
        type: "Premium Waterfront Retreat",
        location: "Business Bay, Dubai",
        image: "https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  malaysia: {
    slug: "malaysia",
    destination: "Malaysia",
    title: "Malaysia Wonders & Culture",
    duration: "4 Nights / 5 Days",
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=80",
    tagline: "Asia's Melting Pot",
    basePrice: 55000,
    days: [
      {
        dayNumber: 1,
        title: "Welcome to Kuala Lumpur",
        tag: "ARRIVE IN MALAYSIA",
        tagline: "Arrive in Kuala Lumpur and settle into your premium hotel.",
        activities: [
          { icon: "✈️", title: "KLIA Airport Transfer", description: "Our private driver picks you up from Kuala Lumpur International Airport and transfers you to Bukit Bintang." },
          { icon: "🏨", title: "Hotel Check-In", description: "Settle into your hotel and enjoy free time in the city centre." },
        ],
        tip: "Grab some Malaysian Ringgit at the airport or use standard credit cards for merchant shopping.",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 2,
        title: "Batu Caves & Petronas Twin Towers",
        tag: "CITY HIGHLIGHTS",
        tagline: "Climb the colorful steps of Batu Caves and stand on the Twin Towers Skybridge.",
        activities: [
          { icon: "⛰️", title: "Batu Caves Temple Tour", description: "Climb the 272 rainbow-colored steps to the temple cave guarded by the giant Lord Murugan statue." },
          { icon: "🏢", title: "Petronas Twin Towers Visit", description: "Walk across the double-decker skybridge connecting the twin towers and look out from the 86th floor." },
        ],
        tip: "Wear covered clothes when visiting temples; knees and shoulders must be covered.",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc18a52b?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 3,
        title: "Genting Highlands Cable Car",
        tag: "HILL RETREAT",
        tagline: "Cool mountain breezes, Awana cable car ride, and indoor theme parks.",
        activities: [
          { icon: "🚡", title: "Awana Skyway Ride", description: "Take the cable car up to Genting Highlands, stopping at Chin Swee Caves Temple." },
          { icon: "🎰", title: "Genting Theme Parks", description: "Enjoy indoor and outdoor theme parks, shopping plazas, and dining outlets at the peak." },
        ],
        tip: "Temperatures at the top can drop to 18°C; carry a light jacket.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 4,
        title: "Bukit Bintang Shopping & Jalan Alor",
        tag: "CULTURE & FOOD",
        tagline: "Shop at Pavilion and sample street food satays at Jalan Alor.",
        activities: [
          { icon: "🛍️", title: "Bukit Bintang Hopping", description: "Explore Pavilion Mall, Lot 10, and Berjaya Times Square for local and luxury shopping." },
          { icon: "🍜", title: "Jalan Alor Night Market", description: "Dine on authentic Malaysian satay, dim sum, and seafood at the famous night food market." },
        ],
        tip: "Carry cash to purchase satays and fresh fruits at the Jalan Alor food stalls.",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 5,
        title: "Farewell Malaysia",
        tag: "DEPARTURE",
        tagline: "Board your return flight home to Mathura/Delhi.",
        activities: [
          { icon: "✈️", title: "KLIA Airport Drop", description: "Transfer from hotel to Kuala Lumpur International Airport for your departure flight back home." },
        ],
        tip: "Check in early to explore duty-free shopping inside KLIA terminal.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    hotels: [
      {
        name: "JW Marriott Kuala Lumpur",
        rating: "★★★★★",
        type: "Premium Business Retreat",
        location: "Bukit Bintang, KL",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc18a52b?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "The Westin Kuala Lumpur",
        rating: "★★★★★",
        type: "Luxury Urban Retreat",
        location: "Bukit Bintang, KL",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  thailand: {
    slug: "thailand",
    destination: "Thailand",
    title: "Thailand Island Paradise",
    duration: "6 Nights / 7 Days",
    heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=80",
    tagline: "Land of Smiles",
    basePrice: 28000,
    days: [
      {
        dayNumber: 1,
        title: "Phuket Arrival & Patong Beach",
        tag: "PHUKET",
        tagline: "Arrive in Thailand's largest tropical island and explore Patong.",
        activities: [
          { icon: "✈️", title: "Phuket Airport Transfer", description: "Meet our local driver and transfer to your Patong Beach resort." },
          { icon: "🏖️", title: "Patong Beach Leisure Walk", description: "Walk along the sandy shores, feel the warm sea breeze, and settle in." },
          { icon: "🛍️", title: "Bangla Road Night Market", description: "Stroll down the lively streets filled with music, street food, and souvenir shops." },
        ],
        tip: "Taxis in Phuket are expensive; use ride-hailing apps like Grab for fair pricing.",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 2,
        title: "Phi Phi Islands Speedboat Tour",
        tag: "ISLAND ESCAPE",
        tagline: "Snorkel in Maya Bay and swim in crystal clear lagoons.",
        activities: [
          { icon: "🛥️", title: "Phi Phi & Maya Bay Cruise", description: "Full-day luxury speedboat tour covering Maya Bay (from movie The Beach), Pileh Lagoon, and Monkey Beach." },
          { icon: "🤿", title: "Loh Samah Bay Snorkeling", description: "Swim in turquoise waters with schools of tropical fish and soft corals." },
          { icon: "🍽️", title: "Buffet Lunch at Phi Phi Don", description: "Enjoy a beachfront buffet lunch featuring traditional Thai and Indian options." },
        ],
        tip: "Maya Bay is closed for reef recovery from Aug to Sep; check alternative itineraries if visiting during these months.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 3,
        title: "Phuket City Tour & Big Buddha",
        tag: "CULTURE & VIEWS",
        tagline: "Visit historical Sino-Portuguese streets and the iconic marble statue.",
        activities: [
          { icon: "🕉️", title: "Wat Chalong Temple", description: "Visit Phuket's largest and most sacred Buddhist temple. Learn native traditions." },
          { icon: "🏔️", title: "Phuket Big Buddha", description: "Drive up Nakkerd Hill to stand beneath the massive 45m-tall white marble Buddha statue for island-wide views." },
        ],
        tip: "Wear long skirts or trousers when visiting temples. Sarongs are available at the gates.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 4,
        title: "Fly to Bangkok & Chao Phraya Dinner",
        tag: "BANGKOK ARRIVAL",
        tagline: "Fly to the capital and dine along the historic river canal.",
        activities: [
          { icon: "✈️", title: "Bangkok Flight & Check-In", description: "Fly from Phuket to Bangkok (BKK) and check into your central hotel." },
          { icon: "🚢", title: "Chao Phraya Princess Cruise", description: "Dine on a luxury double-decker cruise liner, passing illuminated historic temples and palaces." },
        ],
        tip: "Ask for an upper-deck seat on the cruise when booking to enjoy the open air.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 5,
        title: "Temple Safari & Grand Palace",
        tag: "CITY SHINES",
        tagline: "Marvel at the Emerald Buddha and explore the historic Royal Palace.",
        activities: [
          { icon: "🏰", title: "Grand Palace & Wat Phra Kaew", description: "Marvel at the spectacular gold-leaf spires and the highly sacred Emerald Buddha statue." },
          { icon: "🦁", title: "Wat Pho Reclyning Buddha", description: "Visit the temple containing the giant 46m gold-plated reclining Buddha statue." },
        ],
        tip: "Bangkok heat can be intense; pack an umbrella or wide hat for walking tours.",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc18a52b?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 6,
        title: "Safari World & Marine Park",
        tag: "FAMILY FUN",
        tagline: "Drive through an open-zoo safari and watch exciting animal shows.",
        activities: [
          { icon: "🦁", title: "Open Safari Drive", description: "Ride through an open-air natural enclosure containing lions, tigers, giraffes, and zebras." },
          { icon: "🐬", title: "Marine Park & Dolphin Show", description: "Enjoy marine animal feeds, cowboy stunts, and intelligent dolphin shows." },
        ],
        tip: "Safari World is large; plan your day around the show schedules to catch the best stunts.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 7,
        title: "Departure flight back home",
        tag: "DEPARTURE",
        tagline: "Pack your bags, buy final souvenirs, and fly back to Mathura/Delhi.",
        activities: [
          { icon: "🛍️", title: "Indra Market Shopping", description: "Grab last-minute budget clothing and souvenirs at Pratunam market." },
          { icon: "✈️", title: "Airport Transfer", description: "Private drive to Suvarnabhumi Airport for your return flight." },
        ],
        tip: "Arrive at BKK airport 3 hours early to process tax-refunds for high-value items.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    hotels: [
      {
        name: "Deevana Plaza Patong",
        rating: "★★★★",
        type: "Boutique Beach Resort",
        location: "Patong Beach, Phuket",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "The Berkeley Hotel Pratunam",
        rating: "★★★★★",
        type: "Luxury Central Hotel",
        location: "Pratunam, Bangkok",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  bali: {
    slug: "bali",
    destination: "Bali",
    title: "Bali Tropical Escape",
    duration: "6 Nights / 7 Days",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80",
    tagline: "Island of the Gods",
    basePrice: 45000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive in Bali & Ubud Jungle Settle",
        tag: "UBUD ARRIVAL",
        tagline: "Land in Bali and head into the tranquil jungles of Ubud.",
        activities: [
          { icon: "✈️", title: "Denpasar Airport Pick-Up", description: "Our tour driver greets you at DPS Airport and drives you up to the cultural center of Ubud." },
          { icon: "🏨", title: "Jungle Villa Check-In", description: "Check into a luxury resort overlooking tropical greenery and private infinity pools." },
        ],
        tip: "Bali traffic is heavy; prepare for a 1.5-hour drive from airport to Ubud.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 2,
        title: "Kintamani Volcano & Rice Terraces",
        tag: "UBUD CLASSICS",
        tagline: "Stunning active volcano views and Bali's famous giant swings.",
        activities: [
          { icon: "🌋", title: "Kintamani Mount Batur View", description: "Eat buffet lunch overlooking the active volcanic craters and Lake Batur." },
          { icon: "🌾", title: "Tegallalang Rice Terrace & Swings", description: "Walk through terraced green rice paddies and fly high on local landscape swings." },
          { icon: "☕", title: "Luwak Coffee Tasting", description: "Taste fresh roasted coffee and spices at a native plantation garden." },
        ],
        tip: "Buy local souvenirs at Tegallalang shops, but bargain up to 50% of the initial price.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 3,
        title: "Rafting & Monkey Forest",
        tag: "ADVENTURE",
        tagline: "Raft through Ayung river rapids and stroll with holy monkeys.",
        activities: [
          { icon: "🚣", title: "Ayung River Whitewater Rafting", description: "Raft 12km through jungle cliffs, valleys, and waterfalls with skilled river guides." },
          { icon: "🐒", title: "Sacred Ubud Monkey Forest", description: "Walk down shaded pathways home to over 700 Balinese long-tailed macaque monkeys." },
        ],
        tip: "Keep sunglasses, hats, and jewelry inside your backpack at the Monkey Forest.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 4,
        title: "Tanah Lot Temple Sunset",
        tag: "BALI COASTS",
        tagline: "Transition south and watch the sunset behind a rocky ocean temple.",
        activities: [
          { icon: "🏨", title: "Beach Resort Check-In", description: "Check out of Ubud and move into a luxury beach resort in Seminyak or Kuta." },
          { icon: "🛕", title: "Tanah Lot Sea Temple", description: "Witness the iconic offshore Hindu temple standing on wave-swept crags during sunset." },
        ],
        tip: "Tanah Lot is accessible only at low tide; check the tide levels before walking over the rocks.",
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 5,
        title: "Nusa Penida Island Tour",
        tag: "EXCURSION",
        tagline: "Cruise to a rugged island home to Kelingking's famous T-Rex cliff.",
        activities: [
          { icon: "🚤", title: "Speedboat to Nusa Penida", description: "Board a fast public ferry from Sanur harbor to Nusa Penida island." },
          { icon: "🦖", title: "Kelingking Beach Viewpoint", description: "Stand on high cliffs looking out to the spectacular dinosaur-head rock formation." },
          { icon: "🌊", title: "Angel's Billabong & Broken Beach", description: "Swim in natural rocky lagoons and admire a massive hollow rock archway." },
        ],
        tip: "Nusa Penida roads are rough and bumpy; bring motion sickness tablets if required.",
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 6,
        title: "Uluwatu Temple & Jimbaran BBQ",
        tag: "FAREWELL CULTURES",
        tagline: "Watch local Kecak dance on a cliff edge and eat seafood on the beach.",
        activities: [
          { icon: "🌅", title: "Uluwatu Cliff-Top Temple", description: "Stroll along sea cliffs 70 meters above the Indian Ocean crashing waves." },
          { icon: "🔥", title: "Kecak & Fire Dance Show", description: "Watch the dramatic Sunset Kecak musical chant depicting the Ramayana epic." },
          { icon: "🦞", title: "Jimbaran Bay Seafood Dinner", description: "Feast on a candlelight seafood platter with your feet in the sand." },
        ],
        tip: "The Kecak show ticket lines are long; our driver will pre-book them to save you 1 hour.",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 7,
        title: "Departure back to Mathura/Delhi",
        tag: "FAREWELL",
        tagline: "Pack, buy final souvenirs, and catch your flight home.",
        activities: [
          { icon: "✈️", title: "DPS Airport Transfer", description: "Private drop-off at Denpasar Airport for your flight back home." },
        ],
        tip: "Ensure you clear immigration early to check out the DPS duty-free shops.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    hotels: [
      {
        name: "Maya Ubud Resort & Spa",
        rating: "★★★★★",
        type: "Luxury Jungle Lodge",
        location: "Petanu Valley, Ubud",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Courtyard Marriott Seminyak",
        rating: "★★★★",
        type: "Premium Beachside Stay",
        location: "Seminyak Beach",
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  kerala: {
    slug: "kerala",
    destination: "Kerala",
    title: "Munnar & Alleppey Special",
    duration: "5 Nights / 6 Days",
    heroImage: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1600&q=80",
    tagline: "God's Own Country",
    basePrice: 18000,
    days: [
      {
        dayNumber: 1,
        title: "Cochin to Munnar Hills",
        tag: "MUNNAR HILLS",
        tagline: "Scenic road journey past rushing waterfalls to Munnar's high elevations.",
        activities: [
          { icon: "🚗", title: "Cochin Airport Pickup", description: "Our representative welcomes you and drives you to Munnar (4 hours)." },
          { icon: "🌊", title: "Cheeyappara Waterfalls", description: "Stop for photos at the magnificent tiered waterfalls tumbling down rocky cliffs." },
          { icon: "🏨", title: "Resort Check-In & Rest", description: "Settle into your hill resort surrounded by tea gardens and mist." },
        ],
        tip: "Munnar hills get foggy after sunset; try to complete the road trip by 5 PM.",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 2,
        title: "Tea Gardens & Eravikulam",
        tag: "MUNNAR PLACES",
        tagline: "See the rare mountain goats and walk through endless tea valleys.",
        activities: [
          { icon: "🐐", title: "Eravikulam National Park", description: "Board forest transit buses to see the Nilgiri Tahr mountain goats at Rajamalai hills." },
          { icon: "🍃", title: "Munnar Tea Museum & Gardens", description: "See tea processing machinery and stroll through sprawling green tea plantations." },
          { icon: "🏞️", title: "Mattupetty Dam & Echo Point", description: "Boating in the dam reservoir and shouting into the scenic echo valley." },
        ],
        tip: "Book Eravikulam tickets online to avoid 2-hour lines at the park gate.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 3,
        title: "Munnar to Thekkady Wildlife",
        tag: "THEKKADY",
        tagline: "Travel to Periyar Spice Sanctuary and cruise in the reserve lake.",
        activities: [
          { icon: "🚗", title: "Drive to Thekkady", description: "Scenic 3-hour road trip past cardamon plantations and spice estates." },
          { icon: "🐘", title: "Periyar Lake Boat Cruise", description: "Cruise inside the Periyar wildlife sanctuary, spotting wild elephants and bisons along the shores." },
          { icon: "🌶️", title: "Spice Plantation Tour", description: "See fresh growing vanilla, cardamon, pepper, and cinnamon, with local guides explaining their healing properties." },
        ],
        tip: "Perform the boat boarding 30 minutes before the scheduled cruise departure.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 4,
        title: "Houseboat Check-In & Alleppey Cruise",
        tag: "ALLEPPEY BACKWATERS",
        tagline: "Check into a luxury wooden boat and float past quiet backwater villages.",
        activities: [
          { icon: "🚤", title: "Drive to Alleppey Canal", description: "A 4-hour descent from the hills to the coastal backwater lagoon docks." },
          { icon: "🛳️", title: "Houseboat Check-In & Boarding", description: "Settle into your private bedroom houseboat with onboard chefs and local crews." },
          { icon: "🌾", title: "Vembanad Lake Cruise", description: "Glide past coconut groves, paddy fields, and local fisherman canoes." },
        ],
        tip: "Houseboats anchor by 5:30 PM due to local fishing net regulations; enjoy a quiet evening on deck.",
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 5,
        title: "Alleppey to Cochin Departure Prep",
        tag: "COCHIN CITY",
        tagline: "Explore historical Dutch Forts and Chinese Fishing Nets.",
        activities: [
          { icon: "🏨", title: "Fort Kochi Walking Tour", description: "Explore the St. Francis Church, Santa Cruz Basilica, and the iconic Chinese Fishing Nets." },
        ],
        tip: "Buy fresh fish near the nets and local restaurants will cook it on the spot for you.",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc18a52b?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 6,
        title: "Fly Home to Mathura/Delhi",
        tag: "COCHIN DEPARTURE",
        tagline: "Drop at Cochin Airport, end of tour.",
        activities: [
          { icon: "✈️", title: "Airport Drop-Off", description: "Drive to Cochin Airport for your return flight home." },
        ],
        tip: "Carry some packed banana chips from local bakeries — they make the best souvenirs.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    hotels: [
      {
        name: "Blanket Hotel & Spa",
        rating: "★★★★",
        type: "Premium Hill Resort",
        location: "Attukad Falls, Munnar",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Abad Whispering Palms",
        rating: "★★★★",
        type: "Backwater Resort",
        location: "Kumarakom, Alleppey",
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  rajasthan: {
    slug: "rajasthan",
    destination: "Rajasthan",
    title: "Royal Heritage Tour",
    duration: "6 Nights / 7 Days",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80",
    tagline: "Rangeelo Rajasthan",
    basePrice: 22000,
    days: [
      {
        dayNumber: 1,
        title: "Welcome to Jaipur, the Pink City",
        tag: "JAIPUR",
        tagline: "Arrive in the royal capital and explore local bazaars.",
        activities: [
          { icon: "🚗", title: "Jaipur Airport Pickup", description: "Private pick-up and check-in to your heritage hotel." },
          { icon: "🛍️", title: "Johri & Bapu Bazaar Walk", description: "Shop for colored gemstones, traditional textiles, and blue pottery." },
        ],
        tip: "Try the famous lassi at Lassiwala on MI road — served in earthen pots.",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 2,
        title: "Amer Fort & Hawa Mahal Tour",
        tag: "JAIPUR HERITAGE",
        tagline: "Walk through high castle arches and see the palace of winds.",
        activities: [
          { icon: "🏰", title: "Amer Fort Guided Tour", description: "Walk through the stunning palace of mirrors (Sheesh Mahal) inside Amer Fort." },
          { icon: "🗼", title: "Hawa Mahal & City Palace", description: "Photograph the iconic pink honeycomb window wall and visit the museum collection." },
        ],
        tip: "Elephant rides at Amer Fort are strictly monitored; hire a government-approved guide for best history details.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 3,
        title: "Jaipur to Jodhpur Forts",
        tag: "JODHPUR BLUE CITY",
        tagline: "Drive to the blue-walled city and visit Mehrangarh Fort.",
        activities: [
          { icon: "🚗", title: "Drive to Jodhpur", description: "A 6-hour road trip past rural farmlands to Jodhpur." },
          { icon: "🏰", title: "Mehrangarh Fort Tour", description: "Walk through massive gate scars and see the royal palanquins on high battlements." },
        ],
        tip: "Try the local Pyaz Kachori at Jodhpur's Janta Sweet Home.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 4,
        title: "Jodhpur to Jaisalmer Desert Camp",
        tag: "JAISALMER DESERT",
        tagline: "Enter the golden fort city and drive out to the Thar sand dunes.",
        activities: [
          { icon: "🚗", title: "Drive to Jaisalmer", description: "A 5-hour drive into the Thar desert heartland." },
          { icon: "🏕️", title: "Desert Camp Check-In", description: "Check into premium Swiss luxury tents at Sam Sand Dunes." },
          { icon: "🐪", title: "Camel Safari & Cultural Show", description: "Ride camels into the sunset dunes and watch Rajasthani Kalbeliya folk dances." },
        ],
        tip: "Bring warm clothes if visiting from Nov to Jan; desert temperatures drop sharply at night.",
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 5,
        title: "Jaisalmer Fort & Havelis",
        tag: "GOLDEN CITY SIGHTS",
        tagline: "Explore the living sandstone fort and intricately carved mansions.",
        activities: [
          { icon: "🏰", title: "Jaisalmer Golden Fort Walk", description: "Explore the active living fort containing houses, temples, and shops inside sandstone walls." },
          { icon: "🛕", title: "Patwon Ki Haveli", description: "Admire the gold-colored stone lattice arches of Jaisalmer's largest merchant haveli." },
        ],
        tip: "Hire a local guide to explain the water harvesting systems of the fort.",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc18a52b?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 6,
        title: "Jaisalmer to Jodhpur Return",
        tag: "RETURN ROUTE",
        tagline: "Drive back to Jodhpur for your final evening.",
        activities: [
          { icon: "🚗", title: "Drive back to Jodhpur", description: "A 5-hour return drive. Relax in your heritage resort." },
        ],
        tip: "Spend the evening walking around the Clock Tower market.",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
      },
      {
        dayNumber: 7,
        title: "Fly Home to Mathura/Delhi",
        tag: "DEPARTURE",
        tagline: "End of tour, drop at airport.",
        activities: [
          { icon: "✈️", title: "Jodhpur Airport Drop-Off", description: "Drop-off at Jodhpur Airport for your flight back home." },
        ],
        tip: "Arrive at Jodhpur airport 2 hours early to clear check-in.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    hotels: [
      {
        name: "Alsisar Haveli",
        rating: "★★★★",
        type: "Heritage Mansion",
        location: "Jaipur City",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Serai Desert Resort",
        rating: "★★★★★",
        type: "Luxury Desert Glamping",
        location: "Sam Sand Dunes, Jaisalmer",
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
};
