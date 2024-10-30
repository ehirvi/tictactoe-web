import axios from "axios";

// const API_URL = "http://localhost:3000/api/games";
const API_URL = "http://192.168.0.118:3000"

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
