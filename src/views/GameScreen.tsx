import Grid from "../components/Grid";
import "../styles/views/GameScreen.css";
import useGameServer from "../hooks/useGameServer";

const GameScreen = () => {
  const { board, sessionId, handlePlayerMove } = useGameServer();

  if (board) {
    return (
      <div id="game-screen">
        <Grid board={board} makeMove={handlePlayerMove} />
        <p id="game-text">{sessionId}</p>
      </div>
    );
  }
};

export default GameScreen;
