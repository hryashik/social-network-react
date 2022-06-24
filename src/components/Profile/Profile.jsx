import s from './Profile.module.css'
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
   return (
      <div className={s.content}>
         <Profileinfo profile={props.profile}
                      profileStatus={props.profileStatus}
                      updateStatus={props.updateStatus}/>
         <MyPostsContainer/>
      </div>
   )
}

export default Profile;