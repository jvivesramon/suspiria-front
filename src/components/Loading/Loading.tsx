import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <div className="loading-container" aria-label="loading" />
      <span className="loading-container__text">Loading...</span>
    </LoadingStyled>
  );
};

export default Loading;
