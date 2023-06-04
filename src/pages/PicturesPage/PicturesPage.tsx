import { useEffect } from "react";
import PicturesList from "../../components/PicturesList/PicturesList";
import useApi from "../../hooks/useApi/useApi";
import { useAppDispatch } from "../../store";
import { loadPicturesActionCreator } from "../../store/pictures/picturesSlice";
import PicturesPageStyled from "./PicturesPageStyled";

const PicturesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getPictures } = useApi();

  useEffect(() => {
    (async () => {
      const pictures = await getPictures();
      dispatch(loadPicturesActionCreator(pictures));
    })();
  }, [getPictures, dispatch]);

  return (
    <>
      <PicturesPageStyled>
        <img
          src="images/headerTitle/suspiria-title.svg"
          alt="Suspiria logo"
          width="144"
          height="56"
          loading="lazy"
        />
      </PicturesPageStyled>
      <PicturesList />
    </>
  );
};

export default PicturesPage;
