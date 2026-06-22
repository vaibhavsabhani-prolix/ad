import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "../constants";

export const metadata: Metadata = {
  title: "Disclaimer | Visha Chips",
  description: "Disclaimer page for Visha Chips website content and product information.",
  alternates: { canonical: `${SITE_URL}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-10 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <article className="mx-auto max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
        <h1 className="text-4xl font-bold tracking-tight">Disclaimer</h1>
        <p className="mt-4 leading-8 text-zinc-700 dark:text-zinc-300">
          The content on this website is provided for general informational purposes only. We aim to keep product, ingredient, and brand information accurate and useful, but details may change as products, packaging, and distribution channels evolve.
        </p>
        <p className="mt-4 leading-8 text-zinc-700 dark:text-zinc-300">
          If you are comparing snacks for dietary, allergy, or regulatory reasons, always check the package label and contact our team directly before making purchase or resale decisions. You can reach us through the <Link href="/contact" className="font-semibold text-orange-600">Contact page</Link>.
        </p>
      </article>
    </main>
  );
}
