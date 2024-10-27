const WEBSOCKET_URL = "ws://localhost:3000";

const createWebSocket = (gameId: string) => {
  const socket = new WebSocket(`${WEBSOCKET_URL}/${gameId}`);
  return socket;
};

export default { createWebSocket };
