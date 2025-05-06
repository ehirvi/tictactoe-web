import Grid from "../components/Grid";
import useGameServer from "../hooks/useGameServer";
import styled from "styled-components";

const StyledGameScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${(props) => props.theme.fontFamily.primary};
  gap: 40px;
`;

const Clipboard = styled.div`
  display: flex;
  // align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const ClipboardText = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0px;
`;

const ClipboardBox = styled.input`
  border: solid 1px;
  outline: solid 1px;
  padding: 5px;
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-size: 15px;
`;

const CopyButton = styled.button`
  border: solid black 3px;
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-size: 20px;
  font-weight: normal;
  color: black;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
  padding-bottom: 2px;
  box-shadow: 1px 1px 1px 0 purple, 2px 2px 2px 0 black;
  background-color: lightskyblue;

  &:hover {
    background-color: rgb(77, 126, 156);
    transition: 0.2s;
  }
`;

const GameScreen = () => {
  const { board, sessionId, playerRole, handlePlayerMove } = useGameServer();

  const handleButton = () => {
    void copyToClipboard();
  };

  const copyToClipboard = async () => {
    if (sessionId) {
      await navigator.clipboard.writeText(sessionId);
    }
  };

  return (
    <StyledGameScreen>
      {board && <Grid board={board} makeMove={handlePlayerMove} />}
      {sessionId && playerRole === "Host" && (
        <Clipboard>
          <ClipboardText>Use this code to invite a player</ClipboardText>
          <ClipboardBox type="text" readOnly value={sessionId}></ClipboardBox>
          <CopyButton onClick={handleButton}>Copy to clipboard</CopyButton>
        </Clipboard>
      )}
    </StyledGameScreen>
  );
};

export default GameScreen;
