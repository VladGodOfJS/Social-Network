import { NavLink } from 'react-router-dom';
import s from './Friends.module.scss';
import ShowFriendname from './ShowFriendName/ShowFriendsName';



const Friends =(props)=>{
  
    let friendsElements = props.state.friends.map(item=>{
        return  <ShowFriendname name={item.name} url={item.url}/>
    })

 
    
    return(
        <div className={s.friends}>
         <NavLink className={s.title_link} to="/users">Friends</NavLink>
         <div className={s.names_wrapp}>
         {friendsElements}
                  </div>
         
        </div>
    );
}

export default Friends;