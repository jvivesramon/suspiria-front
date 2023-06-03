import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import useUser from "../../hooks/useUser/useUser";
import LoginPageStyled from "./LoginPageStyled";
import { UserCredentials } from "../../components/types";
import path from "../../routers/paths/paths";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";

const LoginPage = (): React.ReactElement => {
  const { setToken } = useLocalStorage();
  const { getUserToken } = useUser();
  const { getTokenUserData } = useToken();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (userCredentials: UserCredentials) => {
    try {
      const token = await getUserToken(userCredentials);

      setToken("token", token);

      const decodedToken = getTokenUserData(token);

      const userData = {
        ...decodedToken,
        token,
      };

      dispatch(loginUserActionCreator(userData));

      navigate(path.homeCollection);
    } catch {
      return;
    }
  };

  return (
    <LoginPageStyled className="login-container">
      <span className="login-container__info">Welcome to</span>
      <h1 className="login-container__title">Suspiria</h1>
      <span className="login-container__slogan">
        Let
        <span className="login-container__slogan--color">colors</span>
        tell you stories
      </span>
      <LoginForm actionOnClick={onSubmit} />
      <img
        src={`images/illustrations/woman-1.svg`}
        alt="A woman leaning on his knee with a melancholy mood"
        width="320"
        height="320"
        className="home-image"
      />
    </LoginPageStyled>
  );
};

export default LoginPage;
