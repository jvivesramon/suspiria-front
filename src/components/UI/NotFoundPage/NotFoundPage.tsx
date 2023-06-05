import Button from "../../Button/Button";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled>
      <img
        src="images/feedback/not-found-page.svg"
        alt="not found page"
        width="290"
        height="400"
        loading="lazy"
      />
      <Button className="not-found-page-button" text="Back to Home" />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
