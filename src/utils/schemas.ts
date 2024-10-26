import { z } from "zod";

const playerMarkSchema = z.union([z.literal("X"), z.literal("O")]);

export const gameBoardSchema = z.array(z.union([playerMarkSchema, z.null()])).length(9);
