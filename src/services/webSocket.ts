const WEBSOCKET_URL = "ws://localhost:3000";

const createWebSocket = () => {
  const ws = new WebSocket(WEBSOCKET_URL);
  return ws;
};

export default { createWebSocket };
