import axios from "axios";

const API_URL = "http://localhost:3000/api/games/create";

const createSession = async () => {
  const { data } = await axios.post<{ id: string }>(API_URL);
  return data.id;
};

export default { createSession };
