import s from './LoginPage.module.css'
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import Preloader from "../Commons/Preloader";

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
         <div className={s.wrapper}>
            <input className={s.input}
                   type="text"
                   placeholder={'Login'}/>
            <input className={s.input}
                   type="password"
                   placeholder={'Password'}/>
            <button>Login</button>
         </div>
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