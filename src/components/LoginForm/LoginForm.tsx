import { useState } from "react";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";
import { UserCredentials } from "../types";

interface LoginFormProps {
  actionOnClick: (userData: UserCredentials) => void;
}

const LoginForm = ({ actionOnClick }: LoginFormProps): React.ReactElement => {
  const initialUserLoginState = { username: "", password: "" };
  const [userLoginState, setUserLoginState] = useState<UserCredentials>(
    initialUserLoginState
  );

  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserLoginState({
      ...userLoginState,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    actionOnClick(userLoginState);
    setUserLoginState(initialUserLoginState);
  };

  const isValid = !userLoginState.username || !userLoginState.password;

  return (
    <LoginFormStyled>
      <form
        className="form-container"
        autoComplete="off"
        onSubmit={handleOnSubmit}
      >
        <input
          placeholder="Username:"
          className="form-container__input"
          type="text"
          id="username"
          value={userLoginState.username}
          onChange={onChangeLogin}
        />
        <input
          placeholder="Password:"
          className="form-container__input"
          type="password"
          id="password"
          value={userLoginState.password}
          onChange={onChangeLogin}
        />
        <Button className={"login-button"} text="Log In" isDisable={isValid} />
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
