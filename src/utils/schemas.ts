import { z } from "zod";

const playerMarkSchema = z.union([z.literal("X"), z.literal("O")]);

const gameBoardSchema = z
  .array(z.union([playerMarkSchema, z.null()]))
  .length(9);

const gameBoardEventSchema = z.object({
  type: z.literal("GameBoard"),
  game_board: gameBoardSchema,
});

const playerJoinEventSchema = z.object({
  type: z.literal("PlayerJoin"),
  player_id: z.string(),
});

export const gameEventSchema = z.union([
  gameBoardEventSchema,
  playerJoinEventSchema,
]);
