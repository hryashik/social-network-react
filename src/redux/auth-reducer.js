import {UsersAPI} from "../components/API/api";
import avatar from "../assets/1600495976_1600495958.png";

const SET_AUTH_USER_DATA = 'SET_USER_DATA'
const SET_AUTH_USER_AVATAR = 'SET_AUTH_USER_AVATAR'
const TOGGLE_FETCHING_STATUS = 'TOGGLE_FETCHING_STATUS'

const initialState = {
   id: null,
   login: null,
   email: null,
   avatar: null,
   isAuth: false,
   isFetchingStatus: false
}

function authReducer(state = initialState, action) {
   switch(action.type) {
      case SET_AUTH_USER_DATA:
         return {
            ...state,
            ...action.data,
            isAuth: true
         }
      case SET_AUTH_USER_AVATAR:
         return {
            ...state,
            avatar: action.url
         }
      case TOGGLE_FETCHING_STATUS:
         return {
            ...state,
            isFetchingStatus: action.value
         }
      default:
         return state
   }
}

export default authReducer

export function authMe() {
   return dispatch => {
      toggleFetchingStatus(true)
      UsersAPI.auth()
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(setAuthUserData(response.data.data))
               toggleFetchingStatus(false)
               let userId = response.data.data.id
               UsersAPI.getProfile(userId)
                  .then(response2 => {
                     let urlAvatar = response2.data.photos.large
                     dispatch(setAuthUserAvatar(urlAvatar || avatar))
                  })
            }
         })
   }
}

export const setAuthUserData = (data) => ({type: SET_AUTH_USER_DATA, data: data})
export const setAuthUserAvatar = (url) => ({type: SET_AUTH_USER_AVATAR, url})
const toggleFetchingStatus = (value) => ({type: TOGGLE_FETCHING_STATUS, value})