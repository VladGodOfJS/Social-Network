import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import React from "react";
import { Field,reduxForm } from "redux-form";
import { required } from "../../../../utils/validators/validators";
import { maxLengthCreator } from "../../../../utils/validators/validators";
import { Textarea } from "../../../common/FormControls/FormControls";


let maxLength30 = maxLengthCreator(30);
const MyPosts = (props) => {
  const textareaValue = React.createRef();
  let myPostsElements = props.myPosts.map((item) => (
    <Post message={item.text} id={item.id} likeCount={item.count} key={item.id} />
  ));

  const addNewPost=(values)=>{
       props.addPost(values.newPostText);
  }
  
  return (
    <div className={s.my_posts}>
      <MypostFormRedux onSubmit={addNewPost}/>
      <div className={s.posts}>{myPostsElements}</div>
    </div>
  );
};


const MyPostForm=(props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} placeholder="enter Post" validate={[required,maxLength30]} name={"newPostText"} className={s.text_area}  id="" cols="10" rows="3" ></Field>
      <button className={s.btn}>Add post</button>
    </form>
  );
}

let MypostFormRedux= reduxForm({form:"postTextForm"})(MyPostForm);
export default MyPosts;
