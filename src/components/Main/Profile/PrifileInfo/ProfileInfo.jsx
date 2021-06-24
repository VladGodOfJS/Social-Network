import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
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
  
        <div className={s.info}>
        <div className={s.wrap_avatar}>
          <img className={s.ava} src={props.profile.photos.large} alt="avatar" />
          <a className={s.link} href={props.profile.contacts.facebook}>my page facebook</a>
        </div>

        <div className={s.job_status}>
        <p className={s.fullname}>{props.profile.fullName}</p>
        <ProfileStatus status={props.status} updateUserStatusThunkCreator={props.updateUserStatusThunkCreator} />
        <div className={s.status}>{props.profile.aboutMe}</div>
        <div className={s.border}></div>
      
          {props.profile.lookingForAJob === true ? (
            <img className={s.img_job}
              src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
              alt="men"
            />
          ) : (
            <img  className={s.img_job}
              src="https://as1.ftcdn.net/jpg/02/44/70/30/500_F_244703010_vYdL62triIFfjMH0dh8uAMATYhxKZhvK.jpg"
              alt="men"
            />
          )}
        </div>
        </div>
     
  
      </div>
    </div>
  );
};

export default ProfileInfo;
