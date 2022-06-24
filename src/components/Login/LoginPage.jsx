import s from './LoginPage.module.css'
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import Preloader from "../Commons/Preloader";

function LoginForm(props) {
   return (
      <form action="">
         <div className={s.wrapper}>
            <input className={s.input}
                   type="text"
                   placeholder={'Login'}/>
            <input className={s.input}
                   type="password"
                   placeholder={'Password'}/>
            <div className={s.bottomWrapper}>
               <label htmlFor="">
                  <input type="checkbox"
                         className={s.checkbox}/> Remember me
               </label>
               <button className={s.button}>Login</button>
            </div>
         </div>
      </form>
   )
}

function LoginPage(props) {
   if (props.isFetchingStatus) {
      return (
         <Preloader/>
      )
   } else if (!props.isFetchingStatus && props.id) {
      return (
         <Navigate to={`/profile/${props.id}`}/>
      )
   }
   return (
      <div>
         <LoginForm/>
      </div>
   )
}

function mapStateToProps(state) {
   return {
      isAuth: state.auth.isAuth,
      id: state.auth.id,
      isFetchingStatus: state.auth.isFetchingStatus
   }
}
export default connect(mapStateToProps)(LoginPage)