import useGameSessionStore from "./store/useGameSessionStore";
import GameScreen from "./views/GameScreen";
import HomeScreen from "./views/HomeScreen";

const App = () => {
  const sessionStarted = useGameSessionStore((state) => state.sessionStarted);

  return <>{sessionStarted ? <GameScreen /> : <HomeScreen />}</>;
};

export default App;
