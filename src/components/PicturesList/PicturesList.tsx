import { useAppSelector } from "../../store";
import PictureCard from "../PictureCard/PictureCard";
import PicturesListStyled from "./PicturesListStyled";

const PictureList = (): React.ReactElement => {
  const pictures = useAppSelector((store) => store.picturesStore);
  const { pictures: picturesCard } = pictures;

  return (
    <PicturesListStyled>
      <ul>
        {picturesCard.map((picture) => (
          <li className="picture-card" key={picture.id}>
            <PictureCard picture={picture} />
          </li>
        ))}
      </ul>
    </PicturesListStyled>
  );
};

export default PictureList;
