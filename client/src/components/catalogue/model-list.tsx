"use client";

import { ModelItem } from "@/lib/types";
import { Cube } from "@phosphor-icons/react";

interface ModelListProps {
  models: ModelItem[];
  selectedId: string;
  onSelect: (model: ModelItem) => void;
}

export function ModelList({ models, selectedId, onSelect }: ModelListProps) {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#1A202C]">
          Available 3D Models
        </h3>
        <span className="text-xs text-[#64748B]">{models.length} items</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {models.map((item) => {
          const isSelected = item.id === selectedId;
          const { width, depth, height, unit } = item.dimensions;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item)}
              className={`text-left p-3.5 rounded-2xl border transition-all flex flex-col gap-2 ${
                isSelected
                  ? "bg-white border-[#2C5E43] ring-1 ring-[#2C5E43] shadow-xs"
                  : "bg-white/80 border-[#E8E8E3] hover:bg-white hover:border-[#D1D1CB]"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-[11px] font-semibold text-[#2C5E43] uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="text-[11px] text-[#64748B]">
                  {width} × {depth} × {height} {unit}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#F4F4F0] text-[#1A202C] flex items-center justify-center shrink-0">
                  <Cube size={15} weight="bold" />
                </div>
                <span className="text-xs font-semibold text-[#1A202C] truncate">
                  {item.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
