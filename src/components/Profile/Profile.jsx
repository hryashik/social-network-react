import s from './Profile.module.css'
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
   return (
      <div className={s.content}>
         <Profileinfo profile={props.profile}/>
         <MyPostsContainer/>
      </div>
   )
}

export default Profile;