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
      font-size: ${(props) => props.theme.size.slogan};
      letter-spacing: 1px;
      color: ${(props) => props.theme.colors.white};
      margin: 30px 0 0 0;
    }

    &__title {
      display: flex;
      justify-content: center;
      overflow: hidden;
      letter-spacing: 1px;
      font-family: ${(props) => props.theme.fonts.secondary};
      font-size: ${(props) => props.theme.size.title};
      color: ${(props) => props.theme.colors.logo};
      margin: 0 0 30px 0;
    }

    &__slogan {
      display: flex;
      justify-content: center;
      letter-spacing: 1px;
      font-family: ${(props) => props.theme.fonts.primary};
      color: ${(props) => props.theme.colors.white};
      font-size: ${(props) => props.theme.size.info};

      &--color {
        margin: 0 5px;
        font-family: ${(props) => props.theme.fonts.primary};
        color: ${(props) => props.theme.colors.info};
        font-size: ${(props) => props.theme.size.info};
      }
    }
  }

  .home-image {
    margin: 0 auto;
    margin-bottom: 40px;
    width: 430px;
    height: 430px;
  }
`;

export default LoginPageStyled;
