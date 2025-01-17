import Grid from "../components/Grid";
import useGameServer from "../hooks/useGameServer";
import styled from "styled-components";

const StyledGameScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: monospace;
`;

const SessionIdText = styled.p`
  font-size: 20px;
`;

const GameScreen = () => {
  const { board, sessionId, handlePlayerMove } = useGameServer();

  if (board) {
    return (
      <StyledGameScreen>
        <Grid board={board} makeMove={handlePlayerMove} />
        <SessionIdText>{sessionId}</SessionIdText>
      </StyledGameScreen>
    );
  }
};

export default GameScreen;
