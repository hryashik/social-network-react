import {connect} from "react-redux";
import {getUsers, followSuccess, unfollowSuccess} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Commons/Preloader";
import {getProfile} from "../../redux/profile-reducer";
import {
   getCurrentPage,
   getIsAuth,
   getIsFetching, getIsFollowingFetching,
   getPageSize,
   getTotalUsersCount,
   getUsersFilteredArray
} from "../../redux/users-selectors";

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
      usersArray: getUsersFilteredArray(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      isAuth: getIsAuth(state),
      isFollowingFetching: getIsFollowingFetching(state)
   }
}

export default connect(mapStateToProps, {
   getUsers,
   followSuccess,
   unfollowSuccess,
   getProfile
})(UsersContainer)