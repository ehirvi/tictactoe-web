import styled from "styled-components";
import { GameBoard } from "../utils/types";
import Square from "./Square";

const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

interface Props {
  board: GameBoard;
  makeMove: (position: number) => void;
}

const Grid = ({ board, makeMove }: Props) => {
  return (
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
  );
};

export default Grid;
