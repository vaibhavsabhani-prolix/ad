import { MetadataRoute } from "next";
import { PROVIDERS } from "./constants";
import { BLOG_POSTS } from "./blog/content";

const staticRoutes = [
  "",
  "/blog",
  "/about",
  "/contact",
  "/disclaimer",
  "/shipping-policy",
  "/refund-policy",
  "/cookie-policy",
  "/accessibility",
  "/privacy",
  "/terms",
  "/provider",
  "/flavors",
  "/products",
  "/locations",
  "/retail-distribution",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const providerRoutes = PROVIDERS.map((p) => `/provider/${p.slug}`);
  const blogRoutes = BLOG_POSTS.map((post) => `/blog/${post.slug}`);
  const routes = [...staticRoutes, ...providerRoutes, ...blogRoutes];

  return routes.map((route) => ({
    url: `https://www.codexd.in${route}`,
    lastModified: new Date(),
  }));
}
