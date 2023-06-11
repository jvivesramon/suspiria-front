import Button from "../Button/Button";
import PicturesFilterStyled from "./PicturesFilterStyled";

const PicturesFilter = (): React.ReactElement => {
  return (
    <PicturesFilterStyled>
      <Button text="Warm" />
      <Button className="middle-button" text="Cold" />
      <Button text="Mixed" />
    </PicturesFilterStyled>
  );
};

export default PicturesFilter;
