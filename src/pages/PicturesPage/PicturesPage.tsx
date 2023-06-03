import PicturesPageStyled from "./PicturesPageStyled";

const PicturesPage = (): React.ReactElement => {
  return (
    <PicturesPageStyled>
      <img
        src="images/headerTitle/suspiria-title.svg"
        alt="Suspiria logo"
        width="144"
        height="56"
        loading="lazy"
      />
    </PicturesPageStyled>
  );
};

export default PicturesPage;
