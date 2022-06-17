import s from './User.module.css'
import {NavLink} from "react-router-dom";


export function User(props) {
   function onButtonClick() {
      if (props.followed) {
         props.unfollow(props.id)
      } else props.follow(props.id)
   }

   return (
      <div className={s.wrapper}>
         <div className={s.avatarSection}>
            <NavLink to={'/profile/' + props.id}>
               <img className={s.avatar} src={props.imgUrl} alt=":(("/>
            </NavLink>
            <button className={s.button}
                    onClick={onButtonClick}>{props.followed ? 'unfollow' : 'follow'}</button>
         </div>
         <div className={s.contentSection}>
            {props.name}
         </div>
      </div>
   )
}