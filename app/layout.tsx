import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";
import Script from "next/script";
import Link from "next/link";
import AdsterraAd from "./AdsterraAdProps";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://codexd.in";
const TITLE = "Visha Chips";
const DESCRIPTION =
  "Visha Chips — crispy, delicious potato chips made with natural ingredients. Available in multiple flavors and pack sizes for every occasion.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${TITLE} - Crispy Potato Chips`,
    template: "%s | Visha Chips",
  },
  description: DESCRIPTION,
  category: "food",

  applicationName: TITLE,

  keywords: [
    "visha chips",
    "potato chips",
    "snacks",
    "crispy chips",
    "flavors",
    "snack food",
  ],

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },

  authors: [{ name: "Visha Chips" }],

  publisher: "Visha Chips",

  creator: "Visha Chips",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: TITLE,
    images: [
      {
        url: `${SITE_URL}/visha-logo.svg`,
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/visha-logo.svg`],
  },

  referrer: "origin-when-cross-origin",

  other: {
    "google-adsense-account": "ca-pub-1361802956304203",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/flavors", label: "Flavors" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-screen overflow-hidden antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: TITLE,
              url: SITE_URL,
              logo: `${SITE_URL}/visha-logo.svg`,
              description: DESCRIPTION,
            }),
          }}
        />

        {/* WebSite structured data (enhanced) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: TITLE,
              url: SITE_URL,
              description: DESCRIPTION,
              inLanguage: "en",
              author: {
                "@type": "Organization",
                name: TITLE,
                url: SITE_URL,
              },
            }),
          }}
        />

        <meta name="google-adsense-account" content="ca-pub-1361802956304203" />
      </head>

      <body className="h-screen flex flex-col overflow-hidden bg-zinc-50 dark:bg-black">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VHL8Y6LYN0"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-VHL8Y6LYN0');
    `}
        </Script>

        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1361802956304203"
          crossOrigin="anonymous"
        />
        <ReduxProvider>
          <header className="w-full bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6">
              <Link href="/" className="font-semibold text-lg">
                Visha Chips
              </Link>
              <nav className="flex items-center gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          <div className="flex-1 min-h-0 flex w-full overflow-hidden">
            <aside className="hidden xl:flex w-[320px] shrink-0 h-full border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden flex-col items-center justify-center p-4">
              <AdsterraAd
                type="banner"
                adKey="5e133825f54eeadfbb8f48674b5082f9"
                width={300}
                height={600}
              />
            </aside>

            {/* Center Content (scrollable) */}
            <div className="flex-1 h-full overflow-y-auto flex flex-col justify-between">
              <main className="flex-1">
                {children}
              </main>
            </div>

            {/* Right Sidebar (fixed, no scroll) */}
            <aside className="hidden xl:flex w-[320px] shrink-0 h-full border-l border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden flex-col items-center justify-center p-4">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <AdsterraAd
                    type="native"
                    invokeUrl="https://pl29719922.effectivecpmnetwork.com/0acbbd07942e79258bf852d7d92fc5b8/invoke.js"
                    containerId="container-0acbbd07942e79258bf852d7d92fc5b8"
                  />
                </div>
              </div>
            </aside>
          </div>
          <Footer />
        </ReduxProvider>
        <AdsterraAd
          type="socialBar"
          scriptUrl="https://pl29719861.effectivecpmnetwork.com/9f/72/f3/9f72f3a6ec53badbb0ed3a07292e6a36.js"
        />
      </body>
    </html>
  );
}
