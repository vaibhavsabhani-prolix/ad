import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://codexd.in"),
  title: {
    default: "Ad Provider Manager",
    template: "%s | Ad Provider Manager",
  },
  description:
    "Manage and compare advertising providers including Google AdSense, Adsterra, Monetag and other ad networks from a single platform.",

  keywords: [
    "ad provider manager",
    "google adsense",
    "adsterra",
    "monetag",
    "ad management",
    "publisher ads",
    "advertising networks",
  ],

  authors: [{ name: "Ad Provider Manager" }],

  creator: "Ad Provider Manager",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://codexd.in",
  },

  openGraph: {
    title: "Ad Provider Manager",
    description: "Ad Provider Manager",
    url: "https://codexd.in",
    siteName: "Ad Provider Manager",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ad Provider Manager",
    description: "Ad Provider Manager",
  },

  other: {
    "google-adsense-account": "ca-pub-1361802956304203",
  },
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
              name: "Ad Provider Manager",
              url: "https://codexd.in",
              logo: "https://codexd.in/logo.svg",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Ad Provider Manager",
              url: "https://codexd.in",
            }),
          }}
        />
        <meta name="google-adsense-account" content="ca-pub-1361802956304203" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
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
