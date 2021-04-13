import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.scss";
import ShowDialogsName from "./ShowDialogsName/ShowDialogsName";
import ShowMessage from "./ShowMessage/ShowMessage";

const Dialogs = (props) => {
 
  let dialogsElements = props.state.names.map(el=><ShowDialogsName name={el.name} id={el.id} key={el.id}/>);
  let messagesElements = props.state.messages.map(el=> <ShowMessage text={el.text} id={el.id}  key={el.id}/>)
  return (
    <div className={s.dialogs}>
      <div className={s.names_list}>   {dialogsElements} </div>
      <div className={s.messages_list}> {messagesElements}</div>
    </div>
  );
};

export default Dialogs;
