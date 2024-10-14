// import { useState } from "react";
import Button from "../components/Button";
import Grid from "../components/Grid";
import "../styles/views/GameScreen.css";
import useGameServer from "../hooks/useGameServer";

const GameScreen = () => {
  const { board, setBoard, handlePlayerMove } = useGameServer();

  const resetBoard = () => {
    const cleanBoard = board.map(() => null);
    setBoard(cleanBoard);
  };

  return (
    <div id="game-screen">
      <Grid board={board} makeMove={handlePlayerMove} />
      <Button text="Reset" eventHandler={resetBoard} />
    </div>
  );
};

export default GameScreen;
