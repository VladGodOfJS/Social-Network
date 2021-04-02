
import s from './ProfileInfo.module.scss';

const ProfileInfo=()=>{
    return(
        <div>
  <div className={s.bg}>
        <img
          className={s.img}
          src="https://cdn.wallpapersafari.com/37/37/PS5Wvy.jpg"
          alt="main-baground"
        />
      </div>
         <div className={s.profile_items}>
         <div>avatar + description</div>
      <h2 className={s.my_posts}>My Posts</h2>
         </div>
        </div>
    );
}

export default ProfileInfo;