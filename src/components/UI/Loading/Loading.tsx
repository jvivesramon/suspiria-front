import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <div className="loading-container" aria-label="loading" />
    </LoadingStyled>
  );
};

export default Loading;
