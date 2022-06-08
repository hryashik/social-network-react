import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, changeTextAreaActionCreator} from "../../../redux/profile-reducer";

function MyPosts(props) {
   let postsArray = props.posts.map(el => (
      <Post message={el.text} key={el.id}/>
   ));

   function addPost() {
      props.dispatch(addPostActionCreator())
      console.log(props.posts)
   }

   function changeTextArea(event) {
      let text = event.target.value
      props.dispatch(changeTextAreaActionCreator(text));
   }

   return (
      <div className={s.posts}>
         <div>
            <textarea
               onChange={changeTextArea}
               className={s.textarea}
               value={props.textArea.value}
               cols="40"
               rows="3"
            ></textarea>
         </div>
         <div>
            <button className={s.button} onClick={addPost}>
               Add post
            </button>
         </div>
         <h3>My posts</h3>
         {postsArray}
      </div>
   );
}

export default MyPosts;
