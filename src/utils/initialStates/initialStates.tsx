import { PictureCardStructure } from "../../types";

export const initialEmptyPictureState: PictureCardStructure = {
  id: "",
  pictureData: {
    title: "",
    creationDate: "",
    author: "",
    movement: "",
  },
  image: "",
  description: "",
  temperatureColor: {
    warm: false,
    cold: false,
    mixed: false,
  },
  colors: {
    colorFirst: "",
    colorSecond: "",
    colorThird: "",
    colorFourth: "",
    colorFifth: "",
    colorSixth: "",
  },
  user: "",
};
