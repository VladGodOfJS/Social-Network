import { NavLink } from 'react-router-dom';
import s from './ShowDialogsName.module.scss';


const ShowDialogsName=(props)=>{
    let path ="/dialogs/"+ props.id;
  return(
    <div className={s.name + ' ' + s.active}><NavLink to={path}>{props.name}</NavLink></div>
  );
}


export default ShowDialogsName