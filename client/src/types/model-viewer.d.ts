import * as React from "react";

type ModelViewerElement = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement> & {
    src?: string;
    alt?: string;
    poster?: string;
    ar?: boolean;
    "ar-modes"?: string;
    "ar-scale"?: string;
    "ar-placement"?: string;
    "camera-controls"?: boolean;
    "auto-rotate"?: boolean;
    "auto-rotate-delay"?: number;
    "rotation-per-second"?: string;
    "touch-action"?: string;
    "shadow-intensity"?: string | number;
    "shadow-softness"?: string | number;
    exposure?: string | number;
    "camera-orbit"?: string;
    "field-of-view"?: string;
    "min-camera-orbit"?: string;
    "max-camera-orbit"?: string;
    "min-field-of-view"?: string;
    "max-field-of-view"?: string;
    "interaction-prompt"?: string;
    "ios-src"?: string;
    loading?: "auto" | "lazy" | "eager";
    reveal?: "auto" | "manual";
  },
  HTMLElement
>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerElement;
    }
  }
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        "model-viewer": ModelViewerElement;
      }
    }
  }
}

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerElement;
    }
  }
}
