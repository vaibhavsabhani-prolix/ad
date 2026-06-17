import React from "react";

export default function FAQ({
  items,
}: {
  items: Array<{ q: string; a: string }>;
}) {
  return (
    <div className="space-y-4">
      {items.map((it, idx) => (
        <details
          key={idx}
          className="bg-white dark:bg-zinc-900 border rounded-lg p-4"
        >
          <summary className="font-semibold">{it.q}</summary>
          <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            {it.a}
          </div>
        </details>
      ))}
    </div>
  );
}
