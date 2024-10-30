import { z } from "zod";

const playerMarkSchema = z.literal("X").or(z.literal("O"));

const playerRoleSchema = z.literal("Host").or(z.literal("Guest"));

const gameBoardSchema = z
  .array(z.union([playerMarkSchema, z.null()]))
  .length(9);

const gameBoardUpdateEventSchema = z.object({
  type: z.literal("GameBoardUpdate"),
  game_board: gameBoardSchema,
  turn: playerRoleSchema,
});

const playerJoinEventSchema = z.object({
  type: z.literal("PlayerJoin"),
  player_id: z.string(),
  role: playerRoleSchema,
});

export const gameEventSchema = z.union([
  gameBoardUpdateEventSchema,
  playerJoinEventSchema,
]);
