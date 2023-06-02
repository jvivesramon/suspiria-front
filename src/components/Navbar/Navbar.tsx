import { NavLink, useNavigate } from "react-router-dom";
import NavStyled from "./NavbarStyled";
import Button from "../Button/Button";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useAppDispatch } from "../../store";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import path from "../../routers/paths/paths";

const Navbar = (): React.ReactElement => {
  const { removeToken } = useLocalStorage();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickLogout = (): void => {
    dispatch(logoutUserActionCreator());

    removeToken("token");

    navigate(path.login);
  };

  return (
    <NavStyled>
      <ul className="nav-container">
        <li>
          <NavLink to="/add-story" className="nav-container__create-logo">
            <img
              src="/images/nav/create.svg"
              alt="create form logo"
              width="48"
              height="45.5"
              loading="lazy"
            />
          </NavLink>
        </li>
        <li className="nav-container__home-logo">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <Button
            ariaText="logout"
            className="nav-container__logout-logo"
            actionOnClick={onClickLogout}
          >
            <img
              src="/images/nav/logout.svg"
              alt="logout logo"
              width="48"
              height="48"
              loading="lazy"
            />
          </Button>
        </li>
      </ul>
    </NavStyled>
  );
};

export default Navbar;
