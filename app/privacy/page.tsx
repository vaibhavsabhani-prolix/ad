import React from "react";
import AdsterraAd from "../../app/AdsterraAdProps";
import GoogleAd from "../../app/GoogleAd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy of Ad Provider Manager to understand how user information is collected, stored, and protected.",
  alternates: {
    canonical: "https://codexd.in/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy (Demo)</h1>
      <div className="mb-6">
        <GoogleAd adSlot="9716108451" />
      </div>

      <p className="mb-4 text-zinc-700 dark:text-zinc-300">
        This is placeholder privacy text for demonstration. Replace with your
        real policy when ready.
      </p>

      <div className="mt-6">
        <AdsterraAd
          type="native"
          invokeUrl="https://pl29719922.effectivecpmnetwork.com/0acbbd07942e79258bf852d7d92fc5b8/invoke.js"
          containerId="container-privacy"
        />
      </div>
    </div>
  );
}
