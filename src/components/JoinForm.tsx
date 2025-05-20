import { useState } from "react";
import gameService from "../services/gameService";
import useGameStore from "../store/gameStore";
import styled from "styled-components";
import MenuButton from "./MenuButton";
import { SessionCache } from "../utils/types";

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

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.theme.color.button.greenHover};
    }
  }
  @media (hover: none) {
    &:active {
      background-color: ${(props) => props.theme.color.button.greenHover};
    }
  }
`;

interface Props {
  onCancel: () => void;
}

const JoinForm = ({ onCancel }: Props) => {
  const setPlayerToken = useGameStore((state) => state.setPlayerToken);
  const setPlayerRole = useGameStore((state) => state.setPlayerRole);
  const setSessionStarted = useGameStore((state) => state.setSessionStarted);
  const [idInput, setIdInput] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (idInput.length > 0) {
      void joinGame();
    }
  };

  const joinGame = async () => {
    const sessionData = await gameService.joinSession(idInput);
    const sessionCache: SessionCache = {
      playerToken: sessionData.token,
      playerRole: sessionData.role,
      sessionId: idInput,
      sessionStarted: true,
    };
    const value = JSON.stringify(sessionCache);
    sessionStorage.setItem("gameSessionCache", value);

    setPlayerToken(sessionData.token);
    setPlayerRole(sessionData.role);
    setSessionStarted(true);
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
