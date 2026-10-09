export type ModelCategory = "furniture" | "tabletop" | "custom";

export interface ModelDimensions {
  width: number;
  depth: number;
  height: number;
  unit: "cm";
}

export interface ModelItem {
  id: string;
  name: string;
  category: ModelCategory;
  description: string;
  src: string;
  iosSrc?: string;
  dimensions: ModelDimensions;
  placement: "floor" | "auto";
  scaleFixed?: boolean;
  isCustom?: boolean;
}
