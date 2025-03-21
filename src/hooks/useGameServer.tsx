import { useEffect, useState } from "react";
import { parseMessage } from "../utils/parsers";
import { GameBoard, GameBoardUpdateEvent } from "../utils/types";
import webSocket from "../services/webSocket";
import useGameStore from "../store/gameStore";

/**
 * Handles the connection to the game server and returns an up to date game board and a function to make a move
 */
const useGameServer = () => {
  const playerToken = useGameStore((state) => state.playerToken);
  const playerRole = useGameStore((state) => state.playerRole);
  const sessionId = useGameStore((state) => state.sessionId);
  const setGameStatusMessage = useGameStore(
    (state) => state.setGameStatusMessage
  );
  const [socket, setSocket] = useState<WebSocket>();
  const [gameTurn, setGameTurn] = useState<GameBoardUpdateEvent["turn"]>();
  const [board, setBoard] = useState<GameBoard>();
  const [allPlayersJoined, setAllPlayersJoined] = useState<boolean>(false);

  useEffect(() => {
    if (playerToken) {
      const ws = webSocket.createWebSocket(playerToken);
      setSocket(ws);
      return () => {
        ws.close();
      };
    }
  }, [playerToken]);

  if (socket) {
    socket.addEventListener("message", (ev: MessageEvent<string>) => {
      const message: unknown = JSON.parse(ev.data);
      const gameEvent = parseMessage(message);
      if (gameEvent) {
        switch (gameEvent.type) {
          case "GameStart":
            setAllPlayersJoined(gameEvent.all_players_joined);
            break;
          case "GameBoardUpdate":
            setBoard(gameEvent.game_board);
            setGameTurn(gameEvent.turn);
            break;
          case "GameStatus":
            setGameStatusMessage(gameEvent.message);
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
    if (allPlayersJoined && socket?.readyState === socket!.OPEN && playerRole === gameTurn) {
      socket.send(
        JSON.stringify({
          type: "PlayerMove",
          position,
        })
      );
    }
  };

  return { board, sessionId, playerRole, handlePlayerMove };
};

export default useGameServer;
