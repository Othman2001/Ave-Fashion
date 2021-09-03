import React from 'react';
import ReactDOM from 'react-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import {Provider } from "react-redux"
import Store from "./state/store"
import AlertTemplate from 'react-alert-template-basic'
import App from './App'
// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}
ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
  <Provider store =  {Store}>
  
  <App />
</Provider>,
  </AlertProvider>,

  document.getElementById('root')
);
