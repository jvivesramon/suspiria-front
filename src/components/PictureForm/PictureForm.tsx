import { useState } from "react";
import { PictureCardStructure } from "../../types";
import Button from "../Button/Button";
import PictureFormStyled from "./PictureFormStyled";

interface FormProps {
  onSubmit: (pictureData: Partial<PictureCardStructure>) => void;
}

const PictureForm = ({ onSubmit }: FormProps): React.ReactElement => {
  const initialPictureState: Partial<PictureCardStructure> = {
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
    user: "1",
  };

  const [pictureState, setPictureState] = useState(initialPictureState);

  const onChangeForm = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setPictureState({
      ...pictureState,
      [event.target.id]: event.target.value,
    });
  };

  const onChangeColors = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPictureState({
      ...pictureState,
      colors: { ...pictureState.colors, [event.target.id]: event.target.value },
    });
  };

  const onChangePictureData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPictureState({
      ...pictureState,
      pictureData: {
        ...pictureState.pictureData,
        [event.target.id]: event.target.value,
      },
    });
  };

  const onChangeTemperatureColor = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    switch (event.target.value) {
      case "warm":
        setPictureState({
          ...pictureState,
          temperatureColor: { warm: true, cold: false, mixed: false },
        });
        break;
      case "cold":
        setPictureState({
          ...pictureState,
          temperatureColor: { warm: false, cold: true, mixed: false },
        });
        break;
      case "mixed":
        setPictureState({
          ...pictureState,
          temperatureColor: { warm: false, cold: false, mixed: true },
        });
        break;
    }
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({
      ...pictureState,
      colors: {
        ...pictureState.colors,
        colorFirst: `#${pictureState.colors?.colorFirst}`,
        colorSecond: `#${pictureState.colors?.colorSecond}`,
        colorThird: `#${pictureState.colors?.colorThird}`,
        colorFourth: `#${pictureState.colors?.colorFourth}`,
        colorFifth: `#${pictureState.colors?.colorFifth}`,
        colorSixth: `#${pictureState.colors?.colorSixth}`,
      },
    });
    setPictureState(initialPictureState);
  };

  const isValid =
    !pictureState.colors?.colorFirst ||
    !pictureState.colors?.colorSecond ||
    !pictureState.colors?.colorThird ||
    !pictureState.description ||
    !pictureState.image ||
    !pictureState.pictureData?.title ||
    !pictureState.pictureData.author ||
    !pictureState.pictureData.creationDate ||
    !pictureState.pictureData.movement;

  return (
    <PictureFormStyled>
      <form autoComplete="off" className="form" onSubmit={handleOnSubmit}>
        <h2 className="title-form">Create your own story</h2>

        <span className="form__info">* Complete all required fields</span>

        <label htmlFor="image">Image* :</label>
        <input
          type="url"
          value={pictureState.image}
          onChange={onChangeForm}
          id="image"
          required
        />

        <label htmlFor="title">Title* :</label>
        <input
          type="text"
          value={pictureState.pictureData?.title}
          onChange={onChangePictureData}
          id="title"
          required
        />

        <label htmlFor="author">Author* :</label>
        <input
          type="text"
          value={pictureState.pictureData?.author}
          onChange={onChangePictureData}
          id="author"
          required
        />

        <label htmlFor="creationDate">Year* :</label>
        <input
          type="text"
          value={pictureState.pictureData?.creationDate}
          onChange={onChangePictureData}
          id="creationDate"
          required
        />

        <label htmlFor="movement">Movement* :</label>
        <input
          type="text"
          value={pictureState.pictureData?.movement}
          onChange={onChangePictureData}
          id="movement"
          required
        />

        <label htmlFor="temperatureColor">Color temperature* :</label>
        <select
          name="temperatureColor"
          id="temperatureColor"
          onChange={onChangeTemperatureColor}
          required
        >
          <option value="warm">Warm</option>
          <option value="cold">Cold</option>
          <option value="mixed">Mixed</option>
        </select>

        <label htmlFor="colorFirst">First color* :</label>
        <div>
          <input
            type="text"
            value={pictureState.colors?.colorFirst}
            onChange={onChangeColors}
            id="colorFirst"
            required
            minLength={6}
            maxLength={6}
          />
          <span>#</span>
          <div
            className="container-picked-color"
            style={
              pictureState.colors?.colorFirst
                ? { backgroundColor: `#${pictureState.colors?.colorFirst}` }
                : { backgroundColor: "rgb(255 255 255 / 0%)" }
            }
          />
        </div>

        <label htmlFor="colorSecond">Second color* :</label>
        <div>
          <input
            type="text"
            value={pictureState.colors?.colorSecond}
            onChange={onChangeColors}
            id="colorSecond"
            required
            minLength={6}
            maxLength={6}
          />
          <span>#</span>
          <div
            className="container-picked-color"
            style={
              pictureState.colors?.colorSecond
                ? { backgroundColor: `#${pictureState.colors?.colorSecond}` }
                : { backgroundColor: "rgb(255 255 255 / 0%)" }
            }
          />
        </div>

        <label htmlFor="colorThird">Third color* :</label>
        <div>
          <input
            type="text"
            value={pictureState.colors?.colorThird}
            onChange={onChangeColors}
            id="colorThird"
            minLength={6}
            maxLength={6}
          />
          <span>#</span>
          <div
            className="container-picked-color"
            style={
              pictureState.colors?.colorThird
                ? { backgroundColor: `#${pictureState.colors?.colorThird}` }
                : { backgroundColor: "rgb(255 255 255 / 0%)" }
            }
          />
        </div>

        <label htmlFor="colorFourth">Fourth color:</label>
        <div>
          <input
            type="text"
            value={pictureState.colors?.colorFourth}
            onChange={onChangeColors}
            id="colorFourth"
            minLength={6}
            maxLength={6}
          />
          <span>#</span>
          <div
            className="container-picked-color"
            style={
              pictureState.colors?.colorFourth
                ? { backgroundColor: `#${pictureState.colors?.colorFourth}` }
                : { backgroundColor: "rgb(255 255 255 / 0%)" }
            }
          />
        </div>

        <label htmlFor="colorFifth">Fifth color:</label>
        <div>
          <input
            type="text"
            value={pictureState.colors?.colorFifth}
            onChange={onChangeColors}
            id="colorFifth"
            minLength={6}
            maxLength={6}
          />
          <span>#</span>
          <div
            className="container-picked-color"
            style={
              pictureState.colors?.colorFifth
                ? { backgroundColor: `#${pictureState.colors?.colorFifth}` }
                : { backgroundColor: "rgb(255 255 255 / 0%)" }
            }
          />
        </div>

        <label htmlFor="colorSixth">Sixth color:</label>
        <div>
          <input
            type="text"
            value={pictureState.colors?.colorSixth}
            onChange={onChangeColors}
            id="colorSixth"
            minLength={6}
            maxLength={6}
          />
          <span>#</span>
          <div
            className="container-picked-color"
            style={
              pictureState.colors?.colorSixth
                ? { backgroundColor: `#${pictureState.colors?.colorSixth}` }
                : { backgroundColor: "rgb(255 255 255 / 0%)" }
            }
          />
        </div>

        <label htmlFor="description">Description* :</label>
        <textarea
          id="description"
          name="description"
          value={pictureState.description}
          onChange={onChangeForm}
          required
        />

        <Button
          className={"create-button"}
          text="Add story"
          isDisable={isValid}
        />
      </form>
    </PictureFormStyled>
  );
};

export default PictureForm;
