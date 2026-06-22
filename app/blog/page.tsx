import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "./content";
import { SITE_URL } from "../constants";

export const metadata: Metadata = {
  title: "Blog | Visha Chips",
  description:
    "Read practical food guides, snack industry articles, and Visha Chips brand stories.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Blog | Visha Chips",
    description:
      "Read practical food guides, snack industry articles, and Visha Chips brand stories.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Visha Chips",
    description:
      "Read practical food guides, snack industry articles, and Visha Chips brand stories.",
  },
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Visha Chips Blog",
              url: `${SITE_URL}/blog`,
              description:
                "Practical guides, snack industry articles, and brand stories from Visha Chips.",
              isPartOf: {
                "@type": "WebSite",
                name: "Visha Chips",
                url: SITE_URL,
              },
            }),
          }}
        />

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
            Editorial Hub
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Blog and buying guides for snack customers, retailers, and curious readers.
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            The Visha Chips blog brings together manufacturing explainers,
            snack-buying advice, flavor comparisons, and brand context. Each
            article is written to answer a real question and to connect you back
            to the product pages, flavors, and company information.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
                <span>{post.category}</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold leading-tight">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mt-4 flex-1 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                {post.excerpt}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-500">
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  {post.focusKeyword}
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Updated {post.updatedAt}
                </span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center text-sm font-semibold text-orange-600"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>

        <section className="mt-14 grid gap-6 rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 lg:grid-cols-[1.3fr_0.7fr] lg:p-8">
          <div>
            <h2 className="text-2xl font-semibold">Why this section exists</h2>
            <p className="mt-4 leading-8 text-zinc-600 dark:text-zinc-300">
              Search engines and readers respond better when a site offers useful
              context instead of only product summaries. The blog lets us
              explain how chips are made, how snack quality is judged, and what
              customers should look for when comparing products.
            </p>
          </div>
          <div className="rounded-2xl bg-zinc-50 p-5 dark:bg-zinc-950/60">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Useful starting points
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              <li>
                <Link className="font-medium text-orange-600" href="/products">
                  Products page
                </Link>
              </li>
              <li>
                <Link className="font-medium text-orange-600" href="/flavors">
                  Flavors page
                </Link>
              </li>
              <li>
                <Link className="font-medium text-orange-600" href="/about">
                  About page
                </Link>
              </li>
              <li>
                <Link className="font-medium text-orange-600" href="/contact">
                  Contact page
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
