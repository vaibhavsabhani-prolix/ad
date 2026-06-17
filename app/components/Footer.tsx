import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Link href="/" className="font-bold text-lg">
            Visha Chips
          </Link>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">
            Crispy, flavorful potato chips — available in multiple flavors.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Product</h4>
          <nav className="mt-2 flex flex-col gap-1">
            <Link
              href="/retail-distribution"
              className="text-sm text-zinc-700 dark:text-zinc-300"
            >
              Retail & Distribution
            </Link>
            <Link
              href="/locations"
              className="text-sm text-zinc-700 dark:text-zinc-300"
            >
              Locations
            </Link>
            <Link
              href="/provider"
              className="text-sm text-zinc-700 dark:text-zinc-300"
            >
              Providers
            </Link>
          </nav>
        </div>

        <div>
          <h4 className="font-semibold">Company</h4>
          <nav className="mt-2 flex flex-col gap-1">
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
            <a
              href="mailto:support@codexd.in"
              className="text-sm text-zinc-700 dark:text-zinc-300"
            >
              support@codexd.in
            </a>
          </nav>
        </div>
      </div>

      <div className="border-t border-zinc-200 dark:border-zinc-800 py-4">
        <div className="max-w-7xl mx-auto px-4 text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Visha Chips — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
