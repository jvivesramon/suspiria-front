import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  onClickNext: () => void;
  onClickPrevious: () => void;
  isNextDisabled: boolean;
  isPreviousDisabled: boolean;
}

const Pagination = ({
  onClickNext,
  onClickPrevious,
  isNextDisabled,
  isPreviousDisabled,
}: PaginationProps): React.ReactElement => {
  return (
    <PaginationStyled>
      {!isPreviousDisabled && (
        <Button
          className="pagination-button"
          text="Previous"
          actionOnClick={onClickPrevious}
        />
      )}
      {!isNextDisabled && (
        <Button
          actionOnClick={onClickNext}
          className="pagination-button"
          text="Next"
        />
      )}
    </PaginationStyled>
  );
};

export default Pagination;
