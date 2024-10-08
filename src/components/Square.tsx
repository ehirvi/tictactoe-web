const Square = () => {
  return <div style={squareStyle}>X</div>;
};

const squareStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "solid",
  padding: 10,
  fontSize: 50,
  width: 50,
  height: 50,
};
export default Square;
