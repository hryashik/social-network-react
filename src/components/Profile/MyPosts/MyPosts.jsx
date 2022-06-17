import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

function MyPosts(props) {
   let posts = props.postsArray.map(el => (<Post profilePhoto={props.getProfilePhoto} message={el.text} key={el.id}/>));
   function onButton() {
      props.addPost()
   }
   function onChangeTextArea(event) {
      let text = event.target.value
      props.changeTextArea(text);
   }

   return (
      <div className={s.posts}>
         <div>
            <textarea
               onChange={onChangeTextArea}
               className={s.textarea}
               value={props.textAreaValue}
               cols="40"
               rows="3"
            ></textarea>
         </div>
         <div>
            <button
               className={s.button}
               onClick={onButton}>
               Add post
            </button>
         </div>
         <h3>My posts</h3>
         {posts}
      </div>
   );
}

export default MyPosts;
