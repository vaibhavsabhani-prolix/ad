"use client";

import { useEffect } from "react";

export default function MonetagAd({
  zoneId,
  scriptUrl,
}: {
  zoneId: string;
  scriptUrl: string;
}) {
  useEffect(() => {
    // Avoid injecting the same script multiple times
    const selector = `script[src="${scriptUrl}"][data-zone="${zoneId}"]`;
    if (!document.querySelector(selector)) {
      const script = document.createElement("script");

      script.src = scriptUrl;
      script.async = true;
      script.dataset.zone = zoneId;

      document.body.appendChild(script);

      return () => {
        // cleanup only the script we added
        const s = document.querySelector(selector);
        if (s && s.parentNode) s.parentNode.removeChild(s);
      };
    }
  }, [zoneId, scriptUrl]);

  // The Monetag script expects a container element with the zone data
  // Render a div with a predictable id and the data-zone attribute so
  // the injected script can find and fill the ad.
  const containerId = `monetag-zone-${zoneId}`;
  return <div id={containerId} data-zone={zoneId} className="monetag-ad" />;
}
