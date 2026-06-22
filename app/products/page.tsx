import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AdsterraAd from "../AdsterraAdProps";
import GoogleAd from "../GoogleAd";
import { SITE_URL } from "../constants";

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
    description:
      "Find your perfect pack size. From individual bags to bulk wholesale.",
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
    cardColor:
      "from-amber-500/5 to-yellow-500/5 border-amber-200/60 dark:border-amber-900/30",
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
    cardColor:
      "from-orange-500/5 to-amber-500/5 border-orange-200/60 dark:border-orange-900/30",
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
    cardColor:
      "from-rose-500/5 to-red-500/5 border-rose-200/60 dark:border-rose-900/30",
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
    cardColor:
      "from-red-600/5 to-orange-600/5 border-red-200/60 dark:border-red-900/30",
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
            description:
              "The complete range of package sizes and retail solutions for Visha Chips.",
            itemListElement: PRODUCT_SIZES.map((prod, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Product",
                name: `Visha Chips ${prod.name} (${prod.weight})`,
                image: `${SITE_URL}/products/lineup.png`,
                description: prod.description,
                offers: {
                  "@type": "Offer",
                  priceCurrency: "INR",
                  price: "20",
                  availability: "https://schema.org/InStock",
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
        <nav
          className="flex mb-6 text-sm text-zinc-500 dark:text-zinc-400"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-zinc-400">/</span>
                <span className="text-zinc-800 dark:text-zinc-100 font-medium">
                  Products
                </span>
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
          <h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent mb-4"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #eab308, #f97316, #dc2626)",
            }}
          >
            Visha Chips Product Range
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            From quick individual snacks to massive crowd-feeders and wholesale
            distribution cases — discover the ideal Visha Chips pack for your
            needs.
          </p>
        </div>

        {/* Hero Lineup Image Showcasing packaging */}
        <div
          className="relative w-full rounded-3xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 mb-16"
          style={{ height: "clamp(300px, 35vw, 500px)" }}
        >
          <Image
            src="/products/lineup.png"
            alt="Visha Chips packaging lineup"
            fill
            className="object-cover"
            priority
          />
          {/* Glass Overlay text */}
          <div
            className="absolute inset-x-0 bottom-0 p-6 sm:p-10 flex flex-col justify-end text-white"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.4), transparent)",
            }}
          >
            <span className="text-xs uppercase tracking-widest font-bold text-orange-400 mb-2">
              Premium Freshness Guarantee
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold max-w-2xl">
              Specially engineered bags to lock in the crunch.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mt-2">
              Our advanced multi-layer packaging shields our potato chips from
              moisture and UV light, ensuring every chip cracks with perfection.
            </p>
          </div>
        </div>

        {/* Grid of Product Pack Sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {PRODUCT_SIZES.map((prod) => (
            <div
              key={prod.id}
              className={`flex flex-col justify-between bg-white dark:bg-zinc-900 border rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 ${prod.cardColor}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h3 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">
                    {prod.name}
                  </h3>
                  <span className="text-sm font-semibold bg-orange-100 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full border border-orange-200/55 dark:border-orange-850/35">
                    {prod.weight}
                  </span>
                </div>
                <p className="text-sm text-zinc-650 dark:text-zinc-355 leading-relaxed mb-4">
                  {prod.description}
                </p>

                <div className="space-y-2 mb-6 border-t border-zinc-200/60 dark:border-zinc-850/60 pt-4 text-xs sm:text-sm">
                  <p>
                    <span className="font-bold text-zinc-700 dark:text-zinc-300">
                      Ideal for:{" "}
                    </span>
                    <span className="text-zinc-600 dark:text-zinc-400">
                      {prod.idealFor}
                    </span>
                  </p>
                  <p>
                    <span className="font-bold text-zinc-700 dark:text-zinc-300">
                      Highlight:{" "}
                    </span>
                    <span className="text-zinc-600 dark:text-zinc-400">
                      {prod.keyHighlight}
                    </span>
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

        <section className="mb-16 rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-2xl font-bold mb-4">Ingredient Information</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-8">
            Our chip range is built around a concise ingredient story: potatoes, oil, and seasoning. That simplicity makes the product easier to understand, easier to compare, and easier to explain to customers who want a snack without a long, confusing label. The exact seasoning profile varies by flavor, but the overall product philosophy stays the same.
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-8">
            This matters for retail buyers because ingredients influence customer trust. A shopper who can quickly understand what a snack contains is more likely to make a repeat purchase, and a retailer who can answer basic product questions with confidence is more likely to recommend the item again.
          </p>
        </section>

        <section className="mb-16 rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-2xl font-bold mb-4">Flavor Comparison</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Salted</h3>
              <p className="text-zinc-700 dark:text-zinc-300 leading-7">Clean, classic, and easy to pair with almost any meal or snack spread.</p>
            </div>
            <div>
              <h3 className="font-semibold">Masala</h3>
              <p className="text-zinc-700 dark:text-zinc-300 leading-7">Spice-forward and aromatic, with a stronger finish for people who like more character.</p>
            </div>
            <div>
              <h3 className="font-semibold">Tangy Tomato</h3>
              <p className="text-zinc-700 dark:text-zinc-300 leading-7">Sweet, sour, and lively, useful when you want a brighter flavor on the shelf.</p>
            </div>
            <div>
              <h3 className="font-semibold">Spicy Chili</h3>
              <p className="text-zinc-700 dark:text-zinc-300 leading-7">The boldest option in the current range, built for customers who want heat and intensity.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-2xl font-bold mb-4">Nutrition Information</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-8">
            The nutrition profile varies by flavor and pack size, which is why we encourage customers to read the label before buying. Chips are best understood as an enjoyable snack rather than a main meal, so portion size matters. If you are comparing products for home use, party service, or resale, the pack format and serving amount should be part of the decision.
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-8">
            For people who want clearer guidance, the blog contains articles on <Link href="/blog/potato-nutrition-facts" className="text-sky-600">potato nutrition facts</Link> and <Link href="/blog/healthy-snacking-tips" className="text-sky-600">healthy snacking tips</Link>.
          </p>
        </section>

        <section className="mb-16 rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-2xl font-bold mb-4">Storage Recommendations</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-8">
            Keep unopened packs in a cool, dry place away from direct heat and sunlight. Once opened, reseal the bag or move the chips into an airtight container to keep the texture crisp for as long as possible. Freshness is a big part of the chip experience, so storage matters as much as flavor choice.
          </p>
        </section>

        {/* Middle Ad */}
        <div className="my-10 flex justify-center w-full">
          <GoogleAd adSlot="9716108451" />
        </div>

        {/* CTA Section connecting to Flavors */}
        <section
          className="rounded-3xl p-8 sm:p-12 text-center border border-orange-200/40 dark:border-orange-900/20 shadow-sm mb-16"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(234,179,8,0.10), rgba(249,115,22,0.10), rgba(239,68,68,0.10))",
          }}
        >
          <h2 className="text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 mb-3">
            Available in Four Mind-Blowing Flavors
          </h2>
          <p className="text-zinc-650 dark:text-zinc-350 max-w-xl mx-auto mb-6">
            All our packaging sizes are available across our signature flavor
            portfolio: Classic Salted, Spicy Masala, Tangy Tomato, and Spicy
            Chili.
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
