import { get, set, del } from "idb-keyval";
import { ModelItem } from "./types";

const META_KEY = "space_custom_models_meta";
const BLOB_PREFIX = "space_model_blob_";

export interface StoredModelMeta extends Omit<ModelItem, "src"> {
  blobKey: string;
}

export async function getCustomModels(): Promise<ModelItem[]> {
  try {
    const metaList = (await get<StoredModelMeta[]>(META_KEY)) || [];
    const models: ModelItem[] = [];

    for (const meta of metaList) {
      const blob = await get<Blob>(meta.blobKey);
      if (blob) {
        const objectUrl = URL.createObjectURL(blob);
        models.push({
          ...meta,
          src: objectUrl,
          isCustom: true,
        });
      }
    }
    return models;
  } catch (err) {
    console.error("Failed to load custom models from storage:", err);
    return [];
  }
}

export async function saveCustomModel(
  modelData: Omit<ModelItem, "src" | "id">,
  fileBlob: Blob
): Promise<ModelItem> {
  const id = `custom-${Date.now()}`;
  const blobKey = `${BLOB_PREFIX}${id}`;

  await set(blobKey, fileBlob);

  const meta: StoredModelMeta = {
    ...modelData,
    id,
    blobKey,
    isCustom: true,
  };

  const currentList = (await get<StoredModelMeta[]>(META_KEY)) || [];
  await set(META_KEY, [meta, ...currentList]);

  return {
    ...meta,
    src: URL.createObjectURL(fileBlob),
  };
}

export async function deleteCustomModel(id: string): Promise<void> {
  const blobKey = `${BLOB_PREFIX}${id}`;
  await del(blobKey);

  const currentList = (await get<StoredModelMeta[]>(META_KEY)) || [];
  const updated = currentList.filter((m) => m.id !== id);
  await set(META_KEY, updated);
}
