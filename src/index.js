import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import store from "./redux/store-redux";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <BrowserRouter>
      <Provider store={store}>
         <App store={store}/>
      </Provider>
   </BrowserRouter>
);

