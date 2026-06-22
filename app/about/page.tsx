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
    <div className="min-h-screen bg-zinc-50 px-4 py-10 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <article className="mx-auto max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
      <h1 className="text-4xl font-bold tracking-tight">About Visha Chips</h1>
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

      <div className="mb-6 mt-6">
        <GoogleAd adSlot="9716108451" />
      </div>

      <Paragraph>
        Visha Chips started with a simple question: what would a potato chip brand look like if it treated clarity, taste, and consistency as equal priorities? The answer shaped the site, the product line, and the way we write about the business. We wanted a brand that feels easy to understand at a glance but still offers enough substance to earn repeat interest.
      </Paragraph>

      <Paragraph>
        Our production philosophy is rooted in practical food quality. Potatoes are selected with the final chip in mind, not just the raw crop. They are then prepared in a way that protects texture, and the seasoning is applied so the flavor reads clearly without burying the chip itself.
      </Paragraph>

      <Paragraph>
        That approach influences the whole catalog. The current range focuses on salted, masala, tomato, and chili flavors in pack sizes that make sense for individual snacking, family use, and wholesale supply. If you want the product-level details, the <Link href="/products" className="text-blue-600">Products page</Link> and <Link href="/flavors" className="text-blue-600">Flavors page</Link> provide the most practical comparison.
      </Paragraph>

      <Paragraph>
        We also treat the website as part of the brand promise. That is why there is a blog, policy pages, a clear contact path, and a distribution page. A site that expects AdSense approval should demonstrate real value, and that starts with giving visitors enough context to make informed decisions.
      </Paragraph>

      <Paragraph>
        If you are a retailer or distributor, the most useful next stop is the <Link href="/contact" className="text-blue-600">Contact page</Link>. If you are a customer who wants background about the company or product handling, the trust pages in the footer explain the basics of privacy, shipping, refunds, cookies, accessibility, and disclaimers.
      </Paragraph>

      <h2 className="mt-8 text-2xl font-semibold">Company History</h2>
      <Paragraph>
        The brand was developed to fill a simple gap in snack presentation: a product that could speak clearly to ordinary customers and business buyers at the same time. Instead of building a vague lifestyle brand, we wanted a snack company that could explain what it makes, how it handles quality, and why the packaging is designed the way it is.
      </Paragraph>

      <h2 className="mt-8 text-2xl font-semibold">Mission</h2>
      <Paragraph>
        Our mission is to make potato chips that are straightforward, crisp, and dependable. That means no confusing positioning, no hidden product story, and no gap between what the label suggests and what the bag actually delivers.
      </Paragraph>

      <h2 className="mt-8 text-2xl font-semibold">Vision</h2>
      <Paragraph>
        We want Visha Chips to become a dependable snack brand known for practical quality: understandable flavors, sensible pack sizes, and a customer experience that feels organized from the first click to the last bite.
      </Paragraph>

      <h2 className="mt-8 text-2xl font-semibold">Manufacturing Philosophy</h2>
      <Paragraph>
        Our manufacturing philosophy is to reduce noise and increase consistency. In plain terms, that means choosing the right potatoes, keeping the process disciplined, and making sure every pack looks and tastes like it belongs to the same brand family.
      </Paragraph>

      <h2 className="mt-8 text-2xl font-semibold">Quality Commitment</h2>
      <Paragraph>
        Quality is visible in the bag, not just in the factory. A clean ingredient list, clear labeling, a good seal, and a flavor profile that matches the description are all part of the promise. If those elements are missing, the product does not feel finished.
      </Paragraph>

      <h2 className="mt-8 text-2xl font-semibold">Sustainability Practices</h2>
      <Paragraph>
        Sustainability for a snack brand starts with waste reduction. Better planning means fewer rejected ingredients, fewer damaged packs, and a more efficient distribution path. In other words, doing the basics well is already part of responsible business practice.
      </Paragraph>

      <h2 className="mt-8 text-2xl font-semibold">Further Reading</h2>
      <Paragraph>
        If you want the more detailed operational picture, the blog includes articles on <Link href="/blog/how-potato-chips-are-made" className="text-blue-600">how potato chips are made</Link>, <Link href="/blog/quality-control-in-food-manufacturing" className="text-blue-600">quality control in food manufacturing</Link>, and <Link href="/blog/behind-the-scenes-of-visha-chips" className="text-blue-600">behind the scenes of Visha Chips</Link>.
      </Paragraph>

      <div className="mt-6">
        <AdsterraAd
          type="banner"
          adKey="5e133825f54eeadfbb8f48674b5082f9"
          width={728}
          height={90}
        />
      </div>
      </article>
    </div>
  );
}
