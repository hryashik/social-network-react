import {ProfileAPI} from "../components/API/api";

const SET_DEFAULT_STATE = 'SET_DEFAULT_STATE';
const ADD_POST = 'add-post';
const DELETE_POST = 'DELETE_POST'
const UPDATE_TEXT_AREA_POST = 'updateTextAreaPost';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_PHOTO = 'SET_PHOTO'
const initialState = {
   posts: [
      {id: 1, text: "My first post", likesCount: 1},
      {id: 2, text: "Create by react", likesCount: 1},
      {id: 3, text: "Bye", likesCount: 1},
   ],
   textAreaInput: {
      value: "",
   },
   profile: null,
   profileStatus: null,
}

function profileReducer(state = initialState, action) {
   switch(action.type) {
      case ADD_POST:
         let newPost = {
            id: Date.now(),
            text: state.textAreaInput.value,
            likesCount: 1,
         }
         state.posts.push(newPost)
         return {
            ...state,
            posts: [...state.posts],
            textAreaInput: {...state.textAreaInput, value: ''}

         }
      case DELETE_POST:
         return {...state, posts: state.posts.filter(post => post.id !== action.postId)}
      case UPDATE_TEXT_AREA_POST:
        return {
           ...state,
           textAreaInput: {...state.textAreaInput, value: action.text}

        }
      case SET_USER_PROFILE:
         return {...state, profile: action.profile}
      case SET_DEFAULT_STATE:
         return initialState
      case SET_STATUS:
         return {
            ...state,
            profileStatus: action.status
         }
      case SET_PHOTO:
         return {
            ...state,
            profile: {...state.profile, photos: {...action.object}}
         }
      default:
         return state
   }
}

export default profileReducer;
export const addPost = () => ({type: ADD_POST})
export const changeTextArea = (text) => ({type: UPDATE_TEXT_AREA_POST, text: text})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})
export const setDefaultState = () => ({type: SET_DEFAULT_STATE})
const setStatus = (text) => ({type: SET_STATUS, status: text})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
const setPhoto = (object) => ({type: SET_PHOTO, object})

export function getProfile(userId) {
   return dispatch => {
      ProfileAPI.getProfile(userId)
         .then(response => {
            ProfileAPI.getStatus(userId)
               .then(response2 => {
                  dispatch(setUserProfile(response.data))
                  dispatch(setStatus(response2))
               })

         })
   }
}

export function updateAvatar(file) {
   return dispatch => {
      ProfileAPI.updatePhoto(file)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(setPhoto(response.data.data.photos))
            }
         })
   }
}

export function updateStatus(text) {
   return dispatch => {
      ProfileAPI.putStatus(text)
         .then(response => {
            response.resultCode ? console.log(response) : dispatch(setStatus(text))
         })
   }
}