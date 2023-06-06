import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import Loading from "../UI/Loading/Loading";
import { useAppSelector } from "../../store";
import Feedback from "../UI/Feedback/Feedback";

const Layout = (): React.ReactElement => {
  const { isLoading, isVisible, state } = useAppSelector(
    (store) => store.uiStore
  );

  return (
    <ContainerStyled>
      <Header />
      {isLoading && <Loading />}
      {isVisible && <Feedback state={state} />}
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
