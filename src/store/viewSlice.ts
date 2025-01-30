import { StateCreator } from "zustand";

export interface ViewSlice {
  gameOverMessage: string;
  setGameOverMessage: (message: string) => void;
}

export const createViewSlice: StateCreator<ViewSlice> = (set) => ({
  gameOverMessage: "",
  setGameOverMessage: (message: string) => set({ gameOverMessage: message }),
});
