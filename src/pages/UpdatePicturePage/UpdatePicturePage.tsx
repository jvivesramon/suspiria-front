import { useNavigate } from "react-router-dom";
import PictureForm from "../../components/PictureForm/PictureForm";
import useApi from "../../hooks/useApi/useApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadPictureIdActionCreator } from "../../store/pictures/picturesSlice";
import { initialEmptyPictureState } from "../../utils/initialStates/initialStates";
import path from "../../routers/paths/paths";
import { PictureCardStructure } from "../../types";

const UpdatePicturePage = (): React.ReactElement => {
  const { getUpdatedPicture } = useApi();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pictureId } = useAppSelector((store) => store.picturesStore);

  const handleOnUpdate = async (picture: PictureCardStructure) => {
    await getUpdatedPicture(picture);

    dispatch(loadPictureIdActionCreator(initialEmptyPictureState));

    navigate(path.homeCollection);
  };

  return (
    <PictureForm
      onSubmit={handleOnUpdate}
      initialPictureState={pictureId}
      textButton="Modify story"
      titleForm="Rewrite your story"
    />
  );
};

export default UpdatePicturePage;
