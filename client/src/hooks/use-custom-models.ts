"use client";

import { useState, useEffect, useCallback } from "react";
import { ModelItem } from "@/lib/types";
import {
  getCustomModels,
  saveCustomModel,
  deleteCustomModel,
} from "@/lib/storage";

export function useCustomModels() {
  const [customModels, setCustomModels] = useState<ModelItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCustomModels().then((models) => {
      setCustomModels(models);
      setIsLoading(false);
    });
  }, []);

  const addModel = useCallback(
    async (
      modelData: Omit<ModelItem, "src" | "id">,
      fileBlob: Blob
    ): Promise<ModelItem> => {
      const created = await saveCustomModel(modelData, fileBlob);
      setCustomModels((prev) => [created, ...prev]);
      return created;
    },
    []
  );

  const removeModel = useCallback(async (id: string) => {
    await deleteCustomModel(id);
    setCustomModels((prev) => prev.filter((m) => m.id !== id));
  }, []);

  return { customModels, isLoading, addModel, removeModel };
}
