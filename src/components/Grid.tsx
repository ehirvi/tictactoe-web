import styled, { keyframes } from "styled-components";
import { GameBoard } from "../utils/types";
import Square from "./Square";
import useGameStore from "../store/gameStore";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: white;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const StatusContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StatusText = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const dotAnimation = keyframes`
  0% {
    content: "";
  }
  25% {
    content: ".";
  }
  50% {
    content: "..";
  }
  75% {
    content: "...";
  }
  100% {
    content: "";
  }
`;

const AnimatedDots = styled.p`
  &::after {
    font-size: 18px;
    font-weight: bold;
    content: "";
    animation: ${dotAnimation} 2s steps(4) infinite;
  }
`;

interface Props {
  board: GameBoard;
  makeMove: (position: number) => void;
}

const Grid = ({ board, makeMove }: Props) => {
  const gameStatusMessage = useGameStore((state) => state.gameStatusMessage);
  const playersJoined = useGameStore((state) => state.playersJoined);

  return (
    <StyledContainer>
      <StatusContainer>
        <StatusText>{gameStatusMessage}</StatusText>
        {playersJoined === false && <AnimatedDots />}
      </StatusContainer>
      <StyledGrid>
        <StyledRow>
          <Square value={board[0]} position={0} makeMove={makeMove} />
          <Square value={board[1]} position={1} makeMove={makeMove} />
          <Square value={board[2]} position={2} makeMove={makeMove} />
        </StyledRow>
        <StyledRow>
          <Square value={board[3]} position={3} makeMove={makeMove} />
          <Square value={board[4]} position={4} makeMove={makeMove} />
          <Square value={board[5]} position={5} makeMove={makeMove} />
        </StyledRow>
        <StyledRow>
          <Square value={board[6]} position={6} makeMove={makeMove} />
          <Square value={board[7]} position={7} makeMove={makeMove} />
          <Square value={board[8]} position={8} makeMove={makeMove} />
        </StyledRow>
      </StyledGrid>
    </StyledContainer>
  );
};

export default Grid;
