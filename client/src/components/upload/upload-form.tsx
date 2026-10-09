"use client";

import { DimensionInputs } from "./dimension-inputs";

interface UploadFormProps {
  name: string; setName: (v: string) => void;
  placement: "floor" | "auto"; setPlacement: (v: "floor" | "auto") => void;
  width: number; setWidth: (v: number) => void;
  depth: number; setDepth: (v: number) => void;
  height: number; setHeight: (v: number) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean; disabled: boolean;
}


export function UploadForm(props: UploadFormProps) {
  return (
    <form onSubmit={props.onSubmit} className="flex flex-col gap-3.5 text-left">
      <div>
        <label className="text-xs font-medium text-[#1A202C] block mb-1">
          Item Name
        </label>
        <input
          type="text"
          required
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
          placeholder="e.g. Modern Coffee Table"
          className="w-full text-xs px-3 py-2 bg-white rounded-xl border border-[#E8E8E3] focus:outline-none focus:border-[#2C5E43]"
        />
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => props.setPlacement("floor")}
          className={`flex-1 py-1.5 text-xs rounded-xl border transition-colors cursor-pointer ${
            props.placement === "floor"
              ? "bg-[#2C5E43] text-white border-[#2C5E43]"
              : "bg-white text-[#64748B] border-[#E8E8E3]"
          }`}
        >
          Floor Piece
        </button>
        <button
          type="button"
          onClick={() => props.setPlacement("auto")}
          className={`flex-1 py-1.5 text-xs rounded-xl border transition-colors cursor-pointer ${
            props.placement === "auto"
              ? "bg-[#2C5E43] text-white border-[#2C5E43]"
              : "bg-white text-[#64748B] border-[#E8E8E3]"
          }`}
        >
          Tabletop Item
        </button>
      </div>

      <DimensionInputs
        width={props.width}
        setWidth={props.setWidth}
        depth={props.depth}
        setDepth={props.setDepth}
        height={props.height}
        setHeight={props.setHeight}
      />

      <button
        type="submit"
        disabled={props.disabled || props.isSubmitting}
        className="w-full mt-2 py-2.5 rounded-xl bg-[#2C5E43] hover:bg-[#234b35] disabled:opacity-50 text-white text-xs font-medium transition-transform active:scale-95 cursor-pointer shadow-xs"
      >
        {props.isSubmitting ? "Saving to workspace..." : "Add to Catalogue"}
      </button>
    </form>
  );
}
