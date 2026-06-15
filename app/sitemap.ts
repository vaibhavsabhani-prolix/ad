import { MetadataRoute } from "next";

const routes = ["", "/about", "/contact", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://codexd.in${route}`,
    lastModified: new Date(),
  }));
}