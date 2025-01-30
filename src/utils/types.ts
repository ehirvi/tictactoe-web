export type PlayerMark = "X" | "O";

export type PlayerRole = "Host" | "Guest";

export type GameBoard = (PlayerMark | null)[];

export interface GameBoardUpdateEvent {
  type: "GameBoardUpdate";
  game_board: GameBoard;
  turn: PlayerRole;
}

export interface PlayerJoinEvent {
  type: "PlayerJoin";
  player_id: string;
  role: PlayerRole;
}

export interface GameOverEvent {
  type: "GameOver";
  message: string;
}

export type ClientEvent = GameBoardUpdateEvent | PlayerJoinEvent;
