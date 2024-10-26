import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { parseMessage } from "../utils/parsers";
import { GameBoard } from "../utils/types";
import webSocket from "../services/webSocket";

/**
 * Handles the connection to the game server and returns an up to date game board and a function to make a move
 */
const useGameServer = () => {
  const [socket, setSocket] = useState<WebSocket>();
  const [playerId, setPlayerId] = useState<string>();
  const [board, setBoard] = useState<GameBoard>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  useEffect(() => {
    const joinSession = () => {
      const ws = webSocket.createWebSocket();
      const id = uuid();
      setSocket(ws);
      setPlayerId(id);
    };
    joinSession();
  }, []);

  if (socket) {
    socket.addEventListener("open", () => {
      // ws.send(`Player ${playerId} has connected`);
    });

    socket.addEventListener("message", (ev: MessageEvent<string>) => {
      const message: unknown = JSON.parse(ev.data);
      const gameBoard = parseMessage(message);
      if (gameBoard) {
        setBoard(gameBoard);
      }
    });
  }

  const handlePlayerMove = (position: number) => {
    if (socket) {
      socket.send(
        JSON.stringify({
          type: "PlayerMove",
          player: {
            id: playerId,
            role: "Host",
          },
          position,
        })
      );
    }
  };

  return { board, setBoard, handlePlayerMove };
};

export default useGameServer;
