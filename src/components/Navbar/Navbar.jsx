import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";



function Navbar() {
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <NavLink className={(data) => data.isActive ? s.active : ''} to="/profile">Profile</NavLink>
         </div>
         <div className={s.item}>
            <NavLink className={(data) => data.isActive ? s.active : ''} to="/dialogs">Messages</NavLink>
         </div>
         <div className={s.item}>
            <NavLink className={(data) => data.isActive ? s.active : ''} to="/news">News</NavLink>
         </div>
         <div className={s.item}>
            <NavLink className={(data) => data.isActive ? s.active : ''} to="/music">Music</NavLink>
         </div>
         <div className={s.item}>
            <NavLink className={(data) => data.isActive ? s.active : ''} to="/users">Users</NavLink>
         </div>
         <div className={s.item}>
            <NavLink className={(data) => data.isActive ? s.active : ''} to="/settings">Settings</NavLink>
         </div>
      </nav>
   )
}

export default Navbar