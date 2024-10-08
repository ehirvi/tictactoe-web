import Grid from "../components/Grid";

const GameScreen = () => {
  return (
    <div style={gameScreenStyle}>
      <Grid />
    </div>
  );
};

const gameScreenStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default GameScreen;
