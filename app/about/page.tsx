import React from "react";
import AdsterraAd from "../../app/AdsterraAdProps";
import GoogleAd from "../../app/GoogleAd";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Visha Chips",

  description:
    "Learn about Visha Chips — our history, production practices, flavors, and where to buy our snacks.",

  alternates: {
    canonical: "https://www.codexd.in/about",
  },

  openGraph: {
    title: "About Visha Chips",
    description:
      "Visha Chips — handcrafted potato chips made in certified facilities.",
    url: "https://www.codexd.in/about",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Visha Chips",
    description:
      "Visha Chips — handcrafted potato chips made in certified facilities.",
  },
};

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
    {children}
  </p>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">About Visha Chips</h1>
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
              {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: "https://www.codexd.in/about",
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
            "@type": "AboutPage",
            name: "About Visha Chips",
            url: "https://www.codexd.in/about",
            description:
              "Learn about Visha Chips, our values, and production practices.",
            isPartOf: {
              "@type": "WebSite",
              name: "Visha Chips",
              url: "https://www.codexd.in",
            },
          }),
        }}
      />

      <div className="mb-6">
        <GoogleAd adSlot="9716108451" />
      </div>

      <Paragraph>
        Visha Chips started as a small, family-run snack maker with a mission to
        craft delicious, high-quality potato chips using simple ingredients and
        time-tested techniques.
      </Paragraph>

      <Paragraph>
        Our production emphasizes freshness and consistency. Potatoes are
        sourced from trusted growers, fried in small batches, and seasoned to
        highlight authentic flavors. We maintain strict food-safety standards
        and clear labeling for allergens and nutrition.
      </Paragraph>

      <Paragraph>
        Product range: Salted, Masala, Tangy Tomato, and Spicy Chili in multiple
        pack sizes. Retail and wholesale options are available; contact our team
        for bulk pricing and distribution.
      </Paragraph>

      <Paragraph>
        We plan to expand our flavor lineup and distribution while keeping a
        focus on quality. Follow us on social media and check the Contact page
        for promotional offers and sample requests.
      </Paragraph>

      <Paragraph>
        To learn more about privacy and product details, see our
        <Link href="/privacy" className="text-blue-600">
          Privacy Policy
        </Link>
        . For business inquiries, visit the
        <Link href="/contact" className="text-blue-600">
          Contact
        </Link>
        page.
      </Paragraph>

      <div className="mt-6">
        <AdsterraAd
          type="banner"
          adKey="5e133825f54eeadfbb8f48674b5082f9"
          width={728}
          height={90}
        />
      </div>
    </div>
  );
}
