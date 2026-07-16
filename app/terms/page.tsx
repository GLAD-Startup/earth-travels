import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions — Earth Travels",
  description: "Review the booking, cancellation, and operational terms of Earth Travels.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#fdf8f2] text-[#1a120a] min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
          Terms & Conditions
        </h1>
        <p className="text-sm text-black/50 mb-8 font-mono">
          Last Updated: July 16, 2026
        </p>

        <div className="prose prose-stone max-w-none space-y-8 font-sans text-black/80 leading-relaxed text-sm">
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#1a120a] border-b border-[#1a120a]/10 pb-2">
              1. Scope of Services
            </h2>
            <p>
              Earth Travels operates as a professional travel agency based in Mathura, UP, providing custom tour planning, flight tickets, cruise reservations, railway booking, visa assistance, and hotel coordination.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#1a120a] border-b border-[#1a120a]/10 pb-2">
              2. Booking & Inquiries
            </h2>
            <p>
              All inquiry details submitted via our contact, booking, or quote forms must be accurate and current.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Submitting an inquiry does not constitute a confirmed booking.</li>
              <li>Bookings are only confirmed upon payment of the designated advance deposit and receipt of our official booking voucher.</li>
              <li>Names provided must match the spelling in passengers&apos; official government-issued ID/passports. Earth Travels is not liable for name correction fees or ticket cancellations resulting from incorrect spelling details provided by the client.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#1a120a] border-b border-[#1a120a]/10 pb-2">
              3. Payments, Pricing & Currencies
            </h2>
            <p>
              All tour prices quoted are subject to change based on availability, currency fluctuation, or fuel surcharges from third-party airline/hotel providers until a booking deposit is paid.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Quotes are provided itemized or package-inclusive. Payment schedules (advance deposits and balance payments) will be specified on your itinerary sheet.</li>
              <li>Failure to submit balance payments by the designated due dates may result in the automatic cancellation of hotel and flight segments, with deposit forfeiture.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#1a120a] border-b border-[#1a120a]/10 pb-2">
              4. Cancellations & Refund Policies
            </h2>
            <p>
              In the event of cancellation, refunds are computed based on the refund policy of third-party vendors (airlines, cruises, hotels) and Earth Travels&apos; service processing fee:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Non-refundable bookings (such as promo flight tickets or peak-season resort reservations) cannot be refunded under any circumstances.</li>
              <li>Earth Travels charges a flat processing fee per person for handling cancellations.</li>
              <li>Refund processing times vary depending on the hotel or airline policies, usually ranging between 15 and 45 business days from confirmation.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#1a120a] border-b border-[#1a120a]/10 pb-2">
              5. Limitation of Liability
            </h2>
            <p>
              Earth Travels acts solely as an intermediary broker between passengers and transport/accommodation operators:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>We are not liable for flight delays, missed connections, loss or theft of baggage, hotel service levels, or cancellations caused by natural disasters, strikes, or government mandates.</li>
              <li>Clients are strongly advised to purchase comprehensive international travel insurance covering medical emergencies, trip delays, and baggage loss.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#1a120a] border-b border-[#1a120a]/10 pb-2">
              6. Governing Law
            </h2>
            <p>
              Any disputes, claims, or legal proceedings arising from bookings or services coordinated by Earth Travels shall be subject exclusively to the jurisdiction of the courts located in Mathura, Uttar Pradesh, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
