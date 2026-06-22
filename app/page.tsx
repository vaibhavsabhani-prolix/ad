import { Metadata } from "next";
import AdsterraAd from "./AdsterraAdProps";
import GoogleAd from "./GoogleAd";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visha Chips — Crispy Potato Chips & Snacks",
  description:
    "Visha Chips makes crispy, flavorful potato chips using natural ingredients. Available in multiple flavors and pack sizes for retail and wholesale.",
  alternates: {
    canonical: "https://www.codexd.in",
  },
  openGraph: {
    title: "Visha Chips — Crispy Potato Chips",
    description: "Handcrafted potato chips in a variety of tasty flavors.",
    url: "https://www.codexd.in",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visha Chips — Crispy Potato Chips",
    description: "Handcrafted potato chips in a variety of tasty flavors.",
  },
};

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
    {children}
  </p>
);

function makeLongContent() {
  return [
    "Visha Chips is built around a simple idea that still requires a lot of discipline: make a snack people can trust, keep the product easy to understand, and make the buying decision practical for households, retailers, and wholesale partners. The website is designed to answer real questions about flavor, storage, distribution, and product choice instead of relying on slogans alone.",
    "Our company introduction starts with the product itself. Visha Chips makes crispy potato chips in a small set of focused flavors so that the quality stays consistent and the choices remain clear. That approach matters because snack customers usually want a product that is familiar enough to trust but distinctive enough to remember after the first purchase.",
    "The brand story behind Visha Chips is tied to food made with care. We believe chips should taste like an intentional product, not a generic one. That means every part of the experience matters, from how potatoes are selected and how seasoning is balanced to how the bags are sealed and how the shelves are stocked in stores.",
    "The manufacturing process is where those promises become real. Potatoes are inspected, cleaned, sliced, cooked, seasoned, and packed in a way that protects texture and flavor. The process is only successful when the chips stay crisp, the seasoning is even, and the packaging keeps the product stable during storage and transport.",
    "Ingredient quality is one of the strongest signals of product value. Visha Chips emphasizes clear ingredients because customers should know what they are eating and retailers should know what they are stocking. Simple ingredient statements are easier to trust, easier to compare, and easier to explain to family members or store buyers.",
    "Flavor development is another part of the story that deserves more than a sentence. Classic salted, masala, tomato, and chili flavors each serve different use cases. Some flavors are better for everyday snacking, while others are better for parties, lunch boxes, or retail displays that need a stronger shelf presence. You can compare the full range on the <a href='/flavors'>Flavors page</a>.",
    "Quality assurance is what keeps the product from drifting as the business grows. Batch checks, packaging checks, and shelf-life discipline matter because a snack business only builds trust if the customer gets a good bag on the first purchase and the tenth purchase alike. That consistency is a major reason the site includes more than one trust page and several long-form guides.",
    "Packaging standards are part of the value proposition, not a cosmetic detail. The bag or box has to preserve crunch, protect against moisture, and survive the trip from production to retail shelf to home kitchen. Different sizes support different buyer needs, so the <a href='/products'>Products page</a> explains which packs fit single servings, sharing, parties, and wholesale supply.",
    "Retail distribution is another topic that matters to customers even when they do not see it directly. If stock is not present where people shop, the product becomes difficult to recommend or reorder. That is why the <a href='/locations'>Locations page</a> and the distribution content are part of the site architecture rather than an afterthought.",
    "Wholesale services are available for stores, distributors, and event buyers who need predictable supply and clear contact channels. A good wholesale relationship depends on communication, packaging consistency, and realistic delivery planning. The <a href='/contact'>Contact page</a> is the right place to begin if you are looking for bulk ordering or a retail partnership.",
    "Frequently asked questions are important for a site like this because many AdSense reviews look at whether the page actually resolves user intent. If a visitor wants to know about ingredients, storage, flavor availability, or distribution, they should not have to hunt through a shallow page. They should see the answer immediately and be able to move deeper into the site if needed.",
    "Customer trust is also built through the policy pages and support information. The <a href='/privacy'>Privacy Policy</a>, <a href='/terms'>Terms</a>, <a href='/cookie-policy'>Cookie Policy</a>, <a href='/shipping-policy'>Shipping Policy</a>, <a href='/refund-policy'>Refund Policy</a>, <a href='/accessibility'>Accessibility</a>, and <a href='/disclaimer'>Disclaimer</a> pages all help show that the site is maintained with normal business expectations, not just search traffic in mind.",
    "If you want editorial context instead of product-only browsing, the <a href='/blog'>Blog</a> contains long-form articles about chip production, seasoning, storage, farming, label reading, and snack business planning. Those articles are designed to support both users and search engines with useful, original information.",
    "The short version is that Visha Chips is trying to be useful at every layer: clear for shoppers, practical for retailers, and informative enough for readers who want to understand how snacks are actually made. That is the kind of depth that gives a site more staying power than a simple product brochure.",
  ];
}

