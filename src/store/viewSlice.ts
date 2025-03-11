import { StateCreator } from "zustand";

export interface ViewSlice {
  gameStatusMessage: string;
  setGameStatusMessage: (message: string) => void;
}

export const createViewSlice: StateCreator<ViewSlice> = (set) => ({
  gameStatusMessage: "",
  setGameStatusMessage: (message: string) => set({ gameStatusMessage: message }),
});
