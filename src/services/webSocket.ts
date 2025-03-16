import config from "../utils/config";

const createWebSocket = (token: string) => {
  const socket = new WebSocket(`${config.WS_URL}/${token}`);
  return socket;
};

export default { createWebSocket };
