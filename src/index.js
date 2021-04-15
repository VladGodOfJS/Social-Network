import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {rerendeEntieretree} from './render';
import state from './redux/state';







rerendeEntieretree(state);

reportWebVitals();
