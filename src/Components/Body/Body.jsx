import {
  Favorite,
  MoreHoriz,
  PauseCircleFilled,
  PlayCircleFilled,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useDataLayerValue } from "../../DataLayer";
import Header from "../Header/Header";
import SongRow from "../SongRow/SongRow";
import "./body.scss";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  const [like, setLike] = useState(1);
  const [play, setPlay] = useState(0);

  const playFunc = () => {
    setPlay(!play);
  };
  const likeFunc = () => {
    setLike(!like);
  };

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          {play ? (
            <PauseCircleFilled onClick={playFunc} className="body__shuffle" />
          ) : (
            <PlayCircleFilled onClick={playFunc} className="body__shuffle" />
          )}

          <Favorite
            onClick={likeFunc}
            fontSize="large"
            className={like ? "reacted" : ""}
          />
          <MoreHoriz />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow key={item.id} track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
