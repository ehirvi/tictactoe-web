import "../styles/components/Square.css";

interface Props {
  value: string | null;
  position: number;
  makeMove: (position: number) => void;
}

const Square = ({ value, position, makeMove }: Props) => {
  const handleClick = () => {
    if (!value) {
      console.log("click");
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
