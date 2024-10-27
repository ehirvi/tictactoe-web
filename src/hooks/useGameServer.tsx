import { useEffect, useState } from "react";
import { parseMessage } from "../utils/parsers";
import { GameBoard } from "../utils/types";
import webSocket from "../services/webSocket";

/**
 * Handles the connection to the game server and returns an up to date game board and a function to make a move
 */
const useGameServer = (gameId: string) => {
  const [socket, setSocket] = useState<WebSocket>();
  const [playerId, setPlayerId] = useState<string>();
  const [board, setBoard] = useState<GameBoard>();

  useEffect(() => {
    const ws = webSocket.createWebSocket(gameId);
    setSocket(ws);
    return () => {
      ws.close();
    };
  }, [gameId]);

  if (socket) {
    socket.addEventListener("message", (ev: MessageEvent<string>) => {
      const message: unknown = JSON.parse(ev.data);
      const gameEvent = parseMessage(message);
      if (gameEvent) {
        switch (gameEvent.type) {
          case "GameBoard":
            setBoard(gameEvent.game_board);
            break;
          case "PlayerJoin":
            setPlayerId(gameEvent.player_id);
            break;
          default: {
            const _exhaustiveCheck: never = gameEvent;
            return _exhaustiveCheck;
          }
        }
      }
    });
  }

  const handlePlayerMove = (position: number) => {
    if (socket) {
      socket.send(
        JSON.stringify({
          type: "PlayerMove",
          game_id: gameId,
          player: {
            id: playerId,
          },
          position,
        })
      );
    }
  };

  return { board, setBoard, handlePlayerMove };
};

export default useGameServer;
