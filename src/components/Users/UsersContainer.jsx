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
import {UsersAPI} from "../API/api";

class UsersContainer extends React.Component {
   componentDidMount() {
      if (this.props.usersArray.length === 0) {
         this.props.toggleFetching(true)
         // IMITATE LONG FETCHING
         setTimeout(() => {
            UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
               .then(response => {
                  this.props.setUsers(response.items)
                  this.props.toggleFetching(false)
                  /*this.props.setUsersTotalCount(response.data.totalCount)*/
               })
         }, 1500)
      }
   }

   onPageClick = (pageNumber) => {
      this.props.changeCurrentPage(pageNumber)
      this.props.toggleFetching(true)
      // IMITATE LONG FETCHING
      setTimeout(() => {
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
         })
            .then(response => {
               this.props.setUsers(response.data.items)
               this.props.toggleFetching(false)
            })
      }, 1500)
   }

   followUser = (userId) => {
      if (this.props.isAuth) {
         axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + userId, {}, {
            withCredentials: true,
            headers: {
               'API-KEY': '70c685fa-9017-4014-b32f-41d369f75c50'
            }
         })
            .then(response => {
               this.props.follow(userId)
            })
      }
   }
   unfollowUser = (userId) => {
      if (this.props.isAuth) {
         axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + userId, {
            withCredentials: true,
            headers: {
               'API-KEY': '70c685fa-9017-4014-b32f-41d369f75c50'
            }
         })
            .then(response => {
               this.props.unfollow(userId)
            })
      }

   }

   render() {
      return (
         <>
            {this.props.isFetching ? <div style={{position: 'absolute', top: '15%', left: '50%'}}><Preloader/></div> : null}
            <Users
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               usersArray={this.props.usersArray}
               currentPage={this.props.currentPage}
               onPageClick={this.onPageClick}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               isFetching={this.props.isFetching}
               followUser={this.followUser}
               unfollowUser={this.unfollowUser}
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
      isFetching: state.usersPage.isFetching,
      isAuth: state.auth.isAuth
   }
}

export default connect(mapStateToProps, {
   follow,
   unfollow,
   setUsers,
   changeCurrentPage,
   setUsersTotalCount,
   toggleFetching,
})(UsersContainer)