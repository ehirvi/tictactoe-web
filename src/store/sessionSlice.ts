import { StateCreator } from "zustand";

export interface SessionSlice {
  gameStarted: boolean;
  gameId: string | undefined;
  playersJoined: boolean;
  setGameStarted: (status: boolean) => void;
  setGameId: (id: string) => void;
  setPlayersJoined: (status: boolean) => void;
  resetSessionData: () => void;
}

export const createSessionSlice: StateCreator<SessionSlice> = (set) => ({
  gameStarted: false,
  gameId: undefined,
  playersJoined: false,
  setGameStarted: (status: boolean) => set({ gameStarted: status }),
  setGameId: (id: string) => set({ gameId: id }),
  setPlayersJoined: (status: boolean) => set({ playersJoined: status }),
  resetSessionData: () =>
    set({ gameId: undefined, gameStarted: false, playersJoined: false }),
});
