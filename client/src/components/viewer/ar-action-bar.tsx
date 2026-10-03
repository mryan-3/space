"use client";

import { RefObject } from "react";
import { ModelItem } from "@/lib/types";
import { useARCapability } from "@/hooks/use-ar-capability";
import { CubeFocus, DeviceMobileCamera } from "@phosphor-icons/react";

interface ARActionBarProps {
  model: ModelItem;
  viewerRef: RefObject<HTMLElement | null>;
}

export function ARActionBar({ model, viewerRef }: ARActionBarProps) {
  const { isMobile, canActivateAR, arStatus, launchAR } =
    useARCapability(viewerRef);

  const placementLabel =
    model.placement === "floor"
      ? "Calibrated for floor surfaces"
      : "Calibrated for tabletop surfaces";

  if (isMobile || canActivateAR) {
    return (
      <div className="bg-white rounded-2xl border border-[#E8E8E3] p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
        <div className="flex flex-col gap-0.5 text-center sm:text-left">
          <span className="text-xs font-semibold text-[#2C5E43]">
            {placementLabel}
          </span>
          <span className="text-xs text-[#64748B]">
            {arStatus === "object-placed"
              ? "Object placed in your room"
              : "Point camera at a flat surface and tap to place"}
          </span>
        </div>
        <button
          onClick={launchAR}
          type="button"
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#2C5E43] hover:bg-[#234b35] text-white text-xs font-medium flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer shadow-xs"
        >
          <CubeFocus size={16} weight="bold" />
          <span>Launch AR Experience</span>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-[#E8E8E3] p-4 flex items-center justify-between gap-4 shadow-xs">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-[#F4F4F0] flex items-center justify-center text-[#2C5E43]">
          <DeviceMobileCamera size={20} weight="bold" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-[#1A202C]">
            Augmented Reality Ready
          </span>
          <span className="text-xs text-[#64748B]">
            Open on an iOS or Android device to place this {model.name} at 1:1 scale.
          </span>
        </div>
      </div>
      <div className="hidden md:flex items-center text-xs text-[#64748B] bg-[#F4F4F0] px-3 py-1.5 rounded-lg">
        {placementLabel}
      </div>
    </div>
  );
}
