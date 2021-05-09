import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator,changePostActionCreator} from "../../../../redux/profile-reducer";




const MyPosts = (props) => {


  const textareaValue = React.createRef();
  let myPostsElements = props.myPosts.map((item) => (
    <Post message={item.text} id={item.id} likeCount={item.count} key={item.id} />
  ));

  const onAddPost=()=>{
    props.addPost();
  }

  const changePost=()=>{
   
    let message = textareaValue.current.value;
    props.updateNewPostText(message);
  }
  
  return (
    <div className={s.my_posts}>
      <textarea ref={textareaValue} onChange={changePost} name="" id="" cols="30" rows="10" value={props.newPostText}></textarea>
      <button className={s.btn} onClick={onAddPost}>Add post</button>
      <div className={s.posts}>{myPostsElements}</div>
    </div>
  );
};

export default MyPosts;
