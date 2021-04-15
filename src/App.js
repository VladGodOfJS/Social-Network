import "./App.scss";
import React from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";

function App(props) {


  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Main state={props.state} addPost={props.addPost} updateNewPost={props.updateNewPost} updateDialogPost={props.updateDialogPost}  addNewDialog={props.addNewDialog}  />
      </div>
    </BrowserRouter>
  );
}

export default App;
