import React from 'react';
import ReactDOM from 'react-dom';

import {Provider } from "react-redux"
import Store from "./state/store"
import { Suspense , lazy} from  'react'
import App from './App'
ReactDOM.render(
  <Provider store =  {Store}>
          <App />
  </Provider>,
  document.getElementById('root')
);
