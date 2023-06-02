import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify'

import store from './store/store'

import App from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          closeOnClick
          pauseOnHover={false}
          theme="dark"
        /> */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
