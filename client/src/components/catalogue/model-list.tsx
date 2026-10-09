"use client";

import { ModelItem } from "@/lib/types";
import { ModelItemCard } from "./model-item-card";
import { UploadSimple, BookOpen } from "@phosphor-icons/react";

interface ModelListProps {
  models: ModelItem[];
  selectedId: string;
  onSelect: (model: ModelItem) => void;
  onDeleteCustom?: (id: string) => void;
  onOpenUpload?: () => void;
  onOpenSources?: () => void;
}

export function ModelList({
  models,
  selectedId,
  onSelect,
  onDeleteCustom,
  onOpenUpload,
  onOpenSources,
}: ModelListProps) {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-[#1A202C]">
            Available 3D Models
          </h3>
          <span className="text-xs text-[#64748B]">({models.length})</span>
        </div>

        <div className="flex items-center gap-2">
          {onOpenSources && (
            <button
              type="button"
              onClick={onOpenSources}
              className="px-2.5 py-1.5 text-xs text-[#64748B] hover:text-[#1A202C] bg-white border border-[#E8E8E3] rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <BookOpen size={14} />
              <span>Free Sources</span>
            </button>
          )}
          {onOpenUpload && (
            <button
              type="button"
              onClick={onOpenUpload}
              className="px-3 py-1.5 text-xs font-medium text-white bg-[#2C5E43] hover:bg-[#234b35] rounded-xl flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer shadow-xs"
            >
              <UploadSimple size={14} weight="bold" />
              <span>Upload Model</span>
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {models.map((item) => (
          <ModelItemCard
            key={item.id}
            item={item}
            isSelected={item.id === selectedId}
            onSelect={onSelect}
            onDelete={onDeleteCustom}
          />
        ))}
      </div>
    </section>
  );
}
