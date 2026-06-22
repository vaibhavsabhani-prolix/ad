import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "../constants";

export const metadata: Metadata = {
  title: "Shipping Policy | Visha Chips",
  description: "Shipping and fulfillment information for Visha Chips retail and wholesale orders.",
  alternates: { canonical: `${SITE_URL}/shipping-policy` },
};

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-10 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <article className="mx-auto max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
        <h1 className="text-4xl font-bold tracking-tight">Shipping Policy</h1>
        <p className="mt-4 leading-8 text-zinc-700 dark:text-zinc-300">
          Visha Chips products are supplied through retail partners and wholesale channels. Delivery times, pack availability, and minimum order quantities can vary by region and by distribution partner.
        </p>
        <p className="mt-4 leading-8 text-zinc-700 dark:text-zinc-300">
          For retailer onboarding, bulk orders, and regional delivery questions, review the <Link href="/locations" className="font-semibold text-orange-600">Locations page</Link> and contact our sales team for the latest terms.
        </p>
      </article>
    </main>
  );
}
