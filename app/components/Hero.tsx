import React from "react";
import Link from "next/link";

export default function Hero({
  title,
  subtitle,
  ctaLabel = "Get Started",
  ctaHref = "/contact",
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-lg p-8 mb-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-6">
        <div className="flex-1">
          <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
          {subtitle ? (
            <p className="mt-3 text-zinc-100 max-w-2xl">{subtitle}</p>
          ) : null}

          <div className="mt-6 flex gap-3">
            <Link
              href={ctaHref}
              className="inline-block bg-white text-sky-700 px-4 py-2 rounded-md font-semibold"
            >
              {ctaLabel}
            </Link>
            <Link
              href="/about"
              className="inline-block border border-white/30 text-white px-4 py-2 rounded-md"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-96">
          <div className="rounded-md bg-white/20 p-4">
            <div className="h-40 bg-white/10 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}
