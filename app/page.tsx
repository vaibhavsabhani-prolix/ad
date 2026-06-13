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

import AdsterraAd from "./AdsterraAdProps";
import GoogleAd from "./GoogleAd";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black overflow-auto h-dvh">
      <h1>Google Ad test</h1>
      <GoogleAd adSlot="9716108451" />
      <h1>Monetag Ad Test</h1>
      <h1>ad stera</h1>
      <AdsterraAd
        type="banner"
        adKey="5e133825f54eeadfbb8f48674b5082f9"
        width={300}
        height={250}
      />
      <h2>native banner</h2>
      <AdsterraAd
        type="native"
        invokeUrl="https://pl29719922.effectivecpmnetwork.com/0acbbd07942e79258bf852d7d92fc5b8/invoke.js"
        containerId="container-0acbbd07942e79258bf852d7d92fc5b8"
      />
      <h2>Social Bar</h2>
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
    </div>
  );
}
