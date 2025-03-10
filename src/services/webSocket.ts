import config from "../utils/config";

const createWebSocket = (gameId: string) => {
  const socket = new WebSocket(`${config.WS_URL}/${gameId}`);
  return socket;
};

export default { createWebSocket };
