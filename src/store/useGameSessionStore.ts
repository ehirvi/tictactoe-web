import { create } from "zustand";

interface GameSessionState {
  sessionStarted: boolean;
  sessionId: string | undefined;
  setSessionStarted: (status: boolean) => void;
  setSessionId: (id: string) => void;
}

const useGameSessionStore = create<GameSessionState>()((set) => ({
  sessionStarted: false,
  sessionId: undefined,
  setSessionStarted: (status: boolean) => set({ sessionStarted: status }),
  setSessionId: (id: string) => set({ sessionId: id }),
}));

export default useGameSessionStore;
