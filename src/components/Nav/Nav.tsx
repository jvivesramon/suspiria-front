import { NavLink } from "react-router-dom";
import NavStyled from "./NavStyled";

const Nav = (): React.ReactElement => {
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
            />
          </NavLink>
        </li>
        <li className="nav-container__home-logo">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/logout" className="nav-container__logout-logo">
            <img
              src="/images/nav/logout.svg"
              alt="logout logo"
              width="48"
              height="48"
            />
          </NavLink>
        </li>
      </ul>
    </NavStyled>
  );
};

export default Nav;
