import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import {applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import appReducer from "./app-reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: messagesReducer,
   usersPage: usersReducer,
   auth: authReducer,
   app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store