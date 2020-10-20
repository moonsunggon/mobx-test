import React from "react";
import App from "./App";
import { Provider } from 'mobx-react';
import RootStore from './stores';
import ReactDOM from "react-dom";

const stores = new RootStore();
ReactDOM.render((
  <Provider {...stores}>
    <App />
  </Provider>
), document.getElementById('root'));

