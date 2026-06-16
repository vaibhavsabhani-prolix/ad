"use server";
import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  SITE_URL,
  TITLE,
  DESCRIPTION,
  PROVIDERS,
  Provider,
} from "../../constants";

type Props = { params: { slug: string } };

async function fetchProvider(slug: string): Promise<Provider | null> {
  // In production this would call a database or API. Here we use the local list.
  const p = PROVIDERS.find((x) => x.slug === slug);
  return p ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const { slug } = await params;
  const provider = await fetchProvider(slug as string);

  if (!provider) {
    return {
      title: `${TITLE}`,
      description: DESCRIPTION,
      alternates: { canonical: SITE_URL },
    };
  }

  const canonicalUrl = `${SITE_URL}/provider/${provider.slug}`;
  const title = `${provider.name} | ${TITLE}`;
  const description =
    provider.description ||
    `Manage ${provider.name} configuration and optimization.`;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    keywords: provider.keywords,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: `${SITE_URL}${provider.image}`,
          alt: provider.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${provider.image}`],
    },
  };
}

export async function generateStaticParams() {
  return PROVIDERS.map((p) => ({ slug: p.slug }));
}

export default async function ProviderPage({ params }: { params: any }) {
  const { slug } = await params;
  const provider = await fetchProvider(slug as string);
  if (!provider) return notFound();

  const canonicalUrl = `${SITE_URL}/provider/${provider.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: provider.name,
    url: canonicalUrl,
    description: provider.description,
  };

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: provider.name,
    url: canonicalUrl,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Providers",
        item: `${SITE_URL}/provider`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: provider.name,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen p-6 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />

      <article>
        <h1 className="text-2xl font-bold mb-2">{provider.name}</h1>
        <Link
          href="/provider"
          className="inline-block text-sm text-blue-600 mb-4"
        >
          ← Back to Providers
        </Link>
        <p className="mb-4 text-zinc-700 dark:text-zinc-300">
          {provider.description}
        </p>
        <img
          src={provider.image}
          alt={provider.name}
          className="mb-4 max-w-full h-auto"
        />
        <section>
          <h2 className="text-lg font-semibold">Overview</h2>
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">
            This provider can be configured and optimized via Ad Provider
            Manager.
          </p>
        </section>
      </article>
    </main>
  );
}
