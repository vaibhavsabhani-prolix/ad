export const SITE_URL = "https://codexd.in";
export const TITLE = "Visha Chips";
export const DESCRIPTION =
  "Visha Chips — crispy, delicious potato chips made with natural ingredients. Available in multiple flavors and pack sizes for retail and wholesale.";

export type Provider = {
  slug: string;
  name: string;
  description: string;
  image: string;
  keywords?: string[];
};

export const PROVIDERS: Provider[] = [
  {
    slug: "google-adsense",
    name: "Google AdSense",
    description: "Google AdSense advertising provider",
    image: "/providers/google-adsense.png",
    keywords: ["adsense", "google ads", "programmatic"],
  },
  {
    slug: "adsterra",
    name: "Adsterra",
    description: "Adsterra advertising network",
    image: "/providers/adsterra.png",
    keywords: ["adsterra", "banner ads", "native ads"],
  },
  {
    slug: "monetag",
    name: "Monetag",
    description: "Monetag ad provider",
    image: "/providers/monetag.png",
    keywords: ["monetag", "ad network"],
  },
];
