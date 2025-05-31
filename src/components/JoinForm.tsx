import { useState } from "react";
import gameService from "../services/gameService";
import useGameStore from "../store/gameStore";
import styled from "styled-components";
import MenuButton from "./MenuButton";
import { saveGameCache } from "../utils/sessionStorage";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const TextInput = styled.input`
  border: solid 2px;
  outline: solid 1px;
  padding: 10px;
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-size: 20px;
`;

const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CancelButton = styled(MenuButton)`
  background-color: ${(props) => props.theme.color.button.red};
  border-right: 6px solid ${(props) => props.theme.color.button.redShadow};
  border-bottom: 6px solid ${(props) => props.theme.color.button.redShadow};

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.theme.color.button.redHover};
    }
  }
  @media (hover: none) {
    &:active {
      background-color: ${(props) => props.theme.color.button.redHover};
    }
  }
`;

const JoinButton = styled(MenuButton)`
  background-color: ${(props) => props.theme.color.button.green};
  border-right: 6px solid ${(props) => props.theme.color.button.greenShadow};
  border-bottom: 6px solid ${(props) => props.theme.color.button.greenShadow};

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.theme.color.button.greenHover};
    }
  }
  &:active {
    background-color: ${(props) => props.theme.color.button.greenHover};
  }
`;

interface Props {
  onCancel: () => void;
}

const JoinForm = ({ onCancel }: Props) => {
  const setPlayerToken = useGameStore((state) => state.setPlayerToken);
  const setPlayerRole = useGameStore((state) => state.setPlayerRole);
  const setGameStarted = useGameStore((state) => state.setGameStarted);
  const [idInput, setIdInput] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (idInput.length > 0) {
      void joinGame();
    }
  };

  const joinGame = async () => {
    const sessionData = await gameService.joinGameSession(idInput);
    saveGameCache(sessionData, idInput);
    setPlayerToken(sessionData.token);
    setPlayerRole(sessionData.role);
    setGameStarted(true);
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
