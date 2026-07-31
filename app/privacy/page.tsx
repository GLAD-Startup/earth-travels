import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";
import { BreadcrumbSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Earth Travels India privacy policy. How we collect, use, and protect your personal information when you use our travel planning services.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Privacy Policy", href: "/privacy" }]} />
      <PrivacyClient />
    </>
  );
}
