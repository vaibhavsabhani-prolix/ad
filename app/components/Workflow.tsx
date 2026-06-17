import React from "react";

export default function Workflow({
  steps,
}: {
  steps: Array<{ title: string; subtitle?: string }>;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {steps.map((s, i) => (
        <div
          key={i}
          className="p-4 bg-white dark:bg-zinc-800 border rounded-lg"
        >
          <div className="text-sm font-semibold text-sky-600">Step {i + 1}</div>
          <div className="mt-2 font-medium text-zinc-900 dark:text-zinc-100">
            {s.title}
          </div>
          {s.subtitle ? (
            <div className="text-sm text-zinc-500 mt-1">{s.subtitle}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
