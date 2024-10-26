const WEBSOCKET_URL = "ws://localhost:3000";

const createWebSocket = (gameSessionId: string) => {
  const ws = new WebSocket(`${WEBSOCKET_URL}/${gameSessionId}`);
  return ws;
};

export default { createWebSocket };
