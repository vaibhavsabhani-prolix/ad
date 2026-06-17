import React from "react";

export default function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="p-4 bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-800 rounded-lg shadow-sm">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-900">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
            {title}
          </h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
