import s from './Navbar.module.css'

function Navbar() {
   return (
      <nav className={s.nav}>
         <div className={`${s.item} ${s.active}`}>
            <a href="http://localhost:3000/">Profile</a>
         </div>
         <div className={s.item}>
            <a href="http://localhost:3000/">Messages</a>
         </div>
         <div className={s.item}>
            <a href="http://localhost:3000/">News</a>
         </div>
         <div className={s.item}>
            <a href="http://localhost:3000/">Music</a>
         </div>
         <div className={s.item}>
            <a href="http://localhost:3000/">Settings</a>
         </div>
      </nav>
   )
}

export default Navbar