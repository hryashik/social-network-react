import s from "./Users.module.css";
import React from "react";
import {User} from "./User/User";
import userPhoto from "../../assets/1600495976_1600495958.png";

function Users(props) {
   let users = props.usersArray.map(u => <User name={u.name}
                                               id={u.id}
                                               followed={u.followed}
                                               imgUrl={u.imgUrl === undefined ? userPhoto : u.imgUrl}
                                               key={u.id}
                                               follow={props.follow}
                                               unfollow={props.unfollow}/>)
   let totalPages = Math.ceil(props.totalUsersCount / props.pageSize)
   let pages = []
   for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
   }
   return (
      <div
         className={s.appWrapper}>
         {pages.map(p => <span key={p}
                               onClick={() => props.onPageClick(p)}
                               className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>)}
         <div style={props.isFetching ? {opacity: '20%'} : null}>
            {users}
         </div>
      </div>
   )
}

export default Users