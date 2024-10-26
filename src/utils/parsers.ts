import { gameBoardSchema } from "./schemas";
import { GameBoard } from "./types";

export const parseMessage = (data: unknown) => {
  try {
    const gameBoard = gameBoardSchema.parse(data);
    return gameBoard as GameBoard;
  } catch (error: unknown) {
    console.error(error);
  }
};
