import { useEffect, useState } from "react";
import { parseMessage } from "../utils/parsers";
import {
  GameBoard,
  GameBoardUpdateEvent,
  PlayerJoinEvent,
} from "../utils/types";
import webSocket from "../services/webSocket";
import useGameStore from "../store/gameStore";

/**
 * Handles the connection to the game server and returns an up to date game board and a function to make a move
 */
const useGameServer = () => {
  const sessionId = useGameStore((state) => state.sessionId);
  const setGameOverMessage = useGameStore((state) => state.setGameOverMessage);
  const [socket, setSocket] = useState<WebSocket>();
  const [playerId, setPlayerId] = useState<string>();
  const [playerRole, setPlayerRole] = useState<PlayerJoinEvent["role"]>();
  const [gameTurn, setGameTurn] = useState<GameBoardUpdateEvent["turn"]>();
  const [board, setBoard] = useState<GameBoard>();

  useEffect(() => {
    if (sessionId) {
      const ws = webSocket.createWebSocket(sessionId);
      setSocket(ws);
      return () => {
        ws.close();
      };
    }
  }, [sessionId]);

  if (socket) {
    socket.addEventListener("message", (ev: MessageEvent<string>) => {
      const message: unknown = JSON.parse(ev.data);
      const gameEvent = parseMessage(message);
      if (gameEvent) {
        switch (gameEvent.type) {
          case "GameBoardUpdate":
            setBoard(gameEvent.game_board);
            setGameTurn(gameEvent.turn);
            break;
          case "PlayerJoin":
            setPlayerId(gameEvent.player_id);
            setPlayerRole(gameEvent.role);
            break;
          case "GameOver":
            setGameOverMessage(gameEvent.message);
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
    if (socket && playerRole === gameTurn) {
      socket.send(
        JSON.stringify({
          type: "PlayerMove",
          game_id: sessionId,
          player: {
            id: playerId,
          },
          position,
        })
      );
    }
  };

  return { board, sessionId, handlePlayerMove };
};

export default useGameServer;
