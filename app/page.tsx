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
    "Ad Provider Manager is a centralized platform that helps website owners manage multiple advertising networks from a single dashboard. Publishers can organize ad placements, monitor performance, and streamline monetization strategies without repeatedly modifying website code.",

    "Modern publishers often work with several advertising providers including Google AdSense, Adsterra, Monetag, and other display advertising networks. Managing all of them efficiently can improve both user experience and advertising revenue.",

    "Our platform allows publishers to create, organize, and manage ad placements across websites. By keeping advertising configurations centralized, website owners can save time and reduce implementation errors.",

    "Google AdSense remains one of the most popular monetization solutions for content creators and publishers. Proper ad placement, responsive layouts, and policy-compliant implementations help maximize long-term revenue potential.",

    "Adsterra provides additional monetization opportunities through banner advertisements, native ads, social bars, direct links, and popunder campaigns. Combining multiple advertising networks can help diversify revenue sources.",

    "Website monetization should always prioritize user experience. Excessive advertisements can negatively affect engagement, while strategically placed ads can generate revenue without disrupting visitors.",

    "Search engine optimization and advertising performance often work together. Fast-loading websites, mobile-friendly layouts, and valuable content help improve both organic visibility and advertising results.",

    "Publishers should regularly review ad placements, monitor website performance metrics, and test different advertising formats to identify the most effective monetization strategy for their audience.",

    "A centralized ad management system simplifies scaling. Whether managing a single blog or multiple websites, organized advertising operations make growth easier and more sustainable.",

    "Ad Provider Manager is designed to help publishers focus on creating quality content while maintaining efficient control over advertising providers, placements, and monetization strategies.",
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
                Ad Provider Manager – Manage Multiple Ad Networks from One
                Dashboard
              </h1>

              <div className="mb-4 text-sm text-zinc-500">
                By Ad Provider Manager Team · June 2026
              </div>

              {/* Top Google Ad */}

              <p className="text-center">Google Ad</p>
              <div className="mb-6 flex justify-center">
                <GoogleAd adSlot="9716108451" />
              </div>
              <AdsterraAd
                type="socialBar"
                scriptUrl="https://pl29719861.effectivecpmnetwork.com/9f/72/f3/9f72f3a6ec53badbb0ed3a07292e6a36.js"
              />
              <AdsterraAd
                type="popunder"
                scriptUrl="https://pl29719921.effectivecpmnetwork.com/50/25/5f/50255fb46b688e22cd795c27557df781.js"
              />
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

                <h2 className="mt-6">Supported Advertising Networks</h2>

                <Paragraph>
                  Ad Provider Manager supports multiple advertising providers
                  including Google AdSense, Adsterra, and other display
                  advertising platforms. Publishers can organize ad units and
                  placements from a single interface.
                </Paragraph>

                <h3 className="mt-4">Benefits for Publishers</h3>

                <Paragraph>
                  Centralized ad management helps reduce configuration errors,
                  improve website organization, and simplify monetization
                  workflows. Publishers can focus on creating quality content
                  while efficiently managing advertising operations.
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
