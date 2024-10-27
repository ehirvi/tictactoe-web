import { useState } from "react";
import GameScreen from "./views/GameScreen";
import HomeScreen from "./views/HomeScreen";

const App = () => {
  const [gameId, setGameId] = useState<string>();

  const startGame = (id: string) => {
    setGameId(id);
  };

  return (
    <>
      {gameId ? (
        <GameScreen gameId={gameId} />
      ) : (
        <HomeScreen startGame={startGame} />
      )}
    </>
  );
};

export default App;
