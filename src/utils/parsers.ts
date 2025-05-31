import { gameEventSchema, gameCacheSchema } from "./schemas";

export const parseMessage = (data: unknown) => {
  try {
    const gameEvent = gameEventSchema.parse(data);
    return gameEvent;
  } catch (error: unknown) {
    console.error(error);
  }
};

export const parseCache = (data: unknown) => {
  const gameCache = gameCacheSchema.parse(data);
  return gameCache;
};
