import { CreateGameResponse, GameCache, JoinGameResponse } from "./types";

export const saveGameCache = (
  sessionData: Omit<CreateGameResponse, "game_id"> | JoinGameResponse,
  gameId: string
) => {
  const gameCache: GameCache = {
    playerToken: sessionData.token,
    playerRole: sessionData.role,
    gameId,
    gameStarted: true,
  };
  const value = JSON.stringify(gameCache);
  sessionStorage.setItem("gameSessionCache", value);
};

export const clearGameCache = () => {
  sessionStorage.removeItem("gameSessionCache");
};
