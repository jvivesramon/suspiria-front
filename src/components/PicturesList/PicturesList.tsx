import { useAppSelector } from "../../store";
import PicturesListStyled from "./PicturesListStyled";

const PictureList = (): React.ReactElement => {
  const pictures = useAppSelector((store) => store.picturesStore.pictures);

  return (
    <PicturesListStyled>
      <ul>
        {pictures.map((picture) => (
          <li className="picture-card" key={picture.id}>
            <h2>{picture.pictureData.title}</h2>
          </li>
        ))}
      </ul>
    </PicturesListStyled>
  );
};

export default PictureList;
