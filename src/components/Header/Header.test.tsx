import { screen } from "@testing-library/react";
import Header from "./Header";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import {
  initialUserStateMock,
  userStateMock,
} from "../../mocks/mocks/userMocks";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the Suspiria logo when the user isn't logged", () => {
      const imageText = "Suspiria logo";

      renderWithProviders(wrapWithRouter(<Header />), {
        userStore: initialUserStateMock,
      });

      const expectedResult = screen.getByRole("img", {
        name: imageText,
      });

      expect(expectedResult).toBeInTheDocument();
    });

    test("Then it should show a header with the 'Home' icon nav when the user is logged", () => {
      const imageText = "Home";

      renderWithProviders(wrapWithRouter(<Header />), {
        userStore: userStateMock,
      });

      const expectedResult = screen.getByText(imageText);

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
