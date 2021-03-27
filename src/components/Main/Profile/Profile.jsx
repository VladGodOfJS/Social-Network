import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.scss';

const Profile =()=>{
    return(
        <div className={s.profile}>
            <div className={s.bg}>
               <img className={s.img} src="https://cdn.wallpapersafari.com/37/37/PS5Wvy.jpg" alt="main-baground" />
            </div>
             <MyPosts/>
        </div>
    );
}


export default Profile;