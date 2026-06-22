import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "../content";
import { SITE_URL } from "../../constants";

type Props = {
  params: Promise<{ slug: string }>;
};

function getPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug) ?? null;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Blog | Visha Chips",
      description: "Visha Chips blog articles and guides.",
      alternates: { canonical: `${SITE_URL}/blog` },
    };
  }

  const canonical = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonical,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const relatedPosts = post.relatedSlugs
    .map((relatedSlug) => getPost(relatedSlug))
    .filter((item): item is NonNullable<ReturnType<typeof getPost>> => Boolean(item));

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
                { "@type": "ListItem", position: 3, name: post.title, item: canonical },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.description,
              mainEntityOfPage: canonical,
              datePublished: post.publishedAt,
              dateModified: post.updatedAt,
              author: {
                "@type": "Organization",
                name: "Visha Chips",
                url: SITE_URL,
              },
              publisher: {
                "@type": "Organization",
                name: "Visha Chips",
                url: SITE_URL,
              },
            }),
          }}
        />

        <article className="rounded-4xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
            <span>{post.category}</span>
            <span>Published {post.publishedAt}</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            {post.description}
          </p>

          <div className="mt-8 rounded-2xl bg-zinc-50 p-5 text-sm leading-7 text-zinc-600 dark:bg-zinc-950/60 dark:text-zinc-300">
            <p>
              This article is part of the Visha Chips editorial hub. If you are
              comparing products while reading, visit the <Link className="font-semibold text-orange-600" href="/products">Products page</Link> and <Link className="font-semibold text-orange-600" href="/flavors">Flavors page</Link>.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-5 text-base leading-8 text-zinc-700 dark:text-zinc-300">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-8 text-zinc-700 dark:text-zinc-300">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <div className="mt-5 space-y-6">
              {post.faq.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-medium">{item.question}</h3>
                  <p
                    className="mt-2 text-base leading-8 text-zinc-700 dark:text-zinc-300"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold">Related articles</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition hover:border-orange-300 hover:bg-orange-50 dark:border-zinc-800 dark:bg-zinc-950/60 dark:hover:border-orange-700 dark:hover:bg-orange-950/20"
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {related.category}
                  </div>
                  <div className="mt-2 text-lg font-semibold">{related.title}</div>
                  <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-12 flex flex-wrap gap-3 text-sm">
            <Link href="/blog" className="font-semibold text-orange-600">
              Back to blog
            </Link>
            <Link href="/contact" className="font-semibold text-orange-600">
              Contact the team
            </Link>
          </section>
        </article>
      </div>
    </main>
  );
}
