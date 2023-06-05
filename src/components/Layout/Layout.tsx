import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import Loading from "../UI/Loading/Loading";
import { useAppSelector } from "../../store";

const Layout = (): React.ReactElement => {
  const { isLoading } = useAppSelector((store) => store.uiStore);

  return (
    <ContainerStyled>
      <Header />
      {isLoading && <Loading />}
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
