import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  padding: 20px;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colors.tertiary};

  .not-found-page-button {
    text-align: center;
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: ${(props) => props.theme.size.medium};
    text-decoration: underline;

    &:active {
      background-color: ${(props) => props.theme.colors.tertiary};
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

export default NotFoundPageStyled;
