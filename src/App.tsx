import { useState } from "react";
import GameScreen from "./views/GameScreen";
import HomeScreen from "./views/HomeScreen";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <>{gameStarted ? <GameScreen /> : <HomeScreen startGame={startGame} />}</>
  );
};

export default App;
