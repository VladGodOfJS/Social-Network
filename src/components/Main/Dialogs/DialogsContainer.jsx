import React from "react";
import Dialogs from "./Dialogs";
import {
  addDialogActionCreator,
} from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newDialogText:state.dialogsPage.newDialogText,

  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addDialog: (newDialogText) => {
      let action = addDialogActionCreator(newDialogText);
      dispatch(action);
    },
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
  
)(Dialogs)

