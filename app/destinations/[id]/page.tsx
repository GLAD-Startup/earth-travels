import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DESTINATIONS } from "@/lib/data/destinations";
import { PACKAGES } from "@/lib/data/packages";
import { Breadcrumbs } from "@/components/ui";
import { BreadcrumbSchema, JsonLd } from "@/components/seo";

interface DestinationPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return DESTINATIONS.map((dest) => ({
    id: dest.id,
  }));
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const { id } = await params;
  const dest = DESTINATIONS.find((d) => d.id === id);

  if (!dest) {
    return {
      title: "Destination Not Found",
    };
  }

  const title = `${dest.name} Tour Packages — Best Rates & Itineraries`;
  const description = `Explore custom ${dest.name} tour packages by Earth Travels Mathura. ${dest.tagline}. ${dest.season}. Starting from ₹${dest.startingPrice.toLocaleString("en-IN")}/person. Handcrafted itineraries, flights, hotels & visa support included.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/destinations/${dest.id}`,
    },
    openGraph: {
      title: `${title} | Earth Travels India`,
      description,
      url: `/destinations/${dest.id}`,
      images: [{ url: dest.image, width: 1200, height: 630, alt: `${dest.name} Tour` }],
    },
  };
}

export default async function DestinationDetailPage({ params }: DestinationPageProps) {
  const { id } = await params;
  const dest = DESTINATIONS.find((d) => d.id === id);

  if (!dest) {
    notFound();
  }

  const matchingPackages = PACKAGES.filter((p) => p.destinationId.toLowerCase() === dest.id.toLowerCase() || p.destination.toLowerCase() === dest.name.toLowerCase());

  // TouristDestination Schema
  const destinationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "@id": `https://earthtravelsindia.in/destinations/${dest.id}/#destination`,
    name: dest.name,
    description: dest.tagline,
    image: dest.image.startsWith("/") ? `https://earthtravelsindia.in${dest.image}` : dest.image,
    touristType: ["Family", "Honeymoon", "Adventure", "Group"],
    includesAttraction: [
      {
        "@type": "TouristAttraction",
        name: `${dest.name} Sightseeing & Highlights`,
      },
    ],
  };

  return (
    <div className="bg-background min-h-screen text-charcoal">
      <BreadcrumbSchema
        items={[
          { name: "Destinations", href: "/destinations" },
          { name: dest.name, href: `/destinations/${dest.id}` },
        ]}
      />
      <JsonLd data={destinationSchema} />

      <Breadcrumbs
        items={[
          { name: "Destinations", href: "/destinations" },
          { name: dest.name, href: `/destinations/${dest.id}` },
        ]}
      />

      {/* Hero Header */}
      <section className="relative h-[45vh] min-h-[350px] w-full flex items-center justify-center text-center overflow-hidden">
        <img
          src={dest.image}
          alt={`${dest.name} Tour Package`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.75) 100%)" }}
        />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-white">
          <span className="font-mono text-xs text-[#D4A017] uppercase tracking-[0.25em] block mb-2 font-bold">
            {dest.region.toUpperCase()} · {dest.season}
          </span>
          <h1 className="font-display text-4xl md:text-[64px] font-bold tracking-tight mb-3">
            {dest.name} Tour Packages
          </h1>
          <p className="font-sans text-base md:text-lg text-white/80 max-w-xl mx-auto italic">
            &ldquo;{dest.tagline}&rdquo;
          </p>
          <div className="mt-6 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full text-sm">
            <span>Starting from <strong className="text-[#D4A017] font-mono text-base">₹{dest.startingPrice.toLocaleString("en-IN")}</strong> / person</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-16">
        
        {/* GEO/AEO Citability Section — Answer Blocks */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-surface border border-charcoal/10 rounded-2xl flex flex-col gap-3">
            <h2 className="font-display text-xl font-bold text-charcoal">
              When is the best time to visit {dest.name}?
            </h2>
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
              The optimal travel period for {dest.name} is during <strong>{dest.season.replace("BEST: ", "")}</strong>. During these months, weather conditions are ideal for sightseeing, outdoor excursions, and family activities. Earth Travels provides seasonal guidance and customized packing advice for travelers departing from Mathura and North India.
            </p>
          </div>

          <div className="p-8 bg-surface border border-charcoal/10 rounded-2xl flex flex-col gap-3">
            <h2 className="font-display text-xl font-bold text-charcoal">
              How much does a {dest.name} trip cost from India?
            </h2>
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
              A tailor-made {dest.name} holiday package starts at <strong>₹{dest.startingPrice.toLocaleString("en-IN")} per person</strong>. Total trip costs vary depending on hotel category (3-star to 5-star luxury), meal plan (CP/MAP), flight inclusion, and private transfer preferences. All Earth Travels packages feature transparent itemized pricing with zero hidden charges.
            </p>
          </div>

          <div className="p-8 bg-surface border border-charcoal/10 rounded-2xl flex flex-col gap-3">
            <h2 className="font-display text-xl font-bold text-charcoal">
              Is {dest.name} suitable for family and honeymoon trips?
            </h2>
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
              Yes, {dest.name} is one of our top-rated destinations for both family holidays and romantic honeymoons. Earth Travels ensures complete travel documentation, visa guidance, child-friendly amenities, and vegetarian meal assistance for local Indian families.
            </p>
          </div>

          <div className="p-8 bg-surface border border-charcoal/10 rounded-2xl flex flex-col gap-3">
            <h2 className="font-display text-xl font-bold text-charcoal">
              What is included in Earth Travels {dest.name} packages?
            </h2>
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
              Our comprehensive packages include handpicked hotel accommodations, daily breakfast/meals, airport transfers, curated sightseeing tours, and dedicated 24/7 WhatsApp concierge support throughout your journey. Flight bookings and visa processing can be bundled seamlessly.
            </p>
          </div>
        </section>

        {/* Packages List */}
        <section className="flex flex-col gap-8">
          <div className="border-l-2 border-[#D4A017] pl-4">
            <span className="font-mono text-xs text-charcoal/40 uppercase tracking-widest block mb-1">
              Curated Expeditions
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal">
              Available {dest.name} Packages ({matchingPackages.length})
            </h2>
          </div>

          {matchingPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {matchingPackages.map((pkg) => (
                <div key={pkg.id} className="rounded-2xl border border-charcoal/10 bg-surface overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 bg-[#D4A017] text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase">
                      {pkg.badge}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
                    <div>
                      <span className="font-mono text-xs text-[#D4A017] font-bold block mb-1">
                        {pkg.duration.nights} Nights / {pkg.duration.days} Days
                      </span>
                      <h3 className="font-display text-lg font-bold text-charcoal leading-snug">
                        {pkg.name}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-charcoal/5">
                      {pkg.highlights.map((h, i) => (
                        <span key={i} className="text-[10px] font-sans bg-background px-2.5 py-1 rounded-md text-charcoal/70">
                          ✓ {h}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-charcoal/10 mt-auto">
                      <div>
                        <span className="text-[10px] font-mono text-charcoal/40 block">PER PERSON</span>
                        <span className="font-mono text-lg font-bold text-charcoal">₹{pkg.pricePerPerson.toLocaleString("en-IN")}</span>
                      </div>
                      <Link
                        href={`/itinerary/${pkg.id}`}
                        className="btn-gold text-xs px-4 py-2 uppercase tracking-wider font-bold"
                      >
                        View Itinerary →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center border border-dashed border-charcoal/15 rounded-2xl flex flex-col items-center gap-4">
              <p className="font-sans text-charcoal/60 text-sm">
                We craft custom itineraries for {dest.name} tailored to your group size, budget, and travel dates.
              </p>
              <Link href="/contact" className="btn-gold text-xs px-6 py-3 uppercase tracking-wider font-bold">
                Request Custom {dest.name} Plan
              </Link>
            </div>
          )}
        </section>

        {/* Closing CTA */}
        <section className="rounded-3xl bg-[#1a120a] text-white p-10 md:p-16 text-center flex flex-col items-center gap-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Planning a trip to {dest.name}?
          </h2>
          <p className="font-sans text-white/70 max-w-xl mx-auto text-sm md:text-base">
            Speak directly with our travel planners at Earth Travels Mathura. We provide customized itineraries, transparent pricing, and complete documentation support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:8941881111" className="px-8 py-3.5 rounded-full bg-[#D4A017] text-[#1a120a] font-sans font-bold text-xs uppercase tracking-wider hover:bg-[#F0C040] transition-colors">
              Call 89418 81111
            </a>
            <a href="https://wa.me/919410857835" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full border border-white/20 text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors">
              WhatsApp Support
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
