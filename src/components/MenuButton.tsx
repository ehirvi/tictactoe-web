import styled from "styled-components";

const MenuButton = styled.button`
  border: 4px solid black;
  font-family: ${props => props.theme.fontFamily.primary};
  font-size: 30px;
  font-weight: normal;
  color: black;
  margin: 20px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
  padding-bottom: 2px;
  box-shadow: 0px 0px 5px 3px purple;

  &:hover {
    transition: 0.2s;
  }
`;

export default MenuButton