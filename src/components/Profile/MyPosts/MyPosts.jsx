import s from './MyPosts.module.css'
import Post from "./Post/Post";


function MyPosts() {
   let postsData = [
      {id: 1, text: 'My first post', likesCount: 1},
      {id: 2, text: 'Create by react', likesCount: 1},
      {id: 3, text: 'Bye', likesCount: 1},
   ];

   let postsArray = postsData.map(el => <Post message={el.text} key={el.id}/>)

   return (
      <div className={s.posts}>
         <h3>My posts</h3>
         <div>
            <textarea></textarea>
         </div>
         <div>
            <button>Add post</button>
         </div>
         {postsArray}
      </div>
   )
}

export default MyPosts;