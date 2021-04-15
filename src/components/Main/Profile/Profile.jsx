import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PrifileInfo/ProfileInfo";
import s from "./Profile.module.scss";

const Profile = (props) => {

  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts newPostText={props.profilePage.newPostText}  myPosts={props.profilePage.myPosts} addPost={props.addPost} updateNewPost={props.updateNewPost}/>
    </div>
  );
};

export default Profile;
