import { z } from "zod";

const playerMarkSchema = z.literal("X").or(z.literal("O"));

const playerRoleSchema = z.literal("Host").or(z.literal("Guest"));

const gameBoardSchema = z
  .array(z.union([playerMarkSchema, z.null()]))
  .length(9);

const playerJoinEventSchema = z.object({
  type: z.literal("PlayerJoin"),
  player_id: z.string(),
  role: playerRoleSchema,
});

const gameStartEventSchema = z.object({
  type: z.literal("GameStart"),
  all_players_joined: z.boolean()
})

const gameBoardUpdateEventSchema = z.object({
  type: z.literal("GameBoardUpdate"),
  game_board: gameBoardSchema,
  turn: playerRoleSchema,
});

const gameStatusEventSchema = z.object({
  type: z.literal("GameStatus"),
  message: z.string(),
});

export const gameEventSchema = z.union([
  playerJoinEventSchema,
  gameStartEventSchema,
  gameBoardUpdateEventSchema,
  gameStatusEventSchema,
]);
