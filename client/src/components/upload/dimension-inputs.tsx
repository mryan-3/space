"use client";

interface DimensionInputsProps {
  width: number;
  setWidth: (v: number) => void;
  depth: number;
  setDepth: (v: number) => void;
  height: number;
  setHeight: (v: number) => void;
}

export function DimensionInputs(props: DimensionInputsProps) {
  return (
    <div>
      <label className="text-xs font-medium text-[#1A202C] block mb-1">
        Dimensions (W × D × H in cm)
      </label>
      <div className="grid grid-cols-3 gap-2">
        <input
          type="number"
          min="1"
          value={props.width || ""}
          onChange={(e) => props.setWidth(Number(e.target.value))}
          placeholder="W"
          className="text-xs px-2.5 py-1.5 bg-white rounded-xl border border-[#E8E8E3] focus:outline-none focus:border-[#2C5E43]"
        />
        <input
          type="number"
          min="1"
          value={props.depth || ""}
          onChange={(e) => props.setDepth(Number(e.target.value))}
          placeholder="D"
          className="text-xs px-2.5 py-1.5 bg-white rounded-xl border border-[#E8E8E3] focus:outline-none focus:border-[#2C5E43]"
        />
        <input
          type="number"
          min="1"
          value={props.height || ""}
          onChange={(e) => props.setHeight(Number(e.target.value))}
          placeholder="H"
          className="text-xs px-2.5 py-1.5 bg-white rounded-xl border border-[#E8E8E3] focus:outline-none focus:border-[#2C5E43]"
        />
      </div>
    </div>
  );
}
