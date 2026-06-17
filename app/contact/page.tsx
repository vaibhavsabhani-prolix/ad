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
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

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

      <div className="mb-6">
        <GoogleAd adSlot="9716108451" />
      </div>

      <Paragraph>
        Thank you for your interest in Visha Chips. We welcome support requests,
        wholesale inquiries, feedback, and media questions. For the fastest
        response, email the appropriate channel below and include any relevant
        details.
      </Paragraph>

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
        For press or media inquiries, contact media@codexd.in. If you're
        unsure which channel to use, email hello@codexd.in and we will
        route your request appropriately.
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
    </div>
  );
}
