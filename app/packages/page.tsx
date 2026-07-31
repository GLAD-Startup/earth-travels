import type { Metadata } from "next";
import PackagesClient from "./PackagesClient";
import { BreadcrumbSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Best Tour Packages — Kashmir, Maldives & SE Asia",
  description:
    "Browse premium, custom tour packages by Earth Travels. Honest pricing from ₹9,500. Kashmir, Maldives, Dubai, Bali, Thailand, Kerala and 40+ destinations. Fully curated from Mathura.",
  alternates: {
    canonical: "/packages",
  },
  openGraph: {
    title: "Best Tour Packages — Kashmir, Maldives & SE Asia | Earth Travels India",
    description:
      "50+ curated tour packages with honest pricing. Family, honeymoon, adventure & luxury trips. All-inclusive options with visa, flights, hotels & transfers.",
    url: "/packages",
  },
};

export default function PackagesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Packages", href: "/packages" }]} />
      <PackagesClient />
    </>
  );
}
