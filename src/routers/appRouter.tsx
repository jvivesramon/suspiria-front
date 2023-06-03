import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import path from "./paths/paths";
import { Suspense } from "react";
import { LazyPicturesPage } from "./lazyPages";
import LoginPage from "../pages/LoginPage/LoginPage";

const appRouter = createBrowserRouter([
  {
    path: path.app,
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={path.login} replace />,
      },
      {
        path: path.login,
        element: <LoginPage />,
      },
      {
        path: path.homeCollection,
        element: (
          <Suspense>
            <LazyPicturesPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default appRouter;
