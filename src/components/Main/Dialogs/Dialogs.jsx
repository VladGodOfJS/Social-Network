import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.scss";
import ShowDialogsName from "./ShowDialogsName/ShowDialogsName";
import ShowMessage from "./ShowMessage/ShowMessage";

const Dialogs = (props) => {
  let dialogsNameData = [
    {
      id: "1",
      name: "Vlad",
    },
    {
      id: "2",
      name: "Diana",
    },
    {
      id: "3",
      name: "Vova",
    },
    {
      id: "4",
      name: "Vitaliy",
    },
    {
      id: "5",
      name: "Dianochka",
    },
    {
      id: "6",
      name: "Sasha",
    },
  ];
  let messagesData = [
    { id: "1", text: "Hello friend" },
    { id: "2", text: "Коли спати" },
    { id: "3", text: "I am ok" },
    { id: "4", text: "See you later" },
    { id: "5", text: "Ky" },
    { id: "6", text: "Give me money" },
  ];

  let dialogsElements = dialogsNameData.map(el=><ShowDialogsName name={el.name} id={el.id} key={el.id}/>);
  let messagesElements = messagesData.map(el=> <ShowMessage text={el.text} id={el.id}  key={el.id}/>)
  return (
    <div className={s.dialogs}>
      <div className={s.names_list}>   {dialogsElements} </div>
      <div className={s.messages_list}> {messagesElements}</div>
    </div>
  );
};

export default Dialogs;
