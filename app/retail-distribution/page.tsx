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
  title: "Retail & Distribution — Visha Chips",
  description:
    "Information for retailers and distributors interested in stocking Visha Chips, wholesale options, and merchandising support.",
  alternates: { canonical: `${SITE_URL}/retail-distribution` },
  openGraph: {
    title: "Retail & Distribution — Visha Chips",
    description:
      "Information for retailers and distributors interested in stocking Visha Chips, wholesale options, and merchandising support.",
    url: `${SITE_URL}/retail-distribution`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail & Distribution — Visha Chips",
    description:
      "Information for retailers and distributors interested in stocking Visha Chips, wholesale options, and merchandising support.",
  },
};

export default function BusinessManagementPage() {
  const features = [
    {
      title: "Multi-location Dashboard",
      description: "Manage all locations from a single control panel.",
    },
    {
      title: "Customer Profiles",
      description:
        "Track customer contacts, communication history, and preferences.",
    },
    {
      title: "Business Info Sync",
      description:
        "Update name, address, phone, hours and categories across listings.",
    },
    {
      title: "Review Monitoring",
      description: "Monitor and respond to reviews from a unified inbox.",
    },
    {
      title: "Wholesale Pricing",
      description: "Tiered pricing and minimum order quantities for retailers.",
    },
    {
      title: "Merchandising Support",
      description:
        "Shelf placement and point-of-sale materials to help sell more packs.",
    },
    {
      title: "Delivery & Logistics",
      description: "Assistance with shipping, lead times, and replenishment.",
    },
    {
      title: "Retail Partnerships",
      description: "Co-marketing and promotional support for retail partners.",
    },
  ];

  const workflow = [
    {
      title: "Connect Google Account",
      subtitle: "Authorize GBP access via OAuth",
    },
    { title: "Select Locations", subtitle: "Choose which locations to sync" },
    {
      title: "Manage Profiles",
      subtitle: "Edit business details and publish updates",
    },
    {
      title: "Monitor Reviews",
      subtitle: "View and respond to customer feedback",
    },
    {
      title: "Contact Sales",
      subtitle: "Reach out for pricing and distribution options",
    },
    {
      title: "Place Wholesale Order",
      subtitle: "Submit purchase order and schedule delivery",
    },
    {
      title: "Receive & Stock",
      subtitle: "Receive shipments and stock shelves",
    },
    {
      title: "Launch Promotion",
      subtitle: "Coordinate marketing or in-store promotions",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-6">
      <div className="max-w-7xl mx-auto">
        <Hero
          title={"Retail & Distribution"}
          subtitle={
            "Information for retailers and distributors who want to stock Visha Chips."
          }
          ctaLabel="Contact Sales"
          ctaHref="/contact"
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
          <h2 className="text-xl font-semibold mb-3">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ScreenshotPlaceholder label="Dashboard — Locations" />
            <ScreenshotPlaceholder label="Profile Editor" />
            <ScreenshotPlaceholder label="Review Inbox" />
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Operational Workflow</h2>
          <Workflow steps={workflow} />
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Overview for Retailers</h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Visha Chips supports retailers and distributors with wholesale
            pricing, merchandising materials, and reliable delivery. Our team
            helps partners with product onboarding, promotional planning, and
            shelf placement guidance to maximize sales.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">FAQ</h2>
          <FAQ
            items={[
              {
                q: "Can I manage multiple locations?",
                a: "Yes — add and group multiple locations and manage them from a single dashboard.",
              },
              {
                q: "How does Google sync work?",
                a: "We use OAuth to connect to your Google account and synchronize permitted fields via the Google Business Profile API.",
              },
            ]}
          />
        </section>

        <div className="mb-12">
          <Link href="/locations" className="text-sky-600">
            See distribution & retailer details →
          </Link>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Retail & Distribution — Visha Chips",
              description:
                "Information for retailers and distributors interested in stocking Visha Chips.",
              url: `${SITE_URL}/retail-distribution`,
            }),
          }}
        />
      </div>
    </div>
  );
}
