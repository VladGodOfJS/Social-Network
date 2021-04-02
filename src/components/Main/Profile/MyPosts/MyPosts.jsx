
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.my_posts} >
     
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button className={s.btn}>Add post</button>
      <div className={s.posts}>
      <Post message= "Hello World" likeCount='22'/>
      <Post message= "My name Vlad" likeCount='15'/>
      </div>
    </div>
  );
};

export default MyPosts;
