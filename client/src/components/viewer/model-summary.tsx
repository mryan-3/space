"use client";

import { ModelItem } from "@/lib/types";

interface ModelSummaryProps {
  model: ModelItem;
}

export function ModelSummary({ model }: ModelSummaryProps) {
  const placementText =
    model.placement === "floor" ? "Floor Placement" : "Tabletop Placement";

  return (
    <div className="bg-white rounded-2xl border border-[#E8E8E3] p-5 shadow-xs flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-[#2C5E43] uppercase tracking-wider">
          {model.category}
        </span>
        <span className="text-xs text-[#64748B] bg-[#F4F4F0] px-2.5 py-0.5 rounded-full">
          {placementText}
        </span>
      </div>
      <h2 className="text-xl font-semibold text-[#1A202C] tracking-tight">
        {model.name}
      </h2>
      <p className="text-sm text-[#64748B] leading-relaxed">
        {model.description}
      </p>
    </div>
  );
}
