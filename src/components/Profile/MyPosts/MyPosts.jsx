import s from './MyPosts.module.css'
import Post from "./Post/Post";


function MyPosts() {
   return (
      <div className={s.posts}>
         My postssss
         <Post age='23'/>
         <Post/>
         <Post/>
         <Post/>
      </div>
   )
}

export default MyPosts;