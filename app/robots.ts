import type { MetadataRoute } from "next";

const PRODUCTION_DOMAIN = "https://earthtravelsindia.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // AI search crawlers — explicitly allowed for AI search visibility
      // (Google AI Overviews, ChatGPT search, Perplexity, Claude)
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Training-only crawlers — blocked (no search benefit)
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",
        disallow: "/",
      },
    ],
    sitemap: `${PRODUCTION_DOMAIN}/sitemap.xml`,
  };
}
