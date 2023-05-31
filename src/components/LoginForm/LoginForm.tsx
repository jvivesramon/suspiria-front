import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): React.ReactElement => {
  return (
    <LoginFormStyled>
      <form className="form-container">
        <h2 className="login-title">Log in</h2>
        <input
          placeholder="Username:"
          className="form-container__input"
          type="text"
          id="username"
        />
        <input
          placeholder="Password:"
          className="form-container__input"
          type="password"
          id="password"
        />
        <Button className="login-button" text="Log In" />
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
