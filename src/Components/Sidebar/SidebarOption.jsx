import React from "react";
import "./sidebarOption.scss";

import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "../../DataLayer";

const spotify = new SpotifyWebApi();

const SidebarOption = ({ title, Icon, playListKey }) => {
  const [{ token }, dispatch] = useDataLayerValue();

  const playListFunc = () => {
    console.log("ss");
    if (token) {
      spotify.setAccessToken(token);
      spotify.getPlaylist(playListKey).then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  };

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? <h4>{title}</h4> : <p onClick={playListFunc}>{title}</p>}
    </div>
  );
};

export default SidebarOption;
