import { Avatar } from "@material-ui/core";
import { ArrowDropDown, Search } from "@material-ui/icons";
import React from "react";
import { useDataLayerValue } from "../../DataLayer";
import "./header.scss";

const Header = () => {
  const [{ user }, dispatch] = useDataLayerValue();

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="header">
      <div className="header_left">
        <Search />
        <input
          type="text"
          placeholder="Search for Artist, Songs, or Playlists"
        />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt="MA" />
        <h4>{user?.display_name}</h4>
        <div
          style={{ color: "white", marginLeft: "10px", cursor: "pointer" }}
          onClick={logout}
        >
          Logout
        </div>
        <ArrowDropDown />
      </div>
    </div>
  );
};

export default Header;
