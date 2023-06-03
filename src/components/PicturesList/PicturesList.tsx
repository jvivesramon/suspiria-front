import { useAppSelector } from "../../store";
import PicturesListStyled from "./PicturesListStyled";

const PictureList = (): React.ReactElement => {
  const pictures = useAppSelector((store) => store.picturesStore.pictures);

  return (
    <PicturesListStyled>
      <ul>
        {pictures.map((picture) => (
          <li className="picture-card" key={picture.id}></li>
        ))}
      </ul>
    </PicturesListStyled>
  );
};

export default PictureList;
