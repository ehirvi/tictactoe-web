import { StateCreator } from "zustand";

export interface SessionSlice {
  sessionStarted: boolean;
  sessionId: string | undefined;
  setSessionStarted: (status: boolean) => void;
  setSessionId: (id: string) => void;
}

export const createSessionSlice: StateCreator<SessionSlice> = (set) => ({
  sessionStarted: false,
  sessionId: undefined,
  setSessionStarted: (status: boolean) => set({ sessionStarted: status }),
  setSessionId: (id: string) => set({ sessionId: id }),
});
