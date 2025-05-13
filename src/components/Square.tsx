import styled, { useTheme } from "styled-components";
import { PlayerMark } from "../utils/types";
import useGameStore from "../store/gameStore";

const StyledSquare = styled.button<{ $playerColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  padding: 10px;
  border: none;
  font-size: 45px;
  font-family: ${(props) => props.theme.fontFamily.primary};
  background-color: black;
  color: ${(props) => props.$playerColor};

  &:hover {
    transition: 0.2s;
    background-color: ${(props) => props.theme.color.button.blue};
    color: black;
  }
`;

interface Props {
  value: PlayerMark | null;
  position: number;
  makeMove: (position: number) => void;
}

const Square = ({ value, position, makeMove }: Props) => {
  const playerRole = useGameStore((state) => state.playerRole);
  const theme = useTheme();

  const playerColor =
    (playerRole !== "Host" && value !== "X") ||
    (playerRole !== "Guest" && value !== "O")
      ? theme.color.button.blue
      : theme.color.button.red;

  const handleClick = () => {
    if (!value) {
      makeMove(position);
    }
  };

  return (
    <StyledSquare $playerColor={playerColor} onClick={handleClick}>
      {value}
    </StyledSquare>
  );
};

export default Square;
