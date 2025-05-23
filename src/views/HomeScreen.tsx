import { useState } from "react";
import gameService from "../services/gameService";
import JoinForm from "../components/JoinForm";
import useGameStore from "../store/gameStore";
import MenuButton from "../components/MenuButton";
import styled from "styled-components";
import { SessionCache } from "../utils/types";

const StyledHomeScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  font-family: ${(props) => props.theme.fontFamily.primary};
  color: white;
`;

const NewGameButton = styled(MenuButton)`
  background-color: ${(props) => props.theme.color.button.green};

  &:hover {
    background-color: ${(props) => props.theme.color.button.greenHover};
  }
`;

const HomeScreen = () => {
  const setSessionStarted = useGameStore((state) => state.setSessionStarted);
  const setSessionId = useGameStore((state) => state.setSessionId);
  const setPlayerToken = useGameStore((state) => state.setPlayerToken);
  const setPlayerRole = useGameStore((state) => state.setPlayerRole);
  const [isJoinFormOpen, setJoinFormOpen] = useState(false);

  const startSession = async () => {
    const sessionData = await gameService.createSession();
    const sessionCache: SessionCache = {
      playerToken: sessionData.token,
      playerRole: sessionData.role,
      sessionId: sessionData.game_id,
      sessionStarted: true,
    };
    const value = JSON.stringify(sessionCache);
    sessionStorage.setItem("gameSessionCache", value);

    setPlayerToken(sessionData.token);
    setPlayerRole(sessionData.role);
    setSessionId(sessionData.game_id);
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
