import Grid from "../components/Grid";
import "../styles/views/GameScreen.css";
import useGameServer from "../hooks/useGameServer";

interface Props {
  gameId: string;
}

const GameScreen = ({ gameId }: Props) => {
  const { board, handlePlayerMove } = useGameServer(gameId);

  // const resetBoard = () => {
  //   setBoard((board) => board.map(() => null));
  // };

  if (board) {
    return (
      <div id="game-screen">
        <Grid board={board} makeMove={handlePlayerMove} />
        {/* <button className="button" id="reset-button" onClick={resetBoard}>
          Reset
        </button> */}
        <p id="game-text">{gameId}</p>
      </div>
    );
  }
};

export default GameScreen;
