import { Metadata } from "next";
import AdsterraAd from "./AdsterraAdProps";
import GoogleAd from "./GoogleAd";
import React from "react";
import Link from "next/link";
import FeatureCard from "./components/FeatureCard";

export const metadata: Metadata = {
  title: "Visha Chips — Crispy Potato Chips & Snacks",
  description:
    "Visha Chips makes crispy, flavorful potato chips using natural ingredients. Available in multiple flavors and pack sizes for retail and wholesale.",
  alternates: {
    canonical: "https://www.codexd.in",
  },
  openGraph: {
    title: "Visha Chips — Crispy Potato Chips",
    description: "Handcrafted potato chips in a variety of tasty flavors.",
    url: "https://www.codexd.in",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visha Chips — Crispy Potato Chips",
    description: "Handcrafted potato chips in a variety of tasty flavors.",
  },
};

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
    {children}
  </p>
);

function makeLongContent() {
  const parts: string[] = [];
  parts.push(
    "Visha Chips brings you crunchy, golden potato chips made in small batches for consistent flavor and texture.",
  );
  parts.push(
    "Our chips are made from carefully selected potatoes, cooked to a perfect crisp, and seasoned with high-quality spices. We focus on clean ingredients and transparent labeling.",
  );
  parts.push(
    "Available in classic Salted, Masala, Tangy Tomato, and Spicy Chili flavors, Visha Chips comes in single-serve and family packs. We also offer wholesale options for retailers and events.",
  );
  parts.push(
    "Find our products at local retailers and online. Visit the Locations page for store listings and contact us for distribution inquiries.",
  );
  parts.push(
    "We take food safety seriously — all products are prepared in certified facilities and packaged to preserve freshness. Contact our support team for allergen information and nutrition details.",
  );
  parts.push(
    "Join our community for occasional promotions and new flavor launches. Follow us on social media and sign up via the Contact page for updates.",
  );
  return parts;
}

export default function Home() {
  const paragraphs = React.useMemo(() => makeLongContent(), []);

  return (
    <div className="w-full bg-zinc-50 dark:bg-black font-sans">
      <main className="flex-1">
        <article className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
          <h1 className="text-3xl font-bold mb-2">Visha Chips</h1>

          <div className="mb-4 text-sm text-zinc-500">
            Crispy potato chips made with care — available in multiple
            flavors
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
                    item: "https://www.codexd.in",
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
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What flavors does Visha Chips offer?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Our current lineup includes Salted, Masala, Tangy Tomato, and Spicy Chili. We rotate seasonal flavors occasionally.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Where can I buy Visha Chips?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Find our store locations on the Locations page or order online from selected retailers. Contact us for wholesale inquiries.",
                    },
                  },
                ],
              }),
            }}
          />
          <div className="mb-6 flex justify-center">
            <GoogleAd adSlot="9716108451" />
          </div>

          <div className="prose dark:prose-invert max-w-none">
            {paragraphs.map((p, i) => (
              <Paragraph key={i}>{p}</Paragraph>
            ))}

            <h2 className="mt-8">Our Products</h2>

            <Paragraph>
              Visha Chips are crafted for great crunch and bold flavor. We
              offer single-serve packets, family packs, and bulk wholesale
              options.
            </Paragraph>

            <h2 className="mt-8">Why Choose Visha Chips</h2>

            <Paragraph>
              Freshly made in certified facilities with simple ingredients,
              our chips focus on taste and quality. We avoid artificial
              preservatives where possible.
            </Paragraph>

            <h2 className="mt-8">Store Locations & Wholesale</h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              Find Visha Chips at local retailers or request wholesale
              distribution. Visit our Locations page for store listings and
              contact us for trade inquiries.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <FeatureCard
                title="Crispy Texture"
                description="Small-batch frying for consistent crunch and quality."
              />
              <FeatureCard
                title="Natural Ingredients"
                description="Made from real potatoes and quality seasonings."
              />
              <FeatureCard
                title="Multiple Flavors"
                description="Salted, Masala, Tangy Tomato, Spicy Chili and seasonal specials."
              />
              <FeatureCard
                title="Retail & Wholesale"
                description="Available in single-serve, family packs and bulk for retailers."
              />
            </div>

            <p className="mt-4">
              <Link href="/locations" className="text-sky-600">
                See store locations and wholesale options →
              </Link>
            </p>

            <Paragraph>
              Visha Chips is perfect for snacking at home, parties, and
              retail. Contact us for custom packaging or co-packing
              opportunities.
            </Paragraph>

            <h2 className="mt-8">Frequently Asked Questions</h2>
            <h3>What flavors are available?</h3>
            <Paragraph>
              Visha Chips are available in Salted, Masala, Tangy Tomato, and
              Spicy Chili. We also release seasonal flavors occasionally.
            </Paragraph>

            <h3>Where can I buy Visha Chips?</h3>
            <Paragraph>
              Check the Locations page for retailers and online partners.
              For wholesale or distribution inquiries, contact
              sales@codexd.in.
            </Paragraph>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex justify-center">
              <AdsterraAd
                type="native"
                invokeUrl="https://pl29719922.effectivecpmnetwork.com/0acbbd07942e79258bf852d7d92fc5b8/invoke.js"
                containerId="container-0acbbd07942e79258bf852d7d92fc5b8"
              />
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
