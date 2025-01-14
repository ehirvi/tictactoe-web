import { useState } from "react";
import "../styles/components/JoinForm.css";
import gameService from "../services/gameService";
import useGameSessionStore from "../store/useGameSessionStore";

interface Props {
  onCancel: () => void;
}

const JoinForm = ({ onCancel }: Props) => {
  const setSessionId = useGameSessionStore((state) => state.setSessionId);
  const setSessionStarted = useGameSessionStore(
    (state) => state.setSessionStarted
  );
  const [idInput, setIdInput] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (idInput.length > 0) {
      void joinGame();
    }
  };

  const joinGame = async () => {
    const successful = await gameService.joinSession(idInput);
    if (successful) {
      setSessionId(idInput);
      setSessionStarted(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="join-form">
        <input
          id="text-input"
          placeholder="Enter Game ID"
          type="text"
          value={idInput}
          onChange={({ target }) => setIdInput(target.value)}
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
