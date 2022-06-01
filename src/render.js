import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {addMessage, addPost, updateTextAreaState} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

export function rerenderEntireTree(state) {
   root.render(
      <BrowserRouter>
         <App state={state}
              addPost={addPost}
              addMessage={addMessage}
              updateTextAreaState={updateTextAreaState}
         />
      </BrowserRouter>
   );
}

