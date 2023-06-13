import { Dispatch, SetStateAction, useState } from "react";
import Button from "../Button/Button";
import PicturesFilterStyled from "./PicturesFilterStyled";

interface PicturesFilterProps {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setFilterState: Dispatch<SetStateAction<string>>;
}

const PicturesFilter = ({
  setFilterState,
  setCurrentPage,
}: PicturesFilterProps): React.ReactElement => {
  const [selectedButton, setSelectedButton] = useState("");

  const onChange = (temperatureColor: string) => {
    setFilterState(temperatureColor);
    setCurrentPage(0);
    setSelectedButton(temperatureColor);
  };

  return (
    <PicturesFilterStyled>
      <Button
        className={`${!selectedButton && "selected-button"}`}
        text="All colors"
        actionOnClick={() => onChange("")}
      />
      <Button
        className={`middle-button ${
          selectedButton === "warm" && "selected-button"
        }`}
        text="Warm"
        actionOnClick={() => onChange("warm")}
      />
      <Button
        className={`middle-button ${
          selectedButton === "cold" && "selected-button"
        }`}
        text="Cold"
        actionOnClick={() => onChange("cold")}
      />
      <Button
        className={`${selectedButton === "mixed" && "selected-button"}`}
        text="Mixed"
        actionOnClick={() => onChange("mixed")}
      />
    </PicturesFilterStyled>
  );
};

export default PicturesFilter;
