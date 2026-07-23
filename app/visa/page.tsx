"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { GlassCard, RevealWrapper } from "@/components/ui";

interface VisaCategory {
  title: string;
  documents: string[];
}

interface VisaCountry {
  code: string;
  name: string;
  popular?: boolean;
  type: "Visa Free" | "Visa on Arrival" | "E-Visa (Online)" | "Visa Required";
  stay: string;
  processing: string;
  price?: string;
  region: "Asia" | "Europe" | "Middle East" | "Americas" | "Africa" | "Oceania";
  currency: string;
  description: string;
  categories?: VisaCategory[];
  documents?: string[];
  importantNotes: string[];
  embassyInfo: {
    name: string;
    address: string;
    phone: string;
  };
}

const VISA_DESTINATIONS: VisaCountry[] = [
  // --- ASIA ---
  {
    code: "MV",
    name: "Maldives",
    popular: true,
    type: "Visa Free",
    stay: "30 days",
    processing: "Instant (On Arrival)",
    price: "Free",
    region: "Asia",
    currency: "Maldivian Rufiyaa (MVR) / USD",
    description: "Indians enjoy 30-day visa-free entry upon arrival in the Maldives for tourism. IMUGA health declaration form must be completed 96 hours before departure.",
    documents: [
      "Passport valid for at least 1 month from date of arrival",
      "Confirmed resort / hotel booking voucher",
      "Return or onward flight ticket",
      "Sufficient funds (minimum $100 + $50/day)",
      "Completed IMUGA traveller declaration form",
    ],
    importantNotes: [
      "No advance visa fee required.",
      "Work or business activities are strictly prohibited on tourist entry.",
    ],
    embassyInfo: {
      name: "High Commission of Maldives, New Delhi",
      address: "B-2, Anand Niketan, New Delhi 110021",
      phone: "+91 11 4160 3700",
    },
  },
  {
    code: "TH",
    name: "Thailand",
    popular: true,
    type: "Visa Free",
    stay: "30 days",
    processing: "Instant (On Arrival)",
    price: "Free",
    region: "Asia",
    currency: "Thai Baht (THB)",
    description: "Thailand currently grants 30-day visa-free entry for Indian passport holders for leisure and tourism.",
    documents: [
      "Passport with minimum 6 months validity",
      "Confirmed round-trip flight ticket",
      "Proof of hotel stay or accommodation voucher",
      "Proof of funds (10,000 THB per person / 20,000 THB per family)",
      "Travel Insurance (recommended)",
    ],
    importantNotes: [
      "Extension for up to 30 additional days possible at local immigration office.",
    ],
    embassyInfo: {
      name: "Royal Thai Embassy, New Delhi",
      address: "56-N, Nyaya Marg, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 2419 7200",
    },
  },
  {
    code: "ID",
    name: "Indonesia (Bali)",
    popular: true,
    type: "Visa Free",
    stay: "30 days",
    processing: "Instant / e-VOA",
    price: "Free / e-VOA",
    region: "Asia",
    currency: "Indonesian Rupiah (IDR)",
    description: "Indian travellers can obtain 30-day e-VOA or free entry for tourism. Perfect for Bali and Lombok holidays.",
    documents: [
      "Passport valid for at least 6 months",
      "Confirmed return flight ticket",
      "Hotel reservation voucher",
      "Proof of funds for stay",
    ],
    importantNotes: [
      "Bali tourist levy (IDR 150,000) payable online before arrival.",
    ],
    embassyInfo: {
      name: "Embassy of the Republic of Indonesia, New Delhi",
      address: "50-A, Kautilya Marg, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 2611 8640",
    },
  },
  {
    code: "MY",
    name: "Malaysia",
    popular: true,
    type: "Visa Free",
    stay: "30 days",
    processing: "Instant (MDAC)",
    price: "Free",
    region: "Asia",
    currency: "Malaysian Ringgit (MYR)",
    description: "Indian citizens enjoy visa-free entry to Malaysia for stays up to 30 days with MDAC pre-arrival registration.",
    documents: [
      "Passport with 6 months validity",
      "Completed Malaysia Digital Arrival Card (MDAC) within 3 days of travel",
      "Confirmed return tickets",
      "Hotel booking vouchers",
    ],
    importantNotes: [
      "MDAC registration is free and mandatory online prior to departure.",
    ],
    embassyInfo: {
      name: "High Commission of Malaysia, New Delhi",
      address: "50-M, Satya Marg, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 2415 9300",
    },
  },
  {
    code: "SG",
    name: "Singapore",
    popular: true,
    type: "Visa Required",
    stay: "30 days",
    processing: "3–4 working days",
    price: "₹1,500+",
    region: "Asia",
    currency: "Singapore Dollar (SGD)",
    description: "Paper e-Visa processed through authorized visa agents like Earth Travels.",
    documents: [
      "Passport valid 6 months",
      "2 white background photos (35x45mm, 80% face)",
      "Form 14A completed and signed",
      "Covering letter stating purpose & itinerary",
      "Bank statement last 3 months",
      "Confirmed return flight & hotel voucher",
    ],
    importantNotes: [
      "No direct embassy submission; submitted via authorized visa agents.",
    ],
    embassyInfo: {
      name: "High Commission of the Republic of Singapore",
      address: "E-6, Chandragupta Marg, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 4600 0800",
    },
  },
  {
    code: "VN",
    name: "Vietnam",
    popular: true,
    type: "E-Visa (Online)",
    stay: "90 days",
    processing: "3 business days",
    price: "₹800+",
    region: "Asia",
    currency: "Vietnamese Dong (VND)",
    description: "Single or multiple-entry 90-day tourist e-Visa issued online within 3 working days.",
    documents: [
      "Passport with 6 months validity remaining",
      "Digital passport photo & passport bio-page scan",
      "Travel itinerary & hotel voucher",
    ],
    importantNotes: [
      "Valid at 42 international border gates including Hanoi, Saigon, and Da Nang.",
    ],
    embassyInfo: {
      name: "Embassy of the Socialist Republic of Vietnam",
      address: "20, Satya Marg, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 2687 9852",
    },
  },
  {
    code: "LK",
    name: "Sri Lanka",
    popular: true,
    type: "E-Visa (Online)",
    stay: "30 days",
    processing: "24 hours",
    price: "₹800+",
    region: "Asia",
    currency: "Sri Lankan Rupee (LKR)",
    description: "Indians can apply for e-Visa (ETA) online in under 24 hours for beach and cultural holidays.",
    documents: [
      "Passport with 6 months validity",
      "Confirmed round-trip ticket",
      "Hotel reservations",
      "Sufficient travel funds",
    ],
    importantNotes: ["Free ETA initiatives run periodically for Indian tourists."],
    embassyInfo: {
      name: "High Commission of Sri Lanka, New Delhi",
      address: "27, Kautilya Marg, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 2301 0201",
    },
  },
  {
    code: "JP",
    name: "Japan",
    popular: true,
    type: "Visa Required",
    stay: "15 days",
    processing: "4 business days",
    price: "₹1,500+",
    region: "Asia",
    currency: "Japanese Yen (JPY)",
    description: "Tourist visa processed via VFS Japan. E-Visa also available for eligible Indian passport holders.",
    documents: [
      "Original passport with 6 months validity",
      "2 photos (2x2 inches, white background, matte finish)",
      "Visa application form signed",
      "Covering letter detailing daily itinerary",
      "Bank statement (last 6 months with seal & sign)",
      "ITR last 2 years",
      "Confirmed flight & hotel bookings",
    ],
    importantNotes: [
      "Multiple-entry 3-year or 5-year visa available for frequent travellers.",
    ],
    embassyInfo: {
      name: "Embassy of Japan, New Delhi",
      address: "50-G, Shantipath, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 2687 6564",
    },
  },
  {
    code: "KR",
    name: "South Korea",
    type: "Visa Required",
    stay: "90 days",
    processing: "5–7 working days",
    price: "₹1,800+",
    region: "Asia",
    currency: "South Korean Won (KRW)",
    description: "Tourist visa processed through Korea Visa Application Center (KVAC).",
    documents: [
      "Passport valid 6 months",
      "Completed visa form with 2 photos",
      "Bank statements & 2 years ITR",
      "Employment certificate & leave letter",
      "Flight and accommodation proof",
    ],
    importantNotes: [
      "K-ETA e-Visa exemption applies for eligible transit pass holders.",
    ],
    embassyInfo: {
      name: "Embassy of the Republic of Korea, New Delhi",
      address: "9, Chandragupta Marg, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 4200 7000",
    },
  },
  {
    code: "NP",
    name: "Nepal",
    popular: true,
    type: "Visa on Arrival",
    stay: "Freedom of Stay",
    processing: "Instant",
    price: "Free",
    region: "Asia",
    currency: "Nepalese Rupee (NPR) / INR",
    description: "Indian citizens do not require a visa to enter Nepal under the 1950 Indo-Nepal Treaty.",
    documents: [
      "Voter ID card issued by Election Commission of India OR Passport",
      "Flight ticket or road entry pass",
    ],
    importantNotes: [
      "Aadhaar Card is NOT accepted as sole identity proof at immigration checkpoints.",
    ],
    embassyInfo: {
      name: "Embassy of Nepal, New Delhi",
      address: "Barakhamba Road, New Delhi 110001",
      phone: "+91 11 2332 9969",
    },
  },
  {
    code: "BT",
    name: "Bhutan",
    type: "Visa on Arrival",
    stay: "30 days",
    processing: "1 day processing",
    price: "SDF Nu. 1200/day",
    region: "Asia",
    currency: "Bhutanese Ngultrum (BTN) / INR",
    description: "Indian nationals require an Entry Permit obtained at Paro Airport or Phuentsholing border.",
    documents: [
      "Indian Passport (6 months validity) or Voter Identity Card",
      "Sustainable Development Fee (SDF) payment receipt (Nu. 1,200/day for Indians)",
      "Confirmed hotel booking and licensed Bhutanese guide",
    ],
    importantNotes: ["SDF fee mandatory for all Indian visitors."],
    embassyInfo: {
      name: "Royal Bhutanese Embassy, New Delhi",
      address: "50-A, Chandragupta Marg, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 2688 9230",
    },
  },
  {
    code: "KH",
    name: "Cambodia",
    type: "Visa on Arrival",
    stay: "30 days",
    processing: "Instant / e-Visa",
    price: "₹1,000+",
    region: "Asia",
    currency: "Cambodian Riel (KHR) / USD",
    description: "30-day tourist Visa on Arrival available at Phnom Penh and Siem Reap airports, or via online e-Visa.",
    documents: [
      "Passport valid for at least 6 months",
      "1 passport photo",
      "$30 USD cash visa fee",
      "Hotel reservation voucher",
    ],
    importantNotes: ["e-Visa available online prior to travel for faster clearance."],
    embassyInfo: {
      name: "Royal Embassy of Cambodia, New Delhi",
      address: "W-112, Greater Kailash Part II, New Delhi 110048",
      phone: "+91 11 2921 4435",
    },
  },

  // --- MIDDLE EAST ---
  {
    code: "AE",
    name: "Dubai / UAE",
    popular: true,
    type: "Visa Required",
    stay: "30 / 60 days",
    processing: "24–48 hours",
    price: "₹1,200+",
    region: "Middle East",
    currency: "UAE Dirham (AED)",
    description: "30-day and 60-day tourist e-Visas issued rapidly within 24-48 hours through Earth Travels.",
    documents: [
      "Passport valid minimum 6 months",
      "Clear colour passport copy & photograph",
      "Return flight ticket confirmation",
      "Hotel booking voucher",
    ],
    importantNotes: [
      "Indians with valid US / UK / Schengen visa can get 14-day Visa on Arrival at Dubai airport.",
    ],
    embassyInfo: {
      name: "Embassy of the United Arab Emirates, New Delhi",
      address: "EP-12, Chandragupta Marg, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 2419 7000",
    },
  },
  {
    code: "KW",
    name: "Kuwait",
    type: "Visa Required",
    stay: "90 days",
    processing: "5–7 working days",
    price: "₹2,000+",
    region: "Middle East",
    currency: "Kuwaiti Dinar",
    description: "Apply at the Kuwait Embassy or authorized visa agents. E-visa also available online.",
    categories: [
      {
        title: "TOURIST VISA",
        documents: [
          "Valid passport (minimum 6 months validity)",
          "2 passport-size colour photos (white background)",
          "Completed visa application form",
          "Bank statement (last 3 months)",
          "Employment letter / NOC from employer",
          "Hotel booking confirmation",
          "Return/onward flight ticket",
          "Travel insurance",
          "Aadhar Card / PAN Card copy",
        ],
      },
      {
        title: "BUSINESS VISA",
        documents: [
          "Valid passport",
          "2 photos",
          "Invitation letter from Kuwait company",
          "Company registration certificate",
          "Bank statement (last 3 months)",
          "Employment letter from Indian company",
          "Return flight ticket",
          "Travel insurance",
        ],
      },
    ],
    importantNotes: [
      "Kuwait e-visa also available at evisa.moi.gov.kw for some nationalities.",
      "Single entry tourist visa valid for 3 months from issue date, 90 days stay.",
    ],
    embassyInfo: {
      name: "Embassy of the State of Kuwait",
      address: "5-A, Shantipath, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 2600 9851",
    },
  },
  {
    code: "IL",
    name: "Israel",
    type: "Visa Required",
    stay: "90 days",
    processing: "1–3 weeks",
    price: "₹1,500+",
    region: "Middle East",
    currency: "Israeli New Shekel",
    description: "Israel visa processing requires in-person submission at the Israeli Embassy.",
    categories: [
      {
        title: "TOURIST VISA (B/2)",
        documents: [
          "Valid passport (minimum 6 months validity)",
          "2 passport-size colour photos",
          "Completed visa application form",
          "Covering letter with detailed travel purpose and itinerary",
          "Bank statement (last 3 months)",
          "Employment letter with leave approval",
          "Hotel bookings",
          "Return/onward flight ticket",
          "Travel insurance",
          "Government ID (Aadhar / PAN)",
        ],
      },
    ],
    importantNotes: [
      "Israeli entry stamps are kept on a separate entry card — your passport may not be stamped to avoid complications with certain other countries.",
      "Security questioning is thorough at Ben Gurion Airport. Arrive early.",
    ],
    embassyInfo: {
      name: "Embassy of Israel",
      address: "3, Aurangzeb Road, New Delhi 110011",
      phone: "+91 11 3041 5500",
    },
  },
  {
    code: "OM",
    name: "Oman",
    type: "E-Visa (Online)",
    stay: "30 days",
    processing: "24–48 hours",
    price: "₹1,000+",
    region: "Middle East",
    currency: "Omani Rial (OMR)",
    description: "Indians holding valid US, UK, Schengen, or Australia visas can obtain 14-day or 30-day e-Visa online.",
    documents: [
      "Passport valid for at least 6 months",
      "Digital passport photo",
      "Hotel reservation & return tickets",
    ],
    importantNotes: ["14-day visa free for Indian passport holders with valid US/UK/Schengen visa."],
    embassyInfo: {
      name: "Embassy of the Sultanate of Oman",
      address: "EP-10, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 2688 5621",
    },
  },

  // --- EUROPE ---
  {
    code: "EU",
    name: "Europe (Schengen)",
    popular: true,
    type: "Visa Required",
    stay: "90 days",
    processing: "15 working days",
    price: "₹2,000+",
    region: "Europe",
    currency: "Euro (EUR)",
    description: "Uniform Schengen Visa allows travel across 29 European countries including France, Germany, Switzerland, Italy, and Spain.",
    documents: [
      "Valid passport (minimum 3 months validity beyond return date)",
      "2 passport-size colour photos (35x45mm, white background, 80% face)",
      "Completed & signed Schengen visa application form",
      "Confirmed return/onward flight ticket itinerary",
      "Hotel bookings for entire stay in Schengen zone",
      "Travel Insurance (minimum €30,000 medical coverage)",
      "Bank statement (last 3-6 months with original bank seal & signature)",
      "Income Tax Returns (last 2-3 years)",
      "Employment letter with leave approval & salary slips",
      "Covering letter with detailed daily travel itinerary",
    ],
    importantNotes: [
      "Apply at embassy of country where you spend the maximum days.",
      "Biometric appointment mandatory at VFS Global / BLS center.",
    ],
    embassyInfo: {
      name: "Schengen Consular Services (VFS Global / BLS)",
      address: "VFS Global Visa Application Centre, Connaught Place, New Delhi",
      phone: "+91 22 6786 6000",
    },
  },
  {
    code: "FR",
    name: "France",
    popular: true,
    type: "Visa Required",
    stay: "90 days",
    processing: "15 working days",
    price: "₹2,000+",
    region: "Europe",
    currency: "Euro (EUR)",
    description: "France Schengen visa submitted via VFS Global France. Fast processing times for Indian leisure visitors.",
    documents: [
      "Passport valid 3 months beyond stay",
      "Schengen application form",
      "Covering letter, flight & hotel proof",
      "Bank statements & 3 years ITR",
      "Travel insurance €30,000",
    ],
    importantNotes: ["Mandatory biometric submission at VFS France."],
    embassyInfo: {
      name: "Embassy of France in India, New Delhi",
      address: "2-50E, Shantipath, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 4319 6300",
    },
  },
  {
    code: "DE",
    name: "Germany",
    type: "Visa Required",
    stay: "90 days",
    processing: "15 working days",
    price: "₹2,000+",
    region: "Europe",
    currency: "Euro (EUR)",
    description: "German Schengen Visa applications handled by VFS Global across India.",
    documents: [
      "Passport valid 3 months after departure",
      "Schengen form & signed declaration",
      "3 months bank statements certified",
      "ITR last 3 years",
      "Mandatory €30,000 Schengen insurance",
    ],
    importantNotes: ["Strict compliance on bank seal and original signatures."],
    embassyInfo: {
      name: "Embassy of the Federal Republic of Germany",
      address: "No. 6/50G, Shantipath, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 4419 9100",
    },
  },
  {
    code: "ES",
    name: "Spain",
    popular: true,
    type: "Visa Required",
    stay: "90 days",
    processing: "15 working days",
    price: "₹2,000+",
    region: "Europe",
    currency: "Euro (EUR)",
    description: "Spain is part of the Schengen zone. Apply at the Spanish Consulate via BLS International for Spain-focused trips.",
    documents: [
      "Valid passport (minimum 3 months validity beyond return date)",
      "2 passport-size colour photos (35x45mm, white background)",
      "Completed Schengen visa application form (signed)",
      "Confirmed return/onward flight ticket",
      "Hotel bookings for entire stay",
      "Travel insurance (minimum €30,000 coverage)",
      "Bank statement (last 3 months with bank seal)",
      "Income Tax Returns (last 2 years)",
      "Employment letter with leave approval",
      "Property / asset documents",
      "Covering letter with travel itinerary",
    ],
    importantNotes: [
      "Applications are submitted through BLS International for Spanish visa.",
      "All Schengen documents and insurance requirements apply.",
    ],
    embassyInfo: {
      name: "Spanish Embassy New Delhi",
      address: "12, Prithviraj Road, New Delhi 110011",
      phone: "+91 11 4129 3000",
    },
  },
  {
    code: "IT",
    name: "Italy",
    popular: true,
    type: "Visa Required",
    stay: "90 days",
    processing: "15 working days",
    price: "₹2,000+",
    region: "Europe",
    currency: "Euro (EUR)",
    description: "Italy is part of Schengen. Apply at the Italian Consulate via VFS Global for Italy-focused trips.",
    documents: [
      "Valid passport (minimum 3 months validity beyond return date, all pages photocopied)",
      "2 passport-size colour photos (35x45mm, white background)",
      "Completed Schengen visa application form (signed)",
      "Confirmed return/onward flight ticket",
      "Hotel bookings for full duration",
      "Travel insurance (minimum €30,000 coverage)",
      "Bank statement (last 3 months with original bank seal & signature)",
      "Income Tax Returns (last 2 years)",
      "Employment letter with leave dates",
      "Property / asset documents",
      "Covering letter with travel itinerary",
    ],
    importantNotes: [
      "Italy visa applications go through VFS Global in India.",
      "All Schengen rules apply including mandatory travel insurance.",
    ],
    embassyInfo: {
      name: "Italian Embassy New Delhi",
      address: "50 E, Chandragupta Marg, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 2611 4355",
    },
  },
  {
    code: "CH",
    name: "Switzerland",
    popular: true,
    type: "Visa Required",
    stay: "90 days",
    processing: "15 working days",
    price: "₹2,000+",
    region: "Europe",
    currency: "Swiss Franc (CHF) / Euro",
    description: "Swiss Schengen visa submitted at VFS Global Switzerland.",
    documents: [
      "Passport valid 3 months beyond return",
      "Schengen application form",
      "Flight, hotel & rail pass bookings",
      "Bank statement 6 months & 3 years ITR",
      "Medical insurance minimum €30,000",
    ],
    importantNotes: ["High season appointments require early booking."],
    embassyInfo: {
      name: "Embassy of Switzerland, New Delhi",
      address: "Nyaya Marg, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 4995 9500",
    },
  },
  {
    code: "RU",
    name: "Russia",
    type: "Visa Required",
    stay: "30 days",
    processing: "10 working days",
    price: "₹2,500+",
    region: "Europe",
    currency: "Russian Ruble",
    description: "Tourist invitation / support letter from a Russian travel agency or hotel is mandatory.",
    categories: [
      {
        title: "TOURIST VISA",
        documents: [
          "Valid passport (minimum 6 months validity)",
          "2 passport-size colour photos (35x45mm)",
          "Completed visa application form",
          "Tourist invitation / support letter from Russian travel company or hotel (mandatory)",
          "Confirmed hotel bookings for entire stay",
          "Return/onward flight ticket",
          "Travel insurance (valid in Russia, min. USD 30,000 coverage)",
          "Bank statement (last 3 months)",
          "Employment letter",
        ],
      },
      {
        title: "BUSINESS VISA",
        documents: [
          "Valid passport (minimum 6 months validity)",
          "2 passport-size colour photos",
          "Completed visa application form",
          "Invitation letter from Russian company registered with Ministry of Foreign Affairs",
          "Company registration certificate",
          "Bank statement (last 3 months)",
          "Return flight ticket",
          "Travel insurance",
        ],
      },
    ],
    importantNotes: [
      "A tourist invitation (support letter) from a registered Russian travel company is mandatory for tourist visa.",
      "Russia visa applications go through the Russian Embassy or BLS International centres.",
      "E-visa available for some nationalities/ports, but standard visa recommended for Indian passport holders.",
    ],
    embassyInfo: {
      name: "Embassy of the Russian Federation",
      address: "Shantipath, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 2687 3799",
    },
  },
  {
    code: "PL",
    name: "Poland",
    type: "Visa Required",
    stay: "90 days",
    processing: "15 working days",
    price: "₹1,500+",
    region: "Europe",
    currency: "Polish Złoty",
    description: "Poland is part of Schengen. Apply at Polish Consulate for Poland-focused trips.",
    documents: [
      "Valid passport (minimum 3 months beyond return date)",
      "2 passport-size colour photos (35x45mm, white background)",
      "Completed Schengen visa application form (signed)",
      "Confirmed return/onward flight ticket",
      "Hotel bookings for entire stay",
      "Travel insurance (minimum €30,000 coverage)",
      "Bank statement (last 3 months)",
      "Income Tax Returns (last 2 years)",
      "Employment letter with leave approval",
      "Covering letter with itinerary",
    ],
    importantNotes: [
      "Poland applications are processed through VFS Global across India.",
      "All Schengen insurance rules apply strictly.",
    ],
    embassyInfo: {
      name: "Embassy of the Republic of Poland",
      address: "50-M, Shantipath, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 4149 6900",
    },
  },
  {
    code: "TR",
    name: "Turkey",
    popular: true,
    type: "E-Visa (Online)",
    stay: "30 days",
    processing: "Instant to 24 hours",
    price: "₹800+",
    region: "Europe",
    currency: "Turkish Lira",
    description: "Turkey e-visa is quick and easy to obtain online. Single or multiple entry for 30 days.",
    documents: [
      "Valid passport (minimum 6 months validity beyond return date)",
      "Digital passport-size photo",
      "E-visa application at evisa.gov.tr",
      "Credit/debit card for online payment (approx. USD 50)",
      "Confirmed return/onward flight ticket",
      "Hotel booking confirmation",
    ],
    importantNotes: [
      "E-visa is issued instantly in most cases (up to 24 hours max).",
      "Must apply online at evisa.gov.tr — do not use any third-party sites.",
      "E-visa is valid for 180 days from issue date; allows 30 days stay per visit.",
    ],
    embassyInfo: {
      name: "Embassy of the Republic of Turkey",
      address: "50-N, Nyaya Marg, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 2688 9050",
    },
  },
  {
    code: "GB",
    name: "United Kingdom",
    popular: true,
    type: "Visa Required",
    stay: "180 days",
    processing: "3–5 weeks",
    price: "₹2,500+",
    region: "Europe",
    currency: "British Pound (GBP)",
    description: "Standard Visitor Visa (6 months) applied online via UKVI and submitted at VFS UK.",
    documents: [
      "Passport valid for entire duration of stay",
      "6 months bank statements with certified bank seal",
      "Income tax returns last 3 years",
      "Salary slips & employment approval letter",
      "Detailed UK itinerary & accommodation proof",
      "Property / assets evidence",
    ],
    importantNotes: [
      "Priority processing (5-day turnaround) available for additional fee.",
    ],
    embassyInfo: {
      name: "British High Commission, New Delhi",
      address: "Shantipath, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 2419 2100",
    },
  },
  {
    code: "AZ",
    name: "Azerbaijan",
    type: "E-Visa (Online)",
    stay: "30 days",
    processing: "3 business days",
    price: "₹1,000+",
    region: "Europe",
    currency: "Azerbaijani Manat (AZN)",
    description: "ASAN Visa issued online within 3 working days (or 3 hours for urgent service).",
    documents: [
      "Passport valid at least 3 months beyond e-Visa expiry",
      "Scanned passport copy",
      "Hotel reservation & flight details",
    ],
    importantNotes: ["Urgent e-Visa option processes within 3 hours."],
    embassyInfo: {
      name: "Embassy of the Republic of Azerbaijan, New Delhi",
      address: "41, Ring Road, Lajpat Nagar IV, New Delhi 110024",
      phone: "+91 11 2648 3186",
    },
  },
  {
    code: "GE",
    name: "Georgia",
    type: "E-Visa (Online)",
    stay: "30 days",
    processing: "5 business days",
    price: "₹1,000+",
    region: "Europe",
    currency: "Georgian Lari (GEL)",
    description: "Indians with valid US, UK, Schengen, GCC visas enjoy visa-free entry. Otherwise e-Visa online.",
    documents: [
      "Passport valid for duration of stay",
      "Travel insurance & hotel voucher",
      "Return flight ticket",
    ],
    importantNotes: ["Free entry for holders of valid US / UK / Schengen visa."],
    embassyInfo: {
      name: "Embassy of Georgia, New Delhi",
      address: "115, Jor Bagh, New Delhi 110003",
      phone: "+91 11 4905 0707",
    },
  },

  // --- AMERICAS ---
  {
    code: "US",
    name: "USA",
    popular: true,
    type: "Visa Required",
    stay: "180 days",
    processing: "5 days – several months",
    price: "₹3,000+",
    region: "Americas",
    currency: "US Dollar (USD)",
    description: "B1/B2 Tourist Visa requires DS-160 filing, MRV fee payment, OFC biometrics, and consular interview.",
    documents: [
      "DS-160 confirmation page with barcode",
      "Appointment confirmation page",
      "Valid passport & prior expired passports",
      "Passport photo (2x2 inches, 50x50mm)",
      "Bank statements, property papers, tax returns",
      "Employment letter & leave approval",
    ],
    importantNotes: [
      "Interview appointment wait times vary. Dropbox eligibility applies for renewals.",
    ],
    embassyInfo: {
      name: "Embassy of the United States of America",
      address: "Shantipath, Chanakyapuri, New Delhi 110021",
      phone: "+91 124 628 0860",
    },
  },
  {
    code: "CA",
    name: "Canada",
    type: "Visa Required",
    stay: "180 days",
    processing: "4–8 weeks",
    price: "₹2,500+",
    region: "Americas",
    currency: "Canadian Dollar (CAD)",
    description: "Temporary Resident Visa (TRV) filed online via IRCC GCKey portal, followed by VFS biometrics.",
    documents: [
      "Passport bio-page scans",
      "IMM 5257 & IMM 5645 family background forms",
      "Bank statements (6 months) & liquid asset proof",
      "ITR last 3 years & employment documents",
      "Detailed Canada travel itinerary",
    ],
    importantNotes: ["Biometrics valid for 10 years."],
    embassyInfo: {
      name: "High Commission of Canada, New Delhi",
      address: "7/8, Shantipath, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 4178 2000",
    },
  },
  {
    code: "BR",
    name: "Brazil",
    type: "Visa Required",
    stay: "90 days",
    processing: "5–10 working days",
    price: "₹2,000+",
    region: "Americas",
    currency: "Brazilian Real (BRL)",
    description: "VITEM II Tourist Visa applied online and submitted at Brazil Embassy / VFS.",
    documents: [
      "Passport valid 6 months",
      "Roundtrip flight ticket booking",
      "Bank statement last 3 months",
      "Hotel reservation proof",
    ],
    importantNotes: ["Multiple entry 5-year visa generally issued."],
    embassyInfo: {
      name: "Embassy of the Federative Republic of Brazil",
      address: "8, Aurangzeb Road, New Delhi 110011",
      phone: "+91 11 2301 7301",
    },
  },
  {
    code: "AR",
    name: "Argentina",
    type: "Visa Required",
    stay: "90 days",
    processing: "6–8 working days",
    price: "₹2,000+",
    region: "Americas",
    currency: "Argentine Peso (ARS)",
    description: "Tourist Visa or AVE electronic travel authorization for US B2 visa holders.",
    documents: [
      "Passport valid 6 months",
      "Flight reservations & hotel itinerary",
      "Proof of financial solvency",
    ],
    importantNotes: ["AVE e-Visa fast track available for US B1/B2 visa holders."],
    embassyInfo: {
      name: "Embassy of the Argentine Republic",
      address: "F-3/3, Vasant Vihar, New Delhi 110057",
      phone: "+91 11 4078 7800",
    },
  },

  // --- AFRICA & OCEANIA ---
  {
    code: "MU",
    name: "Mauritius",
    popular: true,
    type: "Visa Free",
    stay: "60 days",
    processing: "Instant (On Arrival)",
    price: "Free",
    region: "Africa",
    currency: "Mauritian Rupee (MUR)",
    description: "Indian passport holders travelling for tourist purposes are granted visa-free entry for up to 60 days on arrival.",
    documents: [
      "Passport valid for duration of stay",
      "Confirmed return tickets",
      "Sufficient funds (minimum $100 per day)",
      "Confirmed hotel voucher",
    ],
    importantNotes: ["Yellow fever vaccination required if arriving from infected area."],
    embassyInfo: {
      name: "High Commission of Mauritius, New Delhi",
      address: "EP-41, Jesus & Mary Marg, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 2410 2161",
    },
  },
  {
    code: "KE",
    name: "Kenya",
    type: "Visa on Arrival",
    stay: "90 days",
    processing: "Instant / eTA",
    price: "₹1,200+",
    region: "Africa",
    currency: "Kenyan Shilling (KES) / USD",
    description: "Electronic Travel Authorization (eTA) required online prior to travel for seamless safari entry.",
    documents: [
      "Passport valid 6 months",
      "Flight itinerary & return ticket",
      "Hotel / Safari camp bookings",
      "Yellow fever vaccination certificate",
    ],
    importantNotes: ["eTA replaces traditional visa; apply online at least 3 days before travel."],
    embassyInfo: {
      name: "Kenya High Commission, New Delhi",
      address: "F-3/17, Vasant Vihar, New Delhi 110057",
      phone: "+91 11 2614 6550",
    },
  },
  {
    code: "AU",
    name: "Australia",
    popular: true,
    type: "Visa Required",
    stay: "365 days",
    processing: "5–30 days",
    price: "₹2,000+",
    region: "Oceania",
    currency: "Australian Dollar (AUD)",
    description: "Subclass 600 Visitor Visa processed 100% online via ImmiAccount without physical passport submission.",
    documents: [
      "Passport bio pages scan",
      "National ID / Aadhaar & PAN card",
      "6 months bank statement with bank seal",
      "Form 16 / ITR last 3 years",
      "Employment contract & pay slips",
      "Detailed day-wise Australian itinerary",
      "Property / asset proof",
    ],
    importantNotes: ["Biometrics collection may be required at VFS Australia centers."],
    embassyInfo: {
      name: "Australian High Commission, New Delhi",
      address: "1/50G, Shantipath, Chanakyapuri, New Delhi 110021",
      phone: "+91 11 4139 9900",
    },
  },
  {
    code: "FJ",
    name: "Fiji",
    type: "Visa Free",
    stay: "120 days",
    processing: "Instant (On Arrival)",
    price: "Free",
    region: "Oceania",
    currency: "Fijian Dollar (FJD)",
    description: "Fiji offers up to 4 months (120 days) visa-free stay for Indian tourists upon arrival.",
    documents: [
      "Passport valid 6 months beyond intended stay",
      "Outbound ticket from Fiji",
      "Hotel / resort confirmation",
    ],
    importantNotes: ["Tourist visa extension available inside Fiji up to 6 months total."],
    embassyInfo: {
      name: "High Commission of the Republic of Fiji, New Delhi",
      address: "C-9/3, Vasant Vihar, New Delhi 110057",
      phone: "+91 11 4656 4570",
    },
  },
];

