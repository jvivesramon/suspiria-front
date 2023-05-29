import styled from "styled-components";

const ContainerStyled = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export default ContainerStyled;
