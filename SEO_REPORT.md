# SEO Report — Ad Provider Manager

Generated: 2026-06-15

This document summarizes the SEO work performed in the repository and provides a comprehensive list of SEO use cases with concrete examples you can copy into your pages.

## Summary of changes applied

- Removed global canonical from layout metadata so each page declares its own canonical.
- Added unique `title`, `description`, and `canonical` to Home, About, Contact, Privacy, and Terms pages.
- Rewrote Home (1000+ words), About (600+ words), Privacy (800+ words), Contact (300+ words) and Terms content with SEO-friendly structure and internal links.
- Kept Organization and WebSite JSON-LD in the root layout; added Breadcrumb JSON-LD to main pages.
- Reduced intrusive ad placements in the article path; recommended safer placements for AdSense and Adsterra.

Files changed (high level):

- app/layout.tsx
- app/page.tsx
- app/about/page.tsx
- app/contact/page.tsx
- app/privacy/page.tsx
- app/terms/page.tsx

## SEO Use Cases & Examples

Each use case below describes a common SEO need and provides a ready example (HTML/JSON-LD/meta) you can use.

1. Canonical URLs (per-page canonical)

- Use case: Prevent duplicate-content penalties and prefer a single URL for indexing.
- Example (head):

<link rel="canonical" href="https://www.codexd.in/about" />

- Implementation note: For Next.js App Router pages, set `alternates.canonical` or include a `<link rel="canonical"/>` in the page component's head. We added `alternates: { canonical: 'https://www.codexd.in/about' }` to page metadata.

2. Title Tag and Meta Description

- Use case: Unique titles and descriptions improve CTR and reduce duplicate snippets.
- Example:

<title>About Us — Ad Provider Manager</title>
<meta name="description" content="About Ad Provider Manager — what we build, supported networks, and benefits for publishers." />

- Implementation note: Keep titles ~50-60 chars and descriptions ~120-160 chars. Put primary keyword near the start.

3. OpenGraph (Facebook, LinkedIn) & Twitter Card

- Use case: Improve how links appear when shared on social channels.
- Example meta tags:

<meta property="og:title" content="Ad Provider Manager" />
<meta property="og:description" content="Centralized ad management for publishers: AdSense, Adsterra, and more." />
<meta property="og:image" content="https://www.codexd.in/logo.png" />
<meta property="og:url" content="https://www.codexd.in" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Ad Provider Manager" />

- Implementation note: We set global OpenGraph in `app/layout.tsx`; consider page-specific OG images & descriptions for higher engagement.

4. Organization & WebSite Structured Data (JSON-LD)

- Use case: Tell search engines about your brand entity and homepage relationship.
- Example (already in layout):

<script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ad Provider Manager",
  "url": "https://www.codexd.in",
  "logo": "https://www.codexd.in/logo.png"
}</script>

<script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ad Provider Manager",
  "url": "https://www.codexd.in"
}</script>

5. BreadcrumbList Structured Data

- Use case: Improve site navigation display in search results and help crawlers understand hierarchy.
- Example (page-level breadcrumb):

<script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"Home","item":"https://www.codexd.in"},
    {"@type":"ListItem","position":2,"name":"About","item":"https://www.codexd.in/about"}
  ]
}</script>

- Implementation note: We added Breadcrumb JSON-LD to Home, About, Contact, Privacy, and Terms pages.

6. Internal Linking Structure

- Use case: Crawlability and link equity distribution between core pages.
- Example: add contextual links from home to About and Contact within lead paragraphs and from About to Privacy/Terms.

- Implementation note: We added header links and contextual links in content. Ensure all internal links are crawlable (client-side navigation is fine with Next.js, but also include anchor tags or server-rendered links for critical pages).

7. H1 and Heading Hierarchy

- Use case: Only one H1 per page; use H2/H3 for subsections for both accessibility and SEO.
- Example:

<h1>Ad Provider Manager</h1>
<h2>Supported Advertising Networks</h2>
<h3>Google AdSense</h3>

- Implementation note: We ensured one H1 on each page.

8. Robots & Sitemap

- Use case: Tell crawlers what to index and provide a sitemap for faster discovery.
- Example `robots.txt`:

User-agent: \*
Allow: /
Sitemap: https://www.codexd.in/sitemap.xml

- Example sitemap entry:

<url>
  <loc>https://www.codexd.in/</loc>
  <lastmod>2026-06-15</lastmod>
  <priority>1.00</priority>
</url>

- Implementation note: Add or regenerate `sitemap.xml` and submit to Google Search Console.

9. hreflang (multi-language)

- Use case: Target different language/region variants.
- Example:

<link rel="alternate" href="https://www.codexd.in/" hreflang="en" />
<link rel="alternate" href="https://www.codexd.in/es/" hreflang="es" />

10. Mobile-first & Core Web Vitals

- Use case: Fast loading, minimal CLS/TTFB, and responsive layout to improve rankings.
- Example checks: run Lighthouse on the page and target LCP < 2.5s, CLS < 0.1.

11. Schema for Articles / FAQ (if applicable)

- Use case: Rich results for articles or FAQ can increase visibility.
- Example FAQ JSON-LD snippet:

<script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Is Ad Provider Manager compatible with AdSense?",
    "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide AdSense-friendly configurations and guidance." }
  }]
}</script>

12. Structured data validation

- Use case: Ensure structured data is valid to avoid manual actions or errors in Google Search Console.
- Recommendation: Use Google Rich Results Test and the Structured Data Testing tool for each page after publishing.

13. Privacy & Consent (critical for programmatic ads)

- Use case: GDPR and other regulations require consent before serving personalized ads.
- Example: integrate a CMP and block personalized ad scripts until consent given.

14. AdSense & Adsterra readiness (placement best practices)

- Use case: Prepare for AdSense approval and keep policy compliance.
- Recommendations included in project changes:
  - Avoid popunder/smartlink ads in the main article path (we removed such items from the article body).
  - Prefer one above-the-fold ad on mobile and a limited number of non-intrusive side banners on desktop.
  - Avoid deceptive placements (ads that look like navigation) and ensure close controls for overlays.
  - Implement CMP consent flows for personalized ads.

## Actionable next steps (short list)

- Generate and commit `sitemap.xml` and ensure `robots.txt` includes sitemap location.
- Run Lighthouse and fix Core Web Vitals bottlenecks caused by ad scripts.
- Validate JSON-LD for each page using the Rich Results Test.
- Submit sitemap to Google Search Console and request indexing for key pages.
- Consider adding page-specific OpenGraph images for top-level pages.

## Quick troubleshooting & validation commands

Run a local build and test:

```bash
npm install
npm run build
npm run start
```

Use these external checks:

- Google Search Console: submit sitemap and inspect pages
- Google Rich Results Test: https://search.google.com/test/rich-results
- Lighthouse (Chrome DevTools)

---

If you want, I can:

- generate `sitemap.xml` and `robots.txt` and commit them,
- run a Lighthouse audit and share the report,
- validate each page's structured data and fix warnings.

Would you like me to add `sitemap.xml` and `robots.txt` now?
