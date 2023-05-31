import styled from "styled-components";

const LoginFormStyled = styled.div`
  padding: 30px 10px;

  .form-container {
    display: flex;
    flex-direction: column;
    min-width: 300px;
    max-width: 430px;
    margin: 0 auto;
    padding: 20px;
    gap: 30px;
    border-radius: 3px;
    background-color: ${(props) => props.theme.colors.black};

    &__input {
      color: ${(props) => props.theme.colors.white};
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: ${(props) => props.theme.size.medium};
      border-radius: 2px;
      background-color: ${(props) => props.theme.colors.primary};
      padding: 5px 20px;
      letter-spacing: 0.5px;

      :focus {
        outline: 2px solid ${(props) => props.theme.colors.tertiary};
      }

      ::placeholder {
        color: #999;
      }
    }
  }

  .login {
    &-title {
      padding: 20px;
      text-align: center;
      font-family: ${(props) => props.theme.fonts.secondary};
      font-size: ${(props) => props.theme.size.medium};
      color: ${(props) => props.theme.colors.logo};
    }

    &-button {
      width: 100%;
      margin-bottom: 30px;
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.logo};
      font-size: ${(props) => props.theme.size.medium};
      letter-spacing: 0.5px;

      &:disabled {
        background-color: #999;
      }
    }
  }
`;
export default LoginFormStyled;
