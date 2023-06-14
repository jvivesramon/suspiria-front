import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "@fontsource/jomolhari";
import "@fontsource/gurajada";
import { store } from "./store";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import theme from "./styles/theme/theme";
import GlobalStyle from "./styles/GlobalStyle";
import appRouter from "./routers/appRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
