import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost ,updateNewPost,updateDialogPost,addNewDialog} from './redux/state';




export let rerendeEntieretree=(state)=>{
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPost={updateNewPost} updateDialogPost={updateDialogPost}  addNewDialog={ addNewDialog}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

