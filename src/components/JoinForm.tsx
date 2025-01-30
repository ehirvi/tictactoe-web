import { useState } from "react";
import gameService from "../services/gameService";
import useGameStore from "../store/gameStore";
import styled from "styled-components";
import MenuButton from "./MenuButton";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const TextInput = styled.input`
  border: solid 2px;
  outline: solid 2px;
  padding: 10px;
  font-family: monospace;
  font-size: 20px;
`;

const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CancelButton = styled(MenuButton)`
  background-color: rgb(221, 101, 101);

  &:hover {
    background-color: rgb(129, 58, 58);
  }
`;

const JoinButton = styled(MenuButton)`
  background-color: rgb(126, 216, 117);

  &:hover {
    background-color: rgb(65, 116, 60);
  }
`;

interface Props {
  onCancel: () => void;
}

const JoinForm = ({ onCancel }: Props) => {
  const setSessionId = useGameStore((state) => state.setSessionId);
  const setSessionStarted = useGameStore(
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
    <Form onSubmit={handleSubmit}>
      <TextInput
        placeholder="Enter Game ID"
        type="text"
        value={idInput}
        onChange={({ target }) => setIdInput(target.value)}
      />
      <FormButtons>
        <CancelButton type="button" onClick={onCancel}>
          Cancel
        </CancelButton>
        <JoinButton type="submit">Join</JoinButton>
      </FormButtons>
    </Form>
  );
};

export default JoinForm;
