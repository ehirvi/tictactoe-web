import { useState } from "react";
import GameScreen from "./views/GameScreen";
import HomeScreen from "./views/HomeScreen";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGameSession = () => {
    setGameStarted(true);
  };

  return (
    <>
      {!gameStarted && <HomeScreen startGameSession={startGameSession} />}
      {gameStarted && <GameScreen />}
    </>
  );
};

export default App;
