import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {LiveTiming} from './LiveTiming';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './context/context'
import { reducer } from './context/reducer'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={{selected:null, dropdown: "PAX"}} reducer={reducer} >
      <LiveTiming />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
