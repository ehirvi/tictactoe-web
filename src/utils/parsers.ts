import { gameEventSchema } from "./schemas";

export const parseMessage = (data: unknown) => {
  try {
    const gameEvent = gameEventSchema.parse(data);
    return gameEvent;
  } catch (error: unknown) {
    console.error(error);
  }
};
