import styled from "styled-components";

const MenuButton = styled.button`
  border: solid black 4px;
  font-family: ${props => props.theme.fontFamily.primary};
  font-size: 30px;
  font-weight: normal;
  color: black;
  margin: 20px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
  padding-bottom: 2px;
  box-shadow: 2px 2px 2px 0 purple, 3px 3px 3px 0 black;

  &:hover {
    transition: 0.2s;
  }
`;

export default MenuButton