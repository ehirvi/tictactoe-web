type PlayerMark = "X" | "O";

export type PlayerRole = "Host" | "Guest";

export type GameBoard = (PlayerMark | null)[];

export interface GameBoardEvent {
  type: "GameBoard";
  game_board: GameBoard;
  turn: PlayerRole;
}

export interface PlayerJoinEvent {
  type: "PlayerJoin";
  player_id: string;
  role: PlayerRole;
}

export type ClientEvent = GameBoardEvent | PlayerJoinEvent;
