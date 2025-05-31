import {
  CreateSessionResponse,
  JoinSessionResponse,
  SessionCache,
} from "./types";

export const saveGameCache = (
  sessionData: Omit<CreateSessionResponse, "game_id"> | JoinSessionResponse,
  gameId: string
) => {
  const sessionCache: SessionCache = {
    playerToken: sessionData.token,
    playerRole: sessionData.role,
    sessionId: gameId,
    sessionStarted: true,
  };
  const value = JSON.stringify(sessionCache);
  sessionStorage.setItem("gameSessionCache", value);
};

export const clearGameCache = () => {
  sessionStorage.removeItem("gameSessionCache");
};
