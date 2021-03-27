import s from'./Leftbar.module.scss';

const Leftbar =()=>{
    return(
       <div className={s.leftbar}>
           <ul className={s.nav} >
               <li className={s.item} ><a className={s.link} href="#">Profile</a></li>
               <li className={s.item} ><a  className={s.link} href="#" >Messages</a></li>
               <li className={s.item} ><a  className={s.link} href="#" >News</a></li>
               <li className={s.item} ><a  className={s.link} href="#" >Music</a></li>
           </ul>
       </div>
    );
}


export default Leftbar;