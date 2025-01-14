import { useState } from "react";
import "../styles/components/Button.css";
import "../styles/views/HomeScreen.css";
import gameService from "../services/gameService";
import JoinForm from "../components/JoinForm";
import useGameSessionStore from "../store/useGameSessionStore";

const HomeScreen = () => {
  const setSessionStarted = useGameSessionStore(
    (state) => state.setSessionStarted
  );
  const setSessionId = useGameSessionStore((state) => state.setSessionId);
  const [isJoinFormOpen, setJoinFormOpen] = useState(false);

  const startSession = async () => {
    const id = await gameService.createSession();
    setSessionId(id);
    setSessionStarted(true);
  };

  const handleNewGameButton = () => {
    void startSession();
  };

  const handleJoinForm = () => {
    setJoinFormOpen(!isJoinFormOpen);
  };

  return (
    <div id="home-screen">
      <h1>Tic-Tac-Toe</h1>
      <button
        className="button"
        id="new-game-button"
        onClick={handleNewGameButton}
      >
        New Game
      </button>
      {isJoinFormOpen ? (
        <JoinForm onCancel={handleJoinForm} />
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
