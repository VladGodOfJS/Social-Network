import React from "react";
import Dialogs from "./Dialogs";
import {
  addDialogActionCreator,
  changeDialogPostActionCreator,
} from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newDialogText:state.dialogsPage.newDialogText,

  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addDialog: () => {
      let action = addDialogActionCreator();
      dispatch(action);
    },
    updateNewDialog: (textAreaValue) => {
      let action = changeDialogPostActionCreator(textAreaValue);
      dispatch(action);
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
