import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";




function Navbar(props) {
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <NavLink className={(data) => data.isActive ? s.active : ''} to={'/profile/' + props.myId}>Profile</NavLink>
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
         <button onClick={() => props.logout()}>Logout</button>
      </nav>
   )
}

function mapStateToProps(state) {
   return {
      myId: state.auth.id
   }
}

export default connect(mapStateToProps, {logout})(Navbar)