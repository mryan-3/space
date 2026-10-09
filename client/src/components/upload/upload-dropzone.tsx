"use client";

import { useRef, useState } from "react";
import { UploadSimple } from "@phosphor-icons/react";
import { FilePreviewCard } from "./file-preview-card";

interface UploadDropzoneProps {
  file: File | null;
  onFileSelect: (file: File | null) => void;
}

export function UploadDropzone({ file, onFileSelect }: UploadDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped && (dropped.name.endsWith(".glb") || dropped.name.endsWith(".gltf"))) {
      onFileSelect(dropped);
    }
  };

  if (file) {
    return <FilePreviewCard file={file} onClear={() => onFileSelect(null)} />;
  }

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-colors ${
        isDragging
          ? "border-[#2C5E43] bg-[#F4F4F0]"
          : "border-[#E8E8E3] hover:border-[#CBD5E1] bg-white"
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".glb,.gltf"
        className="hidden"
        onChange={(e) => {
          const selected = e.target.files?.[0];
          if (selected) onFileSelect(selected);
        }}
      />
      <div className="w-10 h-10 rounded-xl bg-[#F4F4F0] flex items-center justify-center text-[#2C5E43] mx-auto mb-2">
        <UploadSimple size={20} weight="bold" />
      </div>
      <span className="text-xs font-medium text-[#1A202C] block">
        Choose a 3D model or drag here
      </span>
      <span className="text-[11px] text-[#64748B] mt-0.5 block">
        Supports .glb & .gltf files
      </span>
    </div>
  );
}
