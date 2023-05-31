import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import path from "./paths/paths";
import { Suspense } from "react";
import { LazyLoginPage } from "./lazyPages";

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
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
      {
        path: path.homeCollection,
        element: <Navigate to={path.app} replace />,
      },
    ],
  },
]);

export default appRouter;
