import React from "react";
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.scss'; 
import ShowDialogsName from './ShowDialogsName/ShowDialogsName';
import ShowMessage from "./ShowMessage/ShowMessage";


const Dialogs =(props)=>{
    return(
        <div className={s.dialogs}>
           <div className={s.names_list}>
               <ShowDialogsName name="Vlad" id="1"/>
               <ShowDialogsName name="Diana" id="2"/>
               <ShowDialogsName name="Vova" id="3"/>
               <ShowDialogsName name="Vitaliy" id="4"/>
               <ShowDialogsName name="Dianochka" id="5"/>
               <ShowDialogsName name="Olexandr" id="6"/>
           </div>
           <div className={s.messages_list}>
               <ShowMessage message ="Hello friends"/>
               <ShowMessage message ="Коли спати?"/>
               <ShowMessage message ="How are you"/>
           </div>
        </div>
    );
}

export default Dialogs;
