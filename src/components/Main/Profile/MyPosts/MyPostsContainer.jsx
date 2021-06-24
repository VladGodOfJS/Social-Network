import Post from "./Post/Post";
import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator} from "../../../../redux/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps=(state)=>{

  return{
    myPosts:state.profilePage.myPosts,
    newPostText:state.profilePage.newPostText,
  }
}

let mapDispatchToProps=(dispatch)=>{
  
  return{
    addPost:(newPostText)=>{
      let action = addPostActionCreator(newPostText);
      dispatch(action);
    },
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer
