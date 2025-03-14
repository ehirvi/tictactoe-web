import { create } from "zustand";
import { createSessionSlice, SessionSlice } from "./sessionSlice";
import { createViewSlice, ViewSlice } from "./viewSlice";
import { createPlayerSlice, PlayerSlice } from "./playerSlice";

const useGameStore = create<SessionSlice & PlayerSlice & ViewSlice>((...a) => ({
  ...createSessionSlice(...a),
  ...createPlayerSlice(...a),
  ...createViewSlice(...a),
}));

export default useGameStore;
