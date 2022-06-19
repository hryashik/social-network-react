const SET_AUTH_USER_DATA = 'SET_USER_DATA'
const SET_AUTH_USER_AVATAR = 'SET_AUTH_USER_AVATAR'

const initialState = {
   id: null,
   login: null,
   email: null,
   avatar: null,
   isAuth: false
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
      default:
         return state
   }
}

export default authReducer
export const setAuthUserData = (data) => ({type: SET_AUTH_USER_DATA, data: data})
export const setAuthUserAvatar = (url) => ({type: SET_AUTH_USER_AVATAR, url})