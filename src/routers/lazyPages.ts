import { lazy } from "react";

export const LazyPicturesPage = lazy(
  () => import("../pages/PicturesPage/PicturesPage")
);
