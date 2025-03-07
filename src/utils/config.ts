const API_URL =
  import.meta.env.MODE === "production"
    ? (import.meta.env.VITE_API_URL as string)
    : "http://localhost:3000/api/games";

const WS_URL =
  import.meta.env.MODE === "production"
    ? (import.meta.env.VITE_WS_URL as string)
    : "ws://localhost:3000";

export default { API_URL, WS_URL };
