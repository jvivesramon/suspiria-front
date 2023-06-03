import { picturesMock } from "../../mocks/mocks/picturesMock";
import { useAppDispatch } from "../../store";
import { loadPicturesActionCreator } from "../../store/pictures/picturesSlice";
import PicturesPageStyled from "./PicturesPageStyled";

const PicturesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { pictures } = picturesMock;

  dispatch(loadPicturesActionCreator(pictures));

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
