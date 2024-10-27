import Grid from "../components/Grid";
import "../styles/views/GameScreen.css";
import useGameServer from "../hooks/useGameServer";

interface Props {
  gameId: string;
}

const GameScreen = ({ gameId }: Props) => {
  const { board, setBoard, handlePlayerMove } = useGameServer(gameId);

  const resetBoard = () => {
    setBoard((board) => board.map(() => null));
  };

  return (
    <div id="game-screen">
      <Grid board={board} makeMove={handlePlayerMove} />
      <button className="button" id="reset-button" onClick={resetBoard}>
        Reset
      </button>
    </div>
  );
};

export default GameScreen;
