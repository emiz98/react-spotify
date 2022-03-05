import React, { useEffect, useState } from "react";
import "./footer.scss";
import {
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
  PlaylistPlay,
  VolumeDown,
  VolumeUp,
  PlayCircleFilled,
  DevicesOther,
  PauseCircleFilled,
  VolumeOff,
  FavoriteBorder,
  Block,
  KeyboardArrowUp,
} from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import Slider from "@mui/material/Slider";
import ReactPlayer from "react-player";
import { useDataLayerValue } from "../../DataLayer";
// import SpotifyPlayer from "react-spotify-player";
import axios, { Axios } from "axios";
import $ from "jquery";

const Footer = () => {
  const [{ nowPlaying, expand }, dispatch] = useDataLayerValue();

  const [player, setPlayer] = useState(null);
  const [play, setPlay] = useState(0);
  const [mute, setMute] = useState(0);
  const [volume, setVolume] = useState(10);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [seek, setSeek] = useState(0);
  const [reactPlayer, setReactPlayer] = useState(null);

  const volumeFunc = (event, newValue) => {
    setVolume(newValue);
  };
  const handleOnProgress = (state) => {
    setStartTime(parseInt(state.playedSeconds));
    setSeek((startTime * 100) / endTime);
  };
  const handleDuration = (e) => {
    setEndTime(e);
  };
  const playFunc = () => {
    setPlay(!play);
  };
  const muteFunc = () => {
    setMute(!mute);
  };

  const ref = (e) => {
    setReactPlayer(e);
  };
  const seekFunc = (event, newValue) => {
    setSeek(newValue);
    reactPlayer.seekTo(newValue / 100.0);
  };

  useEffect(() => {
    const que =
      nowPlaying?.name +
      " " +
      nowPlaying?.artists?.map((artist) => artist?.name).join(", ") +
      " mp3 audio";
    async function fetchData() {
      // const req = await axios
      //   .get(`urlFor/${que}`)
      //   .then((res) => {
      //     setPlayer(res?.data.id);
      //   });
    }
    fetchData();
  }, [nowPlaying]);

  const handleVolumeOnScroll = (event, newValue) => {
    if (event.nativeEvent.wheelDelta > 0) {
      if (volume <= 100) {
        $(".body").css("overflow-y", "hidden");
        setVolume(volume + 5);
        $(".body").css("overflow-y", "overlay");
      }
    } else {
      if (volume > 0) {
        $(".body").css("overflow-y", "hidden");
        setVolume(volume - 5);
        $(".body").css("overflow-y", "overlay");
      }
    }
  };

  const setArrow = () => {
    dispatch({
      type: "SET_EXPAND",
      expand: true,
    });
    $(".footer__albumLogo").css("transform", "translateX(-250px)");
    $(".footer__songInfo").css("transform", "translateX(-80px)");
    $(".toogle_cover_playing").css("transform", "translate(0, 0)");
  };

  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer__albumLogo"
          src={
            nowPlaying == ""
              ? "//images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/69416b50-5aaa-490d-8da7-682b35321b11/dcvhbo4-a26197ea-b88f-4c51-92dd-ecdc0ad40f14.jpg/v1/fill/w_894,h_894,q_70,strp/ariana_grande__sweetener__album_cover_1_by_areumdawokpop_dcvhbo4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzY5NDE2YjUwLTVhYWEtNDkwZC04ZGE3LTY4MmIzNTMyMWIxMVwvZGN2aGJvNC1hMjYxOTdlYS1iODhmLTRjNTEtOTJkZC1lY2RjMGFkNDBmMTQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.SFsoKnI5toCPBlZ05T_Cnh0E7ZOqLbNJ4N8-MD5EtHg"
              : nowPlaying?.album.images[0].url
          }
        />
        {expand ? (
          <div></div>
        ) : (
          <div className="expand_cover" onClick={setArrow}>
            <KeyboardArrowUp fontSize="5px" />
          </div>
        )}

        <ReactPlayer
          ref={ref}
          url={`https://www.youtube.com/embed/${player}?vq=small`}
          // url={`https://www.youtube.com/watch?v=eyfwriqEuNA`}
          style={{ display: "none" }}
          playing={play}
          muted={mute}
          volume={volume / 100.0}
          onProgress={(e) => handleOnProgress(e)}
          onDuration={(e) => handleDuration(e)}
        />
        <div className="footer__songInfo">
          <div className="xd">
            <h4>{nowPlaying?.name}</h4>
            <p>
              {nowPlaying == ""
                ? ""
                : nowPlaying?.artists.map((artist) => artist.name).join(", ")}
            </p>
          </div>

          <span className="single_song_fav">
            <FavoriteBorder />
            <Block />
          </span>
        </div>
      </div>

      <div className="footer_center">
        <Shuffle className="footer__green edge__icon" />
        <SkipPrevious className="footer__icon next__prev" />
        {play ? (
          <PauseCircleFilled
            onClick={playFunc}
            className="footer__icon play__btn"
          />
        ) : (
          <PlayCircleFilled
            onClick={playFunc}
            className="footer__icon play__btn"
          />
        )}
        <SkipNext className="footer__icon next__prev" />
        <Repeat className="footer__green edge__icon" />

        <div className="seek__slider">
          <span className="startTime">
            {new Date(startTime * 1000).toISOString().substr(14, 5)}
          </span>
          <Slider
            className="volume__slider"
            aria-label="Volume"
            value={seek}
            onChange={seekFunc}
          />
          <span className="endTime">
            {new Date(endTime * 1000).toISOString().substr(14, 5)}
          </span>
        </div>
      </div>

      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <DevicesOther />
          </Grid>
          <Grid item>
            {mute || volume == 0 ? (
              <VolumeOff onClick={muteFunc} className="footer__icon" />
            ) : volume > 50 ? (
              <VolumeUp onClick={muteFunc} className="footer__icon" />
            ) : (
              <VolumeDown onClick={muteFunc} className="footer__icon" />
            )}
          </Grid>
          <Slider
            className="volume__slider"
            aria-label="Volume"
            value={volume}
            onChange={volumeFunc}
            onWheel={(event) => handleVolumeOnScroll(event)}
          ></Slider>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
