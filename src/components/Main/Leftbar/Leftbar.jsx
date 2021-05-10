import s from'./Leftbar.module.scss';
import React from 'react';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends';

const Leftbar =(props)=>{
    return(
       <div className={s.leftbar}>
           <ul className={s.nav} >
               <li className={s.item} >
                  <NavLink className={s.link} activeClassName={s.active}  to="/profile">Profile</NavLink>
               </li>
               <li className={s.item}  > <NavLink className={s.link}  activeClassName={s.active} to="/dialogs"> Message</NavLink> </li>
               <li className={s.item} > <NavLink className={s.link} activeClassName={s.active} to="/news"> News</NavLink></li>
               <li className={s.item} ><NavLink className={s.link} activeClassName={s.active} to="/music"> Music</NavLink></li>
               <li className={s.item} ><NavLink className={s.link} activeClassName={s.active} to="/settings"> Settings</NavLink></li>

           </ul>
           <Friends store={props.store}/>
       </div>
    );
}


export default Leftbar;