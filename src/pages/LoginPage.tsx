import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  return (
    <LoginPageStyled className="login-container">
      <span className="login-container__info">Welcome to</span>
      <h1 className="login-container__title">Suspiria</h1>
      <span className="login-container__slogan">
        Let
        <span className="login-container__slogan--color">colors</span>
        tell you stories
      </span>
      <img
        src={`images/illustrations/woman-1.svg`}
        alt="A woman leaning on his knee with a melancholy mood"
        width="320"
        height="320"
        loading="lazy"
        className="home-image"
      />
    </LoginPageStyled>
  );
};

export default LoginPage;
