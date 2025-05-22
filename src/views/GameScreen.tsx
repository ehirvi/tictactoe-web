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
  border: none;
  border-radius: 10px;
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-size: 20px;
  font-weight: normal;
  color: black;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-right: 6px solid ${(props) => props.theme.color.button.blueShadow};
  border-bottom: 6px solid ${(props) => props.theme.color.button.blueShadow};
  box-shadow: 2px 2px 0px 2px white;
  background-color: ${(props) => props.theme.color.button.blue};

  &:active {
    border-right: none;
    border-bottom: none;
    border-left: 6px solid white;
    border-top: 6px solid white;
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.theme.color.button.blueHover};
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
