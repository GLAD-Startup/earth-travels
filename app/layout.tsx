import React from "react";
import { Inter, Playfair_Display, DM_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import ClientShell from "@/components/ui/ClientShell";

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
  title: "Earth Travels — Crafting Journeys From Mathura to the World",
  description:
    "Premium tour agency in Mathura, UP. 4.7★ rated. Kashmir, Maldives, Dubai, Europe & more. 89418 81111.",
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
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
