import React, { useState } from "react";
import { useDataLayerValue } from "../../DataLayer";
import "./songRow.scss";

const SongRow = ({ track }) => {
  const [{ nowPlaying }, dispatch] = useDataLayerValue();
  const setCurrentMusic = (current) => {
    dispatch({
      type: "SET_NOWPLAYING",
      nowPlaying: current,
    });
  };

  return (
    <div className="song_row" onDoubleClick={() => setCurrentMusic(track)}>
      <img className="songRow_album" src={track.album.images[0].url} alt="" />
      <div className="songRow_info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
