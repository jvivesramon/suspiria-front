import { NavLink } from "react-router-dom";
import NavStyled from "./NavStyled";
import Button from "../Button/Button";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useAppDispatch } from "../../store";
import { logoutUserActionCreator } from "../../store/user/userSlice";

const Nav = (): React.ReactElement => {
  const { removeToken } = useLocalStorage();
  const dispatch = useAppDispatch();

  const onClickLogout = (): void => {
    dispatch(logoutUserActionCreator());

    removeToken("token");
  };

  return (
    <NavStyled>
      <ul className="nav-container">
        <li>
          <NavLink to="/create-login" className="nav-container__create-logo">
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
          <NavLink to="/" className="nav-container__logout-logo">
            <Button actionOnClick={onClickLogout}>
              <img
                src="/images/nav/logout.svg"
                alt="logout logo"
                width="48"
                height="48"
                loading="lazy"
              />
            </Button>
          </NavLink>
        </li>
      </ul>
    </NavStyled>
  );
};

export default Nav;
