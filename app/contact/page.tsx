import React from "react";
import AdsterraAd from "../../app/AdsterraAdProps";
import GoogleAd from "../../app/GoogleAd";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Ad Provider Manager team for support, business inquiries, or general questions. Find response times and contact channels here.",
  alternates: {
    canonical: "https://www.codexd.in/contact",
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

      <div className="mb-6">
        <GoogleAd adSlot="9716108451" />
      </div>

      <Paragraph>
        Thank you for your interest in Ad Provider Manager. We welcome support
        requests, business inquiries, feedback, and partnership proposals. For
        the fastest response, email the appropriate channel below and include
        relevant details (site URL, account ID, screenshots, and an outline of
        your request).
      </Paragraph>

      <h2 className="text-lg font-semibold mt-4">Support</h2>
      <Paragraph>
        For technical support and account assistance, please email
        support@codexd.in. Our support team typically responds within 24–48
        business hours for standard inquiries. For urgent operational issues
        affecting live revenue or site behavior, include "URGENT" in the subject
        line and provide clear reproduction steps.
      </Paragraph>

      <h2 className="text-lg font-semibold mt-4">Business Inquiries</h2>
      <Paragraph>
        For partnerships, sales, or potential integrations, contact
        partnerships@codexd.in. We review partnership requests and typically
        reply within 3–5 business days. Include a short summary of mutual
        benefits, expected traffic volumes, and targeting details when
        applicable.
      </Paragraph>

      <h2 className="text-lg font-semibold mt-4">General Contact</h2>
      <Paragraph>
        For general questions, press, or media inquiries, contact
        hello@codexd.in. If you're unsure which channel to use, send an email to
        hello@codexd.in and we will route your request to the appropriate team.
      </Paragraph>

      <Paragraph>
        Prefer self-service? Check the About page for product details and our
        Privacy Policy for information about data handling and analytics:
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
