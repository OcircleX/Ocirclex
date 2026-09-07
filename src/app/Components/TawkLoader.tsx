"use client";

import { useEffect } from "react";

export default function TawkLoader() {
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let idleId: number | undefined;

    const load = () => {
      if (document.getElementById("tawk-to-script")) return;

      const w = window as Window & {
        Tawk_API?: Record<string, unknown>;
        Tawk_LoadStart?: Date;
      };

      w.Tawk_API = w.Tawk_API || {};
      w.Tawk_LoadStart = new Date();
      w.Tawk_API.customStyle = {
        visibility: {
          desktop: { position: "br", xOffset: 20, yOffset: 20 },
          mobile: { position: "br", xOffset: 12, yOffset: 12 },
        },
      };
      w.Tawk_API.onChatMaximized = () => {
        document.documentElement.classList.add("tawk-open");
      };
      w.Tawk_API.onChatMinimized = () => {
        document.documentElement.classList.remove("tawk-open");
      };
      w.Tawk_API.onChatHidden = () => {
        document.documentElement.classList.remove("tawk-open");
      };

      const script = document.createElement("script");
      script.id = "tawk-to-script";
      script.async = true;
      script.src = "https://embed.tawk.to/686cc6b01731c019090354cc/1ivkeg916";
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      document.body.appendChild(script);
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(load, { timeout: 6000 });
    } else {
      timeoutId = setTimeout(load, 4000);
    }

    return () => {
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
