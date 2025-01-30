import { create } from "zustand";
import { createSessionSlice, SessionSlice } from "./sessionSlice";
import { createViewSlice, ViewSlice } from "./viewSlice";

const useGameStore = create<SessionSlice & ViewSlice>((...a) => ({
  ...createSessionSlice(...a),
  ...createViewSlice(...a),
}));

export default useGameStore;
