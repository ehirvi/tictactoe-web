import "../styles/components/Button.css"
import "../styles/views/HomeScreen.css";

interface Props {
  startGameSession: () => void;
}

const HomeScreen = ({ startGameSession }: Props) => {

  return (
    <div id="home-screen">
      <h1>Tic-Tac-Toe</h1>
      <button className="button" id="new-game-button" onClick={startGameSession}>New Game</button>
      <button className="button" id="new-game-button">Join Game</button>
    </div>
  );
};

export default HomeScreen;
