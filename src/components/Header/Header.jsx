import s from './Header.module.css'
import logo from '../../assets/logo.png'

function Header(props) {
   return (
      <header className={s.header}>
         <img src={logo} alt=""/>
         <div className={s.loginWrapper}>
            <div className={s.login}>{props.userLogin || 'Sign in'}</div>
            <img className={s.avatar} src={props.avatar} alt=""/>

         </div>

      </header>
   )
}

export default Header;