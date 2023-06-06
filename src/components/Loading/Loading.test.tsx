import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import Loading from "./Loading";

describe("Given a loading component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a loader", () => {
      const loadingText = "loading";

      renderWithProviders(<Loading />);

      const expectedLoading = screen.getByRole("generic", {
        name: loadingText,
      });

      expect(expectedLoading).toBeInTheDocument();
    });
  });
});
