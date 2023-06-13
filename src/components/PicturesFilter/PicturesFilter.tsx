import Button from "../Button/Button";
import PicturesFilterStyled from "./PicturesFilterStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { paginationActionCreator } from "../../store/ui/uiSlice";
import { addFilterActionCreator } from "../../store/pictures/picturesSlice";

const PicturesFilter = (): React.ReactElement => {
  const { filterData } = useAppSelector((store) => store.picturesStore);
  const dispatch = useAppDispatch();

  const onChange = (temperatureColor: string) => {
    dispatch(addFilterActionCreator(temperatureColor));

    dispatch(paginationActionCreator(0));
  };

  return (
    <PicturesFilterStyled>
      <Button
        className={`${!filterData && "selected-button"}`}
        text="All colors"
        actionOnClick={() => onChange("")}
      />
      <Button
        className={`middle-button ${
          filterData === "warm" && "selected-button"
        }`}
        text="Warm"
        actionOnClick={() => onChange("warm")}
      />
      <Button
        className={`middle-button ${
          filterData === "cold" && "selected-button"
        }`}
        text="Cold"
        actionOnClick={() => onChange("cold")}
      />
      <Button
        className={`${filterData === "mixed" && "selected-button"}`}
        text="Mixed"
        actionOnClick={() => onChange("mixed")}
      />
    </PicturesFilterStyled>
  );
};

export default PicturesFilter;
