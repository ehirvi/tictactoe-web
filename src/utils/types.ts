export type PlayerRole = "Host" | "Guest";

export type PlayerMark = "X" | "O";

export type GameBoard = (PlayerMark | null)[];

export interface GameBoardEvent {
  type: "GameBoard";
  game_board: GameBoard;
}

export interface PlayerJoinEvent {
  type: "PlayerJoin";
  player_id: string;
}

export type GameEvent = GameBoardEvent | PlayerJoinEvent;
