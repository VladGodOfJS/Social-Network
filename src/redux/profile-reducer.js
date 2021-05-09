const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

let initialState ={
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
  newPostText: " new post from post",
}

const profileReducer = (state =initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: "5",
        text: state.newPostText,
        count: "0",
      };

      state.myPosts.push(newPost);
      state.newPostText = " ";
      return state;
    }

    case UPDATE_NEW_POST:
      state.newPostText = action.newPost;
      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const changePostActionCreator = (text) => {
  return { type: UPDATE_NEW_POST, newPost: text };
};

export default profileReducer;
