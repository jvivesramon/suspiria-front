import { useNavigate } from "react-router-dom";
import PictureForm from "../../components/PictureForm/PictureForm";
import useApi from "../../hooks/useApi/useApi";
import { useAppDispatch } from "../../store";
import { addPicturesActionCreator } from "../../store/pictures/picturesSlice";
import { PictureCardStructure } from "../../types";
import FormPageStyled from "./FormPageStyled";
import path from "../../routers/paths/paths";

const FormPage = (): React.ReactElement => {
  const { addPicture } = useApi();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = async (pictureData: Partial<PictureCardStructure>) => {
    try {
      const { picture } = await addPicture(pictureData);

      dispatch(addPicturesActionCreator(picture));

      navigate(path.homeCollection);
    } catch {
      return;
    }
  };

  return (
    <FormPageStyled>
      <PictureForm onSubmit={handleOnSubmit} />
    </FormPageStyled>
  );
};

export default FormPage;
