import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import { useAppDispatch } from "../../store";
import {
  addFilterActionCreator,
  deletePictureActionCreator,
  loadPictureIdActionCreator,
} from "../../store/pictures/picturesSlice";
import { paginationActionCreator } from "../../store/ui/uiSlice";
import { PictureCardStructure } from "../../types";
import Button from "../Button/Button";
import DetailPictureCardStyled from "./DetailPictureCardStyled";
import path from "../../routers/paths/paths";

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
  const navigate = useNavigate();

  const {
    user,
    colors,
    description,
    image,
    pictureData,
    temperatureColor,
    id,
  } = picture;
  const mainColors = Object.values(colors);
  const isOwner = user === userId;

  const handleOnDelete = async () => {
    dispatch(deletePictureActionCreator(id));

    await deletePicture(id);

    dispatch(paginationActionCreator(0));
    dispatch(addFilterActionCreator(""));

    navigate(path.homeCollection);
  };

  const handleOnModify = async (picture: PictureCardStructure) => {
    dispatch(
      loadPictureIdActionCreator({
        ...picture,
        colors: {
          ...picture.colors,
          colorFirst: picture.colors.colorFirst?.slice(1),
          colorSecond: picture.colors.colorSecond?.slice(1),
          colorThird: picture.colors.colorThird?.slice(1),
          colorFourth: picture.colors.colorFourth?.slice(1),
          colorFifth: picture.colors.colorFifth?.slice(1),
          colorSixth: picture.colors.colorSixth?.slice(1),
        },
      })
    );

    navigate(`${path.pictures}/modify`);
  };

  return (
    <DetailPictureCardStyled>
      <div className="data-container">
        <img
          className="image-card"
          src={image}
          alt={`An artpiece called ${pictureData.title} painted by ${pictureData.author}`}
          width="260"
          height="300"
          loading="lazy"
        />
        <section className="data-container__detail">
          <h2 className="card-title">{pictureData.title}</h2>
          <span className="card-title__author">{pictureData.author}</span>
          <span className="card-title__creationDate">{`${pictureData.creationDate} | ${pictureData.movement}`}</span>
        </section>
      </div>

      <p className="card-description">{description}</p>

      <span className="palette-container">Color Palette</span>

      <div className="detail-colors">
        <div className="detail-colors__temperature">
          <span>Temperature color:</span>
          <span
            className={`detail-colors__temperature${
              (temperatureColor.cold && "--cold") ||
              (temperatureColor.warm && "--warm") ||
              (temperatureColor.mixed && "--mixed")
            }`}
          >
            {(temperatureColor.cold && "Cold") ||
              (temperatureColor.warm && "Warm") ||
              (temperatureColor.mixed && "Mixed")}
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
      <div className="color-container">
        <ul className="colors-section">
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
        </ul>
      </div>

      {isOwner && (
        <>
          <Button
            actionOnClick={() => handleOnModify(picture)}
            className="button button__modify"
          >
            <img
              src="/images/components/modify.svg"
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
              src="/images/components/delete.svg"
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
