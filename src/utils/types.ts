export type PlayerMark = "X" | "O";

export type PlayerRole = "Host" | "Guest";

export type GameBoard = (PlayerMark | null)[];

export interface GameCache {
  gameStarted: boolean;
  gameId: string;
  playerToken: string;
  playerRole: PlayerRole;
}

export interface CreateGameResponse {
  token: string;
  game_id: string;
  role: PlayerRole;
}

export interface JoinGameResponse {
  token: string;
  role: PlayerRole;
}

export interface GameStartEvent {
  type: "GameStart";
  all_players_joined: boolean;
}

export interface GameBoardUpdateEvent {
  type: "GameBoardUpdate";
  game_board: GameBoard;
  turn: PlayerRole;
}

export interface GameStatusEvent {
  type: "GameStatus";
  message: string;
}

// export type ClientEvent = GameBoardUpdateEvent;
