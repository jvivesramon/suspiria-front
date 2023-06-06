import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import { useAppSelector } from "../../store";
import Modal from "../Modal/Modal";

const Layout = (): React.ReactElement => {
  const {
    isLoading,
    isVisible,
    modalState: state,
  } = useAppSelector((store) => store.uiStore);

  return (
    <ContainerStyled>
      <Header />
      {isLoading && <Loading />}
      {isVisible && <Modal state={state} />}
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
