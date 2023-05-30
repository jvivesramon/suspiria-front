import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import LoginPage from "../../pages/LoginPage";

const Layout = (): React.ReactElement => {
  return (
    <ContainerStyled>
      <Header />
      <LoginPage />
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
