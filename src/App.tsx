import { useEffect } from "react";
import useGameStore from "./store/gameStore";
import GameScreen from "./views/GameScreen";
import HomeScreen from "./views/HomeScreen";
import { parseCache } from "./utils/parsers";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./utils/themes";

const App = () => {
  const gameStarted = useGameStore((state) => state.gameStarted);
  const setGameStarted = useGameStore((state) => state.setGameStarted);
  const setGameId = useGameStore((state) => state.setGameId);
  const setPlayerToken = useGameStore((state) => state.setPlayerToken);
  const setPlayerRole = useGameStore((state) => state.setPlayerRole);

  useEffect(() => {
    const storageValue = sessionStorage.getItem("gameSessionCache");
    if (storageValue) {
      try {
        const data: unknown = JSON.parse(storageValue);
        const gameCache = parseCache(data);
        if (gameCache) {
          setPlayerToken(gameCache.playerToken);
          setPlayerRole(gameCache.playerRole);
          setGameId(gameCache.gameId);
          setGameStarted(gameCache.gameStarted);
        }
      } catch {
        console.log("-- Warning: Invalid token format --");
        sessionStorage.removeItem("gameSessionCache");
      }
    }
  }, [setGameId, setGameStarted, setPlayerRole, setPlayerToken]);

  return (
    <ThemeProvider theme={appTheme}>
      {gameStarted ? <GameScreen /> : <HomeScreen />}
    </ThemeProvider>
  );
};

export default App;
