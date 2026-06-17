import React from "react";

export default function Trust() {
  return (
    <section className="bg-white dark:bg-zinc-900 border rounded-lg p-6">
      <h3 className="text-lg font-semibold">Company</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">
        Visha Snacks Pvt Ltd — Makers of Visha Chips.
      </p>

      <div className="mt-4">
        <h4 className="font-medium">Support</h4>
        <div className="text-sm text-zinc-600 dark:text-zinc-300">
          support@codexd.in
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-medium">Product</h4>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Visha Chips — crispy potato chips available in multiple flavors and
          pack sizes.
        </p>
      </div>
    </section>
  );
}
