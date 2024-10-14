import { useState } from "react";
import { v4 as uuid } from "uuid";

const ws = new WebSocket("ws://localhost:3000");
const playerId = uuid();

/**
 * Handles the connection to the game server and returns an up to date game board and a function to make a move
 */
const useGameServer = () => {
  const [board, setBoard] = useState<(string | null)[]>([
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

  ws.addEventListener("open", () => {
    // ws.send(`Player ${playerId} has connected`);
    // ws.send(JSON.stringify(board));
  });

  ws.addEventListener("message", (ev: MessageEvent<string>) => {
    const updatedBoard: unknown = JSON.parse(ev.data);
    if (updatedBoard) {
      setBoard(updatedBoard as (string | null)[]);
    }
  });

  const handlePlayerMove = (index: number) => {
    // const updatedBoard = [...board];
    // updatedBoard[index] = "X";
    // setBoard(updatedBoard);
    ws.send(
      JSON.stringify({
        player_movement: {
          player_id: playerId,
          game_board: board,
          index,
        },
      })
    );
  };

  return { board, setBoard, handlePlayerMove };
};

export default useGameServer;
