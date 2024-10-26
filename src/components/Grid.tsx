import Row from "./Row";
import "../styles/components/Grid.css";
import { GameBoard } from "../utils/types";

interface Props {
  board: GameBoard;
  makeMove: (position: number) => void;
}

const Grid = ({ board, makeMove }: Props) => {
  return (
    <div id="grid">
      <Row
        values={board.slice(0, 3)}
        positions={[0, 1, 2]}
        makeMove={makeMove}
      />
      <Row
        values={board.slice(3, 6)}
        positions={[3, 4, 5]}
        makeMove={makeMove}
      />
      <Row
        values={board.slice(6, 9)}
        positions={[6, 7, 8]}
        makeMove={makeMove}
      />
    </div>
  );
};

export default Grid;
