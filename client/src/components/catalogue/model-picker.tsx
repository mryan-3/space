"use client";

import { ModelItem } from "@/lib/types";

interface ModelPickerProps {
  models: ModelItem[];
  selectedId: string;
  onSelect: (model: ModelItem) => void;
}

export function ModelPicker({
  models,
  selectedId,
  onSelect,
}: ModelPickerProps) {
  return (
    <div className="flex items-center gap-2">
      {models.map((item) => {
        const isSelected = item.id === selectedId;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
              isSelected
                ? "bg-[#2C5E43] text-white border-[#2C5E43] shadow-xs"
                : "bg-white text-[#1A202C] border-[#E8E8E3] hover:bg-[#F4F4F0]"
            }`}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
