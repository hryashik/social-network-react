const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const IS_FETCHING = 'IS_FETCHING'
const initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 100,
   currentPage: 1,
   isFetching: false
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
            users: action.users
         }
      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.pageNumber
         }
      case SET_USERS_TOTAL_COUNT:
         return {
            ...state,
            totalUsersCount: action.value
         }
      case IS_FETCHING:
         return {
            ...state,
            isFetching: action.value
         }
      default:
         return state
   }
}

export const follow = (userId) => ({type: FOLLOW, id: userId});
export const unfollow = (userId) => ({type: UNFOLLOW, id: userId});
export const setUsers = (users) => ({type: SET_USERS, users})
export const changeCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber: pageNumber})
export const setUsersTotalCount = (value) => ({type: SET_USERS_TOTAL_COUNT, value: value})
export const toggleFetching = (value) => ({type: IS_FETCHING, value: value})
export default usersReducer;