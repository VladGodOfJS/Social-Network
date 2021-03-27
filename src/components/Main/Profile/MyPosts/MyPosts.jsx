
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.my_posts} >
        <div>avatar + description</div>
        <div>my posts</div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>Add post</button>
      <Post/>
    </div>
  );
};

export default MyPosts;
