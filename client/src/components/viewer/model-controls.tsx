"use client";

import { ArrowsClockwise, ArrowCounterClockwise } from "@phosphor-icons/react";

interface ModelControlsProps {
  autoRotate: boolean;
  onToggleRotate: () => void;
  onResetView: () => void;
}

export function ModelControls({
  autoRotate,
  onToggleRotate,
  onResetView,
}: ModelControlsProps) {
  return (
    <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm border border-[#E8E8E3] rounded-xl p-1.5 shadow-xs">
      <button
        onClick={onToggleRotate}
        type="button"
        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
          autoRotate
            ? "bg-[#2C5E43] text-white"
            : "text-[#1A202C] hover:bg-[#F4F4F0]"
        }`}
        title="Toggle rotation"
      >
        <ArrowsClockwise size={14} weight="bold" />
        <span>Rotate</span>
      </button>

      <button
        onClick={onResetView}
        type="button"
        className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#1A202C] hover:bg-[#F4F4F0] transition-colors flex items-center gap-1.5"
        title="Reset camera view"
      >
        <ArrowCounterClockwise size={14} weight="bold" />
        <span>Reset</span>
      </button>
    </div>
  );
}
