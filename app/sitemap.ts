import { MetadataRoute } from "next";
import { PROVIDERS } from "./constants";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/provider",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const providerRoutes = PROVIDERS.map((p) => `/provider/${p.slug}`);
  const routes = [...staticRoutes, ...providerRoutes];

  return routes.map((route) => ({
    url: `https://www.codexd.in${route}`,
    lastModified: new Date(),
  }));
}