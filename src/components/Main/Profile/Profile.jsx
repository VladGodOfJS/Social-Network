import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PrifileInfo/ProfileInfo";
import s from "./Profile.module.scss";

const Profile = (props) => {

  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts  myPosts={props.state.myPosts}/>
    </div>
  );
};

export default Profile;
