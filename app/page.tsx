import AdsterraAd from "./AdsterraAdProps";
import GoogleAd from "./GoogleAd";
import React from "react";

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
    {children}
  </p>
);

const makeLongArticle = () => {
  return [
    "The sneaker has moved far beyond gym floors and running tracks to become a defining piece of modern wardrobes. Once purely functional, today's sneakers balance comfort, performance, and style — and their evolution reflects broader changes in manufacturing, culture, and sustainability.",
    "Early athletic footwear focused on utility: thick soles, simple uppers, and robust construction. Over decades designers started experimenting with materials and silhouettes, and cultural movements adopted sneakers as symbols of identity — from basketball courts to skate parks to street fashion runways.",
    "Material innovation is now central to the sneaker story. Lightweight foams, engineered knit uppers, and improved cushioning systems make daily wear more comfortable than ever. At the same time, many brands are investing in recycled and plant-based materials to reduce environmental impact without sacrificing performance.",
    "Comfort doesn't have to mean bland design. Contemporary sneakers blend form and function by using color, texture, and proportion to stand out. Minimalist white sneakers remain timeless, while bold, sculpted soles and unexpected material mixes drive seasonal excitement.",
    "Choosing the right sneaker depends on how you'll use it. If you walk long distances, prioritize cushioning and arch support. For casual wear, focus on fit, breathability, and a silhouette that pairs well with your wardrobe. For sports, match the shoe to the activity: court shoes, running shoes, and training shoes have distinct technical features.",
    "Caring for your sneakers extends their life and keeps them looking fresh. Regular cleaning with gentle products, avoiding prolonged exposure to direct sunlight, and rotating pairs so materials can recover from wear will help. For knit uppers, use soft brushes and mild detergent; for leather, consider a protectant and occasional conditioning.",
    "Sustainability is reshaping choices. Look for brands that disclose material sourcing and longevity strategies, offer repair programs, or use recycled packaging. A higher upfront investment in well-made shoes often pays off through years of comfortable wear and fewer replacements.",
    "Sneaker culture continues to expand, with collaborations between designers, artists, and brands creating limited releases and unique collector pieces. But the most enduring sneakers are those that combine comfort, durability, and a look you genuinely enjoy wearing every day.",
    "Whether you're hunting for performance features or a versatile everyday pair, focus on fit first. Try shoes later in the day when feet are slightly swollen, wear the socks you normally use, and walk around the store (or your home) to confirm comfort.",
    "In the end, the ideal sneaker is personal: it supports how you move, complements how you dress, and lasts long enough to become part of your routine. Thoughtful choices — about fit, materials, and care — lead to shoes that feel better and do less harm to the planet over time.",
  ];
};

