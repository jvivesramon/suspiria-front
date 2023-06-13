import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import { useAppDispatch } from "../../store";
import {
  addFilterActionCreator,
  deletePictureActionCreator,
} from "../../store/pictures/picturesSlice";
import { paginationActionCreator } from "../../store/ui/uiSlice";
import { PictureCardStructure } from "../../types";
import Button from "../Button/Button";
import PictureCardStyled from "./PictureCardStyled";
import path from "../../routers/paths/paths";

interface PictureCardProps {
  picture: PictureCardStructure;
  userId: string;
}

const PictureCard = ({
  picture,
  userId,
}: PictureCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deletePicture } = useApi();
  const { colors: toneColors, user, id } = picture;
  const colors = Object.values(toneColors);

  const handleOnDelete = async () => {
    dispatch(deletePictureActionCreator(id));

    await deletePicture(id);

    dispatch(paginationActionCreator(0));
    dispatch(addFilterActionCreator(""));
  };

  return (
    <PictureCardStyled>
      <Link to={`${path.pictures}/${id}`} aria-label="detail-card">
        <img
          className="image-card"
          src={picture.image}
          alt={`An artpiece called ${picture.pictureData.title} painted by ${picture.pictureData.author}`}
          width="260"
          height="300"
          loading="lazy"
        />
        <h2 className="card-title">{picture.pictureData.title}</h2>
      </Link>
      <span className="card-title__author">{picture.pictureData.author}</span>
      <ul className="card-colors">
        {colors.map(
          (color, index) =>
            color.length > 3 && (
              <li
                key={index}
                className={`card-color`}
                style={{ backgroundColor: color }}
              />
            )
        )}
      </ul>
      {user === userId && (
        <>
          <Button className="button button__modify">
            <img
              src="images/components/modify.svg"
              alt="modify icon"
              width="25"
              height="25"
              loading="lazy"
            />
          </Button>
          <Button
            className="button button__delete"
            actionOnClick={handleOnDelete}
          >
            <img
              src="images/components/delete.svg"
              alt="delete icon"
              width="22"
              height="22"
              loading="lazy"
            />
          </Button>
        </>
      )}
    </PictureCardStyled>
  );
};

export default PictureCard;
