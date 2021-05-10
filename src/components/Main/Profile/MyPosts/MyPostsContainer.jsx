import Post from "./Post/Post";
import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator,changePostActionCreator} from "../../../../redux/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps=(state)=>{

  return{
    myPosts:state.profilePage.myPosts,
    newPostText:state.profilePage.newPostText,
  }
}

let mapDispatchToProps=(dispatch)=>{
  
  return{
    addPost:()=>{
      let action = addPostActionCreator();
      dispatch(action);
    },
    updateNewPostText:(message)=>{
      let action = changePostActionCreator(message);
      dispatch(action);
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer
