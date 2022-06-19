import s from './Header.module.css'

function Header(props) {
   return (
      <header className={s.header}>
         <img src="./logo.png" alt=""/>
         <div className={s.loginWrapper}>
            <div className={s.login}>{props.userLogin || 'Sign in'}</div>
            <img className={s.avatar} src={props.avatar} alt=""/>

         </div>

      </header>
   )
}

export default Header;