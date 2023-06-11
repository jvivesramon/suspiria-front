import styled from "styled-components";

const LoginPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-inline: auto;

  .login-container {
    &__info {
      display: flex;
      justify-content: center;
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: ${(props) => props.theme.size.secondaryTitle};
      letter-spacing: 1px;
      color: ${(props) => props.theme.colors.white};
      margin: 15px 0 0 0;
    }

    &__title {
      display: flex;
      justify-content: center;
      overflow: hidden;
      letter-spacing: 1px;
      font-family: ${(props) => props.theme.fonts.secondary};
      font-size: ${(props) => props.theme.size.title};
      color: ${(props) => props.theme.colors.logo};
      margin: 0 0 10px 0;
    }

    &__slogan {
      display: flex;
      justify-content: center;
      letter-spacing: 1px;
      font-family: ${(props) => props.theme.fonts.primary};
      color: ${(props) => props.theme.colors.white};
      font-size: ${(props) => props.theme.size.secondaryTitle};

      &--color {
        margin: 0 5px;
        font-family: ${(props) => props.theme.fonts.primary};
        color: ${(props) => props.theme.colors.info};
      }
    }
  }

  .home-image {
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 0;
    width: 360px;
    height: 360px;
  }
`;

export default LoginPageStyled;
