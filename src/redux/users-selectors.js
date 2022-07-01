import {createSelector} from "reselect";

export const getUsersArray = state => {
  return state.usersPage.users
}
export const getUsersFilteredArray = createSelector(getUsersArray, (users) => {
   return users.filter(u => true)
})
export const getPageSize = state => state.usersPage.pageSize
export const getTotalUsersCount = state => state.usersPage.totalUsersCount
export const getCurrentPage = state => state.usersPage.currentPage
export const getIsFetching = state => state.usersPage.isFetching
export const getIsAuth = state => state.auth.isAuth
export const getIsFollowingFetching = state => state.usersPage.isFollowingFetching