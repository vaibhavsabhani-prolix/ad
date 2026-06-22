import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "../constants";

export const metadata: Metadata = {
  title: "Accessibility | Visha Chips",
  description: "Accessibility statement for the Visha Chips website.",
  alternates: { canonical: `${SITE_URL}/accessibility` },
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-10 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <article className="mx-auto max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
        <h1 className="text-4xl font-bold tracking-tight">Accessibility</h1>
        <p className="mt-4 leading-8 text-zinc-700 dark:text-zinc-300">
          We aim to make the Visha Chips website easy to navigate with clear headings, visible links, readable contrast, and responsive layouts on smaller screens. If you encounter an accessibility barrier, please let us know so we can address it.
        </p>
        <p className="mt-4 leading-8 text-zinc-700 dark:text-zinc-300">
          Report accessibility issues through the <Link href="/contact" className="font-semibold text-orange-600">Contact page</Link>.
        </p>
      </article>
    </main>
  );
}
