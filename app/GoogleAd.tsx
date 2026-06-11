"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface GoogleAdProps {
  /** Your AdSense client ID (e.g. "ca-pub-1361802956304203") */
  adClient?: string;
  /** The ad slot ID (e.g. "5603405377") */
  adSlot: string;
  /** Ad format – defaults to "auto" */
  adFormat?: string;
  /** Enable full-width responsive – defaults to true */
  fullWidthResponsive?: boolean;
  /** Optional inline style overrides */
  style?: React.CSSProperties;
  /** Optional className for the wrapper div */
  className?: string;
}

/**
 * Reusable Google AdSense ad component.
 *
 * Usage:
 * ```tsx
 * <GoogleAd adSlot="5603405377" />
 * ```
 */
export default function GoogleAd({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  style,
  className,
}: GoogleAdProps) {
  const adRef = useRef<any | null>(null);
  const isPushed = useRef(false);

  useEffect(() => {
    if (isPushed.current) return;

    let attempts = 0;
    const maxAttempts = 6; // ~3s total if interval 500ms

    const tryPush = () => {
      const el = adRef.current;
      if (!el) {
        // Wait for the ins element to be attached
        if (attempts++ < maxAttempts) {
          setTimeout(tryPush, 500);
        }
        return;
      }

      try {
        // Wait for the Google script to expose `adsbygoogle` then push
        if ((window as any).adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          isPushed.current = true;
        } else if (attempts++ < maxAttempts) {
          setTimeout(tryPush, 500);
        }
      } catch (err) {
        console.error("AdSense push error:", err);
      }
    };

    tryPush();

    // no cleanup needed other than preventing repeated pushes
  }, []);

  return (
    <div
      className={className}
      style={{
        width: "100%",
        minHeight: "280px",
        border: "1px solid red",
      }}
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
          minHeight: "250px",
        }}
        data-ad-client="ca-pub-1361802956304203"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}
