import { StateCreator } from "zustand";
import { PlayerRole } from "../utils/types";

export interface PlayerSlice {
  playerToken: string | undefined;
  playerRole: PlayerRole | undefined;
  setPlayerToken: (token: string) => void;
  setPlayerRole: (role: PlayerRole) => void;
  resetPlayerData: () => void;
}

export const createPlayerSlice: StateCreator<PlayerSlice> = (set) => ({
  playerToken: undefined,
  playerRole: undefined,
  setPlayerToken: (token: string) => set({ playerToken: token }),
  setPlayerRole: (role: PlayerRole) => set({ playerRole: role }),
  resetPlayerData: () => set({ playerToken: undefined, playerRole: undefined }),
});
