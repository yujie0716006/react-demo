import React from 'react'
import reactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";

import App from './app'

reactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'))