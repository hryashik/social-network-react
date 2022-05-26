import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";

function Profile() {
   return (
      <div className={s.content}>
         <Profileinfo/>
         <MyPosts/>
      </div>
   )
}

export default Profile;