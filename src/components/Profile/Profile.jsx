import s from './Profile.module.css'
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
   return (
      <div className={s.content}>
         <Profileinfo/>
         <MyPostsContainer store={props.store}/>
      </div>
   )
}

export default Profile;