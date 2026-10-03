"use client";

import { useModelViewer } from "@/hooks/use-model-viewer";
import { ModelItem } from "@/lib/types";
import { CubeFocus } from "@phosphor-icons/react";

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

  const placementMode = model.placement === "floor" ? "floor" : "auto";

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
      ar
      ar-modes="webxr scene-viewer quick-look"
      ar-scale={model.scaleFixed ? "fixed" : "auto"}
      ar-placement={placementMode}
      className="w-full h-full"
    >
      <button
        slot="ar-button"
        type="button"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#2C5E43] hover:bg-[#234b35] text-white text-xs font-semibold py-2.5 px-4 rounded-xl shadow-md flex items-center gap-2 transition-transform active:scale-95 cursor-pointer z-20"
      >
        <CubeFocus size={16} weight="bold" />
        <span>View in your room</span>
      </button>
    </model-viewer>
  );
}

