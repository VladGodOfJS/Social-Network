import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";

let initialState = {
  myPosts: [
    {
      id: "1",
      text: "Hello World",
      count: "5",
    },
    {
      id: "2",
      text: "My name is Vlad",
      count: "17",
    },
  ],
  // newPostText: " new post from post",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: "5",
        text: action.newPostText,
        count: "0",
      };

      return {
        ...state,
        newPostText: " ",
        myPosts: [...state.myPosts, newPost],
      };

    case "SET_USER_PROFILE":
      return {
        ...state,
        profile: action.profile,
      };

    case "SET_USER_STATUS":
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return { type: ADD_POST,newPostText };
};

export const setUserProfile = (profile) => {
  return { type: "SET_USER_PROFILE", profile };
};

const setUserStatus = (status) => {
  return { type: "SET_USER_STATUS", status };
};

export const getUserStatusThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.getUserStatus(userId).then((response) => {
      dispatch(setUserStatus(response.data));
    });
  };
};

export const updateUserStatusThunkCreator = (status) => {
  return (dispatch) => {
    profileAPI.updateUserStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    });
  };
};

export const getProfileThunkCreator = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
       dispatch(setUserProfile(response.data));
    });
  };
};

export default profileReducer;
