import { useEffect, useRef, useState } from "react";
import { parseMessage } from "../utils/parsers";
import { GameBoard, GameBoardUpdateEvent } from "../utils/types";
import webSocket from "../services/webSocket";
import useGameStore from "../store/gameStore";
import { clearGameCache } from "../utils/sessionStorage";

/**
 * Handles the connection to the game server and returns an up to date game board and a function to make a move
 */
const useGameServer = () => {
  const playerToken = useGameStore((state) => state.playerToken);
  const playerRole = useGameStore((state) => state.playerRole);
  const gameId = useGameStore((state) => state.gameId);
  const playersJoined = useGameStore((state) => state.playersJoined);
  const setPlayersJoined = useGameStore((state) => state.setPlayersJoined);
  const setGameStatusMessage = useGameStore(
    (state) => state.setGameStatusMessage
  );
  const socketRef = useRef<WebSocket>();
  const [gameTurn, setGameTurn] = useState<GameBoardUpdateEvent["turn"]>();
  const [board, setBoard] = useState<GameBoard>();

  useEffect(() => {
    const connectToServer = () => {
      const ws = webSocket.createWebSocket(playerToken!);
      ws.addEventListener("message", (ev: MessageEvent<string>) => {
        const message: unknown = JSON.parse(ev.data);
        const gameEvent = parseMessage(message);
        if (gameEvent) {
          switch (gameEvent.type) {
            case "GameStart":
              setPlayersJoined(gameEvent.all_players_joined);
              break;
            case "GameBoardUpdate":
              setGameTurn(gameEvent.turn);
              setBoard(gameEvent.game_board);
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
      ws.addEventListener("close", (ev: CloseEvent) => {
        const condition =
          socketRef.current?.readyState === socketRef.current?.CLOSED &&
          !ev.wasClean;
        if (condition) {
          connectToServer();
        } else {
          clearGameCache();
        }
      });
      socketRef.current = ws;
    };
    if (!socketRef.current) {
      connectToServer();
    }
    return () => {
      socketRef.current?.close();
    };
  }, [playerToken, setGameStatusMessage, setPlayersJoined]);

  const handlePlayerMove = (position: number) => {
    const playerConnected =
      socketRef.current &&
      socketRef.current.readyState === socketRef.current.OPEN;
    const playerCanMove = playersJoined && playerRole === gameTurn;
    if (playerConnected && playerCanMove) {
      socketRef.current!.send(
        JSON.stringify({
          type: "PlayerMove",
          position,
        })
      );
    }
  };

  return { board, gameId, playerRole, handlePlayerMove };
};

export default useGameServer;
