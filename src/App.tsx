import useGameStore from "./store/gameStore";
import GameScreen from "./views/GameScreen";
import HomeScreen from "./views/HomeScreen";

const App = () => {
  const sessionStarted = useGameStore((state) => state.sessionStarted);

  return <>{sessionStarted ? <GameScreen /> : <HomeScreen />}</>;
};

export default App;
