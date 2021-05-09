import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';





 let rerendeEntieretree=(props)=>{
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()}  dispatch={store.dispatch.bind(store)} store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}




rerendeEntieretree(store.getState());

store.subscribe(()=>{
  let state = store.getState()
  rerendeEntieretree(state);
});
reportWebVitals();
