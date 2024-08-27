// import React,{ StrictMode } from 'react'
import{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import router from "./router/index.js";
// import {RouterProvider} from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux";
import 'normalize.css'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        {/*<RouterProvider router={router} />*/}
        <App />
    </Provider>
  </StrictMode>,
)
