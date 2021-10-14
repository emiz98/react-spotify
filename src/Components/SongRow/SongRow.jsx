import { Pause, PlayArrow } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDataLayerValue } from "../../DataLayer";
import "./songRow.scss";

const SongRow = ({ track }) => {
  const [{ nowPlaying }, dispatch] = useDataLayerValue();
  const [singlePlay, setSinglePlay] = useState(0);

  const setCurrentMusic = (current) => {
    dispatch({
      type: "SET_NOWPLAYING",
      nowPlaying: current,
    });
  };

  const singlePlayFunc = (selectedTrack) => {
    setCurrentMusic(selectedTrack);
    setSinglePlay(!singlePlay);
  };

  return (
    <div className="song_row">
      <span className="song_row_play">
        {singlePlay ? (
          <Pause onClick={() => singlePlayFunc(track)} />
        ) : (
          <PlayArrow onClick={() => singlePlayFunc(track)} />
        )}
      </span>
      <img
        className="songRow_album"
        src={track.album.images[0].url}
        onDoubleClick={() => setCurrentMusic(track)}
      />
      <div
        className="songRow_info"
        onDoubleClick={() => setCurrentMusic(track)}
      >
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
