"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Copy, Check } from "@phosphor-icons/react";

interface QRCodeBoxProps {
  url: string;
}

export function QRCodeBox({ url }: QRCodeBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="p-3 bg-white rounded-2xl border border-[#E8E8E3] shadow-xs">
        <QRCodeSVG
          value={url}
          size={180}
          level="M"
          fgColor="#1A202C"
          bgColor="#FFFFFF"
        />
      </div>

      <button
        onClick={handleCopy}
        type="button"
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#64748B] hover:text-[#1A202C] bg-[#F4F4F0] hover:bg-[#EAEAE5] rounded-lg transition-colors cursor-pointer"
      >
        {copied ? (
          <>
            <Check size={14} weight="bold" className="text-[#2C5E43]" />
            <span className="text-[#2C5E43] font-medium">Link copied</span>
          </>
        ) : (
          <>
            <Copy size={14} />
            <span>Copy direct link</span>
          </>
        )}
      </button>
    </div>
  );
}
