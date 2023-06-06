import Button from "../../Button/Button";
import NotFoundPageStyled from "./NotFoundPageStyled";
import { useNavigate } from "react-router-dom";
import path from "../../../routers/paths/paths";

const NotFoundPage = (): React.ReactElement => {
  const navigate = useNavigate();

  const handleOnClose = () => {
    navigate(path.homeCollection);
  };

  return (
    <NotFoundPageStyled>
      <img
        src="images/feedback/not-found-page.svg"
        alt="not found page"
        width="290"
        height="400"
        loading="lazy"
      />
      <Button
        className="not-found-page-button"
        text="Back to Home"
        actionOnClick={handleOnClose}
      />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
