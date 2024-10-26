import { useEffect, useState } from "react";
import "../styles/components/Button.css";
import "../styles/views/HomeScreen.css";
import gameService from "../services/gameService";

interface Props {
  startGame: () => void;
  setGameId: (id: string) => void;
}

const HomeScreen = ({ startGame, setGameId }: Props) => {
  const [startNewGame, setStartNewGame] = useState(false);

  useEffect(() => {
    const initiateSession = async () => {
      if (startNewGame) {
        const id = await gameService.createSession();
        setGameId(id);
        startGame();
        setStartNewGame(false);
      }
    };
    void initiateSession();
  }, [startNewGame, startGame, setGameId]);

  return (
    <div id="home-screen">
      <h1>Tic-Tac-Toe</h1>
      <button
        className="button"
        id="new-game-button"
        onClick={() => setStartNewGame(true)}
      >
        New Game
      </button>
      <button className="button" id="new-game-button">
        Join Game
      </button>
    </div>
  );
};

export default HomeScreen;
