import Preloader from "../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.scss";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.bg}>
        <img
          className={s.img}
          src="https://cdn.wallpapersafari.com/37/37/PS5Wvy.jpg"
          alt="main-baground"
        />
      </div>
      <div className={s.profile_items}>
        <div className="job">{props.profile.lookingForAJob===true?<img src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg" alt="men"/>:<img src="https://as1.ftcdn.net/jpg/02/44/70/30/500_F_244703010_vYdL62triIFfjMH0dh8uAMATYhxKZhvK.jpg" alt="men"/>}</div>
        <p>{props.profile.fullName}</p>
        <a href={props.profile.contacts.facebook}>my page facebook</a>
        
        <div>
          <img src={props.profile.photos.large} alt="avatar"/>
          <div className="about-me">{props.profile.aboutMe}</div>
          </div>
        <h2 className={s.my_posts}>My Posts</h2>
      </div>
    </div>
  );
};

export default ProfileInfo;
