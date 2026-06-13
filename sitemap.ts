// app/sitemap.ts

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://codexd.in",
      lastModified: new Date(),
    },
    {
      url: "https://codexd.in/about",
      lastModified: new Date(),
    },
    {
      url: "https://codexd.in/contact",
      lastModified: new Date(),
    },
  ];
}