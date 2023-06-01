import styled from "styled-components";

const NavStyled = styled.nav`
  width: 100%;

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__home-logo {
      font-family: ${(props) => props.theme.fonts.secondary};
      font-size: ${(props) => props.theme.size.medium};
      color: ${(props) => props.theme.colors.white};
    }

    &__create-logo {
      display: flex;
      align-items: center;
    }

    &__logout-logo {
      display: flex;
      align-items: center;
    }
  }

  .active {
    border-bottom: 2px solid ${(props) => props.theme.colors.logo};
  }
`;

export default NavStyled;
