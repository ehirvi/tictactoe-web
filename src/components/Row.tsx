import Square from "./Square";
import "../styles/components/Row.css";

interface Props {
  values: (string | null)[];
  positions: number[];
  makeMove: (index: number) => void;
}

const Row = ({ values, positions, makeMove }: Props) => {
  return (
    <div id="row">
      <Square value={values[0]} position={positions[0]} makeMove={makeMove} />
      <Square value={values[1]} position={positions[1]} makeMove={makeMove} />
      <Square value={values[2]} position={positions[2]} makeMove={makeMove} />
    </div>
  );
};

export default Row;
