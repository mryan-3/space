"use client";

import { X, DeviceMobileCamera } from "@phosphor-icons/react";

interface QRModalHeaderProps {
  onClose: () => void;
}

export function QRModalHeader({ onClose }: QRModalHeaderProps) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-[#F4F4F0] flex items-center justify-center text-[#2C5E43]">
          <DeviceMobileCamera size={18} weight="bold" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1A202C]">
            View in Your Room
          </h3>
          <p className="text-xs text-[#64748B]">Scan with mobile camera</p>
        </div>
      </div>
      <button
        onClick={onClose}
        type="button"
        className="w-7 h-7 rounded-lg hover:bg-[#F4F4F0] text-[#64748B] flex items-center justify-center transition-colors cursor-pointer"
      >
        <X size={16} />
      </button>
    </div>
  );
}
