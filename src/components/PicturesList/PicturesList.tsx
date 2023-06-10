import { useAppSelector } from "../../store";
import Pagination from "../Pagination/Pagination";
import PictureCard from "../PictureCard/PictureCard";
import PicturesListStyled from "./PicturesListStyled";

const PicturesList = (): React.ReactElement => {
  const { id } = useAppSelector((store) => store.userStore);
  const pictures = useAppSelector((store) => store.picturesStore);
  const { pictures: picturesCard } = pictures;

  return (
    <PicturesListStyled>
      <ul>
        {picturesCard.map((picture) => (
          <li className="picture-card" key={picture.id}>
            <PictureCard picture={picture} userId={id} />
          </li>
        ))}
      </ul>
      <Pagination />
    </PicturesListStyled>
  );
};

export default PicturesList;
