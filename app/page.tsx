import { Metadata } from "next";
import AdsterraAd from "./AdsterraAdProps";
import GoogleAd from "./GoogleAd";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manage Google AdSense, Adsterra & Ad Networks | Ad Provider Manager",

  description:
    "Ad Provider Manager centralizes multiple advertising networks (Google AdSense, Adsterra, and others) so publishers can manage placements, optimize revenue, and maintain policy compliance from one dashboard.",

  alternates: {
    canonical: "https://www.codexd.in",
  },

  openGraph: {
    title: "Manage Google AdSense, Adsterra & Multiple Ad Networks",
    description:
      "Centralized platform for managing multiple advertising providers.",
    url: "https://www.codexd.in",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Manage Google AdSense, Adsterra & Multiple Ad Networks",
    description:
      "Centralized platform for managing multiple advertising providers.",
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
    "Ad Provider Manager is a focused ad operations product built for publishers who run multiple ad networks across one or more sites. It centralizes configuration, placement management, and basic performance monitoring so you spend less time editing site templates and more time growing traffic and revenue.",
  );

  parts.push(
    "Why centralize? Publishers commonly blend ad providers — Google AdSense for programmatic inventory, Adsterra for direct buys and offers, and other networks for native or alternative demand. Each provider has unique tags, size requirements, and policy considerations. By keeping ad metadata and placement rules in a single system, Ad Provider Manager reduces repetitive work, minimizes implementation errors, and makes it faster to test new layouts or networks.",
  );

  parts.push(
    "Supported networks include Google AdSense, Adsterra, and other major display and native providers. We focus on enabling responsive ad slots, conditional ad rotation, priority rules, and simple A/B rotation between networks so you can test what works best for your audience.",
  );

  parts.push(
    "Core benefits for publishers include: centralized placement management, improved policy compliance, faster rollout of ad experiments, and simplified bookkeeping for ad units across multiple properties. The interface is designed for typical publishing stacks and content management systems, offering copy-and-paste snippets and hosting-friendly deployment options.",
  );

  parts.push(
    "Ad Provider Manager supports both programmatic and direct-sale workflows. For programmatic demand (e.g., Google AdSense), it provides a compliant, responsive slot configuration and guidance for page-level and site-level policies. For direct campaigns or networks like Adsterra, it supports banner, native, and optional social bars while flagging formats that can conflict with policy-driven networks.",
  );

  parts.push(
    "Revenue optimization is approached via simple rules: define priority for networks, set frequency caps, and rotate creatives when a network underperforms. Publishers can assign default placements (header, inline, sidebar, footer) and override them per-site or per-path. That way, you can test an inline mobile leaderboard on article pages while keeping a different layout on landing pages.",
  );

  parts.push(
    "We prioritize user experience and policy compliance. Excessive ad density hurts engagement and can trigger policy flags from networks like Google AdSense. Ad Provider Manager includes recommended defaults (single above-the-fold slot on mobile, limited sticky creatives, clear content-to-ad ratios) to help sites remain compliant and maintain healthy user metrics.",
  );

  parts.push(
    "Typical publisher use cases: single-site bloggers needing unified ad control; multi-site networks looking to standardize placements; agencies managing direct campaigns for clients; and developers who want production-ready snippets that can be toggled without a full deploy.",
  );

  parts.push(
    "Ad placement management includes naming conventions for slots, responsive size maps, and fallback behavior. If a primary network does not fill an impression within a configurable timeout, the system can fall back to a secondary provider, helping maintain fill rate while protecting revenue.",
  );

  parts.push(
    "Privacy and data: we surface guidance for cookie usage, consent banners, and how to configure Google Analytics and AdSense to respect user choices. Our privacy-aware defaults and documentation help you reduce friction during ad network reviews and approvals. See our Privacy Policy for details and specifics about analytics and advertising cookies.",
  );

  parts.push(
    "Implementation is lightweight: drop the provider snippets provided by the dashboard into your templates or use our hosted snippet. We intentionally avoid heavy client-side frameworks in the ad path to preserve page load speed and SEO.",
  );

  parts.push(
    "Roadmap: richer performance dashboards, server-side bidding adapters, and first-party data controls to help publishers retain more insights while adhering to privacy constraints. We plan to add deeper analytics integrations and a marketplace for vetted direct advertisers.",
  );

  parts.push(
    "If you want to learn more about how Ad Provider Manager can fit into your stack, visit the About page to read more about our approach, or reach out on the Contact page for business inquiries and support.",
  );

  // Join into paragraphs
  return parts;
}

