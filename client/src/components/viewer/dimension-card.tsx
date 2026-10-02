"use client";

import { Ruler } from "@phosphor-icons/react";
import { ModelDimensions } from "@/lib/types";

interface DimensionCardProps {
  dimensions: ModelDimensions;
}

export function DimensionCard({ dimensions }: DimensionCardProps) {
  const { width, depth, height, unit } = dimensions;

  return (
    <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-[#E8E8E3] rounded-xl px-4 py-2.5 shadow-xs">
      <div className="w-8 h-8 rounded-lg bg-[#F4F4F0] text-[#2C5E43] flex items-center justify-center shrink-0">
        <Ruler size={18} weight="bold" />
      </div>
      <div className="flex flex-col">
        <span className="text-[11px] font-medium text-[#64748B] uppercase tracking-wider">
          Dimensions
        </span>
        <span className="text-xs font-semibold text-[#1A202C]">
          {width} × {depth} × {height} {unit}
        </span>
      </div>
    </div>
  );
}
