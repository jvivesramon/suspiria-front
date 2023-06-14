import styled from "styled-components";

const LoadingStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  gap: 20px;
  background-color: rgb(0 0 0 / 60%);

  .loading-container {
    width: 180px;
    height: 180px;
    background-size: cover;
    background-position: center;
    animation: imageCycle 2s linear infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }

    &__text {
      text-align: center;
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: ${(props) => props.theme.size.info};
      color: ${(props) => props.theme.colors.tertiary};
    }
  }

  @keyframes imageCycle {
    0% {
      background-image: url(/images/illustrations/woman-0.svg);
    }
    32% {
      background-image: url(/images/illustrations/woman-1.svg);
    }
    74% {
      background-image: url(/images/illustrations/woman-2.svg);
    }
    100% {
      background-image: url(/images/illustrations/woman-3.svg);
    }
  }
`;

export default LoadingStyled;
