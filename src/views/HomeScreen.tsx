import { useEffect, useState } from "react";
import "../styles/components/Button.css";
import "../styles/views/HomeScreen.css";
import gameService from "../services/gameService";
import JoinForm from "../components/JoinForm";

interface Props {
  startGame: (id: string) => void;
}

const HomeScreen = ({ startGame }: Props) => {
  const [createNewGame, setCreateNewGame] = useState(false);
  const [joinGame, setJoinGame] = useState(false);

  useEffect(() => {
    const initiateSession = async () => {
      if (createNewGame) {
        const id = await gameService.createSession();
        startGame(id);
      }
    };
    void initiateSession();
  }, [createNewGame, startGame]);

  const handleCreateGame = () => {
    setCreateNewGame(true);
  };

  const handleJoinForm = () => {
    setJoinGame(!joinGame);
  };

  return (
    <div id="home-screen">
      <h1>Tic-Tac-Toe</h1>
      <button
        className="button"
        id="new-game-button"
        onClick={handleCreateGame}
      >
        New Game
      </button>
      {joinGame ? (
        <JoinForm onCancel={handleJoinForm} startGame={startGame} />
      ) : (
        <button
          className="button"
          id="new-game-button"
          onClick={handleJoinForm}
        >
          Join Game
        </button>
      )}
    </div>
  );
};

export default HomeScreen;
