import s from './User.module.css'
import {NavLink} from "react-router-dom";


export function User(props) {
   return (
      <div className={s.wrapper}>
         <div className={s.avatarSection}>
            <NavLink to={'/profile/' + props.id}>
               <img className={s.avatar} src={props.imgUrl} alt=":(("/>
            </NavLink>
            <button className={s.button}
                    disabled={props.isFollowingFetching}
                    onClick={() => {
                       props.followed ? props.unfollowUser(props.id) : props.followUser(props.id)
                    }}
            >{props.followed ? 'unfollow' : 'follow'}
            </button>
         </div>
         <div className={s.contentSection}>
            {props.name}
         </div>
      </div>
   )
}