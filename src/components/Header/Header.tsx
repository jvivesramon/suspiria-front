import { useAppSelector } from "../../store";
import Navbar from "../Navbar/Navbar";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  const { isLogged } = useAppSelector((store) => store.userStore);

  return (
    <HeaderStyled>
      {isLogged ? (
        <Navbar />
      ) : (
        <img
          src="images/headerTitle/suspiria-title.svg"
          alt="Suspiria logo"
          width="144"
          height="56"
          loading="lazy"
        />
      )}
    </HeaderStyled>
  );
};

export default Header;
