import Grid from "../components/Grid";
import useGameServer from "../hooks/useGameServer";
import styled from "styled-components";

const StyledGameScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${(props) => props.theme.fontFamily.primary};
  color: white;
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
  border: 4px solid black;
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-size: 20px;
  font-weight: normal;
  color: black;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
  padding-bottom: 2px;
  box-shadow: 0px 0px 5px 3px purple;
  background-color: ${(props) => props.theme.color.button.blue};

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.theme.color.button.blueHover};
      transition: 0.2s;
    }
  }
  @media (hover: none) {
    &:active {
      background-color: ${(props) => props.theme.color.button.blueHover};
    }
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
