import "./App.scss";
import React from 'react';
import Main from "./components/Main/Main";
import HeaderContainer from "./components/Header/HeaderContainer";



function App(props) {
  return (

      <div className="app-wrapper">
        <HeaderContainer/>
        <Main state={props.state} dispatch={props.dispatch} store={props.store} />
      </div>
  );
}

export default App;
