import "../styles/components/Square.css";
import { PlayerMark } from "../utils/types";

interface Props {
  value: PlayerMark | null;
  position: number;
  makeMove: (position: number) => void;
}

const Square = ({ value, position, makeMove }: Props) => {
  const handleClick = () => {
    if (!value) {
      makeMove(position);
    }
  };

  return (
    <button id="square" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
