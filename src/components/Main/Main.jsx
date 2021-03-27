import Leftbar from "./Leftbar/Leftbar";
import Profile from "./Profile/Profile";
import s from './Main.module.scss';

function Main() {
    return (
     <div className={s.main}>
          <div className="container">
             <div className={s.inner}>
             <Leftbar/>
              <Profile/>
             </div>
          </div>
     </div>
    );
  }
  
  export default Main;