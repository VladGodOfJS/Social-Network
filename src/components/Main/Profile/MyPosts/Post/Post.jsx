import s from "./Post.module.scss";

const Post = (props) => {
  return (
    <div className={s.post}>
      <img
        className={s.img}
        src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg"
        alt="avatar"
      />
     <p className={s.post_text}>
     {props.message}
     </p>
      <div className={s.like}>Like {props.likeCount}</div>
    </div>
  );
};

export default Post;
