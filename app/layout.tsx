import React from "react";
import { Inter, Playfair_Display, DM_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import ClientShell from "@/components/ui/ClientShell";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  preload: true,
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://earthtravelsindia.in"),
  title: {
    default: "Earth Travels India — Crafting Journeys From Mathura to the World",
    template: "%s | Earth Travels India",
  },
  description:
    "Premium tour agency in Mathura, UP. 4.7★ rated. Kashmir, Maldives, Dubai, Europe & more. Custom packages, visa support. Call 89418 81111.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Earth Travels India",
    images: [
      {
        url: "/images/full logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Earth Travels India — Crafting Journeys the World Remembers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${dmMono.variable}`}
    >
      <body className="bg-[#fdf8f2] text-[#1a120a] font-sans antialiased flex flex-col min-h-screen">
        <OrganizationSchema />
        <WebSiteSchema />
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
