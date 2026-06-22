import { Metadata } from "next";
import React from "react";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import ScreenshotPlaceholder from "../components/ScreenshotPlaceholder";
import Workflow from "../components/Workflow";
import FAQ from "../components/FAQ";
import Link from "next/link";
import { SITE_URL } from "../constants";

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
      title: "Retail Availability",
      description:
        "See which locations and channels currently stock the product.",
    },
    {
      title: "Wholesale Enquiries",
      description: "Contact our sales team for bulk orders and distribution.",
    },
    {
      title: "Partner Opportunities",
      description: "Listing, merchandising, and stocking support for retail partners.",
    },
  ];

  const workflow = [
    {
      title: "Check Coverage",
      subtitle: "Review the region or channel before placing an order",
    },
    {
      title: "Match Pack Size",
      subtitle: "Choose the pack format that fits your shelf or household",
    },
    {
      title: "Coordinate Supply",
      subtitle: "Plan delivery timing and reorder frequency",
    },
    {
      title: "Keep Shelves Fresh",
      subtitle: "Maintain stock rotation so the product stays current",
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
          <h2 className="text-xl font-semibold mb-3">Distribution Information</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-8 mb-3">
            Visha Chips is distributed through a combination of local retail partners, convenience stores, and direct wholesale inquiries. Availability varies by region, so the best way to confirm a specific location is to contact the team with your city, neighborhood, or store details.
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 leading-8">
            For businesses, this page is where distribution questions begin. For households, it is the easiest place to understand whether the product is already stocked nearby or whether a retailer request is needed.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Wholesale Inquiries</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-8">
            Wholesale buyers should include estimated order size, pack preference, and delivery region so the sales team can respond accurately. This is especially helpful for supermarkets, convenience chains, event organizers, and other buyers who need repeat supply.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Delivery Coverage</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-8">
            Delivery coverage depends on partner routes and inventory planning. If your location is not yet in active rotation, the team can still discuss stocking requests, seasonal supply, or one-time bulk purchase options.
          </p>
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

        <div className="mb-12 flex flex-wrap gap-4">
          <Link href="/contact" className="text-sky-600">
            Contact Sales →
          </Link>
          <Link href="/blog/retail-snack-distribution" className="text-sky-600">
            Read distribution guide →
          </Link>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: SITE_URL,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Locations",
                  item: `${SITE_URL}/locations`,
                },
              ],
            }),
          }}
        />

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
