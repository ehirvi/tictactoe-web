import { StateCreator } from "zustand";

export interface SessionSlice {
  sessionStarted: boolean;
  sessionId: string | undefined;
  playersJoined: boolean;
  setSessionStarted: (status: boolean) => void;
  setSessionId: (id: string) => void;
  setPlayersJoined: (status: boolean) => void;
}

export const createSessionSlice: StateCreator<SessionSlice> = (set) => ({
  sessionStarted: false,
  sessionId: undefined,
  playersJoined: false,
  setSessionStarted: (status: boolean) => set({ sessionStarted: status }),
  setSessionId: (id: string) => set({ sessionId: id }),
  setPlayersJoined: (status: boolean) => set({ playersJoined: status }),
});
