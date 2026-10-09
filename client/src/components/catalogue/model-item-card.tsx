"use client";

import { ModelItem } from "@/lib/types";
import { Cube, Trash } from "@phosphor-icons/react";

interface ModelItemCardProps {
  item: ModelItem;
  isSelected: boolean;
  onSelect: (item: ModelItem) => void;
  onDelete?: (id: string) => void;
}

export function ModelItemCard({
  item,
  isSelected,
  onSelect,
  onDelete,
}: ModelItemCardProps) {
  const { width, depth, height, unit } = item.dimensions;

  return (
    <div
      onClick={() => onSelect(item)}
      className={`text-left p-3.5 rounded-2xl border transition-all flex flex-col gap-2 cursor-pointer ${
        isSelected
          ? "bg-white border-[#2C5E43] ring-1 ring-[#2C5E43] shadow-xs"
          : "bg-white/80 border-[#E8E8E3] hover:bg-white hover:border-[#D1D1CB]"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <span className="text-[11px] font-semibold text-[#2C5E43] uppercase tracking-wider">
          {item.isCustom ? "Custom" : item.category}
        </span>
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] text-[#64748B]">
            {width} × {depth} × {height} {unit}
          </span>
          {item.isCustom && onDelete && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(item.id);
              }}
              className="p-1 hover:text-[#C85A32] text-[#64748B] rounded transition-colors"
              title="Delete custom model"
            >
              <Trash size={13} />
            </button>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-[#F4F4F0] text-[#1A202C] flex items-center justify-center shrink-0">
          <Cube size={15} weight="bold" />
        </div>
        <span className="text-xs font-semibold text-[#1A202C] truncate">
          {item.name}
        </span>
      </div>
    </div>
  );
}
