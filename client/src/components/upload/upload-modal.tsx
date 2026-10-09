"use client";

import { useState } from "react";
import { ModelItem } from "@/lib/types";
import { UploadDropzone } from "./upload-dropzone";
import { UploadForm } from "./upload-form";
import { UploadModalHeader } from "./upload-modal-header";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onModelCreated: (model: ModelItem) => void;
  onSaveModel: (data: Omit<ModelItem, "src" | "id">, blob: Blob) => Promise<ModelItem>;
}

export function UploadModal({
  isOpen,
  onClose,
  onModelCreated,
  onSaveModel,
}: UploadModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [placement, setPlacement] = useState<"floor" | "auto">("floor");
  const [w, setW] = useState(100);
  const [d, setD] = useState(60);
  const [h, setH] = useState(75);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !name) return;
    setLoading(true);
    try {
      const created = await onSaveModel(
        {
          name,
          category: "custom",
          description: `Custom 3D model (${placement === "floor" ? "Floor" : "Tabletop"}).`,
          placement,
          scaleFixed: true,
          dimensions: { width: w, depth: d, height: h, unit: "cm" },
        },
        file
      );
      onModelCreated(created);
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm bg-white rounded-3xl border border-[#E8E8E3] p-6 shadow-xl flex flex-col gap-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <UploadModalHeader onClose={onClose} />
        <UploadDropzone file={file} onFileSelect={setFile} />
        <UploadForm
          name={name} setName={setName} placement={placement} setPlacement={setPlacement}
          width={w} setWidth={setW} depth={d} setDepth={setD} height={h} setHeight={setH}
          onSubmit={handleSubmit} isSubmitting={loading} disabled={!file}
        />
      </div>
    </div>
  );
}
