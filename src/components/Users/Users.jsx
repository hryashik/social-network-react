import {User} from "./User/User";

function Users(props) {
   if (props.usersArray.length === 0) {
      props.setUsers([
         {id: 1, imgUrl: 'https://5mod.ru/uploads/posts/2020-09/1600495976_1600495958.png',
            followed: true, name: 'Dmitriy', status: 'hey yoYO', location: {city: 'Minsk', country: 'Belarus'}},
         {id: 2, imgUrl: 'https://5mod.ru/uploads/posts/2020-09/1600495976_1600495958.png',
            followed: false, name: 'Alex', status: 'fufufufu', location: {city: 'Moscow', country: 'Russia'}},
         {id: 3, imgUrl: 'https://5mod.ru/uploads/posts/2020-09/1600495976_1600495958.png',
            followed: false, name: 'Pavel', status: 'hey yoYO', location: {city: 'Saint-Petersburg', country: 'Russia'}},
         {id: 4, imgUrl: 'https://5mod.ru/uploads/posts/2020-09/1600495976_1600495958.png',
            followed: true, name: 'Boris', status: 'hey yoYO', location: {city: 'Krasnodar', country: 'Russia'}}
      ])
   }
   let users = props.usersArray.map(u => <User name={u.name}
                                               id={u.id}
                                               followed={u.followed}
                                               imgUrl={u.imgUrl}
                                               key={u.id}
                                               follow={props.follow}
                                               unfollow={props.unfollow}/>
   )
   return (
      <div>
         {users}
      </div>
   )
}

export default Users