import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Earth Travels",
  description: "Learn how Earth Travels collects, uses, and protects your personal and booking data.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#fdf8f2] text-[#1a120a] min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-black/50 mb-8 font-mono">
          Last Updated: July 16, 2026
        </p>

        <div className="prose prose-stone max-w-none space-y-8 font-sans text-black/80 leading-relaxed text-sm">
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#1a120a] border-b border-[#1a120a]/10 pb-2">
              1. Information We Collect
            </h2>
            <p>
              At Earth Travels, we are committed to protecting the privacy of our clients and website visitors. We collect personal data when you interact with our forms, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Contact Inquiry Form:</strong> Name, Email Address, Phone Number, and details of your inquiry.</li>
              <li><strong>Booking & Quote Forms:</strong> Name, Email, Phone Number, departure/destination preferences, travel dates, passenger counts, budget details, and custom travel requirements.</li>
              <li><strong>Billing & Payment Data:</strong> Invoicing, booking slips, and transaction logs. Payment transactions are handled directly by PCI-compliant merchant gateways.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#1a120a] border-b border-[#1a120a]/10 pb-2">
              2. How We Use Your Information
            </h2>
            <p>
              We use the collected information exclusively to facilitate custom travel planning and booking processes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To draft, price, and customize itineraries (Kashmir, cruises, rails, international tours, etc.).</li>
              <li>To contact you regarding quotes, booking confirmation details, flight updates, visa applications, or hotel coordination.</li>
              <li>To secure passenger details for travel insurance, ticket reservations, and local agent bookings.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#1a120a] border-b border-[#1a120a]/10 pb-2">
              3. Data Security & Storage
            </h2>
            <p>
              We implement industry-standard physical, electronic, and administrative safeguards to secure your personal information against unauthorized access, loss, or theft. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>SSL/TLS encryption for all data submitted via our online web forms.</li>
              <li>Restricted database access limited to authorized travel agents and coordinators handling your bookings.</li>
              <li>Encrypted storage for archived travel logs.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#1a120a] border-b border-[#1a120a]/10 pb-2">
              4. Data Sharing & Third-Party Vendors
            </h2>
            <p>
              We do not sell, rent, or lease your contact information to external marketing networks. We share your information with travel partners solely to fulfill your specific tour bookings:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Airlines, hotel partners, cruise lines, and railway operators.</li>
              <li>Local destination management guides, transport providers, and visa agents handling processing.</li>
              <li>Regulatory or governmental bodies when required for international custom compliance.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#1a120a] border-b border-[#1a120a]/10 pb-2">
              5. Your Choices & Consent
            </h2>
            <p>
              By submitting your details via our booking or inquiry forms, you consent to the processing of your personal information in accordance with this policy. You have the right to request a copy of your records or ask that we erase or correct your details by contacting our Mathura desk.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#1a120a] border-b border-[#1a120a]/10 pb-2">
              6. Contact Us
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact our support desk:
            </p>
            <div className="mt-4 p-4 bg-white border border-[#1a120a]/5 rounded-xl inline-block text-black/85">
              <p className="font-semibold text-black">Earth Travels Mathura</p>
              <p className="text-xs text-black/60">Krishna Nagar Market, Mathura, UP, India</p>
              <p className="text-xs text-black/60 mt-1">Email: <a href="mailto:info@earthtravelsindia.com" className="text-[#e8a820] hover:underline font-semibold">info@earthtravelsindia.com</a></p>
              <p className="text-xs text-black/60">Phone: 89418 81111 / 94108 57835</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
