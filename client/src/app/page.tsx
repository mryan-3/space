import { Suspense } from "react";
import { AppHeader } from "@/components/layout/app-header";
import { ModelWorkspace } from "@/components/workspace/model-workspace";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9]">
      <AppHeader />
      <Suspense
        fallback={
          <div className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 flex items-center justify-center text-[#64748B] text-xs">
            Loading workspace...
          </div>
        }
      >
        <ModelWorkspace />
      </Suspense>
    </div>
  );
}