export default function VisaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [activeModalCountry, setActiveModalCountry] = useState<VisaCountry | null>(null);

  // Quick Stats Counts
  const stats = useMemo(() => {
    const free = VISA_DESTINATIONS.filter((d) => d.type === "Visa Free").length;
    const arrival = VISA_DESTINATIONS.filter((d) => d.type === "Visa on Arrival").length;
    const evisa = VISA_DESTINATIONS.filter((d) => d.type === "E-Visa (Online)").length;
    const required = VISA_DESTINATIONS.filter((d) => d.type === "Visa Required").length;
    return { free, arrival, evisa, required };
  }, []);

  // Filtered List
  const filteredDestinations = useMemo(() => {
    return VISA_DESTINATIONS.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType =
        selectedType === "All" ? true : item.type === selectedType;

      const matchesRegion =
        selectedRegion === "All" ? true : item.region === selectedRegion;

      return matchesSearch && matchesType && matchesRegion;
    });
  }, [searchTerm, selectedType, selectedRegion]);

  const getTypeBadgeStyle = (type: VisaCountry["type"]) => {
    switch (type) {
      case "Visa Free":
        return "bg-emerald-50 text-emerald-700 border-emerald-300";
      case "Visa on Arrival":
        return "bg-blue-50 text-blue-700 border-blue-300";
      case "E-Visa (Online)":
        return "bg-purple-50 text-purple-700 border-purple-300";
      case "Visa Required":
        return "bg-amber-50 text-amber-800 border-amber-300";
    }
  };

  return (
    <div className="bg-[#fdf8f2] min-h-screen text-[#1a120a] pt-28 pb-24 select-none">
      <title>Visa Requirements for Indians — Global Concierge & Document Guide | Earth Travels</title>
      <meta
        name="description"
        content="Instantly check visa requirements for Indians across 50+ worldwide destinations. Interactive details popup modal, document checklists, and expert visa filing assistance."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* ================= 1. HERO SECTION ================= */}
        <RevealWrapper delay={0.1}>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-12">
            <span className="font-mono text-xs font-bold text-[#c4900f] uppercase tracking-[0.25em] bg-[#c4900f]/10 border border-[#c4900f]/20 px-3.5 py-1 rounded-full">
              GLOBAL TRAVEL CONCIERGE
            </span>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1a120a] tracking-tight leading-tight">
              Visa Requirements for Indians
            </h1>

            <p className="font-sans text-sm md:text-base text-[#1a120a]/75 leading-relaxed font-light max-w-2xl">
              Instantly explore visa guidelines, document checklists, and embassy details for 50+ destinations worldwide. Our visa experts assist with end-to-end filing and appointments.
            </p>
          </div>
        </RevealWrapper>

        {/* ================= 2. DISCLAIMER BANNER ================= */}
        <RevealWrapper delay={0.15}>
          <div className="max-w-4xl mx-auto bg-[#c4900f]/10 border border-[#c4900f]/30 rounded-2xl p-5 mb-12 text-center shadow-sm">
            <p className="font-sans text-xs md:text-sm leading-relaxed text-[#1a120a]/90 font-medium">
              <strong className="text-[#c4900f]">Consulate Disclaimer:</strong> Visa issuance and approval are strictly at the sole discretion of the respective embassy or consulate. Earth Travels assists in preparing, verifying, and submitting your application based on official guidelines, but cannot guarantee visa approval. All rules are subject to change without notice.
            </p>
          </div>
        </RevealWrapper>

        {/* ================= 3. SEARCH & QUICK STATS ================= */}
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 mb-12">
          {/* Search Input Bar */}
          <div className="relative w-full shadow-md rounded-full">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search destination... e.g. Japan, Europe, Dubai, Poland, Bali, Spain"
              className="w-full bg-white border border-[#1a120a]/15 rounded-full px-14 py-4 text-sm md:text-base text-[#1a120a] placeholder-[#1a120a]/40 focus:outline-none focus:border-[#1aaff2] focus:ring-2 focus:ring-[#1aaff2]/20 font-sans transition-all"
            />
            <svg
              className="w-6 h-6 text-[#1a120a]/40 absolute left-5 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[#1a120a]/50 hover:text-[#1a120a] text-xs font-mono font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Interactive Stat Counter Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full font-mono text-xs">
            <button
              onClick={() => setSelectedType("Visa Free")}
              className={`p-3.5 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                selectedType === "Visa Free"
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-lg scale-105"
                  : "bg-white border-emerald-200 text-emerald-900 hover:bg-emerald-50"
              }`}
            >
              <span className="text-lg font-bold">{stats.free}</span>
              <span className="text-[11px] opacity-90">Visa-Free</span>
            </button>

            <button
              onClick={() => setSelectedType("Visa on Arrival")}
              className={`p-3.5 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                selectedType === "Visa on Arrival"
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105"
                  : "bg-white border-blue-200 text-blue-900 hover:bg-blue-50"
              }`}
            >
              <span className="text-lg font-bold">{stats.arrival}</span>
              <span className="text-[11px] opacity-90">On Arrival</span>
            </button>

            <button
              onClick={() => setSelectedType("E-Visa (Online)")}
              className={`p-3.5 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                selectedType === "E-Visa (Online)"
                  ? "bg-purple-600 text-white border-purple-600 shadow-lg scale-105"
                  : "bg-white border-purple-200 text-purple-900 hover:bg-purple-50"
              }`}
            >
              <span className="text-lg font-bold">{stats.evisa}</span>
              <span className="text-[11px] opacity-90">E-Visa</span>
            </button>

            <button
              onClick={() => setSelectedType("Visa Required")}
              className={`p-3.5 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                selectedType === "Visa Required"
                  ? "bg-amber-600 text-white border-amber-600 shadow-lg scale-105"
                  : "bg-white border-amber-200 text-amber-900 hover:bg-amber-50"
              }`}
            >
              <span className="text-lg font-bold">{stats.required}</span>
              <span className="text-[11px] opacity-90">Visa Required</span>
            </button>
          </div>
        </div>

        {/* ================= 4. FILTER PILLS & REGION SELECTOR ================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-[#1a120a]/10 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "All", label: "🌏 All Countries" },
              { id: "Visa Free", label: "✅ Visa Free" },
              { id: "Visa on Arrival", label: "✈️ On Arrival" },
              { id: "E-Visa (Online)", label: "💻 E-Visa" },
              { id: "Visa Required", label: "📋 Visa Required" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedType(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
                  selectedType === tab.id
                    ? "bg-[#1a120a] text-white shadow-md"
                    : "bg-white border border-[#1a120a]/15 text-[#1a120a]/75 hover:bg-[#1a120a]/5 hover:text-[#1a120a]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Region Dropdown */}
          <div className="relative">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-white border border-[#1a120a]/15 text-[#1a120a] rounded-full px-4 py-2 text-xs font-mono focus:outline-none focus:border-[#c4900f] appearance-none pr-8 cursor-pointer shadow-sm"
            >
              <option value="All">All Regions</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Middle East">Middle East</option>
              <option value="Americas">Americas</option>
              <option value="Africa">Africa</option>
              <option value="Oceania">Oceania</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1a120a]/40 text-[10px] pointer-events-none">
              ▼
            </span>
          </div>
        </div>

        {/* Counter Header */}
        <div className="flex items-center justify-between gap-4 mb-6 font-mono text-xs text-[#1a120a]/60">
          <span>Showing <strong>{filteredDestinations.length}</strong> destinations</span>
          {selectedType !== "All" && (
            <button
              onClick={() => {
                setSelectedType("All");
                setSelectedRegion("All");
                setSearchTerm("");
              }}
              className="text-[#c4900f] hover:underline"
            >
              Reset Filters ↺
            </button>
          )}
        </div>

        {/* ================= 5. DESTINATION CARDS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredDestinations.map((item) => (
            <GlassCard
              key={item.code}
              className="p-6 rounded-2xl bg-white border border-[#1a120a]/10 hover:border-[#1aaff2]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-5 cursor-pointer group"
              onClick={() => setActiveModalCountry(item)}
            >
              <div className="flex flex-col gap-4">
                {/* Card Top Row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#1a120a]/5 border border-[#1a120a]/10 flex items-center justify-center font-mono font-extrabold text-base text-[#1a120a] tracking-widest shrink-0 group-hover:bg-[#1aaff2]/10 group-hover:text-[#1aaff2] transition-colors">
                      {item.code}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#1a120a] group-hover:text-[#1aaff2] transition-colors leading-tight">
                        {item.name}
                      </h3>
                      <span className="text-[11px] font-mono text-[#1a120a]/50">
                        {item.region}
                      </span>
                    </div>
                  </div>

                  {item.popular && (
                    <span className="px-2.5 py-0.5 rounded-full text-[9.5px] font-mono font-bold bg-[#c4900f]/15 text-[#c4900f] border border-[#c4900f]/30 shrink-0">
                      Popular
                    </span>
                  )}
                </div>

                {/* Specs Tags */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className={`px-2.5 py-1 rounded-md border text-[10.5px] font-bold ${getTypeBadgeStyle(item.type)}`}>
                    {item.type}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-[11px]">
                    {item.stay}
                  </span>
                  <span className="text-[#1a120a]/60 text-[11px]">
                    • {item.processing}
                  </span>
                </div>

                <p className="font-sans text-xs text-[#1a120a]/70 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Row CTA */}
              <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#1a120a]/5">
                <span className="font-mono text-xs text-[#c4900f] font-bold">
                  {item.price ? item.price : "Requirements"}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModalCountry(item);
                  }}
                  className="px-4 py-2 rounded-full font-sans text-xs font-semibold bg-[#1a120a] text-white hover:bg-[#1aaff2] transition-colors shadow-sm flex items-center gap-1.5"
                >
                  <span>View Details</span>
                  <span className="text-[10px]">→</span>
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* ================= 6. HOW VISA ASSISTANCE WORKS ================= */}
        <RevealWrapper delay={0.2}>
          <div className="bg-white border border-[#1a120a]/10 rounded-3xl p-8 md:p-12 mb-20 shadow-sm">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="font-mono text-xs font-bold text-[#c4900f] uppercase tracking-wider block mb-2">
                HASSLE-FREE CONCIERGE
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#1a120a]">
                How Earth Travels Visa Service Works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                {
                  step: "01",
                  title: "Select Destination",
                  desc: "Choose your destination and inspect complete document checklists & embassy fees.",
                },
                {
                  step: "02",
                  title: "Document Review",
                  desc: "Send your passport, photos & financial documents for expert audit by our team.",
                },
                {
                  step: "03",
                  title: "Filing & Slot Booking",
                  desc: "We file your e-Visa online or schedule your VFS / Embassy biometric appointment slot.",
                },
                {
                  step: "04",
                  title: "Visa Delivery",
                  desc: "Receive your verified visa directly via WhatsApp and email, ready for departure!",
                },
              ].map((s, idx) => (
                <div key={idx} className="flex flex-col gap-3 relative">
                  <span className="font-mono text-3xl font-extrabold text-[#c4900f]/40">
                    {s.step}
                  </span>
                  <h4 className="font-display text-lg font-bold text-[#1a120a]">
                    {s.title}
                  </h4>
                  <p className="font-sans text-xs text-[#1a120a]/70 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>

        {/* ================= 7. BOTTOM NEED ASSISTANCE BANNER ================= */}
        <RevealWrapper delay={0.3}>
          <div className="bg-gradient-to-r from-[#1a120a] to-[#2a1d10] text-white rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="flex flex-col gap-3 max-w-xl text-center lg:text-left">
              <h3 className="font-display text-2xl md:text-4xl font-extrabold">
                Need Personal Visa Assistance?
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed font-light">
                Our travel experts handle application forms, cover letters, VFS appointments, flight & hotel itineraries, and travel insurance for all countries. Starting from ₹500.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <a
                href="tel:+918941088111"
                className="py-3.5 px-6 rounded-full font-sans text-xs font-bold text-[#1a120a] transition-transform hover:scale-105 shadow-md"
                style={{ background: "linear-gradient(135deg, #e8a820 0%, #c4900f 100%)" }}
              >
                📞 Call Office (+91 89410 88111)
              </a>
              <a
                href="https://wa.me/918941881111?text=Hi%20Earth%20Travels,%20I%20need%20Visa%20Assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-full bg-[#25D366] text-white font-sans text-xs font-semibold hover:bg-[#1EBE5D] transition-transform hover:scale-105 shadow-md flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4 fill-current shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.489.002 9.961-4.467 9.964-9.948.002-2.654-1.03-5.15-2.906-7.029C16.45 1.748 13.957.718 11.31.718c-5.49 0-9.966 4.469-9.969 9.95-.001 1.905.517 3.5 1.498 5.1l-.989 3.613 3.707-.977zm12.39-7.12c-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.174.2-.298.3-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                <span>WhatsApp Visa Desk</span>
              </a>
            </div>
          </div>
        </RevealWrapper>

      </div>

      {/* ================= 8. POPUP DETAILS MODAL DIALOG ================= */}
      {activeModalCountry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-in">
          {/* Modal Overlay Dismiss */}
          <div
            className="absolute inset-0"
            onClick={() => setActiveModalCountry(null)}
          />

          {/* Modal Container Card */}
          <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 border border-[#1a120a]/10 animate-scale-up">
            
            {/* Modal Header Bar */}
            <div className="p-6 bg-[#1a120a] text-white flex items-start justify-between gap-4 shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center font-mono font-extrabold text-xl text-[#1aaff2]">
                  {activeModalCountry.code}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-display text-2xl font-bold text-white">
                      {activeModalCountry.name}
                    </h2>
                    {activeModalCountry.popular && (
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#c4900f] text-[#1a120a]">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-xs font-mono text-white/70">
                    <span className="text-[#1aaff2] font-bold">{activeModalCountry.type}</span>
                    <span>• {activeModalCountry.stay}</span>
                    <span>• {activeModalCountry.processing}</span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setActiveModalCountry(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg font-mono transition-colors shrink-0"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 overflow-y-auto flex flex-col gap-6 text-sm text-[#1a120a]">
              
              {/* Specs Grid Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="bg-[#fdf8f2] border border-[#1a120a]/10 rounded-xl p-3 flex flex-col gap-1">
                  <span className="text-[#1a120a]/50 text-[10px]">PROCESSING TIME</span>
                  <strong className="text-[#1a120a] font-bold">{activeModalCountry.processing}</strong>
                </div>

                <div className="bg-[#fdf8f2] border border-[#1a120a]/10 rounded-xl p-3 flex flex-col gap-1">
                  <span className="text-[#1a120a]/50 text-[10px]">OFFICIAL CURRENCY</span>
                  <strong className="text-[#1a120a] font-bold">{activeModalCountry.currency}</strong>
                </div>

                <div className="bg-[#fdf8f2] border border-[#1a120a]/10 rounded-xl p-3 flex flex-col gap-1 col-span-2 sm:col-span-1">
                  <span className="text-[#1a120a]/50 text-[10px]">SERVICE FEE</span>
                  <strong className="text-[#c4900f] font-bold">{activeModalCountry.price || "Free Entry"}</strong>
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-[#1a120a]/80 leading-relaxed italic bg-gray-50 p-4 rounded-xl border border-gray-200">
                {activeModalCountry.description}
              </p>

              {/* Documents Required Section */}
              <div className="flex flex-col gap-3">
                <h3 className="font-mono text-xs font-bold text-[#c4900f] uppercase tracking-wider flex items-center gap-2">
                  📑 DOCUMENTS REQUIRED FOR VISA
                </h3>

                {activeModalCountry.categories && activeModalCountry.categories.length > 0 ? (
                  <div className="flex flex-col gap-4">
                    {activeModalCountry.categories.map((cat, cIdx) => (
                      <div key={cIdx} className="bg-[#fdf8f2] border border-[#1a120a]/10 rounded-2xl p-4 flex flex-col gap-2.5">
                        <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider border-b border-orange-200 pb-1">
                          {cat.title}
                        </span>
                        <ul className="flex flex-col gap-2 text-xs text-[#1a120a]/85">
                          {cat.documents.map((doc, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="text-orange-500 font-bold shrink-0">✓</span>
                              <span className="leading-snug">{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  activeModalCountry.documents && (
                    <div className="bg-[#fdf8f2] border border-[#1a120a]/10 rounded-2xl p-4">
                      <ul className="flex flex-col gap-2 text-xs text-[#1a120a]/85">
                        {activeModalCountry.documents.map((doc, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-emerald-600 font-bold shrink-0">✓</span>
                            <span className="leading-snug">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>

              {/* Important Notes */}
              {activeModalCountry.importantNotes.length > 0 && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex flex-col gap-2 text-xs text-amber-900">
                  <strong className="font-mono text-amber-700 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                    ⚠️ IMPORTANT EMBASSY NOTES
                  </strong>
                  <ul className="list-disc pl-4 flex flex-col gap-1.5 text-[11.5px] leading-relaxed">
                    {activeModalCountry.importantNotes.map((note, idx) => (
                      <li key={idx}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Embassy Contact Info */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex flex-col gap-1 text-xs">
                <strong className="font-mono text-[#1a120a]">Embassy / High Commission Details</strong>
                <p className="text-[#1a120a]/80 font-semibold">{activeModalCountry.embassyInfo.name}</p>
                <p className="text-[#1a120a]/60 text-[11px]">{activeModalCountry.embassyInfo.address} • Phone: {activeModalCountry.embassyInfo.phone}</p>
              </div>
            </div>

            {/* Modal Bottom CTA Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`https://wa.me/918941881111?text=Hi%20Earth%20Travels,%20I%20want%20to%20apply%20for%20a%20Visa%20for%20${encodeURIComponent(activeModalCountry.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 rounded-xl font-sans text-xs font-bold text-[#1a120a] text-center transition-transform hover:scale-102 shadow-md flex items-center justify-center gap-2"
                style={{ background: "linear-gradient(135deg, #e8a820 0%, #c4900f 100%)" }}
              >
                <span>Apply for {activeModalCountry.name} Visa</span>
                {activeModalCountry.price && (
                  <span className="font-mono bg-[#1a120a]/15 px-2 py-0.5 rounded text-[11px]">
                    ({activeModalCountry.price})
                  </span>
                )}
              </a>
              
              <a
                href="tel:+918941088111"
                className="py-3.5 px-5 rounded-xl border border-gray-300 font-mono text-xs text-[#1a120a] font-bold text-center hover:bg-gray-100 transition-colors"
              >
                📞 Call Office
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
