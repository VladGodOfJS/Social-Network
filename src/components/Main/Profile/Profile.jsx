import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./PrifileInfo/ProfileInfo";
import s from "./Profile.module.scss";

const Profile = (props) => {

  return (
    <div className={s.profile}>
      <ProfileInfo profile={props.profile} status={props.status}updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}  />
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;
