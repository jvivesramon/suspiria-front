import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="header">
      <img
        src="images/suspiria-title.svg"
        alt="Suspiria logo"
        width="144"
        height="56"
      />
    </HeaderStyled>
  );
};

export default Header;
