import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

export const LazyPicturesPage = lazy(
  () => import("../pages/PicturesPage/PicturesPage")
);

export const LazyNotFoundPage = lazy(
  () => import("../components/NotFoundPage/NotFoundPage")
);

export const LazyFormPage = lazy(() => import("../pages/FormPage/FormPage"));
