import axios from "axios";
import config from "../utils/config";
import { CreateSessionResponse, JoinSessionResponse } from "../utils/types";

const createSession = async () => {
  const { data } = await axios.post<CreateSessionResponse>(
    `${config.API_URL}/create`
  );
  return data;
};

const joinSession = async (gameId: string) => {
  const { data } = await axios.post<JoinSessionResponse>(
    `${config.API_URL}/join`,
    { id: gameId }
  );
  return data;
};

export default { createSession, joinSession };
