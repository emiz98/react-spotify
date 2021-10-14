import "./login.scss";
import { loginUrl } from "../../spotify";

const Login = () => {
  return (
    <>
      <div class="logo">
        <img
          class="icon"
          src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-transparent-spotify-logo-images-25.png"
          alt=""
        />
        <h1 class="name">Spotify</h1>
      </div>
      <div className="login">
        <a href={loginUrl}>Login with spotify</a>
      </div>
    </>
  );
};

export default Login;

{
  /* <div className="login">
  <img
    src="https://thesource.com/wp-content/uploads/2016/08/Spotify_Logo_CMYK_Green.png"
    alt=""
  />
  <a href={loginUrl}>Login with spotify</a>
</div>; */
}
