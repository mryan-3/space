"use client";

import { Cube } from "@phosphor-icons/react";

export function AppHeader() {
  return (
    <header className="w-full border-b border-[#E8E8E3] bg-white/80 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#2C5E43] text-white flex items-center justify-center">
            <Cube size={20} weight="bold" />
          </div>
          <div>
            <h1 className="text-base font-semibold tracking-tight text-[#1A202C]">
              Room Preview
            </h1>
            <p className="text-xs text-[#64748B]">Spatial 3D & AR</p>
          </div>
        </div>
        <div className="text-xs font-medium text-[#2C5E43] bg-[#2C5E43]/10 px-3 py-1 rounded-full">
          Phase 1: 3D Inspection
        </div>
      </div>
    </header>
  );
}
