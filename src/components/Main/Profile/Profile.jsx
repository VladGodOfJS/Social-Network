import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PrifileInfo/ProfileInfo";
import s from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
