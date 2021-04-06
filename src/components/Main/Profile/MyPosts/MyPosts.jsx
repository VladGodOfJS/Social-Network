import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
  let postData = [
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
  ];

  let myPostsElements = postData.map((el) => (<Post message={el.text} id={el.id} likeCount={el.count} />));
  return (
    <div className={s.my_posts}>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button className={s.btn}>Add post</button>
      <div className={s.posts}>{myPostsElements}</div>
    </div>
  );
};

export default MyPosts;
