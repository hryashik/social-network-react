import {connect} from "react-redux";
import {getUsers, followSuccess, unfollowSuccess} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Commons/Preloader";
import {getProfile} from "../../redux/profile-reducer";

class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
   }

   onPageClick = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize)
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
               isFetching={this.props.isFetching}
               followUser={this.props.followSuccess}
               unfollowUser={this.props.unfollowSuccess}
               isFollowingFetching={this.props.isFollowingFetching}
               getProfile={this.props.getProfile}
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
      isAuth: state.auth.isAuth,
      isFollowingFetching: state.usersPage.isFollowingFetching
   }
}

export default connect(mapStateToProps, {
   getUsers,
   followSuccess,
   unfollowSuccess,
   getProfile
})(UsersContainer)