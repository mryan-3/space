"use client";

import { File as FileIcon, Trash } from "@phosphor-icons/react";

interface FilePreviewCardProps {
  file: File;
  onClear: () => void;
}

export function FilePreviewCard({ file, onClear }: FilePreviewCardProps) {
  const sizeMB = (file.size / (1024 * 1024)).toFixed(1);

  return (
    <div className="flex items-center justify-between p-3.5 bg-[#F4F4F0] rounded-2xl border border-[#E8E8E3]">
      <div className="flex items-center gap-2.5 overflow-hidden">
        <FileIcon size={20} className="text-[#2C5E43] shrink-0" weight="bold" />
        <div className="truncate text-left">
          <span className="text-xs font-medium text-[#1A202C] block truncate">
            {file.name}
          </span>
          <span className="text-[11px] text-[#64748B]">
            {sizeMB} MB
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={onClear}
        className="p-1.5 text-[#64748B] hover:text-[#C85A32] rounded-lg transition-colors cursor-pointer"
      >
        <Trash size={16} />
      </button>
    </div>
  );
}
