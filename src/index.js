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

/*
МОЖНО ПРОКИНУТЬ STATE В РЕНДЕР ФУНКЦИЮ, ЧТОБЫ ПРОПСЫ БРАЛИСЬ ИЗ ПРОКИНУТОГО АРГУМЕНТА.
ТОГДА ПРИДЕТСЯ ОТРИСОВЫВАТЬ, ПЕРЕДАВАЯ СТЕЙТ. В SUBSCRIBE ПРИДЕТСЯ ТАКЖЕ ПЕРЕДАВАТЬ АРГУМЕНТ, ЧТОБЫ ПОДПИСЧИК
ОТРИСОВЫВАЛ ПО ПРИХОДЯЩЕМУ СТЕЙТУ. ПЕРВЫЙ ВАРИАНТ ПОКАЗАЛСЯ ИНТЕРЕСНЕЕ

function rerenderEntireTree(state) {
   root.render(
      <BrowserRouter>
         <App state={state}
              dispatch={store.dispatch.bind(store)}
         />
      </BrowserRouter>
   );
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
   let state = store.getState();
   rerenderEntireTree(state)
})*/
