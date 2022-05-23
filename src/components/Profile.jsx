import s from './Profile.module.css'

function Profile() {
   return (
      <div className={s.content}>
         <div className={s.profile_image}>
         </div>
         <div>
            Ava + description
         </div>
         <div className={s.posts}>
            My posts
            <div className={s.item}>
               Post  1
            </div>
            <div className={s.item}>
               Post  2
            </div>
         </div>
      </div>
   )
}

export default Profile;