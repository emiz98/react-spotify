import React from "react";
import "./footer.scss";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
  PlaylistPlay,
  VolumeDown,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer__albumLogo"
          src="//images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/69416b50-5aaa-490d-8da7-682b35321b11/dcvhbo4-a26197ea-b88f-4c51-92dd-ecdc0ad40f14.jpg/v1/fill/w_894,h_894,q_70,strp/ariana_grande__sweetener__album_cover_1_by_areumdawokpop_dcvhbo4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzY5NDE2YjUwLTVhYWEtNDkwZC04ZGE3LTY4MmIzNTMyMWIxMVwvZGN2aGJvNC1hMjYxOTdlYS1iODhmLTRjNTEtOTJkZC1lY2RjMGFkNDBmMTQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.SFsoKnI5toCPBlZ05T_Cnh0E7ZOqLbNJ4N8-MD5EtHg"
        />
        <div className="footer__songInfo">
          <h4>Name1</h4>
          <p>Name2</p>
        </div>
      </div>
      <div className="footer_center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline fontSize="large" className="footer__icon" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
