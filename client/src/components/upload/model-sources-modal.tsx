"use client";

import { X, ArrowSquareOut, BookOpen } from "@phosphor-icons/react";

interface ModelSourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SOURCES = [
  { name: "Poly Pizza", desc: "Thousands of free low-poly interior and everyday 3D models.", url: "https://poly.pizza" },
  { name: "Kenney 3D Assets", desc: "Public domain (CC0) furniture, room kits, and architectural props.", url: "https://kenney.nl/assets/category:3D" },
  { name: "Khronos glTF Samples", desc: "Official photorealistic reference assets including chairs and lamps.", url: "https://github.com/KhronosGroup/glTF-Sample-Assets" },
];


export function ModelSourcesModal({ isOpen, onClose }: ModelSourcesModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-3xl border border-[#E8E8E3] p-6 shadow-xl flex flex-col gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#F4F4F0] flex items-center justify-center text-[#2C5E43]">
              <BookOpen size={18} weight="bold" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1A202C]">
                Free 3D Model Repositories
              </h3>
              <p className="text-xs text-[#64748B]">Download .glb models to preview</p>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="w-7 h-7 rounded-lg hover:bg-[#F4F4F0] text-[#64748B] flex items-center justify-center cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex flex-col gap-2.5">
          {SOURCES.map((source) => (
            <a
              key={source.name}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl border border-[#E8E8E3] hover:border-[#2C5E43] bg-[#FBFBF9] hover:bg-white transition-all flex items-center justify-between group"
            >
              <div>
                <span className="text-xs font-semibold text-[#1A202C] block">
                  {source.name}
                </span>
                <span className="text-[11px] text-[#64748B] block mt-0.5">
                  {source.desc}
                </span>
              </div>
              <ArrowSquareOut size={16} className="text-[#64748B] group-hover:text-[#2C5E43] shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
