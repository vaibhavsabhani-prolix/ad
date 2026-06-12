"use client";

import { useEffect, useRef } from "react";

interface AdsterraAdProps {
  type: "banner" | "native" | "socialBar" | "popunder" | "smartlink";

  scriptUrl?: string;

  invokeUrl?: string;
  containerId?: string;

  adKey?: string;
  width?: number;
  height?: number;

  smartLink?: string;
  children?: React.ReactNode;
}

export default function AdsterraAd(props: AdsterraAdProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.type === "smartlink") return;

    if (props.type === "socialBar" || props.type === "popunder") {
      const script = document.createElement("script");

      script.src = props.scriptUrl!;
      script.async = true;

      document.body.appendChild(script);

      return () => {
        script.remove();
      };
    }

    if (props.type === "native") {
      const script = document.createElement("script");

      script.src = props.invokeUrl!;
      script.async = true;
      script.setAttribute("data-cfasync", "false");

      document.body.appendChild(script);

      return () => {
        script.remove();
      };
    }

    if (props.type === "banner" && ref.current) {
      const optionsScript = document.createElement("script");

      optionsScript.innerHTML = `
        atOptions = {
          key: '${props.adKey}',
          format: 'iframe',
          height: ${props.height},
          width: ${props.width},
          params: {}
        };
      `;

      const invokeScript = document.createElement("script");

      invokeScript.src = `https://www.highperformanceformat.com/${props.adKey}/invoke.js`;
      invokeScript.async = true;

      ref.current.appendChild(optionsScript);
      ref.current.appendChild(invokeScript);

      return () => {
        ref.current?.replaceChildren();
      };
    }
  }, [props]);

  if (props.type === "smartlink") {
    return (
      <a
        href={props.smartLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  }

  if (props.type === "native") {
    return <div id={props.containerId} />;
  }

  if (props.type === "banner") {
    return <div ref={ref} />;
  }

  return null;
}