import React from "react";
import "./sidebar.scss";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../DataLayer";
import { KeyboardArrowDown } from "@material-ui/icons";
import $ from "jquery";

const Sidebar = () => {
  const [{ nowPlaying, playlists, expand }, dispatch] = useDataLayerValue();

  const setArrow = () => {
    dispatch({
      type: "SET_EXPAND",
      expand: false,
    });
    $(".single_song_fav").css("transform", "translateX(0)");
    $(".footer__songInfo").css("transform", "translateX(0)");
    $(".toogle_cover_playing").css("transform", "translate(0, 100%)");
  };
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://thesource.com/wp-content/uploads/2016/08/Spotify_Logo_CMYK_Green.png"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption
          key={playlist?.id}
          title={playlist.name}
          playListKey={playlist?.id}
        />
      ))}
      <div className="toogle_cover_playing">
        <img
          src={
            nowPlaying == ""
              ? "//images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/69416b50-5aaa-490d-8da7-682b35321b11/dcvhbo4-a26197ea-b88f-4c51-92dd-ecdc0ad40f14.jpg/v1/fill/w_894,h_894,q_70,strp/ariana_grande__sweetener__album_cover_1_by_areumdawokpop_dcvhbo4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzY5NDE2YjUwLTVhYWEtNDkwZC04ZGE3LTY4MmIzNTMyMWIxMVwvZGN2aGJvNC1hMjYxOTdlYS1iODhmLTRjNTEtOTJkZC1lY2RjMGFkNDBmMTQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.SFsoKnI5toCPBlZ05T_Cnh0E7ZOqLbNJ4N8-MD5EtHg"
              : nowPlaying?.album.images[0].url
          }
        />
        {expand ? (
          <div className="minmize_cover" onClick={setArrow}>
            <KeyboardArrowDown fontSize="5px" />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
