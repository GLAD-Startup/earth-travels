import type { Metadata } from "next";
import CruisesClient from "./CruisesClient";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Luxury Cruise Packages — Mediterranean, Caribbean & Asia",
  description:
    "Book premium cruise holidays with Earth Travels India. Mediterranean, Caribbean, Southeast Asian and Arabian Gulf cruise routes. All-inclusive packages from Mathura.",
  alternates: {
    canonical: "/cruises",
  },
  openGraph: {
    title: "Luxury Cruise Packages | Earth Travels India",
    description: "Premium cruise bookings across global routes. All-inclusive packages with visa, transfers and port excursions.",
    url: "/cruises",
  },
};

export default function CruisesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Cruises", href: "/cruises" }]} />
      <ServiceSchema
        name="Cruise Booking Services"
        description="Premium cruise holiday packages on Cordelia, Costa, Royal Caribbean, and international cruise lines. Mediterranean, Caribbean, Southeast Asian, and Arabian Gulf routes. All-inclusive packages with transfers, port excursions, and visa assistance from Earth Travels India."
        url="/cruises"
        serviceType="Cruise Booking"
      />
      <CruisesClient />
    </>
  );
}

