import { useEffect } from "react";
import useGameStore from "./store/gameStore";
import GameScreen from "./views/GameScreen";
import HomeScreen from "./views/HomeScreen";
import { parseCache } from "./utils/parsers";

const App = () => {
  const sessionStarted = useGameStore((state) => state.sessionStarted);
  const setSessionStarted = useGameStore((state) => state.setSessionStarted);
  const setSessionId = useGameStore((state) => state.setSessionId);
  const setPlayerToken = useGameStore((state) => state.setPlayerToken);
  const setPlayerRole = useGameStore((state) => state.setPlayerRole);

  useEffect(() => {
    const storageValue = sessionStorage.getItem("gameSessionCache");
    if (storageValue) {
      try {
        const data: unknown = JSON.parse(storageValue);
        const sessionCache = parseCache(data);
        if (sessionCache) {
          setPlayerToken(sessionCache.playerToken);
          setPlayerRole(sessionCache.playerRole);
          setSessionId(sessionCache.sessionId);
          setSessionStarted(sessionCache.sessionStarted);
        }
      } catch {
        console.log('-- Warning: Invalid token format --');
        sessionStorage.removeItem("gameSessionCache");
      }
    }
  }, [setPlayerRole, setPlayerToken, setSessionId, setSessionStarted]);

  return <>{sessionStarted ? <GameScreen /> : <HomeScreen />}</>;
};

export default App;
