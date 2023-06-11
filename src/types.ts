export interface PictureCardStructure {
  id: string;
  pictureData: {
    title?: string;
    creationDate?: string;
    author?: string;
    movement?: string;
  };
  image: string;
  description: string;
  temperatureColor: {
    warm?: boolean;
    cold?: boolean;
    mixed?: boolean;
  };
  colors: {
    colorFirst?: string;
    colorSecond?: string;
    colorThird?: string;
    colorFourth?: string;
    colorFifth?: string;
    colorSixth?: string;
  };
  user: string;
}

export interface PicturesListStructure {
  pictures: PictureCardStructure[];
}

export interface PictureTotalList extends PicturesListStructure {
  totalPictures: number;
}
