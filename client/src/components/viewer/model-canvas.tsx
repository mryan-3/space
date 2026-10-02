"use client";

import { useModelViewer } from "@/hooks/use-model-viewer";
import { ModelItem } from "@/lib/types";

interface ModelCanvasProps {
  model: ModelItem;
  autoRotate: boolean;
  viewerRef: React.RefObject<HTMLElement | null>;
}

export function ModelCanvas({
  model,
  autoRotate,
  viewerRef,
}: ModelCanvasProps) {
  const isReady = useModelViewer();

  if (!isReady) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#F4F4F0] text-[#64748B]">
        <div className="w-6 h-6 border-2 border-[#2C5E43] border-t-transparent rounded-full animate-spin mb-2" />
        <span className="text-xs">Preparing 3D canvas...</span>
      </div>
    );
  }

  return (
    <model-viewer
      key={model.id}
      ref={viewerRef as any}
      src={model.src}
      alt={model.name}
      camera-controls
      auto-rotate={autoRotate ? true : undefined}
      rotation-per-second="25deg"
      shadow-intensity="1.2"
      shadow-softness="0.75"
      exposure="1"
      touch-action="pan-y"
      loading="eager"
      className="w-full h-full"
    />
  );
}
