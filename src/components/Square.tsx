import "../styles/components/Square.css";

interface Props {
  value: string | undefined;
  position: number;
  makeMove: (index: number) => void;
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
      {value && value}
    </button>
  );
};

export default Square;
