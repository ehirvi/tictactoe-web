import axios from "axios";

const API_URL = "http://localhost:3000/api/games";

const createSession = async () => {
  const { data } = await axios.post<{ id: string }>(`${API_URL}/create`);
  return data.id;
};

const joinSession = async (gameId: string) => {
  const { data } = await axios.post<{ successful: boolean }>(
    `${API_URL}/join`,
    { id: gameId }
  );
  return data.successful;
};

export default { createSession, joinSession };
