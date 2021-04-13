import { NavLink } from 'react-router-dom';
import s from './ShowDialogsName.module.scss';


const ShowDialogsName=(props)=>{
    let path ="/dialogs/"+ props.id;
  return(
    <div className={s.name + ' ' + s.active}>
      <img className={s.img} src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg" alt="avatar"/>
      <NavLink className={s.link} activeClassName={s.active} to={path}>{props.name}</NavLink></div>
  );
}


export default ShowDialogsName