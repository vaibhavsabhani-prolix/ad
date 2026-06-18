import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AdsterraAd from "../AdsterraAdProps";
import GoogleAd from "../GoogleAd";

const SITE_URL = "https://www.codexd.in";

export const metadata: Metadata = {
  title: "Visha Chips Flavors — Crispy Potato Chips Varieties",
  description:
    "Explore the delicious, mouth-watering potato chip flavors from Visha Chips. From Classic Salted to Spicy Masala, Tangy Tomato, and Spicy Chili.",
  alternates: {
    canonical: `${SITE_URL}/flavors`,
  },
  openGraph: {
    title: "Visha Chips Flavors — Crispy Potato Chips Varieties",
    description:
      "Savor our signature flavors: Classic Salted, Spicy Masala, Tangy Tomato, and Spicy Chili. Made with fresh ingredients.",
    url: `${SITE_URL}/flavors`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/flavors/salted.png`,
        width: 800,
        height: 800,
        alt: "Visha Chips Classic Salted",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visha Chips Flavors — Crispy Potato Chips Varieties",
    description:
      "Explore the mouth-watering flavors of Visha Chips. Find your perfect crunch today!",
    images: [`${SITE_URL}/flavors/salted.png`],
  },
};

type Flavor = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  spiciness: number;
  badge: string;
  badgeColor: string;
  cardColor: string;
  keyIngredients: string[];
  nutritionalInfo: {
    calories: string;
    totalFat: string;
    sodium: string;
  };
};

const FLAVORS: Flavor[] = [
  {
    id: "salted",
    name: "Classic Salted",
    tagline: "Simple. Crispy. Perfect.",
    description:
      "Savor the pure, unaltered flavor of premium golden potatoes lightly sprinkled with hand-harvested sea salt. Frying in small batches guarantees an unbeatable, light, and crispy crunch.",
    image: "/flavors/salted.png",
    spiciness: 0,
    badge: "Savory & Light",
    badgeColor:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    cardColor:
      "from-amber-500/10 to-yellow-600/10 hover:border-amber-400 dark:hover:border-amber-600",
    keyIngredients: [
      "Select Potatoes",
      "Pure Sea Salt",
      "Quality Vegetable Oil",
    ],
    nutritionalInfo: {
      calories: "150 kcal",
      totalFat: "9g",
      sodium: "170mg",
    },
  },
  {
    id: "masala",
    name: "Spicy Masala",
    tagline: "A Symphony of Indian Spices.",
    description:
      "Infused with a rich blend of traditional aromatic spices including cumin, coriander, black pepper, and chili. A savory, complex explosion that leaves your taste buds wanting more.",
    image: "/flavors/masala.png",
    spiciness: 4,
    badge: "Bold & Zesty",
    badgeColor:
      "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800",
    cardColor:
      "from-orange-500/10 to-red-600/10 hover:border-orange-400 dark:hover:border-orange-600",
    keyIngredients: [
      "Select Potatoes",
      "Red Chili Powder",
      "Cumin",
      "Coriander",
      "Black Pepper",
      "Dry Mango Powder",
    ],
    nutritionalInfo: {
      calories: "152 kcal",
      totalFat: "9.5g",
      sodium: "210mg",
    },
  },
  {
    id: "tomato",
    name: "Tangy Tomato",
    tagline: "Sweet, Sour, and Totally Addictive.",
    description:
      "A perfect, mouth-watering balance of ripe, juicy tomatoes, sweet spices, and a touch of vinegar-tang. It's a crowd favorite that delivers a burst of garden freshness in every bite.",
    image: "/flavors/tomato.png",
    spiciness: 1,
    badge: "Tangy & Sweet",
    badgeColor:
      "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300 border-rose-200 dark:border-rose-800",
    cardColor:
      "from-rose-500/10 to-red-500/10 hover:border-rose-400 dark:hover:border-rose-600",
    keyIngredients: [
      "Select Potatoes",
      "Natural Tomato Powder",
      "Onion Powder",
      "Garlic Powder",
      "Sugar",
      "Citric Acid",
    ],
    nutritionalInfo: {
      calories: "148 kcal",
      totalFat: "8.8g",
      sodium: "190mg",
    },
  },
  {
    id: "chili",
    name: "Spicy Chili",
    tagline: "Turn Up the Heat!",
    description:
      "For the bold spice lovers. Infused with fiery red chili peppers and finished with a dash of smoked paprika for a lingering heat, touch of garlic, and smoky complexity.",
    image: "/flavors/chili.png",
    spiciness: 5,
    badge: "Fiery Heat",
    badgeColor:
      "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800",
    cardColor:
      "from-red-600/10 to-orange-600/10 hover:border-red-500 dark:hover:border-red-600",
    keyIngredients: [
      "Select Potatoes",
      "Dried Red Chili",
      "Smoked Paprika",
      "Jalapeno Extract",
      "Garlic Powder",
      "Spices",
    ],
    nutritionalInfo: {
      calories: "155 kcal",
      totalFat: "9.8g",
      sodium: "220mg",
    },
  },
];

export default function FlavorsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans pb-16">
      {/* JSON-LD Schemas */}
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
                name: "Flavors",
                item: `${SITE_URL}/flavors`,
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
            name: "Visha Chips Flavors",
            description:
              "The core premium potato chips flavors offered by Visha Chips.",
            itemListElement: FLAVORS.map((f, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Product",
                name: `Visha Chips ${f.name}`,
                image: `${SITE_URL}${f.image}`,
                description: f.description,

                brand: {
                  "@type": "Brand",
                  name: "Visha Chips",
                },

                category: "Potato Chips",

                manufacturer: {
                  "@type": "Organization",
                  name: "Visha Chips",
                },

                nutrition: {
                  "@type": "NutritionInformation",
                  calories: f.nutritionalInfo.calories,
                  fatContent: f.nutritionalInfo.totalFat,
                  sodiumContent: f.nutritionalInfo.sodium,
                },
              },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What potato chip flavors does Visha Chips offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Visha Chips offers four distinct core flavors: Classic Salted, Spicy Masala, Tangy Tomato, and Spicy Chili. We use natural ingredients and prepare them in small batches.",
                },
              },
              {
                "@type": "Question",
                name: "Are there any artificial preservatives in Visha Chips?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Visha Chips are made from fresh potatoes, high-quality seasoning, and vegetable oils, without any added artificial preservatives.",
                },
              },
              {
                "@type": "Question",
                name: "How spicy is the Spicy Chili flavor compared to Spicy Masala?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Spicy Chili flavor is our hottest option, rated 5/5 on our heat scale, featuring fiery red chili and smoked paprika. Spicy Masala is rated 4/5 and offers a more aromatic spice blend of cumin, coriander, and pepper.",
                },
              },
            ],
          }),
        }}
      />

      {/* Main Container */}
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
                  Flavors
                </span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Top Google Ad */}
        <div className="mb-8 flex justify-center w-full">
          <GoogleAd adSlot="9716108451" />
        </div>

        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 bg-clip-text text-transparent mb-4">
            Visha Chips Signature Flavors
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Handcrafted with precision, batch-fried to absolute crunchiness, and
            dusted with premium natural spices. Discover your next favorite
            snack.
          </p>
        </div>

        {/* Flavors Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {FLAVORS.map((flavor) => (
            <div
              key={flavor.id}
              id={`flavor-${flavor.id}`}
              className={`flex flex-col md:flex-row bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${flavor.cardColor}`}
            >
              {/* Product Image Section */}
              <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[260px] overflow-hidden shrink-0">
                <Image
                  src={flavor.image}
                  alt={`Visha Chips - ${flavor.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover transition-transform duration-700 hover:scale-110 ease-out"
                  priority={flavor.id === "salted"}
                />
              </div>

              {/* Product Info Section */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full border ${flavor.badgeColor}`}
                    >
                      {flavor.badge}
                    </span>
                    {/* Heat Scale */}
                    {flavor.spiciness > 0 && (
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-zinc-500 dark:text-zinc-400 mr-1 font-medium">
                          Spicy:
                        </span>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < flavor.spiciness
                                ? "text-red-500 fill-red-500 animate-pulse"
                                : "text-zinc-300 dark:text-zinc-700 fill-zinc-200 dark:fill-zinc-800"
                            }`}
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C12 2 6 8.5 6 13.5C6 16.8 8.7 19.5 12 19.5C15.3 19.5 18 16.8 18 13.5C18 8.5 12 2 12 2Z" />
                          </svg>
                        ))}
                      </div>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold mb-1 text-zinc-900 dark:text-zinc-50">
                    {flavor.name}
                  </h2>
                  <p className="text-sm italic font-medium text-orange-600 dark:text-orange-400 mb-4">
                    {flavor.tagline}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                    {flavor.description}
                  </p>

                  {/* Key Ingredients */}
                  <div className="mb-6">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-zinc-400 mb-2">
                      Key Ingredients
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {flavor.keyIngredients.map((ing) => (
                        <span
                          key={ing}
                          className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded-md"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Nutritional Info Drawer-like Stats */}
                <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <div>
                    <span className="block font-semibold text-zinc-700 dark:text-zinc-300">
                      {flavor.nutritionalInfo.calories}
                    </span>
                    <span>Calories</span>
                  </div>
                  <div>
                    <span className="block font-semibold text-zinc-700 dark:text-zinc-300">
                      {flavor.nutritionalInfo.totalFat}
                    </span>
                    <span>Total Fat</span>
                  </div>
                  <div>
                    <span className="block font-semibold text-zinc-700 dark:text-zinc-300">
                      {flavor.nutritionalInfo.sodium}
                    </span>
                    <span>Sodium</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-Page Google Ad Banner */}
        <div className="my-14 flex justify-center w-full">
          <GoogleAd adSlot="9716108451" />
        </div>

        {/* Pairing/Experience Guide Section (Extra Premium Details) */}
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white rounded-3xl p-8 sm:p-12 mb-16 border border-zinc-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Visha Chips Pairing Guide
            </h2>
            <p className="text-zinc-300 mb-8 leading-relaxed">
              Elevate your snacking experience by pairing our uniquely spiced
              chips with the perfect dips and beverages.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-zinc-800 rounded-2xl p-5 bg-zinc-900/50 backdrop-blur-sm">
                <h3 className="font-semibold text-orange-400 mb-2">
                  Classic Salted & Creamy Dips
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  The clean crunch of Classic Salted pairs spectacularly with
                  garlic aioli, rich onion dips, or alongside your favorite
                  sandwich.
                </p>
              </div>

              <div className="border border-zinc-800 rounded-2xl p-5 bg-zinc-900/50 backdrop-blur-sm">
                <h3 className="font-semibold text-orange-400 mb-2">
                  Spicy Masala & Yogurt Raitha
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Cool down the robust Indian spice blend of Spicy Masala with a
                  refreshing cucumber raitha or a sweet-and-sour mango chutney.
                </p>
              </div>

              <div className="border border-zinc-800 rounded-2xl p-5 bg-zinc-900/50 backdrop-blur-sm">
                <h3 className="font-semibold text-orange-400 mb-2">
                  Tangy Tomato & Avocados
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  The vibrant, sweet-and-sour tomato flavor matches wonderfully
                  with fresh, rich guacamole or chopped pico de gallo.
                </p>
              </div>

              <div className="border border-zinc-800 rounded-2xl p-5 bg-zinc-900/50 backdrop-blur-sm">
                <h3 className="font-semibold text-orange-400 mb-2">
                  Spicy Chili & Cold Beverages
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Balance the intense, fiery kick of Spicy Chili with an
                  ice-cold lemonade or a crisp ginger beer to cleanse your
                  palate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-zinc-50">
            Want Visha Chips in Your Store?
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
            We partner with supermarkets, local convenience stores, and
            distributors to bring our premium chips everywhere. Contact us for
            bulk wholesale rates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-xl transition-colors shadow-md"
            >
              Contact Wholesale
            </Link>
            <Link
              href="/locations"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-xl transition-all shadow-sm"
            >
              Find Near You
            </Link>
          </div>
        </section>

        {/* Adsterra Native Ad Container */}
        <div className="mt-8 flex justify-center w-full">
          <AdsterraAd
            type="native"
            invokeUrl="https://pl29719922.effectivecpmnetwork.com/0acbbd07942e79258bf852d7d92fc5b8/invoke.js"
            containerId="container-flavors"
          />
        </div>
      </div>
    </div>
  );
}
