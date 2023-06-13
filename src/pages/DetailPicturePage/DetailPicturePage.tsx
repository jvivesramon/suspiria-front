import { useEffect } from "react";
import DetailPictureCard from "../../components/DetailPictureCard/DetailPictureCard";
import { useAppSelector } from "../../store";
import DetailPicturePageStyled from "./DetailPicturePageStyled";
import useApi from "../../hooks/useApi/useApi";
import { useDispatch } from "react-redux";
import { loadPictureIdActionCreator } from "../../store/pictures/picturesSlice";
import { useParams } from "react-router-dom";

const DetailPicturePage = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { getOnePicture } = useApi();
  const { id: idParams } = useParams();
  const { id } = useAppSelector((store) => store.userStore);
  const { pictureId } = useAppSelector((store) => store.picturesStore);

  useEffect(() => {
    (async () => {
      scrollTo(0, 0);

      if (idParams) {
        const picture = await getOnePicture(idParams);

        if (picture) {
          dispatch(loadPictureIdActionCreator(picture));
        }
      }
    })();
  }, [dispatch, getOnePicture, idParams]);

  return (
    <DetailPicturePageStyled>
      <DetailPictureCard userId={id} picture={pictureId} />
    </DetailPicturePageStyled>
  );
};

export default DetailPicturePage;
