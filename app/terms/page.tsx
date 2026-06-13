import React from "react";
import AdsterraAd from "../../app/AdsterraAdProps";
import GoogleAd from "../../app/GoogleAd";

export default function TermsPage() {
  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Terms of Service (Demo)</h1>
      <div className="mb-6">
        <GoogleAd adSlot="9716108451" />
      </div>

      <p className="mb-4 text-zinc-700 dark:text-zinc-300">
        This is placeholder terms text for demonstration. Replace with your
        actual terms when ready.
      </p>

      <div className="mt-6">
        <AdsterraAd
          type="banner"
          adKey="5e133825f54eeadfbb8f48674b5082f9"
          width={728}
          height={90}
        />
      </div>
    </div>
  );
}
