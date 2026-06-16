import AdsterraAd from "../../app/AdsterraAdProps";
import GoogleAd from "../../app/GoogleAd";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Ad Provider Manager explaining data collection, cookies, Google AdSense, Google Analytics, Adsterra and third-party advertising practices.",
  alternates: {
    canonical: "https://www.codexd.in/privacy",
  },
  openGraph: {
    title: "Privacy Policy",
    description:
      "Privacy Policy for Ad Provider Manager explaining data collection, cookies, Google AdSense, Google Analytics, Adsterra and third-party advertising practices.",
    url: "https://www.codexd.in/privacy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description:
      "Privacy Policy for Ad Provider Manager explaining data collection, cookies, Google AdSense, Google Analytics, Adsterra and third-party advertising practices.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

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
                name: "Privacy",
                item: "https://www.codexd.in/privacy",
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
            "@type": "WebPage",
            name: "Privacy Policy",
            url: "https://www.codexd.in/privacy",
            description:
              "Privacy Policy for Ad Provider Manager explaining data collection, cookies, Google AdSense, Google Analytics, Adsterra and third-party advertising practices.",
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

      <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        This Privacy Policy describes how Ad Provider Manager ("we", "us",
        "our") collects, uses, and discloses information when you visit or use
        our website at https://www.codexd.in (the "Site") and when you use
        features that reference our services. We take privacy and data
        stewardship seriously and provide controls and documentation to help
        publishers make informed decisions about advertising and analytics.
      </p>

      <h2 className="mt-4 font-semibold">1. Information We Collect</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-300">
        We collect information necessary to operate the Site, to provide our
        services, and to improve user experience. The types of information we
        collect include:
      </p>
      <ul className="mb-4 ml-6 list-disc text-zinc-700 dark:text-zinc-300">
        <li>Usage data such as pages visited, time on site, and navigation.</li>
        <li>
          Device and technical information such as IP address, browser,
          operating system, and screen size.
        </li>
        <li>
          Cookies and similar identifiers used for functionality and
          advertising.
        </li>
        <li>
          Information you provide when contacting us (for example, email address
          and message content).
        </li>
      </ul>

      <h2 className="mt-4 font-semibold">2. Cookies and Tracking</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        We use cookies and similar technologies to deliver site functionality,
        measure performance, and support advertising. Cookies may be first party
        (set by our site) or third-party (set by partners such as Google or
        advertising networks). You can control cookies through your browser
        settings and consent management tools. Disabling certain cookies may
        affect features or ad personalization.
      </p>

      <h2 className="mt-4 font-semibold">3. Google AdSense</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        Our Site may display ads served by Google AdSense. Google uses cookies
        to serve ads based on a user’s prior visits to this Site and other
        sites. To learn more about how Google uses information from sites or
        apps that use their services, visit Google’s Privacy & Terms pages.
        Publishers using AdSense are responsible for following Google’s program
        policies and for presenting any required disclosures to end users.
      </p>

      <h2 className="mt-4 font-semibold">4. Google Analytics</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        We use Google Analytics for aggregated analytics about site traffic and
        engagement. Google Analytics collects data through cookies, including
        anonymized IP addresses and page-level events. If you are a publisher
        integrating Ad Provider Manager, you control whether and how analytics
        are deployed on your property. See Google’s documentation for options
        like IP anonymization and data retention settings.
      </p>

      <h2 className="mt-4 font-semibold">
        5. Third-Party Advertising Networks
      </h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        We may integrate with third-party advertising networks such as Adsterra
        and other programmatic or direct-sale partners. These third parties may
        use cookies, pixels, or other identifiers to serve and measure ads.
        Their data practices are governed by their own privacy policies; we
        encourage publishers to review partner policies and to configure consent
        management platforms appropriately.
      </p>

      <h2 className="mt-4 font-semibold">6. Adsterra</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        Adsterra is an advertising network that may be used to serve banner,
        native, and other ad formats. Adsterra may collect cookies, device
        identifiers, and engagement metrics that help optimize deliveries and
        measure conversions. If you are a publisher using Ad Provider Manager
        with Adsterra, follow Adsterra’s publisher guidelines and ensure any opt
        outs or consent requirements are respected on your site.
      </p>

      <h2 className="mt-4 font-semibold">7. How We Use Information</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        We use collected information to operate the Site, provide and improve
        our services, communicate with users, and detect abuse and fraud.
        Aggregate and anonymized data may be used for research and product
        improvement. We do not sell personal information to third parties.
      </p>

      <h2 className="mt-4 font-semibold">8. Data Sharing</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        We may share information with service providers who perform services on
        our behalf (analytics, hosting, email delivery) and with advertising
        partners as necessary to deliver ads. These providers are contractually
        required to protect your data and to use it only for the services they
        provide.
      </p>

      <h2 className="mt-4 font-semibold">9. User Rights</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        Depending on your jurisdiction, you may have rights to access, correct,
        export, or delete the personal data we hold about you. To exercise these
        rights, please contact support@codexd.in and provide details of your
        request. We will respond in accordance with applicable law.
      </p>

      <h2 className="mt-4 font-semibold">10. Data Retention and Security</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        We retain personal information only as long as necessary to fulfill the
        purposes described in this policy. We implement reasonable
        administrative, technical, and physical safeguards to protect data
        against loss, theft, and unauthorized access.
      </p>

      <h2 className="mt-4 font-semibold">11. Children’s Privacy</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        Our Site is not directed to children under 13 (or higher age where
        applicable). We do not knowingly collect personal information from
        children. If you believe we have collected such information, contact us
        at support@codexd.in and we will take steps to remove it.
      </p>

      <h2 className="mt-4 font-semibold">12. Changes to this Policy</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        We may update this Privacy Policy from time to time. We will post any
        changes on this page and update the policy date. Significant changes
        will be communicated through prominent notices on the Site.
      </p>

      <h2 className="mt-4 font-semibold">13. Contact</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        If you have questions about this Privacy Policy, data practices, or
        exercise of your rights, contact us at support@codexd.in or visit our
        <Link href="/contact" className="text-blue-600">
          {" "}
          Contact page
        </Link>
        .
      </p>

      <div className="mt-6">
        <AdsterraAd
          type="native"
          invokeUrl="https://pl29719922.effectivecpmnetwork.com/0acbbd07942e79258bf852d7d92fc5b8/invoke.js"
          containerId="container-privacy"
        />
      </div>
    </div>
  );
}
