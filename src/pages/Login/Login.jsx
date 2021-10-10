import "./login.scss";
import { loginUrl } from "../../spotify";

const Login = () => {
  return (
    <div className="login">
      <img
        src="https://thesource.com/wp-content/uploads/2016/08/Spotify_Logo_CMYK_Green.png"
        alt=""
      />
      <a href={loginUrl}>Login with spotify</a>
    </div>
  );
};

export default Login;
