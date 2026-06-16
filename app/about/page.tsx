import React from "react";
import AdsterraAd from "../../app/AdsterraAdProps";
import GoogleAd from "../../app/GoogleAd";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",

  description:
    "About Ad Provider Manager — what we build, why we built it, supported networks, and how publishers benefit from centralized ad management.",

  alternates: {
    canonical: "https://www.codexd.in/about",
  },

  openGraph: {
    title: "About Ad Provider Manager",
    description:
      "Learn about Ad Provider Manager and how we help publishers manage multiple advertising networks.",
    url: "https://www.codexd.in/about",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Ad Provider Manager",
    description:
      "Learn about Ad Provider Manager and how we help publishers manage multiple advertising networks.",
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
      <h1 className="text-2xl font-bold mb-4">About Ad Provider Manager</h1>
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
            name: "About Ad Provider Manager",
            url: "https://www.codexd.in/about",
            description:
              "Learn about Ad Provider Manager and how it helps publishers manage multiple advertising networks.",
            isPartOf: {
              "@type": "WebSite",
              name: "Ad Provider Manager",
              url: "https://www.codexd.in",
            },
          }),
        }}
      />

      <div className="mb-6">
        <GoogleAd adSlot="9716108451" />
      </div>

      <Paragraph>
        Ad Provider Manager is a lightweight ad-operations product that helps
        publishers centralize the setup and management of multiple advertising
        networks. Our goal is to reduce the technical overhead of running ads
        across one or many websites while helping publishers stay aligned with
        network policies and user experience best practices.
      </Paragraph>

      <Paragraph>
        Why we built this: publishers and site owners often juggle different ad
        providers, each with its own tag formats, responsive size maps, and
        configuration quirks. Repeatedly editing templates and theme files to
        change placements or swap networks is time consuming and error-prone. Ad
        Provider Manager provides a single source of truth for ad slots,
        priority rules, and fallbacks so teams can iterate faster and reduce
        rollout mistakes.
      </Paragraph>

      <Paragraph>
        Supported advertising networks include Google AdSense and Adsterra, and
        the platform is designed to integrate additional programmatic or
        direct-sale partners. We document recommended slot sizes, responsive
        behaviors, and policy-related notes for each provider to help you make
        informed decisions during setup and approval flows.
      </Paragraph>

      <Paragraph>
        Benefits for publishers: streamlined ad placement management, fewer
        implementation errors, standardized naming conventions across sites, and
        basic revenue optimization tools such as priority rules and rotation.
        The product is suitable for solo publishers, small teams, and publishers
        managing multiple domains.
      </Paragraph>

      <Paragraph>
        Ad management workflow: define named slots (header, inline, sidebar,
        footer), assign size maps and breakpoints, then attach provider rules
        and optional creative targeting. You can set primary and fallback
        providers and schedule quick experiments to measure uplift. The
        read-only snippets provided by the dashboard are intentionally small to
        avoid degrading site performance or SEO.
      </Paragraph>

      <Paragraph>
        Future plans include deeper analytics integrations, server-side bidding
        adapters, and tooling for consent and first-party data that helps
        publishers retain more control over ad decisions. We also plan to expand
        documentation and provide examples for the most common CMS and hosting
        platforms.
      </Paragraph>

      <Paragraph>
        To learn more about privacy and analytics, see our
        <Link href="/privacy" className="text-blue-600">
          {" "}
          Privacy Policy
        </Link>
        . For questions or business inquiries, visit the
        <Link href="/contact" className="text-blue-600">
          {" "}
          Contact
        </Link>{" "}
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
