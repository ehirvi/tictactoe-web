import Row from "./Row";

const Grid = () => {
  return (
    <div style={gridStyle}>
      <Row />
      <Row />
      <Row />
    </div>
  );
};

const gridStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

export default Grid;