export default function Home() {
  const paragraphs = React.useMemo(() => makeLongContent(), []);

  return (
    <div className="w-full bg-zinc-50 dark:bg-black font-sans">
      <main className="flex-1">
        <article className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
          <h1 className="text-3xl font-bold mb-2">Visha Chips</h1>

          <div className="mb-4 text-sm text-zinc-500">
            Crispy potato chips made with care — available in multiple
            flavors
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.codexd.in",
                  },
                ],
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What flavors does Visha Chips offer?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Our current lineup includes Salted, Masala, Tangy Tomato, and Spicy Chili. We rotate seasonal flavors occasionally.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Where can I buy Visha Chips?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Find our store locations on the Locations page or order online from selected retailers. Contact us for wholesale inquiries.",
                    },
                  },
                ],
              }),
            }}
          />
          <div className="mb-6 flex justify-center">
            <GoogleAd adSlot="9716108451" />
          </div>

          <div className="prose dark:prose-invert max-w-none">
            {paragraphs.map((p, i) => (
              <Paragraph key={i}>{p}</Paragraph>
            ))}

            <h2 className="mt-8">Company Introduction</h2>
            <Paragraph>
              Visha Chips is a snack brand focused on crisp texture, clean flavor design, and practical pack formats. The goal is to make potato chips that are easy to understand at a glance and enjoyable across different use cases, from lunch boxes to family tables and retail shelves.
            </Paragraph>

            <h2 className="mt-8">Brand Story</h2>
            <Paragraph>
              The brand exists to show that a simple snack can still feel deliberate. We care about the details most buyers notice first: the crunch, the balance of seasoning, the freshness of the bag, and the clarity of the information on the site and the package.
            </Paragraph>
            <Paragraph>
              That story is why the site now includes longer editorial pages and a full <Link href="/blog" className="text-sky-600">blog section</Link>. The more context we provide, the easier it is for customers and search engines to understand what the brand stands for.
            </Paragraph>

            <h2 className="mt-8">Manufacturing Process</h2>
            <Paragraph>
              Quality starts with the potato and continues through washing, slicing, frying, seasoning, and packing. Each stage can change the final product, so the manufacturing process needs checks that keep taste and texture consistent from one batch to the next.
            </Paragraph>
            <Paragraph>
              When that process is done well, customers notice a cleaner finish, a more stable crunch, and more predictable flavor. That is one reason the blog includes a full guide on <Link href="/blog/how-potato-chips-are-made" className="text-sky-600">how potato chips are made</Link>.
            </Paragraph>

            <h2 className="mt-8">Ingredient Quality</h2>
            <Paragraph>
              Ingredient quality is what gives the brand credibility. Potatoes should be selected carefully, the oil and seasoning should support the flavor rather than hide it, and the final ingredient statement should stay understandable for ordinary shoppers and store buyers.
            </Paragraph>

            <h2 className="mt-8">Flavor Development</h2>
            <Paragraph>
              Visha Chips keeps the flavor range focused on familiar, useful choices. Salted, masala, tomato, and chili each answer a different snacking need, which makes the line easier to shop and easier to explain on shelf. See the <Link href="/flavors" className="text-sky-600">Flavors page</Link> for the full tasting profile.
            </Paragraph>

            <h2 className="mt-8">Quality Assurance</h2>
            <Paragraph>
              Quality assurance is the part of the business that keeps the product stable. It covers batch checks, sealing checks, packaging review, and basic freshness discipline. The point is to keep the product experience the same whether a customer buys one pack or a full case.
            </Paragraph>

            <h2 className="mt-8">Packaging Standards</h2>
            <Paragraph>
              Packaging protects the snack and shapes how it is used. Single-serve packs help with lunches and portion control, family packs support sharing, and larger formats make sense for events or wholesale supply. The right format depends on the customer, not just the factory.
            </Paragraph>

            <h2 className="mt-8">Retail Distribution</h2>
            <Paragraph>
              Distribution determines whether the product is easy to find in the places people actually shop. That is why the <Link href="/locations" className="text-sky-600">Locations page</Link> and the retail distribution content are part of the broader content system instead of a small sidebar note.
            </Paragraph>

            <h2 className="mt-8">Wholesale Services</h2>
            <Paragraph>
              Retailers, distributors, and event buyers can use the contact details on the site to discuss order volumes, pack sizes, and delivery regions. Clear wholesale communication matters because snacks move quickly and stores need reliable replenishment.
            </Paragraph>

            <h2 className="mt-8">Frequently Asked Questions</h2>
            <h3>What flavors are available?</h3>
            <Paragraph>
              The current flavor range includes salted, masala, tomato, and chili styles. The exact descriptions are available on the <Link href="/flavors" className="text-sky-600">Flavors page</Link>.
            </Paragraph>

            <h3>Where can I buy Visha Chips?</h3>
            <Paragraph>
              Start with the <Link href="/locations" className="text-sky-600">Locations page</Link> for retail availability and use the <Link href="/contact" className="text-sky-600">Contact page</Link> for wholesale or distribution questions.
            </Paragraph>

            <h3>Is there more editorial content on the site?</h3>
            <Paragraph>
              Yes. The <Link href="/blog" className="text-sky-600">Blog</Link> covers chip-making, storage, farming, label reading, and snack planning in a much deeper way.
            </Paragraph>

            <h2 className="mt-8">Customer Trust</h2>
            <Paragraph>
              Trust is earned by making the site easy to use and the product easy to understand. The policy pages, contact channels, and detailed articles all exist to help visitors get an answer quickly and leave with more confidence than they had when they arrived.
            </Paragraph>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex justify-center">
              <AdsterraAd
                type="native"
                invokeUrl="https://pl29719922.effectivecpmnetwork.com/0acbbd07942e79258bf852d7d92fc5b8/invoke.js"
                containerId="container-0acbbd07942e79258bf852d7d92fc5b8"
              />
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
