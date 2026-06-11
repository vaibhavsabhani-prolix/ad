import Image from "next/image";
import GoogleAd from "./GoogleAd";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Google Ad test</h1>
      <GoogleAd adSlot="9716108451"/>
    </div>
  );
}
