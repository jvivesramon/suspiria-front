import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  padding: 0 20px;
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: black 0px 10px 10px;
`;

export default HeaderStyled;
