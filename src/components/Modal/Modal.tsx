import { useAppDispatch } from "../../store";
import { hideModalActionCreator } from "../../store/ui/uiSlice";
import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  text?: string;
  isError: boolean;
  modalActionText?: string;
}

interface ModalStateProp {
  state: ModalProps;
}

const Modal = ({
  state: { isError, modalActionText, text },
}: ModalStateProp): React.ReactElement => {
  const dispatch = useAppDispatch();

  const onCloseHandle = () => {
    dispatch(hideModalActionCreator());
  };

  return (
    <ModalStyled>
      <div className="feedback-container">
        <Button className="button-feedback" actionOnClick={onCloseHandle}>
          <img
            src="/images/feedback/close.svg"
            alt="button to close the feedback"
            width="20"
            height="20"
            loading="lazy"
          />
        </Button>
        {isError ? (
          <img
            src="/images/feedback/error.svg"
            alt="icon for error"
            width="28"
            height="28"
            loading="lazy"
          />
        ) : (
          <img
            src="/images/feedback/ok.svg"
            alt="icon for everything ok"
            width="30"
            height="26"
            loading="lazy"
          />
        )}
        <span className="feedback-container__text">{`${
          isError ? "Something went wrong. " : "¡Congratulations! "
        }`}</span>
        <span className="feedback-container__text">
          {text}
          <span
            className={`feedback-container__text--${isError ? "error" : "ok"}`}
          >
            {modalActionText}
          </span>
        </span>
      </div>
    </ModalStyled>
  );
};

export default Modal;
