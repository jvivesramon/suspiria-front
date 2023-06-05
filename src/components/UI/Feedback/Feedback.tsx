import Button from "../../Button/Button";
import FeedbackStyled from "./FeedbackStyled";

interface FeedbackProps {
  text?: string;
  isError: boolean;
  isLogin?: boolean;
  stateMessage?: string;
  modalActionText?: string;
  actionOnClick: () => void;
}

const Feedback = ({
  text,
  isError,
  isLogin,
  modalActionText,
  stateMessage,
  actionOnClick,
}: FeedbackProps): React.ReactElement => {
  return (
    <FeedbackStyled>
      <div className="feedback-container">
        <Button className="button-feedback" actionOnClick={actionOnClick}>
          <img
            src="images/feedback/close.svg"
            alt="button to close the feedback"
            width="20"
            height="20"
            loading="lazy"
          />
        </Button>
        {!isLogin &&
          (isError ? (
            <img
              src="images/feedback/error.svg"
              alt="icon for error"
              width="28"
              height="28"
              loading="lazy"
            />
          ) : (
            <img
              src="images/feedback/ok.svg"
              alt="icon for everything ok"
              width="30"
              height="26"
              loading="lazy"
            />
          ))}
        <span className="feedback-container__text">{stateMessage}</span>
        <span className="feedback-container__text">
          {text}
          <span
            className={`feedback-container__text--${isError ? "error" : "ok"}`}
          >
            {modalActionText}
          </span>
        </span>
      </div>
    </FeedbackStyled>
  );
};

export default Feedback;
