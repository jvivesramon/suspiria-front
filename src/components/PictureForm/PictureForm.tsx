import Button from "../Button/Button";
import PictureFormStyled from "./PictureFormStyled";

const PictureForm = (): React.ReactElement => {
  return (
    <PictureFormStyled>
      <form autoComplete="off" className="form">
        <h2 className="title-form">Create your own story</h2>
        <label htmlFor="image">Image* :</label>
        <input type="text" name="image" id="image" required />
        <label htmlFor="title">Title* :</label>
        <input type="text" name="title" id="title" required />
        <label htmlFor="author">Author* :</label>
        <input type="text" name="author" id="author" required />
        <label htmlFor="year">Year* :</label>
        <input type="text" name="year" id="year" required />
        <label htmlFor="movement">Movement* :</label>
        <input type="text" name="movement" id="movement" required />
        <label htmlFor="temperature">Color temperature* :</label>
        <select name="temperature" id="temperature" required>
          <option value="warm">Warm</option>
          <option value="cold">Cold</option>
          <option value="mixed">Mixed</option>
        </select>
        <label htmlFor="first">First color* :</label>
        <div>
          <input
            type="text"
            name="first"
            id="first"
            required
            minLength={6}
            maxLength={6}
          />
          <span>#</span>
        </div>
        <label htmlFor="second">Second color* :</label>
        <div>
          <input
            type="text"
            name="second"
            id="second"
            required
            minLength={6}
            maxLength={6}
          />
          <span>#</span>
        </div>
        <label htmlFor="third">Third color* :</label>
        <div>
          <input
            type="text"
            name="third"
            id="third"
            minLength={6}
            maxLength={6}
          />
          <span>#</span>
        </div>
        <label htmlFor="fourth">Fourth color:</label>
        <div>
          <input
            type="text"
            name="fourth"
            id="fourth"
            minLength={6}
            maxLength={6}
          />
          <span>#</span>
        </div>
        <label htmlFor="fifth">Fifth color:</label>
        <div>
          <input
            type="text"
            name="fifth"
            id="fifth"
            minLength={6}
            maxLength={6}
          />
          <span>#</span>
        </div>
        <label htmlFor="sixth">Sixth color:</label>
        <div>
          <input
            type="text"
            name="sixth"
            id="sixth"
            minLength={6}
            maxLength={6}
          />
          <span>#</span>
        </div>
        <label htmlFor="description">Description* :</label>
        <textarea id="description" name="description" required />
        <Button className={"create-button"} text="Add story" />
      </form>
    </PictureFormStyled>
  );
};

export default PictureForm;
