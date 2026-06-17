import AdsterraAd from "../../app/AdsterraAdProps";
import GoogleAd from "../../app/GoogleAd";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for using Visha Chips website and services, including liability and partner responsibilities.",
  alternates: {
    canonical: "https://www.codexd.in/terms",
  },
  openGraph: {
    title: "Terms & Conditions — Visha Chips",
    description:
      "Terms and Conditions for using Visha Chips website and services, including liability and partner responsibilities.",
    url: "https://www.codexd.in/terms",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions — Visha Chips",
    description:
      "Terms and Conditions for using Visha Chips website and services, including liability and partner responsibilities.",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>

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
                name: "Terms",
                item: "https://www.codexd.in/terms",
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
            name: "Terms & Conditions",
            url: "https://www.codexd.in/terms",
            description: "Terms and Conditions for using Visha Chips.",
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

      <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        These Terms & Conditions govern your use of Visha Chips' website and any
        services we provide. By using our Site, you agree to these terms. If you
        do not agree, please do not use the Site.
      </p>

      <h2 className="mt-4 font-semibold">Service Use</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        You may use the Site for lawful purposes and in compliance with
        applicable laws and partner policies. Retailers and partners remain
        responsible for their own content and for ensuring that product
        merchandising and promotions comply with local regulations.
      </p>

      <h2 className="mt-4 font-semibold">Limitation of Liability</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        To the fullest extent permitted by law, Visha Chips and its affiliates
        are not liable for indirect, incidental, or consequential damages
        arising from use of the Site, including lost revenue or lost data. We
        provide product information and support, but final implementation and
        any compliance obligations remain with the retailer or partner.
      </p>

      <h2 className="mt-4 font-semibold">Third-Party Services</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        The Site may contain links to third-party websites and services. We are
        not responsible for their content or practices. Integration with
        advertising partners like Google AdSense or Adsterra is subject to those
        providers' terms and privacy practices.
      </p>

      <h2 className="mt-4 font-semibold">Changes to Terms</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        We may update these Terms from time to time. Changes will be posted on
        this page. Continued use of the Site after changes constitutes
        acceptance of the updated Terms.
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        For details about data handling, see our
        <Link href="/privacy" className="text-blue-600">
          {" "}
          Privacy Policy
        </Link>
        . For questions about these Terms, please contact
        support@codexd.in.
      </p>

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
