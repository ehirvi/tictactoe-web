import axios from "axios";
import config from "../utils/config";
import { CreateGameResponse, JoinGameResponse } from "../utils/types";

const createGameSession = async () => {
  const { data } = await axios.post<CreateGameResponse>(
    `${config.API_URL}/create`
  );
  return data;
};

const joinGameSession = async (gameId: string) => {
  const { data } = await axios.post<JoinGameResponse>(
    `${config.API_URL}/join`,
    { id: gameId }
  );
  return data;
};

export default { createGameSession, joinGameSession };