export default function Home() {
  const paragraphs = React.useMemo(() => makeLongArticle(), []);

  return (
    <div className="min-h-screen w-full bg-zinc-50 dark:bg-black font-sans">
      <div className=" mx-auto p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="sticky top-6">
              <h3 className="mb-4 font-semibold">Left Sidebar</h3>
              <div className="mb-6 flex justify-center">
                <AdsterraAd
                  type="banner"
                  adKey="5e133825f54eeadfbb8f48674b5082f9"
                  width={300}
                  height={600}
                />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <article className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
              <h1 className="text-3xl font-bold mb-2">
                A Very Long Blog Post About Shoes
              </h1>
              <div className="mb-4 text-sm text-zinc-500">
                By Author · June 13, 2026
              </div>

              {/* Top Google Ad */}

              <h1 className="text-center">Google Ad</h1>
              <div className="mb-6 flex justify-center">
                <GoogleAd adSlot="9716108451" />
              </div>
              <AdsterraAd
                type="socialBar"
                scriptUrl="https://pl29719861.effectivecpmnetwork.com/9f/72/f3/9f72f3a6ec53badbb0ed3a07292e6a36.js"
              />
              <h2>Popunder</h2>
              <AdsterraAd
                type="popunder"
                scriptUrl="https://pl29719921.effectivecpmnetwork.com/50/25/5f/50255fb46b688e22cd795c27557df781.js"
              />
              <h2>Smart Link</h2>
              <AdsterraAd
                type="smartlink"
                smartLink="https://www.effectivecpmnetwork.com/qeszqgch20?key=ff7d33ba148511d3e048318ad07adab6"
              >
                Open Offer
              </AdsterraAd>
              {/* Article body */}
              <div className="prose dark:prose-invert max-w-none">
                {paragraphs.map((p, i) => (
                  <Paragraph key={i}>{p}</Paragraph>
                ))}

                <h2 className="mt-6">History of the Sneaker</h2>
                <Paragraph>
                  Fusce convallis, mauris imperdiet gravida bibendum, nisl
                  turpis fermentum urna, at tincidunt sapien nulla vel velit.
                  Integer euismod lacus luctus magna.
                </Paragraph>

                <h3 className="mt-4">Design and Comfort</h3>
                <Paragraph>
                  Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Maecenas malesuada. Praesent congue erat at
                  massa. Sed cursus turpis vitae tortor.
                </Paragraph>
              </div>

              {/* After-content Adsterra ads */}
              <div className="mt-8 space-y-6">
                <div className="flex justify-center">
                  <AdsterraAd
                    type="banner"
                    adKey="5e133825f54eeadfbb8f48674b5082f9"
                    width={728}
                    height={90}
                  />
                </div>

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

          {/* Right Sidebar */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="sticky top-6">
              <h3 className="mb-4 font-semibold">Right Sidebar</h3>
              <div className="mb-6 flex justify-center">
                <AdsterraAd
                  type="banner"
                  adKey="5e133825f54eeadfbb8f48674b5082f9"
                  width={300}
                  height={600}
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import React from "react";
// import { useGetAdPlacementsQuery } from "@/store/action/ad";
// import AdsterraAd from "./AdsterraAdProps";
// import GoogleAd from "./GoogleAd";

// export default function Home() {
//   const { data = [] } = useGetAdPlacementsQuery();

//   const CONTENT = data.filter((p: any) => p.placement?.name === "CONTENT");
//   const LEFT_SIDEBAR = data.filter(
//     (p: any) => p.placement?.name === "LEFT_SIDEBAR",
//   );

//   const RIGHT_SIDEBAR = data.filter(
//     (p: any) => p.placement?.name === "RIGHT_SIDEBAR",
//   );

//   const renderPlacement = (item: any) => {
//     if (!item || !item.adUnit) return null;

//     const providerName = item.adUnit.provider?.name;
//     const cfg = item.adUnit.config || {};
//     const width = cfg.width ?? item.width;
//     const height = cfg.height ?? item.height;
//     const style: React.CSSProperties = {};
//     if (width) style.width = typeof width === "number" ? `${width}px` : width;
//     if (height)
//       style.height = typeof height === "number" ? `${height}px` : height;

//     if (providerName === "Adsterra") {
//       if (cfg.type === "native") {
//         return (
//           <div
//             key={item.id}
//             style={style}
//             className="flex justify-center items-start"
//           >
//             <AdsterraAd
//               type="native"
//               invokeUrl={cfg.invokeUrl}
//               containerId={cfg.containerId}
//             />
//           </div>
//         );
//       }
//       if (cfg.type === "banner") {
//         const adKey = cfg.adKey || cfg.key || item.adUnit.id;
//         const w = cfg.width ?? item.width;
//         const h = cfg.height ?? item.height;
//         console.log(adKey)
//         return (
//           <div
//             key={item.id}
//             style={style}
//             className="flex justify-center items-start"
//           >
//             <AdsterraAd type="banner" adKey={adKey} width={w} height={h} />
//           </div>
//         );
//       }

//       return (
//         <div
//           key={item.id}
//           style={style}
//           className="flex justify-center items-start"
//         >
//           <AdsterraAd
//             type="native"
//             invokeUrl={cfg.invokeUrl}
//             containerId={cfg.containerId}
//           />
//         </div>
//       );
//     }

//     if (
//       providerName === "Google Adsense" ||
//       providerName === "Google AdSense"
//     ) {
//       const slot =
//         cfg.adUnitId || cfg.adSlot || item.adUnitId || String(item.adUnitId);
//       return (
//         <div
//           key={item.id}
//           style={style}
//           className="flex justify-center items-start"
//         >
//           <GoogleAd adSlot={slot} style={style} />
//         </div>
//       );
//     }

//     return null;
//   };

//   return (
//     <div className="min-h-screen w-full bg-zinc-50 dark:bg-black font-sans">
//       <div className=" mx-auto grid items-start gap-6 p-6">
//         <aside className="col-start-1">
//           <div className="sticky top-6">
//             <h3 className="mb-2 font-semibold">Left Sidebar</h3>
//             {LEFT_SIDEBAR.length > 0 ? (
//               LEFT_SIDEBAR.map(renderPlacement)
//             ) : (
//               <div>No left ad</div>
//             )}
//           </div>
//         </aside>

//         <main className="col-start-2">
//           <h1 className="mb-4 text-xl font-bold">Main Content</h1>

//           <section className="mb-6">
//             <h2 className="mb-2">CONTENT Placement</h2>
//             {CONTENT.length > 0 ? (
//               CONTENT.map(renderPlacement)
//             ) : (
//               <div>No content ad</div>
//             )}
//           </section>
//         </main>

//         <aside className="col-start-3">
//           <div className="sticky top-6">
//             <h3 className="mb-2 font-semibold">Right Sidebar</h3>
//             {RIGHT_SIDEBAR.length > 0 ? (
//               RIGHT_SIDEBAR.map(renderPlacement)
//             ) : (
//               <div>No right ad</div>
//             )}
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }
