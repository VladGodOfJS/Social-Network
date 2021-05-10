import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./PrifileInfo/ProfileInfo";
import s from "./Profile.module.scss";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;
