import AdsterraAd from "./AdsterraAdProps";
import GoogleAd from "./GoogleAd";
import MonetagAd from "./Monetag";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black overflow-auto h-dvh">
      <h1>Google Ad test</h1>
      <GoogleAd adSlot="9716108451" />
      <h1>Monetag Ad Test</h1>
      <MonetagAd
        zoneId="11132976"
        scriptUrl="https://nap5k.com/tag.min.js"
      />{" "}
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
