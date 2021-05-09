
import Post from "./Post/Post";
import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator,changePostActionCreator} from "../../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
 
    let state = props.store.getState();

    let addPost=()=>{
        let action = addPostActionCreator();
        props.store.dispatch(action);
      }
    
      let changePost=(message)=>{ 
        let action = changePostActionCreator(message);
        props.store.dispatch(action);
      }

      
  
  return (
      <MyPosts addPost={addPost} updateNewPostText={changePost} myPosts={state.profilePage.myPosts} newPostText ={state.profilePage.newPostText} />
  );
};

export default MyPostsContainer;
