import { CrossIcon } from "../assets";
import GameButton from "../components/GameButton";
import Grid from "../components/Grid";
import useGameServer from "../hooks/useGameServer";
import styled from "styled-components";
import { clearGameCache } from "../utils/sessionStorage";
import useGameStore from "../store/gameStore";

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
  /* align-items: center; */
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

const CopyButton = styled(GameButton)`
  background-color: ${(props) => props.theme.color.button.blue};
  border-right: 6px solid ${(props) => props.theme.color.button.blueShadow};
  border-bottom: 6px solid ${(props) => props.theme.color.button.blueShadow};

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

const HomeButton = styled(GameButton)`
  display: flex;
  align-items: center;
  gap: 5px;
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

const GameScreen = () => {
  const { board, gameId, playerRole, handlePlayerMove } = useGameServer();
  const resetSessionData = useGameStore((store) => store.resetSessionData);
  const resetPlayerData = useGameStore((store) => store.resetPlayerData);
  const playerIsHost = gameId !== undefined && playerRole === "Host";

  const handleButton = () => {
    void copyToClipboard();
  };

  const copyToClipboard = async () => {
    if (gameId) {
      await navigator.clipboard.writeText(gameId);
    }
  };

  const exitGame = () => {
    clearGameCache();
    resetSessionData();
    resetPlayerData();
  };

  return (
    <StyledGameScreen>
      {board && <Grid board={board} makeMove={handlePlayerMove} />}
      {playerIsHost && (
        <Clipboard>
          <ClipboardText>Use this code to invite a player</ClipboardText>
          <ClipboardBox type="text" readOnly value={gameId}></ClipboardBox>
          <CopyButton onClick={handleButton}>Copy to clipboard</CopyButton>
        </Clipboard>
      )}
      <HomeButton onClick={exitGame}>{<CrossIcon />}Exit game</HomeButton>
    </StyledGameScreen>
  );
};

export default GameScreen;
