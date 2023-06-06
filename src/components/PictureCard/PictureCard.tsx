import { PictureCardStructure } from "../../types";
import PictureCardStyled from "./PictureCardStyled";

interface PictureCardProps {
  picture: PictureCardStructure;
}

const PictureCard = ({ picture }: PictureCardProps): React.ReactElement => {
  const { colors: toneColors } = picture;
  const colors = Object.values(toneColors);

  return (
    <PictureCardStyled>
      <img
        className="image-card"
        src={picture.image}
        alt={`An artpiece called ${picture.pictureData.title} painted by ${picture.pictureData.author}`}
        width="260"
        height="300"
      />
      <h2 className="card-title">{picture.pictureData.title}</h2>
      <span className="card-title__author">{picture.pictureData.author}</span>
      <ul className="card-colors">
        {colors.map(
          (color, index) =>
            color && (
              <li
                key={index}
                className={`card-color`}
                style={{ backgroundColor: color }}
              />
            )
        )}
      </ul>
    </PictureCardStyled>
  );
};

export default PictureCard;
