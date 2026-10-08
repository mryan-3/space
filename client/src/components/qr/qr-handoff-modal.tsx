"use client";

import { useEffect, useState } from "react";
import { ModelItem } from "@/lib/types";
import { QRCodeBox } from "./qr-code-box";
import { QRModalHeader } from "./qr-modal-header";

interface QRHandoffModalProps {
  isOpen: boolean;
  onClose: () => void;
  model: ModelItem;
}

export function QRHandoffModal({
  isOpen,
  onClose,
  model,
}: QRHandoffModalProps) {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(`${window.location.origin}/?model=${model.id}`);
    }
  }, [model.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm bg-white rounded-3xl border border-[#E8E8E3] p-6 shadow-xl flex flex-col gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        <QRModalHeader onClose={onClose} />

        <QRCodeBox url={shareUrl} />

        <div className="text-center">
          <span className="text-xs font-medium text-[#1A202C] block">
            {model.name}
          </span>
          <span className="text-[11px] text-[#64748B]">
            {model.dimensions.width} × {model.dimensions.depth} × {model.dimensions.height} cm
          </span>
        </div>
      </div>
    </div>
  );
}
