import styled from "styled-components";

const MenuButton = styled.button`
  border: none;
  border-radius: 10px;
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-size: 30px;
  font-weight: normal;
  color: black;
  margin: 20px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  box-shadow: 2px 2px 0px 2px white;

  &:active {
    border-right: none;
    border-bottom: none;
    border-left: 6px solid white;
    border-top: 6px solid white;
  }
`;

export default MenuButton;
