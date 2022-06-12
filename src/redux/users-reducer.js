const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const initialState = {
   users: [

   ]
}

function usersReducer(state = initialState, action) {
   switch(action.type) {
      case FOLLOW:
         return {
            ...state,
            users: [...state.users.map(user => {
               if (user.id === action.id) {
                  return {...user, followed: true}
               }
               return user
            })]
         }
      case UNFOLLOW:
         return {
            ...state,
            users: [...state.users.map(user => {
               if (user.id === action.id) {
                  return {...user, followed: false}
               }
               return user
            })]
         }
      case SET_USERS:
         return {
            ...state,
            users: [...state.users, ...action.users]
         }
      default:
         return state
   }
}

export const followAC = (userId) => ({type: FOLLOW, id: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, id: userId});
export const setUsersAC = (users) => ({type: SET_USERS, users})
export default usersReducer;