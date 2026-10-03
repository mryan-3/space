"use client";

import { useState, useEffect, RefObject } from "react";

export type ARStatus = "not-presenting" | "session-started" | "object-placed" | "failed";

export function useARCapability(viewerRef: RefObject<HTMLElement | null>) {
  const [isMobile, setIsMobile] = useState(false);
  const [canActivateAR, setCanActivateAR] = useState(false);
  const [arStatus, setArStatus] = useState<ARStatus>("not-presenting");

  useEffect(() => {
    const ua = navigator.userAgent || "";
    const mobileDevice = /Android|iPhone|iPad|iPod/i.test(ua);
    setIsMobile(mobileDevice);
  }, []);

  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return;

    const handleARStatus = (event: Event) => {
      const detail = (event as CustomEvent<{ status: ARStatus }>).detail;
      if (detail?.status) {
        setArStatus(detail.status);
      }
    };

    const checkARSupport = () => {
      if ("canActivateAR" in el) {
        setCanActivateAR(Boolean((el as any).canActivateAR));
      }
    };

    el.addEventListener("ar-status", handleARStatus);
    el.addEventListener("load", checkARSupport);
    checkARSupport();

    return () => {
      el.removeEventListener("ar-status", handleARStatus);
      el.removeEventListener("load", checkARSupport);
    };
  }, [viewerRef]);

  const launchAR = () => {
    const el = viewerRef.current as any;
    if (el && typeof el.activateAR === "function") {
      el.activateAR();
    }
  };

  return { isMobile, canActivateAR, arStatus, launchAR };
}
