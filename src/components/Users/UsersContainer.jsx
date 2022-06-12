import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

function mapStateToProps(state) {
   return {
      usersArray: state.usersPage.users
   }
}function mapDispatchToProps(dispatch) {
   return {
      follow(userId) {
         dispatch(followAC(userId))
      },
      unfollow(userId) {
         dispatch(unfollowAC(userId))
      },
      setUsers(users) {
         dispatch(setUsersAC(users))
      }
   }
}

export default UsersContainer;