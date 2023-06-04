import styled from "styled-components";

const LoginFormStyled = styled.div`
  padding: 30px 10px;

  .form-container {
    display: flex;
    flex-direction: column;
    max-width: 430px;
    margin: 0 auto;
    padding: 50px 20px;
    gap: 30px;
    border-radius: 3px;
    background-color: ${(props) => props.theme.colors.black};
    box-shadow: black 0px 10px 10px;

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
    &-button {
      width: 100%;
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.logo};
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: ${(props) => props.theme.size.medium};
      letter-spacing: 0.5px;

      &:disabled {
        background-color: #999;
      }
    }
  }
`;
export default LoginFormStyled;
