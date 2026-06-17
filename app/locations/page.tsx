import { Metadata } from "next";
import React from "react";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import ScreenshotPlaceholder from "../components/ScreenshotPlaceholder";
import Workflow from "../components/Workflow";
import FAQ from "../components/FAQ";
import Link from "next/link";

const SITE_URL = "https://www.codexd.in";

export const metadata: Metadata = {
  title: "Locations — Visha Chips",
  description:
    "Find stores and distributors that carry Visha Chips across regions.",
  alternates: { canonical: `${SITE_URL}/locations` },
  openGraph: {
    title: "Locations — Visha Chips",
    description: "Find stores and distributors that carry Visha Chips.",
    url: `${SITE_URL}/locations`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Locations — Visha Chips",
    description: "Find stores and distributors that carry Visha Chips.",
  },
};

export default function GBPPage() {
  const features = [
    {
      title: "Find Nearby Stores",
      description: "Search retailers and stockists that carry Visha Chips.",
    },
    {
      title: "Online Ordering",
      description:
        "Links to partner retailers and online shops where available.",
    },
    {
      title: "Wholesale Enquiries",
      description: "Contact our sales team for bulk orders and distribution.",
    },
    {
      title: "Store Support",
      description: "Listing and merchandising help for retail partners.",
    },
  ];

  const workflow = [
    {
      title: "Connect Google Account",
      subtitle: "User authenticates via OAuth and grants access",
    },
    {
      title: "Select Business Location",
      subtitle: "Pick locations to import or sync",
    },
    {
      title: "Manage Profile",
      subtitle: "Edit details and push updates to Google",
    },
    {
      title: "Sync Changes",
      subtitle: "Confirm changes and review sync status",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-6">
      <div className="max-w-7xl mx-auto">
        <Hero
          title={"Store Locations"}
          subtitle={
            "Find retailers and distributors that stock Visha Chips near you."
          }
          ctaLabel="Find Stores"
          ctaHref="/locations"
        />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {features.map((f) => (
            <FeatureCard
              key={f.title}
              title={f.title}
              description={f.description}
            />
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">How to find us</h2>
          <ol className="list-decimal list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>Search by city or postal code using the store locator.</li>
            <li>Check product availability with listed retailers.</li>
            <li>Contact our sales team for wholesale or stocking inquiries.</li>
          </ol>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Where to buy</h2>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1">
            <li>Local supermarkets and convenience stores</li>
            <li>Selected online retailers</li>
            <li>Direct wholesale orders via sales@codexd.in</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Workflow</h2>
          <Workflow steps={workflow} />
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Photos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ScreenshotPlaceholder label="Store Front Display" />
            <ScreenshotPlaceholder label="Shelf Merchandising" />
            <ScreenshotPlaceholder label="Product Packaging" />
            <ScreenshotPlaceholder label="Wholesale Pallet" />
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Customer Feedback</h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            We value customer feedback. Retailers and customers can share
            product feedback and reviews to help improve flavor offerings and
            packaging.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">FAQ</h2>
          <FAQ
            items={[
              {
                q: "How can I request a retail listing?",
                a: "Email sales@codexd.in with your store details and expected order volume.",
              },
              {
                q: "Do you offer wholesale pricing?",
                a: "Yes. Contact sales@codexd.in for pricing and minimum order quantities.",
              },
            ]}
          />
        </section>

        <div className="mb-12">
          <Link href="/contact" className="text-sky-600">
            Contact Sales →
          </Link>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Visha Chips Locations",
              description:
                "Find stores and distributors that carry Visha Chips.",
              url: `${SITE_URL}/locations`,
            }),
          }}
        />
      </div>
    </div>
  );
}
