import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { PROVIDERS, SITE_URL, TITLE, DESCRIPTION } from "../constants";

const KEYWORDS = Array.from(new Set(PROVIDERS.flatMap((p) => p.keywords || [])));

export const metadata: Metadata = {
  title: `Providers | ${TITLE}`,
  description: `Browse supported ad providers and configuration guidance for ${TITLE}.`,
  keywords: KEYWORDS,
  alternates: {
    canonical: `${SITE_URL}/provider`,
  },
  openGraph: {
    title: `Providers | ${TITLE}`,
    description: `Browse supported ad providers and configuration guidance for ${TITLE}.`,
    url: `${SITE_URL}/provider`,
    siteName: TITLE,
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Providers | ${TITLE}`,
    description: `Browse supported ad providers and configuration guidance for ${TITLE}.`,
    images: [`${SITE_URL}/logo.png`],
  },
};

export default function ProvidersIndex() {
  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Providers",
    url: `${SITE_URL}/provider`,
    description: `List of ad providers supported by ${TITLE}.`,
    isPartOf: {
      "@type": "WebSite",
      name: TITLE,
      url: SITE_URL,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Providers", item: `${SITE_URL}/provider` },
    ],
  };

  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <h1 className="text-2xl font-bold mb-4">Providers</h1>

      <p className="mb-4 text-zinc-700 dark:text-zinc-300">
        Browse supported ad providers and view configuration guidance.
      </p>

      <ul className="grid gap-4 sm:grid-cols-2">
        {PROVIDERS.map((p) => (
          <li key={p.slug} className="p-4 border rounded">
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">
              {p.description}
            </p>
            <Link
              href={`/provider/${p.slug}`}
              className="inline-block text-sm text-white bg-blue-600 px-3 py-1 rounded"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
