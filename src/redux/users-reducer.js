import { usersAPI,} from "../api/api";

const SET_USERS = "SET_USERS";
const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USER_COUNT = "SET_USER_COUNT";

let initialState = {
  users: [],
  pageSize: 100,
  userCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: false,
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_USER_COUNT:
      return {
        ...state,
        userCount: action.count,
      };
    case "TOGGLE_IS_FETCHING":
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case "TOGGLE_IS_FOLLOWING_PROGRESS":
      return {
        ...state,
        followingInProgress: action.is,
      };

    default:
      return state;
  }
};

export const follow = (userId) => {
  return { type: FOLLOW, userId };
};

export const unfollow = (userId) => {
  return { type: UNFOLLOW, userId };
};

export const setUsers = (users) => {
  return { type: SET_USERS, users };
};
export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};

export const setUserCount = (count) => {
  return { type: SET_USER_COUNT, count };
};

export const toggleIsFetching = (isFetching) => {
  return { type: "TOGGLE_IS_FETCHING", isFetching };
};

export const togglefollowingInProgress = (is) => {
  return { type: "TOGGLE_IS_FOLLOWING_PROGRESS", is };
};

export const getUsersThunkCreator = (pageSize, currentPage) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(pageSize, currentPage).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setUserCount(data.totalCount));
    });
  };
};

export const followThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(togglefollowingInProgress(true));
    usersAPI.unfollowUser(userId).then((response) => {
      if (response.data.resultCode == 0) {
       dispatch(unfollow(userId));
      }
      dispatch(togglefollowingInProgress(false));

    });
  };
};

export const unfollowThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(togglefollowingInProgress(true));
    usersAPI.followUser(userId).then((response) => {
      if (response.data.resultCode == 0) {
       dispatch(follow(userId));
      }
      dispatch(togglefollowingInProgress(false));

    });
  };
};
export default usersReducer;
