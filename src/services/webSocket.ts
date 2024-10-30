// const WEBSOCKET_URL = "ws://localhost:3000";
const WEBSOCKET_URL = "ws://192.168.0.118:3000";
// const WEBSOCKET_URL = "ws://192.168.56.1:3000";

const createWebSocket = (gameId: string) => {
  const socket = new WebSocket(`${WEBSOCKET_URL}/${gameId}`);
  return socket;
};

export default { createWebSocket };
