import { useState } from "react";
import "../styles/components/JoinForm.css";
import gameService from "../services/gameService";

interface Props {
  onCancel: () => void;
  startGame: (id: string) => void;
}

const JoinForm = ({ onCancel, startGame }: Props) => {
  const [gameId, setGameId] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (gameId.length !== 0) {
      void joinGame(gameId);
    }
  };

  const joinGame = async (id: string) => {
    const successful = await gameService.joinSession(id);
    if (successful) {
      startGame(gameId);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="join-form">
        <input
          id="text-input"
          placeholder="Enter Game ID"
          type="text"
          value={gameId}
          onChange={({ target }) => setGameId(target.value)}
        />
        <div id="form-buttons">
          <button
            className="button"
            id="cancel-button"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button className="button" id="join-button" type="submit">
            Join
          </button>
        </div>
      </div>
    </form>
  );
};

export default JoinForm;
