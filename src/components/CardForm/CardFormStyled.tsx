import styled from "styled-components";

const CardFormStyled = styled.div`
  padding: 30px 10px;

  .form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    padding-bottom: 40px;
    font-size: ${(props) => props.theme.size.medium};
    font-family: ${(props) => props.theme.fonts.primary};
    color: ${(props) => props.theme.colors.white};
    border-radius: 3px;
    background-color: ${(props) => props.theme.colors.black};
    box-shadow: black 0px 10px 10px;

    & > select {
      padding: 15px 10px;
      border-radius: 3px;
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.primary};
    }

    & > textarea {
      padding: 15px 10px;
      margin-bottom: 40px;
      border-radius: 3px;
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.primary};
      max-width: 100%;
      min-width: 100%;
    }

    & > input {
      padding: 15px 10px;
      border-radius: 3px;
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.primary};
      width: 100%;
    }

    .title-form {
      margin: 20px 0;
      color: ${(props) => props.theme.colors.logo};
      font-size: ${(props) => props.theme.size.text};
      font-family: ${(props) => props.theme.fonts.secondary};
      text-align: center;
    }

    & > * {
      :focus {
        outline: 2px solid ${(props) => props.theme.colors.tertiary};
      }
    }

    & > div {
      position: relative;

      & > span {
        position: absolute;
        left: 10px;
      }

      & > input {
        padding: 15px 30px;
        border-radius: 3px;
        color: ${(props) => props.theme.colors.white};
        background-color: ${(props) => props.theme.colors.primary};
        width: 100%;

        :focus {
          outline: 2px solid ${(props) => props.theme.colors.tertiary};
        }
      }
    }

    .create-button {
      width: 100%;
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.tertiary};
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: ${(props) => props.theme.size.medium};
      letter-spacing: 0.5px;
      border-radius: 1px;

      &:disabled {
        background-color: #999;
      }
    }
  }
`;

export default CardFormStyled;
