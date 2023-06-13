import DetailPictureCard from "../../components/DetailPictureCard/DetailPictureCard";
import { useAppSelector } from "../../store";
import DetailPicturePageStyled from "./DetailPicturePageStyled";

const DetailPicturePage = (): React.ReactElement => {
  const { id } = useAppSelector((store) => store.userStore);

  const picturesMock = {
    pictureData: {
      title: "Girl with a Pearl Earring",
      creationDate: "1667",
      author: "Johannes Vermeer",
      movement: "Baroque",
    },
    image:
      "https://cdn.discordapp.com/attachments/1094550845909114921/1114592409314144296/la-joven-de-la-perla_1.png",
    description:
      "The painting features a striking contrast between the vibrant blue of the turban worn by the girl and her delicate, pale complexion. The blue exudes a sense of depth and richness, while the softness of her skin creates a subtle yet captivating visual balance. These colors, carefully chosen and skillfully applied, contribute to the overall allure and intrigue of the artwork.",
    temperatureColor: {
      warm: false,
      cold: false,
      mixed: true,
    },
    colors: {
      colorFirst: "#fff2e1",
      colorSecond: "#d7a85b",
      colorThird: "#c23126",
      colorFourth: "#a5b2c2",
      colorFifth: "#2f4e75",
      colorSixth: "#070614",
    },
    user: "1234",
    id: "1",
  };

  return (
    <DetailPicturePageStyled>
      <DetailPictureCard userId={id} picture={picturesMock} />
    </DetailPicturePageStyled>
  );
};

export default DetailPicturePage;
