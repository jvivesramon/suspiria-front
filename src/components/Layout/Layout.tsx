import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import Loading from "../UI/Loading/Loading";

const Layout = (): React.ReactElement => {
  return (
    <ContainerStyled>
      <Header />
      <Outlet />
      <Loading />
    </ContainerStyled>
  );
};

export default Layout;
