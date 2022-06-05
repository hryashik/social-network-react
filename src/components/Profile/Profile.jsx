import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";

function Profile(props) {
   return (
      <div className={s.content}>
         <Profileinfo/>
         <MyPosts posts={props.profilePage.posts}
                  textArea={props.profilePage.textAreaInput}
                  dispatch={props.dispatch}/>
      </div>
   )
}

export default Profile;