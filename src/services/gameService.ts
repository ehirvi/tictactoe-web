import axios from "axios";
import config from "../utils/config";

const createSession = async () => {
  const { data } = await axios.post<{ id: string }>(`${config.API_URL}/create`);
  return data.id;
};

const joinSession = async (gameId: string) => {
  const { data } = await axios.post<{ successful: boolean }>(
    `${config.API_URL}/join`,
    { id: gameId }
  );
  return data.successful;
};

export default { createSession, joinSession };
