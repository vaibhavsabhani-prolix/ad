import React from "react";
import AdsterraAd from "../../app/AdsterraAdProps";
import GoogleAd from "../../app/GoogleAd";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Visha Chips",
  description:
    "Get in touch with Visha Chips for support, wholesale, or general questions. Find contact channels and response expectations.",
  alternates: {
    canonical: "https://www.codexd.in/contact",
  },
  openGraph: {
    title: "Contact Visha Chips",
    description:
      "Contact Visha Chips for wholesale, retail, and general inquiries.",
    url: "https://www.codexd.in/contact",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Visha Chips",
    description:
      "Contact Visha Chips for wholesale, retail, and general inquiries.",
  },
};

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
    {children}
  </p>
);

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-10 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <article className="mx-auto max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
      <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>

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
                name: "Contact",
                item: "https://www.codexd.in/contact",
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
            "@type": "ContactPage",
            name: "Contact Visha Chips",
            url: "https://www.codexd.in/contact",
            description:
              "Contact Visha Chips for wholesale, retail, and support inquiries.",
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
        Thank you for your interest in Visha Chips. We welcome support requests, wholesale inquiries, feedback, and media questions. The fastest path to a useful response is to send the right type of inquiry to the right channel and include enough detail for the team to answer without follow-up.
      </Paragraph>

      <h2 className="text-2xl font-semibold mt-8">Contact Form</h2>
      <form className="mt-4 grid gap-4 rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm">
            Name
            <input className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100" type="text" name="name" />
          </label>
          <label className="grid gap-2 text-sm">
            Email
            <input className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100" type="email" name="email" />
          </label>
        </div>
        <label className="grid gap-2 text-sm">
          Subject
          <input className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100" type="text" name="subject" />
        </label>
        <label className="grid gap-2 text-sm">
          Message
          <textarea className="min-h-36 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100" name="message" />
        </label>
        <button className="w-fit rounded-full bg-orange-600 px-5 py-2 text-sm font-semibold text-white" type="submit">
          Send Inquiry
        </button>
      </form>

      <h2 className="text-lg font-semibold mt-4">Support</h2>
      <Paragraph>
        For product support and allergen information, please email
        support@codexd.in. Our team typically responds within 24–48
        business hours.
      </Paragraph>

      <h2 className="text-lg font-semibold mt-4">Wholesale & Retail</h2>
      <Paragraph>
        For wholesale, distribution, or retail partnership inquiries, contact
        sales@codexd.in. Include order volumes, delivery region, and
        expected timelines for a faster reply.
      </Paragraph>

      <h2 className="text-lg font-semibold mt-4">General Contact</h2>
      <Paragraph>
        For press or media inquiries, contact media@codexd.in. If you&apos;re
        unsure which channel to use, email hello@codexd.in and we will
        route your request appropriately.
      </Paragraph>

      <h2 className="text-lg font-semibold mt-4">FAQ</h2>
      <Paragraph>
        Retailers should include store name, location, expected order volume, and any preferred pack sizes. Customers asking about ingredients or storage should mention the flavor name and package size. If your question is about editorial content, include the article title so the team can respond accurately.
      </Paragraph>

      <Paragraph>
        Prefer self-service? Check the About page for company details and our
        <Link href="/privacy" className="text-blue-600">
          {" "}
          Privacy Policy
        </Link>
        .
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
