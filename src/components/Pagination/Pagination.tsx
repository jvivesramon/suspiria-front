import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

const Pagination = (): React.ReactElement => {
  return (
    <PaginationStyled>
      <Button className="paganation-button" text="Previous" />
      <Button className="paganation-button" text="Next" />
    </PaginationStyled>
  );
};

export default Pagination;
