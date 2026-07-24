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
    title: "Kashmir Special (Mughal Gardens, Gulmarg & Pahalgam)",
    duration: "7 Nights / 8 Days",
    heroImage: "/images/destinations/kashmir_1.jpg",
    tagline: "Paradise on Earth",
    basePrice: 24500,
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
        image: "/images/destinations/kashmir_1.jpg",
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
        image: "/images/destinations/kashmir_2.jpg",
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
        image: "/images/destinations/kashmir_3.jpg",
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
        image: "/images/destinations/kashmir_1.jpg",
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
        image: "/images/destinations/kashmir_2.jpg",
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
        image: "/images/destinations/kashmir_3.jpg",
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
        image: "/images/destinations/kashmir_1.jpg",
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
        image: "/images/destinations/kashmir_2.jpg",
      },
    ],
    hotels: [
      { name: "Sukoon Houseboat", rating: "★★★★", type: "Heritage Houseboat", location: "Dal Lake, Srinagar", image: "/images/destinations/kashmir_3.jpg" },
      { name: "Khyber Mountain Resort", rating: "★★★★★", type: "Luxury Retreat", location: "Gulmarg Heights", image: "/images/destinations/kashmir_1.jpg" },
    ],
  },
  maldives: {
    slug: "maldives",
    destination: "Maldives",
    title: "Maldives Bestseller (Overwater Villa & Speedboat)",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/maldives_1.jpg",
    tagline: "Stillness Above the Ocean",
    basePrice: 78000,
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
        image: "/images/destinations/maldives_1.jpg",
      },
      {
        dayNumber: 2,
        title: "Water Sports & Snorkeling",
        tag: "REEF ADVENTURES",
        tagline: "Dive into warm crystal lagoons and swim with schools of exotic fish.",
        activities: [
          { icon: "🤿", title: "House Reef Snorkeling Safari", description: "Explore the resort's vibrant house reef with a certified marine biologist guide." },
          { icon: "🛶", title: "Kayak & Paddleboarding Session", description: "Enjoy complimentary non-motorized water sports at the resort lagoon." },
        ],
        tip: "Avoid touching corals — they are extremely fragile and part of protected ecosystems.",
        image: "/images/destinations/maldives_2.jpg",
      },
      {
        dayNumber: 3,
        title: "Overwater Villa Transfer & Sunset Cruise",
        tag: "LUXURY TRANSITION",
        tagline: "Move into your iconic villa perched directly on stilts over the turquoise ocean.",
        activities: [
          { icon: "🏨", title: "Overwater Villa Check-In", description: "Unlock your luxury room featuring direct lagoon staircase access and glass floor panels." },
          { icon: "🌅", title: "Sunset Cruise with Drinks", description: "Board a traditional Maldivian Dhoni boat to watch the sunset sky with fruit mocktails." },
        ],
        tip: "Apply reef-safe sunscreen to protect marine life during swims.",
        image: "/images/destinations/maldives_3.jpg",
      },
      {
        dayNumber: 4,
        title: "Island Spa & Candlelit Beach Dinner",
        tag: "ROMANTIC DAY",
        tagline: "Indulge in island therapies and dine with your feet in the sand.",
        activities: [
          { icon: "💆", title: "Balinese Couple Spa Massage", description: "Enjoy a relaxing 60-minute massage at the resort's award-winning overwater spa pavilion." },
          { icon: "🦞", title: "Candlelit Lagoon Seafood Dinner", description: "Feast on a private beach buffet set up under the starlit sky." },
        ],
        tip: "Inform the chef early if you have any seafood allergies so they can customize the grill.",
        image: "/images/destinations/maldives_1.jpg",
      },
      {
        dayNumber: 5,
        title: "Departure from Maldives",
        tag: "FAREWELL",
        tagline: "Catch your return flight back to Mathura/Delhi.",
        activities: [
          { icon: "🚤", title: "Speedboat back to Male Airport", description: "Board the morning speedboat for a smooth transfer back to Velana Airport." },
        ],
        tip: "Arrive at Male Airport 3 hours early as immigration lines get busy during peak seasons.",
        image: "/images/destinations/maldives_2.jpg",
      },
    ],
    hotels: [
      { name: "Centara Grand Island Resort", rating: "★★★★★", type: "All-Inclusive Resort", location: "South Ari Atoll", image: "/images/destinations/maldives_3.jpg" },
    ],
  },
  dubai: {
    slug: "dubai",
    destination: "Dubai",
    title: "Dubai Bestseller (Burj Khalifa, Desert Safari & Dhow Cruise)",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/dubai_1.jpg",
    tagline: "Where the Desert Meets the Sky",
    basePrice: 52000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Dubai & Marina Dhow Cruise Dinner",
        tag: "DUBAI ARRIVAL",
        tagline: "Land in the City of Gold and cruise down the glass skyscrapers canal.",
        activities: [
          { icon: "✈️", title: "Dubai Airport Meet & Transfer", description: "Private pick-up at Dubai Airport (DXB) and transfer to your central Deira hotel." },
          { icon: "🚢", title: "Marina Dhow Cruise & Buffet", description: "Sail past illuminated futuristic high-rises on a traditional wooden boat with buffet dining." },
        ],
        tip: "Marina Dhow cruises offer premium views compared to Creek cruises; hold onto your tickets.",
        image: "/images/destinations/dubai_1.jpg",
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
        image: "/images/destinations/dubai_2.jpg",
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
        image: "/images/destinations/dubai_3.jpg",
      },
      {
        dayNumber: 4,
        title: "Future Museum & Gold Souk Tour",
        tag: "CULTURE & DESIGN",
        tagline: "Visit the world's most beautiful museum and shop for gold.",
        activities: [
          { icon: "👁️", title: "Museum of the Future", description: "Step into 2071 inside this calligraphy-wrapped silver ring architectural masterpiece." },
          { icon: "💍", title: "Deira Gold & Spice Souks", description: "Explore historic open markets packed with glittering window gold and sacks of spices." },
        ],
        tip: "Bargain heavily on jewelry and spices inside the Gold Souks — vendors expect it.",
        image: "/images/destinations/dubai_1.jpg",
      },
      {
        dayNumber: 5,
        title: "Aquaventure Waterpark Day Excursion",
        tag: "FAMILY FUN",
        tagline: "Fly down extreme slides at Atlantis Resort.",
        activities: [
          { icon: "🌊", title: "Aquaventure Slides & Pools", description: "Access the world's largest waterpark, trying out leap-of-faith shark lagoon slides." },
        ],
        tip: "Buy waterproof phone pouches outside the park to save money.",
        image: "/images/destinations/dubai_2.jpg",
      },
      {
        dayNumber: 6,
        title: "Fly Home to India",
        tag: "DEPARTURE",
        tagline: "End of your Dubai tour. Return to Mathura/Delhi.",
        activities: [
          { icon: "✈️", title: "DXB Airport Drop", description: "Transfer to Dubai International Airport for your departure flight home." },
        ],
        tip: "Reach the airport 3 hours early to process tax-free shopping refunds.",
        image: "/images/destinations/dubai_3.jpg",
      },
    ],
    hotels: [
      { name: "Swissôtel Al Ghurair", rating: "★★★★★", type: "Luxury City Hotel", location: "Deira, Dubai", image: "/images/destinations/dubai_1.jpg" },
      { name: "Canal Central Hotel Business Bay", rating: "★★★★★", type: "Premium Waterfront Retreat", location: "Business Bay, Dubai", image: "/images/destinations/dubai_2.jpg" },
    ],
  },
  "malaysia-culture": {
    slug: "malaysia-culture",
    destination: "Malaysia",
    title: "Malaysia Wonders & Culture",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/malaysia_1.jpg",
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
        image: "/images/destinations/malaysia_1.jpg",
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
        image: "/images/destinations/malaysia_2.jpg",
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
        image: "/images/destinations/malaysia_3.jpg",
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
        image: "/images/destinations/malaysia_1.jpg",
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
        image: "/images/destinations/malaysia_2.jpg",
      },
    ],
    hotels: [
      {
        name: "JW Marriott Kuala Lumpur",
        rating: "★★★★★",
        type: "Premium Business Retreat",
        location: "Bukit Bintang, KL",
        image: "/images/destinations/malaysia_3.jpg",
      },
      {
        name: "The Westin Kuala Lumpur",
        rating: "★★★★★",
        type: "Luxury Urban Retreat",
        location: "Bukit Bintang, KL",
        image: "/images/destinations/malaysia_1.jpg",
      },
    ],
  },
  thailand: {
    slug: "thailand",
    destination: "Thailand",
    title: "Thailand Bestseller (Bangkok Temple & Coral Island Pattaya)",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/thailand_1.jpg",
    tagline: "Land of Smiles",
    basePrice: 38000,
    days: [
      {
        dayNumber: 1,
        title: "Bangkok Arrival & Transfer to Pattaya",
        tag: "PATTAYA",
        tagline: "Arrive in Thailand, drive directly to Pattaya Beach and relax.",
        activities: [
          { icon: "✈️", title: "Bangkok Airport Pickup", description: "Meet our driver at BKK and transfer directly to Pattaya Beach (2 hours)." },
          { icon: "🏖️", title: "Pattaya Beach Leisure", description: "Stroll along Beach Road and settle into your resort." },
        ],
        tip: "Carry some Thai Baht for road toll booths and airport snacks.",
        image: "/images/destinations/thailand_1.jpg",
      },
      {
        dayNumber: 2,
        title: "Coral Island Speedboat Tour",
        tag: "ISLAND ADVENTURE",
        tagline: "Snorkel in turquoise waters and relax on white sands.",
        activities: [
          { icon: "🚤", title: "Coral Island Speedboat Cruise", description: "Sail to Koh Larn Island for water sports, snorkeling, and parasailing." },
          { icon: "🍽️", title: "Indian Buffet Lunch", description: "Dine on a hot lunch prepared fresh on the beach." },
        ],
        tip: "Parasailing is optional; bargain with vendors directly if you want to try it.",
        image: "/images/destinations/thailand_2.jpg",
      },
      {
        dayNumber: 3,
        title: "Transfer to Bangkok & City Tour",
        tag: "BANGKOK CITY",
        tagline: "Travel back to the capital and visit historical temples.",
        activities: [
          { icon: "🚗", title: "Drive to Bangkok", description: "Check out of Pattaya and drive back to Bangkok." },
          { icon: "🛕", title: "Wat Traimit Golden Buddha", description: "See the world's largest solid gold Buddha statue (5.5 tons)." },
          { icon: "🦁", title: "Marble Temple (Wat Benchamabophit)", description: "Photograph the beautiful Carrara marble temple courtyard." },
        ],
        tip: "Wear clothes covering knees and shoulders for temple visits.",
        image: "/images/destinations/thailand_3.jpg",
      },
      {
        dayNumber: 4,
        title: "Safari World & Marine Park Excursion",
        tag: "SAFARI WORLD",
        tagline: "Drive through an open-zoo safari and watch exciting animal shows.",
        activities: [
          { icon: "🦁", title: "Open Safari Drive", description: "Ride through an open-air natural enclosure containing lions, tigers, and zebras." },
          { icon: "🐬", title: "Marine Park Shows", description: "Enjoy marine animal feeds, cowboy stunts, and intelligent dolphin shows." },
        ],
        tip: "Safari World is large; plan your day around the show schedules to catch the best stunts.",
        image: "/images/destinations/thailand_1.jpg",
      },
      {
        dayNumber: 5,
        title: "Chao Phraya River Dinner Cruise",
        tag: "LEISURE & DINING",
        tagline: "Dine along the historic river canal, passing illuminated landmarks.",
        activities: [
          { icon: "🛍️", title: "Pratunam Market Shopping", description: "Spend your day shopping for clothing and local goods at budget-friendly malls." },
          { icon: "🚢", title: "Chao Phraya Princess Cruise", description: "Dine on a luxury double-decker cruise liner, passing illuminated historic temples." },
        ],
        tip: "Ask for an upper-deck seat on the cruise when booking to enjoy the open air.",
        image: "/images/destinations/thailand_2.jpg",
      },
      {
        dayNumber: 6,
        title: "Departure flight back home",
        tag: "DEPARTURE",
        tagline: "Pack your bags, buy final souvenirs, and fly back to Mathura/Delhi.",
        activities: [
          { icon: "✈️", title: "Suvarnabhumi Airport Transfer", description: "Private drive to Bangkok Airport for your return flight." },
        ],
        tip: "Arrive at BKK airport 3 hours early to clear immigration and process tax refunds.",
        image: "/images/destinations/thailand_3.jpg",
      },
    ],
    hotels: [
      { name: "Deevana Plaza Patong", rating: "★★★★", type: "Boutique Beach Resort", location: "Patong Beach, Phuket", image: "/images/destinations/thailand_1.jpg" },
    ],
  },
  bali: {
    slug: "bali",
    destination: "Bali",
    title: "Bali Magic (Ubud Private Pool Villa & Uluwatu Sunset)",
    duration: "6 Nights / 7 Days",
    heroImage: "/images/destinations/bali_1.jpg",
    tagline: "Island of the Gods",
    basePrice: 46000,
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
        image: "/images/destinations/bali_1.jpg",
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
        image: "/images/destinations/bali_2.jpg",
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
        image: "/images/destinations/bali_3.jpg",
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
        image: "/images/destinations/bali_1.jpg",
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
        image: "/images/destinations/bali_2.jpg",
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
        image: "/images/destinations/bali_3.jpg",
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
        image: "/images/destinations/bali_1.jpg",
      },
    ],
    hotels: [
      { name: "Maya Ubud Resort & Spa", rating: "★★★★★", type: "Luxury Jungle Lodge", location: "Petanu Valley, Ubud", image: "/images/destinations/bali_2.jpg" },
    ],
  },
  kerala: {
    slug: "kerala",
    destination: "Kerala",
    title: "Kerala Hills & Backwaters (Munnar, Thekkady & Houseboat Alleppey)",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/kerala_1.jpg",
    tagline: "God's Own Country",
    basePrice: 19500,
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
        image: "/images/destinations/kerala_1.jpg",
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
        image: "/images/destinations/kerala_2.jpg",
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
        image: "/images/destinations/kerala_3.jpg",
      },
      {
        dayNumber: 4,
        title: "Houseboat Check-In & Alleppey Cruise",
        tag: "ALLEPPEY BACKWATERS",
        tagline: "Check into a luxury wooden boat and float past quiet backwater villages.",
        activities: [
          { icon: "🚗", title: "Drive to Alleppey", description: "A 4-hour descent from the hills to the coastal backwater lagoon docks." },
          { icon: "🛳️", title: "Houseboat Check-In & Boarding", description: "Settle into your private bedroom houseboat with onboard chefs and local crews." },
          { icon: "🌾", title: "Vembanad Lake Cruise", description: "Glide past coconut groves, paddy fields, and local fisherman canoes." },
        ],
        tip: "Houseboats anchor by 5:30 PM due to local fishing net regulations; enjoy a quiet evening on deck.",
        image: "/images/destinations/kerala_1.jpg",
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
        image: "/images/destinations/kerala_2.jpg",
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
        image: "/images/destinations/kerala_3.jpg",
      },
    ],
    hotels: [
      { name: "Blanket Hotel & Spa", rating: "★★★★", type: "Premium Hill Resort", location: "Attukad Falls, Munnar", image: "/images/destinations/kerala_1.jpg" },
    ],
  },
  rajasthan: {
    slug: "rajasthan",
    destination: "Rajasthan",
    title: "Royal Rajasthan (Jaipur, Jodhpur & Jaisalmer Camp)",
    duration: "7 Nights / 8 Days",
    heroImage: "/images/destinations/rajasthan_1.jpg",
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
        image: "/images/destinations/rajasthan_1.jpg",
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
        image: "/images/destinations/rajasthan_2.jpg",
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
        image: "/images/destinations/rajasthan_3.jpg",
      },
      {
        dayNumber: 4,
        title: "Jodhpur to Jaisalmer Desert Camp",
        tag: "JAISALMER DESERT",
        tagline: "Enter the golden fort city and drive out to the Thar sand dunes.",
        activities: [
          { icon: "🚗", title: "Drive to Jaisalmer", description: "A 5-hour drive into the Thar desert heartland." },
          { icon: "🏕️", title: "Desert Camp Check-In", description: "Check into premium Swiss luxury tents at Sam Sand Dunes." },
          { icon: "🐪", title: "Camel Safari & Cultural Show", description: "Ride camels into the Thar dunes during sunset and watch folk dances." },
        ],
        tip: "Bring warm clothes if visiting from Nov to Jan; desert temperatures drop sharply at night.",
        image: "/images/destinations/rajasthan_1.jpg",
      },
      {
        dayNumber: 5,
        title: "Jaisalmer Fort & Havelis",
        tag: "GOLDEN CITY SIGHTS",
        tagline: "Explore the living sandstone fort and intricately carved mansions.",
        activities: [
          { icon: "🏰", title: "Jaisalmer Golden Fort Walk", description: "Explore the active living fort containing houses, temples, and shops inside sandstone walls." },
          { icon: "🛕", title: "Patwon Ki Haveli", description: "Admire the gold-colored stone lattice arches of Jaisalmer's largest haveli." },
        ],
        tip: "Hire a local guide to explain the water harvesting systems of the fort.",
        image: "/images/destinations/rajasthan_2.jpg",
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
        image: "/images/destinations/rajasthan_3.jpg",
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
        image: "/images/destinations/rajasthan_1.jpg",
      },
    ],
    hotels: [
      { name: "Alsisar Haveli", rating: "★★★★", type: "Heritage Mansion", location: "Jaipur City", image: "/images/destinations/rajasthan_2.jpg" },
    ],
  },
  singapore: {
    slug: "singapore",
    destination: "Singapore",
    title: "Singapore & Malaysia Super Saver (Sentosa & Kuala Lumpur)",
    duration: "6 Nights / 7 Days",
    heroImage: "/images/destinations/singapore_1.jpg",
    tagline: "The Future, Already Here",
    basePrice: 72000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Singapore & Night Safari",
        tag: "SINGAPORE ARRIVAL",
        tagline: "Land in the Lion City, check in, and visit the world's first nocturnal zoo.",
        activities: [
          { icon: "✈️", title: "Changi Airport Pickup & Transfer", description: "Private pickup at Changi Airport and transfer to your central hotel." },
          { icon: "🦁", title: "Night Safari Tram Ride", description: "Ride the open tram to spot lions, rhinos, and nocturnal beasts roaming free in forest areas." },
        ],
        tip: "Changi Airport is an attraction itself; leave some time on departure to see Jewel.",
        image: "/images/destinations/singapore_1.jpg",
      },
      {
        dayNumber: 2,
        title: "Sentosa Island Scenic Cable Car & Tour",
        tag: "SENTOSA ISLAND",
        tagline: "Ride the high cable car and enjoy beach lights at Sentosa.",
        activities: [
          { icon: "🚡", title: "Sentosa Cable Car Sky Pass", description: "Ride the gondola from Mount Faber to Sentosa, watching panoramic harbor horizons." },
          { icon: "🎡", title: "S.E.A. Aquarium Entry", description: "Visit the massive marine zoo containing over 100,000 sharks and sea rays." },
          { icon: "🌅", title: "Wings of Time Laser Show", description: "Watch the spectacular multi-sensory pyrotechnic and laser water show on Siloso Beach." },
        ],
        tip: "Buy your Wings of Time sunset slot tickets early to get central seats.",
        image: "/images/destinations/singapore_2.jpg",
      },
      {
        dayNumber: 3,
        title: "Universal Studios Singapore Thrills",
        tag: "UNIVERSAL STUDIOS",
        tagline: "Ride extreme coasters and explore film themed zones.",
        activities: [
          { icon: "🎢", title: "USS Full Day Entry Pass", description: "Access Transformers 3D rides, Battlestar Galactica coasters, and Far Far Away castles." },
        ],
        tip: "Buy Express passes inside the park to skip 1-hour queues for popular coasters.",
        image: "/images/destinations/singapore_3.jpg",
      },
      {
        dayNumber: 4,
        title: "Gardens by the Bay & Travel to KL",
        tag: "SINGAPORE TO MALAYSIA",
        tagline: "Explore futuristic Supertree groves and travel to Kuala Lumpur.",
        activities: [
          { icon: "🌲", title: "Cloud Forest & Flower Dome", description: "Walk through mist-shrouded indoor waterfall domes and exotic floral gardens." },
          { icon: "🚌", title: "Luxury Coach to Kuala Lumpur", description: "Board your premium express coach for a comfortable 5-hour highway drive to Malaysia." },
        ],
        tip: "Carry your physical passport handy for the Singapore-Malaysia woodland land border custom checks.",
        image: "/images/destinations/singapore_1.jpg",
      },
      {
        dayNumber: 5,
        title: "Batu Caves & Genting Highlands",
        tag: "MALAYSIA HIGHLIGHTS",
        tagline: "Climb Batu Caves steps and ride cable cars up Genting hills.",
        activities: [
          { icon: "⛰️", title: "Batu Caves Temple", description: "Climb the 272 colorful steps to the cavern temple guarded by the giant gold Lord Murugan statue." },
          { icon: "🚡", title: "Awana Cable Car & Genting", description: "Ride the cable car to Genting Highlands mountain resort." },
        ],
        tip: "Wear appropriate clothing covering knees and shoulders for temple entries.",
        image: "/images/destinations/singapore_2.jpg",
      },
      {
        dayNumber: 6,
        title: "Kuala Lumpur City Sightseeing",
        tag: "KL CITY",
        tagline: "Stroll Petronas towers and shop in Bukit Bintang malls.",
        activities: [
          { icon: "🏢", title: "Petronas Twin Towers skybridge", description: "Walk across the bridge connecting the world's tallest twin towers." },
          { icon: "🛍️", title: "Pavilion Mall Hopping", description: "Tax-free shopping at Bukit Bintang avenue." },
        ],
        tip: "Dine at Jalan Alor night street food market for authentic Malaysian satay.",
        image: "/images/destinations/singapore_3.jpg",
      },
      {
        dayNumber: 7,
        title: "KL Departure flight",
        tag: "FAREWELL",
        tagline: "Airport drop and return flight.",
        activities: [
          { icon: "✈️", title: "KLIA Airport Drop", description: "Transfer to KLIA airport for your return flight back home." },
        ],
        tip: "Keep all duty-free shopping receipts ready for checkout points.",
        image: "/images/destinations/singapore_1.jpg",
      },
    ],
    hotels: [
      { name: "Orchard Rendezvous Hotel", rating: "★★★★", type: "Premium City Hotel", location: "Orchard Road, Singapore", image: "/images/destinations/singapore_2.jpg" },
    ],
  },
  europe: {
    slug: "europe",
    destination: "Europe",
    title: "European Dream (Paris, Swiss Alps & Venice)",
    duration: "9 Nights / 10 Days",
    heroImage: "/images/destinations/europe_1.jpg",
    tagline: "Old Stones, New Memories",
    basePrice: 145000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Paris & Seine River Cruise",
        tag: "PARIS ARRIVAL",
        tagline: "Welcome to the City of Light! Cruise down the Seine at sunset.",
        activities: [
          { icon: "✈️", title: "Paris CDG Airport Transfer", description: "Meet our guide and transfer to your boutique central Paris hotel." },
          { icon: "🚢", title: "Seine River Cruise", description: "Glide past illuminated monuments like Notre Dame, Louvre, and Eiffel Tower." },
        ],
        tip: "Paris Metro is the fastest way to get around; buy a pack of 10 tickets (Carnet).",
        image: "/images/destinations/europe_1.jpg",
      },
      {
        dayNumber: 2,
        title: "Eiffel Tower & Louvre Museum",
        tag: "PARIS HIGHLIGHTS",
        tagline: "Ascend the Eiffel Tower and see the iconic Mona Lisa.",
        activities: [
          { icon: "🗼", title: "Eiffel Tower 2nd Level Access", description: "Ascend the elevator to the 2nd floor platform for spectacular city panoramas." },
          { icon: "🎨", title: "Louvre Museum Guided Entry", description: "Skip the lines to see Venus de Milo, Winged Victory, and the Mona Lisa." },
        ],
        tip: "Book your Louvre slots months in advance to secure morning entries.",
        image: "/images/destinations/europe_2.jpg",
      },
      {
        dayNumber: 3,
        title: "High-Speed Train to Switzerland",
        tag: "SWISS TRANSIT",
        tagline: "Board the TGV Lyria train past French countryside to scenic Lucerne.",
        activities: [
          { icon: "🚊", title: "TGV Lyria Express Train", description: "Board the comfortable 4-hour high-speed train to Zurich/Lucerne." },
          { icon: "🏨", title: "Lucerne Hotel Check-In", description: "Settle into your hotel located walking distance from the Lake shore." },
        ],
        tip: "Validate your Swiss Travel Pass before boarding local Swiss connections.",
        image: "/images/destinations/europe_3.jpg",
      },
      {
        dayNumber: 4,
        title: "Mt. Titlis Cable Car Excursion",
        tag: "SNOW ALPS",
        tagline: "Ride the rotating cable car and walk the high suspension bridge.",
        activities: [
          { icon: "🏔️", title: "Titlis Rotair Cable Car", description: "Ride the world's first rotating cable car up to the snow summit at 10,000 ft." },
          { icon: "🌉", title: "Titlis Cliff Walk", description: "Walk along Europe's highest suspension bridge overlooking steep rock drops." },
        ],
        tip: "Wear layered woolens and sturdy shoes as the glacier park is icy and cold.",
        image: "/images/destinations/europe_1.jpg",
      },
      {
        dayNumber: 5,
        title: "Scenic GoldenPass Train to Interlaken",
        tag: "INTERLAKEN",
        tagline: "Travel to the resort valley between two lakes and cruise.",
        activities: [
          { icon: "🚊", title: "Train to Interlaken", description: "Scenic train ride down the Brunig Pass to Interlaken." },
          { icon: "🚢", title: "Lake Thun Boat Cruise", description: "Sail past historic castles and mountains on a classic passenger cruise boat." },
        ],
        tip: "Try the traditional cheese fondue at Interlaken's local cafes.",
        image: "/images/destinations/europe_2.jpg",
      },
      {
        dayNumber: 6,
        title: "Jungfraujoch Top of Europe Rail Climb",
        tag: "JUNGFRAUJOCH",
        tagline: "Climb past mountain tunnels to Europe's highest railway station.",
        activities: [
          { icon: "🚊", title: "Eiger Express & Jungfrau Cog Railway", description: "Ride the modern cable car and cog train up to the station at 11,332 ft." },
        ],
        tip: "Altitude sickness can happen; climb slowly and drink plenty of water.",
        image: "/images/destinations/europe_3.jpg",
      },
      {
        dayNumber: 7,
        title: "Travel to Venice, Italy",
        tag: "ITALY ARRIVAL",
        tagline: "Scenic rail cruise across the Alps down to the canal city of Venice.",
        activities: [
          { icon: "🚊", title: "EuroCity Train to Venice", description: "Scenic train journey connecting Switzerland to Venezia Santa Lucia station." },
          { icon: "🏨", title: "Venice Hotel Check-In", description: "Settle into your hotel. Explore the bridges around St. Mark's." },
        ],
        tip: "Use water taxis (Vaporetto) for fast and easy transit along the Grand Canal.",
        image: "/images/destinations/europe_1.jpg",
      },
      {
        dayNumber: 8,
        title: "Venice Gondola Cruise & St. Mark's",
        tag: "VENICE CLASSICS",
        tagline: "Glide past narrow brick palaces on a traditional gondola.",
        activities: [
          { icon: "🛶", title: "Grand Canal Gondola Ride", description: "Glide down quiet water alleys on a traditional hand-steered black gondola." },
          { icon: "🛕", title: "St. Mark's Basilica", description: "Visit the spectacular golden-domed cathedral and historic piazza." },
        ],
        tip: "Gondola rates are regulated; check official boards at the docks before boarding.",
        image: "/images/destinations/europe_2.jpg",
      },
      {
        dayNumber: 9,
        title: "Venice to Rome Rail & Colosseum",
        tag: "ROME HERITAGE",
        tagline: "Board the Frecciarossa high-speed rail to the Eternal City and see the gladiator arena.",
        activities: [
          { icon: "🚊", title: "Frecciarossa Train to Rome", description: "High-speed rail connection to Roma Termini station (3.5 hours)." },
          { icon: "🏛️", title: "Colosseum & Roman Forum", description: "Guided walking tour inside the ancient gladiator amphitheater." },
        ],
        tip: "Rome streets are paved in stone; wear comfortable walking shoes.",
        image: "/images/destinations/europe_3.jpg",
      },
      {
        dayNumber: 10,
        title: "Farewell Rome & Flight Home",
        tag: "DEPARTURE",
        tagline: "Drop at Fiumicino airport, return flight back.",
        activities: [
          { icon: "✈️", title: "Rome Airport Transfer", description: "Private drop-off at Rome FCO Airport for your return flight home." },
        ],
        tip: "Arrive at FCO airport 3.5 hours early to clear security checkpoints.",
        image: "/images/destinations/europe_1.jpg",
      },
    ],
    hotels: [
      { name: "Hotel Lutetia Paris", rating: "★★★★★", type: "Luxury Palace Hotel", location: "Saint-Germain-des-Prés", image: "/images/destinations/europe_2.jpg" },
    ],
  },
  vietnam: {
    slug: "vietnam",
    destination: "Vietnam",
    title: "Vietnam Cultural Explorer (Hanoi, Halong Bay & Hoi An)",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/vietnam_1.jpg",
    tagline: "Timeless Charm & Green Rivers",
    basePrice: 26000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Hanoi & Old Quarter Walk",
        tag: "HANOI",
        tagline: "Land in Vietnam's capital, walk the ancient street grids, and drink egg coffee.",
        activities: [
          { icon: "✈️", title: "Hanoi Airport Pickup", description: "Meet our driver at Noi Bai Airport (HAN) and transfer to your French Quarter hotel." },
          { icon: "🛶", title: "Hoan Kiem Lake & Ngoc Son Temple", description: "Stroll around the peaceful lake and cross the red wooden bridge to the island temple." },
        ],
        tip: "Egg Coffee at Cafe Giang is a must-try culinary creation in Hanoi.",
        image: "/images/destinations/vietnam_1.jpg",
      },
      {
        dayNumber: 2,
        title: "Hanoi to Halong Bay Overnight Cruise",
        tag: "HALONG BAY",
        tagline: "Board a traditional luxury junk boat and sail past emerald waters and karst pillars.",
        activities: [
          { icon: "🚗", title: "Expressway Transfer", description: "Take a comfortable 2.5-hour shuttle drive from Hanoi to the Halong Bay harbor docks." },
          { icon: "🛳️", title: "Halong Cruise Boarding", description: "Settle into your oceanview cabin. Sail through scenic towering limestone islets." },
          { icon: "🛶", title: "Luon Cave Kayaking", description: "Paddle inside a quiet, enclosed lagoon accessible only via low rocky caves." },
        ],
        tip: "Join the early morning Tai Chi session on the sundeck at dawn for spectacular views.",
        image: "/images/destinations/vietnam_2.jpg",
      },
      {
        dayNumber: 3,
        title: "Halong Bay Cave Explorer & Fly to Hoi An",
        tag: "TRANSIT TO CENTRAL VIETNAM",
        tagline: "Explore Sung Sot (Surprise) Cave, then fly to the ancient lanterns city.",
        activities: [
          { icon: "⛰️", title: "Sung Sot Cave Walk", description: "Explore the massive caves packed with illuminated stalactites and stalagmites." },
          { icon: "✈️", title: "Flight to Da Nang (DAD)", description: "Return to Hanoi airport and catch your domestic flight to Central Vietnam." },
          { icon: "🏨", title: "Hoi An Check-In", description: "Private drive to Hoi An Ancient Town and check into a boutique garden villa resort." },
        ],
        tip: "Bargain at Hoi An markets for tailor-made silk clothing created overnight.",
        image: "/images/destinations/vietnam_3.jpg",
      },
      {
        dayNumber: 4,
        title: "Hoi An Ancient Town & Lantern Cruise",
        tag: "HOI AN CULTURE",
        tagline: "Walk past yellow merchant houses, assembly halls, and release a water lantern.",
        activities: [
          { icon: "🌉", title: "Japanese Covered Bridge", description: "Walk across the iconic 16th-century wooden bridge guarded by monkey and dog statues." },
          { icon: "🛶", title: "Thu Bon River Boat & Lantern Release", description: "Board a small wooden boat at night to float paper lanterns on the dark river water." },
        ],
        tip: "Release your lantern near the central bridge for the best background photo glow.",
        image: "/images/destinations/vietnam_1.jpg",
      },
      {
        dayNumber: 5,
        title: "Ba Na Hills & Golden Bridge Day Excursion",
        tag: "BA NA HILLS",
        tagline: "Ride the world's longest cable car and stand in the stone hands of the Golden Bridge.",
        activities: [
          { icon: "🚡", title: "Ba Na Cable Car Climb", description: "Ascend past clouds to the high mountain French Village theme park." },
          { icon: "🤲", title: "Golden Bridge Walk", description: "Walk along the curved golden bridge supported by two giant weathered stone hands." },
        ],
        tip: "Ba Na Hills gets rainy and cold; pack a windcheater or light sweater.",
        image: "/images/destinations/vietnam_2.jpg",
      },
      {
        dayNumber: 6,
        title: "Departure from Da Nang",
        tag: "DEPARTURE",
        tagline: "Transfer to Da Nang Airport for your flight back home.",
        activities: [
          { icon: "✈️", title: "Da Nang Airport Drop", description: "Transfer from Hoi An to Da Nang International Airport for your departure flight home." },
        ],
        tip: "Check in 3 hours early for international connections via Ho Chi Minh or Hanoi.",
        image: "/images/destinations/vietnam_3.jpg",
      },
    ],
    hotels: [
      { name: "La Siesta Classic Hang Thung", rating: "★★★★★", type: "Boutique Luxury Hotel", location: "Hanoi Old Quarter", image: "/images/destinations/vietnam_1.jpg" },
    ],
  },
  malaysia: {
    slug: "malaysia",
    destination: "Malaysia",
    title: "Malaysia Bestseller (Kuala Lumpur & Langkawi Escape)",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/malaysia_2.jpg",
    tagline: "Truly Asia, Divergent & Beautiful",
    basePrice: 28000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Kuala Lumpur",
        tag: "KL ARRIVAL",
        tagline: "Land in Malaysia's capital and settle in Bukit Bintang.",
        activities: [
          { icon: "✈️", title: "KLIA Airport Pickup", description: "Meet our driver at KLIA and transfer to your luxury central hotel (1 hour)." },
          { icon: "🏢", title: "Petronas Twin Towers Walk", description: "Stroll out to KLCC park at night to photograph the illuminated steel towers." },
        ],
        tip: "Buy local SIM cards at the airport arrival terminal for cheap data.",
        image: "/images/destinations/malaysia_1.jpg",
      },
      {
        dayNumber: 2,
        title: "Batu Caves & Genting Highlands",
        tag: "GENTING ESCAPE",
        tagline: "Climb the colorful temple steps and ride the cable car above the clouds.",
        activities: [
          { icon: "⛰️", title: "Batu Caves", description: "Climb the 272 rainbow steps past wild monkeys to the Murugan shrine cave." },
          { icon: "🚡", title: "Awana Skyway Gondola", description: "Ride the cable car to Genting Highlands, stopping at Chin Swee Caves Temple." },
        ],
        tip: "Wear decent clothing covering shoulders and knees for the temple visits.",
        image: "/images/destinations/malaysia_2.jpg",
      },
      {
        dayNumber: 3,
        title: "Fly to Langkawi Island",
        tag: "LANGKAWI ARRIVAL",
        tagline: "Take a short flight to the tropical archipelago of Langkawi.",
        activities: [
          { icon: "✈️", title: "Fly to Langkawi", description: "Board your short domestic flight from KL to Langkawi." },
          { icon: "🏖️", title: "Cenang Beach Sunset", description: "Settle into your beachfront hotel and walk along the lively Cenang sands." },
        ],
        tip: "Langkawi is a duty-free island; chocolates and goods are very cheap.",
        image: "/images/destinations/malaysia_3.jpg",
      },
      {
        dayNumber: 4,
        title: "Langkawi Island Hopping & Cable Car",
        tag: "LANGKAWI HIGHLIGHTS",
        tagline: "Ride the steepest cable car and sail past tropical islands.",
        activities: [
          { icon: "🚡", title: "Langkawi SkyCab & SkyBridge", description: "Ride the cable car up Mount Machinchang to walk the curved suspension bridge." },
          { icon: "🚤", title: "Island Hopping Boat Tour", description: "Visit Dayang Bunting (Lake of Pregnant Maiden) and watch eagle feeding tours." },
        ],
        tip: "Purchase SkyCab tickets online to avoid long queues during afternoons.",
        image: "/images/destinations/malaysia_1.jpg",
      },
      {
        dayNumber: 5,
        title: "Mangrove Safari & Kilim Karst Park",
        tag: "NATURE DAY",
        tagline: "Explore the ancient limestone caves and floating fish farms.",
        activities: [
          { icon: "🛥️", title: "Kilim Geoforest Boat Tour", description: "Ride through mangrove forests, visiting crocodile cave, bat cave, and floating lunch spots." },
        ],
        tip: "Do not feed or touch the monkeys during the river boat tour.",
        image: "/images/destinations/malaysia_2.jpg",
      },
      {
        dayNumber: 6,
        title: "Departure from Langkawi",
        tag: "FAREWELL",
        tagline: "Catch your flight back to Mathura/Delhi.",
        activities: [
          { icon: "✈️", title: "Langkawi Airport Drop", description: "Transfer to Langkawi Airport for your return flight home." },
        ],
        tip: "Ensure all duty-free shopping receipts are kept ready for checking at custom points.",
        image: "/images/destinations/malaysia_3.jpg",
      },
    ],
    hotels: [
      { name: "JW Marriott Kuala Lumpur", rating: "★★★★★", type: "Premium City Retreat", location: "Bukit Bintang, KL", image: "/images/destinations/malaysia_1.jpg" },
    ],
  },
  baku: {
    slug: "baku",
    destination: "Baku (Azerbaijan)",
    title: "Baku Special (Old City, Fire Temple & Caspian Cruise)",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/baku_1.jpg",
    tagline: "Wind and Fire on the Caspian Coast",
    basePrice: 34000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Baku & Boulevard Walk",
        tag: "BAKU ARRIVAL",
        tagline: "Welcome to Azerbaijan! Drive past Caspian shorelines and settle in.",
        activities: [
          { icon: "✈️", title: "Baku Airport Pickup", description: "Meet our driver at Heydar Aliyev Airport (GYD) and transfer to your central city hotel." },
          { icon: "🚶", title: "Caspian Boulevard Walk", description: "Walk along the scenic seaside promenade, viewing Baku Eye and Mini-Venice." },
        ],
        tip: "Exchange some Manat (AZN) at the airport for minor taxi and dining expenses.",
        image: "/images/destinations/baku_1.jpg",
      },
      {
        dayNumber: 2,
        title: "Old City (Icherisheher) & Flame Towers",
        tag: "BAKU SIGHTS",
        tagline: "Walk past ancient stone walls and stand beneath the glass Flame Towers.",
        activities: [
          { icon: "🏰", title: "Icherisheher Guided Walk", description: "Visit Maiden Tower, Shirvanshahs Palace, and ancient stone caravanserais." },
          { icon: "🔥", title: "Highland Park & Flame Towers", description: "Take the funicular up to Highland Park for stunning views of the Flame Towers illuminated at night." },
        ],
        tip: "Baku is windy; carry a jacket even in spring or summer afternoons.",
        image: "/images/destinations/baku_2.jpg",
      },
      {
        dayNumber: 3,
        title: "Gobustan Mud Volcanoes & Yanar Dag",
        tag: "FIRE & NATURE",
        tagline: "See active mud craters, prehistoric rock art, and the burning hills.",
        activities: [
          { icon: "🌋", title: "Gobustan Mud Volcanoes", description: "Drive in retro Lada cars to see active mud bubbling pools." },
          { icon: "🎨", title: "Gobustan Petroglyphs", description: "See rock paintings dating back 40,000 years in the desert hills." },
          { icon: "🔥", title: "Yanar Dag (Burning Mountain)", description: "Visit the hillside with active natural gas flames that never extinguish." },
        ],
        tip: "Wear closed shoes as the mud volcano areas are dusty and uneven.",
        image: "/images/destinations/baku_3.jpg",
      },
      {
        dayNumber: 4,
        title: "Ateshgah Fire Temple & Heydar Aliyev Center",
        tag: "MODERN & ANCIENT",
        tagline: "Visit the historic fire worship temple and the calligraphy center.",
        activities: [
          { icon: "🛕", title: "Ateshgah Fire Temple", description: "Explore the historic temple complex used by ancient Hindu and Zoroastrian pilgrims." },
          { icon: "🏢", title: "Heydar Aliyev Center", description: "Photograph the stunning curved white architectural center designed by Zaha Hadid." },
        ],
        tip: "The photo spot in front of the center's green letters is the best angle.",
        image: "/images/destinations/baku_1.jpg",
      },
      {
        dayNumber: 5,
        title: "Baku Departure",
        tag: "DEPARTURE",
        tagline: "Final souvenir shopping and flight home.",
        activities: [
          { icon: "🛍️", title: "Nizami Street Shopping", description: "Walk down the pedestrian avenue for final shopping and local tea cafes." },
          { icon: "✈️", title: "Baku Airport Transfer", description: "Private drop-off at GYD Airport for your flight back home." },
        ],
        tip: "Confirm that you have packed local tea and Azeri baklava sweets.",
        image: "/images/destinations/baku_2.jpg",
      },
    ],
    hotels: [
      { name: "Hilton Baku", rating: "★★★★★", type: "Luxury City Hotel", location: "Caspian Boulevard", image: "/images/destinations/baku_3.jpg" },
    ],
  },
  turkey: {
    slug: "turkey",
    destination: "Turkey",
    title: "Turkey Bestseller (Istanbul, Cappadocia & Pamukkale)",
    duration: "7 Nights / 8 Days",
    heroImage: "/images/destinations/turkey_1.jpg",
    tagline: "East Meets West Under Hot Air Balloons",
    basePrice: 68000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Istanbul & Bosphorus Dinner Cruise",
        tag: "ISTANBUL ARRIVAL",
        tagline: "Land in the historic city, cruise between Asia and Europe, and dine on deck.",
        activities: [
          { icon: "✈️", title: "Istanbul Airport Transfer", description: "Meet our representative and transfer to your central hotel." },
          { icon: "🚢", title: "Bosphorus Dinner Cruise", description: "Sail past illuminated palaces and bridge links, enjoying traditional Turkish shows and a buffet." },
        ],
        tip: "Dress warmly for the cruise top deck as evening sea winds can be cold.",
        image: "/images/destinations/turkey_1.jpg",
      },
      {
        dayNumber: 2,
        title: "Hagia Sophia & Grand Bazaar",
        tag: "ISTANBUL CLASSICS",
        tagline: "Marvel at ancient golden mosaics and shop in historic vaulted alleys.",
        activities: [
          { icon: "🕌", title: "Hagia Sophia & Blue Mosque", description: "Visit the spectacular 6th-century cathedral-turned-mosque and photograph the Blue Mosque courtyard." },
          { icon: "🛍️", title: "Grand Bazaar Tour", description: "Explore the massive covered market containing over 4,000 shops of spices, lanterns, and carpets." },
        ],
        tip: "Bargain at the Grand Bazaar up to 40% of the initial quoted price.",
        image: "/images/destinations/turkey_2.jpg",
      },
      {
        dayNumber: 3,
        title: "Flight to Cappadocia & Cave Villa Settle",
        tag: "CAPPADOCIA ARRIVAL",
        tagline: "Fly to the volcanic valley and check into a unique stone cave room.",
        activities: [
          { icon: "✈️", title: "Fly to Nevsehir (NAV)", description: "Board your short domestic flight from Istanbul to Cappadocia." },
          { icon: "🏨", title: "Cave Hotel Check-In", description: "Settle into a premium boutique hotel carved directly out of historic volcanic rocks." },
        ],
        tip: "Keep camera gears ready as Cappadocia views are spectacular at sunset.",
        image: "/images/destinations/turkey_3.jpg",
      },
      {
        dayNumber: 4,
        title: "Hot Air Balloon Flight & Goreme Open Air",
        tag: "CAPPADOCIA BALLOONS",
        tagline: "Fly high at sunrise and walk past ancient rock churches.",
        activities: [
          { icon: "🎈", title: "Sunrise Hot Air Balloon Flight", description: "Fly 3,000 ft high over volcanic chimneys as hundreds of balloons rise simultaneously." },
          { icon: "🛕", title: "Goreme Open Air Museum", description: "Explore historic rock-cut churches featuring 10th-century Byzantine fresco paintings." },
        ],
        tip: "Balloon flights depend on wind conditions; book for your first morning to allow rescheduling if cancelled.",
        image: "/images/destinations/turkey_1.jpg",
      },
      {
        dayNumber: 5,
        title: "Kaymakli Underground City",
        tag: "CAPPADOCIA EXPLORER",
        tagline: "Descend into multi-level ancient stone tunnels used by early Christians.",
        activities: [
          { icon: "⛰️", title: "Kaymakli Underground City", description: "Explore rock tunnels, storage cellars, and ventilation shafts descending 8 levels deep." },
        ],
        tip: "Watch your head inside the low-ceiling tunnels; carry a light jacket.",
        image: "/images/destinations/turkey_2.jpg",
      },
      {
        dayNumber: 6,
        title: "Travel to Pamukkale Cotton Castles",
        tag: "PAMUKKALE TRANSIT",
        tagline: "Drive to the thermal springs and white travertine terraces.",
        activities: [
          { icon: "🚗", title: "Drive to Pamukkale", description: "Drive past Konya, stopping at the historic Mevlana Whirling Dervish museum." },
          { icon: "🏨", title: "Thermal Resort Check-In", description: "Check into a luxury resort featuring hot mineral spring bath pools." },
        ],
        tip: "Spend the evening bathing in the mineral rich pools of your resort.",
        image: "/images/destinations/turkey_3.jpg",
      },
      {
        dayNumber: 7,
        title: "Hierapolis Travertines & Cleopatra Pool",
        tag: "TRAVERTINES & RUINS",
        tagline: "Walk barefoot on hot calcium terraces and swim in Roman ruins.",
        activities: [
          { icon: "🌊", title: "Travertine Terraces Walk", description: "Walk barefoot on the spectacular white calcium shelves filled with warm mineral waters." },
          { icon: "🏛️", title: "Hierapolis Ruins & Cleopatra Pool", description: "Visit the massive Roman amphitheater and swim among submerged ancient pillars." },
        ],
        tip: "You must remove shoes when walking on the white travertine terraces to prevent damage.",
        image: "/images/destinations/turkey_1.jpg",
      },
      {
        dayNumber: 8,
        title: "Flight back to India",
        tag: "DEPARTURE",
        tagline: "Fly back from Denizli/Istanbul to Mathura/Delhi.",
        activities: [
          { icon: "✈️", title: "Airport Drop-Off", description: "Transfer to Denizli Airport (DNZ) for your domestic flight to Istanbul and return home." },
        ],
        tip: "Pack Turkish tea glasses and local spices carefully inside bubble wrap.",
        image: "/images/destinations/turkey_2.jpg",
      },
    ],
    hotels: [
      { name: "Sultanhan Hotel", rating: "★★★★", type: "Heritage Hotel", location: "Sultanahmet, Istanbul", image: "/images/destinations/turkey_3.jpg" },
    ],
  },
  goa: {
    slug: "goa",
    destination: "Goa",
    title: "Goa Beach Escapade (North & South Goa Package)",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/goa_1.jpg",
    tagline: "Sun, Sand, and Portuguese Solitude",
    basePrice: 9500,
    days: [
      {
        dayNumber: 1,
        title: "Goa Arrival & Beach Sunset",
        tag: "GOA ARRIVAL",
        tagline: "Land in Goa, check in to your beach resort, and walk the sands.",
        activities: [
          { icon: "✈️", title: "Mopa/Dabolim Airport Pickup", description: "Private pick-up at Goa Airport and transfer to your North Goa hotel." },
          { icon: "🏖️", title: "Calangute Beach Sunset Walk", description: "Spend your evening walking along the sands, enjoying beach shacks." },
        ],
        tip: "Renting a scooter at Calangute is the cheapest way to explore locally.",
        image: "/images/destinations/goa_1.jpg",
      },
      {
        dayNumber: 2,
        title: "North Goa Beaches & Water Sports",
        tag: "NORTH GOA",
        tagline: "Visit Aguada Fort and try water parasailing at Baga.",
        activities: [
          { icon: "🏰", title: "Aguada Fort & Lighthouse", description: "Explore the 17th-century Portuguese fort overlooking the Arabian Sea." },
          { icon: "🚤", title: "Baga Beach Water Sports", description: "Enjoy jet skiing, banana boat riding, and parasailing with certified guides." },
        ],
        tip: "Complete water sports early in the morning to avoid long queues.",
        image: "/images/destinations/goa_2.jpg",
      },
      {
        dayNumber: 3,
        title: "South Goa Churches & Spice Plantation",
        tag: "SOUTH GOA",
        tagline: "Visit colonial churches, temple ruins, and eat a Goan buffet.",
        activities: [
          { icon: "⛪", title: "Basilica of Bom Jesus", description: "See the relics of St. Francis Xavier inside Old Goa's UNESCO heritage cathedral." },
          { icon: "🍛", title: "Spice Plantation Tour & Lunch", description: "Walk through spice farms in Ponda, enjoying a traditional buffet on banana leaves." },
        ],
        tip: "Buy local Goan feni and certified spices at the plantation farm shop.",
        image: "/images/destinations/goa_3.jpg",
      },
      {
        dayNumber: 4,
        title: "Mandovi River Cruise & Miramar Beach",
        tag: "LEISURE DAY",
        tagline: "Watch sunset over Miramar and cruise the Mandovi river with folk dances.",
        activities: [
          { icon: "🏖️", title: "Miramar Beach Walk", description: "Walk along the estuary beach where Mandovi river meets the sea." },
          { icon: "🚢", title: "Sunset Mandovi River Cruise", description: "Board a double-decker cruise boat for 1 hour of music and traditional Dekhni dances." },
        ],
        tip: "Reach the cruise terminal 30 minutes early to grab the best deck seats.",
        image: "/images/destinations/goa_1.jpg",
      },
      {
        dayNumber: 5,
        title: "Goa Departure",
        tag: "DEPARTURE",
        tagline: "Final shopping and airport drop.",
        activities: [
          { icon: "✈️", title: "Goa Airport Drop-off", description: "Private drop-off at Goa Airport for your return flight home." },
        ],
        tip: "Make sure to pack Goan cashews in your carry-on bag.",
        image: "/images/destinations/goa_2.jpg",
      },
    ],
    hotels: [
      { name: "Estrela Do Mar Beach Resort", rating: "★★★★", type: "Beach Resort", location: "Calangute, Goa", image: "/images/destinations/goa_3.jpg" },
    ],
  },
  ladakh: {
    slug: "ladakh",
    destination: "Leh Ladakh",
    title: "Ladakh Heights (Leh, Pangong Lake & Nubra Valley)",
    duration: "6 Nights / 7 Days",
    heroImage: "/images/destinations/ladakh_1.jpg",
    tagline: "Land of High Passes & Blue Lakes",
    basePrice: 24000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Leh & Acclimatization",
        tag: "LEH REST",
        tagline: "Land at 11,562 ft, rest completely, and let your body adapt to the altitude.",
        activities: [
          { icon: "✈️", title: "Leh Airport Pickup", description: "Private transfer from Kushok Bakula Airport (IXL) to your hotel." },
          { icon: "🏨", title: "Full Day Bed Rest", description: "Spend your first 24 hours resting in your room. Avoid any physical exertion." },
        ],
        tip: "Drink at least 4 liters of water today. Saffron kehwa tea helps with headaches.",
        image: "/images/destinations/ladakh_1.jpg",
      },
      {
        dayNumber: 2,
        title: "Leh Palace & Shanti Stupa",
        tag: "LEH CITY",
        tagline: "Visit the historic royal ruins and watch sunset over the mountain dome.",
        activities: [
          { icon: "🏰", title: "Leh Palace Tour", description: "Walk through the 9-story royal palace ruins overlooking the old town." },
          { icon: "🛕", title: "Shanti Stupa Sunset", description: "Climb the white-domed peace pagoda at sunset for panoramic valley views." },
        ],
        tip: "Avoid climbing the stupa steps too fast; take brief breathing pauses.",
        image: "/images/destinations/ladakh_2.jpg",
      },
      {
        dayNumber: 3,
        title: "Drive to Nubra Valley via Khardung La",
        tag: "NUBRA VALLEY",
        tagline: "Cross the high mountain pass (17,582 ft) and ride camels in the dunes.",
        activities: [
          { icon: "🚗", title: "Khardung La Pass Crossing", description: "Drive up the highway to stop for photos at the pass summit." },
          { icon: "🐪", title: "Hunder Sand Dunes Camel Ride", description: "Ride double-humped Bactrian camels past cold desert sand dunes." },
        ],
        tip: "Limit your stay at Khardung La summit to 15 minutes to prevent altitude sickness.",
        image: "/images/destinations/ladakh_3.jpg",
      },
      {
        dayNumber: 4,
        title: "Nubra Valley to Pangong Lake via Shyok",
        tag: "PANGONG LAKE",
        tagline: "Drive along the Shyok River to see the spectacular color-changing salt lake.",
        activities: [
          { icon: "🚗", title: "Shyok River Road Drive", description: "A 6-hour road trip past narrow valleys and rocky cliffs." },
          { icon: "🌊", title: "Pangong Lake Check-in", description: "Settle into deluxe lake-facing tents at Spangmik, watching the water change colors." },
        ],
        tip: "Pangong camps run on limited solar power; charge all camera batteries during the day.",
        image: "/images/destinations/ladakh_1.jpg",
      },
      {
        dayNumber: 5,
        title: "Pangong Sunrise & Return to Leh",
        tag: "LEH RETURN",
        tagline: "Photograph the morning lake colors and return via Chang La pass.",
        activities: [
          { icon: "🌅", title: "Pangong Lake Sunrise", description: "Walk along the lake shore at dawn to capture cold, crisp reflections." },
          { icon: "🚗", title: "Return via Chang La (17,586 ft)", description: "Drive back to Leh town, settling into your hotel." },
        ],
        tip: "Keep woolen jackets and gloves handy today as Chang La pass has cold winds.",
        image: "/images/destinations/ladakh_2.jpg",
      },
      {
        dayNumber: 6,
        title: "Magnetic Hill & Hall of Fame Museum",
        tag: "LEH LOCAL SIGHTS",
        tagline: "See vehicles roll uphill without power and pay respects to war heroes.",
        activities: [
          { icon: "🧲", title: "Magnetic Hill", description: "Watch your car roll uphill against gravity in the natural magnetic zone." },
          { icon: "🎖️", title: "Hall of Fame Museum", description: "Visit the war memorial museum run by the Indian Army." },
        ],
        tip: "Spend the evening buying local apricots and silver jewelry at Leh Main Bazaar.",
        image: "/images/destinations/ladakh_3.jpg",
      },
      {
        dayNumber: 7,
        title: "Leh Departure",
        tag: "DEPARTURE",
        tagline: "Airport drop and return flight home.",
        activities: [
          { icon: "✈️", title: "Leh Airport Transfer", description: "Transfer to Leh Airport for your return flight home." },
        ],
        tip: "Confirm that you have removed power banks from check-in luggage; Leh airport rules are strict.",
        image: "/images/destinations/ladakh_1.jpg",
      },
    ],
    hotels: [
      { name: "The Grand Dragon Ladakh", rating: "★★★★★", type: "Luxury Hotel", location: "Leh Town", image: "/images/destinations/ladakh_2.jpg" },
    ],
  },
  himachal: {
    slug: "himachal",
    destination: "Himachal Pradesh",
    title: "Himachal Wonders (Shimla & Manali Hill Station)",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/himachal_1.jpg",
    tagline: "Into the Heart of the Snow-Capped Valley",
    basePrice: 14500,
    days: [
      {
        dayNumber: 1,
        title: "Drive from Delhi to Shimla",
        tag: "SHIMLA",
        tagline: "Scenic highway drive into the lower Himalayan pine forests.",
        activities: [
          { icon: "🚗", title: "Delhi Airport Pickup & Drive", description: "Meet our driver at Delhi Airport and drive up to Shimla (8 hours)." },
          { icon: "🏨", title: "Resort Check-In", description: "Settle into your hotel and enjoy views of the valleys." },
        ],
        tip: "Stop at Pinjore Gardens near Chandigarh for lunch to break the long drive.",
        image: "/images/destinations/himachal_1.jpg",
      },
      {
        dayNumber: 2,
        title: "Kufri Valley & Shimla Mall Road",
        tag: "SHIMLA HIGHLIGHTS",
        tagline: "Enjoy valley views at Kufri and walk the historic Ridge.",
        activities: [
          { icon: "🏔️", title: "Kufri Valley Excursion", description: "Enjoy mountain viewpoints, pony rides, and snow activity zones at Kufri." },
          { icon: "🚶", title: "Shimla Ridge & Mall Road", description: "Walk the pedestrian-only Ridge, visiting Christ Church and Lakkar Bazaar." },
        ],
        tip: "Taxis are not allowed on Mall Road; prepare for a gentle walk.",
        image: "/images/destinations/himachal_2.jpg",
      },
      {
        dayNumber: 3,
        title: "Shimla to Manali Valley Drive",
        tag: "MANALI TRANSIT",
        tagline: "Scenic highway drive past Kullu shawl factories and Beas River.",
        activities: [
          { icon: "🚗", title: "Drive to Manali", description: "Check out of Shimla and drive to Manali (8 hours), passing Sundernagar Lake." },
          { icon: "🛍️", title: "Kullu Shawl Outlets", description: "Stop at handloom weaving factories to buy authentic warm woolens." },
        ],
        tip: "Ask your driver to stop near Pandoh Dam for spectacular canyon photos.",
        image: "/images/destinations/himachal_3.jpg",
      },
      {
        dayNumber: 4,
        title: "Hadimba Temple & Solang Valley",
        tag: "MANALI ADVENTURE",
        tagline: "Visit the historic pine forest temple and try paragliding.",
        activities: [
          { icon: "🌲", title: "Hadimba Devi Temple", description: "Visit the 16th-century wooden pagoda temple built inside Dhungri Van Vihar pine forest." },
          { icon: "🪂", title: "Solang Valley Paragliding", description: "Try paragliding, zorbing, or ATV quad biking with local guides." },
        ],
        tip: "Carry cash for paragliding tickets as network signals can be weak at Solang.",
        image: "/images/destinations/himachal_1.jpg",
      },
      {
        dayNumber: 5,
        title: "Jogini Waterfall Trek & Vashisht Hot Springs",
        tag: "MANALI NATURE",
        tagline: "Trek past pine trails to a cascading waterfall and bathe in hot springs.",
        activities: [
          { icon: "🥾", title: "Jogini Waterfall Hike", description: "Take a gentle 45-minute trek from Vashisht village through orchards to the waterfall." },
          { icon: "🛀", title: "Vashisht Sulfur Springs", description: "Visit the hot sulfur springs temple for a relaxing foot dip." },
        ],
        tip: "Carry a towel and extra clothes if you plan to bathe in the hot springs.",
        image: "/images/destinations/himachal_2.jpg",
      },
      {
        dayNumber: 6,
        title: "Manali to Delhi Return",
        tag: "DEPARTURE",
        tagline: "Drive back to Delhi Airport/Railway Station.",
        activities: [
          { icon: "🚗", title: "Drive back to Delhi", description: "Long return drive to Delhi. Drop-off at Airport." },
        ],
        tip: "Confirm that you have packed all Kullu woolens and local apples safely.",
        image: "/images/destinations/himachal_3.jpg",
      },
    ],
    hotels: [
      { name: "Manu Allaya Resort", rating: "★★★★", type: "Luxury Valley Resort", location: "Manali Town", image: "/images/destinations/himachal_1.jpg" },
    ],
  },
  uttarakhand: {
    slug: "uttarakhand",
    destination: "Uttarakhand",
    title: "Uttarakhand Explorer (Nainital & Mussoorie Special)",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/uttarakhand_1.jpg",
    tagline: "Sacred Hills and Glacial Rivers",
    basePrice: 12000,
    days: [
      {
        dayNumber: 1,
        title: "Delhi to Nainital Lake District",
        tag: "NAINITAL ARRIVAL",
        tagline: "Drive past green foothill highways up to Nainital Lake city.",
        activities: [
          { icon: "🚗", title: "Delhi Pickup & Drive", description: "Private pick-up at Delhi Airport and drive to Nainital (7 hours)." },
          { icon: "⛵", title: "Naini Lake Boating", description: "Enjoy a relaxed boating ride in the pear-shaped central lake." },
        ],
        tip: "The lake boating rates are fixed; buy tickets at the municipal counters.",
        image: "/images/destinations/uttarakhand_1.jpg",
      },
      {
        dayNumber: 2,
        title: "Nainital Lake Tour & Viewpoints",
        tag: "NAINITAL HIGHLIGHTS",
        tagline: "Explore the surrounding lakes of Bhimtal, Sattal, and Naukuchiatal.",
        activities: [
          { icon: "🌊", title: "Lake Tour (Bhimtal & Sattal)", description: "Visit the aquarium island at Bhimtal and try kayaking at Sattal pine lakes." },
          { icon: "🏔️", title: "Naini Peak Viewpoint", description: "Take the cable car up to Snow View point for Himalayan peak horizons." },
        ],
        tip: "Bhimtal is quieter than Nainital; spend your afternoon cafe hopping there.",
        image: "/images/destinations/uttarakhand_2.jpg",
      },
      {
        dayNumber: 3,
        title: "Nainital to Corbett National Park",
        tag: "CORBETT TIGERS",
        tagline: "Travel to India's oldest national park and check into a jungle lodge.",
        activities: [
          { icon: "🚗", title: "Drive to Jim Corbett", description: "A 3-hour descent through thick forest belts to Ramnagar." },
          { icon: "🏨", title: "Jungle Resort Check-In", description: "Check into a luxury resort located near the buffer forest zone." },
        ],
        tip: "Carry identification cards (Aadhar/Passport) as they are checked at forest gates.",
        image: "/images/destinations/uttarakhand_3.jpg",
      },
      {
        dayNumber: 4,
        title: "Jim Corbett Jeep Safari & Rishikesh",
        tag: "JUNGLE SAFARI",
        tagline: "Explore buffer zones in open 4x4 jeeps, then travel to Rishikesh.",
        activities: [
          { icon: "🐯", title: "Morning Jeep Safari", description: "Ride through Corbett buffer zones (Bijrani/Garjiya) searching for wild tigers, deer, and elephants." },
          { icon: "🚗", title: "Drive to Rishikesh", description: "Check out and drive to the spiritual city of Rishikesh (4 hours)." },
        ],
        tip: "Safaris must be booked 45 days in advance for popular zones; our office handles this.",
        image: "/images/destinations/uttarakhand_1.jpg",
      },
      {
        dayNumber: 5,
        title: "Rishikesh River Rafting & Ganga Aarti",
        tag: "HOLY GANGES",
        tagline: "Raft down rushing white rapids and witness the sacred lamp ceremony.",
        activities: [
          { icon: "🚣", title: "Ganges River Rafting", description: "Raft 12km through exciting rapids (Mera Marina/Shivpuri) with river guides." },
          { icon: "🔥", title: "Triveni Ghat Ganga Aarti", description: "Witness the spectacular sunset prayer ceremony with floating camphor lamps on the river." },
        ],
        tip: "Carry dry clothes in a plastic bag as you will get wet during rafting.",
        image: "/images/destinations/uttarakhand_2.jpg",
      },
      {
        dayNumber: 6,
        title: "Return to Delhi",
        tag: "DEPARTURE",
        tagline: "Drive back to Delhi Airport for drop-off.",
        activities: [
          { icon: "🚗", title: "Drive back to Delhi", description: "Drive back from Rishikesh to Delhi (6 hours) for your flight home." },
        ],
        tip: "Purchase local organic honey or copper items from Rishikesh bazaar.",
        image: "/images/destinations/uttarakhand_3.jpg",
      },
    ],
    hotels: [
      { name: "The Solluna Resort", rating: "★★★★★", type: "Jungle Lodge", location: "Merchula Valley, Jim Corbett", image: "/images/destinations/uttarakhand_1.jpg" },
    ],
  },
  andaman: {
    slug: "andaman",
    destination: "Andaman & Nicobar",
    title: "Andaman Paradise (Port Blair & Havelock Island)",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/andaman_1.jpg",
    tagline: "Tropical Reefs and Sparkling Shorelines",
    basePrice: 22500,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Port Blair & Cellular Jail Tour",
        tag: "PORT BLAIR",
        tagline: "Welcome to the islands! Visit the historic freedom struggle memorial.",
        activities: [
          { icon: "✈️", title: "Port Blair Airport Transfer", description: "Meet our representative at Veer Savarkar Airport (IXZ) and transfer to your hotel." },
          { icon: "🏰", title: "Cellular Jail Sound & Light Show", description: "Walk through historic cells and watch the evening sound & light show." },
        ],
        tip: "Purchase entry tickets for the Cellular Jail museum online to avoid long queues.",
        image: "/images/destinations/andaman_1.jpg",
      },
      {
        dayNumber: 2,
        title: "Ferry Cruise to Havelock Island",
        tag: "HAVELOCK ISLAND",
        tagline: "Board a private catamaran ferry to Havelock's white sand shores.",
        activities: [
          { icon: "🛳️", title: "Nautika Catamaran Ferry", description: "Enjoy a scenic 2.5-hour high-speed ferry cruise across the ocean to Havelock." },
          { icon: "🏨", title: "Beach Resort Check-in", description: "Check into a luxury beach cottage resort surrounded by palm trees." },
        ],
        tip: "Ferry seats are pre-booked by our office; carry a light snack for the cruise.",
        image: "/images/destinations/andaman_2.jpg",
      },
      {
        dayNumber: 3,
        title: "Radhanagar Beach Scenic Sunset",
        tag: "RADHANAGAR BEACH",
        tagline: "Spend your day on Asia's best beach, watching sunset colors.",
        activities: [
          { icon: "🏖️", title: "Radhanagar Beach Walk", description: "Walk barefoot along the powdery white sands bordered by massive green forest trees." },
        ],
        tip: "The sunset at Radhanagar happens early (around 5:15 PM); reach by 4 PM.",
        image: "/images/destinations/andaman_3.jpg",
      },
      {
        dayNumber: 4,
        title: "Elephant Beach Snorkeling & Water Sports",
        tag: "WATER SPORTS",
        tagline: "Take a speed boat to Elephant Beach for coral reef snorkeling.",
        activities: [
          { icon: "🚤", title: "Speedboat to Elephant Beach", description: "Short ride to the shallow reef beach popular for water sports." },
          { icon: "🤿", title: "Complimentary Snorkeling Safari", description: "Explore the reef corals and sea life with our certified water guide." },
        ],
        tip: "Carry dry clothes and plastic baggies as changing rooms are available at Elephant Beach.",
        image: "/images/destinations/andaman_1.jpg",
      },
      {
        dayNumber: 5,
        title: "Return to Port Blair & Chidiya Tapu Sunset",
        tag: "PORT BLAIR RETURN",
        tagline: "Ferry back to Port Blair and watch sunset at Bird Island.",
        activities: [
          { icon: "🛳️", title: "Morning Ferry back to Port Blair", description: "Check out of Havelock and board the ferry back." },
          { icon: "🌅", title: "Chidiya Tapu Sunset Point", description: "Drive to the southern tip of the island to watch the sun sink behind rocky islands." },
        ],
        tip: "Chidiya Tapu road winding through thick forests is very scenic; keep your camera ready.",
        image: "/images/destinations/andaman_2.jpg",
      },
      {
        dayNumber: 6,
        title: "Andaman Departure",
        tag: "DEPARTURE",
        tagline: "Final drop at Port Blair airport.",
        activities: [
          { icon: "✈️", title: "Veer Savarkar Airport Drop", description: "Private drop-off for your flight home." },
        ],
        tip: "Ensure you carry seashells only with valid purchase receipts; custom checks at airport are strict.",
        image: "/images/destinations/andaman_3.jpg",
      },
    ],
    hotels: [
      { name: "Symphony Palms Beach Resort", rating: "★★★★", type: "Beach Cottage", location: "Havelock Island", image: "/images/destinations/andaman_1.jpg" },
    ],
  },
  mauritius: {
    slug: "mauritius",
    destination: "Mauritius",
    title: "Mauritius Island Escapade (North & South Island Tour)",
    duration: "6 Nights / 7 Days",
    heroImage: "/images/destinations/mauritius_1.jpg",
    tagline: "A Contrast of Sapphire Reefs and Valleys",
    basePrice: 58000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Mauritius & Resort Rest",
        tag: "MAURITIUS ARRIVAL",
        tagline: "Land in the tropical paradise, check in to your beach resort, and relax.",
        activities: [
          { icon: "✈️", title: "MRU Airport Meet & Transfer", description: "Private transfer from Sir Seewoosagur Airport to your luxury resort." },
          { icon: "🍹", title: "Beach Leisure", description: "Relax at the pool or walk along the private beach sands." },
        ],
        tip: "Resort dress code is usually smart-casual for dinners; pack some collared shirts.",
        image: "/images/destinations/mauritius_1.jpg",
      },
      {
        dayNumber: 2,
        title: "North Island City Tour (Port Louis)",
        tag: "NORTH ISLAND",
        tagline: "Explore historical colonial architecture and shop at Caudan Waterfront.",
        activities: [
          { icon: "🏢", title: "Port Louis & Citadel Fort", description: "Visit the historic Fort Adelaide overlooking the city harbour." },
          { icon: "🛍️", title: "Caudan Waterfront Shopping", description: "Shop for local crafts, vanilla tea, and explore the umbrella-covered walks." },
        ],
        tip: "Buy local sugarcane molasses or sugar packs at Caudan crafts market.",
        image: "/images/destinations/mauritius_2.jpg",
      },
      {
        dayNumber: 3,
        title: "South Island Nature Tour & Chamarel",
        tag: "SOUTH ISLAND",
        tagline: "See the seven colored volcanic earth and magnificent waterfall canyons.",
        activities: [
          { icon: "🌋", title: "Chamarel Seven Colored Earth", description: "Visit the unique sand dunes comprising seven distinct colors." },
          { icon: "🌊", title: "Chamarel Waterfalls & Grand Bassin", description: "Gaze at the 100m waterfall canyon and visit the holy Hindu lake Grand Bassin." },
        ],
        tip: "Purchase tickets for Chamarel adventure trails online to save time.",
        image: "/images/destinations/mauritius_3.jpg",
      },
      {
        dayNumber: 4,
        title: "Ile Aux Cerfs Lagoon Cruise",
        tag: "ILE AUX CERFS",
        tagline: "Sail in high-speed catamarans to a spectacular tropical reef island.",
        activities: [
          { icon: "🛳️", title: "Catamaran Lagoon Sailing", description: "Enjoy a speed boat ferry ride to the island lagoon of Ile Aux Cerfs." },
          { icon: "🤿", title: "Lagoon Swimming & Snorkeling", description: "Swim in shallow turquoise waters and enjoy beach water activities." },
        ],
        tip: "Wear water sandals as the lagoon beds near the corals are rocky.",
        image: "/images/destinations/mauritius_1.jpg",
      },
      {
        dayNumber: 5,
        title: "Catamaran Yacht Cruise & Dolphin Spotting",
        tag: "OCEAN SAFARI",
        tagline: "Sail past West Coast reefs and watch wild spinner dolphins.",
        activities: [
          { icon: "🐬", title: "West Coast Yacht Cruise", description: "Board a luxury catamaran to spot spinner dolphins in their natural lagoon." },
        ],
        tip: "Keep sunscreen and hats ready as the catamaran deck gets hot at noon.",
        image: "/images/destinations/mauritius_2.jpg",
      },
      {
        dayNumber: 6,
        title: "Casela Bird Park Adventure",
        tag: "ADVENTURE TOUR",
        tagline: "Enjoy safari bus rides and walk past exotic giant tortoises.",
        activities: [
          { icon: "🦁", title: "Casela Safari Bus Drive", description: "See African rhinos, zebras, and antelopes roaming the fields." },
        ],
        tip: "You can book custom walk-with-lions tickets at Casela in advance.",
        image: "/images/destinations/mauritius_3.jpg",
      },
      {
        dayNumber: 7,
        title: "Mauritius Departure",
        tag: "FAREWELL",
        tagline: "Drop-off at airport.",
        activities: [
          { icon: "✈️", title: "MRU Airport Transfer", description: "Private drive to Sir Seewoosagur Airport for your return flight home." },
        ],
        tip: "Pack local rum and vanilla tea carefully inside checked-in bags.",
        image: "/images/destinations/mauritius_1.jpg",
      },
    ],
    hotels: [
      { name: "Outrigger Mauritius Beach Resort", rating: "★★★★★", type: "Beach Resort", location: "Bel Ombre, Mauritius", image: "/images/destinations/mauritius_2.jpg" },
    ],
  },
  seychelles: {
    slug: "seychelles",
    destination: "Seychelles",
    title: "Seychelles Tropical Dream (Mahe Island & Praslin Daytrip)",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/seychelles_1.jpg",
    tagline: "Granite Boulders on Powder-White Sands",
    basePrice: 85000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Mahe & Beach Resort Settle",
        tag: "MAHE ARRIVAL",
        tagline: "Land in Mahe capital island and settle in Beau Vallon beach.",
        activities: [
          { icon: "✈️", title: "Mahe Airport Pickup", description: "Private drive from Seychelles Airport (SEZ) to your beach hotel." },
          { icon: "🏖️", title: "Beau Vallon Beach Leisure", description: "Stroll along the lively white sands and enjoy sunset over the ocean." },
        ],
        tip: "Carry some Euros or Seychelles Rupees (SCR) for local dining.",
        image: "/images/destinations/seychelles_1.jpg",
      },
      {
        dayNumber: 2,
        title: "Victoria Clock Tower & Botanical Gardens",
        tag: "VICTORIA TOUR",
        tagline: "Visit the world's smallest capital city and giant tortoises.",
        activities: [
          { icon: "🗼", title: "Victoria Clock Tower", description: "Visit the landmark clock tower modeled after London's Vauxhall Bridge clock." },
          { icon: "🐢", title: "Botanical Gardens", description: "See giant Aldabra tortoises and the rare Coco de Mer palms." },
        ],
        tip: "Buying tortoise feed at the botanical gardens is a fun activity for families.",
        image: "/images/destinations/seychelles_2.jpg",
      },
      {
        dayNumber: 3,
        title: "Praslin Island Ferry (Vallee de Mai)",
        tag: "PRASLIN EXCURSION",
        tagline: "Board a public ferry to explore Praslin's protected jungle park.",
        activities: [
          { icon: "🛳️", title: "Cat Cocos Ferry Cruise", description: "Board the high-speed ferry from Mahe to Praslin Island (1 hour)." },
          { icon: "🌴", title: "Vallee de Mai UNESCO Reserve", description: "Walk through the prehistoric palm forest home to giant double coconuts." },
        ],
        tip: "A rain poncho is recommended as Vallee de Mai forest experiences frequent showers.",
        image: "/images/destinations/seychelles_3.jpg",
      },
      {
        dayNumber: 4,
        title: "La Digue Beach Excursion (Anse Source d'Argent)",
        tag: "LA DIGUE BEACH",
        tagline: "Cycle past granite boulders and relax on the world's most photographed beach.",
        activities: [
          { icon: "🚢", title: "Ferry to La Digue", description: "Short ferry connection from Praslin to La Digue island." },
          { icon: "🚲", title: "La Digue Bicycle Tour", description: "Rent a bicycle to explore L'Union Estate and view giant boulders." },
          { icon: "🏖️", title: "Anse Source d'Argent Beach", description: "Relax on the iconic beach framed by towering pink granite rock formations." },
        ],
        tip: "Bicycles are the main transport on La Digue; check brakes before riding off the docks.",
        image: "/images/destinations/seychelles_1.jpg",
      },
      {
        dayNumber: 5,
        title: "Sainte Anne Marine Park Charter",
        tag: "MARINE CHARTER",
        tagline: "Sail in glass-bottom boats and snorkel inside reef reserves.",
        activities: [
          { icon: "🛥️", title: "Glass-Bottom Boat Cruise", description: "Cruise inside the marine park, feeding fish and snorkeling over coral reefs." },
        ],
        tip: "Snorkeling gears are provided on board; apply sunscreen before diving.",
        image: "/images/destinations/seychelles_2.jpg",
      },
      {
        dayNumber: 6,
        title: "Seychelles Departure",
        tag: "FAREWELL",
        tagline: "Airport drop and flight back.",
        activities: [
          { icon: "✈️", title: "Mahe Airport Drop-Off", description: "Private transfer to SEZ Airport for your departure flight home." },
        ],
        tip: "Arrive at Mahe Airport 3 hours early to process checks.",
        image: "/images/destinations/seychelles_3.jpg",
      },
    ],
    hotels: [
      { name: "Constance Ephelia Mahe", rating: "★★★★★", type: "Luxury Beach Resort", location: "Port Launay, Mahe", image: "/images/destinations/seychelles_1.jpg" },
    ],
  },
  switzerland: {
    slug: "switzerland",
    destination: "Switzerland",
    title: "Swiss Alpine Dream (Zurich, Lucerne & Mt. Titlis)",
    duration: "6 Nights / 7 Days",
    heroImage: "/images/destinations/switzerland_1.jpg",
    tagline: "Alpine Perfection, Clockwork & Chocolate",
    basePrice: 115000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Zurich & Bahnhofstrasse Walk",
        tag: "ZURICH ARRIVAL",
        tagline: "Welcome to Switzerland! Settle into Zurich and shop along Bahnhofstrasse.",
        activities: [
          { icon: "✈️", title: "Zurich Airport Transfer", description: "Private pickup at ZRH Airport and transfer to your central hotel." },
          { icon: "🛍️", title: "Bahnhofstrasse Shopping Walk", description: "Walk past elite watch boutiques, chocolate makers, and scenic river canals." },
        ],
        tip: "Drink fresh, clean mountain water from the city's public stone fountains.",
        image: "/images/destinations/switzerland_1.jpg",
      },
      {
        dayNumber: 2,
        title: "Zurich to Lucerne Scenic Lake Train",
        tag: "LUCERNE SIGHTS",
        tagline: "Board a scenic train to Lucerne and walk the historic wooden bridge.",
        activities: [
          { icon: "🚊", title: "SBB Train to Lucerne", description: "Scenic 45-minute rail cruise past lakes and green meadows." },
          { icon: "🌉", title: "Chapel Bridge (Kapellbrücke) Walk", description: "Explore the 14th-century wooden covered bridge featuring painted historic panels." },
        ],
        tip: "Buy a Swiss Travel Pass early to cover all public trains and city buses.",
        image: "/images/destinations/switzerland_2.jpg",
      },
      {
        dayNumber: 3,
        title: "Mt. Titlis Cable Car Excursion",
        tag: "SNOW ALPS",
        tagline: "Ride the rotating cable car and walk the high suspension bridge.",
        activities: [
          { icon: "🏔️", title: "Titlis Rotair Cable Car", description: "Ride the world's first rotating cable car up to the snow summit at 10,000 ft." },
          { icon: "🌉", title: "Titlis Cliff Walk", description: "Walk along Europe's highest suspension bridge overlooking steep rock drops." },
        ],
        tip: "Wear layered woolens and sturdy shoes as the glacier park is icy and cold.",
        image: "/images/destinations/switzerland_3.jpg",
      },
      {
        dayNumber: 4,
        title: "Interlaken Valley & Lake Thun Cruise",
        tag: "INTERLAKEN",
        tagline: "Travel to the resort valley between two lakes and cruise.",
        activities: [
          { icon: "🚊", title: "Train to Interlaken", description: "Scenic train ride down the Brunig Pass to Interlaken." },
          { icon: "🚢", title: "Lake Thun Boat Cruise", description: "Sail past historic castles and mountains on a classic passenger cruise boat." },
        ],
        tip: "Try the traditional cheese fondue at Interlaken's local cafes.",
        image: "/images/destinations/switzerland_1.jpg",
      },
      {
        dayNumber: 5,
        title: "Jungfraujoch Top of Europe Rail Climb",
        tag: "JUNGFRAUJOCH",
        tagline: "Climb past mountain tunnels to Europe's highest railway station.",
        activities: [
          { icon: "🚊", title: "Eiger Express & Jungfrau Cog Railway", description: "Ride the modern cable car and cog train up to the station at 11,332 ft." },
        ],
        tip: "Altitude sickness can happen; climb slowly and drink plenty of water.",
        image: "/images/destinations/switzerland_2.jpg",
      },
      {
        dayNumber: 6,
        title: "Swiss Chocolate Factory Tour",
        tag: "CHOCOLATE & LEISURE",
        tagline: "Taste infinite fresh chocolates and stroll the old town alleys.",
        activities: [
          { icon: "🍫", title: "Lindt Home of Chocolate Tour", description: "Visit the massive chocolate museum in Kilchberg, viewing the 9m chocolate fountain." },
        ],
        tip: "Save some space in your bags for authentic Swiss chocolate bars.",
        image: "/images/destinations/switzerland_3.jpg",
      },
      {
        dayNumber: 7,
        title: "Zurich Departure",
        tag: "FAREWELL",
        tagline: "Drop-off at Zurich Airport.",
        activities: [
          { icon: "✈️", title: "Zurich Airport Drop-Off", description: "SBB Train or private transfer to ZRH Airport for your return flight." },
        ],
        tip: "Confirm that you have processed SBB refund cards before checking in.",
        image: "/images/destinations/switzerland_1.jpg",
      },
    ],
    hotels: [
      { name: "Hotel Schweizerhof Luzern", rating: "★★★★★", type: "Luxury Heritage Hotel", location: "Lake Lucerne", image: "/images/destinations/switzerland_2.jpg" },
    ],
  },
  "united-kingdom": {
    slug: "united-kingdom",
    destination: "United Kingdom",
    title: "UK Classic (London, Stonehenge & Edinburgh Train)",
    duration: "7 Nights / 8 Days",
    heroImage: "/images/destinations/uk_1.jpg",
    tagline: "Royalty, Castles, and Green Fields",
    basePrice: 85000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in London & Tower Bridge Walk",
        tag: "LONDON ARRIVAL",
        tagline: "Land in the UK capital, check in, and stroll the Thames river path.",
        activities: [
          { icon: "✈️", title: "London Airport pickup & Transfer", description: "Private pick-up at Heathrow (LHR) Airport and transfer to your central city hotel." },
          { icon: "🌉", title: "Tower Bridge Sunset Walk", description: "Stroll along the Thames, viewing the iconic suspension bridge and historic Tower of London." },
        ],
        tip: "Get an Oyster Card or use contactless cards for easy London Tube rail travel.",
        image: "/images/destinations/uk_1.jpg",
      },
      {
        dayNumber: 2,
        title: "London Eye & Buckingham Palace",
        tag: "LONDON SIGHTS",
        tagline: "Fly high on the giant wheel and see the Changing of the Guard.",
        activities: [
          { icon: "🎡", title: "London Eye Flight Pass", description: "Ride the giant observation wheel for bird's-eye views of Parliament and Big Ben." },
          { icon: "🏰", title: "Buckingham Palace Changing of the Guard", description: "Watch the royal guards in red tunics march past the palace gates." },
        ],
        tip: "Book London Eye tickets early to grab fast-track entrance lanes.",
        image: "/images/destinations/uk_2.jpg",
      },
      {
        dayNumber: 3,
        title: "British Museum & West End Show",
        tag: "LONDON CULTURE",
        tagline: "Gaze at ancient treasures and watch a world-class theater play.",
        activities: [
          { icon: "🏛️", title: "British Museum Tour", description: "See Rosetta Stone, Elgin Marbles, and historic collections with expert audio guides." },
          { icon: "🎭", title: "West End Theater Show Entry", description: "Watch a famous musical like Lion King or West Side Story in historic theaters." },
        ],
        tip: "British Museum entry is free, but pre-booking entry slots online is required.",
        image: "/images/destinations/uk_3.jpg",
      },
      {
        dayNumber: 4,
        title: "Stonehenge & Roman Baths Daytrip",
        tag: "ENGLISH HERITAGE",
        tagline: "Visit the mysterious stone circles and the ancient baths of Bath.",
        activities: [
          { icon: "🗿", title: "Stonehenge Stone Circle Entry", description: "Walk around the prehistoric standing stone monument." },
          { icon: "🛀", title: "Roman Baths Museum", description: "Explore the ancient natural hot baths used by Romans in Bath city." },
        ],
        tip: "Pack a jacket as the open Stonehenge plains are very windy.",
        image: "/images/destinations/uk_1.jpg",
      },
      {
        dayNumber: 5,
        title: "High-Speed Train to Edinburgh, Scotland",
        tag: "SCOTLAND ROUTE",
        tagline: "Board a scenic train past coastlines and check into historic Edinburgh.",
        activities: [
          { icon: "🚊", title: "LNER East Coast Train Ride", description: "Board the high-speed train from Kings Cross to Edinburgh (4 hours)." },
          { icon: "🏨", title: "Edinburgh Hotel Check-In", description: "Settle into your hotel situated in the cobblestoned Old Town." },
        ],
        tip: "Sit on the right side of the train when traveling north for beautiful North Sea views.",
        image: "/images/destinations/uk_2.jpg",
      },
      {
        dayNumber: 6,
        title: "Edinburgh Castle & Royal Mile",
        tag: "EDINBURGH SIGHTS",
        tagline: "Walk past medieval cobblestone alleys and visit the castle rock.",
        activities: [
          { icon: "🏰", title: "Edinburgh Castle Tour", description: "Explore the medieval fortress perched on volcanic castle rock, viewing Scotland's crown jewels." },
          { icon: "🚶", title: "Royal Mile Walking Tour", description: "Walk from the castle to Holyrood Palace past historic stone tenements." },
        ],
        tip: "Listen for the One O'Clock Gun fired daily from the castle ramparts.",
        image: "/images/destinations/uk_3.jpg",
      },
      {
        dayNumber: 7,
        title: "Scottish Highlands & Loch Ness Day Excursion",
        tag: "HIGHLANDS ADVENTURE",
        tagline: "Drive past dramatic glens and boat on the deep dark waters of Loch Ness.",
        activities: [
          { icon: "🚗", title: "Glencoe Valley Drive", description: "Scenic drive through the dramatic, mist-shrouded volcanic glen." },
          { icon: "🚢", title: "Loch Ness Cruise Safari", description: "Board a boat equipped with sonar to search for the legendary Nessie monster." },
        ],
        tip: "Bring a warm, windproof coat for the Loch Ness boat cruise.",
        image: "/images/destinations/uk_1.jpg",
      },
      {
        dayNumber: 8,
        title: "Edinburgh Departure",
        tag: "FAREWELL",
        tagline: "Airport drop and return flight home.",
        activities: [
          { icon: "✈️", title: "Edinburgh Airport Drop-Off", description: "Transfer to EDI Airport for your departure flight back home." },
        ],
        tip: "Reach the airport 3 hours early to clear immigration checkpoints.",
        image: "/images/destinations/uk_2.jpg",
      },
    ],
    hotels: [
      { name: "The Balmoral Edinburgh", rating: "★★★★★", type: "Luxury Castle Hotel", location: "Princes Street", image: "/images/destinations/uk_3.jpg" },
    ],
  },
  "sri-lanka": {
    slug: "sri-lanka",
    destination: "Sri Lanka",
    title: "Sri Lanka Cultural Heritage (Colombo, Kandy & Sigiriya)",
    duration: "6 Nights / 7 Days",
    heroImage: "/images/destinations/sri_lanka_1.jpg",
    tagline: "The Pearl of the Indian Ocean",
    basePrice: 32000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Colombo & Transfer to Sigiriya",
        tag: "SIGIRIYA ARRIVAL",
        tagline: "Welcome to Sri Lanka! Drive to the cultural heartland.",
        activities: [
          { icon: "✈️", title: "Airport Pickup & Drive", description: "Our representative meets you at Bandaranaike International Airport (CMB) and transfers you to Sigiriya (4 hours)." },
          { icon: "🏨", title: "Resort Check-In", description: "Check into your jungle resort. Settle in and enjoy the peaceful surroundings." },
        ],
        tip: "Stop for fresh king coconut water along the road — it's sweet and cooling.",
        image: "/images/destinations/sri_lanka_1.jpg",
      },
      {
        dayNumber: 2,
        title: "Climb Sigiriya Lion Rock Fortress",
        tag: "LION ROCK FORTRESS",
        tagline: "Ascend the world-famous rock citadel in the sky.",
        activities: [
          { icon: "🧗", title: "Sigiriya Rock Guided Climb", description: "Climb the 1,200 ancient steps past the Mirror Wall and frescoes to the flat summit ruins." },
          { icon: "🌾", title: "Water & Boulder Gardens", description: "Stroll through the symmetric terraced gardens and see the giant lion's paws carvings." },
        ],
        tip: "Start your climb early by 7:30 AM to beat the mid-day sun and crowds.",
        image: "/images/destinations/sri_lanka_2.jpg",
      },
      {
        dayNumber: 3,
        title: "Dambulla Cave Temple & Kandy Transit",
        tag: "KANDY SIGHTS",
        tagline: "Visit the sacred cave temple and travel to the hill capital.",
        activities: [
          { icon: "🛕", title: "Dambulla Cave Temple Tour", description: "Explore the five ancient cave shrines containing over 150 serene Buddha statues and murals." },
          { icon: "🌶️", title: "Matale Spice Garden Visit", description: "See fresh cinnamon, vanilla, and cocoa growing. Enjoy a quick head massage." },
        ],
        tip: "Your knees and shoulders must be covered when visiting sacred temples.",
        image: "/images/destinations/sri_lanka_3.jpg",
      },
      {
        dayNumber: 4,
        title: "Temple of the Tooth & Royal Botanical Gardens",
        tag: "SACRED HERITAGE",
        tagline: "See the holy tooth relic of Buddha and walk giant palm avenues.",
        activities: [
          { icon: "🕌", title: "Temple of the Sacred Tooth Relic", description: "Explore the golden canopy sanctuary housing the sacred tooth relic of Lord Buddha." },
          { icon: "🌴", title: "Peradeniya Royal Botanical Gardens", description: "Walk through towering double coconut avenues and see the giant Javan fig tree." },
          { icon: "💃", title: "Kandyan Cultural Dance Show", description: "Watch a high-energy dance performance featuring traditional drummers and fire-walking." },
        ],
        tip: "Wear white or light-colored clothing when visiting the Temple of the Tooth.",
        image: "/images/destinations/sri_lanka_1.jpg",
      },
      {
        dayNumber: 5,
        title: "Scenic Train to Nuwara Eliya",
        tag: "TEA HILLS",
        tagline: "Board one of the world's most scenic trains past misty tea mountains.",
        activities: [
          { icon: "🚊", title: "Scenic Tea Country Train", description: "Board the train from Kandy to Nanu Oya, passing green tea estates and rushing waterfalls." },
          { icon: "🍃", title: "Ceylon Tea Estate & Factory Tour", description: "Walk through tea gardens and see the processing factory, followed by a fresh tasting session." },
        ],
        tip: "Grab a seat on the right side of the train when leaving Kandy for the best views.",
        image: "/images/destinations/sri_lanka_2.jpg",
      },
      {
        dayNumber: 6,
        title: "Colombo City Tour & Shopping",
        tag: "COLOMBO CITY",
        tagline: "Drive to the capital city for a heritage street tour and shopping.",
        activities: [
          { icon: "🚗", title: "Drive to Colombo", description: "Descend from the cold mountain pass to the capital city of Colombo (4.5 hours)." },
          { icon: "🏙️", title: "Colombo City Tour", description: "Visit Galle Face Green, Gangaramaya Buddhist Temple, and Pettah Floating Market." },
        ],
        tip: "Buy high-quality Ceylon tea at Laksala or Odel for local gifts.",
        image: "/images/destinations/sri_lanka_3.jpg",
      },
      {
        dayNumber: 7,
        title: "Departure from Colombo",
        tag: "DEPARTURE",
        tagline: "Airport drop-off for your flight home.",
        activities: [
          { icon: "✈️", title: "Colombo Airport Drop-off", description: "Private transfer to Bandaranaike International Airport (CMB) for your flight back home." },
        ],
        tip: "Arrive at CMB airport 3 hours early for international departures.",
        image: "/images/destinations/sri_lanka_1.jpg",
      },
    ],
    hotels: [
      { name: "Amaara Forest Hotel Sigiriya", rating: "★★★★", type: "Luxury Eco-Resort", location: "Sigiriya Jungle", image: "/images/destinations/sri_lanka_2.jpg" },
      { name: "The Grand Hotel Nuwara Eliya", rating: "★★★★★", type: "Heritage Mansion", location: "Nuwara Eliya Hills", image: "/images/destinations/sri_lanka_3.jpg" },
    ],
  },

  // ─────────────────────────────────────────
  // VARIANT PACKAGE ITINERARIES
  // ─────────────────────────────────────────

  // ── KASHMIR VARIANTS ──
  "kashmir-premium": {
    slug: "kashmir-premium", destination: "Kashmir", title: "Kashmir Luxury Escape (Houseboat, Gondola & Snow Adventure)", duration: "5 Nights / 6 Days", heroImage: "/images/destinations/kashmir_2.jpg", tagline: "Premium Kashmir — Private Shikara, Phase 2 Gondola & Luxury Houseboat", basePrice: 35000,
    days: [
      { dayNumber: 1, title: "Private Arrival & Luxury Houseboat Check-In", tag: "DAL LAKE", tagline: "Arrive in style — private transfer, premium cedar houseboat, sunset shikara.", activities: [{ icon: "✈️", title: "Private Airport Transfer", description: "Dedicated vehicle from Srinagar Airport to your luxury houseboat on Dal Lake." }, { icon: "🛥️", title: "Private Shikara Sunset Ride", description: "1.5-hour private shikara with flower vendor market visit and sunset photography." }, { icon: "🍽️", title: "Wazwan Welcome Dinner On-Board", description: "7-course Kashmiri wazwan served by private chef aboard your houseboat." }], tip: "Request a sunrise shikara at 5:30 AM — the mist over Dal Lake is magical and exclusive.", image: "/images/destinations/kashmir_1.jpg" },
      { dayNumber: 2, title: "Gulmarg Gondola Phase 2 — Apharwat Summit", tag: "GULMARG", tagline: "Ride to 13,780 ft — the world's second-highest cable car, exclusively in winter snow.", activities: [{ icon: "🚡", title: "Gondola Phase 1 & 2", description: "Full gondola experience to Apharwat Peak. Clear days offer views of Nanga Parbat." }, { icon: "🎿", title: "Private Ski / Snow Experience", description: "Private ski instructor for 2 hours on Gulmarg slopes (seasonal, Oct–Mar)." }, { icon: "🏕️", title: "Meadow Picnic Lunch", description: "Enjoy a curated picnic lunch on the Gulmarg meadow by your private guide." }], tip: "Book Phase 2 gondola tickets in advance — they sell out fast in peak season.", image: "/images/destinations/kashmir_2.jpg" },
      { dayNumber: 3, title: "Pahalgam Private Valley Drive", tag: "PAHALGAM", tagline: "Valley of shepherds — private cab, Betaab Valley & Chandanwari snowfields.", activities: [{ icon: "🏔️", title: "Betaab Valley Photography Stop", description: "Dramatic valley backdrop made famous by Bollywood films. Private guide included." }, { icon: "❄️", title: "Chandanwari Snowfields", description: "Walk on perennial snow at 9,500 ft elevation at the gateway to Amarnath route." }, { icon: "🐴", title: "Aru Valley Pony Ride", description: "Short pony ride through apple orchards and shepherd meadows." }], tip: "Carry a windcheater — Chandanwari snow area is breezy even in May.", image: "/images/destinations/kashmir_3.jpg" },
      { dayNumber: 4, title: "Mughal Gardens & Srinagar Heritage Day", tag: "SRINAGAR", tagline: "Three Mughal gardens, Shankaracharya Temple & old city bazaar with a private guide.", activities: [{ icon: "🌷", title: "Nishat, Shalimar & Chashme Shahi Gardens", description: "All three Mughal terraced gardens in one guided morning. Best in spring bloom." }, { icon: "⛪", title: "Shankaracharya Temple", description: "Hilltop Hindu temple with panoramic 360° views of Dal Lake and snow peaks." }, { icon: "🛍️", title: "Polo View Market", description: "Shop for Kashmiri saffron, pashmina shawls, papier-mâché boxes and walnuts." }], tip: "Nishat Bagh is most beautiful when fountains are running — verify timings on arrival.", image: "/images/destinations/kashmir_1.jpg" },
      { dayNumber: 5, title: "Doodhpathri Meadow Day Excursion", tag: "DOODHPATHRI", tagline: "Kashmir's hidden paradise — lush meadows, crystal streams and wildflower carpets.", activities: [{ icon: "🌿", title: "Doodhpathri Meadow Walk", description: "Walk through the Valley of Milk — emerald meadows named for the white glacial streams." }, { icon: "🐎", title: "Horse Riding in the Meadow", description: "30-minute pony ride through pristine alpine grasslands with zero crowds." }, { icon: "☕", title: "Kangri Kehwa High Tea", description: "Traditional Kashmiri kehwa tea served with saffron and cardamom by local hosts." }], tip: "Doodhpathri is crowd-free compared to Gulmarg — carry your own packed lunch.", image: "/images/destinations/kashmir_2.jpg" },
      { dayNumber: 6, title: "Departure Day — Last Shikara & Goodbye", tag: "DEPARTURE", tagline: "Final morning shikara, shopping for saffron, and airport transfer.", activities: [{ icon: "🛥️", title: "Morning Floating Market Visit", description: "Early morning shikara to the floating vegetable market — a unique Kashmiri experience." }, { icon: "🛍️", title: "Last-minute Shopping", description: "Pick up Kashmiri saffron, dry fruits and hand-embroidered shawls at fixed-price stores." }, { icon: "✈️", title: "Airport Transfer", description: "Private vehicle drop-off at Srinagar Airport." }], tip: "Buy saffron from verified government-certified shops only — avoid tourist traps.", image: "/images/destinations/kashmir_3.jpg" },
    ],
    hotels: [{ name: "The Lalit Grand Palace Srinagar", rating: "★★★★★", type: "Heritage Palace Hotel", location: "Dal Lake, Srinagar", image: "/images/destinations/kashmir_1.jpg" }, { name: "Khyber Himalayan Resort Gulmarg", rating: "★★★★★", type: "Luxury Mountain Resort", location: "Gulmarg", image: "/images/destinations/kashmir_2.jpg" }],
  },
  "kashmir-winter": {
    slug: "kashmir-winter", destination: "Kashmir", title: "Kashmir Winter Wonderland (Skiing & Snow Experience)", duration: "4 Nights / 5 Days", heroImage: "/images/destinations/kashmir_3.jpg", tagline: "Pure snow — Gulmarg ski slopes, snowmobile rides and a Pheran cultural evening", basePrice: 18000,
    days: [
      { dayNumber: 1, title: "Arrival & Transfer to Gulmarg Snow Base", tag: "GULMARG", tagline: "Direct to Gulmarg — the snow begins at the cable car station.", activities: [{ icon: "✈️", title: "Srinagar Airport to Gulmarg", description: "2-hour drive through pine forests. Snow levels rise dramatically in the last 10 km." }, { icon: "🏨", title: "Hotel Check-In & Snow Walk", description: "Check-in at your snow-view property. Take a short walk in the snow village." }, { icon: "🍜", title: "Kashmiri Rogan Josh Dinner", description: "Warming local dinner of rogan josh, tabak maaz and butter-crust bread at the hotel." }], tip: "Pack thermal inner layers — Gulmarg base temperature drops to -5°C at night in winter.", image: "/images/destinations/kashmir_3.jpg" },
      { dayNumber: 2, title: "Ski Day — Slopes & Gondola Phase 1", tag: "SKIING", tagline: "A full day on Gulmarg's legendary ski slopes with a certified instructor.", activities: [{ icon: "🎿", title: "Beginner Ski Lesson", description: "2-hour group ski lesson on the nursery slope with GSSS-certified instructor." }, { icon: "🚡", title: "Gondola Phase 1 Ride", description: "Cable car to Kongdori Station for intermediate ski runs on groomed slopes." }, { icon: "🏂", title: "Snow Activities — Snowmobile & Sledging", description: "Snowmobile ride on the Gulmarg meadow and sledging on the natural slope." }], tip: "Rent ski boots and gear locally — it's cheaper and sizes are readily available.", image: "/images/destinations/kashmir_3.jpg" },
      { dayNumber: 3, title: "Gondola Phase 2 — Apharwat Peak Summit", tag: "APHARWAT", tagline: "The world's second-highest cable car — views of Nanga Parbat in full glory.", activities: [{ icon: "🚡", title: "Gondola Phase 2 Ticket", description: "Ride to 13,780 ft. This is a bucket-list experience — clear skies needed." }, { icon: "📸", title: "Snow Photography Session", description: "Capture the vast snowfields, frozen lakes and Himalayan panorama from the top." }, { icon: "🏔️", title: "Baba Reshi Shrine Visit", description: "Historic Sufi shrine surrounded by ancient chinar trees at Gulmarg base." }], tip: "Phase 2 tickets are limited — buy at 7:00 AM opening to avoid sellout.", image: "/images/destinations/kashmir_3.jpg" },
      { dayNumber: 4, title: "Dal Lake Shikara & Pheran Cultural Evening", tag: "SRINAGAR", tagline: "Drive to Srinagar for a final Dal Lake shikara and a traditional Pheran evening.", activities: [{ icon: "🚤", title: "Dal Lake Morning Shikara", description: "Flat-bottomed shikara ride through the lotus beds, floating gardens and bird nesting areas." }, { icon: "👘", title: "Pheran Evening — Kashmiri Fire Pot", description: "Try on the traditional Pheran woollen cloak and sit with a kangri (fire pot) — a true Kashmir winter ritual." }, { icon: "🏪", title: "Polo View Market Shopping", description: "Last-minute local shopping for saffron, walnuts, dry fruits and hand-woven shawls." }], tip: "The kangri experience is something tourists rarely get — ask your guide to arrange it.", image: "/images/destinations/kashmir_1.jpg" },
      { dayNumber: 5, title: "Departure from Srinagar", tag: "DEPARTURE", tagline: "Final morning, packed breakfast and airport drop-off.", activities: [{ icon: "🍳", title: "Kashmiri Breakfast — Noon Chai & Tsot", description: "Traditional pink salt tea and bread rings for a warm send-off." }, { icon: "✈️", title: "Airport Transfer", description: "Private vehicle to Sheikh ul-Alam International Airport, Srinagar." }], tip: "Winter flights can be delayed due to fog — arrive at the airport 3 hours early.", image: "/images/destinations/kashmir_3.jpg" },
    ],
    hotels: [{ name: "Khyber Himalayan Resort", rating: "★★★★★", type: "Snow Resort", location: "Gulmarg", image: "/images/destinations/kashmir_3.jpg" }, { name: "Broadway Hotel Srinagar", rating: "★★★★", type: "Heritage City Hotel", location: "Dal Lake, Srinagar", image: "/images/destinations/kashmir_1.jpg" }],
  },

  // ── MALDIVES VARIANTS ──
  "maldives-budget": {
    slug: "maldives-budget", destination: "Maldives", title: "Maldives Budget Bliss (Guesthouse & Beach Experience)", duration: "5 Nights / 6 Days", heroImage: "/images/destinations/maldives_2.jpg", tagline: "Local island living — dolphin cruises, reef snorkeling and endless white-sand beaches", basePrice: 42000,
    days: [
      { dayNumber: 1, title: "Arrive Malé & Local Island Ferry Transfer", tag: "MALÉ", tagline: "Arrive in Malé, clear customs and ferry to your local island guesthouse.", activities: [{ icon: "✈️", title: "Malé Airport Arrival & Meet", description: "Our rep meets you at Velana International Airport and assists with luggage." }, { icon: "⛵", title: "Public Ferry to Maafushi / Thulusdhoo", description: "1-hour government ferry to your local island — a genuine Maldivian experience." }, { icon: "🏨", title: "Guesthouse Check-In", description: "Settle into your clean, air-conditioned guesthouse with sea-view balcony." }], tip: "Book the ferry boat trip in advance — popular local ferries fill up quickly.", image: "/images/destinations/maldives_2.jpg" },
      { dayNumber: 2, title: "House Reef Snorkeling & Turtle Sanctuary", tag: "REEF", tagline: "The reef is right at your doorstep — mask up and explore.", activities: [{ icon: "🤿", title: "Morning House Reef Snorkel", description: "Explore the house reef with rented mask and fins — sea turtles and rays common here." }, { icon: "🐢", title: "Turtle Sanctuary Visit", description: "Some local islands have turtle hatcheries — guided tour included." }, { icon: "🌅", title: "Bikini Beach Sunset", description: "Relax at the island's bikini beach and watch the sun set over the Indian Ocean." }], tip: "Bring biodegradable sunscreen — regular sunscreen damages Maldivian coral reefs.", image: "/images/destinations/maldives_2.jpg" },
      { dayNumber: 3, title: "Dolphin Watching Cruise", tag: "DOLPHINS", tagline: "Spinner dolphins — hundreds of them — play in the bow waves at sunset.", activities: [{ icon: "🐬", title: "Sunset Dolphin Cruise", description: "2-hour shared boat trip to the dolphin feeding grounds — sightings guaranteed most days." }, { icon: "🚤", title: "Sandbank Day Trip", description: "Morning transfer to a deserted sandbank island for swimming and snorkeling." }, { icon: "🍹", title: "Fresh Coconut & Beachside Lunch", description: "Lunch at a local cafe — Maldivian fish curry, roshi bread and fresh coconut water." }], tip: "The sunset dolphin cruise is best between 4–6 PM — light conditions are perfect for photos.", image: "/images/destinations/maldives_2.jpg" },
      { dayNumber: 4, title: "Wreck Dive or Snorkel at Shark Point", tag: "SHARK POINT", tagline: "Black-tip reef sharks patrol the shallow — completely harmless and incredible to see.", activities: [{ icon: "🦈", title: "Shark Point Snorkeling", description: "Snorkel at a nearby reef with black-tip sharks. Guide provided for safety briefing." }, { icon: "⚓", title: "Manta Ray Hotspot Visit (Seasonal)", description: "If visiting Dec–April, visit the manta ray cleaning station for a once-in-a-lifetime sighting." }, { icon: "🛶", title: "Local Fishing Experience", description: "Evening hand-line fishing with local fishermen — catch your own dinner." }], tip: "Reef sharks are shy and won't approach — stay calm and float above them.", image: "/images/destinations/maldives_1.jpg" },
      { dayNumber: 5, title: "Island Hopping by Speedboat", tag: "ISLAND HOP", tagline: "Three islands in one day — each unique, each unforgettable.", activities: [{ icon: "🚤", title: "3-Island Speedboat Excursion", description: "Visit a local inhabited island, a resort island day-visit and a deserted island." }, { icon: "🤿", title: "Coral Garden Snorkel", description: "Snorkel at one of the Maldives' untouched coral gardens with vibrant marine life." }, { icon: "📸", title: "Bioluminescent Beach Night Walk", description: "On a clear night, the beach glows blue with plankton. A natural wonder." }], tip: "Bioluminescence is best seen on moonless nights — ask your guesthouse for the best spots.", image: "/images/destinations/maldives_2.jpg" },
      { dayNumber: 6, title: "Departure — Ferry Back to Malé", tag: "DEPARTURE", tagline: "Morning ferry, last coconut, and departure from Velana Airport.", activities: [{ icon: "⛵", title: "Ferry Transfer Back to Malé", description: "Morning public ferry from local island to Malé. Duration: 45–90 minutes." }, { icon: "🛍️", title: "Malé Old Town Quick Walk", description: "If time allows, see the grand Friday mosque, fish market and Malé old quarter." }, { icon: "✈️", title: "Departure from Velana International", description: "Airport assistance and check-in support from our rep." }], tip: "Keep your departure time in mind — the public ferry schedule is fixed.", image: "/images/destinations/maldives_2.jpg" },
    ],
    hotels: [{ name: "Kaani Beach Hotel Maafushi", rating: "★★★", type: "Beachfront Guesthouse", location: "Maafushi Local Island", image: "/images/destinations/maldives_2.jpg" }],
  },
  "maldives-dive": {
    slug: "maldives-dive", destination: "Maldives", title: "Maldives Dive & Surf Adventure (Liveaboard Experience)", duration: "6 Nights / 7 Days", heroImage: "/images/destinations/maldives_3.jpg", tagline: "Live at sea — whale sharks, manta rays, night dives and Maldivian atolls", basePrice: 95000,
    days: [
      { dayNumber: 1, title: "Malé & Liveaboard Embarkation", tag: "LIVEABOARD", tagline: "Board your private dive yacht at Malé — your home for the next 6 nights.", activities: [{ icon: "✈️", title: "Airport Meet & Liveaboard Transfer", description: "Direct speed transfer to the liveaboard yacht berthed at Malé harbour." }, { icon: "🛳️", title: "Boat Orientation & Safety Briefing", description: "Dive briefing, equipment setup, cabin assignment and muster drill." }, { icon: "🤿", title: "Check-Out Dive", description: "Shallow reef check-out dive to calibrate buoyancy and check all equipment." }], tip: "Bring your PADI or NAUI certification card — it's required before diving.", image: "/images/destinations/maldives_3.jpg" },
      { dayNumber: 2, title: "North Malé Atoll — Whale Shark Point", tag: "WHALE SHARK", tagline: "The planet's biggest fish — swimming beside a 12-metre whale shark is indescribable.", activities: [{ icon: "🦈", title: "Whale Shark Snorkel Encounter", description: "Multiple dives and snorkel sessions at South Ari Atoll whale shark aggregation zone." }, { icon: "🌊", title: "Maaya Thila Night Dive", description: "World-famous night dive site — white-tip sharks, sea turtles and octopus after dark." }, { icon: "🐠", title: "Coral Garden Drift Dive", description: "Gentle drift dive through a pristine coral garden teeming with reef fish." }], tip: "Whale shark sightings are best 6–10 AM — bring wide-angle lens for underwater photography.", image: "/images/destinations/maldives_3.jpg" },
      { dayNumber: 3, title: "Ari Atoll — Manta Ray Cleaning Station", tag: "MANTA RAYS", tagline: "Hover motionless at 15 metres as giant oceanic mantas soar overhead.", activities: [{ icon: "🐋", title: "Manta Ray Dive at Moofushi Beyru", description: "One of the world's top manta ray dive sites. Mantas can reach 5-metre wingspan." }, { icon: "🤿", title: "Fish Head (Mushimasmingili) Dive", description: "PADI's 10 best dive sites globally. Sharks, napoleon wrasse and thousands of fusiliers." }, { icon: "🌅", title: "Sundeck Relaxation at Anchor", description: "Afternoon anchor rest at a blue lagoon. Kayaking, paddleboarding and sunbathing." }], tip: "Stay horizontal and motionless at the manta cleaning station — movement scares them away.", image: "/images/destinations/maldives_3.jpg" },
      { dayNumber: 4, title: "Meemu & Thaa Atoll — Hammerhead Expedition", tag: "HAMMERHEADS", tagline: "Deeper dive — scalloped hammerhead sharks schooling in open water.", activities: [{ icon: "🦈", title: "Hammerhead Dive at Vattaru Kandn", description: "Early 6 AM dawn dive to catch hammerheads patrolling the channel in groups." }, { icon: "🌊", title: "Guraidhoo Corner Channel Dive", description: "Fast drift dive through a shark-filled channel — exhilarating and wildlife-rich." }, { icon: "🏝️", title: "Uninhabited Island Barbecue Lunch", description: "Anchor off a deserted island for a freshly-grilled seafood barbecue on the beach." }], tip: "Hammerhead dives require Advanced Open Water certification — check your rating beforehand.", image: "/images/destinations/maldives_3.jpg" },
      { dayNumber: 5, title: "Baa Atoll UNESCO Biosphere — Hanifaru Bay", tag: "HANIFARU BAY", tagline: "Hundreds of manta rays and whale sharks feeding together in one bay — a World Wonder.", activities: [{ icon: "🌊", title: "Hanifaru Bay Snorkel (UNESCO Reserve)", description: "Snorkeling only (no diving) in Hanifaru Bay — a congregation of 200+ mantas recorded." }, { icon: "🤿", title: "Baa Atoll Coral Restoration Dive", description: "Visit an active coral restoration site and learn about Maldivian reef conservation." }, { icon: "🌙", title: "Bioluminescent Night Swim", description: "Night swim from the liveaboard deck in glowing blue plankton water." }], tip: "Visit Hanifaru Bay June–November for the largest manta aggregations in the world.", image: "/images/destinations/maldives_3.jpg" },
      { dayNumber: 6, title: "Lhaviyani Atoll — Cave & Wreck Diving", tag: "WRECK DIVE", tagline: "Kuredu Express drift, sea caves and a WWII-era wreck to explore.", activities: [{ icon: "⚓", title: "Kuredu Express Drift Dive", description: "High-adrenaline drift dive at 4 knots through a colourful channel — sharks everywhere." }, { icon: "🕳️", title: "Shipwreck Dive", description: "Explore a sunken ship — now a thriving artificial reef with large groupers and moray eels." }, { icon: "🎊", title: "Dive Certification Ceremony & Celebration Dinner", description: "PADI dive logbook signing, certification and a celebratory fresh seafood dinner." }], tip: "The Kuredu Express drift is only for certified divers — speak to the dive master first.", image: "/images/destinations/maldives_3.jpg" },
      { dayNumber: 7, title: "Return to Malé & Departure", tag: "DEPARTURE", tagline: "Final morning dive, liveaboard disembarkation and airport transfer.", activities: [{ icon: "🤿", title: "Final Sunrise Dive", description: "Optional easy dawn dive at a sheltered reef near Malé." }, { icon: "🛳️", title: "Liveaboard Disembarkation", description: "Pack up, return rental gear and disembark at Malé harbour." }, { icon: "✈️", title: "Airport Transfer & Departure", description: "Transfer to Velana International Airport for your flight home." }], tip: "Avoid flying within 24 hours of your last dive to prevent decompression sickness.", image: "/images/destinations/maldives_3.jpg" },
    ],
    hotels: [{ name: "MV Blue Force One Liveaboard", rating: "★★★★★", type: "Luxury Dive Yacht (Liveaboard)", location: "Maldivian Atolls", image: "/images/destinations/maldives_3.jpg" }],
  },

  // ── DUBAI VARIANTS ──
  "dubai-luxury": {
    slug: "dubai-luxury", destination: "Dubai", title: "Dubai Ultra Luxury (Burj Al Arab & Premium Experiences)", duration: "6 Nights / 7 Days", heroImage: "/images/destinations/dubai_2.jpg", tagline: "The world's only 7-star hotel, private desert safari and Atlantis's wildest waterpark", basePrice: 95000,
    days: [
      { dayNumber: 1, title: "Private Arrival & Burj Al Arab Check-In", tag: "BURJ AL ARAB", tagline: "Land in Dubai and head straight to the sail-shaped icon of luxury.", activities: [{ icon: "🚗", title: "Chauffeur-Driven Airport Transfer", description: "Rolls Royce or Bentley airport pickup arranged through Burj Al Arab concierge." }, { icon: "🏨", title: "Check In at Burj Al Arab or Jumeirah Luxury Hotel", description: "Experience the world's most recognisable hotel — gold-leaf interiors, butler service." }, { icon: "🍽️", title: "Dinner at Al Mahara (Burj Al Arab)", description: "Underwater seafood restaurant inside an aquarium tank — a once-in-a-lifetime meal." }], tip: "Request a sea-facing suite — the Burj Al Arab has no bad views but seaward rooms are spectacular.", image: "/images/destinations/dubai_2.jpg" },
      { dayNumber: 2, title: "Burj Khalifa At the Top SKY (Level 148)", tag: "BURJ KHALIFA", tagline: "The world's tallest building — the SKY lounge at 555 metres above the ground.", activities: [{ icon: "🌆", title: "Burj Khalifa Level 148 SKY Experience", description: "Access to the highest observation deck on Earth. Pre-booked sunrise or sunset slot." }, { icon: "⛲", title: "Dubai Fountain Show (Front Row)", description: "Watch the 900-metre fountain dance to music from the best vantage point." }, { icon: "🛍️", title: "Dubai Mall & Aquarium", description: "Visit the world's largest indoor aquarium tunnel and the ice rink." }], tip: "Book Level 148 SKY tickets at least 2 weeks in advance — they're limited and sell out.", image: "/images/destinations/dubai_2.jpg" },
      { dayNumber: 3, title: "Private Desert Safari — VIP Camp", tag: "DESERT VIP", tagline: "Dune bashing in a luxury 4×4, falconry, belly dance and gourmet BBQ under the stars.", activities: [{ icon: "🏜️", title: "Private 4×4 Dune Bashing", description: "Exclusive dune bashing in a Land Cruiser — no shared group, just your party." }, { icon: "🦅", title: "Falconry Display", description: "Traditional Emirati falconry demonstration at your VIP desert camp." }, { icon: "🍢", title: "Gourmet BBQ & Arabic Mezze Dinner", description: "5-star catered desert dinner with unlimited soft drinks, shisha and live Tanoura dance." }], tip: "Choose evening safari for cooler temperatures and better photographs at golden hour.", image: "/images/destinations/dubai_2.jpg" },
      { dayNumber: 4, title: "Atlantis Aquaventure & The Lost Chambers", tag: "ATLANTIS", tagline: "The waterpark that holds 20+ world records — slides, river ride and private cabana.", activities: [{ icon: "🌊", title: "Aquaventure Waterpark Full Day", description: "Unlimited access to all rides including the world-famous Leap of Faith slide." }, { icon: "🐠", title: "The Lost Chambers Aquarium", description: "Walk through Ambassador Lagoon — 65,000 marine animals in an ancient Atlantis setting." }, { icon: "🏖️", title: "Private Beach Cabana", description: "Reserved beach cabana at Atlantis beach — butler service and unlimited sun loungers." }], tip: "Arrive at Aquaventure at 10 AM on weekdays — weekends and Fridays are packed.", image: "/images/destinations/dubai_2.jpg" },
      { dayNumber: 5, title: "Dubai Marina Yacht Cruise & Abu Dhabi Day Trip", tag: "MARINA YACHT", tagline: "Sail the Marina in a private yacht, then drive 1.5 hours to Abu Dhabi for the Grand Mosque.", activities: [{ icon: "⛵", title: "Private Yacht Cruise — Dubai Marina", description: "2-hour private catamaran around Palm Jumeirah and Dubai Marina skyline." }, { icon: "🕌", title: "Sheikh Zayed Grand Mosque Abu Dhabi", description: "1.5-hour drive to the world's 3rd largest mosque. Photography permitted — dress modestly." }, { icon: "🌃", title: "Ferrari World Abu Dhabi (Optional)", description: "World's fastest roller coaster — Formula Rossa at 240 km/h inside air-conditioned dome." }], tip: "Women must wear an abaya at Sheikh Zayed Mosque — available to borrow free at the entrance.", image: "/images/destinations/dubai_2.jpg" },
      { dayNumber: 6, title: "Gold & Spice Souk & Old Dubai Heritage Walk", tag: "OLD DUBAI", tagline: "Contrast the glitzy new with the historic old — Gold Souk, Spice Souk and Al Fahidi Fort.", activities: [{ icon: "🥇", title: "Gold Souk Browsing", description: "Dubai Gold Souk has over 300 outlets — some of the world's best gold prices." }, { icon: "🌶️", title: "Spice Souk Walk", description: "Fragrant lanes of saffron, rose petals, frankincense and exotic spices." }, { icon: "🚤", title: "Dubai Creek Abra (Water Taxi) Ride", description: "1 AED water taxi across Dubai Creek — the same wooden boats used for 200 years." }], tip: "Bargain in the Gold Souk — prices are negotiable and discounts of 10-20% are normal.", image: "/images/destinations/dubai_2.jpg" },
      { dayNumber: 7, title: "Departure from Dubai International", tag: "DEPARTURE", tagline: "Last morning at the pool, duty-free shopping and airport drop-off.", activities: [{ icon: "🏊", title: "Hotel Pool Final Morning", description: "Relaxed last morning by the infinity pool with views of the Dubai skyline." }, { icon: "✈️", title: "Chauffeur Airport Transfer", description: "Private car back to Dubai International Airport — Terminal 1, 2 or 3." }], tip: "Dubai duty-free is excellent — gold, perfumes and electronics are cheaper than most cities.", image: "/images/destinations/dubai_2.jpg" },
    ],
    hotels: [{ name: "Burj Al Arab Jumeirah", rating: "★★★★★★★", type: "Ultra-Luxury Iconic Hotel", location: "Jumeirah Beach, Dubai", image: "/images/destinations/dubai_2.jpg" }, { name: "Atlantis The Palm", rating: "★★★★★", type: "Beach Resort", location: "Palm Jumeirah, Dubai", image: "/images/destinations/dubai_2.jpg" }],
  },
  "dubai-short": {
    slug: "dubai-short", destination: "Dubai", title: "Dubai Quick Escape (Highlights in 4 Days)", duration: "3 Nights / 4 Days", heroImage: "/images/destinations/dubai_3.jpg", tagline: "Dubai's must-sees in just 4 days — the Frame, the Souk, the Fountain and the Desert", basePrice: 35000,
    days: [
      { dayNumber: 1, title: "Arrival & Dubai Frame Sunset", tag: "DUBAI FRAME", tagline: "Arrive, check in, and rise 150 metres in the world's largest picture frame.", activities: [{ icon: "✈️", title: "Airport Transfer to Hotel", description: "Shared transfer from Dubai International to your hotel in Bur Dubai or Deira." }, { icon: "🖼️", title: "Dubai Frame Entry", description: "The Frame connects old and new Dubai — panoramic views from the glass sky bridge." }, { icon: "🌃", title: "Dubai Creek Evening Walk", description: "Stroll along the Creek promenade with views of the dhow harbour at night." }], tip: "Book Dubai Frame tickets online — saving 20% on walk-in price.", image: "/images/destinations/dubai_3.jpg" },
      { dayNumber: 2, title: "Burj Khalifa & Dubai Mall", tag: "BURJ KHALIFA", tagline: "Level 124 of the world's tallest building and the world's largest mall.", activities: [{ icon: "🌆", title: "Burj Khalifa At the Top (Level 124)", description: "Pre-booked sunset slot with 360° views of Dubai from 452 metres." }, { icon: "⛲", title: "Dubai Fountain Show", description: "Watch the 900-metre musical fountain from the lakeside terrace." }, { icon: "🛍️", title: "Dubai Mall Exploration", description: "Largest mall in the world — ice rink, aquarium, kids' play area and 1,200 stores." }], tip: "Pre-book Burj Khalifa tickets online for 30–40% discount and skip-the-line access.", image: "/images/destinations/dubai_3.jpg" },
      { dayNumber: 3, title: "Desert Safari & Gold Souk", tag: "DESERT SAFARI", tagline: "Morning souk, afternoon dunes — a complete Dubai day in two halves.", activities: [{ icon: "🥇", title: "Gold Souk & Spice Souk Morning", description: "2-hour morning exploration of Dubai's famous gold and spice markets in Deira." }, { icon: "🏜️", title: "Shared Desert Safari with BBQ Dinner", description: "4×4 dune bashing, camel ride, sandboarding and BBQ buffet dinner at desert camp." }, { icon: "💃", title: "Belly Dance & Tanoura Show", description: "Live cultural performances at the desert camp under a canopy of stars." }], tip: "The desert evening cools down significantly — bring a light jacket.", image: "/images/destinations/dubai_3.jpg" },
      { dayNumber: 4, title: "Dubai Mall Fountain Show & Departure", tag: "DEPARTURE", tagline: "Last morning at Dubai Marina Walk, airport drop-off.", activities: [{ icon: "🚶", title: "Dubai Marina Walk", description: "Morning stroll along the Marina waterfront — yachts, cafes and modern skyline." }, { icon: "✈️", title: "Airport Transfer & Departure", description: "Shared transfer to Dubai International Airport. Check-in 3 hours early for international flights." }], tip: "Dubai Marina Walk is best experienced before 10 AM to avoid the afternoon heat.", image: "/images/destinations/dubai_3.jpg" },
    ],
    hotels: [{ name: "Citymax Hotel Bur Dubai", rating: "★★★★", type: "Budget City Hotel", location: "Bur Dubai", image: "/images/destinations/dubai_3.jpg" }],
  },

  // ── THAILAND VARIANTS ──
  "thailand-phuket": {
    slug: "thailand-phuket", destination: "Thailand", title: "Thailand Phuket & Phi Phi Island Luxury Escape", duration: "6 Nights / 7 Days", heroImage: "/images/destinations/thailand_2.jpg", tagline: "James Bond Island, Phi Phi's limestone cliffs, Phang Nga kayaking and Phuket beaches", basePrice: 55000,
    days: [
      { dayNumber: 1, title: "Arrive Phuket & Patong Beach Sunset", tag: "PHUKET", tagline: "Arrive in Phuket, transfer to Patong and watch your first Andaman Sea sunset.", activities: [{ icon: "✈️", title: "Phuket Airport Transfer", description: "Private van to your Patong or Kata Beach hotel — approximately 45 minutes." }, { icon: "🏖️", title: "Patong Beach Sunset Walk", description: "Stroll along the famous Bangla Road beach front — vibrant, colourful and alive." }, { icon: "🍜", title: "Thai Street Food Evening", description: "Guided street food walk — pad Thai, mango sticky rice, grilled satay and fresh coconut." }], tip: "Patong is vibrant but noisy at night — request a room away from Bangla Road for good sleep.", image: "/images/destinations/thailand_2.jpg" },
      { dayNumber: 2, title: "Phi Phi Island Full-Day Speedboat Tour", tag: "PHI PHI ISLANDS", tagline: "Maya Bay (The Beach), Viking Cave, Monkey Beach and crystal-clear bays.", activities: [{ icon: "🚤", title: "Speedboat to Phi Phi Don", description: "45-minute speedboat from Phuket Rassada Pier to Phi Phi island cluster." }, { icon: "🏝️", title: "Maya Bay Snorkeling & Swimming", description: "The bay featured in the movie The Beach — surreal limestone cliffs and turquoise water." }, { icon: "🐒", title: "Monkey Beach", description: "Longtail boat to Monkey Beach — wild macaques come right up to the boat." }], tip: "Maya Bay now restricts visitor numbers — arrive at 8 AM to avoid peak crowds.", image: "/images/destinations/thailand_2.jpg" },
      { dayNumber: 3, title: "James Bond Island & Phang Nga Bay Kayaking", tag: "JAMES BOND", tagline: "The limestone karst that launched a thousand postcards — and sea kayak caves underneath.", activities: [{ icon: "🎬", title: "James Bond Island (Ko Tapu)", description: "The iconic needle-rock from The Man with the Golden Gun — surrounded by emerald bay." }, { icon: "🛶", title: "Sea Cave Kayaking", description: "Kayak through limestone caves and hongs (hidden lagoons) only accessible at low tide." }, { icon: "🦝", title: "Floating Muslim Fishing Village", description: "Visit Ko Panyi — a traditional village of 1,000 people built entirely on stilts over the sea." }], tip: "The sea caves are only accessible at low tide — your guide will coordinate timing automatically.", image: "/images/destinations/thailand_2.jpg" },
      { dayNumber: 4, title: "Big Buddha & Phuket Old Town Heritage", tag: "OLD TOWN", tagline: "The marble Buddha that watches over Phuket, and the Sino-Portuguese streets of old town.", activities: [{ icon: "🛕", title: "Big Buddha Viewpoint", description: "45-metre white Burmese marble Buddha on Nakkerd Hill — 360° island views." }, { icon: "🏛️", title: "Phuket Old Town Walking Tour", description: "Sino-Portuguese shophouses, Shrine of Serene Light, local cafes and street art." }, { icon: "🌊", title: "Karon Viewpoint Sunset", description: "Three-bay overlook at sunset — Karon, Kata and Kata Noi beaches from above." }], tip: "Dress modestly at Big Buddha — shoulders and knees must be covered. Sarongs available on-site.", image: "/images/destinations/thailand_2.jpg" },
      { dayNumber: 5, title: "Similan Islands Snorkel Day Trip", tag: "SIMILAN ISLANDS", tagline: "World's top 10 snorkeling destination — unreal visibility and fish diversity.", activities: [{ icon: "🤿", title: "Similan Islands Snorkeling", description: "Full-day boat trip to the Similan archipelago (UNESCO protected) — multiple snorkel stops." }, { icon: "🐠", title: "Coral Garden Drift Snorkel", description: "Snorkel over pristine hard coral gardens with hawksbill turtles and leopard sharks." }, { icon: "🏝️", title: "Similan Island 8 Beach Walk", description: "Walk on the island's famous boulder-fringed white beach — a photographer's paradise." }], tip: "Similan trips depart at 7 AM — eat a light breakfast and take seasickness tablets beforehand.", image: "/images/destinations/thailand_2.jpg" },
      { dayNumber: 6, title: "Thai Cooking Class & Elephant Sanctuary", tag: "THAI CULTURE", tagline: "Cook authentic Thai food with a chef, then spend the afternoon with ethical elephants.", activities: [{ icon: "🍳", title: "Thai Cooking Class (5 Dishes)", description: "Market visit, recipe cards and hands-on cooking of green curry, pad Thai, spring rolls and more." }, { icon: "🐘", title: "Ethical Elephant Sanctuary Half-Day", description: "Feed, walk and mud-bath with rescued elephants. No riding — ethical sanctuary only." }, { icon: "🌴", title: "Freedom Beach Sunset Swim", description: "Longtail boat to secluded Freedom Beach for a final sunset swim in crystal water." }], tip: "Only visit ethical sanctuaries that prohibit elephant riding — Greenhill or Phuket Elephant Care.", image: "/images/destinations/thailand_2.jpg" },
      { dayNumber: 7, title: "Departure from Phuket International", tag: "DEPARTURE", tagline: "Final morning, beach breakfast and airport transfer.", activities: [{ icon: "🏖️", title: "Last Morning Beach Walk", description: "Quiet final stroll along Kata or Nai Harn beach before checkout." }, { icon: "✈️", title: "Airport Transfer to Phuket HKT", description: "Private vehicle to Phuket International Airport." }], tip: "Phuket International has good Thai handicraft shops in departures — budget 1 hour for shopping.", image: "/images/destinations/thailand_2.jpg" },
    ],
    hotels: [{ name: "Novotel Phuket Surin Beach", rating: "★★★★", type: "Beach Resort", location: "Surin Beach, Phuket", image: "/images/destinations/thailand_2.jpg" }, { name: "Phi Phi The Beach Resort", rating: "★★★★", type: "Island Beachfront", location: "Phi Phi Don Island", image: "/images/destinations/thailand_2.jpg" }],
  },
  "thailand-adventure": {
    slug: "thailand-adventure", destination: "Thailand", title: "Thailand Adventure (Chiang Mai Jungle Trek & Elephant Sanctuary)", duration: "7 Nights / 8 Days", heroImage: "/images/destinations/thailand_3.jpg", tagline: "Chiang Mai jungle trails, ethical elephants, Doi Inthanon summit and the Golden Triangle", basePrice: 48000,
    days: [
      { dayNumber: 1, title: "Arrive Bangkok & Night Safari", tag: "BANGKOK", tagline: "Land in Bangkok and head straight to the Night Safari — wild Thailand after dark.", activities: [{ icon: "✈️", title: "Bangkok Airport Transfer to Hotel", description: "Private van to your Bangkok hotel — Sukhumvit or Silom area." }, { icon: "🌙", title: "Dusit Zoo Night Safari (or Lumphini Park)", description: "Evening visit to see nocturnal animals in their active hours." }, { icon: "🍜", title: "Bangkok Street Food Night Walk", description: "Guided walk through Yaowarat (Chinatown) for the best street food in Asia." }], tip: "Yaowarat Road in Bangkok is best visited after 8 PM when all the carts open up.", image: "/images/destinations/thailand_3.jpg" },
      { dayNumber: 2, title: "Bangkok Temples & Chao Phraya River", tag: "BANGKOK TEMPLES", tagline: "Wat Pho, Wat Arun and a longtail boat through Bangkok's secret canals.", activities: [{ icon: "🛕", title: "Wat Pho — Reclining Buddha", description: "Thailand's largest reclining Buddha at 46 metres — gold leaf and mother-of-pearl feet." }, { icon: "⛵", title: "Longtail Boat Canal Tour", description: "Racing through Bangkok's khlongs — temples, markets and traditional floating houses." }, { icon: "🌅", title: "Wat Arun Sunset Climb", description: "Climb the steep towers of the Temple of Dawn for sunset views over the Chao Phraya." }], tip: "Wear knee-length or longer trousers and bring socks for Wat Pho — no shorts allowed.", image: "/images/destinations/thailand_3.jpg" },
      { dayNumber: 3, title: "Fly to Chiang Mai & Elephant Sanctuary", tag: "CHIANG MAI", tagline: "Fly north to Chiang Mai — cool mountains, ancient temples and rescued elephants await.", activities: [{ icon: "✈️", title: "Bangkok to Chiang Mai Domestic Flight", description: "1-hour domestic flight to Chiang Mai — included in the package." }, { icon: "🐘", title: "Elephant Sanctuary Half-Day Visit", description: "Feed, walk alongside and mud-bathe with rescued elephants at an ethical sanctuary." }, { icon: "🌿", title: "Chiang Mai Old City Evening Walk", description: "Walk the moat-ringed old city — Tha Phae Gate, lantern shops and local eateries." }], tip: "Elephant Nature Park is the gold standard for ethical elephant encounters in Chiang Mai.", image: "/images/destinations/thailand_3.jpg" },
      { dayNumber: 4, title: "Doi Inthanon National Park Summit", tag: "DOI INTHANON", tagline: "Thailand's highest peak at 2,565 metres — waterfalls, twin chedis and cloud forest.", activities: [{ icon: "🏔️", title: "Doi Inthanon Summit (2,565 m)", description: "Drive to the top of Thailand's highest mountain — cool, misty and dramatically green." }, { icon: "💧", title: "Wachirathan Waterfall", description: "Thailand's most powerful waterfall — mist-spray photography on the viewing platform." }, { icon: "🏯", title: "Twin Royal Chedis & Flower Gardens", description: "Two beautiful pagodas built for the royal couple — surrounded by temperate wildflowers." }], tip: "Pack a jacket — the summit is often 10°C cooler than Chiang Mai city. Rain is frequent.", image: "/images/destinations/thailand_3.jpg" },
      { dayNumber: 5, title: "Jungle Trek & Hmong Hill Tribe Village", tag: "JUNGLE TREK", tagline: "Trek through the rainforest canopy, cross bamboo bridges and meet the Hmong people.", activities: [{ icon: "🌿", title: "Half-Day Guided Jungle Trek", description: "Trek through secondary rainforest with an experienced hill-tribe guide from Mae Kampong village." }, { icon: "🏘️", title: "Hmong Hill Tribe Village Visit", description: "Meet a traditional Hmong community — silver jewellery, indigo weaving and local cuisine." }, { icon: "🎋", title: "Bamboo Rafting on Mae Taeng River", description: "1-hour bamboo raft float through the forested river valley." }], tip: "Wear ankle-length trekking shoes — leeches are common in the forest after rain.", image: "/images/destinations/thailand_3.jpg" },
      { dayNumber: 6, title: "Golden Triangle & Mekong River", tag: "GOLDEN TRIANGLE", tagline: "Where Thailand, Laos and Myanmar meet — the Mekong River and opium museum.", activities: [{ icon: "🌊", title: "Mekong River Boat Ride", description: "Longtail boat at the confluence of the Mekong — three countries visible at once." }, { icon: "🏛️", title: "Hall of Opium Museum", description: "World-class museum documenting the history of the Golden Triangle opium trade." }, { icon: "🛕", title: "Wat Phra That Doi Wao", description: "Temple overlooking Myanmar border from a hilltop — dramatic sunset views." }], tip: "The Golden Triangle is a 3-hour drive from Chiang Mai — arrange early departure.", image: "/images/destinations/thailand_3.jpg" },
      { dayNumber: 7, title: "Thai Cooking Class & Night Bazaar", tag: "THAI COOKING", tagline: "Cook 5 authentic Thai dishes in a farm kitchen, then shop at the famous Night Bazaar.", activities: [{ icon: "🍳", title: "Thai Cooking Class at Farm Kitchen", description: "Farm-to-table class at an organic garden — make khao soi, green curry and mango dessert." }, { icon: "🛍️", title: "Chiang Mai Sunday Night Bazaar", description: "Kilometre-long walking market on Wualai Road — silk, ceramics, teak carvings, lanterns." }, { icon: "🏮", title: "Khom Loi Lantern Release (If Available)", description: "Release a glowing sky lantern at the Yi Peng festival or tourist lantern spots." }], tip: "The Chiang Mai Sunday Night Bazaar only operates on Sundays — plan accordingly.", image: "/images/destinations/thailand_3.jpg" },
      { dayNumber: 8, title: "Chiang Mai to Departure", tag: "DEPARTURE", tagline: "Final morning wai greeting, airport transfer and flight home.", activities: [{ icon: "🛕", title: "Doi Suthep Temple Morning Visit", description: "If timing allows, visit Chiang Mai's most sacred temple on the hill above the city." }, { icon: "✈️", title: "Chiang Mai Airport Transfer", description: "Private transfer to Chiang Mai International Airport." }], tip: "Chiang Mai airport is small — arrive 2 hours before international flights.", image: "/images/destinations/thailand_3.jpg" },
    ],
    hotels: [{ name: "Anantara Chiang Mai Resort", rating: "★★★★★", type: "Boutique River Resort", location: "Chiang Mai City", image: "/images/destinations/thailand_3.jpg" }, { name: "Novotel Bangkok Suvarnabhumi", rating: "★★★★", type: "Airport Hotel", location: "Bangkok", image: "/images/destinations/thailand_3.jpg" }],
  },

  // ── BALI VARIANTS ──
  "bali-budget": {
    slug: "bali-budget", destination: "Bali", title: "Bali Budget Backpacker (Culture & Rice Terrace Trail)", duration: "5 Nights / 6 Days", heroImage: "/images/destinations/bali_2.jpg", tagline: "Tegallalang terraces, Tanah Lot, Ubud markets and Kuta beach — maximum Bali, minimum budget", basePrice: 22000,
    days: [
      { dayNumber: 1, title: "Arrive Bali & Kuta Beach Orientation", tag: "KUTA", tagline: "Touch down in Bali — the island smells of frangipani and sea salt.", activities: [{ icon: "✈️", title: "Airport Transfer to Kuta Hotel", description: "Shared transfer from Ngurah Rai Airport to your Kuta or Legian guesthouse." }, { icon: "🏖️", title: "Kuta Beach Sunset Walk", description: "Bali's most famous beach — body-surfers, kite flyers and a golden sunset." }, { icon: "🍜", title: "Warung Dinner — Nasi Goreng", description: "Dinner at a local warung — nasi goreng, mie goreng and satay lilit under ₹500." }], tip: "Bargain at the Kuta market — opening prices are 3× the real price.", image: "/images/destinations/bali_2.jpg" },
      { dayNumber: 2, title: "Ubud Monkey Forest & Tegallalang Rice Terraces", tag: "UBUD", tagline: "The artistic heart of Bali — monkeys, terraced rice paddies and silver craft villages.", activities: [{ icon: "🐒", title: "Sacred Monkey Forest Ubud", description: "Walk through ancient Hindu temples inhabited by 700 free-roaming Balinese macaques." }, { icon: "🌾", title: "Tegallalang Rice Terraces", description: "Instagram-famous rice terraces sculpted by hand over centuries using the subak irrigation system." }, { icon: "🎨", title: "Ubud Art Market", description: "Browse handmade batik, wood carvings, silver jewellery and Balinese paintings at great prices." }], tip: "Don't feed the monkeys at the forest — they'll mob you for bags and glasses.", image: "/images/destinations/bali_2.jpg" },
      { dayNumber: 3, title: "Tanah Lot Sea Temple Sunset", tag: "TANAH LOT", tagline: "Bali's most photographed temple — built on a sea rock at the edge of the Indian Ocean.", activities: [{ icon: "🌊", title: "Tanah Lot Temple Visit at Sunset", description: "The 16th century sea temple perched on a rock offshore — best seen at low-tide sunset." }, { icon: "🐍", title: "Sea Snake Blessing at Shore", description: "Holy sea snakes guard the temple cave — priests offer an optional snake-blessing ceremony." }, { icon: "🛍️", title: "Tanah Lot Craft Market", description: "500-metre craft market leading to the temple — cheap sarongs, incense and souvenirs." }], tip: "Arrive 1 hour before sunset to get the best spot on the cliff above the temple.", image: "/images/destinations/bali_2.jpg" },
      { dayNumber: 4, title: "Mount Batur Sunrise Trek", tag: "MOUNT BATUR", tagline: "3:30 AM start — climb the active volcano and watch sunrise from the crater rim.", activities: [{ icon: "🌋", title: "Mount Batur Trek (1,717 m)", description: "2-hour guided night ascent on lava trail. Sunrise over Lake Batur and Mount Agung — stunning." }, { icon: "🍳", title: "Breakfast Cooked in Volcanic Steam", description: "Unique breakfast of eggs steamed in volcanic vents at the summit — a Batur tradition." }, { icon: "♨️", title: "Hot Springs at Lake Batur", description: "Descend to natural volcanic hot springs on the lake shore for post-trek recovery." }], tip: "Wear proper trekking shoes — the lava trail is loose and slippery at night.", image: "/images/destinations/bali_2.jpg" },
      { dayNumber: 5, title: "Uluwatu Cliff Temple & Kecak Fire Dance", tag: "ULUWATU", tagline: "The cliff temple at 70 metres above the Indian Ocean, and the fire dance at dusk.", activities: [{ icon: "🛕", title: "Pura Luhur Uluwatu Temple", description: "11th century cliff-top sea temple — long-tailed macaques patrol the grounds." }, { icon: "🔥", title: "Kecak Fire Dance Performance", description: "90-minute traditional fire dance performed at the cliff-top amphitheatre at sunset — unmissable." }, { icon: "🦞", title: "Jimbaran Bay Seafood BBQ Dinner", description: "Tables on the beach, fresh-caught lobster and prawns grilled over coconut shells." }], tip: "Secure your sunglasses and phone at Uluwatu — monkeys are trained thieves.", image: "/images/destinations/bali_2.jpg" },
      { dayNumber: 6, title: "Departure from Ngurah Rai Airport", tag: "DEPARTURE", tagline: "Morning beach walk, airport transfer and goodbye Bali.", activities: [{ icon: "🏖️", title: "Seminyak Beach Morning Walk", description: "Quiet sunrise walk on the upscale Seminyak strip — fewer crowds than Kuta." }, { icon: "✈️", title: "Airport Transfer", description: "Shared transfer to Ngurah Rai International Airport." }], tip: "Bali airport has strict 20 kg luggage limits on budget airlines — check before check-in.", image: "/images/destinations/bali_2.jpg" },
    ],
    hotels: [{ name: "Kuta Beach Heritage Hotel", rating: "★★★", type: "Budget Beach Hotel", location: "Kuta, Bali", image: "/images/destinations/bali_2.jpg" }],
  },
  "bali-surf": {
    slug: "bali-surf", destination: "Bali", title: "Bali Surf & Spa Luxury Retreat", duration: "7 Nights / 8 Days", heroImage: "/images/destinations/bali_3.jpg", tagline: "Seminyak surf breaks, full-day Balinese spa, Jimbaran candle dinner and Nusa Penida cliffs", basePrice: 68000,
    days: [
      { dayNumber: 1, title: "Arrive Bali & Seminyak Luxury Hotel Check-In", tag: "SEMINYAK", tagline: "Bali's most fashionable beach neighbourhood — boutiques, beach clubs and breezy villas.", activities: [{ icon: "✈️", title: "Private Airport Transfer", description: "Private car from Ngurah Rai to your Seminyak villa or 5-star hotel." }, { icon: "🌅", title: "Potato Head Beach Club Sunset", description: "Iconic sunset cocktail at Seminyak's most celebrated beach club — reserve a day bed." }, { icon: "🍽️", title: "Metis Restaurant Fine Dining", description: "French-Balinese fusion dinner in a colonial mansion garden — a Seminyak institution." }], tip: "Reserve your Potato Head sunbed 48 hours in advance — minimum spend applies.", image: "/images/destinations/bali_3.jpg" },
      { dayNumber: 2, title: "Beginner Surf Lesson — Kuta Beach", tag: "SURFING", tagline: "Kuta has the world's most learner-friendly waves — you'll be standing within 2 hours.", activities: [{ icon: "🏄", title: "2-Hour Private Surf Lesson", description: "1-on-1 lesson with an ISA-certified surf instructor on the gentlest waves in Bali." }, { icon: "🌊", title: "Free Surf Session", description: "2 additional hours with a board to practice on your own — instructor watching." }, { icon: "🍹", title: "Beachside Smoothie Bowl Lunch", description: "Acai bowl, dragon fruit smoothie and coconut coffee at a Kuta beach cafe." }], tip: "The best surf conditions at Kuta are 7–10 AM — water is calmer before afternoon wind.", image: "/images/destinations/bali_3.jpg" },
      { dayNumber: 3, title: "Full-Day Balinese Spa & Wellness", tag: "SPA DAY", tagline: "Balinese massage, coffee scrub, floral bath and chakra healing — a full body reset.", activities: [{ icon: "💆", title: "Balinese Full-Body Massage (90 min)", description: "Traditional 4-hand or single Balinese massage using coconut and frangipani oils." }, { icon: "🛁", title: "Milk & Rose Petal Bath", description: "Relaxing flower bath soak followed by a Bali coffee scrub exfoliation treatment." }, { icon: "🧘", title: "Sound Bowl Healing Session", description: "Tibetan singing bowl therapy at the resort's open-air meditation pavilion." }], tip: "Ask for a 'Balinese massage' specifically — Javanese-style massages are firmer and different.", image: "/images/destinations/bali_3.jpg" },
      { dayNumber: 4, title: "Nusa Penida Day Trip — Kelingking Beach", tag: "NUSA PENIDA", tagline: "The T-Rex cliff — Bali's most dramatic viewpoint on the wild sister island.", activities: [{ icon: "🚤", title: "Speed Boat from Sanur to Nusa Penida", description: "30-minute fast boat crossing to Bali's most spectacular neighbour island." }, { icon: "🦕", title: "Kelingking Viewpoint (T-Rex Head Cliff)", description: "The most iconic viewpoint in Bali — a cliff shaped like a T-Rex head above turquoise coves." }, { icon: "🤿", title: "Crystal Bay Snorkeling", description: "Snorkel with oceanic sunfish (mola mola) — only visible August–October." }], tip: "The Kelingking hike down to the beach is extremely steep — only for fit and fearless travellers.", image: "/images/destinations/bali_3.jpg" },
      { dayNumber: 5, title: "Ubud Private Villa Day & Rice Terrace Cycle", tag: "UBUD", tagline: "Cycle through Balinese villages, visit a luwak coffee farm and watch traditional dance.", activities: [{ icon: "🚵", title: "Downhill Rice Terrace Cycling", description: "2-hour guided bicycle ride through Tegallalang rice paddies, temples and farmers' markets." }, { icon: "☕", title: "Luwak Coffee Plantation Tour", description: "Visit an organic coffee farm — taste the world's most expensive coffee made from civet beans." }, { icon: "💃", title: "Barong Dance Performance", description: "Traditional Balinese Barong & Kris dance performance in Batubulan village." }], tip: "Luwak coffee is controversial — only visit farms that allow civets to roam freely.", image: "/images/destinations/bali_3.jpg" },
      { dayNumber: 6, title: "Jimbaran Candle Beach Dinner & Spa Evening", tag: "JIMBARAN", tagline: "Barefoot on the beach, candles in the sand and the freshest seafood in Bali.", activities: [{ icon: "🦞", title: "Jimbaran Bay Candle Dinner", description: "Choose your seafood at the market, then have it grilled and served by candlelight on the beach." }, { icon: "🌊", title: "Balangan Cliff Beach Swim", description: "Hidden beach at the base of Bukit cliffs — raw, beautiful and uncrowded." }, { icon: "💆", title: "Evening Reki & Flower Bath at Spa", description: "Twilight spa treatment at your hotel — reiki energy healing and jasmine flower bath." }], tip: "Choose a Jimbaran bay seafood cafe with fixed menus to avoid inflated tourist pricing.", image: "/images/destinations/bali_3.jpg" },
      { dayNumber: 7, title: "Canggu Surf & Digital Nomad Neighbourhood", tag: "CANGGU", tagline: "Bali's hippest neighbourhood — Echo Beach surf break, rice paddy cafes and vintage shops.", activities: [{ icon: "🏄", title: "Canggu Echo Beach Morning Surf", description: "Intermediate-level surf break popular with expats — rent a board and join the lineup." }, { icon: "☕", title: "Breakfast at Berawa Rice Paddy Cafe", description: "Iconic café surrounded by living rice terraces — avocado toast and single-origin coffee." }, { icon: "🛍️", title: "Deus Ex Machina & Vintage Market", description: "Legendary surf brand's Canggu garage/temple — vintage bikes, surfboards and specialty coffee." }], tip: "Canggu is best explored by scooter — renting one for ₹200/day is easy and common.", image: "/images/destinations/bali_3.jpg" },
      { dayNumber: 8, title: "Departure from Bali — Last Sunrise", tag: "DEPARTURE", tagline: "Final morning at the beach, packing and airport transfer.", activities: [{ icon: "🌅", title: "Seminyak Sunrise Walk", description: "The Seminyak beach at 6 AM — empty, golden and deeply peaceful." }, { icon: "✈️", title: "Private Airport Transfer", description: "Private car to Ngurah Rai International Airport from your hotel." }], tip: "Pack your surfboards? Bali airport charges ₹1,500–₹3,000 for oversized luggage.", image: "/images/destinations/bali_3.jpg" },
    ],
    hotels: [{ name: "The Layar Private Villas Seminyak", rating: "★★★★★", type: "Private Pool Villa", location: "Seminyak, Bali", image: "/images/destinations/bali_3.jpg" }, { name: "Alaya Resort Ubud", rating: "★★★★★", type: "Jungle Retreat", location: "Ubud, Bali", image: "/images/destinations/bali_3.jpg" }],
  },

  // ── KERALA VARIANTS ──
  "kerala-honeymoon": {
    slug: "kerala-honeymoon", destination: "Kerala", title: "Kerala Romantic Honeymoon (Backwaters & Varkala Beach)", duration: "6 Nights / 7 Days", heroImage: "/images/destinations/kerala_2.jpg", tagline: "A private houseboat on the backwaters, Varkala cliff beach and Ayurveda for two", basePrice: 28000,
    days: [
      { dayNumber: 1, title: "Arrive Kochi & Fort Kochi Heritage Evening", tag: "KOCHI", tagline: "Arrive in Kerala's cosmopolitan port city — Chinese fishing nets and colonial charm.", activities: [{ icon: "✈️", title: "Kochi Airport Transfer to Fort Kochi", description: "Private car to Fort Kochi heritage zone — approximately 35 minutes from airport." }, { icon: "🎣", title: "Chinese Fishing Nets Sunset", description: "Watch the iconic cantilever Chinese fishing nets operate at sunset — a Kerala icon." }, { icon: "💑", title: "Romantic Fort Kochi Walk", description: "Stroll hand-in-hand through colonial Dutch and Portuguese streets under gas-lamp lighting." }], tip: "Fort Kochi is walkable and safe at night — the heritage quarter is magical after dark.", image: "/images/destinations/kerala_2.jpg" },
      { dayNumber: 2, title: "Munnar Hill Station & Tea Garden Walk", tag: "MUNNAR", tagline: "3.5-hour drive to the tea capital of India — cool, green and utterly romantic.", activities: [{ icon: "🌿", title: "Tea Museum & Plantation Walk", description: "Learn the tea-making process and walk through fragrant Tata Tea gardens in mist." }, { icon: "🦏", title: "Eravikulam National Park", description: "Home to the endangered Nilgiri Tahr — spotted at very close range on the mountain grasslands." }, { icon: "💑", title: "Couple's Bonfire & Stargazing", description: "Evening bonfire with your private guide at the resort garden — clear Munnar skies." }], tip: "Munnar fog arrives every evening — pack a light jacket. The mist is romantic, not inconvenient.", image: "/images/destinations/kerala_2.jpg" },
      { dayNumber: 3, title: "Thekkady — Spice Trail & Periyar Lake", tag: "THEKKADY", tagline: "The scent of cardamom is everywhere — spice farms, an elephant reserve and a bamboo raft.", activities: [{ icon: "🌶️", title: "Spice Plantation Tour", description: "Walk through cardamom, pepper, cinnamon and vanilla at a private spice estate." }, { icon: "🐘", title: "Periyar Lake Boat Safari", description: "1.5-hour government boat through the tiger reserve — elephants seen on the shore most days." }, { icon: "🎋", title: "Bamboo Rafting & Nature Walk", description: "Early morning bamboo raft with forest ranger through the core zone of Periyar." }], tip: "Book the KTDC bamboo raft tour in advance — only 8 people allowed per batch.", image: "/images/destinations/kerala_2.jpg" },
      { dayNumber: 4, title: "Private Houseboat Stay on Alleppey Backwaters", tag: "HOUSEBOAT", tagline: "Your private home on water — drifting through Kerala's green canals at 2 knots.", activities: [{ icon: "🚢", title: "Luxury Houseboat Embarkation", description: "Board your private 2-bedroom houseboat from Alleppey jetty. Chef, captain and crew included." }, { icon: "🛶", title: "Village Canoe Excursion", description: "Small canoe through narrow village canals — see traditional Kerala life up close." }, { icon: "🦀", title: "Onboard Kerala Seafood Lunch & Dinner", description: "Fresh karimeen (pearl spot fish) curry, appam and prawn coconut curry prepared by your chef." }], tip: "Book a houseboat with AC bedrooms — Kerala nights can be warm on the water.", image: "/images/destinations/kerala_2.jpg" },
      { dayNumber: 5, title: "Varkala Cliff Beach & Papanasam Bay", tag: "VARKALA", tagline: "Kerala's only cliff beach — terracotta cliffs, mineral springs and Ayurveda cafes.", activities: [{ icon: "🏖️", title: "Varkala North Cliff Stroll", description: "Walk along the cliff-top path lined with Ayurveda masseurs, juice bars and hammocks." }, { icon: "🌊", title: "Papanasam Beach Swim", description: "Sacred beach where Hindus perform rituals — calm waves and golden sand." }, { icon: "💆", title: "Ayurveda Couple's Massage", description: "Traditional Abhyanga couples massage at a Kerala Ayurveda centre on the cliff." }], tip: "Varkala cliff restaurants are expensive but the sunset views make it worth it — negotiate menu prices.", image: "/images/destinations/kerala_2.jpg" },
      { dayNumber: 6, title: "Kovalam Beach & Lighthouse Sunset", tag: "KOVALAM", tagline: "Kerala's most famous beach — three crescent bays below a colonial lighthouse.", activities: [{ icon: "🏖️", title: "Hawah Beach & Lighthouse Beach Walk", description: "Two adjacent beaches connected by a rocky headland — lighthouse visible from the sand." }, { icon: "🦞", title: "Fresh Catch Seafood Lunch at Beach Restaurant", description: "Choose your tiger prawns, lobster or sea bass at a beach-front restaurant — grilled to order." }, { icon: "🌅", title: "Lighthouse Sunset Photography", description: "Climb Kovalam Lighthouse for the best sunset panorama over the Arabian Sea." }], tip: "Kovalam lighthouse is open until 6 PM — check the schedule with your guide.", image: "/images/destinations/kerala_2.jpg" },
      { dayNumber: 7, title: "Departure from Trivandrum Airport", tag: "DEPARTURE", tagline: "Packed breakfast, final Kerala coconut water and airport drop-off.", activities: [{ icon: "🌴", title: "Morning Beach Walk", description: "Final quiet walk on Kovalam or Varkala beach before checkout." }, { icon: "✈️", title: "Transfer to Trivandrum International Airport", description: "Private car from your hotel to TRV Airport — approximately 15 km." }], tip: "Trivandrum Airport has limited international flights — check your connection timing carefully.", image: "/images/destinations/kerala_2.jpg" },
    ],
    hotels: [{ name: "CGH Earth Spice Village Thekkady", rating: "★★★★", type: "Eco Jungle Cottages", location: "Thekkady", image: "/images/destinations/kerala_2.jpg" }, { name: "Vivanta Kovalam, Taj Hotels", rating: "★★★★★", type: "Cliff-Side Sea Resort", location: "Kovalam Beach", image: "/images/destinations/kerala_2.jpg" }],
  },
  "kerala-wildlife": {
    slug: "kerala-wildlife", destination: "Kerala", title: "Kerala Wildlife & Waterfalls (Periyar, Athirapally & Wayanad)", duration: "7 Nights / 8 Days", heroImage: "/images/destinations/kerala_3.jpg", tagline: "Periyar tigers, Athirapally falls, Wayanad treehouse and silent valley trails", basePrice: 24000,
    days: [
      { dayNumber: 1, title: "Arrive Kochi & Drive to Wayanad", tag: "WAYANAD", tagline: "Arrive in Kochi and make your way to the misty forests of Wayanad.", activities: [{ icon: "✈️", title: "Kochi Airport to Wayanad", description: "4-hour scenic drive through rubber and coffee plantations into the Western Ghats." }, { icon: "🌿", title: "Bamboo Treehouse Check-In", description: "Settle into your eco bamboo treehouse perched above the jungle floor." }, { icon: "🌙", title: "Night Sound Walk with Naturalist", description: "1-hour guided night walk to spot civets, flying squirrels and nightjars." }], tip: "Wayanad roads are narrow and winding — avoid driving at night.", image: "/images/destinations/kerala_3.jpg" },
      { dayNumber: 2, title: "Chembra Peak Trek & Heart Lake", tag: "CHEMBRA", tagline: "Trek to Wayanad's highest peak — a heart-shaped lake that never dries awaits at the top.", activities: [{ icon: "🏔️", title: "Chembra Peak Trek (2,100 m)", description: "6-hour guided trek through shola grasslands and dense forest to the summit plateau." }, { icon: "💙", title: "Heart Lake at Chembra", description: "A naturally heart-shaped perennial lake at 1,800 m — unique geological phenomenon." }, { icon: "🦅", title: "Eagle-Spotting at Summit", description: "Changeable hawk-eagles and mountain hawk-eagles patrol the ridgeline at Chembra." }], tip: "The forest department requires a guide for Chembra trek — book at the base camp gate.", image: "/images/destinations/kerala_3.jpg" },
      { dayNumber: 3, title: "Athirapally Waterfalls — Kerala's Niagara", tag: "ATHIRAPALLY", tagline: "The most powerful waterfall in Kerala — 24 metres of roaring white water through forest.", activities: [{ icon: "💧", title: "Athirapally Falls Main Viewpoint", description: "India's largest waterfall — best after monsoon. Walk to the base for close-up spray." }, { icon: "💧", title: "Vazhachal Falls Trekking Path", description: "1-km forest trail beside a series of smaller cascades — rich bird and butterfly life." }, { icon: "🐦", title: "Chalakudy River Birding", description: "Chalakudy River is a globally recognised Important Bird Area — hornbills, kingfishers." }], tip: "Go in August–September for maximum water flow at Athirapally.", image: "/images/destinations/kerala_3.jpg" },
      { dayNumber: 4, title: "Periyar Tiger Reserve — Boat & Walking Safari", tag: "PERIYAR", tagline: "Kerala's premier wildlife reserve — elephants at the water's edge are almost guaranteed.", activities: [{ icon: "🐘", title: "Periyar Lake Morning Boat Safari", description: "1.5-hour KTDC boat safari through the core zone — elephant herds bathe in the lake." }, { icon: "🐅", title: "Forest Walk Inside Tiger Reserve", description: "3-hour guided forest walk with armed KFDC ranger inside tiger buffer zone." }, { icon: "🌶️", title: "Spice Estate Lunch", description: "Lunch at a plantation bungalow — Kerala sadya on banana leaf with freshly harvested spices." }], tip: "The 6 AM boat run has the highest wildlife sighting rates — book this slot.", image: "/images/destinations/kerala_3.jpg" },
      { dayNumber: 5, title: "Silent Valley National Park — Core Wilderness", tag: "SILENT VALLEY", tagline: "One of Earth's last undisturbed tropical rainforests — a UNESCO World Heritage Site.", activities: [{ icon: "🌳", title: "Silent Valley Core Zone Jeep Safari", description: "Guided jeep safari into the UNESCO-listed rainforest — lion-tailed macaques guaranteed." }, { icon: "🦋", title: "Butterfly Count & Moth Survey", description: "Silent Valley has the highest butterfly diversity in India — bring a macro lens." }, { icon: "🌿", title: "Kuntipuzha River Walk", description: "Walk along the crystal-clear Kuntipuzha river through pristine shola forest." }], tip: "Entry to Silent Valley core zone requires prior permit — your guide will arrange this.", image: "/images/destinations/kerala_3.jpg" },
      { dayNumber: 6, title: "Eravikulam National Park & Munnar Tea Town", tag: "ERAVIKULAM", tagline: "The highest-altitude national park in South India — Nilgiri Tahr at arm's length.", activities: [{ icon: "🦏", title: "Eravikulam Nilgiri Tahr Walk", description: "Endemic Nilgiri Tahr (mountain goat) approach within 2 metres on the grassland trail." }, { icon: "🌿", title: "Kolukkumalai Jeep Safari to Highest Tea Estate", description: "4×4 jeep to the world's highest organic tea estate — breathtaking sunrise views." }, { icon: "🍵", title: "Tea Tasting & Factory Tour", description: "See the full orthodox tea processing and taste 8 varieties of Munnar single-estate tea." }], tip: "Kolukkumalai jeep trail is very rough — not suitable for people with back problems.", image: "/images/destinations/kerala_3.jpg" },
      { dayNumber: 7, title: "Kochi Backwaters & Fort Kochi Final Day", tag: "KOCHI", tagline: "A final day of Kerala culture — Chinese fishing nets, Kathakali and a spice market.", activities: [{ icon: "🎣", title: "Chinese Fishing Nets at Sunrise", description: "The most photographed scene in Kerala — nets operated by hand at the Fort Kochi shore." }, { icon: "🎭", title: "Kathakali Performance", description: "Witness Kerala's ancient dance drama — 3 hours of makeup, drumming and mythological storytelling." }, { icon: "🛍️", title: "Mattancherry Spice Market", description: "The oldest spice trading quarter in India — wholesale prices on cardamom, pepper and cinnamon." }], tip: "Kathakali make-up application starts 2 hours before the performance — arrive early to see it.", image: "/images/destinations/kerala_3.jpg" },
      { dayNumber: 8, title: "Departure from Kochi Airport", tag: "DEPARTURE", tagline: "Final morning coconut water and Kochi airport send-off.", activities: [{ icon: "🌴", title: "Marine Drive Morning Walk", description: "Breezy walk along Kochi's Marine Drive waterfront — boathouses and Nehru Trophy route." }, { icon: "✈️", title: "Kochi International Airport Transfer", description: "Private car to COK airport — 35 km from Fort Kochi." }], tip: "Kochi airport has a good Kerala craft store — pick up kasavu sarees and spice boxes.", image: "/images/destinations/kerala_3.jpg" },
    ],
    hotels: [{ name: "Pepper Trail Thekkady", rating: "★★★★", type: "Jungle Eco Lodge", location: "Thekkady", image: "/images/destinations/kerala_3.jpg" }, { name: "Wayanad Nature Resort", rating: "★★★★", type: "Bamboo Treehouse Cottages", location: "Vythiri, Wayanad", image: "/images/destinations/kerala_3.jpg" }],
  },
};

// Variant-specific itinerary entries (indexed by package ID)
// These extend ITINERARIES with unique content for each package variant
export const VARIANT_ITINERARIES: Record<string, ItineraryData> = {
  "rajasthan-palace": {
    slug: "rajasthan-palace", destination: "Rajasthan", title: "Rajasthan Palace Luxury (Udaipur & Pushkar Heritage Tour)", duration: "6 Nights / 7 Days", heroImage: "/images/destinations/rajasthan_2.jpg", tagline: "City of Lakes, floating palaces, camel fairs and romantic Pushkar ghats", basePrice: 38000,
    days: [
      { dayNumber: 1, title: "Arrive Udaipur — City of Lakes", tag: "UDAIPUR", tagline: "Touch down in Udaipur and be transported into a fairy tale of lakes and white marble.", activities: [{ icon: "✈️", title: "Airport Transfer to Udaipur Hotel", description: "Private car from Udaipur Airport to your lake-view heritage hotel." }, { icon: "🚤", title: "Lake Pichola Evening Boat Ride", description: "Sunset boat ride on Lake Pichola with views of the City Palace and Jag Mandir Island." }, { icon: "🍽️", title: "Rooftop Dinner at Ambrai", description: "Dinner with unobstructed views of the illuminated City Palace from Ambrai rooftop restaurant." }], tip: "Book Ambrai Restaurant 24 hours ahead — lake-view tables sell out every evening.", image: "/images/destinations/rajasthan_2.jpg" },
      { dayNumber: 2, title: "City Palace & Jagdish Temple", tag: "CITY PALACE", tagline: "The largest palace complex in Rajasthan — 22 palaces merged over 400 years of royal building.", activities: [{ icon: "🏯", title: "City Palace Museum Tour", description: "Guided walk through peacock mosaic courtyards, royal armouries and crystal galleries." }, { icon: "🛕", title: "Jagdish Temple", description: "16th century Indo-Aryan temple to Lord Vishnu — continuous prayers and brass Garuda icon." }, { icon: "🎨", title: "Shilpgram Craft Village", description: "Rural arts and crafts complex — watch block printing, pottery and puppet-making live." }], tip: "The City Palace audio guide is excellent — rent it at the entrance for a deep historical experience.", image: "/images/destinations/rajasthan_2.jpg" },
      { dayNumber: 3, title: "Day Trip to Pushkar — Sacred Lake Town", tag: "PUSHKAR", tagline: "One of India's holiest towns — 52 ghats, a Brahma temple and camel sand dunes.", activities: [{ icon: "🐪", title: "Pushkar Camel Experience", description: "Short camel ride in the dunes outside Pushkar — views of the Aravalli hills." }, { icon: "🛕", title: "Brahma Temple — India's Only One", description: "India's only temple dedicated to Lord Brahma — gold spire and red pinnacle architecture." }, { icon: "🌊", title: "Pushkar Lake Holy Dip Ceremony", description: "Witness the early-morning puja at the sacred lake ghats — bells, incense and flames." }], tip: "Leather and meat are banned in Pushkar — leave them at your hotel.", image: "/images/destinations/rajasthan_2.jpg" },
      { dayNumber: 4, title: "Chittorgarh Fort Day Trip", tag: "CHITTORGARH", tagline: "The largest fort in India — towers, palaces and the tragedy of Rani Padmavati.", activities: [{ icon: "🏰", title: "Chittorgarh Fort UNESCO Site", description: "3-hour guided tour of the 7th century hilltop fort — Vijay Stambha and Kirti Stambha victory pillars." }, { icon: "⛲", title: "Padmini Palace & Lake", description: "The mirror palace where Maharawal Ratan Singh saw Rani Padmavati's reflection — legend lives here." }, { icon: "🌅", title: "Sunset from Fort Ramparts", description: "Watch the setting sun over the Rajasthan plains from the ancient fort walls." }], tip: "Hire a local guide at Chittorgarh gate — the fort is massive and a guide prevents getting lost.", image: "/images/destinations/rajasthan_2.jpg" },
      { dayNumber: 5, title: "Kumbhalgarh Fort & Ranakpur Jain Temples", tag: "KUMBHALGARH", tagline: "The Wall of India and Rajasthan's finest Jain marble temples in one day.", activities: [{ icon: "🏯", title: "Kumbhalgarh Fort Wall Walk", description: "The world's second-longest wall (38 km) — walk the ramparts above a leopard sanctuary." }, { icon: "🛕", title: "Ranakpur Chaumukha Jain Temple", description: "1,444 intricately carved marble pillars, no two alike — a masterpiece of 15th century sculpture." }, { icon: "🦁", title: "Kumbhalgarh Wildlife Sanctuary", description: "One of the last strongholds of wolves in India — wolves, leopards and chinkaras." }], tip: "Carry white or light clothing for Ranakpur — leather items are not permitted inside.", image: "/images/destinations/rajasthan_2.jpg" },
      { dayNumber: 6, title: "Jaipur — Pink City in a Day", tag: "JAIPUR", tagline: "The legendary Pink City — Amer Fort, Hawa Mahal and the Jantar Mantar in one perfect day.", activities: [{ icon: "🏯", title: "Amer Fort Elephant Ride (or Walk)", description: "The amber-hued hillside fortress with mirrored Sheesh Mahal and elephant stables." }, { icon: "🏛️", title: "Hawa Mahal — Palace of Winds", description: "953 latticed windows of terracotta pink — built so royal women could observe street life unseen." }, { icon: "🔭", title: "Jantar Mantar Observatory", description: "UNESCO-listed 18th century observatory with the world's largest stone sundial." }], tip: "Jantar Mantar is best visited with a certified ASI guide — the science is complex but fascinating.", image: "/images/destinations/rajasthan_2.jpg" },
      { dayNumber: 7, title: "Departure from Jaipur", tag: "DEPARTURE", tagline: "Last morning shopping on Johari Bazaar, airport transfer.", activities: [{ icon: "🛍️", title: "Johari Bazaar Jewellery Shopping", description: "Jaipur is famous for precious and semi-precious stones — buy directly from gem cutters." }, { icon: "✈️", title: "Jaipur International Airport Transfer", description: "Private car to JAI Airport for your departure." }], tip: "Jaipur airport is 15 km from the city — allow 45 minutes during morning rush hour.", image: "/images/destinations/rajasthan_2.jpg" },
    ],
    hotels: [{ name: "Taj Lake Palace Udaipur", rating: "★★★★★", type: "Heritage Palace on the Lake", location: "Lake Pichola, Udaipur", image: "/images/destinations/rajasthan_2.jpg" }, { name: "Samode Haveli Jaipur", rating: "★★★★★", type: "Heritage Haveli", location: "Jaipur", image: "/images/destinations/rajasthan_2.jpg" }],
  },
  "rajasthan-forts": {
    slug: "rajasthan-forts", destination: "Rajasthan", title: "Rajasthan Royal Forts (Jaipur & Udaipur)", duration: "4 Nights / 5 Days", heroImage: "/images/destinations/rajasthan_3.jpg", tagline: "Amer Fort, Mehrangarh, City Palace Udaipur and Lake Pichola in a focused itinerary", basePrice: 18000,
    days: [
      { dayNumber: 1, title: "Arrive Jaipur — Pink City Welcome", tag: "JAIPUR", tagline: "Land in the Pink City — the forts, bazaars and elephants are ready.", activities: [{ icon: "✈️", title: "Airport Transfer to Jaipur Hotel", description: "Private car from Jaipur Airport to your heritage hotel in the old city." }, { icon: "🛕", title: "Birla Mandir Evening Visit", description: "Modern white marble temple at the foot of Moti Dungri hill — beautiful at night when lit." }, { icon: "🍽️", title: "Welcome Dinner at Laxmi Misthan Bhandar", description: "Legendary Jaipur sweet shop and restaurant — dal baati churma and kachori." }], tip: "Try the kachori and jalebi at LMB — they've been making them since 1954.", image: "/images/destinations/rajasthan_3.jpg" },
      { dayNumber: 2, title: "Amer Fort, Hawa Mahal & City Palace", tag: "AMER FORT", tagline: "The full Jaipur fort circuit in one epic day — elephants, mirrors and latticed pink facades.", activities: [{ icon: "🏯", title: "Amer Fort (Amber Fort) Guided Tour", description: "Hilltop Mughal-Rajput fort — Sheesh Mahal Hall of Mirrors, Ganesh Pol gateway and elephant stables." }, { icon: "🏛️", title: "Hawa Mahal — Palace of Winds", description: "Five-storey pink sandstone honeycomb facade — 953 windows designed to catch the breeze." }, { icon: "🏛️", title: "City Palace Jaipur Museum", description: "Half of the City Palace is still home to the royal family — Mubarak Mahal textile galleries." }], tip: "Start at Amer Fort at 9 AM before busloads of tourists arrive from Delhi.", image: "/images/destinations/rajasthan_3.jpg" },
      { dayNumber: 3, title: "Jaipur to Udaipur by Train", tag: "TRAIN JOURNEY", tagline: "The 5-hour scenic train crosses the Aravalli hills — lake views near Udaipur are stunning.", activities: [{ icon: "🚂", title: "Jaipur to Udaipur Train Journey", description: "Board the Chetak Express — AC chair car with breakfast included in this package." }, { icon: "🏨", title: "Udaipur Hotel Check-In", description: "Check in to your lake-view property in Udaipur old city." }, { icon: "🚤", title: "Lake Pichola Sunset Boat Ride", description: "Evening shikara gliding between the City Palace walls and Jag Mandir island." }], tip: "The train passes Nathdwara — a key Vishnu pilgrimage town visible from the window.", image: "/images/destinations/rajasthan_3.jpg" },
      { dayNumber: 4, title: "City Palace Udaipur & Sajjangarh Fort", tag: "UDAIPUR FORTS", tagline: "Two palaces in one day — the sprawling City Palace and the hilltop Sajjangarh Monsoon Palace.", activities: [{ icon: "🏯", title: "City Palace Museum Udaipur", description: "The largest palace complex in Rajasthan — 22 interconnected palaces on Lake Pichola." }, { icon: "🏰", title: "Sajjangarh (Monsoon Palace)", description: "Hilltop white marble palace built to watch monsoon clouds — panoramic Udaipur views." }, { icon: "🛍️", title: "Hathipole Bazaar Shopping", description: "Udaipur's handicraft bazaar — silver jewellery, colourful jootis, block-print kurtas." }], tip: "Sajjangarh is especially beautiful at sunset — entry closes at 6 PM.", image: "/images/destinations/rajasthan_3.jpg" },
      { dayNumber: 5, title: "Departure from Udaipur", tag: "DEPARTURE", tagline: "Morning walk, last heritage coffee and airport transfer.", activities: [{ icon: "☕", title: "Rooftop Breakfast with Lake View", description: "Final breakfast overlooking Lake Pichola at a Gangaur Ghat café." }, { icon: "✈️", title: "Udaipur Airport Transfer", description: "Private car to Maharana Pratap Airport — 25 km from city centre." }], tip: "Udaipur airport has fewer daily flights — book your departure flight well in advance.", image: "/images/destinations/rajasthan_3.jpg" },
    ],
    hotels: [{ name: "Hotel Mewar Haveli Udaipur", rating: "★★★★", type: "Heritage Hotel", location: "Old City, Udaipur", image: "/images/destinations/rajasthan_3.jpg" }, { name: "Shahpura House Jaipur", rating: "★★★★", type: "Heritage Boutique Hotel", location: "Jaipur", image: "/images/destinations/rajasthan_3.jpg" }],
  },
// ── MALAYSIA VARIANTS ──
  "malaysia-island": {
    slug: "malaysia-island", destination: "Malaysia", title: "Malaysia Island Paradise (Langkawi & Penang Beaches)", duration: "6 Nights / 7 Days", heroImage: "/images/destinations/malaysia_3.jpg", tagline: "Langkawi sky bridge, Eagle Square, Penang street art and George Town UNESCO World Heritage", basePrice: 38000,
    days: [
      { dayNumber: 1, title: "Arrive Langkawi Island — Duty-Free Paradise", tag: "LANGKAWI", tagline: "Land on Langkawi — 99 islands, duty-free shopping and the Andaman Sea at your doorstep.", activities: [{ icon: "✈️", title: "Langkawi Airport Transfer to Beach Hotel", description: "Private van to your Pantai Cenang beachfront resort — 15 minutes from the airport." }, { icon: "🏖️", title: "Pantai Cenang Beach Evening Walk", description: "Langkawi's busiest beach strip — watersports, restaurants and duty-free shops." }, { icon: "🦅", title: "Eagle Square (Dataran Lang) Sunset", description: "The iconic 12-metre eagle statue at Kuah Jetty — the symbol of Langkawi island." }], tip: "Stock up on duty-free alcohol and chocolate in Langkawi — prices are significantly lower.", image: "/images/destinations/malaysia_3.jpg" },
      { dayNumber: 2, title: "Langkawi Sky Bridge & Cable Car", tag: "SKY BRIDGE", tagline: "The world's most curved cable car and a curved sky bridge at 700 metres elevation.", activities: [{ icon: "🚡", title: "Langkawi Cable Car (SkyCab)", description: "Steep gondola to Gunung Mat Cincang summit — 360° views of the archipelago and Thailand coast." }, { icon: "🌉", title: "Langkawi Sky Bridge Walk", description: "A 125-metre curved pedestrian bridge over the jungle canopy — suspended at 660 metres." }, { icon: "🌿", title: "Oriental Village at the Cable Car Base", description: "Traditional Malay kampung recreated as a shopping and entertainment village." }], tip: "Go on weekdays — the sky bridge is closed Tuesdays for maintenance.", image: "/images/destinations/malaysia_3.jpg" },
      { dayNumber: 3, title: "Island Hopping by Speedboat", tag: "ISLAND HOP", tagline: "Three islands in one day — Dayang Bunting, Beras Basah and the Pregnant Maiden Lake.", activities: [{ icon: "🚤", title: "3-Island Speedboat Tour", description: "Visit Pulau Beras Basah (sandbank island), Gua Cerita sea cave and Dayang Bunting lake." }, { icon: "🏊", title: "Lake of the Pregnant Maiden Swim", description: "Freshwater lake on an island — legend says swimming here aids fertility. Clear and calm." }, { icon: "🦅", title: "Eagle Feeding at Sea", description: "Watch the Langkawi sea eagles swoop to catch raw chicken thrown from the boat — spectacular." }], tip: "Eagle feeding happens near Kilim Geoforest — ask your boatman to take you at 9 AM for best light.", image: "/images/destinations/malaysia_3.jpg" },
      { dayNumber: 4, title: "Penang — George Town UNESCO City", tag: "PENANG", tagline: "Fly or ferry to Penang — the food capital of Malaysia and a UNESCO heritage city.", activities: [{ icon: "✈️", title: "Langkawi to Penang (Ferry + Bus or Fly)", description: "1-hour flight or 3-hour fast ferry to Penang — arrange at hotel." }, { icon: "🎨", title: "George Town Street Art Walk", description: "10+ famous murals by Ernest Zacharevic in the UNESCO World Heritage old quarter." }, { icon: "🍜", title: "Penang Char Kuey Teow & Laksa Dinner", description: "Eat at New World Park or Gurney Drive hawker centre — the world's best char kuey teow." }], tip: "Download the George Town street art map — the murals are spread over 1.5 km of back lanes.", image: "/images/destinations/malaysia_3.jpg" },
      { dayNumber: 5, title: "Penang Hill & Kek Lok Si Temple", tag: "PENANG HILL", tagline: "A funicular railway to a colonial hill station, and Malaysia's largest Buddhist temple.", activities: [{ icon: "🚞", title: "Penang Hill Funicular Railway", description: "5-minute funicular to the top — stunning views and colonial-era bungalows in the cool air." }, { icon: "🛕", title: "Kek Lok Si Temple", description: "Southeast Asia's largest Buddhist temple — 30-metre Kuan Yin bronze statue and pagoda." }, { icon: "🌿", title: "Penang Botanic Gardens Walk", description: "100-year-old tropical gardens with macaque monkeys, waterfall trail and rain trees." }], tip: "Visit Kek Lok Si at Chinese New Year when it's lit with 10,000 lanterns — magical.", image: "/images/destinations/malaysia_3.jpg" },

      { dayNumber: 6, title: "Penang Batu Ferringhi Beach Day", tag: "BEACH DAY", tagline: "The northern coast beach — watersports, parasailing and duty-free shops.", activities: [{ icon: "🏄", title: "Batu Ferringhi Watersports", description: "Jet ski, parasailing, banana boat and kayaking available at the beach vendor strip." }, { icon: "🛍️", title: "Batu Ferringhi Night Market", description: "1-km stretch of evening stalls from 7 PM — clothing, electronics, crafts and durian." }, { icon: "🍽️", title: "Long Beach Seafood Dinner", description: "Fresh seafood BBQ at a beachside restaurant in Batu Ferringhi — butter prawns and chilli crab." }], tip: "Book a beachside table at Sri Bahari seafood restaurant for the best sunset meal.", image: "/images/destinations/malaysia_3.jpg" },
      { dayNumber: 7, title: "Departure from Penang International Airport", tag: "DEPARTURE", tagline: "Final Penang White Coffee and airport transfer.", activities: [{ icon: "☕", title: "Penang White Coffee Breakfast", description: "Malaysia's famous Ipoh-style white coffee with buttered kaya toast — the perfect send-off." }, { icon: "✈️", title: "Penang Airport Transfer", description: "Taxi or Grab to Penang International Airport — 30 minutes from George Town." }], tip: "Grab (Uber equivalent) is reliable and cheaper than taxis in Penang.", image: "/images/destinations/malaysia_3.jpg" },
    ],
    hotels: [{ name: "Meritus Pelangi Beach Resort Langkawi", rating: "★★★★★", type: "Beachfront Resort", location: "Pantai Cenang, Langkawi", image: "/images/destinations/malaysia_3.jpg" }, { name: "Penang Hard Rock Hotel", rating: "★★★★★", type: "Beach Resort", location: "Batu Ferringhi, Penang", image: "/images/destinations/malaysia_3.jpg" }],
  },
// ── GOA VARIANTS ──
  "goa-luxury": {
    slug: "goa-luxury", destination: "Goa", title: "Goa Luxury Beach Retreat (5-Star Resort & Spa)", duration: "5 Nights / 6 Days", heroImage: "/images/destinations/goa_2.jpg", tagline: "Private beach, spa, candlelight dinners and curated experiences in 5-star Goa", basePrice: 22000,
    days: [
      { dayNumber: 1, title: "Arrive Goa & Resort Check-In", tag: "ARRIVAL", tagline: "Your private beach villa awaits — check in and breathe in the sea breeze.", activities: [{ icon: "✈️", title: "Private Airport Transfer to Resort", description: "Air-conditioned car from Goa Airport to your luxury beach resort in South Goa." }, { icon: "🍹", title: "Welcome Cocktail by the Pool", description: "Chilled welcome drinks served by your personal butler at the infinity pool." }, { icon: "🌅", title: "Private Beach Sunset Walk", description: "Walk your resort's private stretch of beach as the sun drops into the Arabian Sea." }], tip: "South Goa resorts are quieter and more upscale than North Goa — perfect for luxury.", image: "/images/destinations/goa_2.jpg" },
      { dayNumber: 2, title: "Spa Day & Yoga at the Resort", tag: "WELLNESS", tagline: "A full resort wellness day — Balinese spa, beach yoga and a poolside lunch.", activities: [{ icon: "🧘", title: "Beach Yoga Session at Sunrise", description: "90-minute guided yoga on the private beach at 6:30 AM — soft sand, gentle waves." }, { icon: "💆", title: "Couples' Full-Day Spa Package", description: "Hot stone massage, deep tissue therapy, Ayurvedic oil treatment and aromatic bath." }, { icon: "🥗", title: "Healthy Poolside Lunch", description: "Resort's beachside restaurant — fresh coconut salad, grilled fish and tropical fruits." }], tip: "Book the spa 24 hours in advance — couple suites are limited.", image: "/images/destinations/goa_2.jpg" },
      { dayNumber: 3, title: "Old Goa Heritage & Spice Plantation Lunch", tag: "OLD GOA", tagline: "UNESCO World Heritage churches and a colonial spice estate lunch in the jungle.", activities: [{ icon: "⛪", title: "Basilica of Bom Jesus — UNESCO Site", description: "16th century church housing the body of St. Francis Xavier — incorrupt after 450 years." }, { icon: "🌶️", title: "Spice Plantation Guided Tour & Lunch", description: "Walk through vanilla, pepper, cinnamon and cardamom. Lunch served on banana leaf." }, { icon: "🚢", title: "Mandovi River Sunset Cruise", description: "Evening cruise with live Goan folk music, dinner and Konkani dancers on board." }], tip: "The spice plantation lunch is a full Goan thali — arrive hungry.", image: "/images/destinations/goa_2.jpg" },
      { dayNumber: 4, title: "Private Yacht Cruise to Offshore Islands", tag: "YACHT CRUISE", tagline: "Your private catamaran, a deserted sandbank, snorkeling and an onboard BBQ.", activities: [{ icon: "⛵", title: "Private Yacht Charter (Full Day)", description: "6-hour private catamaran with crew — sail to Grand Island, Bat Island and sea caves." }, { icon: "🤿", title: "Snorkeling at Grande Island", description: "Goa's best snorkeling site — parrotfish, sea turtles and soft coral gardens." }, { icon: "🍖", title: "Onboard BBQ & Sundowner Cocktails", description: "Fresh catch BBQ and cocktails served by your crew on the open deck." }], tip: "Grand Island snorkeling is best in October–March — visibility up to 10 metres.", image: "/images/destinations/goa_2.jpg" },
      { dayNumber: 5, title: "Candlelight Dinner by the Sea", tag: "ROMANCE", tagline: "The most romantic evening in Goa — private table on the beach, stars overhead.", activities: [{ icon: "🕯️", title: "Private Candlelight Beach Dinner", description: "Your resort sets a personal table on the sand — 4-course dinner with wine pairing." }, { icon: "🦞", title: "Goa Lobster Thermidor & Tiger Prawns", description: "Resort chef cooks the freshest local lobster and butter garlic prawns to order." }, { icon: "🌊", title: "Moonlit Beach Walk", description: "After dinner, walk barefoot along the beach under the stars — the Arabian Sea glows." }], tip: "Request a new moon date for your beach dinner — the sky is clearest and most star-filled.", image: "/images/destinations/goa_2.jpg" },
{ dayNumber: 6, title: "Departure from Goa", tag: "DEPARTURE", tagline: "Last beach breakfast and airport send-off.", activities: [{ icon: "🍳", title: "Breakfast by the Sea", description: "Final resort breakfast with ocean views — eggs, tropical fruits and fresh-baked bread." }, { icon: "✈️", title: "Airport Transfer", description: "Private air-conditioned car to Goa International Airport." }], tip: "Goa has two airports: Dabolim (old) and Mopa (new) — confirm which one with your airline.", image: "/images/destinations/goa_2.jpg" },
    ],
    hotels: [{ name: "Park Hyatt Goa Resort & Spa", rating: "★★★★★", type: "Luxury Beach Resort", location: "Cansaulim, South Goa", image: "/images/destinations/goa_2.jpg" }],
  },
  "goa-adventure": {
    slug: "goa-adventure", destination: "Goa", title: "Goa Adventure & Watersports (Scuba, Parasailing & Trek)", duration: "4 Nights / 5 Days", heroImage: "/images/destinations/goa_3.jpg", tagline: "Scuba dive at Grande Island, parasail over Baga Beach and trek to Dudhsagar Falls", basePrice: 16000,
    days: [
      { dayNumber: 1, title: "Arrive North Goa & Baga Beach Orientation", tag: "NORTH GOA", tagline: "Land in Goa, check in to your beach property and hit the watersports strip.", activities: [{ icon: "✈️", title: "Airport Transfer to North Goa Hotel", description: "Shared taxi from Goa Airport to your guesthouse near Baga or Calangute." }, { icon: "🏄", title: "Baga Beach Watersports Intro", description: "Banana boat, jet ski and body boarding to get your bearings on the water." }, { icon: "🍺", title: "Tito's Strip Evening Walk", description: "Baga's famous nightlife corridor — shacks, beach bars and live music." }], tip: "Book watersports before 11 AM — the afternoon sea gets rougher off Baga.", image: "/images/destinations/goa_3.jpg" },
      { dayNumber: 2, title: "Scuba Diving at Grande Island", tag: "SCUBA DIVE", tagline: "Goa's best scuba site — 9 metres of visibility, sea turtles and soft coral walls.", activities: [{ icon: "🤿", title: "Beginner Scuba Dive — Grande Island", description: "2-dive session with PADI instructor — no certification needed. Includes equipment." }, { icon: "🐠", title: "Pigeon Island Snorkeling", description: "Snorkel at the protected Pigeon Island reef between dives." }, { icon: "🚤", title: "Boat Transfer to Dive Site", description: "30-minute speedboat from Panaji Jetty to Grande Island dive spot." }], tip: "October–March is peak diving season in Goa — visibility is 10–15 metres.", image: "/images/destinations/goa_3.jpg" },
      { dayNumber: 3, title: "Parasailing & Jet Ski at Baga", tag: "PARASAILING", tagline: "Fly 100 metres above the Arabian Sea on a parachute towed by a speedboat.", activities: [{ icon: "🪂", title: "Parasailing over Baga Beach", description: "Tandem or solo parasailing — 15 minutes of flying with Goa's beaches below you." }, { icon: "🚤", title: "Speed Boat Bumper Ride", description: "Towed inflatable tube at high speed — screaming guaranteed." }, { icon: "🌊", title: "Wake Boarding / Knee Boarding", description: "Try water skiing or knee boarding — instructors available for beginners." }], tip: "Parasailing is safest between 8–11 AM when sea wind is gentlest.", image: "/images/destinations/goa_3.jpg" },
      { dayNumber: 4, title: "Dudhsagar Waterfall Trek & Spice Plantation", tag: "DUDHSAGAR", tagline: "One of India's tallest waterfalls — 310 metres of roaring white water through the Western Ghats.", activities: [{ icon: "🌿", title: "Jeep Safari to Dudhsagar Falls", description: "4×4 jeep through Bhagwan Mahaveer Sanctuary to the base of the falls." }, { icon: "💧", title: "Dudhsagar Falls Swimming Pool", description: "Swim in the natural pool at the base of the waterfall — milk-white spray in the air." }, { icon: "🌶️", title: "Spice Plantation Lunch Return", description: "Stop at a Goan spice estate for traditional lunch and guided spice walk on the way back." }], tip: "Dudhsagar jeep safaris depart from Collem at 9 AM — book through hotel in advance.", image: "/images/destinations/goa_3.jpg" },
      { dayNumber: 5, title: "Kayaking at Mandovi & Departure", tag: "DEPARTURE", tagline: "Morning mangrove kayak, last beach shack breakfast and airport transfer.", activities: [{ icon: "🛶", title: "Mandovi Mangrove Kayaking", description: "Early morning guided kayak through Goa's tidal mangroves — kingfishers and mudskippers." }, { icon: "🍳", title: "Beach Shack Breakfast", description: "Goa's famous breakfast — banana pancakes, masala omelette and freshly squeezed lime soda." }, { icon: "✈️", title: "Airport Transfer", description: "Taxi to Goa International Airport." }], tip: "Try Infantaria bakery in Calangute for the best croissants and quiches in North Goa.", image: "/images/destinations/goa_3.jpg" },
    ],
    hotels: [{ name: "Park Calangute Resort Goa", rating: "★★★★", type: "Beach Resort", location: "Calangute, North Goa", image: "/images/destinations/goa_3.jpg" }],
  },

// ── PHILIPPINES ITINERARIES ──
  "philippines-7n8d": {
    slug: "philippines-7n8d",
    destination: "Philippines",
    title: "Philippines Island Hopping (El Nido, Coron & Boracay)",
    duration: "7 Nights / 8 Days",
    heroImage: "/images/destinations/philippines_1.jpg",
    tagline: "7,000 Islands of Emerald Lagoons & White Beaches",
    basePrice: 48500,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Manila & Flight to El Nido, Palawan",
        tag: "EL NIDO",
        tagline: "Land in Manila and take a short flight to Palawan's crown jewel, El Nido.",
        activities: [
          { icon: "✈️", title: "Manila Airport Transit", description: "Seamless connection to Lio Airport, El Nido." },
          { icon: "🏨", title: "Resort Check-in", description: "Check into your beachfront eco-resort overlooking Bacuit Bay." },
          { icon: "🌅", title: "Las Cabañas Beach Sunset", description: "Relax at Las Cabañas beach with tropical cocktails as the sun sets over limestone karsts." }
        ],
        tip: "El Nido eco-regulations forbid single-use plastics — bring your reusable water bottle.",
        image: "/images/destinations/philippines_1.jpg"
      },
      {
        dayNumber: 2,
        title: "El Nido Tour A — Big Lagoon & Secret Lagoon",
        tag: "BIG LAGOON",
        tagline: "Kayak through towering marble cliffs into emerald-green hidden lagoons.",
        activities: [
          { icon: "🛶", title: "Big Lagoon Kayaking", description: "Glide through the shallow turquoise gateway into the inner lagoon." },
          { icon: "🏊", title: "Shimizu Island Snorkeling", description: "Snorkel with hawksbill turtles and vibrant coral reefs." },
          { icon: "🏖️", title: "Seven Commandos Beach Lunch", description: "Fresh grilled seafood BBQ served under coconut palms." }
        ],
        tip: "Rent a clear kayak for breathtaking photo ops inside the Big Lagoon.",
        image: "/images/destinations/philippines_1.jpg"
      },
      {
        dayNumber: 3,
        title: "El Nido Tour C — Hidden Beach & Matinloc Shrine",
        tag: "HIDDEN BEACH",
        tagline: "Swim through a tiny cliff gap to reveal a pristine concealed white sand cove.",
        activities: [
          { icon: "🏖️", title: "Hidden Beach Exploration", description: "Famous filming location with crystal waters surrounded by sharp limestone towers." },
          { icon: "⛪", title: "Matinloc Shrine Viewpoint", description: "Ascend the rock steps for panoramic 360-degree views of Bacuit Archipelago." },
          { icon: "🤿", title: "Star Beach Reef Dive", description: "Pristine snorkeling spot teeming with clownfish and sea anemones." }
        ],
        tip: "Wear reef shoes — the limestone rocks near Matinloc Shrine can be sharp.",
        image: "/images/destinations/philippines_1.jpg"
      },
      {
        dayNumber: 4,
        title: "Ferry to Coron & Kayangan Lake",
        tag: "CORON",
        tagline: "Travel to Coron, home to the cleanest lake in Asia and WWII shipwrecks.",
        activities: [
          { icon: "🛳️", title: "Fast Ferry to Coron", description: "3-hour scenic catamaran ride across the Sulu Sea." },
          { icon: "🏞️", title: "Kayangan Lake Trek & Swim", description: "Walk up 150 steps to the iconic postcard viewpoint, then swim in hyper-clear brackish water." },
          { icon: "♨️", title: "Maquinit Hot Springs Evening", description: "Soak in natural saltwater thermal springs right on the coastline." }
        ],
        tip: "Maquinit Springs is best enjoyed right at dusk when the evening air cools.",
        image: "/images/destinations/philippines_2.jpg"
      },
      {
        dayNumber: 5,
        title: "Coron Reefs & Twin Lagoons",
        tag: "TWIN LAGOONS",
        tagline: "Swim beneath underwater rock arches separating warm ocean water from cool freshwater.",
        activities: [
          { icon: "🏊", title: "Twin Lagoons Swim", description: "Pass under a submerged limestone arch into a serene hidden cove." },
          { icon: "🐠", title: "Siete Pecados Marine Park", description: "Coron's richest marine sanctuary with dense coral gardens." },
          { icon: "⚓", title: "Skeleton Shipwreck Snorkel", description: "Snorkel over a shallow WWII Japanese freighter covered in corals." }
        ],
        tip: "Wear a life vest in Twin Lagoons — the water layers shift temperature dramatically.",
        image: "/images/destinations/philippines_2.jpg"
      },
      {
        dayNumber: 6,
        title: "Flight to Boracay & White Beach Sunset",
        tag: "BORACAY",
        tagline: "Fly to Boracay — world-famous for powder-soft white sand beaches.",
        activities: [
          { icon: "✈️", title: "Flight to Caticlan / Boracay", description: "Short flight to Caticlan followed by 10-minute speed boat to Boracay Island." },
          { icon: "🏖️", title: "Station 1 White Beach Stroll", description: "Walk barefoot on sand so fine it never gets hot under the sun." },
          { icon: "⛵", title: "Paraw Sailing at Sunset", description: "Board a traditional outrigger sailboat for a magical golden-hour sail." }
        ],
        tip: "Station 1 has the finest sand and quietest beach lounges.",
        image: "/images/destinations/philippines_3.jpg"
      },
      {
        dayNumber: 7,
        title: "Boracay Watersports & D'Mall Evening",
        tag: "BORACAY VIBES",
        tagline: "Thrilling ocean sports and lively tropical nightlife.",
        activities: [
          { icon: "🪂", title: "Parasailing over Boracay", description: "Fly 150 meters above the turquoise coastline." },
          { icon: "🤿", title: "Crocodile Island Snorkeling", description: "Boat excursion to Boracay's top offshore coral reef." },
          { icon: "🛍️", title: "D'Mall Dining & Fire Dancers", description: "Enjoy fresh seafood dinner accompanied by live acoustic music on the beach." }
        ],
        tip: "Try the famous Mango Graham Shake at Jonah's Fruit Shake stand in Station 1.",
        image: "/images/destinations/philippines_3.jpg"
      },
      {
        dayNumber: 8,
        title: "Departure via Manila",
        tag: "DEPARTURE",
        tagline: "Final tropical breakfast and flight home.",
        activities: [
          { icon: "🍳", title: "Beachside Breakfast", description: "Savor fresh Philippine mangoes and longganisa breakfast sausage." },
          { icon: "✈️", title: "Caticlan to Manila Flight & Transfer", description: "Transfer to Manila International Airport for departure." }
        ],
        tip: "Buy dried mangoes at Manila airport as authentic souvenirs for friends and family.",
        image: "/images/destinations/philippines_1.jpg"
      }
    ],
    hotels: [
      { name: "El Nido Resorts Miniloc Island", rating: "★★★★★", type: "Eco-Luxury Resort", location: "El Nido, Palawan", image: "/images/destinations/philippines_1.jpg" },
      { name: "Discovery Shores Boracay", rating: "★★★★★", type: "Luxury Beachfront", location: "Station 1, Boracay", image: "/images/destinations/philippines_3.jpg" }
    ]
  },
  "philippines-luxury": {
    slug: "philippines-luxury",
    destination: "Philippines",
    title: "Philippines Luxury Escape (Bohol Chocolate Hills & Overwater Resorts)",
    duration: "6 Nights / 7 Days",
    heroImage: "/images/destinations/philippines_2.jpg",
    tagline: "Private Catamarans, Tarsier Sanctuaries & Overwater Villas",
    basePrice: 68000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive in Manila & Flight to Bohol",
        tag: "BOHOL",
        tagline: "Check into Panglao Island's top 5-star beachfront resort.",
        activities: [
          { icon: "✈️", title: "Private Transfer to Panglao", description: "Air-conditioned luxury SUV transfer from Tagbilaran Airport." },
          { icon: "🍹", title: "Welcome Sunset Cocktail", description: "Cocktails overlooking the Bohol Sea infinity pool." }
        ],
        tip: "Panglao Island features some of the clearest diving waters in Southeast Asia.",
        image: "/images/destinations/philippines_2.jpg"
      },
      {
        dayNumber: 2,
        title: "Bohol Countryside & Chocolate Hills",
        tag: "CHOCOLATE HILLS",
        tagline: "Marvel at 1,200 symmetrical geological mounds and cute mini tarsier primates.",
        activities: [
          { icon: "⛰️", title: "Chocolate Hills Viewpoint", description: "Panoramic look over green grass mounds that turn brown in dry season." },
          { icon: "🐒", title: "Philippine Tarsier Sanctuary", description: "See the world's smallest primate with huge nocturnal eyes." },
          { icon: "🚢", title: "Loboc River Cruise Lunch", description: "Floating buffet lunch with live acoustic music down the jungle river." }
        ],
        tip: "Maintain complete silence at the tarsier sanctuary as tarsiers are extremely sensitive to noise.",
        image: "/images/destinations/philippines_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Balicasag Island Dolphin & Turtle Safari",
        tag: "BALICASAG",
        tagline: "Private speedboat safari to swim alongside wild sea turtles.",
        activities: [
          { icon: "🐬", title: "Dolphin Watching at Dawn", description: "Spot wild spinner dolphins leaping near Virgin Island." },
          { icon: "🐢", title: "Balicasag Turtle Snorkel", description: "Guided swim in a marine sanctuary overflowing with sea turtles." }
        ],
        tip: "Dolphins appear earliest around 6:00 AM — early departure is rewarded.",
        image: "/images/destinations/philippines_2.jpg"
      },
      {
        dayNumber: 4,
        title: "Fly to El Nido Luxury Water Villa",
        tag: "WATER VILLA",
        tagline: "Check into an exclusive private island overwater villa in Palawan.",
        activities: [
          { icon: "✈️", title: "Private Air Charter to El Nido", description: "Scenic flight across the Philippine archipelago." },
          { icon: "🏡", title: "Overwater Bungalow Check-in", description: "Step directly from your deck into crystal clear lagoon waters." }
        ],
        tip: "Request complimentary paddleboards directly at your villa dock.",
        image: "/images/destinations/philippines_1.jpg"
      },
      {
        dayNumber: 5,
        title: "Private Catamaran Charter in Bacuit Bay",
        tag: "PRIVATE CATAMARAN",
        tagline: "Tailored private island hopping away from all tour crowds.",
        activities: [
          { icon: "⛵", title: "Full-Day Private Catamaran", description: "Sail to pristine deserted sandbars with personal chef on board." },
          { icon: "🥂", title: "Champagne Beach Picnic", description: "Gourmet seafood and wine served under private canopy." }
        ],
        tip: "Ask your skipper to visit Cadlao Lagoon at high tide.",
        image: "/images/destinations/philippines_1.jpg"
      },
      {
        dayNumber: 6,
        title: "Spa Day & Sunset Dining",
        tag: "WELLNESS",
        tagline: "Traditional Hilot massage and private candlelight beach dinner.",
        activities: [
          { icon: "💆", title: "Traditional Philippine Hilot Massage", description: "Healing massage using warm coconut oil and banana leaves." },
          { icon: "🕯️", title: "Private Beach Candlelight Dinner", description: "4-course dinner set directly on the ocean shore." }
        ],
        tip: "Hilot massage is renowned for releasing muscle tension after swimming.",
        image: "/images/destinations/philippines_2.jpg"
      },
      {
        dayNumber: 7,
        title: "Departure via Manila",
        tag: "DEPARTURE",
        tagline: "Final ocean dip and airport transfer.",
        activities: [
          { icon: "✈️", title: "Manila Connection & Flight Home", description: "Flight from El Nido to Manila for international departure." }
        ],
        tip: "Manila Airport Terminal 3 has executive lounges for relaxing before long-haul flights.",
        image: "/images/destinations/philippines_2.jpg"
      }
    ],
    hotels: [
      { name: "Amorita Resort Bohol", rating: "★★★★★", type: "Luxury Cliffside Resort", location: "Panglao, Bohol", image: "/images/destinations/philippines_2.jpg" },
      { name: "El Nido Resorts Lagen Island", rating: "★★★★★", type: "Overwater Villa Resort", location: "El Nido, Palawan", image: "/images/destinations/philippines_1.jpg" }
    ]
  },
  "philippines-cebu": {
    slug: "philippines-cebu",
    destination: "Philippines",
    title: "Philippines Coastal Explorer (Cebu Whale Sharks & Kawasan Falls)",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/philippines_3.jpg",
    tagline: "Swim with Whale Sharks & Jump Off Turquoise Waterfalls",
    basePrice: 34500,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Cebu & City Heritage Tour",
        tag: "CEBU CITY",
        tagline: "Explore the oldest Spanish city in the Philippines.",
        activities: [
          { icon: "⛪", title: "Magellan's Cross & Basilica del Santo Niño", description: "Visit the 1521 historic wooden cross planted by Ferdinand Magellan." },
          { icon: "🏰", title: "Fort San Pedro", description: "Spanish military defense fort built in 1565." }
        ],
        tip: "Try Cebu's world-famous Lechon (roast pork) for dinner — Anthony Bourdain called it the best in the world.",
        image: "/images/destinations/philippines_3.jpg"
      },
      {
        dayNumber: 2,
        title: "Oslob Whale Shark Swimming",
        tag: "WHALE SHARKS",
        tagline: "Swim inches away from gentle ocean giants.",
        activities: [
          { icon: "🐋", title: "Oslob Whale Shark Encounter", description: "Snorkel next to 30-foot gentle whale sharks in clear coastal waters." },
          { icon: "🏝️", title: "Sumilon Island Sandbar", description: "Relax on a shifting white sandbar surrounded by turquoise reef." }
        ],
        tip: "Sunscreen is prohibited in Oslob to protect the whale sharks — wear a rashguard instead.",
        image: "/images/destinations/philippines_3.jpg"
      },
      {
        dayNumber: 3,
        title: "Kawasan Falls Canyoneering Adventure",
        tag: "KAWASAN FALLS",
        tagline: "Jump off 10-meter cliffs into electric-blue jungle pools.",
        activities: [
          { icon: "🧗", title: "Badian Canyoneering", description: "3-hour guided river trek, cliff jumping, and natural water slides." },
          { icon: "🌊", title: "Kawasan Main Waterfall Swim", description: "Relax under the famous 3-tier gushing turquoise waterfall." }
        ],
        tip: "Guides provide full safety helmets and life jackets for all cliff jumps.",
        image: "/images/destinations/philippines_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Moalboal Sardine Run & Sea Turtles",
        tag: "SARDINE RUN",
        tagline: "Witness millions of shimmering sardines swimming in giant swirling underwater formations.",
        activities: [
          { icon: "🐟", title: "Moalboal Sardine Run Snorkel", description: "Snorkel right off Panagsama Beach where millions of sardines gather in wall formations." },
          { icon: "🐢", title: "Talisay Point Turtle Swim", description: "Swim alongside resident green sea turtles grazing on sea grass." }
        ],
        tip: "The sardine run is accessible just 20 meters from shore — no boat required.",
        image: "/images/destinations/philippines_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Pescador Island Snorkeling & Return to Cebu",
        tag: "PESCADOR",
        tagline: "Explore an offshore marine sanctuary with deep drop-off coral walls.",
        activities: [
          { icon: "🐠", title: "Pescador Island Reef Tour", description: "Coral wall snorkeling with colorful reef fish and dolphin sightings." }
        ],
        tip: "Pescador Cathedral is a famous underwater cave for advanced scuba divers.",
        image: "/images/destinations/philippines_3.jpg"
      },
      {
        dayNumber: 6,
        title: "Cebu Airport Departure",
        tag: "DEPARTURE",
        tagline: "Last souvenir shopping and departure flight.",
        activities: [
          { icon: "✈️", title: "Cebu Mactan Airport Transfer", description: "Transfer to Mactan-Cebu International Airport." }
        ],
        tip: "Mactan Airport is renowned for its wooden architecture and duty-free shopping.",
        image: "/images/destinations/philippines_3.jpg"
      }
    ],
    hotels: [
      { name: "Radisson Blu Hotel Cebu", rating: "★★★★★", type: "City Hotel", location: "Cebu City", image: "/images/destinations/philippines_3.jpg" },
      { name: "Pescadores Seaview Suites Moalboal", rating: "★★★★", type: "Beach Resort", location: "Moalboal, Cebu", image: "/images/destinations/philippines_3.jpg" }
    ]
  },

// ── MALTA ITINERARIES ──
  "malta-5n6d": {
    slug: "malta-5n6d",
    destination: "Malta",
    title: "Malta Mediterranean Heritage (Valletta, Mdina & Blue Lagoon)",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/malta_1.jpg",
    tagline: "Sun-Drenched Citadel of Knights & Blue Lagoons",
    basePrice: 54000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Malta & Valletta Grand Harbour Sunset",
        tag: "VALLETTA",
        tagline: "Check into Europe's smallest UNESCO capital city.",
        activities: [
          { icon: "✈️", title: "Malta Airport Transfer", description: "Private car from Luqa Airport to Valletta." },
          { icon: "🏰", title: "Upper Barrakka Gardens", description: "Panoramic views across the Grand Harbour and the Three Cities at sunset." }
        ],
        tip: "Watch the Saluting Battery cannon fired daily at 12:00 PM and 4:00 PM.",
        image: "/images/destinations/malta_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Valletta UNESCO City Walking Tour",
        tag: "KNIGHTS OF MALTA",
        tagline: "Discover Baroque palaces and Caravaggio masterpieces.",
        activities: [
          { icon: "⛪", title: "St. John's Co-Cathedral", description: "Marvel at the gold leaf interior and Caravaggio's 'Beheading of Saint John'." },
          { icon: "🏛️", title: "Grandmaster's Palace & Armoury", description: "Tour the historic seat of the Knights of St. John." }
        ],
        tip: "St. John's Cathedral requires covered shoulders and flat shoes to protect marble floors.",
        image: "/images/destinations/malta_1.jpg"
      },
      {
        dayNumber: 3,
        title: "Mdina — The Silent City & Rabat Catacombs",
        tag: "MDINA",
        tagline: "Step back 4,000 years inside Malta's pristine medieval hilltop citadel.",
        activities: [
          { icon: "🏰", title: "Mdina Gate & Citadel Walk", description: "Famous Game of Thrones filming location with car-free cobblestone streets." },
          { icon: "🍰", title: "Fontanella Tea Garden", description: "Famous chocolate cake with 180-degree cliffside views of the Maltese countryside." }
        ],
        tip: "Visit Mdina after 6:00 PM when day-trippers leave — the warm street lamps are enchanting.",
        image: "/images/destinations/malta_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Comino Island & Blue Lagoon Boat Cruise",
        tag: "BLUE LAGOON",
        tagline: "Swim in swimming-pool-clear turquoise Mediterranean waters.",
        activities: [
          { icon: "⛵", title: "Comino Speedboat Cruise", description: "Sail to the uninhabited island of Comino." },
          { icon: "🏊", title: "Blue Lagoon Swimming & Snorkeling", description: "Swim in luminous crystal-clear ocean waters surrounded by white sand." }
        ],
        tip: "Arrive at Blue Lagoon by 9:30 AM before commercial cruise boats dock.",
        image: "/images/destinations/malta_2.jpg"
      },
      {
        dayNumber: 5,
        title: "Marsaxlokk Fishing Village & Blue Grotto",
        tag: "MARSAXLOKK",
        tagline: "Traditional painted Luzzu boats and dramatic sea caves.",
        activities: [
          { icon: "🛶", title: "Marsaxlokk Market & Harbor", description: "Stroll along colorful traditional fishing boats with Osiris eye motifs." },
          { icon: "🌊", title: "Blue Grotto Boat Caves Tour", description: "Small boat tour inside glowing azure sea caves." }
        ],
        tip: "Blue Grotto sunlight reflections are brightest between 10:00 AM and 1:00 PM.",
        image: "/images/destinations/malta_3.jpg"
      },
      {
        dayNumber: 6,
        title: "Departure from Malta",
        tag: "DEPARTURE",
        tagline: "Final Maltese pastizzi pastry breakfast and airport transfer.",
        activities: [
          { icon: "🥐", title: "Pastizzi & Coffee Breakfast", description: "Sample famous flaky ricotta pastizzi pastries." },
          { icon: "✈️", title: "Malta International Airport Transfer", description: "Return transfer to Luqa Airport." }
        ],
        tip: "Buy Maltese honey ring cookies (Qagħaq tal-Għasel) at the airport for sweet souvenirs.",
        image: "/images/destinations/malta_1.jpg"
      }
    ],
    hotels: [
      { name: "The Phoenicia Malta", rating: "★★★★★", type: "Historic Palace Hotel", location: "Valletta", image: "/images/destinations/malta_1.jpg" },
      { name: "AX The Palace Sliema", rating: "★★★★★", type: "Boutique Hotel", location: "Sliema, Malta", image: "/images/destinations/malta_2.jpg" }
    ]
  },
  "malta-luxury": {
    slug: "malta-luxury",
    destination: "Malta",
    title: "Malta Luxury & Gozo Island Retreat (Palace Hotels & Private Yacht)",
    duration: "6 Nights / 7 Days",
    heroImage: "/images/destinations/malta_2.jpg",
    tagline: "Private Yachts, Gozo Citadels & 5-Star Boutique Palaces",
    basePrice: 85000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive in Valletta & 5-Star Check-In",
        tag: "VALLETTA PALACE",
        tagline: "Check into a restored 16th-century Maltese aristocratic palace.",
        activities: [
          { icon: "🚘", title: "Chauffeur Airport Transfer", description: "Private Mercedes transfer from Malta Airport." },
          { icon: "🍷", title: "Wine Tasting Welcome", description: "Sample vintage Maltese Girgentina wines." }
        ],
        tip: "Maltese indigenous grapes (Gellewza and Girgentina) are produced in limited quantities.",
        image: "/images/destinations/malta_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Private Yacht Charter to Comino & Gozo",
        tag: "PRIVATE YACHT",
        tagline: "Full-day luxury yacht navigation across the Maltese Archipelago.",
        activities: [
          { icon: "⛵", title: "Private Motor Yacht Charter", description: "Cruise to Crystal Lagoon and Santa Maria Sea Caves." },
          { icon: "🥂", title: "Seafood Lunch on Board", description: "Fresh Mediterranean sea bass paired with prosecco." }
        ],
        tip: "Crystal Lagoon is quieter and deeper than Blue Lagoon — ideal for swimming off the yacht deck.",
        image: "/images/destinations/malta_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Gozo Island Exploration & Victoria Citadel",
        tag: "GOZO",
        tagline: "Discover Malta's greener, tranquil sister island of Gozo.",
        activities: [
          { icon: "⛴️", title: "Private Ferry to Gozo", description: "Cross the Gozo Channel past Comino Island." },
          { icon: "🏰", title: "Victoria Citadel", description: "Explore the fortified hill town with 360-degree views across Gozo." },
          { icon: "🏖️", title: "Ramla Bay Red Sand Beach", description: "Relax on Gozo's famous orange-red sand bay." }
        ],
        tip: "Gozo cheeselets (Gbejniet) with black pepper are a local gourmet delicacy.",
        image: "/images/destinations/malta_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Ancient Megalithic Temples & Blue Grotto",
        tag: "UNESCO ANCIENT",
        tagline: "Visit temples older than the Egyptian Pyramids (3,600 BC).",
        activities: [
          { icon: "🏛️", title: "Ħaġar Qim & Mnajdra Temples", description: "UNESCO World Heritage prehistoric stone temples overlooking the sea." }
        ],
        tip: "Ħaġar Qim's megaliths weigh up to 20 tons and align precisely with the summer solstice.",
        image: "/images/destinations/malta_1.jpg"
      },
      {
        dayNumber: 5,
        title: "Mdina Private Evening & Michelin Dining",
        tag: "MICHELIN DINING",
        tagline: "Exclusive private tour of the Silent City followed by Michelin-starred dining.",
        activities: [
          { icon: "🕯️", title: "Private Night Walk of Mdina", description: "Experience medieval alleys illuminated by gas lamps." },
          { icon: "🍽️", title: "Michelin Star Dinner", description: "Fine dining inside a historic Maltese palazzo." }
        ],
        tip: "De Mondion in Mdina holds a Michelin Star and overlooks the entire Maltese island.",
        image: "/images/destinations/malta_3.jpg"
      },
      {
        dayNumber: 6,
        title: "Spa & Leisure Day in St. Julian's",
        tag: "WELLNESS",
        tagline: "Relaxation at a luxury seaside spa resort.",
        activities: [
          { icon: "💆", title: "Thalassotherapy Sea Spa", description: "Hydrotherapy salt scrub and marine massage." }
        ],
        tip: "St. Julian's Bay features top waterfront cocktail lounges.",
        image: "/images/destinations/malta_2.jpg"
      },
      {
        dayNumber: 7,
        title: "Departure from Malta",
        tag: "DEPARTURE",
        tagline: "Private transfer to Malta International Airport.",
        activities: [
          { icon: "✈️", title: "Chauffeur Airport Transfer", description: "Executive airport transfer for flight home." }
        ],
        tip: "Tax-free shopping is available at Malta Airport for non-EU destinations.",
        image: "/images/destinations/malta_1.jpg"
      }
    ],
    hotels: [
      { name: "Iniala Harbour House", rating: "★★★★★", type: "Ultra-Luxury Palace", location: "Valletta", image: "/images/destinations/malta_1.jpg" },
      { name: "Kempinski Hotel San Lawrenz Gozo", rating: "★★★★★", type: "Luxury Country Resort", location: "Gozo", image: "/images/destinations/malta_3.jpg" }
    ]
  },
  "malta-coastal": {
    slug: "malta-coastal",
    destination: "Malta",
    title: "Malta Coastal Highlights & Marsaxlokk Bay",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/malta_3.jpg",
    tagline: "Fishing Villages, Sea Caves & Golden Bays",
    basePrice: 42000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive in Sliema / St. Julian's",
        tag: "COASTAL CHECK-IN",
        tagline: "Check into your seaside hotel overlooking Sliema promenade.",
        activities: [
          { icon: "🏖️", title: "Sliema Promenade Sunset Stroll", description: "Walk the 3km seaside promenade looking across to Valletta." }
        ],
        tip: "Take the 10-minute Sliema Ferry across Marsamxett Harbour to Valletta.",
        image: "/images/destinations/malta_3.jpg"
      },
      {
        dayNumber: 2,
        title: "Golden Bay & Popeye Village Coast",
        tag: "GOLDEN BAY",
        tagline: "Malta's premier sandy beach and film set village.",
        activities: [
          { icon: "🏖️", title: "Golden Bay Beach Swim", description: "Relax on golden sand dunes between rocky headlands." },
          { icon: "🎬", title: "Popeye Village Viewpoint", description: "Photograph the colorful wooden film set built for Robin Williams' 1980 movie." }
        ],
        tip: "Sunset at Golden Bay is widely considered the best on the main island.",
        image: "/images/destinations/malta_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Three Cities & Grand Harbour Boat Tour",
        tag: "THREE CITIES",
        tagline: "Explore Birgu (Vittoriosa), Senglea, and Cospicua aboard a wooden dgħajsa boat.",
        activities: [
          { icon: "⛵", title: "Traditional Dgħajsa Harbour Cruise", description: "Cross the harbour in a traditional wooden water taxi." },
          { icon: "🏰", title: "Fort St. Angelo Tour", description: "Explore the Grand Master's medieval fortress overlooking Valletta." }
        ],
        tip: "Birgu's narrow lanes are filled with flowering bougainvillea and historic stone doorways.",
        image: "/images/destinations/malta_1.jpg"
      },
      {
        dayNumber: 4,
        title: "Marsaxlokk Sunday Fish Market & St. Peter's Pool",
        tag: "ST PETERS POOL",
        tagline: "Natural limestone swimming hole and vibrant coastal market.",
        activities: [
          { icon: "🛍️", title: "Marsaxlokk Waterfront Market", description: "Browse fresh fish stalls, lace, and local olive oil." },
          { icon: "🏊", title: "St. Peter's Pool Cliff Jump", description: "Swim in a horseshoe-shaped natural rock pool with jade waters." }
        ],
        tip: "St. Peter's Pool has flat ledge rocks ideal for sunbathing.",
        image: "/images/destinations/malta_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Departure from Malta",
        tag: "DEPARTURE",
        tagline: "Final coastal breakfast and airport transfer.",
        activities: [
          { icon: "✈️", title: "Malta Airport Transfer", description: "Transfer to Malta Airport for return flight." }
        ],
        tip: "Leave 2 hours before flight time during peak morning traffic hours.",
        image: "/images/destinations/malta_1.jpg"
      }
    ],
    hotels: [
      { name: "The Palace Sliema", rating: "★★★★", type: "City Beach Hotel", location: "Sliema", image: "/images/destinations/malta_3.jpg" }
    ]
  },

// ── MONACO ITINERARIES ──
  "monaco-4n5d": {
    slug: "monaco-4n5d",
    destination: "Monaco",
    title: "Monaco & French Riviera Glamour (Monte Carlo & Cannes)",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/monaco_1.jpg",
    tagline: "Ultra-Luxury Riviera, Harbor Superyachts & Monte Carlo",
    basePrice: 98000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Nice & Transfer to Monaco",
        tag: "MONACO",
        tagline: "Drive along the breathtaking Middle Corniche cliff road into the Principality of Monaco.",
        activities: [
          { icon: "🚘", title: "Nice to Monaco Transfer", description: "Scenic 30-minute coastal drive passing Villefranche-sur-Mer." },
          { icon: "🏨", title: "Monte Carlo Luxury Hotel Check-in", description: "Check into your hotel overlooking Casino Square or Port Hercule." },
          { icon: "🥂", title: "Port Hercule Harbour Walk", description: "Stroll along multi-million dollar superyachts docked at the Marina." }
        ],
        tip: "Monaco is compact (2 sq km) — almost everything in Monte Carlo is walkable.",
        image: "/images/destinations/monaco_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Monte Carlo Casino Square & Prince's Palace",
        tag: "MONTE CARLO",
        tagline: "Experience the epitome of European glamour and royal history.",
        activities: [
          { icon: "🏰", title: "Prince's Palace Change of Guard", description: "Watch the Carabiniers du Prince ceremony at 11:55 AM on Palace Square." },
          { icon: "🎰", title: "Casino de Monte-Carlo Visit", description: "Tour the Belle Époque atrium and gaming rooms featured in James Bond films." },
          { icon: "🌺", title: "Princess Grace Rose Garden Walk", description: "Stroll through 4,000 rose bushes planted in memory of Princess Grace." }
        ],
        tip: "Casino de Monte-Carlo requires formal dress after 7:00 PM (jacket for men).",
        image: "/images/destinations/monaco_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Éze Medieval Village & Fragonard Perfumery",
        tag: "FRENCH RIVIERA",
        tagline: "Visit an eagle's-nest medieval village suspended 400 meters above the Mediterranean.",
        activities: [
          { icon: "🏰", title: "Éze Village Botanical Garden", description: "Exotic garden with cacti set inside 12th-century castle ruins." },
          { icon: "🌸", title: "Fragonard Perfume Factory Tour", description: "Learn secret French perfume crafting techniques and create your own fragrance." }
        ],
        tip: "Wear comfortable walking shoes for Éze's steep stone steps.",
        image: "/images/destinations/monaco_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Day Trip to Cannes & Promenade des Anglais",
        tag: "CANNES",
        tagline: "Walk the Red Carpet of Cannes Film Festival and Nice's palm-lined seafront.",
        activities: [
          { icon: "🎬", title: "Palais des Festivals Cannes", description: "Step on the famous red carpet steps of the Cannes Film Festival." },
          { icon: "🛍️", title: "Boulevard de la Croisette Shopping", description: "Luxury boutique shopping along Cannes' beachfront avenue." }
        ],
        tip: "Try Socca (chickpea pancake) in Old Nice on your way back.",
        image: "/images/destinations/monaco_1.jpg"
      },
      {
        dayNumber: 5,
        title: "Oceanographic Museum & Departure",
        tag: "DEPARTURE",
        tagline: "Visit Jacques Cousteau's cliffside oceanarium before your return flight.",
        activities: [
          { icon: "🐠", title: "Oceanographic Museum of Monaco", description: "Aquarium carved into the face of the Rock of Monaco overlooking the sea." },
          { icon: "✈️", title: "Private Transfer to Nice Airport", description: "Return transfer to Nice Côte d'Azur Airport." }
        ],
        tip: "Nice Airport has executive duty-free shopping for French wines and fashion.",
        image: "/images/destinations/monaco_1.jpg"
      }
    ],
    hotels: [
      { name: "Hôtel Hermitage Monte-Carlo", rating: "★★★★★", type: "Palace Hotel", location: "Monte Carlo", image: "/images/destinations/monaco_1.jpg" },
      { name: "Fairmont Monte Carlo", rating: "★★★★★", type: "Luxury Seafront Hotel", location: "Monte Carlo", image: "/images/destinations/monaco_2.jpg" }
    ]
  },
  "monaco-grandprix": {
    slug: "monaco-grandprix",
    destination: "Monaco",
    title: "Ultra-Luxury Monte Carlo Grand Prix & Yacht Experience",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/monaco_2.jpg",
    tagline: "Private Helicopters, Superyachts & Hôtel de Paris",
    basePrice: 165000,
    days: [
      {
        dayNumber: 1,
        title: "Helicopter Transfer from Nice to Monaco",
        tag: "HELICOPTER ARRIVAL",
        tagline: "Soar over the Côte d'Azur coastline on a 7-minute private helicopter flight.",
        activities: [
          { icon: "🚁", title: "Nice to Monaco Heli Transfer", description: "7-minute flight landing at Monacair Heliport on the ocean's edge." },
          { icon: "🏨", title: "Hôtel de Paris Monte-Carlo Check-in", description: "Check into the iconic 5-star palace hotel directly on Casino Square." }
        ],
        tip: "Helicopter transfers bypass all coastal highway traffic completely.",
        image: "/images/destinations/monaco_2.jpg"
      },
      {
        dayNumber: 2,
        title: "Monaco Formula 1 Circuit Track Walk",
        tag: "F1 CIRCUIT",
        tagline: "Walk the legendary hairpin turns of the world's most famous street circuit.",
        activities: [
          { icon: "🏎️", title: "Grand Prix Circuit Tour", description: "Walk Sainte-Dévote, Casino Square Hairpin, and the famous Tunnel." },
          { icon: "🏎️", title: "HSH Prince of Monaco Car Collection", description: "Tour 100+ vintage classic cars and F1 racing cars owned by the Prince." }
        ],
        tip: "The Fairmont Hairpin is the slowest turn in Formula 1 racing.",
        image: "/images/destinations/monaco_1.jpg"
      },
      {
        dayNumber: 3,
        title: "VIP Superyacht Deck Pass & Champagne Bar",
        tag: "VIP YACHT",
        tagline: "Spend the day on a 45-meter superyacht moored in Port Hercule.",
        activities: [
          { icon: "🚤", title: "Tender Transfer to Superyacht", description: "Private tender boat out to your moored charter yacht." },
          { icon: "🥂", title: "Champagne & Caviar Deck Bar", description: "Unlimited Dom Pérignon and Beluga caviar served by private yacht crew." }
        ],
        tip: "Yacht deck passes offer the ultimate vantage point in Monaco.",
        image: "/images/destinations/monaco_2.jpg"
      },
      {
        dayNumber: 4,
        title: "Private Riviera Speedboat Charter to Saint-Tropez",
        tag: "SAINT TROPEZ",
        tagline: "Cruise along the French Riviera to the glamorous resort of Saint-Tropez.",
        activities: [
          { icon: "🚤", title: "Private Offshore Speedboat Charter", description: "Cruise past Cap Ferrat and Saint-Raphaël to Pampelonne Beach." },
          { icon: "🍽️", title: "Club 55 Beach Lunch", description: "Famous jet-set beach club lunch on Pampelonne sand." }
        ],
        tip: "Book Club 55 weeks in advance as celebrities frequent this beach club during summer.",
        image: "/images/destinations/monaco_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Le Louis XV Michelin 3-Star Dining",
        tag: "ALAIN DUCASSE",
        tagline: "Dine at Chef Alain Ducasse's legendary 3-Michelin Star restaurant.",
        activities: [
          { icon: "🍷", title: "Private Wine Cellar Tour", description: "Tour Hôtel de Paris's private wine cellar containing 350,000 rare bottles." },
          { icon: "🍽️", title: "3-Star Michelin Dinner", description: "Gourmet Riviera gastronomy under gold chandeliers." }
        ],
        tip: "The wine cellar hosted Winston Churchill's victory celebration in 1945.",
        image: "/images/destinations/monaco_2.jpg"
      },
      {
        dayNumber: 6,
        title: "Helicopter Transfer to Nice Airport",
        tag: "DEPARTURE",
        tagline: "Final VIP helicopter flight over the Riviera.",
        activities: [
          { icon: "🚁", title: "Helicopter Transfer to Nice Airport", description: "7-minute helicopter transfer back to Nice Côte d'Azur Airport." }
        ],
        tip: "Helicopter check-in luggage is transferred straight to your international flight.",
        image: "/images/destinations/monaco_1.jpg"
      }
    ],
    hotels: [
      { name: "Hôtel de Paris Monte-Carlo", rating: "★★★★★", type: "Ultra-Luxury Palace", location: "Place du Casino, Monaco", image: "/images/destinations/monaco_2.jpg" },
      { name: "Monte-Carlo Beach Hotel", rating: "★★★★★", type: "Seaside Resort", location: "Monaco Coast", image: "/images/destinations/monaco_1.jpg" }
    ]
  },
  "monaco-express": {
    slug: "monaco-express",
    destination: "Monaco",
    title: "Monaco & Côte d'Azur Coastal Highlights",
    duration: "3 Nights / 4 Days",
    heroImage: "/images/destinations/monaco_3.jpg",
    tagline: "Cliffside Palaces, Sea Walks & Riviera Magic",
    basePrice: 74000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive in Monaco & Japanese Garden",
        tag: "MONACO COAST",
        tagline: "Check in and stroll the zen Japanese Garden by the sea.",
        activities: [
          { icon: "🚘", title: "Nice Airport Transfer to Monaco", description: "Private car along the Grande Corniche road." },
          { icon: "🌿", title: "Japanese Garden (Jardin Japonais)", description: "Authentic Zen garden designed by Yasuo Beppu." }
        ],
        tip: "The Japanese garden was blessed by a Shinto priest and uses imported Japanese stones.",
        image: "/images/destinations/monaco_3.jpg"
      },
      {
        dayNumber: 2,
        title: "Rock of Monaco (Le Rocher) & Old Town",
        tag: "LE ROCHER",
        tagline: "Explore the medieval alleys of Monaco's old quarter.",
        activities: [
          { icon: "🏰", title: "Monaco Cathedral (St. Nicholas)", description: "Visit the resting place of Princess Grace Kelly and Prince Rainier III." },
          { icon: "🏛️", title: "Old Town Cobblestone Walk", description: "Charming souvenir shops, creperies, and ocean lookouts." }
        ],
        tip: "Monaco Cathedral is open daily with free entry.",
        image: "/images/destinations/monaco_1.jpg"
      },
      {
        dayNumber: 3,
        title: "Cap d'Ail Coastal Path Walk to Mala Beach",
        tag: "CAP D'AIL",
        tagline: "Walk the scenic rock path along turquoise waters into Plage de la Mala.",
        activities: [
          { icon: "🥾", title: "Sentier du Littoral Coastal Path", description: "Dramatic 2km cliffside walking trail right at the sea spray level." },
          { icon: "🏖️", title: "Plage de la Mala Cove Swim", description: "Secluded pebble and sand cove surrounded by sheer white cliffs." }
        ],
        tip: "La Mala beach features two exclusive private beach clubs with sun lounger rentals.",
        image: "/images/destinations/monaco_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Departure from Monaco",
        tag: "DEPARTURE",
        tagline: "Final Riviera breakfast and airport send-off.",
        activities: [
          { icon: "✈️", title: "Private Transfer to Nice Airport", description: "Return transfer to Nice Airport." }
        ],
        tip: "Confirm departure terminal (Terminal 1 or 2) with driver.",
        image: "/images/destinations/monaco_1.jpg"
      }
    ],
    hotels: [
      { name: "Le Méridien Beach Plaza Monaco", rating: "★★★★", type: "Private Beach Hotel", location: "Monte Carlo", image: "/images/destinations/monaco_3.jpg" }
    ]
  },

// ── MOROCCO ITINERARIES ──
  "morocco-7n8d": {
    slug: "morocco-7n8d",
    destination: "Morocco",
    title: "Morocco Imperial Cities & Sahara Desert Safari",
    duration: "7 Nights / 8 Days",
    heroImage: "/images/destinations/morocco_1.jpg",
    tagline: "Imperial Palaces, Sahara Dunes & Blue Medina Alleys",
    basePrice: 58500,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Casablanca & Transfer to Rabat",
        tag: "CASABLANCA & RABAT",
        tagline: "Visit Hassan II Mosque and drive to the Royal Capital.",
        activities: [
          { icon: "🕌", title: "Hassan II Mosque Tour", description: "World's 7th largest mosque built over the Atlantic Ocean." },
          { icon: "🏰", title: "Kasbah of the Udayas Rabat", description: "12th-century blue and white fortress overlooking the Bou Regreg river." }
        ],
        tip: "Hassan II Mosque allows non-Muslim visitors during official tour hours only.",
        image: "/images/destinations/morocco_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Chefchaouen — The Blue Pearl of Morocco",
        tag: "CHEFCHAOUEN",
        tagline: "Stroll blue-washed cobbled streets in the Rif Mountains.",
        activities: [
          { icon: "💙", title: "Blue Medina Photography Walk", description: "Explore iconic cobalt-blue alleys and arches." },
          { icon: "☕", title: "Outa el-Hammam Square Tea", description: "Mint tea at a rooftop café overlooking the Grand Mosque." }
        ],
        tip: "Wear contrasting yellow or white clothing for striking photo contrast against blue walls.",
        image: "/images/destinations/morocco_1.jpg"
      },
      {
        dayNumber: 3,
        title: "Fes UNESCO Medina & Leather Tannery",
        tag: "FES MEDINA",
        tagline: "Step into the world's largest car-free urban area.",
        activities: [
          { icon: "👞", title: "Chouara Tannery Viewpoint", description: "Observe centuries-old leather dyeing vats from leather shop terraces." },
          { icon: "🏛️", title: "Al-Qarawiyyin University", description: "Visit the world's oldest continually operating university (859 AD)." }
        ],
        tip: "Hold fresh mint leaves under your nose at Chouara Tannery for natural scent relief.",
        image: "/images/destinations/morocco_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Atlas Mountains Drive to Merzouga Sahara",
        tag: "SAHARA DESERT",
        tagline: "Cross the Ziz Valley palm oases into the golden sand dunes of Erg Chebbi.",
        activities: [
          { icon: "🐪", title: "Sunset Sahara Camel Trek", description: "Ride camels across 150-meter-high golden sand dunes." },
          { icon: "⛺", title: "Luxury Desert Camp Check-in", description: "Glamping tent with en-suite bath, Berbere drumming, and stargazing." }
        ],
        tip: "Charge your camera equipment before entering the desert camp.",
        image: "/images/destinations/morocco_2.jpg"
      },
      {
        dayNumber: 5,
        title: "Todra Gorge & Dades Valley Road of 1,000 Kasbahs",
        tag: "TODRA GORGE",
        tagline: "Drive between 300-meter sheer red limestone canyon walls.",
        activities: [
          { icon: "⛰️", title: "Todra Gorge Canyon Walk", description: "Walk along the clear glacial river flanked by massive red cliffs." },
          { icon: "🏰", title: "Kasbah Taourirt Ouarzazate", description: "Historic clay fortress known as Morocco's Hollywood." }
        ],
        tip: "Ouarzazate is famous for filming Gladiator, Game of Thrones, and The Mummy.",
        image: "/images/destinations/morocco_2.jpg"
      },
      {
        dayNumber: 6,
        title: "Aït Benhaddou UNESCO Fort & High Atlas Pass",
        tag: "AÏT BENHADDOU",
        tagline: "Cross Tizi n'Tichka mountain pass into Marrakech.",
        activities: [
          { icon: "🏰", title: "Aït Benhaddou Ksar Guided Walk", description: "Earthen mud-brick fortified village on the ancient caravan route." }
        ],
        tip: "Cross the stepping stones over the river for the most iconic view of Aït Benhaddou.",
        image: "/images/destinations/morocco_1.jpg"
      },
      {
        dayNumber: 7,
        title: "Marrakech Medina, Souks & Jemaa el-Fnaa",
        tag: "MARRAKECH",
        tagline: "Snake charmers, spice markets, and Majorelle Garden.",
        activities: [
          { icon: "🌿", title: "Jardin Majorelle & YSL Museum", description: "Cobalt blue botanical gardens restored by Yves Saint Laurent." },
          { icon: "🎪", title: "Jemaa el-Fnaa Night Market", description: "Vibrant square with food stalls, storytellers, and acrobats." }
        ],
        tip: "Bargaining is expected in Marrakech souks — start offer around 50% of asking price.",
        image: "/images/destinations/morocco_1.jpg"
      },
      {
        dayNumber: 8,
        title: "Departure from Marrakech",
        tag: "DEPARTURE",
        tagline: "Final Moroccan pastries and airport transfer.",
        activities: [
          { icon: "✈️", title: "Marrakech Menara Airport Transfer", description: "Transfer to Marrakech Menara Airport." }
        ],
        tip: "Menara Airport has won international architecture awards for its lattice sunscreens.",
        image: "/images/destinations/morocco_1.jpg"
      }
    ],
    hotels: [
      { name: "Riad Kniza Marrakech", rating: "★★★★★", type: "Historic Luxury Riad", location: "Marrakech Medina", image: "/images/destinations/morocco_1.jpg" },
      { name: "Merzouga Luxury Desert Camp", rating: "★★★★★", type: "Glamping Safari", location: "Erg Chebbi, Sahara", image: "/images/destinations/morocco_2.jpg" }
    ]
  },
  "morocco-luxury": {
    slug: "morocco-luxury",
    destination: "Morocco",
    title: "Morocco Luxury Riad Retreat (Marrakech, Fes & High Atlas)",
    duration: "6 Nights / 7 Days",
    heroImage: "/images/destinations/morocco_2.jpg",
    tagline: "5-Star Palace Riads, Private Atlas Drivers & Sahara Glamping",
    basePrice: 78000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Marrakech & 5-Star Riad Check-in",
        tag: "MARRAKECH LUXURY",
        tagline: "Check into a restored royal courtyard riad with private dip pool.",
        activities: [
          { icon: "🚘", title: "Chauffeur Airport Transfer", description: "Private luxury Mercedes transfer." },
          { icon: "🍹", title: "Rooftop Mint Tea Welcome", description: "Traditional tea ceremony looking out over Koutoubia Mosque." }
        ],
        tip: "Moroccan riads feature inner courtyard gardens designed for secluded tranquility.",
        image: "/images/destinations/morocco_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Private Marrakech Heritage & El Badi Palace",
        tag: "PALACE TOUR",
        tagline: "Exclusive private access to Bahia Palace and Saadian Tombs.",
        activities: [
          { icon: "🏰", title: "Bahia Palace & Courtyards", description: "Zellij tilework, carved cedar ceilings, and jasmine gardens." }
        ],
        tip: "Visit Bahia Palace early at 8:30 AM before tour groups arrive.",
        image: "/images/destinations/morocco_1.jpg"
      },
      {
        dayNumber: 3,
        title: "High Atlas Mountains & Kasbah Tamadot",
        tag: "HIGH ATLAS",
        tagline: "Drive into Richard Branson's luxury mountain retreat.",
        activities: [
          { icon: "⛰️", title: "Berber Village Private Walk", description: "Guided walk through walnut groves with local village elder." }
        ],
        tip: "High Atlas air is cool year-round — bring a light cashmere layer.",
        image: "/images/destinations/morocco_2.jpg"
      },
      {
        dayNumber: 4,
        title: "Fly / Helicopter to Sahara Desert Camp",
        tag: "SAHARA VIP",
        tagline: "Private desert charter to Erg Chebbi dunes.",
        activities: [
          { icon: "⛺", title: "VIP Sahara Camp Stay", description: "Private heated tent, plush king bed, and private stargazing deck." }
        ],
        tip: "Sahara stargazing is crystal clear under dark desert night skies.",
        image: "/images/destinations/morocco_2.jpg"
      },
      {
        dayNumber: 5,
        title: "Fes Imperial City & Royal Golf",
        tag: "FES PALACE",
        tagline: "Check into Fes's most historic boutique palazzo.",
        activities: [
          { icon: "🕌", title: "Fes Royal Palace Golden Gates", description: "Photograph the 7 brass royal palace doors." }
        ],
        tip: "Fes ceramics are famous for cobalt blue lead-free glaze.",
        image: "/images/destinations/morocco_3.jpg"
      },
      {
        dayNumber: 6,
        title: "Hammam Spa & Gourmet Tagine Dining",
        tag: "MOROCCAN SPA",
        tagline: "Authentic Black Soap Argan Hammam treatment.",
        activities: [
          { icon: "💆", title: "Royal Hammam & Argan Massage", description: "Exfoliating eucalyptus soap scrub and Argan oil massage." }
        ],
        tip: "Pure Moroccan Argan oil is extracted exclusively in southwestern Morocco.",
        image: "/images/destinations/morocco_1.jpg"
      },
      {
        dayNumber: 7,
        title: "Departure from Casablanca",
        tag: "DEPARTURE",
        tagline: "Chauffeur transfer to Casablanca Airport.",
        activities: [
          { icon: "✈️", title: "Casablanca Airport Transfer", description: "Executive airport send-off." }
        ],
        tip: "Casablanca Airport has VIP fast-track customs lanes.",
        image: "/images/destinations/morocco_1.jpg"
      }
    ],
    hotels: [
      { name: "La Mamounia Marrakech", rating: "★★★★★", type: "Royal Palace Hotel", location: "Marrakech", image: "/images/destinations/morocco_1.jpg" },
      { name: "Riad Fes - Relais & Châteaux", rating: "★★★★★", type: "Luxury Riad", location: "Fes Medina", image: "/images/destinations/morocco_3.jpg" }
    ]
  },
  "morocco-express": {
    slug: "morocco-express",
    destination: "Morocco",
    title: "Marrakech & Chefchaouen Highlights",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/morocco_3.jpg",
    tagline: "Blue Alleys, Palm Groves & Medina Souks",
    basePrice: 49000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Marrakech",
        tag: "MARRAKECH",
        tagline: "Check into your traditional Medina Riad.",
        activities: [
          { icon: "🏨", title: "Riad Check-in", description: "Traditional mint tea welcome." }
        ],
        tip: "Riads are hidden behind unassuming alley doors.",
        image: "/images/destinations/morocco_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Marrakech Palaces & Souks",
        tag: "SOUKS",
        tagline: "Explore leather goods, brass lamps, and spices.",
        activities: [
          { icon: "🛍️", title: "Souk Semmarine Shopping", description: "Browse traditional Moroccan crafts." }
        ],
        tip: "Keep a paper map handy inside the Medina.",
        image: "/images/destinations/morocco_1.jpg"
      },
      {
        dayNumber: 3,
        title: "Drive to Chefchaouen",
        tag: "BLUE CITY",
        tagline: "Ascend into the blue mountain town.",
        activities: [
          { icon: "💙", title: "Spanish Mosque Sunset Viewpoint", description: "Short hill walk for sunset views over Chefchaouen." }
        ],
        tip: "Sunset from the Spanish Mosque is a must-see.",
        image: "/images/destinations/morocco_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Chefchaouen Blue Street Walk",
        tag: "CHEFCHAOUEN",
        tagline: "Photograph famous blue doors and staircases.",
        activities: [
          { icon: "📸", title: "Ras El Maa Waterfall Walk", description: "Natural spring where locals wash carpets." }
        ],
        tip: "Respect local privacy when photographing residents.",
        image: "/images/destinations/morocco_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Departure via Tangier / Casablanca",
        tag: "DEPARTURE",
        tagline: "Airport transfer for return flight.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Private car transfer." }
        ],
        tip: "Confirm departure airport location.",
        image: "/images/destinations/morocco_1.jpg"
      }
    ],
    hotels: [
      { name: "Riad Cherifa Chefchaouen", rating: "★★★★", type: "Boutique Riad", location: "Chefchaouen", image: "/images/destinations/morocco_3.jpg" }
    ]
  },

// ── MONTENEGRO ITINERARIES ──
  "montenegro-5n6d": {
    slug: "montenegro-5n6d",
    destination: "Montenegro",
    title: "Montenegro Fjord & Coastal Citadels (Kotor, Budva & Perast)",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/montenegro_1.jpg",
    tagline: "Fjord-Like Bay of Kotor & Venetian Coastal Citadels",
    basePrice: 58000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Tivat / Kotor & Bay Sunset",
        tag: "BAY OF KOTOR",
        tagline: "Land on the Adriatic coast framed by 1,000-meter fjord cliffs.",
        activities: [
          { icon: "✈️", title: "Tivat Airport Transfer to Kotor", description: "15-minute coastal drive to Kotor Old Town." },
          { icon: "🏰", title: "Kotor UNESCO Citadel Evening Walk", description: "Walk Venetian stone walls built between the 9th and 19th centuries." }
        ],
        tip: "Kotor Old Town is completely pedestrianized.",
        image: "/images/destinations/montenegro_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Kotor Fortress Hike & Perast Boat Cruise",
        tag: "PERAST",
        tagline: "Hike 1,350 stone steps to San Giovanni Fortress and visit Our Lady of the Rocks.",
        activities: [
          { icon: "🥾", title: "San Giovanni Fortress Hike", description: "Climb steps for iconic views over the winding Bay of Kotor." },
          { icon: "⛵", title: "Our Lady of the Rocks Island Boat", description: "Boat ride to an artificial islet created by seamen dropping rocks." }
        ],
        tip: "Start San Giovanni climb before 8:30 AM to beat midday sun and cruise crowds.",
        image: "/images/destinations/montenegro_1.jpg"
      },
      {
        dayNumber: 3,
        title: "Budva Old Town & Mogren Beach",
        tag: "BUDVA RIVIERA",
        tagline: "2,500-year-old medieval coastal walled city and sandy beaches.",
        activities: [
          { icon: "🏖️", title: "Mogren Beach Walk", description: "Scenic wooden pathway along cliffs to twin sandy coves." },
          { icon: "🏰", title: "Budva Citadel Museum", description: "View ancient Greek amphorae and Venetian fortress walls." }
        ],
        tip: "Budva features vibrant evening seaside nightlife.",
        image: "/images/destinations/montenegro_2.jpg"
      },
      {
        dayNumber: 4,
        title: "Lovćen National Park & Serpentines Drive",
        tag: "LOVĆEN",
        tagline: "Drive 25 hair-pin turns looking over the entire Adriatic coastline.",
        activities: [
          { icon: "⛰️", title: "Njegoš Mausoleum Viewpoint", description: "Mausoleum perched atop Lovćen's second-highest peak (1,657m)." },
          { icon: "🧀", title: "Njegusi Village Smokehouse", description: "Sample famous Montenegrin prosciutto (pršut) and smoked cheese." }
        ],
        tip: "The 461 steps to Njegoš Mausoleum offer views of 80% of Montenegro on clear days.",
        image: "/images/destinations/montenegro_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Skadar Lake Boat Safari & Wine Tasting",
        tag: "SKADAR LAKE",
        tagline: "Southern Europe's largest lake overflowing with water lilies and pelicans.",
        activities: [
          { icon: "🦜", title: "Skadar Lake Boat Tour", description: "Cruise through water lily carpets in search of rare Dalmatian pelicans." },
          { icon: "🍷", title: "Virpazar Boutique Winery", description: "Taste local Vranac red wine paired with fresh lake carp." }
        ],
        tip: "Skadar Lake is home to over 280 species of wild birds.",
        image: "/images/destinations/montenegro_3.jpg"
      },
      {
        dayNumber: 6,
        title: "Departure from Tivat Airport",
        tag: "DEPARTURE",
        tagline: "Final coastal espresso and airport transfer.",
        activities: [
          { icon: "✈️", title: "Tivat Airport Transfer", description: "Transfer for departure flight." }
        ],
        tip: "Tivat Airport is just 10 minutes from Porto Montenegro.",
        image: "/images/destinations/montenegro_1.jpg"
      }
    ],
    hotels: [
      { name: "Boutique Hotel Astoria Kotor", rating: "★★★★★", type: "Venetian Palace Hotel", location: "Kotor Old Town", image: "/images/destinations/montenegro_1.jpg" },
      { name: "Avalal Resort & Villas Budva", rating: "★★★★", type: "Beachfront Resort", location: "Budva", image: "/images/destinations/montenegro_2.jpg" }
    ]
  },
  "montenegro-luxury": {
    slug: "montenegro-luxury",
    destination: "Montenegro",
    title: "Montenegro Ultra-Luxury Resort & Yacht Escapes (Sveti Stefan & Porto Montenegro)",
    duration: "6 Nights / 7 Days",
    heroImage: "/images/destinations/montenegro_2.jpg",
    tagline: "Private Islet Resorts, Superyacht Marinas & Blue Caves",
    basePrice: 95000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Tivat & Chauffeur to Sveti Stefan",
        tag: "SVETI STEFAN",
        tagline: "Check into Montenegro's iconic 15th-century private islet resort.",
        activities: [
          { icon: "🚘", title: "Chauffeur Airport Transfer", description: "Private Mercedes transfer from Tivat Airport." },
          { icon: "🥂", title: "Sunset Cocktails at Villa Miločer", description: "Drinks overlooking Queen's Beach pine cove." }
        ],
        tip: "Queen's Beach features pink sand and crystal-clear swimming coves.",
        image: "/images/destinations/montenegro_2.jpg"
      },
      {
        dayNumber: 2,
        title: "Private Yacht Charter to Blue Cave & Mamula",
        tag: "PRIVATE YACHT",
        tagline: "Full-day motor yacht charter to glowing sea caves.",
        activities: [
          { icon: "⛵", title: "Blue Cave Swim", description: "Swim inside a natural sea cave illuminated by iridescent blue light." },
          { icon: "🏰", title: "Mamula Island Fortress Visit", description: "Explore the restored 19th-century island fortress resort." }
        ],
        tip: "Sunlight inside Blue Cave turns water glowing turquoise between 11:00 AM and 1:00 PM.",
        image: "/images/destinations/montenegro_1.jpg"
      },
      {
        dayNumber: 3,
        title: "Porto Montenegro Superyacht Marina Day",
        tag: "PORTO MONTENEGRO",
        tagline: "Stroll Monaco of the Balkans marina boutiques.",
        activities: [
          { icon: "🛥️", title: "Porto Montenegro Marina Walk", description: "Browse luxury designer boutiques along superyacht docks." },
          { icon: "🏊", title: "Buddha-Bar Beach Club Pool", description: "64-meter infinity pool extending over the Bay of Kotor." }
        ],
        tip: "Porto Montenegro features top waterfront Asian fusion dining.",
        image: "/images/destinations/montenegro_2.jpg"
      },
      {
        dayNumber: 4,
        title: "Private Helicopter Flight over Durmitor National Park",
        tag: "HELICOPTER SAFARI",
        tagline: "Soar over Europe's deepest canyon (Tara River Canyon).",
        activities: [
          { icon: "🚁", title: "Panoramic Helicopter Flight", description: "Fly over Tara Canyon and Black Lake." }
        ],
        tip: "Tara River Canyon drops 1,300 meters — second only to Grand Canyon.",
        image: "/images/destinations/montenegro_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Luštica Bay & Private Beach Club",
        tag: "LUŠTICA BAY",
        tagline: "Relax at Chedi Luštica Bay resort.",
        activities: [
          { icon: "💆", title: "Chedi Asian Spa Session", description: "Holistic herbal massage." }
        ],
        tip: "Luštica Peninsula is famous for organic olive oil production.",
        image: "/images/destinations/montenegro_2.jpg"
      },
      {
        dayNumber: 6,
        title: "Perast Private Evening & Michelin Dining",
        tag: "PERAST PALACES",
        tagline: "Sunset dining overlooking Verige Strait.",
        activities: [
          { icon: "🍽️", title: "Seafood Fine Dining", description: "Fresh Adriatic wild sea bass paired with Krstač white wine." }
        ],
        tip: "Perast features 16 Baroque palaces built during maritime golden age.",
        image: "/images/destinations/montenegro_1.jpg"
      },
      {
        dayNumber: 7,
        title: "Departure from Tivat",
        tag: "DEPARTURE",
        tagline: "Private transfer to Tivat Airport.",
        activities: [
          { icon: "✈️", title: "Chauffeur Airport Transfer", description: "Return transfer for flight home." }
        ],
        tip: "Fast-track lounge access included at Tivat Airport.",
        image: "/images/destinations/montenegro_1.jpg"
      }
    ],
    hotels: [
      { name: "Aman Sveti Stefan", rating: "★★★★★", type: "Private Islet Resort", location: "Sveti Stefan", image: "/images/destinations/montenegro_2.jpg" },
      { name: "Regent Porto Montenegro", rating: "★★★★★", type: "Superyacht Marina Hotel", location: "Tivat", image: "/images/destinations/montenegro_1.jpg" }
    ]
  },
  "montenegro-adventure": {
    slug: "montenegro-adventure",
    destination: "Montenegro",
    title: "Montenegro Mountains & National Parks (Durmitor & Tara Canyon)",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/montenegro.webp",
    tagline: "Europe's Deepest Canyon Rafting & Alpine Glacial Lakes",
    basePrice: 49500,
    days: [
      {
        dayNumber: 1,
        title: "Arrive & Drive to Žabljak (Durmitor)",
        tag: "DURMITOR",
        tagline: "Ascend into Montenegro's highest mountain town.",
        activities: [
          { icon: "🚙", title: "Scenic Mountain Drive", description: "Drive past Piva Canyon and high alpine plateaus." }
        ],
        tip: "Žabljak sits at 1,456 meters elevation — crisp mountain air guaranteed.",
        image: "/images/destinations/montenegro_3.jpg"
      },
      {
        dayNumber: 2,
        title: "Black Lake (Crno Jezero) & Pine Forest Trek",
        tag: "BLACK LAKE",
        tagline: "Walk around twin glacial lakes under Medjed Peak.",
        activities: [
          { icon: "🌲", title: "Black Lake Trail Walk", description: "3.5km loop trail through dense black pine forests." }
        ],
        tip: "Rent a wooden rowboat on Black Lake for peaceful water photography.",
        image: "/images/destinations/montenegro_3.jpg"
      },
      {
        dayNumber: 3,
        title: "Tara River Canyon Rafting",
        tag: "TARA RAFTING",
        tagline: "Raft white waters through Europe's deepest canyon.",
        activities: [
          { icon: "🚣", title: "Tara River Rafting Tour", description: "Guided rafting under Đurđevića Tara Bridge." }
        ],
        tip: "Neoprene suits and safety helmets provided for all rafts.",
        image: "/images/destinations/montenegro_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Durmitor Ring Scenic Drive & Return to Coast",
        tag: "DURMITOR RING",
        tagline: "Drive 85km panoramic ring road past mountain peaks.",
        activities: [
          { icon: "⛰️", title: "Sedlo Pass Viewpoint", description: "Stand at 1,907 meters surrounded by dramatic limestone ridges." }
        ],
        tip: "Sedlo Pass is one of the highest paved roads in the Balkans.",
        image: "/images/destinations/montenegro_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Departure via Podgorica / Tivat",
        tag: "DEPARTURE",
        tagline: "Airport transfer for return flight.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Transfer to airport." }
        ],
        tip: "Confirm departure airport location.",
        image: "/images/destinations/montenegro_1.jpg"
      }
    ],
    hotels: [
      { name: "Hotel Soa Durmitor", rating: "★★★★", type: "Alpine Lodge", location: "Žabljak", image: "/images/destinations/montenegro_3.jpg" }
    ]
  },

// ── ITALY ITINERARIES ──
  "italy-7n8d": {
    slug: "italy-7n8d",
    destination: "Italy",
    title: "Italian Grand Highlights (Rome, Florence & Venice)",
    duration: "7 Nights / 8 Days",
    heroImage: "/images/destinations/italy_1.jpg",
    tagline: "La Dolce Vita, Renaissance Art & Amalfi Coastline",
    basePrice: 89000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Rome & Trevi Fountain Sunset",
        tag: "ROME",
        tagline: "Check into the Eternal City and toss a coin into Trevi Fountain.",
        activities: [
          { icon: "✈️", title: "Rome Fiumicino Airport Transfer", description: "Private transfer to your central hotel." },
          { icon: "⛲", title: "Trevi Fountain & Spanish Steps Stroll", description: "Evening walk through Baroque piazzas." }
        ],
        tip: "Toss a coin with your right hand over left shoulder into Trevi Fountain to ensure return to Rome.",
        image: "/images/destinations/italy_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Colosseum, Roman Forum & Vatican Museums",
        tag: "ANCIENT ROME",
        tagline: "Walk the arena floor of gladiators and gaze at the Sistine Chapel ceiling.",
        activities: [
          { icon: "🏛️", title: "Colosseum & Forum VIP Tour", description: "Skip-the-line access to ancient Rome's amphitheater." },
          { icon: "🎨", title: "Sistine Chapel & St. Peter's Basilica", description: "Michelangelo's masterpiece ceiling and St. Peter's Square." }
        ],
        tip: "Vatican City dress code requires covered knees and shoulders.",
        image: "/images/destinations/italy_1.jpg"
      },
      {
        dayNumber: 3,
        title: "High-Speed Frecciarossa Train to Florence",
        tag: "FLORENCE",
        tagline: "Reach the birthplace of the Renaissance in 90 minutes.",
        activities: [
          { icon: "🚄", title: "High-Speed Train to Florence", description: "Comfortable 1.5-hour train through Tuscan hills." },
          { icon: "⛪", title: "Florence Duomo (Santa Maria del Fiore)", description: "Marvel at Brunelleschi's red brick dome." }
        ],
        tip: "Climb Giotto's Campanile for the best photo looking directly at Brunelleschi's Dome.",
        image: "/images/destinations/italy_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Uffizi Gallery & Ponte Vecchio",
        tag: "RENAISSANCE ART",
        tagline: "See Botticelli's 'Birth of Venus' and Michelangelo's 'David'.",
        activities: [
          { icon: "🖼️", title: "Uffizi Gallery Guided Tour", description: "Masterpieces by Da Vinci, Botticelli, and Raphael." },
          { icon: "🌉", title: "Ponte Vecchio Sunset Walk", description: "Historic medieval stone bridge lined with goldsmith shops." }
        ],
        tip: "Piazzale Michelangelo offers the famous panoramic postcard view over Florence.",
        image: "/images/destinations/italy_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Train to Venice & Grand Canal Water Taxi",
        tag: "VENICE",
        tagline: "Glides past marble palaces into the Floating City.",
        activities: [
          { icon: "🚄", title: "High-Speed Train to Venice", description: "2-hour train across Northern Italy." },
          { icon: "🚤", title: "Grand Canal Private Water Taxi", description: "Arrive at your hotel dock via wooden water taxi." }
        ],
        tip: "Water taxis deliver you right to your hotel's canal doorway.",
        image: "/images/destinations/italy_2.jpg"
      },
      {
        dayNumber: 6,
        title: "St. Mark's Basilica & Gondola Ride",
        tag: "VENICE CANALS",
        tagline: "Private gondola navigation through quiet canal backwaters.",
        activities: [
          { icon: "⛵", title: "Traditional Venetian Gondola Ride", description: "Serenade ride through narrow canals under Rialto Bridge." },
          { icon: "🏛️", title: "Doge's Palace & Bridge of Sighs", description: "Walk the secret chambers and prisoner bridge." }
        ],
        tip: "Gondola fares are standardized — confirm rate (80-100 EUR) before boarding.",
        image: "/images/destinations/italy_2.jpg"
      },
      {
        dayNumber: 7,
        title: "Murano & Burano Glass Blowing Islands",
        tag: "BURANO",
        tagline: "Vibrant rainbow-colored lace fishing houses and glassblowers.",
        activities: [
          { icon: "🎨", title: "Burano Island Color Walk", description: "Photograph brightly painted fisherman cottages." },
          { icon: "💎", title: "Murano Glassmaster Demo", description: "Watch master glassblowers shape hot glass into art." }
        ],
        tip: "Try Risotto al Nero di Seppia (squid ink risotto) in Burano.",
        image: "/images/destinations/italy_2.jpg"
      },
      {
        dayNumber: 8,
        title: "Departure from Venice Marco Polo Airport",
        tag: "DEPARTURE",
        tagline: "Water taxi transfer to Marco Polo Airport.",
        activities: [
          { icon: "✈️", title: "Venice Airport Transfer", description: "Water taxi or shuttle to Venice Marco Polo Airport." }
        ],
        tip: "Buy authentic Italian cantucci almond biscotti at Venice Airport.",
        image: "/images/destinations/italy_1.jpg"
      }
    ],
    hotels: [
      { name: "Hotel Artemide Rome", rating: "★★★★★", type: "Luxury Hotel", location: "Rome Centre", image: "/images/destinations/italy_1.jpg" },
      { name: "Hotel Splendid Venice", rating: "★★★★★", type: "Canal Hotel", location: "St. Mark's, Venice", image: "/images/destinations/italy_2.jpg" }
    ]
  },
  "italy-amalfi": {
    slug: "italy-amalfi",
    destination: "Italy",
    title: "Amalfi Coast & Capri Luxury Romance (Positano & Ravello)",
    duration: "6 Nights / 7 Days",
    heroImage: "/images/destinations/italy_2.jpg",
    tagline: "Cliffside Positano Hotels, Capri Blue Grotto & Limoncello",
    basePrice: 115000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Naples & Private Chauffeur to Positano",
        tag: "POSITANO",
        tagline: "Drive the breathtaking coastal bends into pastel Positano.",
        activities: [
          { icon: "🚘", title: "Naples to Positano Private Transfer", description: "Scenic cliffside drive past Sorrento." },
          { icon: "🍸", title: "Cliffside Sunset Aperitivo", description: "Sip Aperol Spritz overlooking Positano's cascading pink villas." }
        ],
        tip: "Positano has thousands of steep stairs — wear comfortable flat sandals or sneakers.",
        image: "/images/destinations/italy_2.jpg"
      },
      {
        dayNumber: 2,
        title: "Private Boat Charter to Capri & Blue Grotto",
        tag: "CAPRI",
        tagline: "Sail around the Faraglioni rock formations and Blue Grotto.",
        activities: [
          { icon: "🚤", title: "Capri Private Boat Charter", description: "Full-day boat cruise with private skipper around Capri." },
          { icon: "💙", title: "Blue Grotto Rowing Boat", description: "Row inside the luminous sapphire sea cave." }
        ],
        tip: "Capri Anacapri chairlift to Monte Solaro offers 360-degree views of the Bay of Naples.",
        image: "/images/destinations/italy_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Path of the Gods (Sentiero degli Dei) Trek",
        tag: "PATH OF THE GODS",
        tagline: "Hike ancient cliff paths suspension-high above the Tyrrhenian Sea.",
        activities: [
          { icon: "🥾", title: "Path of the Gods Guided Walk", description: "6km trail from Bomerano to Nocelle with coastal panoramas." }
        ],
        tip: "Stop at Shepherd's Hut on the trail for freshly squeezed lemonade.",
        image: "/images/destinations/italy_1.jpg"
      },
      {
        dayNumber: 4,
        title: "Ravello Gardens & Villa Cimbrone Terrace of Infinity",
        tag: "RAVELLO",
        tagline: "Visit the quiet hill town famous for classical music and infinity views.",
        activities: [
          { icon: "🏛️", title: "Villa Cimbrone Infinity Terrace", description: "Marble bust statues overlooking the sea from 350 meters altitude." }
        ],
        tip: "Ravello is quieter than Positano and ideal for romantic lunches.",
        image: "/images/destinations/italy_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Amalfi Town & Authentic Limoncello Tasting",
        tag: "AMALFI TOWN",
        tagline: "Explore St. Andrew's Cathedral and organic lemon groves.",
        activities: [
          { icon: "🍋", title: "Lemon Grove Tour & Tasting", description: "Walk Sfusato Amalfitano lemon orchards and sample authentic Limoncello." }
        ],
        tip: "Amalfi lemons are so sweet you can eat them raw with sugar.",
        image: "/images/destinations/italy_2.jpg"
      },
      {
        dayNumber: 6,
        title: "Spa & Michelin Fine Dining",
        tag: "LUXURY SPA",
        tagline: "Cliffside spa massage and Michelin-starred seafood dinner.",
        activities: [
          { icon: "💆", title: "Cliffside Sea Spa", description: "Hydrotherapy pool overlooking Positano bay." }
        ],
        tip: "La Sponda in Positano is lit by 400 candles every evening.",
        image: "/images/destinations/italy_2.jpg"
      },
      {
        dayNumber: 7,
        title: "Departure via Naples",
        tag: "DEPARTURE",
        tagline: "Private transfer to Naples Airport.",
        activities: [
          { icon: "✈️", title: "Naples Airport Transfer", description: "Return transfer for flight home." }
        ],
        tip: "Try authentic Neapolitan Margherita pizza at Naples airport before departure.",
        image: "/images/destinations/italy_1.jpg"
      }
    ],
    hotels: [
      { name: "Le Sirenuse Positano", rating: "★★★★★", type: "Ultra-Luxury Cliffside", location: "Positano", image: "/images/destinations/italy_2.jpg" },
      { name: "Belmond Hotel Caruso Ravello", rating: "★★★★★", type: "Palace Hotel", location: "Ravello", image: "/images/destinations/italy_3.jpg" }
    ]
  },
  "italy-tuscany": {
    slug: "italy-tuscany",
    destination: "Italy",
    title: "Tuscany Wine & Heritage Escape (Siena, San Gimignano & Pisa)",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/italy_3.jpg",
    tagline: "Chianti Vineyards, Medieval Towers & Leaning Tower of Pisa",
    basePrice: 72000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Florence & Drive to Tuscan Villa",
        tag: "TUSCANY",
        tagline: "Check into a historic Tuscan estate amidst cypress trees.",
        activities: [
          { icon: "🚘", title: "Florence to Tuscany Transfer", description: "Drive through rolling Chianti vineyards." }
        ],
        tip: "Tuscan villas offer peaceful country surroundings.",
        image: "/images/destinations/italy_3.jpg"
      },
      {
        dayNumber: 2,
        title: "Chianti Wine Route & Vineyard Lunch",
        tag: "CHIANTI",
        tagline: "Taste Chianti Classico DOCG wines at a 15th-century castle winery.",
        activities: [
          { icon: "🍷", title: "Castle Winery Tasting", description: "Sample Gran Selezione wines paired with pecorino cheese and prosciutto." }
        ],
        tip: "Look for the Black Rooster (Gallo Nero) seal for authentic Chianti Classico.",
        image: "/images/destinations/italy_3.jpg"
      },
      {
        dayNumber: 3,
        title: "Siena Medieval Citadel & Piazza del Campo",
        tag: "SIENA",
        tagline: "Explore the shell-shaped brick square famous for Palio horse races.",
        activities: [
          { icon: "🏰", title: "Piazza del Campo Walk", description: "Sit at outdoor cafes in one of Europe's greatest medieval squares." }
        ],
        tip: "Try Siena's Panforte fruit cake baked since medieval times.",
        image: "/images/destinations/italy_3.jpg"
      },
      {
        dayNumber: 4,
        title: "San Gimignano Medieval Towers & World Best Gelato",
        tag: "SAN GIMIGNANO",
        tagline: "Visit Manhattan of the Middle Ages with 14 standing stone towers.",
        activities: [
          { icon: "🍦", title: "Gelateria Dondoli Tasting", description: "Taste award-winning World Champion gelato." }
        ],
        tip: "Gelateria Dondoli's Saffron & Vernaccia flavor is world-famous.",
        image: "/images/destinations/italy_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Pisa Leaning Tower & Square of Miracles",
        tag: "PISA",
        tagline: "Photograph the famous leaning bell tower of Pisa.",
        activities: [
          { icon: "🏛️", title: "Pisa Leaning Tower Ascent", description: "Climb 294 marble steps inside the leaning tower." }
        ],
        tip: "Book Leaning Tower climb tickets weeks ahead — entry numbers are strictly limited.",
        image: "/images/destinations/italy_1.jpg"
      },
      {
        dayNumber: 6,
        title: "Departure from Florence / Pisa Airport",
        tag: "DEPARTURE",
        tagline: "Final espresso and airport transfer.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Transfer to airport." }
        ],
        tip: "Confirm departure airport.",
        image: "/images/destinations/italy_3.jpg"
      }
    ],
    hotels: [
      { name: "Castello di Casole Tuscany", rating: "★★★★★", type: "Luxury Castle Estate", location: "Tuscany", image: "/images/destinations/italy_3.jpg" }
    ]
  },

// ── OMAN ITINERARIES ──
  "oman-5n6d": {
    slug: "oman-5n6d",
    destination: "Oman",
    title: "Oman Wonders (Muscat, Nizwa Fort & Wahiba Sands Desert)",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/oman_1.jpg",
    tagline: "Sultanate of Emerald Wadis, Grand Mosques & Sahara Dunes",
    basePrice: 46000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Muscat & Muttrah Corniche Sunset",
        tag: "MUSCAT",
        tagline: "Check into Oman's peaceful white capital on the Gulf of Oman.",
        activities: [
          { icon: "✈️", title: "Muscat International Airport Transfer", description: "Private transfer to your seaside hotel." },
          { icon: "🛍️", title: "Muttrah Souq & Corniche Walk", description: "Explore incense, frankincense burners, and silver Omani daggers (Khanjar)." }
        ],
        tip: "Muttrah Souq is best visited after 5:00 PM when frankincense burners are lit.",
        image: "/images/destinations/oman_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Sultan Qaboos Grand Mosque & Royal Opera House",
        tag: "GRAND MOSQUE",
        tagline: "Marvel at 21-ton Persian carpets and Swarovski crystal chandeliers.",
        activities: [
          { icon: "🕌", title: "Sultan Qaboos Grand Mosque Tour", description: "Walk the white marble prayer halls and hand-woven carpet." },
          { icon: "🏛️", title: "Royal Opera House Muscat", description: "Guided tour of Arabia's premier performing arts venue." }
        ],
        tip: "Mosque visiting hours are strictly 8:00 AM – 11:00 AM (closed Fridays to non-Muslims).",
        image: "/images/destinations/oman_1.jpg"
      },
      {
        dayNumber: 3,
        title: "Nizwa Fort & Jabreen Castle",
        tag: "NIZWA FORT",
        tagline: "Explore 17th-century circular cannon towers and date palm oases.",
        activities: [
          { icon: "🏰", title: "Nizwa Fort Circular Tower Ascent", description: "Climb the 30-meter-high fortress tower overlooking the Aravalli-like Hajar Mountains." },
          { icon: "🛍️", title: "Nizwa Silver Souq Walk", description: "Browse hand-crafted Omani silver jewelry and date tasting." }
        ],
        tip: "Visit Nizwa on Friday morning to catch the authentic traditional goat market.",
        image: "/images/destinations/oman_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Wahiba Sands Desert Safari & Bedouin Camp",
        tag: "WAHIBA SANDS",
        tagline: "Drive 4x4 vehicles across 100-meter golden sand dunes.",
        activities: [
          { icon: "🚙", title: "Dune Bashing Safari", description: "Thrilling 4x4 navigation over rolling desert dunes." },
          { icon: "🐪", title: "Sunset Camel Ride & Bedouin Tea", description: "Traditional Omani dates and cardamom coffee under the stars." }
        ],
        tip: "Deflate tires to 15 PSI for safe sand driving.",
        image: "/images/destinations/oman_2.jpg"
      },
      {
        dayNumber: 5,
        title: "Wadi Bani Khalid Emerald Pools & Return to Muscat",
        tag: "WADI BANI KHALID",
        tagline: "Swim in crystal-clear freshwater canyon pools framed by date palms.",
        activities: [
          { icon: "🏊", title: "Wadi Bani Khalid Swim", description: "Swim in warm turquoise natural rock pools." },
          { icon: "🌊", title: "Muqul Cave Exploration", description: "Walk the limestone cave system above the pools." }
        ],
        tip: "Wear conservative swimwear (t-shirt and shorts over swimsuit) in public wadis.",
        image: "/images/destinations/oman_3.jpg"
      },
      {
        dayNumber: 6,
        title: "Departure from Muscat",
        tag: "DEPARTURE",
        tagline: "Final Omani date cake breakfast and airport transfer.",
        activities: [
          { icon: "✈️", title: "Muscat Airport Transfer", description: "Private transfer to Muscat International Airport." }
        ],
        tip: "Muscat Airport duty-free sells authentic Amouage luxury Omani perfumes.",
        image: "/images/destinations/oman_1.jpg"
      }
    ],
    hotels: [
      { name: "Shangri-La Barr Al Jissah Muscat", rating: "★★★★★", type: "Luxury Beach Resort", location: "Muscat", image: "/images/destinations/oman_1.jpg" },
      { name: "Desert Nights Camp Wahiba", rating: "★★★★★", type: "Luxury Desert Glamping", location: "Wahiba Sands", image: "/images/destinations/oman_2.jpg" }
    ]
  },
  "oman-luxury": {
    slug: "oman-luxury",
    destination: "Oman",
    title: "Oman Luxury Resort & Mountain Escape (Alila Jabal Akhdar & Shangri-La)",
    duration: "6 Nights / 7 Days",
    heroImage: "/images/destinations/oman_2.jpg",
    tagline: "Green Mountain Cliff Resorts, Sunset Catamarans & Private Wadis",
    basePrice: 75000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Muscat & Private Resort Check-In",
        tag: "MUSCAT LUXURY",
        tagline: "Check into a private cove cliffside resort in Muscat.",
        activities: [
          { icon: "🚘", title: "Chauffeur Airport Transfer", description: "Private luxury Mercedes transfer." },
          { icon: "🍸", title: "Private Beach Sunset Aperitivo", description: "Cocktails overlooking the Gulf of Oman." }
        ],
        tip: "Muscat resort coves feature private reefs for snorkeling.",
        image: "/images/destinations/oman_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Private Catamaran Cruise & Dolphin Safari",
        tag: "DOLPHIN SAFARI",
        tagline: "Spot wild spinner dolphins leap along the coastline.",
        activities: [
          { icon: "🐬", title: "Dolphin Watching & Snorkeling", description: "Private catamaran charter to Bandar Khayran cove." }
        ],
        tip: "Bandar Khayran has calm fjord-like waters perfect for paddleboarding.",
        image: "/images/destinations/oman_1.jpg"
      },
      {
        dayNumber: 3,
        title: "Ascend to Jabal Akhdar (Green Mountain)",
        tag: "JABAL AKHDAR",
        tagline: "Drive 2,000 meters above sea level to Alila Jabal Akhdar cliff resort.",
        activities: [
          { icon: "⛰️", title: "Cliffside Resort Check-in", description: "Unobstructed views into a 1,000-meter deep gorge." }
        ],
        tip: "Jabal Akhdar mountain temperature is 15°C cooler than Muscat.",
        image: "/images/destinations/oman_2.jpg"
      },
      {
        dayNumber: 4,
        title: "Damask Rose Terraces & Diana's Point",
        tag: "ROSE TERRACES",
        tagline: "Walk terraced rose villages where Princess Diana stood.",
        activities: [
          { icon: "🌹", title: "Rose Water Distillery Visit", description: "See traditional Omani rose water extraction from April blooms." }
        ],
        tip: "April is peak Damask rose blooming season on Jabal Akhdar.",
        image: "/images/destinations/oman_2.jpg"
      },
      {
        dayNumber: 5,
        title: "Private Wadi Shab Canyon Hike & Cave Swim",
        tag: "WADI SHAB",
        tagline: "Trek through palm oases and swim inside a hidden waterfall cave.",
        activities: [
          { icon: "🏊", title: "Hidden Waterfall Cave Swim", description: "Swim through a narrow keyhole rock into a subterranean waterfall pool." }
        ],
        tip: "Bring a waterproof bag (dry bag) for your phone during the cave swim.",
        image: "/images/destinations/oman_3.jpg"
      },
      {
        dayNumber: 6,
        title: "Alila Spa & Stargazing Dining",
        tag: "MOUNTAIN SPA",
        tagline: "Frankincense spa scrub and private cliffside dinner.",
        activities: [
          { icon: "💆", title: "Omani Frankincense Massage", description: "Healing massage using native Omani Boswellia sacra resin oil." }
        ],
        tip: "Omani frankincense is considered the highest grade in the world.",
        image: "/images/destinations/oman_2.jpg"
      },
      {
        dayNumber: 7,
        title: "Departure from Muscat",
        tag: "DEPARTURE",
        tagline: "Chauffeur transfer to Muscat International Airport.",
        activities: [
          { icon: "✈️", title: "Muscat Airport Transfer", description: "Return transfer for flight home." }
        ],
        tip: "Muscat Airport lounge access included.",
        image: "/images/destinations/oman_1.jpg"
      }
    ],
    hotels: [
      { name: "Alila Jabal Akhdar", rating: "★★★★★", type: "Ultra-Luxury Cliff Resort", location: "Jabal Akhdar", image: "/images/destinations/oman_2.jpg" },
      { name: "The Chedi Muscat", rating: "★★★★★", type: "Boutique Beach Resort", location: "Muscat", image: "/images/destinations/oman_1.jpg" }
    ]
  },
  "oman-adventure": {
    slug: "oman-adventure",
    destination: "Oman",
    title: "Oman Coastal & Wadi Canyon Explorer (Bimmah Sinkhole & Sur)",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/oman_3.jpg",
    tagline: "Turquoise Sinkholes, Dhow Shipyards & Sea Turtles",
    basePrice: 38000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Muscat & Coastal Drive to Bimmah Sinkhole",
        tag: "BIMMAH SINKHOLE",
        tagline: "Swim in Hawiyat Najm (Meteor Fall) turquoise limestone sinkhole.",
        activities: [
          { icon: "🏊", title: "Bimmah Sinkhole Swim", description: "Descend concrete steps into 20-meter deep emerald saltwater pool." }
        ],
        tip: "Little doctor fish in the sinkhole provide natural foot exfoliation while you swim.",
        image: "/images/destinations/oman_3.jpg"
      },
      {
        dayNumber: 2,
        title: "Sur Dhow Shipyard & Ras al Jinz Turtle Sanctuary",
        tag: "TURTLE SANCTUARY",
        tagline: "See green sea turtles nesting on Arabian beaches.",
        activities: [
          { icon: "⛵", title: "Sur Wooden Dhow Shipyard", description: "Watch craftsmen build traditional wooden Omani dhow ships without nails." },
          { icon: "🐢", title: "Ras al Jinz Night Turtle Tour", description: "Guided night walk to observe giant green sea turtles laying eggs." }
        ],
        tip: "Flash photography is forbidden at Ras al Jinz to avoid disorienting mother turtles.",
        image: "/images/destinations/oman_3.jpg"
      },
      {
        dayNumber: 3,
        title: "Wadi Tiwi 4x4 Off-Road & Palm Groves",
        tag: "WADI TIWI",
        tagline: "Drive 4x4 vehicles past cliffside villages and banana plantations.",
        activities: [
          { icon: "🚙", title: "Wadi Tiwi Off-Road Drive", description: "Navigate narrow stone tracks between emerald pools." }
        ],
        tip: "Wadi Tiwi requires experienced 4x4 drivers due to steep narrow passes.",
        image: "/images/destinations/oman_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Return to Muscat & Muttrah Fort",
        tag: "MUTTRAH FORT",
        tagline: "Climb 16th-century Portuguese fortress overlooking Muscat harbor.",
        activities: [
          { icon: "🏰", title: "Muttrah Fort Sunset Walk", description: "Panoramic harbor views from Portuguese cannon turrets." }
        ],
        tip: "Muttrah Fort is lit with warm spotlights after dark.",
        image: "/images/destinations/oman_1.jpg"
      },
      {
        dayNumber: 5,
        title: "Muscat Departure",
        tag: "DEPARTURE",
        tagline: "Airport transfer for return flight.",
        activities: [
          { icon: "✈️", title: "Muscat Airport Transfer", description: "Transfer to airport." }
        ],
        tip: "Confirm departure terminal.",
        image: "/images/destinations/oman_1.jpg"
      }
    ],
    hotels: [
      { name: "Sur Grand Hotel", rating: "★★★★", type: "Coastal Hotel", location: "Sur", image: "/images/destinations/oman_3.jpg" }
    ]
  },

// ── QATAR ITINERARIES ──
  "qatar-4n5d": {
    slug: "qatar-4n5d",
    destination: "Qatar",
    title: "Doha City & Desert Inland Sea Experience",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/qatar_1.jpg",
    tagline: "Futuristic Skyline, Souq Waqif Heritage & Desert Inland Sea",
    basePrice: 42000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Doha & Souq Waqif Evening",
        tag: "DOHA & SOUQ WAQIF",
        tagline: "Check into your hotel and explore Doha's vibrant heritage souq.",
        activities: [
          { icon: "✈️", title: "Hamad International Airport Transfer", description: "Private car from World's Best Airport to central Doha." },
          { icon: "🛍️", title: "Souq Waqif Evening Walk", description: "Explore falcon souq, spice lanes, and Arabian horse stables." }
        ],
        tip: "Souq Waqif comes alive after sunset with outdoor cafes and shisha lounges.",
        image: "/images/destinations/qatar_2.jpg"
      },
      {
        dayNumber: 2,
        title: "Museum of Islamic Art & Doha Corniche",
        tag: "MUSEUM OF ISLAMIC ART",
        tagline: "Tour I.M. Pei's architectural icon on its own private island.",
        activities: [
          { icon: "🏛️", title: "Museum of Islamic Art Tour", description: "1,400 years of Islamic metalwork, ceramics, and manuscripts." },
          { icon: "⛵", title: "Traditional Dhow Sunset Cruise", description: "Sail along Doha Corniche with West Bay skyscraper skyline views." }
        ],
        tip: "The park behind MIA offers the classic postcard photo of Doha's skyline.",
        image: "/images/destinations/qatar_1.jpg"
      },
      {
        dayNumber: 3,
        title: "Khor Al Adaid (Inland Sea) Desert Safari",
        tag: "INLAND SEA",
        tagline: "Drive dunes where the desert sand meets the turquoise sea.",
        activities: [
          { icon: "🚙", title: "4x4 Sand Dune Bashing", description: "Adrenaline dune drive down steep slip-faces." },
          { icon: "🏖️", title: "Inland Sea Swim & BBQ", description: "Swim in calm sea waters bordering Saudi Arabia." }
        ],
        tip: "Khor Al Adaid is one of only two places in the world where desert dunes meet the ocean.",
        image: "/images/destinations/qatar_1.jpg"
      },
      {
        dayNumber: 4,
        title: "Katara Cultural Village & The Pearl-Qatar",
        tag: "THE PEARL",
        tagline: "Walk Mediterranean-style luxury marinas and Venetian canals.",
        activities: [
          { icon: "🏛️", title: "Katara Cultural Village & Amphitheatre", description: "Greek-Roman style outdoor amphitheatre by the sea." },
          { icon: "🛥️", title: "Qanat Quartier Venetian Walk", description: "Pastel-colored buildings and Rialto-style bridges on The Pearl." }
        ],
        tip: "Qanat Quartier on The Pearl has authentic Italian gelaterias.",
        image: "/images/destinations/qatar_3.jpg"
      },
      {
        dayNumber: 5,
        title: "National Museum of Qatar & Departure",
        tag: "DEPARTURE",
        tagline: "Visit Jean Nouvel's Desert Rose museum building before flight.",
        activities: [
          { icon: "🌺", title: "National Museum of Qatar Tour", description: "Interactive galleries inside desert rose crystal architecture." },
          { icon: "✈️", title: "Hamad Airport Transfer", description: "Transfer to Hamad International Airport." }
        ],
        tip: "Hamad Airport features a tropical indoor garden (Orchard) and duty-free shopping.",
        image: "/images/destinations/qatar_1.jpg"
      }
    ],
    hotels: [
      { name: "Sharq Village & Spa, a Ritz-Carlton Hotel", rating: "★★★★★", type: "Arabian Palace Resort", location: "Doha", image: "/images/destinations/qatar_1.jpg" },
      { name: "Souq Waqif Boutique Hotels by Tivoli", rating: "★★★★★", type: "Heritage Hotel", location: "Souq Waqif", image: "/images/destinations/qatar_2.jpg" }
    ]
  },
  "qatar-luxury": {
    slug: "qatar-luxury",
    destination: "Qatar",
    title: "Qatar Ultra-Luxury Escape (The Pearl-Qatar & Katara Cultural Village)",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/qatar_2.jpg",
    tagline: "Riviera Marinas, Private Beach Clubs & VIP Desert Camps",
    basePrice: 68000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Doha & 5-Star Marina Check-In",
        tag: "THE PEARL LUXURY",
        tagline: "Check into Marsa Malaz Kempinski on its private island.",
        activities: [
          { icon: "🚘", title: "Chauffeur Airport Transfer", description: "Private luxury Limousine transfer from Hamad Airport." },
          { icon: "🥂", title: "Private Beach Club Welcome", description: "Sunset drinks overlooking Porto Arabia marina." }
        ],
        tip: "Marsa Malaz Kempinski features 11 restaurant venues and private beach access.",
        image: "/images/destinations/qatar_2.jpg"
      },
      {
        dayNumber: 2,
        title: "Private Yacht Charter to Banana Island",
        tag: "BANANA ISLAND",
        tagline: "Overwater villa luxury 20 minutes off the Doha coast.",
        activities: [
          { icon: "⛵", title: "Private Catamaran Charter", description: "Cruise to Anantara Banana Island Resort." },
          { icon: "🏊", title: "Surf Pool & Overwater Dining", description: "Fresh seafood lunch served above clear waters." }
        ],
        tip: "Banana Island features Qatar's only overwater bungalow villas.",
        image: "/images/destinations/qatar_3.jpg"
      },
      {
        dayNumber: 3,
        title: "VIP Desert Safari & Regency Sealine Camp",
        tag: "VIP DESERT",
        tagline: "Luxury desert glamping with private butler service.",
        activities: [
          { icon: "⛺", title: "Regency Sealine Luxury Camp", description: "Air-conditioned luxury tent on the beach with Arabian BBQ." }
        ],
        tip: "Camp features private bonfire and traditional oud music performance.",
        image: "/images/destinations/qatar_1.jpg"
      },
      {
        dayNumber: 4,
        title: "Msheireb Downtown & Place Vendôme Luxury Shopping",
        tag: "PLACE VENDÔME",
        tagline: "Shop French Renaissance-inspired luxury mall with dancing fountains.",
        activities: [
          { icon: "🛍️", title: "Place Vendôme Mall Walk", description: "High-end fashion boutiques and canal water show." }
        ],
        tip: "Place Vendôme's 3D water fountain show runs hourly after 7:00 PM.",
        image: "/images/destinations/qatar_2.jpg"
      },
      {
        dayNumber: 5,
        title: "Spa & Michelin Fine Dining",
        tag: "LUXURY SPA",
        tagline: "Hamman spa treatment and Michelin-star chef dining.",
        activities: [
          { icon: "💆", title: "Guinot Royal Spa Session", description: "Deep tissue massage and gold facial." }
        ],
        tip: "Doha features restaurants by Alain Ducasse and Nobu Matsuhisa.",
        image: "/images/destinations/qatar_2.jpg"
      },
      {
        dayNumber: 6,
        title: "Departure from Doha",
        tag: "DEPARTURE",
        tagline: "Chauffeur transfer to Hamad International Airport.",
        activities: [
          { icon: "✈️", title: "Hamad Airport VIP Lounge Transfer", description: "Al Mourjan Business Class Lounge access." }
        ],
        tip: "Al Mourjan Lounge features quiet sleeping rooms and full dining.",
        image: "/images/destinations/qatar_1.jpg"
      }
    ],
    hotels: [
      { name: "Marsa Malaz Kempinski The Pearl", rating: "★★★★★", type: "Ultra-Luxury Island Resort", location: "The Pearl-Qatar", image: "/images/destinations/qatar_2.jpg" },
      { name: "The St. Regis Doha", rating: "★★★★★", type: "Beachfront Luxury Hotel", location: "West Bay", image: "/images/destinations/qatar_1.jpg" }
    ]
  },
  "qatar-stopover": {
    slug: "qatar-stopover",
    destination: "Qatar",
    title: "Doha Stopover & Cultural Highlights",
    duration: "3 Nights / 4 Days",
    heroImage: "/images/destinations/qatar_3.jpg",
    tagline: "Museums, Corniche Cruises & Souq Alleyways",
    basePrice: 29500,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Doha & West Bay Promenade",
        tag: "WEST BAY",
        tagline: "Check into central city hotel overlooking West Bay towers.",
        activities: [
          { icon: "🏨", title: "Hotel Check-in", description: "City view room check-in." }
        ],
        tip: "Doha Metro is clean, fast, and connects directly to the airport.",
        image: "/images/destinations/qatar_1.jpg"
      },
      {
        dayNumber: 2,
        title: "National Museum & Souq Waqif",
        tag: "CULTURE DAY",
        tagline: "Explore desert rose architecture and traditional souq spice lanes.",
        activities: [
          { icon: "🏛️", title: "National Museum Tour", description: "Explore Qatari heritage galleries." }
        ],
        tip: "Souq Waqif has excellent traditional Qatari restaurants.",
        image: "/images/destinations/qatar_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Doha Corniche Sunset Dhow & Msheireb",
        tag: "CORNICHE",
        tagline: "Walk the 7km waterfront promenade.",
        activities: [
          { icon: "⛵", title: "Sunset Dhow Cruise", description: "1-hour boat sail." }
        ],
        tip: "Dhow boats dock near the Pearl Monument on the Corniche.",
        image: "/images/destinations/qatar_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Departure from Hamad Airport",
        tag: "DEPARTURE",
        tagline: "Transfer to airport for flight.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Transfer to Hamad Airport." }
        ],
        tip: "Allow 3 hours before international flights.",
        image: "/images/destinations/qatar_1.jpg"
      }
    ],
    hotels: [
      { name: "Mövenpick Hotel Doha", rating: "★★★★", type: "City Hotel", location: "Corniche", image: "/images/destinations/qatar_1.jpg" }
    ]
  },

// ── ABU DHABI ITINERARIES ──
  "abu-dhabi-4n5d": {
    slug: "abu-dhabi-4n5d",
    destination: "Abu Dhabi",
    title: "Abu Dhabi Grand Highlights (Grand Mosque, Louvre & Yas Island)",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/abu_dhabi_1.jpg",
    tagline: "Grand Mosque Architecture, Louvre Dome & Yas Island",
    basePrice: 48000,
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Abu Dhabi & Sheikh Zayed Grand Mosque Sunset",
        tag: "GRAND MOSQUE",
        tagline: "Visit the world's most magnificent white marble architectural masterpiece.",
        activities: [
          { icon: "✈️", title: "Abu Dhabi International Airport Transfer", description: "Private car transfer to your hotel." },
          { icon: "🕌", title: "Sheikh Zayed Grand Mosque VIP Tour", description: "Marvel at 82 domes, 24k gold chandeliers, and reflective pools." }
        ],
        tip: "Arrive at Grand Mosque at 4:30 PM to catch daylight, sunset, and illuminated night lighting.",
        image: "/images/destinations/abu_dhabi_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Louvre Abu Dhabi & Qasr Al Watan Palace",
        tag: "LOUVRE & PALACE",
        tagline: "Explore Jean Nouvel's floating dome museum and the Presidential Palace.",
        activities: [
          { icon: "🏛️", title: "Louvre Abu Dhabi Tour", description: "Gaze up at the 'Rain of Light' dome filtering sunlight over sea galleries." },
          { icon: "🏰", title: "Qasr Al Watan Presidential Palace", description: "Walk white granite domes, royal library, and evening light show." }
        ],
        tip: "Qasr Al Watan light show (Palace in Motion) starts 30 minutes after sunset.",
        image: "/images/destinations/abu_dhabi_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Yas Island — Ferrari World & Warner Bros World",
        tag: "YAS ISLAND",
        tagline: "Ride the world's fastest roller coaster at 240 km/h.",
        activities: [
          { icon: "🏎️", title: "Ferrari World Abu Dhabi", description: "Ride Formula Rossa coaster reaching 240 km/h in 4.9 seconds." },
          { icon: "🎬", title: "Warner Bros. World Abu Dhabi", description: "Explore Gotham City, Metropolis, and Cartoon Junction indoor zones." }
        ],
        tip: "Fast Pass tickets are recommended on weekends to skip coaster queues.",
        image: "/images/destinations/abu_dhabi_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Emirates Palace & Corniche Beach Stroll",
        tag: "EMIRATES PALACE",
        tagline: "Sip 24-karat gold leaf cappuccino inside the 3-billion-dollar palace hotel.",
        activities: [
          { icon: "☕", title: "Emirates Palace Gold Cappuccino", description: "Signature coffee dusted with real 24k gold flakes at Le Café." },
          { icon: "🏖️", title: "Abu Dhabi Corniche Beach Walk", description: "Walk 8km landscaped waterfront path looking at Marina Mall." }
        ],
        tip: "Smart casual dress code enforced inside Emirates Palace hotel lobby.",
        image: "/images/destinations/abu_dhabi_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Departure from Abu Dhabi",
        tag: "DEPARTURE",
        tagline: "Final Middle Eastern breakfast and airport send-off.",
        activities: [
          { icon: "✈️", title: "Abu Dhabi Airport Transfer", description: "Transfer to Abu Dhabi International Airport (Zayed International)." }
        ],
        tip: "Zayed International Airport (Terminal A) features world-class shopping.",
        image: "/images/destinations/abu_dhabi_1.jpg"
      }
    ],
    hotels: [
      { name: "Emirates Palace Mandarin Oriental", rating: "★★★★★", type: "Ultra-Luxury Palace", location: "Corniche", image: "/images/destinations/abu_dhabi_3.jpg" },
      { name: "W Abu Dhabi - Yas Island", rating: "★★★★★", type: "F1 Trackside Hotel", location: "Yas Island", image: "/images/destinations/abu_dhabi_3.jpg" }
    ]
  },
  "abu-dhabi-luxury": {
    slug: "abu-dhabi-luxury",
    destination: "Abu Dhabi",
    title: "Abu Dhabi Palace & Desert Resort Luxury (Emirates Palace & Qasr Al Sarab)",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/abu_dhabi_2.jpg",
    tagline: "Gold Cappuccinos, Desert Fortresses & Private Falconry",
    basePrice: 85000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Abu Dhabi & Emirates Palace VIP Check-In",
        tag: "EMIRATES PALACE",
        tagline: "Check into a 5-star suite inside Abu Dhabi's most famous palace hotel.",
        activities: [
          { icon: "🚘", title: "Chauffeur Airport Transfer", description: "Private luxury SUV transfer from Zayed International Airport." },
          { icon: "🍹", title: "Private Beach Sunbed Service", description: "Personal butler service on Emirates Palace private beach." }
        ],
        tip: "Resort spans 1.3km of private white sand beach.",
        image: "/images/destinations/abu_dhabi_3.jpg"
      },
      {
        dayNumber: 2,
        title: "Private Louvre Kayaking & Art Tour",
        tag: "LOUVRE KAYAK",
        tagline: "Kayak under Louvre Abu Dhabi's floating dome at sunrise.",
        activities: [
          { icon: "🛶", title: "Louvre Abu Dhabi Sunrise Kayak", description: "Paddle around museum sea walls under the steel dome." }
        ],
        tip: "Sunrise kayaking tours run at 6:00 AM on weekends.",
        image: "/images/destinations/abu_dhabi_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Drive into Liwa Desert & Qasr Al Sarab Fortress Resort",
        tag: "QASR AL SARAB",
        tagline: "Check into Anantara's luxury fortress resort in the Empty Quarter (Rub' al Khali).",
        activities: [
          { icon: "🏜️", title: "Empty Quarter Desert Arrival", description: "Drive into world's largest continuous sand desert." }
        ],
        tip: "Rub' al Khali features sand dunes over 250 meters high.",
        image: "/images/destinations/abu_dhabi_2.jpg"
      },
      {
        dayNumber: 4,
        title: "Sunset Falconry & Saluki Dog Demonstration",
        tag: "FALCONRY VIP",
        tagline: "Experience royal Omani and Bedouin hunting falconry traditions.",
        activities: [
          { icon: "🦅", title: "Private Falconry & Saluki Show", description: "Watch falcons swoop and Arabian Saluki hounds run desert dunes." }
        ],
        tip: "Falcons hold revered status in UAE heritage and have their own passports.",
        image: "/images/destinations/abu_dhabi_2.jpg"
      },
      {
        dayNumber: 5,
        title: "Anantara Desert Spa & Private Dune Candlelight Dinner",
        tag: "DESERT ROMANCE",
        tagline: "Couples spa session and private dining under Arabian stars.",
        activities: [
          { icon: "🕯️", title: "Private Dune Candlelight Dinner", description: "4-course dinner set on top of a solitary desert dune." }
        ],
        tip: "Stargazing telescopes provided at desert camp.",
        image: "/images/destinations/abu_dhabi_2.jpg"
      },
      {
        dayNumber: 6,
        title: "Departure from Abu Dhabi",
        tag: "DEPARTURE",
        tagline: "Chauffeur transfer to Zayed International Airport.",
        activities: [
          { icon: "✈️", title: "Airport VIP Transfer", description: "Executive airport transfer for flight home." }
        ],
        tip: "Fast-track security and lounge access included.",
        image: "/images/destinations/abu_dhabi_1.jpg"
      }
    ],
    hotels: [
      { name: "Qasr Al Sarab Desert Resort by Anantara", rating: "★★★★★", type: "Desert Fortress Resort", location: "Liwa Desert", image: "/images/destinations/abu_dhabi_2.jpg" },
      { name: "Emirates Palace Mandarin Oriental", rating: "★★★★★", type: "Ultra-Luxury Palace", location: "Abu Dhabi", image: "/images/destinations/abu_dhabi_3.jpg" }
    ]
  },
  "abu-dhabi-family": {
    slug: "abu-dhabi-family",
    destination: "Abu Dhabi",
    title: "Yas Island Ultimate Family Theme Park Adventure",
    duration: "3 Nights / 4 Days",
    heroImage: "/images/destinations/abu_dhabi_3.jpg",
    tagline: "Ferrari World, Yas Waterworld & SeaWorld Parks",
    basePrice: 36000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Abu Dhabi & Yas Island Check-In",
        tag: "YAS ISLAND",
        tagline: "Check into your resort right next to Yas Marina F1 Circuit.",
        activities: [
          { icon: "🏨", title: "Yas Hotel Check-in", description: "Check into family suite with theme park passes." }
        ],
        tip: "Yas Island hotels include multi-park entry passes.",
        image: "/images/destinations/abu_dhabi_3.jpg"
      },
      {
        dayNumber: 2,
        title: "Ferrari World & Yas Waterworld",
        tag: "THEME PARKS",
        tagline: "Full day of coaster thrill rides and water slides.",
        activities: [
          { icon: "🏎️", title: "Ferrari World Coasters", description: "Formula Rossa and Flying Aces." },
          { icon: "🏊", title: "Yas Waterworld Slides", description: "Dawwama hydro-magnetic tornado water slide." }
        ],
        tip: "Yas Waterworld provides free towel rentals for hotel guests.",
        image: "/images/destinations/abu_dhabi_3.jpg"
      },
      {
        dayNumber: 3,
        title: "SeaWorld Abu Dhabi & Yas Marina Evening",
        tag: "SEAWORLD",
        tagline: "Explore 8 immersive ocean realms and Endless Ocean aquarium.",
        activities: [
          { icon: "🐠", title: "SeaWorld Abu Dhabi Tour", description: "World's largest multi-species aquarium housing 68,000 marine animals." }
        ],
        tip: "SeaWorld Abu Dhabi is fully indoors and air-conditioned.",
        image: "/images/destinations/abu_dhabi_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Departure from Abu Dhabi",
        tag: "DEPARTURE",
        tagline: "Transfer to airport.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Transfer to airport." }
        ],
        tip: "Yas Island is only 10 minutes from Zayed International Airport.",
        image: "/images/destinations/abu_dhabi_1.jpg"
      }
    ],
    hotels: [
      { name: "Hilton Abu Dhabi Yas Island", rating: "★★★★★", type: "Family Resort", location: "Yas Island", image: "/images/destinations/abu_dhabi_3.jpg" }
    ]
  },
  "hong-kong-express": {
    slug: "hong-kong-express",
    destination: "Hong Kong",
    title: "Hong Kong Skyline & Disneyland Highlights",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/hong_kong_1.jpg",
    tagline: "Victoria Harbour Star Ferry, Peak Tram & Magical Day at Disneyland",
    basePrice: 52000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Hong Kong & Victoria Harbour Evening",
        tag: "HARBOUR VIEW",
        tagline: "Check into your hotel and enjoy Tsim Sha Tsui Promenade.",
        activities: [
          { icon: "✈️", title: "Hong Kong Airport Transfer", description: "Private car transfer to your hotel." },
          { icon: "⛴️", title: "Star Ferry Crossing", description: "Ride the iconic Star Ferry across Victoria Harbour." }
        ],
        tip: "Watch the Symphony of Lights at 8 PM from the waterfront.",
        image: "/images/destinations/hong_kong_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Victoria Peak & Central District",
        tag: "SKYLINE",
        tagline: "Historical Peak Tram ride to Sky Terrace 428.",
        activities: [
          { icon: "🚋", title: "Peak Tram Ride", description: "Ascend Victoria Peak on the famous funicular train." },
          { icon: "🏙️", title: "Sky Terrace 428 Views", description: "Panoramic skyline views over Hong Kong Island." }
        ],
        tip: "Take the Central-Mid-Levels Escalator up through Soho.",
        image: "/images/destinations/hong_kong_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Full Day at Hong Kong Disneyland",
        tag: "DISNEYLAND",
        tagline: "Magic and adventures across 7 immersive themed lands.",
        activities: [
          { icon: "🏰", title: "Disneyland Park Entry", description: "Full day access to rides, shows, and parades." }
        ],
        tip: "Catch the Momentous fireworks display over the castle.",
        image: "/images/destinations/hong_kong_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Lantau Island Giant Buddha & Cable Car",
        tag: "LANTAU",
        tagline: "Ride the Ngong Ping 360 cable car to the Bronze Buddha.",
        activities: [
          { icon: "🈴", title: "Tian Tan Giant Buddha", description: "Visit the massive bronze seated Buddha." },
          { icon: "🟤", title: "Ngong Ping Cable Car", description: "Scenic aerial ride across Tung Chung Bay." }
        ],
        tip: "Try local street snacks in Tai O Fishing Village.",
        image: "/images/destinations/hong_kong_1.jpg"
      },
      {
        dayNumber: 5,
        title: "Departure from Hong Kong",
        tag: "DEPARTURE",
        tagline: "Transfer to airport.",
        activities: [
          { icon: "✈️", title: "Airport Express Transfer", description: "Seamless airport transfer." }
        ],
        tip: "In-town check-in is available at Kowloon & Hong Kong stations.",
        image: "/images/destinations/hong_kong_2.jpg"
      }
    ],
    hotels: [
      { name: "Kowloon Shangri-La", rating: "★★★★★", type: "Harbour View Luxury", location: "Tsim Sha Tsui", image: "/images/destinations/hong_kong_1.jpg" }
    ]
  },
  "hong-kong-luxury": {
    slug: "hong-kong-luxury",
    destination: "Hong Kong",
    title: "Hong Kong Luxury Skyline & Peninsula Helicopter Tour",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/hong_kong_2.jpg",
    tagline: "Peninsula Harbour View Suite, Private Helicopter Flight & Michelin Dining",
    basePrice: 88000,
    days: [
      {
        dayNumber: 1,
        title: "Helicopter Transfer & Peninsula Check-in",
        tag: "LUXURY WELCOME",
        tagline: "Rolls-Royce transfer and Victoria Harbour suite.",
        activities: [
          { icon: "🚘", title: "Peninsula Rolls-Royce Transfer", description: "Private airport transfer in custom green Rolls-Royce Phantom." },
          { icon: "🥂", title: "Harbour Suite Check-in", description: "Champagne welcome at The Peninsula Hong Kong." }
        ],
        tip: "Enjoy afternoon tea in The Peninsula's grand lobby.",
        image: "/images/destinations/hong_kong_2.jpg"
      },
      {
        dayNumber: 2,
        title: "Private Helicopter Flight & Michelin Dining",
        tag: "HELICOPTER & MICHELIN",
        tagline: "Fly above Hong Kong Island and dine at Lung King Heen.",
        activities: [
          { icon: "🚁", title: "Helicopter Skyline Flight", description: "Private flight over Hong Kong harbour, Victoria Peak, and beaches." },
          { icon: "🍽️", title: "3-Star Michelin Dim Sum Dinner", description: "Exclusive tasting menu at 3-Michelin starred Lung King Heen." }
        ],
        tip: "The helipad is located directly on The Peninsula's roof.",
        image: "/images/destinations/hong_kong_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Private Yacht Cruise to Repulse Bay",
        tag: "PRIVATE YACHT",
        tagline: "Sail across Victoria Harbour to Hong Kong Island's southern beaches.",
        activities: [
          { icon: "🛥️", title: "Luxury Yacht Charter", description: "Half-day private yacht cruise to Deep Water Bay & Stanley Market." }
        ],
        tip: "Sunset drinks on deck offer unbeatable skyline views.",
        image: "/images/destinations/hong_kong_3.jpg"
      },
      {
        dayNumber: 4,
        title: "VIP Peak Experience & Luxury Shopping",
        tag: "VIP PEAK",
        tagline: "Private peak tram compartment and personal shopping host.",
        activities: [
          { icon: "🚋", title: "VIP Peak Tram Tour", description: "Fast-track access to Sky Terrace 428." },
          { icon: "🛍️", title: "Landmark Central Shopping", description: "Personal shopper experience at luxury fashion flagships." }
        ],
        tip: "Visit Felix Bar for drinks crafted by world-class mixologists.",
        image: "/images/destinations/hong_kong_1.jpg"
      },
      {
        dayNumber: 5,
        title: "Lantau Helicopter & Tian Tan Buddha VIP Tour",
        tag: "LANTAU VIP",
        tagline: "Private cable car crystal cabin and exclusive temple access.",
        activities: [
          { icon: "🈴", title: "Private Tian Tan Buddha Tour", description: "Exclusive access to temple chambers and crystal cable car." }
        ],
        tip: "Enjoy private tea tasting at Ngong Ping Village.",
        image: "/images/destinations/hong_kong_3.jpg"
      },
      {
        dayNumber: 6,
        title: "Departure from Hong Kong",
        tag: "DEPARTURE",
        tagline: "Luxury transfer to airport.",
        activities: [
          { icon: "✈️", title: "Chauffeur Airport Transfer", description: "Private luxury vehicle to HKIA VIP terminal." }
        ],
        tip: "Relax at Cathay Pacific's The Pier First Class Lounge.",
        image: "/images/destinations/hong_kong_2.jpg"
      }
    ],
    hotels: [
      { name: "The Peninsula Hong Kong", rating: "★★★★★", type: "Ultra Luxury Heritage", location: "Kowloon", image: "/images/destinations/hong_kong_2.jpg" }
    ]
  },
  "hong-kong-macau-combo": {
    slug: "hong-kong-macau-combo",
    destination: "Hong Kong",
    title: "Hong Kong & Macau Dual Heritage Explorer",
    duration: "6 Nights / 7 Days",
    heroImage: "/images/destinations/hong_kong_3.jpg",
    tagline: "TurboJET Ferry to Macau, Ruins of St. Paul's & Victoria Peak",
    basePrice: 68000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Hong Kong & Tsim Sha Tsui",
        tag: "HONG KONG",
        tagline: "Check in and explore Victoria Harbour.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Transfer to Kowloon hotel." },
          { icon: "⛴️", title: "Star Ferry & Avenue of Stars", description: "Evening promenade walk along the harbor." }
        ],
        tip: "Great photo spot at the Bruce Lee statue on Avenue of Stars.",
        image: "/images/destinations/hong_kong_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Victoria Peak & Disneyland Day",
        tag: "DISNEYLAND & PEAK",
        tagline: "Peak tram morning and magical afternoon at Disneyland.",
        activities: [
          { icon: "🚋", title: "Victoria Peak Tram", description: "Morning visit to Victoria Peak lookout." },
          { icon: "🏰", title: "Disneyland Access", description: "Afternoon and evening at Disneyland Hong Kong." }
        ],
        tip: "Take the MTR Disneyland Resort Line train.",
        image: "/images/destinations/hong_kong_3.jpg"
      },
      {
        dayNumber: 3,
        title: "TurboJET High-Speed Ferry to Macau",
        tag: "TURBOJET",
        tagline: "Cross the Pearl River Delta to Macau.",
        activities: [
          { icon: "⛴️", title: "High-Speed TurboJET Ferry", description: "1-hour luxury ferry ride to Macau Outer Harbour." },
          { icon: "🏨", title: "The Venetian Macao Check-in", description: "Check into suite on the Cotai Strip." }
        ],
        tip: "Have your passport handy for Macau border control.",
        image: "/images/destinations/macau_1.jpg"
      },
      {
        dayNumber: 4,
        title: "Ruins of St. Paul's & Senado Square UNESCO Tour",
        tag: "MACAU HERITAGE",
        tagline: "Explore Portuguese cobblestone historic district.",
        activities: [
          { icon: "🏛️", title: "Ruins of St. Paul's", description: "17th-century church facade." },
          { icon: "🏰", title: "Senado Square & A-Ma Temple", description: "UNESCO World Heritage historic walk." }
        ],
        tip: "Try authentic Macanese pork chop buns.",
        image: "/images/destinations/macau_2.jpg"
      },
      {
        dayNumber: 5,
        title: "Wynn Palace SkyCab & Cotai Strip",
        tag: "COTAI LUXURY",
        tagline: "Cable car performance lake and Venetian gondola.",
        activities: [
          { icon: "🎡", title: "Wynn Palace SkyCab", description: "Fountain lake cable car ride." },
          { icon: "🚣", title: "Venetian Canal Gondola", description: "Classic gondola ride through indoor canals." }
        ],
        tip: "Visit The Londoner Macau big ben clock tower replica.",
        image: "/images/destinations/macau_3.jpg"
      },
      {
        dayNumber: 6,
        title: "HK-Zhuhai-Macau Bridge Bus Back to Hong Kong",
        tag: "SEA BRIDGE",
        tagline: "Cross the world's longest sea-crossing bridge.",
        activities: [
          { icon: "🚌", title: "HZMB Bridge Shuttle Bus", description: "Cross the 55km sea bridge back to Hong Kong." }
        ],
        tip: "Spectacular ocean views from the bridge highway.",
        image: "/images/destinations/hong_kong_2.jpg"
      },
      {
        dayNumber: 7,
        title: "Departure from Hong Kong",
        tag: "DEPARTURE",
        tagline: "Transfer to airport.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Transfer to HKIA for your flight home." }
        ],
        tip: "Duty-free shopping at HKIA before boarding.",
        image: "/images/destinations/hong_kong_1.jpg"
      }
    ],
    hotels: [
      { name: "Kowloon Hotel Hong Kong", rating: "★★★★", type: "City Hotel", location: "Kowloon", image: "/images/destinations/hong_kong_1.jpg" },
      { name: "The Venetian Macao", rating: "★★★★★", type: "Luxury Resort", location: "Cotai Strip", image: "/images/destinations/macau_1.jpg" }
    ]
  },
  "macau-4n5d": {
    slug: "macau-4n5d",
    destination: "Macau",
    title: "Macau Heritage & Cotai Strip Highlights",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/macau_1.jpg",
    tagline: "Ruins of St. Paul's, Venetian Gondola & Macau Tower",
    basePrice: 45000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Macau & Venetian Cotai Strip",
        tag: "COTAI STRIP",
        tagline: "Check into your Cotai resort and ride the Venetian Gondola.",
        activities: [
          { icon: "🏨", title: "Cotai Resort Check-in", description: "Check into luxury suite on the Cotai Strip." },
          { icon: "🚣", title: "Venetian Gondola Ride", description: "Indoor canal ride with serenading gondoliers." }
        ],
        tip: "Walk through the indoor replica of St. Mark's Square.",
        image: "/images/destinations/macau_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Ruins of St. Paul's & UNESCO Historic Centre",
        tag: "HERITAGE",
        tagline: "Explore Portuguese colonial history and Senado Square.",
        activities: [
          { icon: "🏛️", title: "Ruins of St. Paul's", description: "17th-century facade of Church of St. Paul." },
          { icon: "🏰", title: "Monte Fort & Senado Square", description: "Panoramic views and Portuguese azulejo tile streets." }
        ],
        tip: "Sample fresh Macanese Portuguese egg tarts near St. Paul's.",
        image: "/images/destinations/macau_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Wynn Palace SkyCab & Macau Tower Skywalk",
        tag: "LUXURY & THRILLS",
        tagline: "Cable car over performance lake and panoramic tower view.",
        activities: [
          { icon: "🎡", title: "Wynn Palace SkyCab", description: "Cable car over dancing fountain lake." },
          { icon: "🗼", title: "Macau Tower Observation Deck", description: "Panoramic view 223m above the harbor." }
        ],
        tip: "The Wynn Palace SkyCab is complimentary for visitors.",
        image: "/images/destinations/macau_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Coloane Village & Hac Sa Beach",
        tag: "COASTAL ESCAPE",
        tagline: "Peaceful coastal village and black sand beach walk.",
        activities: [
          { icon: "🏖️", title: "Hac Sa Black Sand Beach", description: "Relax at Macau's natural black sand shoreline." },
          { icon: "🥧", title: "Lord Stow's Bakery", description: "Visit the original birthplace of Macanese egg tarts." }
        ],
        tip: "Coloane offers a tranquil contrast to Cotai's high energy.",
        image: "/images/destinations/macau_1.jpg"
      },
      {
        dayNumber: 5,
        title: "Departure from Macau",
        tag: "DEPARTURE",
        tagline: "Transfer to airport or ferry terminal.",
        activities: [
          { icon: "✈️", title: "Departure Transfer", description: "Transfer to Macau International Airport or Taipa Ferry." }
        ],
        tip: "HK-Zhuhai-Macau Bridge bus option is fast and scenic.",
        image: "/images/destinations/macau_2.jpg"
      }
    ],
    hotels: [
      { name: "The Venetian Macao", rating: "★★★★★", type: "Luxury Resort", location: "Cotai Strip", image: "/images/destinations/macau_1.jpg" }
    ]
  },
  "macau-luxury": {
    slug: "macau-luxury",
    destination: "Macau",
    title: "Macau Ultra-Luxury Casino & Resort Escape (The Londoner & Wynn Palace)",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/macau_2.jpg",
    tagline: "The Londoner Suites, Wynn SkyCab VIP & Robuchon Michelin Dining",
    basePrice: 79000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Macau & The Londoner Suites Check-in",
        tag: "LUXURY SUITES",
        tagline: "Limousine transfer and British-inspired luxury suite.",
        activities: [
          { icon: "🚘", title: "Limousine Airport Transfer", description: "Private luxury chauffeur from Macau Airport." },
          { icon: "🏨", title: "The Londoner Macau Check-in", description: "Stay in David Beckham-designed suites." }
        ],
        tip: "Watch the Big Ben light show outside the resort at 7:30 PM.",
        image: "/images/destinations/macau_2.jpg"
      },
      {
        dayNumber: 2,
        title: "Robuchon au Dôme 3-Star Michelin Lunch",
        tag: "MICHELIN DINING",
        tagline: "Dine inside the glass dome of Grand Lisboa at 238 metres.",
        activities: [
          { icon: "🍽️", title: "Robuchon au Dôme Michelin Gastronomy", description: "French fine dining with panoramic city views." }
        ],
        tip: "Dress code is smart elegant — book 30 days in advance.",
        image: "/images/destinations/macau_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Wynn Palace SkyCab & Performance Lake VIP Access",
        tag: "WYNN PALACE",
        tagline: "VIP cable car flight and private fountain viewing.",
        activities: [
          { icon: "🎡", title: "Wynn Palace SkyCab VIP Suite", description: "Private gondola over the 8-acre performance lake." }
        ],
        tip: "Evening shows feature classic opera and light spectacles.",
        image: "/images/destinations/macau_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Private UNESCO Heritage Architecture Tour",
        tag: "HERITAGE VIP",
        tagline: "Private historian guide through St. Paul's and Mandarin's House.",
        activities: [
          { icon: "🏛️", title: "Mandarin's House & St. Paul's VIP Tour", description: "Private guided historical walk." }
        ],
        tip: "Mandarin's House is a 4,000 sq meter traditional Chinese mansion.",
        image: "/images/destinations/macau_1.jpg"
      },
      {
        dayNumber: 5,
        title: "Spa Day & Private Cotai Yacht Dinner",
        tag: "WELLNESS & SPA",
        tagline: "Award-winning spa rituals and private evening dinner.",
        activities: [
          { icon: "💆", title: "Forbes 5-Star Spa Treatment", description: "2-hour signature wellness session." }
        ],
        tip: "Unwind at the infinity pool overlooking Cotai Strip.",
        image: "/images/destinations/macau_2.jpg"
      },
      {
        dayNumber: 6,
        title: "Departure from Macau",
        tag: "DEPARTURE",
        tagline: "Private transfer to airport.",
        activities: [
          { icon: "✈️", title: "Limousine Airport Transfer", description: "Private transfer to airport or ferry terminal." }
        ],
        tip: "Helicopter service directly to HKIA is available.",
        image: "/images/destinations/macau_3.jpg"
      }
    ],
    hotels: [
      { name: "The Londoner Macao", rating: "★★★★★", type: "Ultra Luxury Suite Resort", location: "Cotai Strip", image: "/images/destinations/macau_2.jpg" }
    ]
  },
  "macau-adventure": {
    slug: "macau-adventure",
    destination: "Macau",
    title: "Macau Thrill & Coastal Heritage (Macau Tower Skywalk & Coloane Village)",
    duration: "3 Nights / 4 Days",
    heroImage: "/images/destinations/macau_3.jpg",
    tagline: "Macau Tower AJ Hackett Bungee, Skywalk & Coloane Village",
    basePrice: 38000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Macau & Macau Tower Skywalk",
        tag: "MACAU TOWER",
        tagline: "Check in and head up to Macau Tower 233m outdoor ledge.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Transfer to hotel." },
          { icon: "🧗", title: "AJ Hackett Skywalk 233m", description: "Walk around the outer rim of Macau Tower without handrails." }
        ],
        tip: "Bungee jumping option available for extreme thrill seekers.",
        image: "/images/destinations/macau_3.jpg"
      },
      {
        dayNumber: 2,
        title: "Historic Ruins of St. Paul's & Monte Fort Hike",
        tag: "HISTORIC HIKE",
        tagline: "Climb Monte Fort for fortress views over Macau and China.",
        activities: [
          { icon: "🏛️", title: "Ruins of St. Paul's", description: "Historical monument walk." },
          { icon: "🏰", title: "Monte Fort Rampart Hike", description: "Hike up the 17th-century fortress hill." }
        ],
        tip: "Visit the Macau Museum inside the fort.",
        image: "/images/destinations/macau_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Coloane Coastal Trail & Hac Sa Black Sand Beach",
        tag: "COASTAL TRAIL",
        tagline: "Scenic nature walk along Coloane's rugged coast.",
        activities: [
          { icon: "🥾", title: "Coloane Trail Hike", description: "8km nature trail with South China Sea views." },
          { icon: "🏖️", title: "Hac Sa Beach Sunset", description: "Walk along the famous black sand beach." }
        ],
        tip: "Eat freshly baked Lord Stow's egg tarts warm from the oven.",
        image: "/images/destinations/macau_1.jpg"
      },
      {
        dayNumber: 4,
        title: "Departure from Macau",
        tag: "DEPARTURE",
        tagline: "Transfer to airport.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Transfer to airport or ferry." }
        ],
        tip: "Duty-free Portuguese wine makes a great souvenir.",
        image: "/images/destinations/macau_3.jpg"
      }
    ],
    hotels: [
      { name: "Grand Coloane Resort", rating: "★★★★", type: "Beachfront Resort", location: "Coloane Island", image: "/images/destinations/macau_1.jpg" }
    ]
  },
  "hong-kong": {
    slug: "hong-kong",
    destination: "Hong Kong",
    title: "Hong Kong Skyline, Peak Tram & Disneyland",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/hong_kong_1.jpg",
    tagline: "Victoria Harbour Lights, Peak Skyline & Magical Theme Park Moments",
    basePrice: 52000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Hong Kong & Victoria Harbour Evening",
        tag: "VICTORIA HARBOUR",
        tagline: "Check into your hotel and enjoy the Symphony of Lights.",
        activities: [
          { icon: "✈️", title: "Hong Kong Airport Transfer", description: "Private transfer to Kowloon hotel." },
          { icon: "⛴️", title: "Star Ferry & Harbour Cruise", description: "Iconic Star Ferry ride across Victoria Harbour." }
        ],
        tip: "Watch the Symphony of Lights light show from Tsim Sha Tsui Promenade at 8 PM.",
        image: "/images/destinations/hong_kong_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Victoria Peak Tram & Central District Tour",
        tag: "VICTORIA PEAK",
        tagline: "Ride the historical Peak Tram to Sky Terrace 428.",
        activities: [
          { icon: "🚋", title: "Peak Tram Ride", description: "Ascend Victoria Peak on the historic funicular railway." },
          { icon: "🏙️", title: "Sky Terrace 428 View", description: "Panoramic 360-degree views of Hong Kong skyscrapers." }
        ],
        tip: "Grab lunch in Soho and take the Central-Mid-Levels Escalator.",
        image: "/images/destinations/hong_kong_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Hong Kong Disneyland Day Experience",
        tag: "DISNEYLAND",
        tagline: "Full day of magic at World of Frozen & Castle of Magical Dreams.",
        activities: [
          { icon: "🏰", title: "Disneyland Theme Park Access", description: "Full day park entry with ride access." }
        ],
        tip: "Stay for the Momentous night light and fireworks show over the castle.",
        image: "/images/destinations/hong_kong_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Lantau Island & Tian Tan Giant Buddha",
        tag: "LANTAU ISLAND",
        tagline: "Ngong Ping 360 cable car to the majestic Bronze Buddha.",
        activities: [
          { icon: "🈴", title: "Tian Tan Buddha", description: "Climb the 268 steps to the Giant Buddha." },
          { icon: "🟤", title: "Ngong Ping 360 Cable Car", description: "Crystal cabin ride over Tung Chung Bay." }
        ],
        tip: "Try traditional vegetarian dim sum at Po Lin Monastery.",
        image: "/images/destinations/hong_kong_1.jpg"
      },
      {
        dayNumber: 5,
        title: "Departure from Hong Kong",
        tag: "DEPARTURE",
        tagline: "Transfer to HKIA for your flight home.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Private transfer to Hong Kong International Airport." }
        ],
        tip: "Use the Airport Express in-town check-in service at Kowloon Station.",
        image: "/images/destinations/hong_kong_2.jpg"
      }
    ],
    hotels: [
      { name: "The Peninsula Hong Kong", rating: "★★★★★", type: "Ultra Luxury", location: "Kowloon", image: "/images/destinations/hong_kong_2.jpg" }
    ]
  },
  "macau": {
    slug: "macau",
    destination: "Macau",
    title: "Macau UNESCO Heritage & Cotai Strip Grandeur",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/macau_1.jpg",
    tagline: "Portuguese Cobblestone Streets, Venetian Canals & SkyCab Lake Show",
    basePrice: 45000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Macau & Venetian Cotai Strip",
        tag: "COTAI STRIP",
        tagline: "Check into your Cotai resort and ride the Venetian Gondola.",
        activities: [
          { icon: "🏨", title: "Cotai Resort Check-in", description: "Check into luxury suite on the Cotai Strip." },
          { icon: "🚣", title: "Venetian Gondola Ride", description: "Indoor canal ride with serenading gondoliers." }
        ],
        tip: "Walk through the indoor replica of St. Mark's Square under illuminated skies.",
        image: "/images/destinations/macau_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Ruins of St. Paul's & UNESCO Historic Centre",
        tag: "HERITAGE",
        tagline: "Explore Portuguese colonial history and Senado Square.",
        activities: [
          { icon: "🏛️", title: "Ruins of St. Paul's", description: "17th-century facade of Church of St. Paul." },
          { icon: "🏰", title: "Monte Fort & Senado Square", description: "Panoramic views and Portuguese azulejo tile streets." }
        ],
        tip: "Sample fresh Macanese Portuguese egg tarts near St. Paul's.",
        image: "/images/destinations/macau_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Wynn Palace SkyCab & Macau Tower Skywalk",
        tag: "LUXURY & THRILLS",
        tagline: "Cable car over performance lake and panoramic tower view.",
        activities: [
          { icon: "🎡", title: "Wynn Palace SkyCab", description: "Cable car over dancing fountain lake." },
          { icon: "🗼", title: "Macau Tower Skywalk", description: "High-altitude walk 233m above the harbor." }
        ],
        tip: "The Wynn Palace SkyCab is complimentary for visitors.",
        image: "/images/destinations/macau_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Coloane Village & Hac Sa Beach",
        tag: "COASTAL ESCAPE",
        tagline: "Peaceful coastal village and black sand beach walk.",
        activities: [
          { icon: "🏖️", title: "Hac Sa Black Sand Beach", description: "Relax at Macau's natural black sand shoreline." },
          { icon: "🥧", title: "Lord Stow's Bakery", description: "Visit the original birthplace of Macanese egg tarts." }
        ],
        tip: "Coloane offers a tranquil contrast to Cotai's high energy.",
        image: "/images/destinations/macau_1.jpg"
      },
      {
        dayNumber: 5,
        title: "Departure from Macau",
        tag: "DEPARTURE",
        tagline: "Transfer to airport or ferry terminal.",
        activities: [
          { icon: "✈️", title: "Departure Transfer", description: "Transfer to Macau International Airport or Taipa Ferry." }
        ],
        tip: "HK-Zhuhai-Macau Bridge bus option is fast and scenic.",
        image: "/images/destinations/macau_2.jpg"
      }
    ],
    hotels: [
      { name: "The Venetian Macao", rating: "★★★★★", type: "Luxury Resort", location: "Cotai Strip", image: "/images/destinations/macau_1.jpg" }
    ]
  },
  "meghalaya-explorer": {
    slug: "meghalaya-explorer",
    destination: "Meghalaya",
    title: "Meghalaya Clouds & Living Root Bridges (Shillong, Cherrapunji & Dawki)",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/meghalaya_1.jpg",
    tagline: "Double Decker Living Root Bridges, Crystal Dawki River & Seven Sisters Waterfalls",
    basePrice: 18500,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Guwahati & Scenic Drive to Shillong",
        tag: "SHILLONG",
        tagline: "Drive past blue Umiam Lake into the Scotland of the East.",
        activities: [
          { icon: "✈️", title: "Guwahati Airport Transfer", description: "Private vehicle pick-up from Lokpriya Gopinath Bordoloi Airport." },
          { icon: "🌊", title: "Umiam Lake (Barapani) Viewpoint", description: "Stop at the vast water reservoir surrounded by Khasi pine hills." }
        ],
        tip: "Enjoy momos and hot tea at Police Bazar in Shillong evening.",
        image: "/images/destinations/meghalaya_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Shillong to Cherrapunji (Sohra) Waterfalls",
        tag: "CHERRAPUNJI",
        tagline: "Explore Nohkalikai, Seven Sisters Waterfalls & Mawsmai Cave.",
        activities: [
          { icon: "🌊", title: "Nohkalikai Falls View", description: "India's tallest plunge waterfall (340m drop)." },
          { icon: "⛰️", title: "Mawsmai Cave Exploration", description: "Guided walk through natural limestone formations." }
        ],
        tip: "Nohkalikai looks most dramatic in late morning light.",
        image: "/images/destinations/meghalaya_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Nongriat Double Decker Living Root Bridge Trek",
        tag: "ROOT BRIDGES",
        tagline: "Trek 3,000 steps down into lush jungle bio-engineering wonders.",
        activities: [
          { icon: "🌁", title: "Double Decker Living Root Bridge", description: "Marvel at 200-year-old living rubber tree root architecture." },
          { icon: "🏊", title: "Rainbow Falls Swim", description: "Clear turquoise natural pool at the base of Rainbow Falls." }
        ],
        tip: "Carry bamboo walking sticks and plenty of water for the return ascent.",
        image: "/images/destinations/meghalaya_1.jpg"
      },
      {
        dayNumber: 4,
        title: "Dawki Umngot River & Mawlynnong Cleanest Village",
        tag: "CRYSTAL DAWKI",
        tagline: "Boating on glass-like transparent waters bordering Bangladesh.",
        activities: [
          { icon: "🚣", title: "Umngot River Crystal Boat Ride", description: "Experience boats floating on clear glass waters." },
          { icon: "🏡", title: "Mawlynnong Asia's Cleanest Village", description: "Walk through bamboo-lined flower gardens and skywalk view." }
        ],
        tip: "Winter months (Nov–Feb) offer the highest water transparency at Dawki.",
        image: "/images/destinations/meghalaya_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Shillong Laitlum Canyons & Elephant Falls",
        tag: "LAITLUM CANYONS",
        tagline: "Standing on the edge of the End of Hills mist valley.",
        activities: [
          { icon: "🏔️", title: "Laitlum Canyons Viewpoint", description: "Dramatic gorges and green rolling Khasi hills." },
          { icon: "🌊", title: "Elephant Falls Walk", description: "Three-tiered mountain waterfall surrounded by ferns." }
        ],
        tip: "Laitlum Canyons gets foggy quickly — visit before 2 PM.",
        image: "/images/destinations/meghalaya_1.jpg"
      },
      {
        dayNumber: 6,
        title: "Departure to Guwahati",
        tag: "DEPARTURE",
        tagline: "Transfer to Guwahati Airport.",
        activities: [
          { icon: "✈️", title: "Guwahati Airport Transfer", description: "Private drive back to GAH airport." }
        ],
        tip: "Stop by Kamakhya Temple if time permits before flight.",
        image: "/images/destinations/meghalaya_2.jpg"
      }
    ],
    hotels: [
      { name: "Ri Kynjai Resort", rating: "★★★★★", type: "Pine Lake Resort", location: "Umiam Lake, Shillong", image: "/images/destinations/meghalaya_3.jpg" }
    ]
  },
  "meghalaya-adventure": {
    slug: "meghalaya-adventure",
    destination: "Meghalaya",
    title: "Meghalaya Cave Explorer & Canyoning Adventure",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/meghalaya_2.jpg",
    tagline: "Limestone Cave Spelunking, Wei Sawdong Trek & Kongthong Whistling Village",
    basePrice: 22000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Shillong & Elephant Falls",
        tag: "SHILLONG",
        tagline: "Arrive in Shillong and gear up for cave adventures.",
        activities: [
          { icon: "✈️", title: "Airport Pick-up", description: "Transfer from Guwahati to Shillong." },
          { icon: "🌊", title: "Elephant Falls & Peak Visit", description: "Warm-up hike to Shillong Peak viewpoint." }
        ],
        tip: "Pack headlamps and sturdy water shoes for cave expeditions.",
        image: "/images/destinations/meghalaya_2.jpg"
      },
      {
        dayNumber: 2,
        title: "Arwah Cave & Wei Sawdong 3-Tiered Waterfall",
        tag: "CAVES & FALLS",
        tagline: "Spelunking through fossilized limestone caverns.",
        activities: [
          { icon: "🦣", title: "Arwah Cave Fossils", description: "Discover millions-of-years-old crustacean fossils in cave walls." },
          { icon: "🌊", title: "Wei Sawdong Waterfall Trek", description: "Steep bamboo trail hike to emerald 3-tiered pools." }
        ],
        tip: "Wei Sawdong trail is steep — take your time descending.",
        image: "/images/destinations/meghalaya_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Krem Liat Prah Cave Expedition & Kongthong",
        tag: "CAVE EXPEDITION",
        tagline: "Explore South Asia's longest cave system and whistling village.",
        activities: [
          { icon: "🔦", title: "Limestone Cave Trek", description: "Guided spelunking with headlamps and safety harness." },
          { icon: "🎵", title: "Kongthong Whistling Village", description: "Village where mothers assign unique melodic tunes instead of names." }
        ],
        tip: "Listen to locals call each other using unique musical tunes.",
        image: "/images/destinations/meghalaya_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Dawki River Kayaking & Cliff Jumping",
        tag: "WATER ADVENTURE",
        tagline: "Kayaking and cliff jumping in crystal clear Umngot waters.",
        activities: [
          { icon: "🛶", title: "Dawki Kayaking", description: "Self-paddle kayak tour along the clear river canyon." },
          { icon: "🏊", title: "Cliff Jumping", description: "Guided cliff jumps into deep natural pools." }
        ],
        tip: "Life jackets are provided and mandatory.",
        image: "/images/destinations/meghalaya_1.jpg"
      },
      {
        dayNumber: 5,
        title: "Departure via Guwahati",
        tag: "DEPARTURE",
        tagline: "Transfer to airport.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Drive back to Guwahati." }
        ],
        tip: "Buy local Khasi orange honey before leaving.",
        image: "/images/destinations/meghalaya_2.jpg"
      }
    ],
    hotels: [
      { name: "Polo Orchid Resort Cherrapunjee", rating: "★★★★", type: "Cliffside Resort", location: "Cherrapunji", image: "/images/destinations/meghalaya_2.jpg" }
    ]
  },
  "meghalaya-luxury": {
    slug: "meghalaya-luxury",
    destination: "Meghalaya",
    title: "Meghalaya Luxury Pine Retreat & Resort Escape",
    duration: "6 Nights / 7 Days",
    heroImage: "/images/destinations/meghalaya_3.jpg",
    tagline: "Ri Kynjai Lake Cottages, Private Valley Helicopter Tour & Dawki Glamping",
    basePrice: 34500,
    days: [
      {
        dayNumber: 1,
        title: "Chauffeur Transfer & Ri Kynjai Lake Resort",
        tag: "LUXURY RESORT",
        tagline: "Khasi thatch architecture over Umiam Lake.",
        activities: [
          { icon: "🚘", title: "Private Chauffeur Pick-up", description: "Luxury SUV transfer to Ri Kynjai Resort." },
          { icon: "🏡", title: "Pine Cottage Check-in", description: "Private lakeside cottage with glass balcony." }
        ],
        tip: "Enjoy traditional Khasi herbal spa rituals.",
        image: "/images/destinations/meghalaya_3.jpg"
      },
      {
        dayNumber: 2,
        title: "Umiam Lake Sunset Cruise & Spa",
        tag: "LAKE & SPA",
        tagline: "Private pontoon boat ride across Barapani Lake.",
        activities: [
          { icon: "🛥️", title: "Private Sunset Pontoon Cruise", description: "Sailing across tranquil pine-fringed waters." },
          { icon: "💆", title: "Khasi Herbal Wellness Spa", description: "Body massage using indigenous mountain herbs." }
        ],
        tip: "Sip hot Meghalaya green tea on the open deck.",
        image: "/images/destinations/meghalaya_3.jpg"
      },
      {
        dayNumber: 3,
        title: "Private Helicopter Flight Over Cherrapunji Valleys",
        tag: "HELICOPTER FLIGHT",
        tagline: "Aerial views of Nohkalikai Falls and deep Khasi gorges.",
        activities: [
          { icon: "🚁", title: "Private Helicopter Flight", description: "Scenic flight over Seven Sisters & Nohkalikai waterfalls." }
        ],
        tip: "The aerial view of the 340m drop of Nohkalikai is breathtaking.",
        image: "/images/destinations/meghalaya_1.jpg"
      },
      {
        dayNumber: 4,
        title: "Dawki Luxury Riverside Glamping",
        tag: "GLAMPING",
        tagline: "VIP canvas safari tents on the banks of Umngot River.",
        activities: [
          { icon: "⛺", title: "Luxury Riverside Glamping", description: "Stay in air-conditioned luxury tents with private deck." },
          { icon: "🚣", title: "Private Sunset Boat Ride", description: "Glass boat ride along the border waters." }
        ],
        tip: "Barbecue dinner under starlit skies by the river.",
        image: "/images/destinations/meghalaya_1.jpg"
      },
      {
        dayNumber: 5,
        title: "Private Living Root Bridge Guided Walk",
        tag: "ROOT BRIDGES VIP",
        tagline: "Private botanical guide through ancient root architecture.",
        activities: [
          { icon: "🌁", title: "Living Root Bridge Tour", description: "Exclusive guided walk to living rubber tree bridges." }
        ],
        tip: "Learn how Khasi tribes weave tree roots across rivers over generations.",
        image: "/images/destinations/meghalaya_2.jpg"
      },
      {
        dayNumber: 6,
        title: "Laitlum Canyons Champagne Picnic",
        tag: "CANONS PICNIC",
        tagline: "Gourmet picnic high above the mist valley.",
        activities: [
          { icon: "🥂", title: "Laitlum Cliffside Champagne Lunch", description: "Private dining set up at Laitlum Canyons." }
        ],
        tip: "Unmatched photography conditions when the afternoon clouds roll in.",
        image: "/images/destinations/meghalaya_3.jpg"
      },
      {
        dayNumber: 7,
        title: "Departure to Guwahati",
        tag: "DEPARTURE",
        tagline: "Luxury transfer to airport.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Private transfer to Guwahati airport." }
        ],
        tip: "Enjoy VIP lounge access at GAH airport.",
        image: "/images/destinations/meghalaya_1.jpg"
      }
    ],
    hotels: [
      { name: "Ri Kynjai - They Serenity by the Lake", rating: "★★★★★", type: "Luxury Pine Resort", location: "Umiam Lake", image: "/images/destinations/meghalaya_3.jpg" }
    ]
  },
  "bhutan-5n6d": {
    slug: "bhutan-5n6d",
    destination: "Bhutan",
    title: "Bhutan Thunder Dragon Highlights (Paro, Thimphu & Punakha)",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/bhutan_1.jpg",
    tagline: "Tiger's Nest Cliff Trek, Punakha Golden Dzong & Buddha Dordenma Statue",
    basePrice: 38500,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Paro & Drive to Thimphu",
        tag: "THIMPHU",
        tagline: "Land at Paro international airport and drive to Bhutan's capital.",
        activities: [
          { icon: "✈️", title: "Paro Airport Pick-up", description: "Welcome scarf (Khadhar) ceremony by Bhutanese guide." },
          { icon: "🏛️", title: "Tashichho Dzong Visit", description: "Evening visit to the fortress of the glorious religion." }
        ],
        tip: "Thimphu is the only world capital without traffic lights.",
        image: "/images/destinations/bhutan_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Thimphu Cultural Sights & Buddha Dordenma",
        tag: "BUDDHA DORDENMA",
        tagline: "Visit the giant 169ft bronze Buddha overlooking Thimphu valley.",
        activities: [
          { icon: "🗿", title: "Buddha Dordenma Statue", description: "Gigantic bronze statue housing 125,000 smaller Buddhas." },
          { icon: "🦬", title: "Motithang Takin Preserve", description: "See Bhutan's national animal, the unique Takin." }
        ],
        tip: "Spin prayer wheels at the Memorial Chorten with local elders.",
        image: "/images/destinations/bhutan_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Dochula Pass & Punakha Golden Valley",
        tag: "PUNAKHA DZONG",
        tagline: "Cross 108 memorial stupas at Dochula Pass to Punakha Dzong.",
        activities: [
          { icon: "🏔️", title: "Dochula Pass (3,100m)", description: "Panoramic snow-capped Himalayan peak views." },
          { icon: "🏯", title: "Punakha Dzong Tour", description: "Majestic fortress at the confluence of Pho Chhu & Mo Chhu rivers." }
        ],
        tip: "Walk across Bhutan's longest suspension bridge behind Punakha Dzong.",
        image: "/images/destinations/bhutan_1.jpg"
      },
      {
        dayNumber: 4,
        title: "Punakha to Paro & Traditional Archery",
        tag: "PARO VALLEY",
        tagline: "Drive back to Paro and try national sport archery.",
        activities: [
          { icon: "🏹", title: "Traditional Bhutanese Archery", description: "Try shooting wooden bows with local archers." },
          { icon: "🏰", title: "Paro Rinpung Dzong", description: "Historic fortress showcased in Little Buddha film." }
        ],
        tip: "Wear traditional Gho or Kira attire for fun photos.",
        image: "/images/destinations/bhutan_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Taktsang Monastery (Tiger's Nest) Cliff Hike",
        tag: "TIGER'S NEST",
        tagline: "Hike up to the sacred monastery clinging to a 900m cliff.",
        activities: [
          { icon: "🧗", title: "Tiger's Nest (Taktsang) Trek", description: "4-hour round trip hike to Guru Rinpoche's sacred cave." },
          { icon: "☕", title: "Taktsang Cafeteria Viewpoint", description: "Rest stop with hot butter tea and monastery views." }
        ],
        tip: "Start early at 7 AM to beat the mid-day heat and crowds.",
        image: "/images/destinations/bhutan_1.jpg"
      },
      {
        dayNumber: 6,
        title: "Departure from Paro",
        tag: "DEPARTURE",
        tagline: "Transfer to Paro Airport.",
        activities: [
          { icon: "✈️", title: "Paro Airport Transfer", description: "Farewell from your Bhutanese guide and transfer to airport." }
        ],
        tip: "Sit on the left side of the aircraft for Mt. Everest views when flying out.",
        image: "/images/destinations/bhutan_2.jpg"
      }
    ],
    hotels: [
      { name: "Le Méridien Paro Riverfront", rating: "★★★★★", type: "Luxury Valley Resort", location: "Paro", image: "/images/destinations/bhutan_1.jpg" }
    ]
  },
  "bhutan-luxury": {
    slug: "bhutan-luxury",
    destination: "Bhutan",
    title: "Bhutan Ultra-Luxury Amankora & Six Senses Sanctuary",
    duration: "6 Nights / 7 Days",
    heroImage: "/images/destinations/bhutan_2.jpg",
    tagline: "Amankora Paro & Thimphu Luxury Lodges, Monastic Blessings & Hot Stone Baths",
    basePrice: 115000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Paro & Private Amankora Transfer",
        tag: "AMANKORA PARO",
        tagline: "Chauffeur transfer to pine forest sanctuary.",
        activities: [
          { icon: "🚘", title: "Private SUV Airport Transfer", description: "Escorted transfer to Amankora Paro Lodge." },
          { icon: "🍵", title: "Pine Forest Welcome Tea", description: "Traditional herbal tea in serene pine grove." }
        ],
        tip: "Amankora lodges feature open fireplaces in every suite.",
        image: "/images/destinations/bhutan_2.jpg"
      },
      {
        dayNumber: 2,
        title: "Private Monastic Blessing & Thimphu Sanctuary",
        tag: "MONASTIC BLESSING",
        tagline: "Private prayer and butter lamp ceremony with head monks.",
        activities: [
          { icon: "🛕", title: "Private Monastic Blessing", description: "Chanting ceremony at Cheri Monastery." },
          { icon: "🏨", title: "Six Senses Thimphu Check-in", description: "Stay at the 'Palace in the Sky'." }
        ],
        tip: "Participate in lighting 108 auspicious butter lamps.",
        image: "/images/destinations/bhutan_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Dochula Pass Helicopter Flight & Punakha",
        tag: "HELICOPTER FLIGHT",
        tagline: "Private helicopter over snow-capped 7,000m Himalayan peaks.",
        activities: [
          { icon: "🚁", title: "Himalayan Helicopter Tour", description: "Scenic flight over Gangkhar Puensum peak." }
        ],
        tip: "Gangkhar Puensum is the world's highest unclimbed mountain.",
        image: "/images/destinations/bhutan_1.jpg"
      },
      {
        dayNumber: 4,
        title: "Punakha Riverside Champagne Picnic",
        tag: "RIVERSIDE LUXURY",
        tagline: "Gourmet dining on the banks of Mo Chhu river.",
        activities: [
          { icon: "🥂", title: "Mo Chhu River Bank Dining", description: "Private chef cooked lunch with champagne." }
        ],
        tip: "Walk across the suspension bridge after lunch.",
        image: "/images/destinations/bhutan_1.jpg"
      },
      {
        dayNumber: 5,
        title: "Tiger's Nest Private Guide & Dotsho Bath",
        tag: "TIGER'S NEST VIP",
        tagline: "Private guided trek followed by Dotsho herbal hot stone bath.",
        activities: [
          { icon: "🧗", title: "Private Taktsang Monastery Trek", description: "Trek with private guide, horses available on request." },
          { icon: "🛁", title: "Dotsho Hot Stone Bath", description: "Traditional wooden tub bath heated by river stones cooked in fire." }
        ],
        tip: "Khempa (artemisia) leaves added to hot stone water soothe sore muscles.",
        image: "/images/destinations/bhutan_3.jpg"
      },
      {
        dayNumber: 6,
        title: "Phobjikha Valley Crane Sanctuary Tour",
        tag: "PHOBJIKHA VALLEY",
        tagline: "Explore glacial valley home to rare black-necked cranes.",
        activities: [
          { icon: "🦅", title: "Black-Necked Crane Sanctuary", description: "Guided wildlife walk through serene marshlands." }
        ],
        tip: "Cranes migrate here from Tibet between October and February.",
        image: "/images/destinations/bhutan_3.jpg"
      },
      {
        dayNumber: 7,
        title: "Departure from Paro",
        tag: "DEPARTURE",
        tagline: "Private transfer to airport.",
        activities: [
          { icon: "✈️", title: "Airport VIP Transfer", description: "Private luxury vehicle to Paro airport." }
        ],
        tip: "Receive personalized Bhutanese souvenir gift upon departure.",
        image: "/images/destinations/bhutan_2.jpg"
      }
    ],
    hotels: [
      { name: "Amankora Paro Lodge", rating: "★★★★★", type: "Ultra Luxury Sanctuary", location: "Paro Valley", image: "/images/destinations/bhutan_2.jpg" }
    ]
  },
  "bhutan-trek": {
    slug: "bhutan-trek",
    destination: "Bhutan",
    title: "Bhutan Himalayan Valley & Tiger's Nest Adventure",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/bhutan_3.jpg",
    tagline: "Taktsang Monastery Trek, Dochula Pass 108 Stupas & Phobjikha Valley",
    basePrice: 32000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Paro & Drive to Thimphu",
        tag: "PARO TO THIMPHU",
        tagline: "Land in Bhutan and drive through Paro river valley.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Pick up and transfer to Thimphu." },
          { icon: "🏛️", title: "Tashichho Dzong", description: "Evening tour of Thimphu fortress." }
        ],
        tip: "Enjoy traditional Ema Datshi (chilli cheese) at dinner.",
        image: "/images/destinations/bhutan_3.jpg"
      },
      {
        dayNumber: 2,
        title: "Dochula Pass & Phobjikha Valley Hike",
        tag: "PHOBJIKHA VALLEY",
        tagline: "Trek through pine forests of the Gangtey glacial valley.",
        activities: [
          { icon: "🏔️", title: "Dochula Pass 108 Stupas", description: "Himalayan panoramic viewpoint." },
          { icon: "🥾", title: "Gangtey Nature Trail Hike", description: "2-hour easy hike through Phobjikha valley." }
        ],
        tip: "Gangtey Monastery overlooks the entire green valley.",
        image: "/images/destinations/bhutan_1.jpg"
      },
      {
        dayNumber: 3,
        title: "Punakha Dzong & Paro Return",
        tag: "PUNAKHA",
        tagline: "Visit Bhutan's most beautiful fortress before returning to Paro.",
        activities: [
          { icon: "🏯", title: "Punakha Dzong Tour", description: "Walk through grand courtyards and Jacaranda trees." }
        ],
        tip: "Spring time (Apr–May) features purple Jacaranda blossoms around the Dzong.",
        image: "/images/destinations/bhutan_1.jpg"
      },
      {
        dayNumber: 4,
        title: "Tiger's Nest (Taktsang) Monastery Summit Hike",
        tag: "TIGER'S NEST TREK",
        tagline: "Conquer the famous cliffside monastery hike.",
        activities: [
          { icon: "🧗", title: "Taktsang Monastery Hike", description: "Climb 900m to Bhutan's most famous spiritual landmark." }
        ],
        tip: "Photography is not allowed inside monastery rooms — locker provided.",
        image: "/images/destinations/bhutan_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Departure from Paro",
        tag: "DEPARTURE",
        tagline: "Transfer to airport.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Transfer to Paro Airport." }
        ],
        tip: "Paro airport landing/takeoff is famous for stunning mountain views.",
        image: "/images/destinations/bhutan_2.jpg"
      }
    ],
    hotels: [
      { name: "Nak-Sel Ethnicity Boutique Resort", rating: "★★★★", type: "Eco Luxury Resort", location: "Paro", image: "/images/destinations/bhutan_3.jpg" }
    ]
  },
  "meghalaya": {
    slug: "meghalaya",
    destination: "Meghalaya",
    title: "Meghalaya Clouds, Waterfalls & Living Root Bridges",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/meghalaya_1.jpg",
    tagline: "Living Root Bridges, Crystal Dawki River & Nohkalikai Waterfalls",
    basePrice: 18500,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Guwahati & Drive to Shillong",
        tag: "SHILLONG",
        tagline: "Drive past blue Umiam Lake into the Scotland of the East.",
        activities: [
          { icon: "✈️", title: "Guwahati Airport Transfer", description: "Private vehicle pick-up from LGBI Airport." },
          { icon: "🌊", title: "Umiam Lake Viewpoint", description: "Stop at the vast water reservoir." }
        ],
        tip: "Enjoy momos at Police Bazar.",
        image: "/images/destinations/meghalaya_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Shillong to Cherrapunji Waterfalls",
        tag: "CHERRAPUNJI",
        tagline: "Explore Nohkalikai, Seven Sisters Waterfalls & Mawsmai Cave.",
        activities: [
          { icon: "🌊", title: "Nohkalikai Falls View", description: "India's tallest plunge waterfall." }
        ],
        tip: "Visit Mawsmai cave nearby.",
        image: "/images/destinations/meghalaya_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Nongriat Double Decker Living Root Bridge",
        tag: "ROOT BRIDGES",
        tagline: "Trek down to 200-year-old living root bridges.",
        activities: [
          { icon: "🌁", title: "Double Decker Root Bridge", description: "Walk across bio-engineered rubber tree root bridges." }
        ],
        tip: "Take a dip in Rainbow Falls pool.",
        image: "/images/destinations/meghalaya_1.jpg"
      },
      {
        dayNumber: 4,
        title: "Dawki Umngot River & Mawlynnong",
        tag: "CRYSTAL DAWKI",
        tagline: "Glass-like transparent water boating.",
        activities: [
          { icon: "🚣", title: "Umngot River Boat Ride", description: "Experience boats floating on clear glass waters." }
        ],
        tip: "Walk through Mawlynnong village.",
        image: "/images/destinations/meghalaya_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Departure via Guwahati",
        tag: "DEPARTURE",
        tagline: "Transfer to airport.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Drive back to Guwahati." }
        ],
        tip: "Safe travels home!",
        image: "/images/destinations/meghalaya_1.jpg"
      }
    ],
    hotels: [
      { name: "Ri Kynjai Resort", rating: "★★★★★", type: "Pine Lake Resort", location: "Shillong", image: "/images/destinations/meghalaya_3.jpg" }
    ]
  },
  "bhutan": {
    slug: "bhutan",
    destination: "Bhutan",
    title: "Bhutan Thunder Dragon & Tiger's Nest Monastery",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/bhutan_1.jpg",
    tagline: "Tiger's Nest Cliff Trek, Punakha Golden Dzong & Himalayan Valleys",
    basePrice: 38500,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Paro & Drive to Thimphu",
        tag: "THIMPHU",
        tagline: "Land in Bhutan and drive to capital Thimphu.",
        activities: [
          { icon: "✈️", title: "Paro Airport Pick-up", description: "Welcome scarf Khadhar ceremony." }
        ],
        tip: "Visit Tashichho Dzong.",
        image: "/images/destinations/bhutan_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Thimphu & Buddha Dordenma",
        tag: "BUDDHA DORDENMA",
        tagline: "Visit giant Buddha Dordenma statue.",
        activities: [
          { icon: "🗿", title: "Buddha Dordenma Statue", description: "Gigantic 169ft bronze statue." }
        ],
        tip: "See Takin preserve.",
        image: "/images/destinations/bhutan_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Dochula Pass & Punakha Dzong",
        tag: "PUNAKHA",
        tagline: "Cross 108 stupas to Punakha valley.",
        activities: [
          { icon: "🏯", title: "Punakha Dzong", description: "Golden palace at river confluence." }
        ],
        tip: "Cross the suspension bridge.",
        image: "/images/destinations/bhutan_1.jpg"
      },
      {
        dayNumber: 4,
        title: "Taktsang Monastery (Tiger's Nest) Hike",
        tag: "TIGER'S NEST",
        tagline: "Hike to cliffside monastery.",
        activities: [
          { icon: "🧗", title: "Tiger's Nest Trek", description: "Climb to Guru Rinpoche's sacred cave." }
        ],
        tip: "Start early at 7 AM.",
        image: "/images/destinations/bhutan_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Departure from Paro",
        tag: "DEPARTURE",
        tagline: "Transfer to Paro airport.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Farewell transfer to airport." }
        ],
        tip: "Tashi Delek!",
        image: "/images/destinations/bhutan_2.jpg"
      }
    ],
    hotels: [
      { name: "Le Méridien Paro Riverfront", rating: "★★★★★", type: "Luxury Valley Resort", location: "Paro", image: "/images/destinations/bhutan_1.jpg" }
    ]
  },
  "nepal-explorer": {
    slug: "nepal-explorer",
    destination: "Nepal",
    title: "Nepal Himalayan Highlights (Kathmandu, Pokhara & Nagarkot)",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/nepal_1.jpg",
    tagline: "Kathmandu Valley Stupas, Pokhara Phewa Lake & Sarangkot Sunrise",
    basePrice: 28500,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Kathmandu & Thamel Welcome",
        tag: "KATHMANDU",
        tagline: "Land in Tribhuvan International Airport and explore vibrant Thamel.",
        activities: [
          { icon: "✈️", title: "Kathmandu Airport Transfer", description: "Private car transfer to your hotel." },
          { icon: "🛍️", title: "Thamel Evening Street Walk", description: "Browse prayer flags, singing bowls, and Himalayan woolens." }
        ],
        tip: "Enjoy authentic momos and Thakali thali for dinner.",
        image: "/images/destinations/nepal_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Kathmandu UNESCO World Heritage Tour",
        tag: "UNESCO HERITAGE",
        tagline: "Boudhanath Stupa, Pashupatinath Temple & Swayambhunath.",
        activities: [
          { icon: "🛕", title: "Pashupatinath Sacred Temple", description: "Sacred Hindu temple complex on the Bagmati River." },
          { icon: "☸️", title: "Boudhanath Stupa", description: "One of the world's largest spherical stupas with Buddha eyes." }
        ],
        tip: "Visit Swayambhunath (Monkey Temple) at sunset for views over Kathmandu Valley.",
        image: "/images/destinations/nepal_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Kathmandu to Pokhara Scenic Drive / Flight",
        tag: "POKHARA",
        tagline: "Drive along Trishuli river valley to Pokhara lakeside.",
        activities: [
          { icon: "🚙", title: "Scenic Pokhara Highway Drive", description: "Drive past terraced hillsides and roaring rivers." },
          { icon: "⛵", title: "Phewa Lake Sunset Boating", description: "Shikara boat ride to Tal Barahi temple island." }
        ],
        tip: "Reflections of Mount Machhapuchhre (Fishtail) on Phewa Lake are stunning.",
        image: "/images/destinations/nepal_1.jpg"
      },
      {
        dayNumber: 4,
        title: "Sarangkot Sunrise & Pokhara Waterfalls",
        tag: "SARANGKOT SUNRISE",
        tagline: "Watch sunrise over Annapurna & Dhaulagiri mountain ranges.",
        activities: [
          { icon: "🌅", title: "Sarangkot Sunrise Viewpoint", description: "Golden first light hitting 8,000m Annapurna peaks." },
          { icon: "🌊", title: "Davis Falls & Gupteshwor Cave", description: "Underground waterfall and sacred cave temple." }
        ],
        tip: "Visit World Peace Pagoda across Phewa Lake in the afternoon.",
        image: "/images/destinations/nepal_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Drive to Nagarkot Mountain Resort",
        tag: "NAGARKOT",
        tagline: "Hilltop resort village offering 360-degree Himalayan views.",
        activities: [
          { icon: "🏔️", title: "Nagarkot View Tower Walk", description: "Watch sunset over Himalayan ranges including Everest in clear weather." }
        ],
        tip: "Nagarkot offers the widest view of the Himalayas from Kathmandu valley.",
        image: "/images/destinations/nepal_1.jpg"
      },
      {
        dayNumber: 6,
        title: "Nagarkot Sunrise & Departure",
        tag: "DEPARTURE",
        tagline: "Sunrise over Himalayas and airport transfer.",
        activities: [
          { icon: "✈️", title: "Kathmandu Airport Transfer", description: "Private drive back to TIA airport." }
        ],
        tip: "Namaste and safe travels!",
        image: "/images/destinations/nepal_2.jpg"
      }
    ],
    hotels: [
      { name: "Fish Tail Lodge Pokhara", rating: "★★★★★", type: "Lakeside Heritage Resort", location: "Phewa Lake, Pokhara", image: "/images/destinations/nepal_1.jpg" }
    ]
  },
  "nepal-adventure": {
    slug: "nepal-adventure",
    destination: "Nepal",
    title: "Nepal Everest View & Annapurna Base Camp Trek",
    duration: "6 Nights / 7 Days",
    heroImage: "/images/destinations/nepal_2.jpg",
    tagline: "Mount Everest Flight, Poon Hill Sunrise Trek & Trishuli Rafting",
    basePrice: 42000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Kathmandu & Trek Briefing",
        tag: "KATHMANDU",
        tagline: "Arrive in Kathmandu and prep trek equipment.",
        activities: [
          { icon: "✈️", title: "Airport Pick-up", description: "Transfer to Thamel hotel." },
          { icon: "🏔️", title: "Trek Equipment Check", description: "Gear check with professional Himalayan trekking guide." }
        ],
        tip: "Rent extra down jackets or trekking poles easily in Thamel.",
        image: "/images/destinations/nepal_2.jpg"
      },
      {
        dayNumber: 2,
        title: "Everest Mountain Flight & Trishuli Rafting",
        tag: "EVEREST FLIGHT",
        tagline: "Early morning flight past Mount Everest followed by river rafting.",
        activities: [
          { icon: "✈️", title: "Himalayan Mountain Flight", description: "Guaranteed window seat flight along Everest, Lhotse & Makalu." },
          { icon: "🚣", title: "Trishuli River Rafting", description: "White water rafting adventure on Trishuli River." }
        ],
        tip: "Window seats provide clear flight camera shots of Mount Everest summit.",
        image: "/images/destinations/nepal_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Drive to Nayapul & Trek to Tikhedhunga",
        tag: "ANNAPURNA TREK",
        tagline: "Begin the famous Annapurna Poon Hill trek circuit.",
        activities: [
          { icon: "🥾", title: "Nayapul to Tikhedhunga Hike", description: "4-hour gentle trek past rhododendron forests and stone steps." }
        ],
        tip: "Cross suspension bridges over gushing mountain streams.",
        image: "/images/destinations/nepal_1.jpg"
      },
      {
        dayNumber: 4,
        title: "Trek to Ghorepani (2,860m)",
        tag: "GHOREPANI",
        tagline: "Climb Ulleri stone staircase into oak and pine sanctuary.",
        activities: [
          { icon: "⛰️", title: "Ulleri Staircase Climb", description: "Challenge yourself climbing 3,200 stone steps to Ghorepani village." }
        ],
        tip: "Rest overnight in traditional Gurung tea house lodge.",
        image: "/images/destinations/nepal_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Poon Hill Sunrise (3,210m) & Descent to Pokhara",
        tag: "POON HILL",
        tagline: "Breathtaking 360-degree panorama of Annapurna & Dhaulagiri.",
        activities: [
          { icon: "🌅", title: "Poon Hill Sunrise Summit", description: "Watch morning sun illuminate Dhaulagiri I (8,167m) & Annapurna I." },
          { icon: "🚗", title: "Descent & Transfer to Pokhara", description: "Trek down to Hile and jeep drive back to Pokhara." }
        ],
        tip: "Poon Hill offers one of the world's top 5 mountain sunrise views.",
        image: "/images/destinations/nepal_2.jpg"
      },
      {
        dayNumber: 6,
        title: "Pokhara Zipline & Fly back to Kathmandu",
        tag: "POKHARA THRILLS",
        tagline: "World's steepest zipline before flying back to Kathmandu.",
        activities: [
          { icon: "⚡", title: "ZipFlyer Nepal", description: "Fly 1.8km down Sarangkot cliff at 120 km/h speed." }
        ],
        tip: "Enjoy Pokhara lakeside cafes in the afternoon.",
        image: "/images/destinations/nepal_1.jpg"
      },
      {
        dayNumber: 7,
        title: "Departure from Kathmandu",
        tag: "DEPARTURE",
        tagline: "Transfer to airport.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Transfer to TIA airport for international flight." }
        ],
        tip: "Buy Himalayan organic coffee at airport departure lounge.",
        image: "/images/destinations/nepal_2.jpg"
      }
    ],
    hotels: [
      { name: "Waterfront Resort Pokhara", rating: "★★★★", type: "Adventure Resort", location: "Phewa Lake", image: "/images/destinations/nepal_1.jpg" }
    ]
  },
  "nepal-luxury": {
    slug: "nepal-luxury",
    destination: "Nepal",
    title: "Nepal Luxury Himalayan Resort & Chitwan Wildlife Safari",
    duration: "6 Nights / 7 Days",
    heroImage: "/images/destinations/nepal_3.jpg",
    tagline: "Dwarika's Heritage Hotel, Chitwan Rhino Safari & Everest Helicopter Flyover",
    basePrice: 68000,
    days: [
      {
        dayNumber: 1,
        title: "Private Chauffeur & Dwarika's Hotel Kathmandu",
        tag: "HERITAGE LUXURY",
        tagline: "Stay at Nepal's living museum luxury hotel.",
        activities: [
          { icon: "🚘", title: "Private Airport Transfer", description: "Private luxury vehicle to Dwarika's Hotel." },
          { icon: "🏛️", title: "Dwarika's Palace Suite Check-in", description: "Award-winning hotel built with 15th-century hand-carved wood." }
        ],
        tip: "Dine at Krishnarpan 22-course traditional Nepali feast.",
        image: "/images/destinations/nepal_3.jpg"
      },
      {
        dayNumber: 2,
        title: "Private Helicopter Flight to Everest Base Camp",
        tag: "EVEREST HELICOPTER",
        tagline: "Fly to Kala Patthar (5,545m) and breakfast at Everest View Hotel.",
        activities: [
          { icon: "🚁", title: "Private Helicopter Everest Heli-Tour", description: "Landing at Kala Patthar facing Mt. Everest & Khumbu Icefall." },
          { icon: "🍳", title: "Champagne Breakfast at Hotel Everest View", description: "World's highest hotel (3,880m) looking directly at Everest." }
        ],
        tip: "Oxygen bottles are equipped on board for high altitude comfort.",
        image: "/images/destinations/nepal_1.jpg"
      },
      {
        dayNumber: 3,
        title: "Fly to Chitwan National Park Safari Resort",
        tag: "CHITWAN SAFARI",
        tagline: "Fly to Nepal's premier jungle wildlife reserve.",
        activities: [
          { icon: "✈️", title: "Private Flight to Bharatpur", description: "30-minute flight to Chitwan national park." },
          { icon: "🏨", title: "Meghauli Serai Taj Safari Lodge", description: "Luxury lodge on the Rapti River bank." }
        ],
        tip: "Watch wild rhinos come down to drink at the riverbank opposite your balcony.",
        image: "/images/destinations/nepal_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Chitwan Jungle Safari & One-Horned Rhino Search",
        tag: "WILDLIFE SAFARI",
        tagline: "Jeep safari, canoe cruise and Tharu cultural evening.",
        activities: [
          { icon: "🦏", title: "Jeep Safari Rhino Search", description: "Search for rare One-Horned Rhinoceros & Royal Bengal Tiger." },
          { icon: "🛶", title: "Rapti River Canoe Safari", description: "Spot gharial crocodiles and exotic migratory birds." }
        ],
        tip: "Chitwan is home to over 600 single-horned rhinos.",
        image: "/images/destinations/nepal_2.jpg"
      },
      {
        dayNumber: 5,
        title: "Fly to Pokhara Pavilion Luxury Lodge",
        tag: "POKHARA LUXURY",
        tagline: "Stay at Pavilions Himalayas luxury eco resort.",
        activities: [
          { icon: "🏡", title: "Pavilions Himalayas Villa Check-in", description: "Private infinity pool villa overlooking Annapurna peaks." }
        ],
        tip: "Enjoy organic farm-to-table dining sourced from the resort estate.",
        image: "/images/destinations/nepal_1.jpg"
      },
      {
        dayNumber: 6,
        title: "Private Lake Cruise & Spa Treatment",
        tag: "WELLNESS & SPA",
        tagline: "Private boat on Phewa Lake and Ayurvedic spa.",
        activities: [
          { icon: "⛵", title: "Private Phewa Lake Cruise", description: "Champagne boat ride across clear waters." },
          { icon: "💆", title: "Himalayan Ayurvedic Massage", description: "Herbal oil massage therapy." }
        ],
        tip: "Sunset views over Fishtail mountain from the pool terrace.",
        image: "/images/destinations/nepal_3.jpg"
      },
      {
        dayNumber: 7,
        title: "Departure via Kathmandu",
        tag: "DEPARTURE",
        tagline: "Private transfer for departure flight.",
        activities: [
          { icon: "✈️", title: "Private Airport Transfer", description: "Transfer to Tribhuvan International Airport." }
        ],
        tip: "VIP lounge access included.",
        image: "/images/destinations/nepal_1.jpg"
      }
    ],
    hotels: [
      { name: "The Dwarika's Hotel Kathmandu", rating: "★★★★★", type: "Ultra Luxury Heritage", location: "Kathmandu", image: "/images/destinations/nepal_3.jpg" }
    ]
  },
  "ooty-express": {
    slug: "ooty-express",
    destination: "Ooty",
    title: "Ooty Queen of Hills & Nilgiri Toy Train",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/ooty_1.jpg",
    tagline: "UNESCO Nilgiri Mountain Railway, Ooty Lake & Doddabetta Peak",
    basePrice: 14500,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Coimbatore / Mettupalayam & Drive to Ooty",
        tag: "OOTY WELCOME",
        tagline: "Drive up the 36 hairpin bends into the Nilgiri hills.",
        activities: [
          { icon: "✈️", title: "Coimbatore Airport Transfer", description: "Private car transfer up to Ooty (86 km)." },
          { icon: "🌲", title: "Ooty Hotel Check-in", description: "Check into your hill-view hotel." }
        ],
        tip: "Stop at Kallar view point for wild monkey and valley views.",
        image: "/images/destinations/ooty_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Nilgiri Mountain Railway Toy Train Ride",
        tag: "UNESCO TOY TRAIN",
        tagline: "Steam locomotive journey through tunnels, bridges & pine forests.",
        activities: [
          { icon: "🚂", title: "Nilgiri Mountain Toy Train", description: "Historic 19th-century rack and pinion steam train from Ooty to Coonoor." },
          { icon: "🌺", title: "Sim's Park Coonoor", description: "Botanical garden featuring rare plants and Japanese gardens." }
        ],
        tip: "Book 1st class toy train tickets well in advance.",
        image: "/images/destinations/ooty_1.jpg"
      },
      {
        dayNumber: 3,
        title: "Doddabetta Peak & Government Botanical Gardens",
        tag: "HILLTOP VIEWS",
        tagline: "Highest peak in the Nilgiri Mountains (2,637 metres).",
        activities: [
          { icon: "🏔️", title: "Doddabetta Peak Viewpoint", description: "Telescope house panoramic views of Bandipur national park." },
          { icon: "🌷", title: "Ooty Botanical Garden Walk", description: "55-acre garden featuring 20-million-year-old fossilized tree trunk." }
        ],
        tip: "Try fresh Nilgiri homemade dark chocolates near the garden entrance.",
        image: "/images/destinations/ooty_2.jpg"
      },
      {
        dayNumber: 4,
        title: "Ooty Lake Boating & Rose Garden",
        tag: "OOTY LAKE",
        tagline: "Row boating on Ooty lake and 20,000 varieties of roses.",
        activities: [
          { icon: "🚣", title: "Ooty Lake Boating", description: "Pedal and motor boat rides surrounded by eucalyptus trees." },
          { icon: "🌹", title: "Government Rose Garden", description: "Largest rose garden in India laid out in terraced slopes." }
        ],
        tip: "Enjoy horse riding along the banks of Ooty Lake.",
        image: "/images/destinations/ooty_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Departure to Coimbatore",
        tag: "DEPARTURE",
        tagline: "Transfer to airport / railway station.",
        activities: [
          { icon: "✈️", title: "Coimbatore Airport Transfer", description: "Private drive back down to Coimbatore." }
        ],
        tip: "Buy Nilgiri eucalyptus oil and tea bags as gifts.",
        image: "/images/destinations/ooty_1.jpg"
      }
    ],
    hotels: [
      { name: "Gem Park Ooty", rating: "★★★★", type: "Hill View Hotel", location: "Ooty", image: "/images/destinations/ooty_1.jpg" }
    ]
  },
  "ooty-nature": {
    slug: "ooty-nature",
    destination: "Ooty",
    title: "Ooty Tea Estates & Pykara Waterfalls Explorer",
    duration: "3 Nights / 4 Days",
    heroImage: "/images/destinations/ooty_2.jpg",
    tagline: "Doddabetta Tea Factory, Pykara Speedboat & Pine Forest Sunset",
    basePrice: 12500,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Ooty & Tea Factory Tour",
        tag: "TEA ESTATE",
        tagline: "Learn how green tea leaves become fragrant Nilgiri tea.",
        activities: [
          { icon: "✈️", title: "Pick-up & Check-in", description: "Transfer to hotel." },
          { icon: "🍃", title: "Doddabetta Tea Factory & Museum", description: "Guided tour showing CTC tea processing and chocolate making." }
        ],
        tip: "Sample hot cardamom tea at the factory outlet.",
        image: "/images/destinations/ooty_2.jpg"
      },
      {
        dayNumber: 2,
        title: "Pykara Waterfalls & Speedboating",
        tag: "PYKARA LAKE",
        tagline: "Cascading waterfalls and high-speed boating on Pykara lake.",
        activities: [
          { icon: "🌊", title: "Pykara Waterfalls Hike", description: "Short walk through pine woods to cascading waterfalls." },
          { icon: "🚤", title: "Pykara Lake Speedboat Ride", description: "Thrilling speedboat ride across surrounded green hills." }
        ],
        tip: "Pykara lake is famous for Tamil movie songs shooting.",
        image: "/images/destinations/ooty_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Pine Forest & Shooting Point Sunset",
        tag: "PINE FOREST",
        tagline: "Walk through tall pine trees and Wenlock Downs.",
        activities: [
          { icon: "🌲", title: "Ooty Pine Forest Walk", description: "Towering pine trees slopes featured in Bollywood movies." },
          { icon: "🌅", title: "Wenlock Downs (9th Mile)", description: "Rolling green grasslands offering 360-degree sunset views." }
        ],
        tip: "Great spot for horseback riding across the green downs.",
        image: "/images/destinations/ooty_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Departure to Coimbatore",
        tag: "DEPARTURE",
        tagline: "Transfer back to airport.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Drive back to Coimbatore." }
        ],
        tip: "Safe travels home!",
        image: "/images/destinations/ooty_1.jpg"
      }
    ],
    hotels: [
      { name: "Sterling Ooty Fern Hill", rating: "★★★★", type: "Heritage Hill Resort", location: "Fern Hill, Ooty", image: "/images/destinations/ooty_2.jpg" }
    ]
  },
  "ooty-luxury": {
    slug: "ooty-luxury",
    destination: "Ooty",
    title: "Ooty Heritage Bungalow & Coonoor Luxury Escape",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/ooty_3.jpg",
    tagline: "Savoy IHCL Heritage Hotel, Colonial High Tea & Private Coonoor Estate",
    basePrice: 29500,
    days: [
      {
        dayNumber: 1,
        title: "Private Chauffeur & Savoy IHCL Check-in",
        tag: "COLONIAL LUXURY",
        tagline: "19th-century Victorian hotel with manicured lawns.",
        activities: [
          { icon: "🚘", title: "Private SUV Pick-up", description: "Private luxury chauffeur drive to Savoy Hotel." },
          { icon: "☕", title: "Colonial Afternoon High Tea", description: "Fresh scones, clotted cream and Nilgiri silver needle tea." }
        ],
        tip: "Savoy hotel was built in 1829 during the British Raj.",
        image: "/images/destinations/ooty_3.jpg"
      },
      {
        dayNumber: 2,
        title: "Private Coonoor Tea Plantation Tour & Tasting",
        tag: "COONOOR ESTATES",
        tagline: "Private visit to high-altitude organic tea estate.",
        activities: [
          { icon: "🍃", title: "Private Tea Plucking & Tasting", description: "Walk through private tea gardens with master blender." }
        ],
        tip: "Dolphin's Nose viewpoint offers views of Catherine Falls.",
        image: "/images/destinations/ooty_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Private Toy Train Charter & Sim's Park",
        tag: "TOY TRAIN VIP",
        tagline: "First-class cabin ride on Nilgiri Mountain Railway.",
        activities: [
          { icon: "🚂", title: "First Class Toy Train Ride", description: "Reserved 1st class compartment down to Coonoor." }
        ],
        tip: "Open windows provide incredible mountain breeze.",
        image: "/images/destinations/ooty_1.jpg"
      },
      {
        dayNumber: 4,
        title: "Private Lake Yacht & Botanical Garden VIP Tour",
        tag: "OOTY LAKE VIP",
        tagline: "Exclusive boat cruise and private horticulturist guide.",
        activities: [
          { icon: "⛵", title: "Private Ooty Lake Cruise", description: "Champagne boat ride on Ooty Lake." },
          { icon: "🌺", title: "Botanical Garden Private Walk", description: "Guided tour of rare orchid house and glasshouse." }
        ],
        tip: "The Italian Garden section was designed by Italian prisoners of war.",
        image: "/images/destinations/ooty_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Ayurvedic Spa & Private Candlelight Cottage Dinner",
        tag: "SPA & DINING",
        tagline: "Revitalizing wellness treatment and private dining.",
        activities: [
          { icon: "💆", title: "Nilgiri Herbal Spa", description: "Aromatherapy massage using local pine & eucalyptus oils." },
          { icon: "🍽️", title: "Private Garden Candlelight Dinner", description: "Curated 4-course dinner by the fireplace." }
        ],
        tip: "Enjoy bonfire beneath starlit hill skies.",
        image: "/images/destinations/ooty_3.jpg"
      },
      {
        dayNumber: 6,
        title: "Departure to Coimbatore",
        tag: "DEPARTURE",
        tagline: "Private transfer to airport.",
        activities: [
          { icon: "✈️", title: "Private Airport Transfer", description: "Luxury vehicle drive back to Coimbatore." }
        ],
        tip: "Complimentary Nilgiri tea set gift provided at checkout.",
        image: "/images/destinations/ooty_1.jpg"
      }
    ],
    hotels: [
      { name: "Savoy - IHCL SeleQtions Ooty", rating: "★★★★★", type: "Colonial Heritage Hotel", location: "Ooty", image: "/images/destinations/ooty_3.jpg" }
    ]
  },
  "nepal": {
    slug: "nepal",
    destination: "Nepal",
    title: "Nepal Himalayan Peaks & Kathmandu Stupas",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/nepal_1.jpg",
    tagline: "Kathmandu Valley Stupas, Pokhara Phewa Lake & Sarangkot Sunrise",
    basePrice: 28500,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Kathmandu",
        tag: "KATHMANDU",
        tagline: "Land in Kathmandu and explore Thamel.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Transfer to Kathmandu hotel." }
        ],
        tip: "Try authentic momos.",
        image: "/images/destinations/nepal_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Kathmandu UNESCO Stupas",
        tag: "UNESCO",
        tagline: "Boudhanath & Pashupatinath temple.",
        activities: [
          { icon: "🛕", title: "Pashupatinath Temple", description: "Sacred Hindu temple complex." }
        ],
        tip: "Visit Swayambhunath.",
        image: "/images/destinations/nepal_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Drive to Pokhara",
        tag: "POKHARA",
        tagline: "Drive to Pokhara lakeside.",
        activities: [
          { icon: "⛵", title: "Phewa Lake Boating", description: "Boat ride on Phewa lake." }
        ],
        tip: "Sunset reflections of Fishtail mountain.",
        image: "/images/destinations/nepal_1.jpg"
      },
      {
        dayNumber: 4,
        title: "Sarangkot Sunrise",
        tag: "SUNRISE",
        tagline: "Sunrise over Annapurna peaks.",
        activities: [
          { icon: "🌅", title: "Sarangkot View", description: "Golden sunrise over snow peaks." }
        ],
        tip: "Visit Davis falls.",
        image: "/images/destinations/nepal_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Departure via Kathmandu",
        tag: "DEPARTURE",
        tagline: "Transfer to airport.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Drive back to TIA airport." }
        ],
        tip: "Namaste!",
        image: "/images/destinations/nepal_1.jpg"
      }
    ],
    hotels: [
      { name: "Fish Tail Lodge Pokhara", rating: "★★★★★", type: "Lakeside Resort", location: "Pokhara", image: "/images/destinations/nepal_1.jpg" }
    ]
  },
  "ooty": {
    slug: "ooty",
    destination: "Ooty",
    title: "Ooty Queen of Nilgiri Hill Stations",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/ooty_1.jpg",
    tagline: "Nilgiri Mountain Toy Train, Ooty Lake & Tea Estates",
    basePrice: 14500,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Ooty",
        tag: "OOTY",
        tagline: "Drive up the hairpin bends to Ooty.",
        activities: [
          { icon: "✈️", title: "Coimbatore Pick-up", description: "Transfer from Coimbatore to Ooty." }
        ],
        tip: "Enjoy hill station breeze.",
        image: "/images/destinations/ooty_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Nilgiri Toy Train & Coonoor",
        tag: "TOY TRAIN",
        tagline: "Ride UNESCO heritage steam train.",
        activities: [
          { icon: "🚂", title: "Nilgiri Mountain Railway", description: "Toy train ride through tunnels and pine forests." }
        ],
        tip: "Visit Sim's Park.",
        image: "/images/destinations/ooty_1.jpg"
      },
      {
        dayNumber: 3,
        title: "Doddabetta Peak & Botanical Gardens",
        tag: "HILLTOP",
        tagline: "Visit Doddabetta peak 2,637m.",
        activities: [
          { icon: "🏔️", title: "Doddabetta Viewpoint", description: "Panoramic view of Nilgiri hills." }
        ],
        tip: "Walk through Botanical Garden.",
        image: "/images/destinations/ooty_2.jpg"
      },
      {
        dayNumber: 4,
        title: "Ooty Lake & Rose Garden",
        tag: "OOTY LAKE",
        tagline: "Boating on Ooty lake.",
        activities: [
          { icon: "🚣", title: "Ooty Lake Boating", description: "Pedal boat ride on the lake." }
        ],
        tip: "Buy homemade dark chocolates.",
        image: "/images/destinations/ooty_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Departure to Coimbatore",
        tag: "DEPARTURE",
        tagline: "Transfer to airport.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Drive back to Coimbatore airport." }
        ],
        tip: "Safe travels!",
        image: "/images/destinations/ooty_1.jpg"
      }
    ],
    hotels: [
      { name: "Gem Park Ooty", rating: "★★★★", type: "Hill View Hotel", location: "Ooty", image: "/images/destinations/ooty_1.jpg" }
    ]
  },

  // ── PONDICHERRY ──
  "pondicherry-express": {
    slug: "pondicherry-express",
    destination: "Pondicherry",
    title: "Pondicherry French Quarter & Coastal Heritage",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/pondicherry_1.jpg",
    tagline: "White Town French Architecture Walking Tour, Promenade Beach & Auroville",
    basePrice: 16500,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Pondicherry & White Town Walk",
        tag: "FRENCH QUARTER",
        tagline: "Check into colonial villa and stroll mustard yellow boulevards.",
        activities: [
          { icon: "✈️", title: "Chennai / Pondicherry Transfer", description: "Private drive to White Town hotel." },
          { icon: "🏛️", title: "French Quarter Heritage Stroll", description: "Mustard yellow villas, wrought-iron balconies & bougainvillea." }
        ],
        tip: "Dine on crepes and croissants at Baker Street bakery.",
        image: "/images/destinations/pondicherry_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Promenade Beach Sunrise & Sri Aurobindo Ashram",
        tag: "PROMENADE & ASHRAM",
        tagline: "Sunrise over Bay of Bengal and spiritual serenity.",
        activities: [
          { icon: "🌅", title: "Rock Beach Sunrise Walk", description: "Pedestrian-only seaside promenade at dawn." },
          { icon: "🧘", title: "Sri Aurobindo Ashram Visit", description: "Quiet meditation at the Samadhi flower courtyard." }
        ],
        tip: "Rock Beach is closed to motor vehicles in morning and evening for walking.",
        image: "/images/destinations/pondicherry_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Auroville Matrimandir & Eco Tour",
        tag: "AUROVILLE",
        tagline: "Visit the global experimental township and golden Matrimandir dome.",
        activities: [
          { icon: "🔮", title: "Matrimandir Golden Dome Viewpoint", description: "Walk through shaded banyan paths to the iconic golden globe." },
          { icon: "🛍️", title: "Auroville Visitors Centre Boutiques", description: "Handmade spirulina, incense, and organic cotton clothing." }
        ],
        tip: "Pre-book Matrimandir inner chamber meditation pass 3 days in advance.",
        image: "/images/destinations/pondicherry_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Paradise Beach Boat Cruise & French Cafe Crawl",
        tag: "PARADISE BEACH",
        tagline: "Boat ride through Chunnambar backwaters to isolated beach.",
        activities: [
          { icon: "🚤", title: "Chunnambar Boat Cruise to Paradise Beach", description: "White sand beach accessible only by boat." },
          { icon: "🍕", title: "Heritage French Cafe Crawl", description: "Wood-fired pizzas at Cafe Extrablatt & Coromandel Cafe." }
        ],
        tip: "Enjoy sea breeze dining at Villa Shanti garden restaurant.",
        image: "/images/destinations/pondicherry_1.jpg"
      },
      {
        dayNumber: 5,
        title: "Departure to Chennai",
        tag: "DEPARTURE",
        tagline: "Transfer back to Chennai airport.",
        activities: [
          { icon: "✈️", title: "Chennai Airport Transfer", description: "Drive along East Coast Road (ECR)." }
        ],
        tip: "Stop at Mahabalipuram shore temple en route if flying from Chennai.",
        image: "/images/destinations/pondicherry_2.jpg"
      }
    ],
    hotels: [
      { name: "Palais de Mahe - CGH Earth", rating: "★★★★★", type: "French Heritage Hotel", location: "White Town, Pondicherry", image: "/images/destinations/pondicherry_1.jpg" }
    ]
  },
  "pondicherry-surf-boho": {
    slug: "pondicherry-surf-boho",
    destination: "Pondicherry",
    title: "Pondicherry Surfing, Paradise Beach & Boho Vibe",
    duration: "3 Nights / 4 Days",
    heroImage: "/images/destinations/pondicherry_2.jpg",
    tagline: "Serenity Beach Surf Lesson, Chunnambar Boat & Cafe Crawl",
    basePrice: 13500,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Pondicherry & Serenity Beach Sunset",
        tag: "SERENITY BEACH",
        tagline: "Check into beach bungalow and enjoy evening waves.",
        activities: [
          { icon: "🏖️", title: "Serenity Beach Check-in", description: "Surfers' paradise beach on northern coast." }
        ],
        tip: "Try fresh coconut water at surf shack cafes.",
        image: "/images/destinations/pondicherry_2.jpg"
      },
      {
        dayNumber: 2,
        title: "Morning Surfing School & Auroville Bakery",
        tag: "SURFING LESSON",
        tagline: "Learn to catch waves with certified ISA surf instructors.",
        activities: [
          { icon: "🏄", title: "Kallialay Surf School Lesson", description: "2-hour beginner surf lesson in warm Bay of Bengal waves." },
          { icon: "🥐", title: "Auroville Bakery Breakfast", description: "Freshly baked artisan quiches and croissants." }
        ],
        tip: "Renting a scooter is the best way to explore Pondy beaches.",
        image: "/images/destinations/pondicherry_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Paradise Beach Speedboat & Boho Shopping",
        tag: "PARADISE BEACH",
        tagline: "Speedboat ride and boho chic shopping.",
        activities: [
          { icon: "🚤", title: "Chunnambar Boat to Paradise Island", description: "Golden sand beach and palm hammocks." },
          { icon: "🛍️", title: "Mission Street Boho Shopping", description: "Handicrafts, aromatherapy oils, and French pottery." }
        ],
        tip: "Watch sunset from the Rock Beach sea wall.",
        image: "/images/destinations/pondicherry_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Departure",
        tag: "DEPARTURE",
        tagline: "Transfer to airport / railway station.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Transfer for onward journey." }
        ],
        tip: "Au revoir!",
        image: "/images/destinations/pondicherry_1.jpg"
      }
    ],
    hotels: [
      { name: "The Dune Eco Village Resort", rating: "★★★★", type: "Beach Eco Resort", location: "Serenity Beach", image: "/images/destinations/pondicherry_2.jpg" }
    ]
  },
  "pondicherry-luxury": {
    slug: "pondicherry-luxury",
    destination: "Pondicherry",
    title: "Pondicherry Villa Shanti & Luxury Colonial Haven",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/pondicherry_3.jpg",
    tagline: "La Villa French Quarter Boutique Stay, Wine Tasting & Auroville Meditation",
    basePrice: 28500,
    days: [
      {
        dayNumber: 1,
        title: "Private Chauffeur & La Villa Check-in",
        tag: "COLONIAL BOUTIQUE",
        tagline: "19th-century French mansion restored into luxury boutique sanctuary.",
        activities: [
          { icon: "🚘", title: "Private SUV Pick-up", description: "Chauffeur transfer from Chennai airport." },
          { icon: "🏛️", title: "La Villa Suite Check-in", description: "Private courtyard pool suite in White Town." }
        ],
        tip: "Welcome French champagne served on arrival.",
        image: "/images/destinations/pondicherry_3.jpg"
      },
      {
        dayNumber: 2,
        title: "Private Architectural Tour & Gastronomy Dining",
        tag: "FRENCH GASTRONOMY",
        tagline: "Guided walk with local historian and 5-course wine dinner.",
        activities: [
          { icon: "🍷", title: "Villa Shanti 5-Course French Dinner", description: "French-Tamil fusion gastronomy paired with French wines." }
        ],
        tip: "Try grilled jumbo prawns with saffron butter sauce.",
        image: "/images/destinations/pondicherry_1.jpg"
      },
      {
        dayNumber: 3,
        title: "Auroville Matrimandir Inner Chamber Meditation",
        tag: "AUROVILLE MEDITATION",
        tagline: "Exclusive entry to the crystal meditation inner chamber.",
        activities: [
          { icon: "🔮", title: "Matrimandir Crystal Chamber Entry", description: "Silent meditation around the world's largest optically pure crystal sphere." }
        ],
        tip: "Absolute silence inside the white marble chamber is deeply transcendent.",
        image: "/images/destinations/pondicherry_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Private Yacht Cruise & Ayurvedic Spa",
        tag: "YACHT & SPA",
        tagline: "Private yacht along coastal backwaters and spa treatment.",
        activities: [
          { icon: "⛵", title: "Private Yacht Backwater Cruise", description: "Champagne cruise through mangrove estuaries." },
          { icon: "💆", title: "French Aromatherapy Massage", description: "Essential oil wellness therapy." }
        ],
        tip: "Sunset views over the ocean from the yacht deck.",
        image: "/images/destinations/pondicherry_2.jpg"
      },
      {
        dayNumber: 5,
        title: "Private Pottery Workshop & French Bistro High Tea",
        tag: "POTTERY & TEA",
        tagline: "Hands-on glazed ceramic workshop in Golden Bridge Pottery.",
        activities: [
          { icon: "🏺", title: "Golden Bridge Pottery Workshop", description: "Create your own clay souvenir with master potter." },
          { icon: "☕", title: "High Tea at Cafe des Arts", description: "Artisan pastries and French press coffee." }
        ],
        tip: "Your handcrafted pottery will be fired and delivered to your hotel.",
        image: "/images/destinations/pondicherry_3.jpg"
      },
      {
        dayNumber: 6,
        title: "Departure via Chennai",
        tag: "DEPARTURE",
        tagline: "Private transfer to Chennai airport.",
        activities: [
          { icon: "✈️", title: "Private Airport Transfer", description: "Luxury vehicle drive back to Chennai." }
        ],
        tip: "VIP lounge access included.",
        image: "/images/destinations/pondicherry_1.jpg"
      }
    ],
    hotels: [
      { name: "La Villa Heritage Hotel", rating: "★★★★★", type: "Ultra Luxury French Boutique", location: "White Town", image: "/images/destinations/pondicherry_3.jpg" }
    ]
  },

  // ── KENYA ──
  "kenya-safari-5n6d": {
    slug: "kenya-safari-5n6d",
    destination: "Kenya",
    title: "Kenya Masai Mara & Lake Nakuru Big Five Safari",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/kenya_1.jpg",
    tagline: "Masai Mara Big Five Game Drives, Flamingo Lakes & Masai Cultural Village",
    basePrice: 115000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Nairobi & Drive to Great Rift Valley",
        tag: "NAIROBI & RIFT VALLEY",
        tagline: "Land in Jomo Kenyatta Airport and drive down the Rift Valley escarpment.",
        activities: [
          { icon: "✈️", title: "Nairobi Airport Pick-up", description: "4x4 Land Cruiser safari vehicle pick-up." },
          { icon: "🏔️", title: "Great Rift Valley Viewpoint", description: "Panoramic view of volcanic valley floor." }
        ],
        tip: "Keep camera ready for baboons along the escarpment road.",
        image: "/images/destinations/kenya_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Drive to Masai Mara National Reserve",
        tag: "MASAI MARA",
        tagline: "Arrive in world-famous safari haven and afternoon game drive.",
        activities: [
          { icon: "🦁", title: "Masai Mara Afternoon Game Drive", description: "Spot lions, cheetahs, and elephants across golden savannas." }
        ],
        tip: "The Mara has the highest density of wild big cats in Africa.",
        image: "/images/destinations/kenya_1.jpg"
      },
      {
        dayNumber: 3,
        title: "Full Day Big Five Game Drive in Masai Mara",
        tag: "BIG FIVE SAFARI",
        tagline: "Full day tracking lions, leopards, rhinos, buffalo, and elephants.",
        activities: [
          { icon: "🦏", title: "Full Day Game Drive with Picnic", description: "Drive to Mara River where wildebeest and hippos congregate." },
          { icon: "🦛", title: "Mara River Hippo & Crocodile Spotting", description: "Guided riverbank walk with armed park ranger." }
        ],
        tip: "Bush picnic lunch under an acacia tree surrounded by wildlife.",
        image: "/images/destinations/kenya_2.jpg"
      },
      {
        dayNumber: 4,
        title: "Masai Village Experience & Drive to Lake Nakuru",
        tag: "MASAI CULTURAL",
        tagline: "Jump dance with Masai warriors and drive to Lake Nakuru.",
        activities: [
          { icon: "💃", title: "Traditional Masai Manyatta Village Tour", description: "Learn about traditional Masai culture, fire-making & beadwork." },
          { icon: "🦩", title: "Lake Nakuru National Park Check-in", description: "Famous pink flamingo lake and sanctuary for white rhinos." }
        ],
        tip: "Lake Nakuru is one of the best places in Kenya to spot leopards in fever trees.",
        image: "/images/destinations/kenya_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Lake Nakuru Morning Safari & Drive to Nairobi",
        tag: "NAIROBI RETURN",
        tagline: "Morning rhino search drive and return to Nairobi.",
        activities: [
          { icon: "🦏", title: "Rhino Sanctuary Game Drive", description: "Close encounters with endangered black and white rhinoceroses." }
        ],
        tip: "Dine at the legendary Carnivore Restaurant in Nairobi.",
        image: "/images/destinations/kenya_1.jpg"
      },
      {
        dayNumber: 6,
        title: "Nairobi Giraffe Centre & Departure",
        tag: "DEPARTURE",
        tagline: "Hand-feed endangered Rothschild giraffes before airport transfer.",
        activities: [
          { icon: "🦒", title: "Giraffe Centre Visit", description: "Feed giraffes from an elevated wooden platform." },
          { icon: "✈️", title: "Airport Transfer", description: "Transfer to JKIA airport." }
        ],
        tip: "Safe trip home from Kenya! Hakuna Matata!",
        image: "/images/destinations/kenya_2.jpg"
      }
    ],
    hotels: [
      { name: "Mara Serena Safari Lodge", rating: "★★★★★", type: "Luxury Safari Lodge", location: "Masai Mara", image: "/images/destinations/kenya_1.jpg" }
    ]
  },
  "kenya-luxury": {
    slug: "kenya-luxury",
    destination: "Kenya",
    title: "Kenya Ultra-Luxury Giraffe Manor & Mara Serena Safari",
    duration: "6 Nights / 7 Days",
    heroImage: "/images/destinations/kenya_3.jpg",
    tagline: "Giraffe Manor Breakfast, Hot Air Balloon Safari & Kilimanjaro Luxury Lodge",
    basePrice: 195000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Nairobi & Giraffe Manor Stay",
        tag: "GIRAFFE MANOR",
        tagline: "World-famous boutique hotel where giraffes poke heads through windows.",
        activities: [
          { icon: "🚘", title: "Private SUV Pick-up", description: "Private luxury chauffeur from JKIA airport." },
          { icon: "🦒", title: "Giraffe Manor Afternoon Tea", description: "Feed Rothschild giraffes from the Manor terrace." }
        ],
        tip: "Giraffe Manor is one of the world's most sought-after hotel stays.",
        image: "/images/destinations/kenya_3.jpg"
      },
      {
        dayNumber: 2,
        title: "Breakfast with Giraffes & Fly to Masai Mara",
        tag: "MANOR BREAKFAST",
        tagline: "Giraffes join you at the breakfast table followed by bush flight.",
        activities: [
          { icon: "🥞", title: "Giraffe Breakfast Experience", description: "Feed giraffes through historic manor windows." },
          { icon: "🛩️", title: "Bush Plane Flight to Masai Mara", description: "45-minute scenic flight to Mara airstrip." }
        ],
        tip: "Aerial views of the Great Rift Valley from the bush plane.",
        image: "/images/destinations/kenya_3.jpg"
      },
      {
        dayNumber: 3,
        title: "Hot Air Balloon Safari over Masai Mara",
        tag: "BALLOON SAFARI",
        tagline: "Dawn hot air balloon flight over Mara savannas followed by champagne breakfast.",
        activities: [
          { icon: "🎈", title: "Sunrise Hot Air Balloon Flight", description: "Float silently above herds of wildebeest and hunting lions." },
          { icon: "🍾", title: "Bush Champagne Breakfast", description: "Full cooked breakfast in the open savanna." }
        ],
        tip: "An unforgettable lifetime bucket list experience.",
        image: "/images/destinations/kenya_1.jpg"
      },
      {
        dayNumber: 4,
        title: "Fly to Amboseli National Park (Mount Kilimanjaro Views)",
        tag: "AMBOSELI",
        tagline: "Fly to Amboseli facing snow-capped Mount Kilimanjaro.",
        activities: [
          { icon: "🛩️", title: "Private Bush Flight to Amboseli", description: "Land right beneath Mount Kilimanjaro peak." },
          { icon: "🐘", title: "Amboseli Elephant Herd Safari", description: "Watch giant bull elephants walking with Kilimanjaro backdrop." }
        ],
        tip: "Kilimanjaro mountain peaks are clearest during early morning and late afternoon.",
        image: "/images/destinations/kenya_2.jpg"
      },
      {
        dayNumber: 5,
        title: "Amboseli Observation Hill & Luxury Spa",
        tag: "KILIMANJARO VIEWS",
        tagline: "360-degree view of swamps, elephants, and volcano.",
        activities: [
          { icon: "🏔️", title: "Observation Hill Hike", description: "Look out across swamp waters filled with wallowing hippos." },
          { icon: "💆", title: "Savanna Spa Massage", description: "Relaxing massage treatment on your private lodge deck." }
        ],
        tip: "Sundowner drinks overlooking the African sunset.",
        image: "/images/destinations/kenya_2.jpg"
      },
      {
        dayNumber: 6,
        title: "Fly back to Nairobi & Karen Blixen Museum",
        tag: "NAIROBI VIP",
        tagline: "Fly back to Nairobi and visit Out of Africa estate.",
        activities: [
          { icon: "🏛️", title: "Karen Blixen Museum Tour", description: "Colonial farmhouse featured in the film Out of Africa." }
        ],
        tip: "Dine at Hemingways Nairobi fine dining restaurant.",
        image: "/images/destinations/kenya_3.jpg"
      },
      {
        dayNumber: 7,
        title: "Departure from Nairobi",
        tag: "DEPARTURE",
        tagline: "Private transfer to airport.",
        activities: [
          { icon: "✈️", title: "Private Airport Transfer", description: "Transfer to Jomo Kenyatta International Airport." }
        ],
        tip: "Asante Sana!",
        image: "/images/destinations/kenya_1.jpg"
      }
    ],
    hotels: [
      { name: "Giraffe Manor Nairobi", rating: "★★★★★", type: "Ultra Luxury Sanctuary", location: "Nairobi", image: "/images/destinations/kenya_3.jpg" }
    ]
  },
  "kenya-amboseli": {
    slug: "kenya-amboseli",
    destination: "Kenya",
    title: "Kenya Amboseli Elephant & Great Rift Valley Trail",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/kenya_2.jpg",
    tagline: "Amboseli Elephant Herds, Lake Naivasha Boat Safari & Great Rift Valley",
    basePrice: 98000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Nairobi & Drive to Lake Naivasha",
        tag: "LAKE NAIVASHA",
        tagline: "Drive to freshwater Rift Valley lake.",
        activities: [
          { icon: "✈️", title: "Nairobi Pick-up", description: "Transfer to Lake Naivasha resort." },
          { icon: "🚤", title: "Naivasha Sunset Boat Safari", description: "Spot fish eagles diving for fish and hippo pods." }
        ],
        tip: "Crescent Island walking safari allows walking right next to wild giraffes and zebras.",
        image: "/images/destinations/kenya_2.jpg"
      },
      {
        dayNumber: 2,
        title: "Crescent Island Walking Safari & Drive to Amboseli",
        tag: "WALKING SAFARI",
        tagline: "Walk amongst wild animals without predators.",
        activities: [
          { icon: "🦓", title: "Crescent Island Guided Foot Safari", description: "Walk among herds of wildebeest, waterbucks, and giraffes." },
          { icon: "🚙", title: "Drive to Amboseli National Park", description: "Drive southeast towards Tanzania border." }
        ],
        tip: "One of the few places in East Africa where foot safaris are safe and accessible.",
        image: "/images/destinations/kenya_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Full Day Game Safari under Mt. Kilimanjaro",
        tag: "KILIMANJARO SAFARI",
        tagline: "Iconic photography of elephants with snow peak backdrop.",
        activities: [
          { icon: "🐘", title: "Amboseli Big Elephant Safari", description: "Observe world's largest free-ranging elephant herds." }
        ],
        tip: "Amboseli has over 1,500 elephants in protected breeding families.",
        image: "/images/destinations/kenya_1.jpg"
      },
      {
        dayNumber: 4,
        title: "Amboseli Sunrise & Return to Nairobi",
        tag: "NAIROBI",
        tagline: "Sunrise view over Kilimanjaro and return drive.",
        activities: [
          { icon: "🌅", title: "Sunrise Safari Game Drive", description: "Pre-breakfast morning game drive." }
        ],
        tip: "Visit Kazuri beads artisan workshop in Nairobi.",
        image: "/images/destinations/kenya_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Departure",
        tag: "DEPARTURE",
        tagline: "Transfer to airport.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Transfer to Nairobi airport." }
        ],
        tip: "Safe flight!",
        image: "/images/destinations/kenya_2.jpg"
      }
    ],
    hotels: [
      { name: "Amboseli Serena Safari Lodge", rating: "★★★★", type: "Safari Lodge", location: "Amboseli", image: "/images/destinations/kenya_2.jpg" }
    ]
  },

  // ── VARANASI ──
  "varanasi-spiritual": {
    slug: "varanasi-spiritual",
    destination: "Varanasi",
    title: "Varanasi Sacred Ganges & Kashi Vishwanath Spiritual Tour",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/varanasi_1.jpg",
    tagline: "Ganga Aarti VIP Seating, Sunrise Boat Cruise & Kashi Vishwanath Temple",
    basePrice: 15500,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Varanasi & Evening Ganga Aarti Ceremony",
        tag: "GANGA AARTI",
        tagline: "Land in Lal Bahadur Shastri Airport and witness divine river ceremony.",
        activities: [
          { icon: "✈️", title: "Varanasi Airport Transfer", description: "Private car transfer to your ghats hotel." },
          { icon: "🪔", title: "Dashashwamedh Ghat Evening Aarti VIP Seats", description: "Chanting priests, brass oil lamps, bells and floating diyas on the Ganges." }
        ],
        tip: "Watching Ganga Aarti from a wooden boat on the river provides the best vantage point.",
        image: "/images/destinations/varanasi_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Sunrise Ganges Boat Ride & Kashi Vishwanath Corridor",
        tag: "SUNRISE BOAT & TEMPLE",
        tagline: "Subah-e-Banaras morning boat cruise past ancient 84 ghats.",
        activities: [
          { icon: "🚣", title: "Sunrise Bajra Boat Cruise", description: "Witness morning bathing rituals, yoga, and prayers along Assi to Manikarnika Ghat." },
          { icon: "🛕", title: "Kashi Vishwanath Temple Darshan", description: "Visit the revered Jyotirlinga temple via the newly constructed grand corridor." }
        ],
        tip: "Taste authentic Banarasi kachori sabzi and hot jalebi for morning breakfast.",
        image: "/images/destinations/varanasi_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Sarnath Excursion & Buddhist Stupa",
        tag: "SARNATH",
        tagline: "Visit the sacred site where Lord Buddha preached his first sermon.",
        activities: [
          { icon: "☸️", title: "Dhamek Stupa Sarnath", description: "Massive 43-meter cylindrical stone stupa dating to 500 AD." },
          { icon: "🦁", title: "Sarnath Archaeological Museum", description: "See the original 250 BC Ashoka Lion Capital of India." }
        ],
        tip: "Sarnath is just 10 km from Varanasi city center.",
        image: "/images/destinations/varanasi_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Banarasi Silk Weaving Village & Street Food Crawl",
        tag: "SILK & CUISINE",
        tagline: "Handloom silk saree weavers and Banaras culinary delicacies.",
        activities: [
          { icon: "🧵", title: "Handloom Silk Weaving Workshop", description: "Watch master weavers create gold zari Banarasi sarees." },
          { icon: "🍧", title: "Banaras Malaiyyo & Paan Tasting", description: "Savor winter saffron foam sweet Malaiyyo and famous Banarasi Paan." }
        ],
        tip: "Buy authentic silk sarees directly from government weaver cooperatives.",
        image: "/images/destinations/varanasi_1.jpg"
      },
      {
        dayNumber: 5,
        title: "Departure from Varanasi",
        tag: "DEPARTURE",
        tagline: "Transfer to airport / railway station.",
        activities: [
          { icon: "✈️", title: "Varanasi Airport Transfer", description: "Private car transfer to airport." }
        ],
        tip: "Har Har Mahadev!",
        image: "/images/destinations/varanasi_2.jpg"
      }
    ],
    hotels: [
      { name: "Taj Nadesar Palace Varanasi", rating: "★★★★★", type: "Royal Heritage Palace", location: "Varanasi", image: "/images/destinations/varanasi_1.jpg" }
    ]
  },
  "varanasi-express": {
    slug: "varanasi-express",
    destination: "Varanasi",
    title: "Varanasi Ghats, Silk Bazaars & Heritage Walk",
    duration: "3 Nights / 4 Days",
    heroImage: "/images/destinations/varanasi_2.jpg",
    tagline: "Assi Ghat Morning Yoga, Manikarnika Walk & Banaras Food Crawl",
    basePrice: 12500,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Varanasi & Assi Ghat Walk",
        tag: "ASSI GHAT",
        tagline: "Check into heritage hotel near Assi Ghat.",
        activities: [
          { icon: "✈️", title: "Airport Pick-up", description: "Transfer to hotel." },
          { icon: "☕", title: "Pizzeria Vaatika Cafe at Assi Ghat", description: "Wood-fired apple pie and coffee overlooking the river." }
        ],
        tip: "Assi Ghat is known for music performance and bohemian spirit.",
        image: "/images/destinations/varanasi_2.jpg"
      },
      {
        dayNumber: 2,
        title: "Subah-e-Banaras & Alleyways Heritage Tour",
        tag: "HERITAGE WALK",
        tagline: "Explore narrow labyrinthine alleys (Galis) of ancient Banaras.",
        activities: [
          { icon: "🧘", title: "Subah-e-Banaras Morning Aarti", description: "Dawn Vedic chanting and classical raga performance at Assi Ghat." },
          { icon: "🚶", title: "Old City Alleyway Walk", description: "Explore 3,000-year-old narrow lanes filled with temples and shrines." }
        ],
        tip: "Navigating Banaras galis on foot is the true way to experience the city.",
        image: "/images/destinations/varanasi_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Ganga Evening Boat Ride & Silk Bazaars",
        tag: "GANGA BOAT & SILK",
        tagline: "Sunset boat ride and shopping in Vishwanath Gali.",
        activities: [
          { icon: "⛵", title: "Sunset River Cruise", description: "Glide past illuminated stone ghats as evening sets." },
          { icon: "🛍️", title: "Vishwanath Gali Shopping", description: "Shop for brass statues, rudraksha beads, and wooden toys." }
        ],
        tip: "Try Blue Lassi near Manikarnika Ghat with 80 fruit flavors.",
        image: "/images/destinations/varanasi_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Departure",
        tag: "DEPARTURE",
        tagline: "Transfer to airport.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Transfer to airport." }
        ],
        tip: "Safe travels!",
        image: "/images/destinations/varanasi_1.jpg"
      }
    ],
    hotels: [
      { name: "Suryauday Haveli - CGH Earth", rating: "★★★★", type: "Ghatside Heritage Haveli", location: "Shivala Ghat, Varanasi", image: "/images/destinations/varanasi_2.jpg" }
    ]
  },
  "varanasi-luxury": {
    slug: "varanasi-luxury",
    destination: "Varanasi",
    title: "Varanasi BrijRama Palace Royal Heritage Experience",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/varanasi_3.jpg",
    tagline: "18th Century BrijRama Palace Stay, Private Bajra Cruise & Shehnai Recital",
    basePrice: 32000,
    days: [
      {
        dayNumber: 1,
        title: "Private Boat Arrival & BrijRama Palace Check-in",
        tag: "ROYAL PALACE",
        tagline: "18th-century palace hotel accessible directly from the Ganges river by private boat.",
        activities: [
          { icon: "🚘", title: "Private SUV Airport Transfer", description: "Chauffeur transfer to river jetty." },
          { icon: "⛵", title: "Private Bajra Boat Royal Welcome", description: "Marigold flower welcome cruise across to Darbhanga Ghat palace." }
        ],
        tip: "BrijRama Palace features one of the oldest working elevator lifts in South Asia.",
        image: "/images/destinations/varanasi_3.jpg"
      },
      {
        dayNumber: 2,
        title: "Private Ganga Aarti & Classical Shehnai Evening",
        tag: "PRIVATE AARTI & MUSIC",
        tagline: "Reserved terrace seating for Ganga Aarti and live classical sitar.",
        activities: [
          { icon: "🪔", title: "Palace Terrace Aarti View", description: "Watch Ganga Aarti from private elevated palace terrace." },
          { icon: "🎶", title: "Private Banaras Gharana Classical Recital", description: "Private music performance by traditional Shehnai masters." }
        ],
        tip: "Varanasi is a UNESCO Creative City of Music.",
        image: "/images/destinations/varanasi_1.jpg"
      },
      {
        dayNumber: 3,
        title: "Private Kashi Vishwanath VIP Darshan & Sarnath",
        tag: "VIP DARSHAN",
        tagline: "Escorted VIP entrance to Kashi Vishwanath temple.",
        activities: [
          { icon: "🛕", title: "Kashi Vishwanath VIP Entry", description: "Skip line temple darshan." },
          { icon: "🚗", title: "Private Chauffeur Tour of Sarnath", description: "Private guided tour of Buddhist ruins." }
        ],
        tip: "Special morning Rudrabhishek pooja can be arranged.",
        image: "/images/destinations/varanasi_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Private Bajra Sunset Dinner Cruise",
        tag: "SUNSET CRUISE",
        tagline: "Dining on board private traditional wooden Bajra boat.",
        activities: [
          { icon: "🍽️", title: "Gourmet Candlelight Dinner on Ganges", description: "Curated 4-course vegetarian royal feast served while floating past illuminated ghats." }
        ],
        tip: "Pure magic as 84 ghats light up under moonlit sky.",
        image: "/images/destinations/varanasi_1.jpg"
      },
      {
        dayNumber: 5,
        title: "Master Weaver Silk Workshop & Heritage Spa",
        tag: "SILK & SPA",
        tagline: "Private visit to National Award winning silk artisan.",
        activities: [
          { icon: "🧵", title: "Master Weaver Private Studio Visit", description: "Private custom saree ordering." },
          { icon: "💆", title: "Palace Ayurvedic Spa", description: "Herbal massage in palace spa sanctuary." }
        ],
        tip: "Custom handwoven sarees can be shipped worldwide.",
        image: "/images/destinations/varanasi_2.jpg"
      },
      {
        dayNumber: 6,
        title: "Departure via Varanasi",
        tag: "DEPARTURE",
        tagline: "Private boat transfer and airport drive.",
        activities: [
          { icon: "✈️", title: "Private Airport Transfer", description: "Private boat to jetty and chauffeur drive to airport." }
        ],
        tip: "VIP airport lounge access included.",
        image: "/images/destinations/varanasi_3.jpg"
      }
    ],
    hotels: [
      { name: "BrijRama Palace - Heritage Hotel", rating: "★★★★★", type: "Ultra Luxury Palace on Ghats", location: "Darbhanga Ghat, Varanasi", image: "/images/destinations/varanasi_3.jpg" }
    ]
  },

  // ── BASE DESTINATION ITINERARIES ──
  "pondicherry": {
    slug: "pondicherry",
    destination: "Pondicherry",
    title: "Pondicherry French Quarter & Promenade Beach",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/pondicherry_1.jpg",
    tagline: "White Town French Architecture, Promenade Beach & Auroville",
    basePrice: 16500,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Pondicherry",
        tag: "PONDICHERRY",
        tagline: "Stroll mustard yellow boulevards.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Transfer to White Town hotel." }
        ],
        tip: "Enjoy French cafes.",
        image: "/images/destinations/pondicherry_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Promenade Beach & Ashram",
        tag: "PROMENADE",
        tagline: "Sunrise at Rock Beach.",
        activities: [
          { icon: "🌅", title: "Rock Beach Sunrise", description: "Morning walk along ocean sea wall." }
        ],
        tip: "Visit Sri Aurobindo Ashram.",
        image: "/images/destinations/pondicherry_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Auroville Matrimandir",
        tag: "AUROVILLE",
        tagline: "Golden dome view point.",
        activities: [
          { icon: "🔮", title: "Matrimandir View", description: "Walk through green gardens to golden dome." }
        ],
        tip: "Shop at Auroville boutiques.",
        image: "/images/destinations/pondicherry_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Paradise Beach Cruise",
        tag: "PARADISE BEACH",
        tagline: "Boat cruise to paradise beach.",
        activities: [
          { icon: "🚤", title: "Paradise Beach Boat", description: "Boat ride across backwaters to beach." }
        ],
        tip: "Try wood-fired pizza.",
        image: "/images/destinations/pondicherry_1.jpg"
      },
      {
        dayNumber: 5,
        title: "Departure",
        tag: "DEPARTURE",
        tagline: "Transfer to airport.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Drive back to airport." }
        ],
        tip: "Au revoir!",
        image: "/images/destinations/pondicherry_2.jpg"
      }
    ],
    hotels: [
      { name: "Palais de Mahe", rating: "★★★★★", type: "French Heritage Hotel", location: "Pondicherry", image: "/images/destinations/pondicherry_1.jpg" }
    ]
  },
  "kenya": {
    slug: "kenya",
    destination: "Kenya",
    title: "Kenya Masai Mara Safari & Wildlife",
    duration: "5 Nights / 6 Days",
    heroImage: "/images/destinations/kenya_1.jpg",
    tagline: "Masai Mara Big Five Safari, Lake Nakuru & Giraffe Sanctuary",
    basePrice: 115000,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Nairobi",
        tag: "NAIROBI",
        tagline: "Arrive in Nairobi.",
        activities: [
          { icon: "✈️", title: "Airport Pick-up", description: "Transfer to Nairobi hotel." }
        ],
        tip: "Rest before safari.",
        image: "/images/destinations/kenya_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Drive to Masai Mara",
        tag: "MASAI MARA",
        tagline: "Afternoon game drive in Masai Mara.",
        activities: [
          { icon: "🦁", title: "Masai Mara Safari", description: "Spot lions and giraffes." }
        ],
        tip: "Keep camera ready.",
        image: "/images/destinations/kenya_1.jpg"
      },
      {
        dayNumber: 3,
        title: "Full Day Safari",
        tag: "BIG FIVE",
        tagline: "Full day tracking Big Five animals.",
        activities: [
          { icon: "🦏", title: "Big Five Safari", description: "Drive to Mara river." }
        ],
        tip: "Bush picnic lunch.",
        image: "/images/destinations/kenya_2.jpg"
      },
      {
        dayNumber: 4,
        title: "Lake Nakuru Flamingo Sanctuary",
        tag: "LAKE NAKURU",
        tagline: "Rhino sanctuary drive.",
        activities: [
          { icon: "🦩", title: "Lake Nakuru Safari", description: "Spot rhinos and flamingos." }
        ],
        tip: "Great leopard spotting.",
        image: "/images/destinations/kenya_3.jpg"
      },
      {
        dayNumber: 5,
        title: "Giraffe Centre & Departure",
        tag: "DEPARTURE",
        tagline: "Feed giraffes and airport transfer.",
        activities: [
          { icon: "🦒", title: "Giraffe Centre", description: "Feed Rothschild giraffes." }
        ],
        tip: "Hakuna Matata!",
        image: "/images/destinations/kenya_1.jpg"
      }
    ],
    hotels: [
      { name: "Mara Serena Safari Lodge", rating: "★★★★★", type: "Safari Lodge", location: "Masai Mara", image: "/images/destinations/kenya_1.jpg" }
    ]
  },
  "varanasi": {
    slug: "varanasi",
    destination: "Varanasi",
    title: "Varanasi Sacred Ganges & Kashi Vishwanath",
    duration: "4 Nights / 5 Days",
    heroImage: "/images/destinations/varanasi_1.jpg",
    tagline: "Ganga Aarti, Sunrise Ganges Cruise & Ancient Ghats",
    basePrice: 15500,
    days: [
      {
        dayNumber: 1,
        title: "Arrive Varanasi & Ganga Aarti",
        tag: "GANGA AARTI",
        tagline: "Witness evening Ganga Aarti ceremony.",
        activities: [
          { icon: "🪔", title: "Ganga Aarti VIP View", description: "Oil lamps and prayers along the river." }
        ],
        tip: "Best viewed from boat.",
        image: "/images/destinations/varanasi_1.jpg"
      },
      {
        dayNumber: 2,
        title: "Sunrise Boat Ride & Vishwanath Temple",
        tag: "SUNRISE BOAT",
        tagline: "Morning boat ride past 84 ghats.",
        activities: [
          { icon: "🚣", title: "Sunrise Boat Ride", description: "Cruising along sacred Ganges." }
        ],
        tip: "Visit Kashi Vishwanath Corridor.",
        image: "/images/destinations/varanasi_2.jpg"
      },
      {
        dayNumber: 3,
        title: "Sarnath Excursion",
        tag: "SARNATH",
        tagline: "Visit Buddhist Dhamek Stupa.",
        activities: [
          { icon: "☸️", title: "Dhamek Stupa Sarnath", description: "Ancient Buddhist stone stupa." }
        ],
        tip: "10 km from Varanasi.",
        image: "/images/destinations/varanasi_3.jpg"
      },
      {
        dayNumber: 4,
        title: "Banarasi Silk Weaving & Food Crawl",
        tag: "SILK & FOOD",
        tagline: "Watch saree weaving and taste street food.",
        activities: [
          { icon: "🧵", title: "Silk Saree Workshop", description: "Watch handloom silk weavers." }
        ],
        tip: "Taste Malaiyyo sweet.",
        image: "/images/destinations/varanasi_1.jpg"
      },
      {
        dayNumber: 5,
        title: "Departure",
        tag: "DEPARTURE",
        tagline: "Transfer to airport.",
        activities: [
          { icon: "✈️", title: "Airport Transfer", description: "Transfer to airport." }
        ],
        tip: "Har Har Mahadev!",
        image: "/images/destinations/varanasi_2.jpg"
      }
    ],
    hotels: [
      { name: "Suryauday Haveli", rating: "★★★★", type: "Ghatside Haveli", location: "Varanasi", image: "/images/destinations/varanasi_1.jpg" }
    ]
  }
};


