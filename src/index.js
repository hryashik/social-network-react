import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

function rerenderEntireTree() {
   root.render(
      <BrowserRouter>
         <App state={store.getState()}
              dispatch={store.dispatch.bind(store)}
         />
      </BrowserRouter>
   );
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
