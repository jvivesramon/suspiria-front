import Nav from "../Nav/Nav";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  const isLogged = false;

  return (
    <HeaderStyled>
      {isLogged ? (
        <Nav />
      ) : (
        <img
          src="images/suspiria-title.svg"
          alt="Suspiria logo"
          width="144"
          height="56"
        />
      )}
    </HeaderStyled>
  );
};

export default Header;
