import GoogleAd from "./GoogleAd";
import MonetagAd from "./Monetag";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Google Ad test</h1>
      <GoogleAd adSlot="9716108451" />
      <h1>Monetag Ad Test</h1>
      <MonetagAd
        zoneId="11132976"
        scriptUrl="https://nap5k.com/tag.min.js"
      />{" "}
    </div>
  );
}
