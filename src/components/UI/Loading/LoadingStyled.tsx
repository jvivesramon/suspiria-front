import styled from "styled-components";

const LoadingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  background-color: rgb(0 0 0 / 60%);

  .loading-container {
    width: 180px;
    height: 180px;
    background-size: cover;
    background-position: center;
    animation: imageCycle 2s linear infinite;
  }

  @keyframes imageCycle {
    0% {
      background-image: url(images/illustrations/woman-0.svg);
    }
    32% {
      background-image: url(images/illustrations/woman-1.svg);
    }
    74% {
      background-image: url(images/illustrations/woman-2.svg);
    }
    100% {
      background-image: url(images/illustrations/woman-3.svg);
    }
  }
`;

export default LoadingStyled;
