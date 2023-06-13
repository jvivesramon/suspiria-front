import useApi from "../../hooks/useApi/useApi";
import { useAppDispatch } from "../../store";
import { deletePictureActionCreator } from "../../store/pictures/picturesSlice";
import { PictureCardStructure } from "../../types";
import Button from "../Button/Button";
import DetailPictureCardStyled from "./DetailPictureCardStyled";

interface DetailPictureCardProps {
  picture: PictureCardStructure;
  userId: string;
}

const DetailPictureCard = ({
  picture,
  userId,
}: DetailPictureCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deletePicture } = useApi();
  const { user, id, colors } = picture;
  const mainColors = Object.values(colors);

  const handleOnDelete = async () => {
    dispatch(deletePictureActionCreator(id));

    await deletePicture(id);
  };

  return (
    <DetailPictureCardStyled>
      <div className="data-container">
        <img
          className="image-card"
          src={picture.image}
          alt={`An artpiece called ${picture.pictureData.title} painted by ${picture.pictureData.author}`}
          width="260"
          height="300"
          loading="lazy"
        />
        <section className="data-container__detail">
          <h2 className="card-title">{picture.pictureData.title}</h2>
          <span className="card-title__author">
            {picture.pictureData.author}
          </span>
          <span className="card-title__creationDate">{`${picture.pictureData.creationDate} | ${picture.pictureData.movement}`}</span>
        </section>
      </div>

      <p className="card-description">{picture.description}</p>

      <span className="palette-container">Color Palette</span>

      <div className="detail-colors">
        <div className="detail-colors__temperature">
          <span>Temperature color:</span>
          <span
            className={`detail-colors__temperature${
              (picture.temperatureColor.cold && "--warm") ||
              (picture.temperatureColor.warm && "--cold") ||
              (picture.temperatureColor.mixed && "--mixed")
            }`}
          >
            {(picture.temperatureColor.cold && "Cold") ||
              (picture.temperatureColor.warm && "Warm") ||
              (picture.temperatureColor.mixed && "Mixed")}
          </span>
        </div>
        <ul className="detail-colors__card-colors">
          {mainColors.map(
            (color, index) =>
              color.length > 3 && (
                <li
                  key={index}
                  className={`detail-colors__card-color`}
                  style={{ backgroundColor: color }}
                />
              )
          )}
        </ul>
      </div>
      <ul className="color-container">
        <div className="colors-section">
          {mainColors.map(
            (color, index) =>
              color.length > 3 && (
                <li key={index} className={`color-container__tone`}>
                  <article
                    className="color-container__tone--color"
                    style={{ backgroundColor: color }}
                  />
                  <span className="color-container__info">
                    <p className="color-container__text">{color}</p>
                  </span>
                </li>
              )
          )}
        </div>
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
    </DetailPictureCardStyled>
  );
};

export default DetailPictureCard;
