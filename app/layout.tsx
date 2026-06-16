import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";
import Script from "next/script";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.codexd.in";
const TITLE = "Ad Provider Manager";
const DESCRIPTION =
  "Manage advertising providers including Google AdSense, Adsterra and other ad networks from a single platform.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${TITLE} - Manage Ad Providers`,
    template: "%s | Ad Provider Manager",
  },
  description: DESCRIPTION,
  category: "technology",

  applicationName: TITLE,

  keywords: [
    "ad provider manager",
    "google adsense",
    "adsterra",
    "monetag",
    "ad management",
    "publisher ads",
    "advertising networks",
  ],

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },

  authors: [{ name: "Ad Provider Manager" }],

  publisher: "Ad Provider Manager",

  creator: "Ad Provider Manager",

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
        url: `${SITE_URL}/logo.png`,
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
    images: [`${SITE_URL}/logo.png`],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
              logo: `${SITE_URL}/logo.png`,
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

      <body className="min-h-full flex flex-col">
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
                Home
              </Link>
              <nav className="flex items-center gap-4">
                <Link
                  href="/provider"
                  className="text-sm text-zinc-700 dark:text-zinc-300"
                >
                  Providers
                </Link>
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
            </div>
          </header>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
