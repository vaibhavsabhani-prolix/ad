import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AdsterraAd from "../AdsterraAdProps";
import GoogleAd from "../GoogleAd";

const SITE_URL = "https://www.codexd.in";

export const metadata: Metadata = {
  title: "Visha Chips Products — Potato Chips Packaging Sizes",
  description:
    "Explore our complete product lineup. Visha Chips is available in Snack Pack (30g), Sharing Pack (150g), Party Box (500g), and bulk Wholesale Cases.",
  alternates: {
    canonical: `${SITE_URL}/products`,
  },
  openGraph: {
    title: "Visha Chips Products — Potato Chips Packaging Sizes",
    description:
      "Find the perfect pack size for any occasion. Available in individual 30g snack packs up to 5kg bulk cases for retail.",
    url: `${SITE_URL}/products`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/products/lineup.png`,
        width: 1000,
        height: 1000,
        alt: "Visha Chips Product Lineup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visha Chips Products — Potato Chips Packaging Sizes",
    description: "Find your perfect pack size. From individual bags to bulk wholesale.",
    images: [`${SITE_URL}/products/lineup.png`],
  },
};

type ProductSize = {
  id: string;
  name: string;
  weight: string;
  description: string;
  idealFor: string;
  keyHighlight: string;
  cardColor: string;
  buttonText: string;
  buttonHref: string;
};

const PRODUCT_SIZES: ProductSize[] = [
  {
    id: "snack",
    name: "Snack Pack",
    weight: "30g (Single Serve)",
    description:
      "Perfect for lunchboxes, quick afternoon pick-me-ups, or on-the-go snacking. Individually sealed to guarantee peak freshness and crunch.",
    idealFor: "Office snacking, kids' lunches, traveling, quick treats.",
    keyHighlight: "Low calorie, portion-controlled.",
    cardColor: "from-amber-500/5 to-yellow-500/5 border-amber-200/60 dark:border-amber-900/30",
    buttonText: "Where to Buy",
    buttonHref: "/locations",
  },
  {
    id: "sharing",
    name: "Sharing Pack",
    weight: "150g (Family Size)",
    description:
      "Our most popular size! Designed for sharing with friends and family. Features a resealable seal on premium bags to keep chips crunchy between sessions.",
    idealFor: "Movie nights, small picnics, family dinners, gaming sessions.",
    keyHighlight: "Resealable lock, best value.",
    cardColor: "from-orange-500/5 to-amber-500/5 border-orange-200/60 dark:border-orange-900/30",
    buttonText: "Where to Buy",
    buttonHref: "/locations",
  },
  {
    id: "party",
    name: "Party Box",
    weight: "500g (Mega Size)",
    description:
      "A massive carton packed with our signature chips. Made to feed a crowd. Ideal for self-serve bowls and snack tables.",
    idealFor: "Birthday parties, game day, barbecues, holiday gatherings.",
    keyHighlight: "Eco-friendly recyclable box, crowd pleaser.",
    cardColor: "from-rose-500/5 to-red-500/5 border-rose-200/60 dark:border-rose-900/30",
    buttonText: "Find Retailers",
    buttonHref: "/locations",
  },
  {
    id: "wholesale",
    name: "Wholesale Case",
    weight: "5kg (Bulk Supply)",
    description:
      "Designed for retailers, food stalls, event organizers, or die-hard fans. Contains individual cases packed securely to prevent crushing during transit.",
    idealFor: "Supermarkets, convenience stores, caterers, corporate events.",
    keyHighlight: "Tiered pricing, direct distributor shipping.",
    cardColor: "from-red-600/5 to-orange-600/5 border-red-200/60 dark:border-red-900/30",
    buttonText: "Inquire Wholesale",
    buttonHref: "/retail-distribution",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans pb-16">
      {/* JSON-LD schemas */}
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
                name: "Products",
                item: `${SITE_URL}/products`,
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
            "@type": "ItemList",
            name: "Visha Chips Products",
            description: "The complete range of package sizes and retail solutions for Visha Chips.",
            itemListElement: PRODUCT_SIZES.map((prod, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Product",
                name: `Visha Chips ${prod.name} (${prod.weight})`,
                image: `${SITE_URL}/products/lineup.png`,
                description: prod.description,
                offers: {
                  "@type": "AggregateOffer",
                  priceCurrency: "INR",
                  itemCondition: "https://schema.org/NewCondition",
                },
                brand: {
                  "@type": "Brand",
                  name: "Visha Chips",
                },
              },
            })),
          }),
        }}
      />

      {/* Page Body Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Breadcrumb Navigation Bar */}
        <nav className="flex mb-6 text-sm text-zinc-500 dark:text-zinc-400" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-zinc-400">/</span>
                <span className="text-zinc-800 dark:text-zinc-100 font-medium">Products</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Top Google Ad */}
        <div className="mb-8 flex justify-center w-full">
          <GoogleAd adSlot="9716108451" />
        </div>

        {/* Header Hero Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 bg-clip-text text-transparent mb-4">
            Visha Chips Product Range
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            From quick individual snacks to massive crowd-feeders and wholesale distribution cases — discover the ideal Visha Chips pack for your needs.
          </p>
        </div>

        {/* Hero Lineup Image Showcasing packaging */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 mb-16">
          <Image
            src="/products/lineup.png"
            alt="Visha Chips packaging lineup"
            fill
            className="object-cover"
            priority
          />
          {/* Glass Overlay text */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 sm:p-10 flex flex-col justify-end text-white">
            <span className="text-xs uppercase tracking-widest font-bold text-orange-400 mb-2">
              Premium Freshness Guarantee
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold max-w-2xl">
              Specially engineered bags to lock in the crunch.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mt-2">
              Our advanced multi-layer packaging shields our potato chips from moisture and UV light, ensuring every chip cracks with perfection.
            </p>
          </div>
        </div>

        {/* Grid of Product Pack Sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {PRODUCT_SIZES.map((prod) => (
            <div
              key={prod.id}
              className={`flex flex-col justify-between bg-white dark:bg-zinc-900 border rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br ${prod.cardColor}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h3 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">{prod.name}</h3>
                  <span className="text-sm font-semibold bg-orange-100 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full border border-orange-200/55 dark:border-orange-850/35">
                    {prod.weight}
                  </span>
                </div>
                <p className="text-sm text-zinc-650 dark:text-zinc-355 leading-relaxed mb-4">
                  {prod.description}
                </p>

                <div className="space-y-2 mb-6 border-t border-zinc-200/60 dark:border-zinc-850/60 pt-4 text-xs sm:text-sm">
                  <p>
                    <span className="font-bold text-zinc-700 dark:text-zinc-300">Ideal for: </span>
                    <span className="text-zinc-600 dark:text-zinc-400">{prod.idealFor}</span>
                  </p>
                  <p>
                    <span className="font-bold text-zinc-700 dark:text-zinc-300">Highlight: </span>
                    <span className="text-zinc-600 dark:text-zinc-400">{prod.keyHighlight}</span>
                  </p>
                </div>
              </div>

              <Link
                href={prod.buttonHref}
                className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-orange-600 hover:text-white dark:text-orange-400 bg-orange-50 hover:bg-orange-600 dark:bg-orange-950/20 dark:hover:bg-orange-600 border border-orange-200 dark:border-orange-900/40 rounded-xl transition-all text-center"
              >
                {prod.buttonText}
              </Link>
            </div>
          ))}
        </div>

        {/* Middle Ad */}
        <div className="my-10 flex justify-center w-full">
          <GoogleAd adSlot="9716108451" />
        </div>

        {/* CTA Section connecting to Flavors */}
        <section className="bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-3xl p-8 sm:p-12 text-center border border-orange-200/40 dark:border-orange-900/20 shadow-sm mb-16">
          <h2 className="text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 mb-3">
            Available in Four Mind-Blowing Flavors
          </h2>
          <p className="text-zinc-650 dark:text-zinc-350 max-w-xl mx-auto mb-6">
            All our packaging sizes are available across our signature flavor portfolio: Classic Salted, Spicy Masala, Tangy Tomato, and Spicy Chili.
          </p>
          <Link
            href="/flavors"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-xl transition-colors shadow-md"
          >
            Explore Flavor Notes
          </Link>
        </section>

        {/* Adsterra Native Ad Container */}
        <div className="mt-8 flex justify-center w-full">
          <AdsterraAd
            type="native"
            invokeUrl="https://pl29719922.effectivecpmnetwork.com/0acbbd07942e79258bf852d7d92fc5b8/invoke.js"
            containerId="container-products"
          />
        </div>
      </div>
    </div>
  );
}
