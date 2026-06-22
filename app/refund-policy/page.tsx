import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "../constants";

export const metadata: Metadata = {
  title: "Refund Policy | Visha Chips",
  description: "Refund and replacement policy for Visha Chips website purchases and order issues.",
  alternates: { canonical: `${SITE_URL}/refund-policy` },
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-10 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <article className="mx-auto max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
        <h1 className="text-4xl font-bold tracking-tight">Refund Policy</h1>
        <p className="mt-4 leading-8 text-zinc-700 dark:text-zinc-300">
          If a product arrives damaged, incorrect, or unusable, please contact us as soon as possible with order details and photos so we can review the case. Because snack products are perishable, refunds and replacements are handled on a case-by-case basis.
        </p>
        <p className="mt-4 leading-8 text-zinc-700 dark:text-zinc-300">
          For support, use the <Link href="/contact" className="font-semibold text-orange-600">Contact page</Link> so the request can be routed to the correct team.
        </p>
      </article>
    </main>
  );
}
