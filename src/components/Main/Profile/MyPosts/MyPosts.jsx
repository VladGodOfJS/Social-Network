import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  const textareaValue = React.createRef();
  let myPostsElements = props.myPosts.map((item) => (
    <Post message={item.text} id={item.id} likeCount={item.count} key={item.id} />
  ));
  const addPost=()=>{
    props.addPost();
    props.updateNewPost('');
  }
  const changePost=()=>{
    props.updateNewPost(textareaValue.current.value);
  }
  return (
    <div className={s.my_posts}>
      <textarea ref={textareaValue} onChange={changePost} name="" id="" cols="30" rows="10" value={props.newPostText}></textarea>
      <button className={s.btn} onClick={addPost}>Add post</button>
      <div className={s.posts}>{myPostsElements}</div>
    </div>
  );
};

export default MyPosts;
