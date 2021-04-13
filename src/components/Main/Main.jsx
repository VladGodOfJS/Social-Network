import Leftbar from "./Leftbar/Leftbar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import Users from "./Users/Users";
import { Route } from "react-router-dom";
import s from "./Main.module.scss";


const Main=(props)=> {

  return (
    <div className={s.main}>
      <div className="container">
        <div className={s.inner}>
          <Leftbar  state={props.state.leftBarPage} />
          <div className={s.content_wrapp}>
             <Route path="/profile" render={()=> <Profile state={props.state.profilePage}/>}/>
             <Route path="/dialogs" render={()=> <Dialogs state={props.state.dialogsPage}/>}/>
             <Route path="/news"render={()=> <News/>}/>
             <Route path="/music" render={()=> <Music/>}/>
             <Route path="/settings" render={()=> <Settings/>}/>
             <Route path="/users" render={()=> <Users/>}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
