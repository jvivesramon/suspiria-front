import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Nav from "./Nav";
import { renderWithProviders } from "../../testUtils/testUtils";
import { RouteObject, createMemoryRouter } from "react-router-dom";
import path from "../../routers/paths/paths";
import { userStateMock } from "../../mocks/mocks/userMocks";

describe("Given a Nav component", () => {
  describe("When it is rendered", () => {
    let textImage = "create form logo";
    test("Then it should show a create logo", () => {
      textImage = "create form logo";

      renderWithProviders(<Nav />);

      const expectedResult = screen.getByRole("img", { name: textImage });

      expect(expectedResult).toBeInTheDocument();
    });

    test("Then it should show a logout logo", () => {
      textImage = "logout logo";

      renderWithProviders(<Nav />);

      const expectedResult = screen.getByRole("img", { name: textImage });

      expect(expectedResult).toBeInTheDocument();
    });

    test("Then it should show a 'Home' text icon", () => {
      const textIcon = "Home";

      renderWithProviders(<Nav />);

      const expectedResult = screen.getByText(textIcon);

      expect(expectedResult).toBeInTheDocument();
    });
  });

  describe("When the user is logged and clicks on the logout button", () => {
    test("Then it should redirect to the loginPage", () => {
      const routes: RouteObject[] = [
        {
          path: path.app,
          element: <Nav />,
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<Nav />, { userStore: userStateMock });

      const button = screen.getByRole("button", {
        name: "logout logo",
      });

      userEvent.click(button);

      expect(router.state.location.pathname).toStrictEqual(path.app);
    });
  });
});
