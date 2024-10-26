import { useState } from "react";
import GameScreen from "./views/GameScreen";
import HomeScreen from "./views/HomeScreen";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameId, setGameId] = useState<string>();

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <>
      {gameStarted ? (
        <GameScreen gameId={gameId!} />
      ) : (
        <HomeScreen startGame={startGame} setGameId={setGameId} />
      )}
    </>
  );
};

export default App;
