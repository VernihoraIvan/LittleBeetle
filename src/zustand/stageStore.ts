import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface StageState {
  allowedStage: number;
  setStage: (stage: number) => void;
}

export const useStage = create(
  persist<StageState>(
    (set) => ({
      allowedStage: 1,
      setStage(stage: number) {
        set({ allowedStage: stage });
      },
    }),
    {
      name: "stage-storage",
      getStorage: () => localStorage,
    }
  )
);
