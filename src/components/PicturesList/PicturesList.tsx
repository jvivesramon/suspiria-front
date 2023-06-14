import { useAppSelector } from "../../store";
import PictureCard from "../PictureCard/PictureCard";
import PicturesListStyled from "./PicturesListStyled";

const PicturesList = (): React.ReactElement => {
  const { id } = useAppSelector((store) => store.userStore);
  const pictures = useAppSelector((store) => store.picturesStore);
  const { pictures: picturesCard } = pictures;

  return (
    <PicturesListStyled>
      <ul className="cards-list">
        {picturesCard.map((picture, position) => (
          <li className="picture-card" key={picture.id}>
            <PictureCard picture={picture} userId={id} position={position} />
          </li>
        ))}
      </ul>
    </PicturesListStyled>
  );
};

export default PicturesList;
