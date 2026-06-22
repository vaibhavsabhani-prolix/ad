import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "../constants";

export const metadata: Metadata = {
  title: "Cookie Policy | Visha Chips",
  description: "Cookie policy for analytics, advertising, and site functionality on Visha Chips.",
  alternates: { canonical: `${SITE_URL}/cookie-policy` },
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-10 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <article className="mx-auto max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
        <h1 className="text-4xl font-bold tracking-tight">Cookie Policy</h1>
        <p className="mt-4 leading-8 text-zinc-700 dark:text-zinc-300">
          We use cookies and similar technologies to support site functionality, measure traffic, and display advertising. These tools help us understand how visitors use the site and improve the browsing experience.
        </p>
        <p className="mt-4 leading-8 text-zinc-700 dark:text-zinc-300">
          You can manage cookies in your browser settings. For more detail on how we handle data, review the <Link href="/privacy" className="font-semibold text-orange-600">Privacy Policy</Link>.
        </p>
      </article>
    </main>
  );
}
