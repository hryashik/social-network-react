import {connect} from "react-redux";
import {
   changeCurrentPage,
   follow,
   toggleFetching,
   setUsers,
   setUsersTotalCount,
   unfollow
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Commons/Preloader";

class UsersContainer extends React.Component {
   componentDidMount() {
      if (this.props.usersArray.length === 0) {
         this.props.toggleFetching(true)
         // IMITATE LONG FETCHING
         setTimeout(() => {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
               .then(response => {
                  this.props.setUsers(response.data.items)
                  this.props.toggleFetching(false)
                  /*this.props.setUsersTotalCount(response.data.totalCount)*/
               })
         }, 2000)
      }
   }

   onPageClick = (pageNumber) => {
      this.props.changeCurrentPage(pageNumber)
      this.props.toggleFetching(true)
      // IMITATE LONG FETCHING
      setTimeout(() => {
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
               this.props.setUsers(response.data.items)
               this.props.toggleFetching(false)
            })
      }, 2000)
   }

   render() {
      return (
         <>
            {this.props.isFetching ? <div style={{position: 'absolute', top: '15%', left: '50%'}}><Preloader/></div> : null}
            <Users
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               usersArray={this.props.usersArray}
               currentPage={this.props.changeCurrentPage}
               onPageClick={this.onPageClick}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               isFetching={this.props.isFetching}
            />
         </>
      )
   }
}

function mapStateToProps(state) {
   return {
      usersArray: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching
   }
}

/*function mapDispatchToProps(dispatch) {
   return {
      follow(userId) {
         dispatch(followAC(userId))
      },
      unfollow(userId) {
         dispatch(unfollowAC(userId))
      },
      setUsers(users) {
         dispatch(setUsersAC(users))
      },
      changeCurrentPage(pageNumber) {
         dispatch(setCurrentPageAC(pageNumber))
      },
      setUsersTotalCount(value) {
         dispatch(setUsersTotalCountAC(value))
      },
      isFetching(value) {
         dispatch(isFetchingAC(value))
      }
   }
}*/

export default connect(mapStateToProps, {
   follow,
   unfollow,
   setUsers,
   changeCurrentPage,
   setUsersTotalCount,
   toggleFetching,
})(UsersContainer)