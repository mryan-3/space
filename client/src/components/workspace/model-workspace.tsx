"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { STARTER_MODELS } from "@/data/starter-models";
import { ModelItem } from "@/lib/types";
import { useCustomModels } from "@/hooks/use-custom-models";
import { InteractiveViewer } from "@/components/viewer/interactive-viewer";
import { ModelSummary } from "@/components/viewer/model-summary";
import { ModelList } from "@/components/catalogue/model-list";
import { UploadModal } from "@/components/upload/upload-modal";
import { ModelSourcesModal } from "@/components/upload/model-sources-modal";

export function ModelWorkspace() {
  const searchParams = useSearchParams();
  const { customModels, addModel, removeModel } = useCustomModels();
  const allModels = [...STARTER_MODELS, ...customModels];
  const [selectedModel, setSelectedModel] = useState<ModelItem>(STARTER_MODELS[0]);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isSourcesOpen, setIsSourcesOpen] = useState(false);

  useEffect(() => {
    const modelParam = searchParams.get("model");
    if (modelParam) {
      const match = allModels.find((m) => m.id === modelParam);
      if (match) setSelectedModel(match);
    }
  }, [searchParams, customModels]);

  const handleDelete = async (id: string) => {
    await removeModel(id);
    if (selectedModel.id === id) {
      setSelectedModel(STARTER_MODELS[0]);
    }
  };

  return (
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
        models={allModels}
        selectedId={selectedModel.id}
        onSelect={setSelectedModel}
        onDeleteCustom={handleDelete}
        onOpenUpload={() => setIsUploadOpen(true)}
        onOpenSources={() => setIsSourcesOpen(true)}
      />

      <UploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onModelCreated={setSelectedModel}
        onSaveModel={addModel}
      />

      <ModelSourcesModal
        isOpen={isSourcesOpen}
        onClose={() => setIsSourcesOpen(false)}
      />
    </main>
  );
}
