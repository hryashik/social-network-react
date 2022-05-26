import s from './Header.module.css'

function Header() {
   return (
      <header className={s.header}>
         <img src="./logo.png" alt=""/>
      </header>
   )
}

export default Header;