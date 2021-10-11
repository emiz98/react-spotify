import React from "react";
import Body from "../Body/Body";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./player.scss";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        {/* 2.35 */}
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
