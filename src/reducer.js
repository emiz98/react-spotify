export const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  playlists: JSON.parse(localStorage.getItem("playlists")),
  playing: false,
  item: null,
  nowPlaying: JSON.parse(localStorage.getItem("nowPlaying")),
  expand: false,
  discover_weekly: JSON.parse(localStorage.getItem("discover_weekly")),
  token: localStorage.getItem("token"),
  // token: null,
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "SET_USER":
      localStorage.setItem("user", JSON.stringify(action.user));
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      localStorage.setItem("token", action.token);
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      localStorage.setItem("playlists", JSON.stringify(action.playlists));
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      localStorage.setItem(
        "discover_weekly",
        JSON.stringify(action.discover_weekly)
      );
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_NOWPLAYING":
      localStorage.setItem("nowPlaying", JSON.stringify(action.nowPlaying));
      return {
        ...state,
        nowPlaying: action.nowPlaying,
      };
    case "SET_EXPAND":
      return {
        ...state,
        expand: action.expand,
      };
    default:
      return state;
  }
};
export default reducer;
