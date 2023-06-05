import styled from "styled-components";

const FeedbackStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  position: sticky;
  top: 0;
  background-color: rgb(0 0 0 / 60%);

  .feedback-container {
    display: inline-block;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 40px;
    width: 400px;
    height: 210px;
    background-color: ${(props) => props.theme.colors.primary};

    &__text {
      text-align: center;
      color: ${(props) => props.theme.colors.white};
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: ${(props) => props.theme.size.text};
      line-height: 40px;

      &--ok {
        color: ${(props) => props.theme.colors.ok};
      }

      &--error {
        color: ${(props) => props.theme.colors.error};
      }
    }
  }

  .button-feedback {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 48px;
    height: 48px;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export default FeedbackStyled;
