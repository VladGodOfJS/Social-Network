import React from "react";
import Leftbar from "./Leftbar/Leftbar";
import DialogsContainer from "./Dialogs/DialogsContainer";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import UsersContainer from "./Users/UsersContainer";
import { Route } from "react-router-dom";
import s from "./Main.module.scss";
import ProfileContainer from "./Profile/ProfileContainer";


const Main=(props)=> {
  return (
    <div className={s.main}>
      <div className="container">
        <div className={s.inner}>
          <Leftbar  store={props.store} />
          <div className={s.content_wrapp}>
             <Route path="/profile/:userId?" render={()=> <ProfileContainer />}/>
             <Route path="/dialogs" render={()=> <DialogsContainer/>}/>
             <Route path="/news"render={()=> <News/>}/>
             <Route path="/music" render={()=> <Music/>}/>
             <Route path="/settings" render={()=> <Settings/>}/>
             <Route path="/users" render={()=> <UsersContainer/>}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
