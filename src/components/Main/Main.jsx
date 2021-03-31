import Leftbar from "./Leftbar/Leftbar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import { Route } from "react-router-dom";
import s from "./Main.module.scss";

function Main() {
  return (
    <div className={s.main}>
      <div className="container">
        <div className={s.inner}>
          <Leftbar />
          <div className={s.content_wrapp}>
             <Route path="/profile" component={Profile}/>
             <Route path="/dialogs" component={Dialogs}/>
             <Route path="/news" component={News}/>
             <Route path="/music" component={Music}/>
             <Route path="/settings" component={Settings}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
