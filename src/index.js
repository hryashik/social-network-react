import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import state, {addMessage, addPost, subscribe, updateTextAreaState, updateTextAreaStateDialogs} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

function rerenderEntireTree() {
   root.render(
      <BrowserRouter>
         <App state={state}
              addPost={addPost}
              addMessage={addMessage}
              updateTextAreaState={updateTextAreaState}
              updateTextAreaStateDialogs={updateTextAreaStateDialogs}
         />
      </BrowserRouter>
   );
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)
