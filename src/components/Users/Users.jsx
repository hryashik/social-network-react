import React from "react";
import axios from "axios";
import {User} from "./User/User";
import userPhoto from "../../assets/1600495976_1600495958.png";

/*TEST CLASS COMPONENT*/

class Users extends React.Component {
   componentDidMount() {
      if (this.props.usersArray.length === 0) {
         axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
               this.props.setUsers(response.data.items)
            })
      }
   }
   get users() {
      return this.props.usersArray.map(u => <User name={u.name}
                                           id={u.id}
                                           followed={u.followed}
                                           imgUrl={u.imgUrl === undefined ? userPhoto : u.imgUrl}
                                           key={u.id}
                                           follow={this.props.follow}
                                           unfollow={this.props.unfollow}/>
      )
   }

   render() {
      return (
         <div>
            <button onClick={this.getUsers}>Get users</button>
            {this.users}
         </div>
      )
   }
}

export default Users