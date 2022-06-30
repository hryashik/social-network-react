import {authMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

const initialState = {
   initialized: false
}

function appReducer(state = initialState, action) {
   switch(action.type) {
      case INITIALIZED_SUCCESS:
         return {
            ...state,
            initialized: true
         }
      default:
         return state
   }
}

const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export function initializeApp() {
   return (dispatch) => {
      let promise = dispatch(authMe())
      promise
         .then(() => {
            dispatch(initializedSuccess())
         })
   }
}

export default appReducer