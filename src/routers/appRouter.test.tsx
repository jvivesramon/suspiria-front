import { RouterProvider } from "react-router-dom";
import { tokenMock } from "../mocks/mocks/userMocks";
import { renderWithProviders } from "../testUtils/testUtils";
import appRouter from "./appRouter";
import { screen } from "@testing-library/react";

localStorage.setItem("token", tokenMock.token);

describe("Given an appRouter", () => {
  describe("When its rendered", () => {
    test("Then it should show a logo with an alternative text 'RetroWave logo'", () => {
      const homeText = "Home";

      renderWithProviders(<RouterProvider router={appRouter} />);

      const expectedText = screen.getByText(homeText);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
