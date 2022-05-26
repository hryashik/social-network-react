import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
   return (
      <div className={s.content}>
         <div className={s.profile_image}>
         </div>
         <div>
            Ava + description
         </div>
         <MyPosts/>
      </div>
   )
}

export default Profile;