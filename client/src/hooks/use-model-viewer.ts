"use client";

import { useEffect, useState } from "react";

export function useModelViewer(): boolean {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    import("@google/model-viewer")
      .then(() => {
        if (mounted) {
          setIsReady(true);
        }
      })
      .catch((error) => {
        console.error("Failed to load model-viewer:", error);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return isReady;
}
