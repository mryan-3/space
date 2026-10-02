"use client";

import { useState } from "react";
import { STARTER_MODELS } from "@/data/starter-models";
import { ModelItem } from "@/lib/types";
import { AppHeader } from "@/components/layout/app-header";
import { InteractiveViewer } from "@/components/viewer/interactive-viewer";
import { ModelSummary } from "@/components/viewer/model-summary";
import { ModelList } from "@/components/catalogue/model-list";

export default function HomePage() {
  const [selectedModel, setSelectedModel] = useState<ModelItem>(
    STARTER_MODELS[0]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9]">
      <AppHeader />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 flex flex-col gap-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1A202C]">
            Interactive 3D Workspace
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] mt-1">
            Inspect model geometry, rotation, and dimensions in real time.
          </p>
        </div>

        <InteractiveViewer model={selectedModel} />

        <ModelSummary model={selectedModel} />

        <ModelList
          models={STARTER_MODELS}
          selectedId={selectedModel.id}
          onSelect={setSelectedModel}
        />
      </main>
    </div>
  );
}
