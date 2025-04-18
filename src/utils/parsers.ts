import { gameEventSchema, sessionCacheSchema } from "./schemas";

export const parseMessage = (data: unknown) => {
  try {
    const gameEvent = gameEventSchema.parse(data);
    return gameEvent;
  } catch (error: unknown) {
    console.error(error);
  }
};

export const parseCache = (data: unknown) => {
  try {
    const sessionCache = sessionCacheSchema.parse(data);
    return sessionCache;
  } catch (error: unknown) {
    console.error(error);
  }
};
