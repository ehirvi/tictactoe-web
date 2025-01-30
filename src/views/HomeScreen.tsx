import { useState } from "react";
import gameService from "../services/gameService";
import JoinForm from "../components/JoinForm";
import useGameStore from "../store/gameStore";
import MenuButton from "../components/MenuButton";
import styled from "styled-components";

const StyledHomeScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  font-family: monospace;
`;

const NewGameButton = styled(MenuButton)`
  background-color: rgb(126, 216, 117);

  &:hover {
    background-color: rgb(65, 116, 60);
  }
`;

const HomeScreen = () => {
  const setSessionStarted = useGameStore(
    (state) => state.setSessionStarted
  );
  const setSessionId = useGameStore((state) => state.setSessionId);
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
    <StyledHomeScreen>
      <h1>Tic-Tac-Toe</h1>
      <NewGameButton onClick={handleNewGameButton}>New Game</NewGameButton>
      {isJoinFormOpen ? (
        <JoinForm onCancel={handleJoinForm} />
      ) : (
        <NewGameButton onClick={handleJoinForm}>Join Game</NewGameButton>
      )}
    </StyledHomeScreen>
  );
};

export default HomeScreen;
