import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import Loading from "../UI/Loading/Loading";
import { useAppSelector } from "../../store";
import Feedback from "../UI/Feedback/Feedback";
import {
  actionMessage,
  feedbackMessages,
  stateText,
} from "../../utils/feedbackMessages/feedbackMessages";

const Layout = (): React.ReactElement => {
  const { isLoading } = useAppSelector((store) => store.uiStore);

  return (
    <ContainerStyled>
      <Header />
      <Feedback
        stateMessage={stateText.sorry}
        actionOnClick={() => ""}
        modalActionText={actionMessage.created}
        isError={true}
        text={feedbackMessages.isNotOk}
      />
      {isLoading && <Loading />}
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
