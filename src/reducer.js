export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQAJDggjqCAnXAMPHyk03SJytesGVjdL8JKoCaZMwKwpwaEbXsORQsxZTphPb23dPkSn_uDTIwiWbnXBLHPr-nV2Heo8w7sq1BoArsNzx8SOFUbUeMx8TToXfrscVpUkrbFMuhq7jRaPIvWMFk2TWpy4ZcwbohMV",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
