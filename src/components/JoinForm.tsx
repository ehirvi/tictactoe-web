import { useState } from "react";
import "../styles/components/JoinForm.css";

interface Props {
  onCancel: () => void;
}

const JoinForm = ({ onCancel }: Props) => {
  const [gameId, setGameId] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
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
