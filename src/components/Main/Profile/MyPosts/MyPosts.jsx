import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
 

  let myPostsElements = props.myPosts.map((el) => (<Post message={el.text} id={el.id} likeCount={el.count} />));
  return (
    <div className={s.my_posts}>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button className={s.btn}>Add post</button>
      <div className={s.posts}>{myPostsElements}</div>
    </div>
  );
};

export default MyPosts;
