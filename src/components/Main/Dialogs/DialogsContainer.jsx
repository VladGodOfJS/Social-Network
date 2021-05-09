import React from "react";
import Dialogs from "./Dialogs";
import {
  addDialogActionCreator,
  changeDialogPostActionCreator,
} from "../../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
    
  const changeDialogPost = (textAreaValue) => {
    let action = changeDialogPostActionCreator(textAreaValue);
    props.store.dispatch(action);
  };

  const addDialog = () => {
    let action = addDialogActionCreator();
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      updateNewDialog={changeDialogPost}
      addDialog={addDialog}
      names={props.store.getState().dialogsPage.names}
      messages={props.store.getState().dialogsPage.messages}
      newDialogText={props.store.getState().dialogsPage.newDialogText}
    />
  );
};

export default DialogsContainer;
