import styled from "styled-components";
import { PlayerMark } from "../utils/types";

const StyledSquare = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  padding: 10px;
  border: solid 2px black;
  outline: solid 1px black;
  font-size: 45px;
  font-family: ${(props) => props.theme.fontFamily.primary};
  background-color: #60c473;
  color: white;
  box-shadow: 2px 2px 2px 0 purple, 3px 3px 3px 0 black;

  &:hover {
    transition: 0.2s;
    background-color: #356e3f;
  }
`;

interface Props {
  value: PlayerMark | null;
  position: number;
  makeMove: (position: number) => void;
}

const Square = ({ value, position, makeMove }: Props) => {
  const handleClick = () => {
    if (!value) {
      makeMove(position);
    }
  };

  return <StyledSquare onClick={handleClick}>{value}</StyledSquare>;
};

export default Square;
