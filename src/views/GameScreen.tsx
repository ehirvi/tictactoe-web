import { useState } from "react";
import Button from "../components/Button";
import Grid from "../components/Grid";
import "../styles/views/GameScreen.css";

const GameScreen = () => {
  const [board, setBoard] = useState<(string | undefined)[]>([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  const resetBoard = () => {
    const cleanBoard = board.map(() => undefined);
    setBoard(cleanBoard);
  };

  const makeMove = (index: number) => {
    const updatedBoard = [...board];
    updatedBoard[index] = "X";
    setBoard(updatedBoard);
  };

  return (
    <div id="game-screen">
      <Grid board={board} makeMove={makeMove} />
      <Button text="Reset" eventHandler={resetBoard} />
    </div>
  );
};

export default GameScreen;
