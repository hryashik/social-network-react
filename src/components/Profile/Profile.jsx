import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";

function Profile(props) {
   return (
      <div className={s.content}>
         <Profileinfo/>
         <MyPosts posts={props.profilePage.posts}
                  addPost={props.addPost}
                  textArea={props.profilePage.textAreaInput}
                  updateTextAreaState={props.updateTextAreaState}/>
      </div>
   )
}

export default Profile;