import React from "react";
import Header from "../Header/Header";
import "./body.scss";

const Body = ({ spotify }) => {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img
          src="https://community.spotify.com/t5/image/serverpage/image-id/30772iFAF5F7F2500E902F/image-dimensions/2500?v=v2&px=-1"
          alt=""
        />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
