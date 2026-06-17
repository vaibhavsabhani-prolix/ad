import React from "react";

export default function ScreenshotPlaceholder({ label }: { label?: string }) {
  return (
    <div className="border-2 border-dashed border-zinc-200 dark:border-zinc-700 rounded-lg p-6 flex items-center justify-center bg-white dark:bg-zinc-900">
      <div className="text-center text-zinc-500 dark:text-zinc-400">
        {label ?? "Screenshot Placeholder"}
      </div>
    </div>
  );
}
