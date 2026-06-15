import React from "react";
import AdsterraAd from "../../app/AdsterraAdProps";
import GoogleAd from "../../app/GoogleAd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ad Provider Manager for support, questions, feedback, or business inquiries.",
  alternates: {
    canonical: "https://codexd.in/contact",
  },
};

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 text-zinc-700 dark:text-zinc-300">{children}</p>
);

export default function ContactPage() {
  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <div className="mb-6">
        <GoogleAd adSlot="9716108451" />
      </div>

      <Paragraph>
        For inquiries, please use the contact form (not implemented in this
        demo). This page demonstrates ad placement alongside content.
      </Paragraph>

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