export default function Home() {
  const paragraphs = React.useMemo(() => makeLongContent(), []);

  return (
    <div className="min-h-screen w-full bg-zinc-50 dark:bg-black font-sans">
      <div className=" mx-auto p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="sticky top-6">
              <h3 className="mb-4 font-semibold">Resources</h3>
              <nav className="mb-6 flex flex-col gap-2">
                <Link
                  href="/about"
                  className="text-sm text-zinc-700 dark:text-zinc-300"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-zinc-700 dark:text-zinc-300"
                >
                  Contact
                </Link>
                <Link
                  href="/privacy"
                  className="text-sm text-zinc-700 dark:text-zinc-300"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm text-zinc-700 dark:text-zinc-300"
                >
                  Terms
                </Link>
              </nav>
              <div className="mb-6 flex justify-center">
                <AdsterraAd
                  type="banner"
                  adKey="5e133825f54eeadfbb8f48674b5082f9"
                  width={300}
                  height={600}
                />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <article className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
              <h1 className="text-3xl font-bold mb-2">Ad Provider Manager</h1>

              <div className="mb-4 text-sm text-zinc-500">
                Official Ad Provider Manager Platform
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
                        name: "How does Ad Provider Manager affect SEO?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "We keep ad snippets lightweight and defer non-essential network calls to avoid blocking rendering. Use our recommended defaults to preserve page speed.",
                        },
                      },
                      {
                        "@type": "Question",
                        name: "Is this compatible with Google AdSense?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "Yes. We provide AdSense-friendly configurations and guidance. Avoid excessive ads, popunders, or deceptive placements.",
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

                <h2 className="mt-8">Supported Advertising Networks</h2>

                <Paragraph>
                  We provide streamlined support for Google AdSense and
                  Adsterra, plus tooling to integrate other display and native
                  networks. Each provider is documented with recommended slot
                  sizes, mobile-first guidelines, and policy notes to help you
                  maintain compliance.
                </Paragraph>

                <h2 className="mt-8">
                  Publisher Use Cases & Revenue Optimization
                </h2>

                <Paragraph>
                  Whether you run a single blog or manage a network of sites,
                  the platform helps standardize naming, rotate creatives, and
                  set priority/fallback rules so you can measure which
                  placements and providers drive the most revenue.
                </Paragraph>

                <h2 className="mt-8">Frequently Asked Questions</h2>
                <h3>How does Ad Provider Manager affect SEO?</h3>
                <Paragraph>
                  We keep ad snippets lightweight and defer non-essential
                  network calls to avoid blocking rendering. Use our recommended
                  defaults to preserve page speed — a critical SEO factor.
                </Paragraph>

                <h3>Is this compatible with Google AdSense?</h3>
                <Paragraph>
                  Yes. We provide AdSense-friendly configurations and guidance.
                  For approval, avoid excessive ads, popunders, or deceptive
                  placements. See our Privacy page for details on analytics and
                  consent.
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

          {/* Right Sidebar */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="sticky top-6">
              <h3 className="mb-4 font-semibold">Quick Links</h3>
              <div className="mb-6 flex justify-center">
                <AdsterraAd
                  type="banner"
                  adKey="5e133825f54eeadfbb8f48674b5082f9"
                  width={300}
                  height={600}
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
