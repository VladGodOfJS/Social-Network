import s from "./Post.module.scss";

const Post = () => {
  return (
    <div className={s.post}>
      <img
        className={s.img}
        src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg"
        alt="avatar"
      />
      post 1<div className={s.like}>Like</div>
    </div>
  );
};

export default Post;
