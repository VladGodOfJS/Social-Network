import React from "react";
import s from "./Dialogs.module.scss";
import ShowDialogsName from "./ShowDialogsName/ShowDialogsName";
import ShowMessage from "./ShowMessage/ShowMessage";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormControls/FormControls";
import { required } from "../../../utils/validators/validators";
import { maxLengthCreator } from "../../../utils/validators/validators";
let maxLength15 = maxLengthCreator(15);

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.names.map((el) => (
    <ShowDialogsName name={el.name} id={el.id} key={el.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((el) => (
    <ShowMessage text={el.text} id={el.id} key={el.id} />
  ));



  // if(!props.isAuth){
  //   return <Redirect to={'/login'}/>
  // }

  const addNewDialog=(values)=>{
       props.addDialog(values.newDialogText);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.names_list}> {dialogsElements} </div>
      <div className={s.messages_wrapp}>
        <div> {messagesElements}</div>
        <div className={s.btn_wrapp}>
          <AddDialogFormRedux onSubmit={addNewDialog} />
        </div>
      </div>
    </div>
  );
};

const AddDialogForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} validate={[required,maxLength15]} name={"newDialogText"} placeholder={"Enter Text"}></Field>
      <button className={s.btn}>
        Submit
      </button>
    </form>
  );
};

let AddDialogFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddDialogForm);


export default Dialogs;
