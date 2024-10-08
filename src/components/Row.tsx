import Square from "./Square";

const Row = () => {
  return (
    <div style={rowStyle}>
      <Square />
      <Square />
      <Square />
    </div>
  );
};

const rowStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: 10,
};

export default Row;
