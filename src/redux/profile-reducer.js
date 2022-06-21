import {UsersAPI} from "../components/API/api";

const SET_DEFAULT_STATE = 'SET_DEFAULT_STATE';
const ADD_POST = 'add-post';
const UPDATE_TEXT_AREA_POST = 'updateTextAreaPost';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const initialState = {
   posts: [
      {id: 1, text: "My first post", likesCount: 1},
      {id: 2, text: "Create by react", likesCount: 1},
      {id: 3, text: "Bye", likesCount: 1},
   ],
   textAreaInput: {
      value: "",
   },
   profile: null
}

function profileReducer(state = initialState, action) {
   let newState = JSON.parse(JSON.stringify(state));
   switch(action.type) {
      case ADD_POST:
         let newObj = {
            id: Date.now(),
            text: newState.textAreaInput.value,
            likesCount: 1,
         };
         newState.posts.push(newObj);
         console.log(newState.posts)
         newState.textAreaInput.value = "";
         return newState
      case UPDATE_TEXT_AREA_POST:
         newState.textAreaInput.value = action.text;
         return newState
      case SET_USER_PROFILE:
         return {...state, profile: action.profile}
      case SET_DEFAULT_STATE:
         return initialState
      default:
         return state
   }
}

export default profileReducer;
export const addPost = () => ({type: ADD_POST})
export const changeTextArea = (text) => ({type: UPDATE_TEXT_AREA_POST, text: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})
export const setDefaultState = () => ({type: SET_DEFAULT_STATE})

export function getProfile(userId) {
   return dispatch => {
      UsersAPI.getProfile(userId)
         .then(response => dispatch(setUserProfile(response.data)))
   }
}