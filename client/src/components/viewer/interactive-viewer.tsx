"use client";

import { useRef, useState } from "react";
import { ModelItem } from "@/lib/types";
import { ModelCanvas } from "./model-canvas";
import { DimensionCard } from "./dimension-card";
import { ModelControls } from "./model-controls";

interface InteractiveViewerProps {
  model: ModelItem;
}

export function InteractiveViewer({ model }: InteractiveViewerProps) {
  const [autoRotate, setAutoRotate] = useState(false);
  const viewerRef = useRef<HTMLElement | null>(null);

  const handleToggleRotate = () => {
    setAutoRotate((prev) => !prev);
  };

  const handleResetView = () => {
    const el = viewerRef.current as any;
    if (el) {
      if (el.cameraOrbit) el.cameraOrbit = "auto auto auto";
      if (el.cameraTarget) el.cameraTarget = "auto auto auto";
      if (el.resetFieldOfView) el.resetFieldOfView();
    }
  };

  return (
    <div className="relative w-full h-[480px] sm:h-[560px] bg-gradient-to-b from-[#F7F7F4] to-[#EFEFEA] rounded-3xl border border-[#E8E8E3] overflow-hidden flex flex-col justify-between p-4 shadow-sm">
      <div className="flex items-start justify-between w-full z-10 gap-2">
        <DimensionCard dimensions={model.dimensions} />
        <ModelControls
          autoRotate={autoRotate}
          onToggleRotate={handleToggleRotate}
          onResetView={handleResetView}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <ModelCanvas
          model={model}
          autoRotate={autoRotate}
          viewerRef={viewerRef}
        />
      </div>

      <div className="z-10 self-center bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] text-[#64748B] border border-[#E8E8E3]">
        Drag to orbit, scroll to zoom
      </div>
    </div>
  );
}
