import s from './LoginPage.module.css'
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import Preloader from "../Commons/Preloader";
import {useForm} from "react-hook-form";
import {login} from "../../redux/auth-reducer";

function LoginPage(props) {
 if(props.isAuth) return <Navigate to={'/profile/' + props.id}/>

   return (
      <div>
         <LoginForm sendForm={props.login}/>
      </div>
   )
}

function LoginForm(props) {
   let {register, handleSubmit, reset, formState: {errors}} = useForm()

   function getDataForm(data) {
      props.sendForm(data)
      reset()
   }

   return (
      <div className={s.wrapper}>
         <form onSubmit={handleSubmit(getDataForm)}>
            <div className={s.wrapperItem}>
               <input placeholder={'Email'}
                      {...register('email', {
                         required: 'Email обязателен',
                         minLength: {
                            value: 6,
                            message: 'Не менее 6 символов'
                         }})}/>
               {errors?.email && <p>{errors.email.message}</p>}
            </div>
            <div className={s.wrapperItem}>
               <input type="password"
                      placeholder={'password'}
                      {...register('password', {
                         required: 'Пароль обязателен',
                         minLength: {
                            value: 3,
                            message: 'Не менее 3 символов'
                         }})}/>
               {errors?.password && <p>{errors.password.message}</p>}
            </div>
            <div className={s.bottomWrapper}>
               <label htmlFor="">
                  <input type="checkbox"
                         className={s.checkbox}
                         {...register('rememberMe')}/> Remember me
               </label>
               <button className={s.button}
                       type={"submit"}>Login
               </button>
            </div>
         </form>
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

export default connect(mapStateToProps, {login})(LoginPage)