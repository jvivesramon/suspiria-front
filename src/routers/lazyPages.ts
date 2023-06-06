import { lazy } from "react";

export const LazyPicturesPage = lazy(
  () => import("../pages/PicturesPage/PicturesPage")
);

export const LazyNotFoundPage = lazy(
  () => import("../components/UI/NotFoundPage/NotFoundPage")
);
