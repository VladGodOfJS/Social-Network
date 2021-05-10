import React from "react";
import s from "./Dialogs.module.scss";
import ShowDialogsName from "./ShowDialogsName/ShowDialogsName";
import ShowMessage from "./ShowMessage/ShowMessage";


const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.names.map((el) => (
    <ShowDialogsName name={el.name} id={el.id} key={el.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((el) => (
    <ShowMessage text={el.text} id={el.id} key={el.id} />
  ));

  const textArea= React.createRef();

  const changeDialogPost=()=>{  
    let textAreaValue =textArea.current.value;
    props.updateNewDialog(textAreaValue);
  }
  
  const onAddDialog=()=>{
    props.addDialog();
  }
 
  return (
    <div className={s.dialogs}>
      <div className={s.names_list}> {dialogsElements} </div>
      <div className={s.messages_wrapp}>
        <div> {messagesElements}</div>
        <div className={s.btn_wrapp}>
          <textarea onChange={changeDialogPost} ref={textArea}
            className={s.textarea}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter text"
            value={props.newDialogText}
          ></textarea>
          <button className={s.btn} onClick={onAddDialog}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
