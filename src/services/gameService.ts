import axios from "axios";

const API_URL = "http://localhost:3000/api/games";

const createSession = async () => {
  const { data } = await axios.post<string>(API_URL);
  return data;
};

export default { createSession };
